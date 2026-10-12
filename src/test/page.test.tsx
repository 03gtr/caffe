import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { App } from '../App';
import { render as renderServer } from '../entry-server';

describe('static (no-JS) markup', () => {
  const html = renderServer();

  it('contains every section and the menu content before hydration', () => {
    for (const id of ['top', 'menu', 'signature', 'story', 'takeaway', 'visit']) {
      expect(html).toContain(`id="${id}"`);
    }
    expect(html).toContain('بيدك،');
    expect(html).toContain('بطريقك.');
    expect(html).toContain('آيس لاتيه');
    expect(html).toContain('aria-valuenow="50"');
  });

  it('never renders live-looking contact details or offers while in concept mode', () => {
    expect(html).not.toMatch(/wa\.me|tel:|maps\.google|خصم|كوبون|\$|د\.ع/);
    expect(html).toContain('نموذج تصميمي');
  });

  it('never splits Arabic headings into letters', () => {
    // Every hero word span must hold a whole Arabic word, not a single letter.
    const words = [...html.matchAll(/class="hero__word"[^>]*>([^<]+)</g)].map((m) => m[1]);
    expect(words.length).toBeGreaterThan(2);
    for (const w of words) expect(w.replace(/[،.]/g, '').length).toBeGreaterThan(2);
  });
});

describe('accessibility (axe-core, structural rules)', () => {
  it('has no detectable violations', async () => {
    const { container } = render(<App />);
    const result = await axe.run(container, {
      // jsdom has no layout or computed colours; contrast is checked in the browser instead.
      rules: { 'color-contrast': { enabled: false } }
    });
    const summary = result.violations.map((v) => `${v.id}: ${v.nodes.length} node(s) — ${v.help}`);
    expect(summary).toEqual([]);
  }, 30000);
});
