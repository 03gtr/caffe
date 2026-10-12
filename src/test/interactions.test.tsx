import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Menu } from '../components/Menu';
import { SplitPour } from '../components/SplitPour';

const visibleCards = (list: HTMLElement) => within(list).getAllByRole('listitem', { hidden: true }).filter((li) => !li.hidden);

describe('Hot / Iced menu', () => {
  it('shows every drink first, then filters without needing animation', () => {
    render(<Menu />);
    const list = screen.getByRole('list', { name: 'قائمة المشروبات' });
    expect(visibleCards(list)).toHaveLength(12);

    fireEvent.click(screen.getByRole('radio', { name: /ساخن/ }));
    expect(screen.getByRole('radio', { name: /ساخن/ }).getAttribute('aria-checked')).toBe('true');
    const hot = visibleCards(list);
    expect(hot).toHaveLength(6);
    expect(hot.every((li) => li.className.includes('menu-card--hot'))).toBe(true);
    screen.getByText(/يعرض ٦ مشروبات ساخنة/);
  });

  it('is operable from the keyboard with a roving tabindex (RTL arrow order)', () => {
    render(<Menu />);
    const all = screen.getByRole('radio', { name: 'الكل' });
    expect(all.getAttribute('tabindex')).toBe('0');
    fireEvent.keyDown(all, { key: 'ArrowLeft' });
    const hot = screen.getByRole('radio', { name: /ساخن/ });
    expect(hot.getAttribute('aria-checked')).toBe('true');
    expect(hot.getAttribute('tabindex')).toBe('0');
    expect(document.activeElement).toBe(hot);
    fireEvent.keyDown(hot, { key: 'End' });
    expect(screen.getByRole('radio', { name: /مثلّج/ }).getAttribute('aria-checked')).toBe('true');
  });
});

describe('Split Pour', () => {
  it('renders a 50/50 static state and responds to the keyboard', () => {
    render(<SplitPour />);
    const slider = screen.getByRole('slider', { name: 'مقارنة اللاتيه الساخن والمثلّج' });
    expect(slider.getAttribute('aria-valuenow')).toBe('50');
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(slider.getAttribute('aria-valuenow')).toBe('55');
    expect(slider.getAttribute('aria-valuetext')).toBe('ساخن ٥٥٪، مثلّج ٤٥٪');
    fireEvent.keyDown(slider, { key: 'End' });
    expect(slider.getAttribute('aria-valuenow')).toBe('100');
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(slider.getAttribute('aria-valuenow')).toBe('95');
  });

  it('offers single-click alternatives to dragging', () => {
    render(<SplitPour />);
    fireEvent.click(screen.getByRole('button', { name: /المثلّج/ }));
    // Reduced-motion tier in tests: the change is instant.
    expect(screen.getByRole('slider').getAttribute('aria-valuenow')).toBe('12');
  });
});

describe('language switcher', () => {
  it('switches the whole page language and direction, and remembers the choice', async () => {
    const { App } = await import('../App');
    const { I18nProvider } = await import('../i18n/I18nProvider');
    render(
      <I18nProvider>
        <App />
      </I18nProvider>
    );
    const picker = screen.getByLabelText('اللغة') as HTMLSelectElement;
    expect(document.documentElement.dir).toBe('rtl');

    fireEvent.change(picker, { target: { value: 'en' } });
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    screen.getByRole('heading', { name: 'Pick your temperature.' });
    expect(localStorage.getItem('steam-frost-lang')).toBe('en');

    // LTR: the hot photo is on the left, so ArrowRight reveals more of it.
    const slider = screen.getByRole('slider', { name: 'Compare the hot and iced latte' });
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(slider.getAttribute('aria-valuenow')).toBe('55');
    expect(slider.getAttribute('aria-valuetext')).toBe('Hot 55%, iced 45%');

    fireEvent.change(screen.getByLabelText('Language'), { target: { value: 'ku' } });
    expect(document.documentElement.lang).toBe('ckb');
    expect(document.documentElement.dir).toBe('rtl');
    screen.getByRole('heading', { name: 'پلەی گەرمیی خۆت هەڵبژێرە.' });
    localStorage.clear();
  });
});
