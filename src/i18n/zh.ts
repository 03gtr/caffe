import type { Messages } from './types';

export const zh: Messages = {
  meta: {
    title: 'STEAM & FROST — 外带饮品概念设计',
    description: '一家冷热饮品外带店的概念设计。名称、内容和图片仅用于演示。'
  },
  banner: {
    strong: '概念设计',
    long: '名称、标志、菜单和图片仅用于演示，正式上线前将替换为店铺的真实信息。',
    short: '内容和图片仅用于演示。',
    aria: '提示：概念设计'
  },
  skip: '跳到菜单',
  nav: {
    aria: '主导航',
    home: 'STEAM & FROST — 返回顶部',
    menu: '菜单',
    signature: '招牌',
    story: '理念',
    cta: '菜单',
    hot: '热',
    cold: '冷',
    language: '语言'
  },
  hero: {
    tag: '临时演示品牌',
    line1: '握在手里是暖的，',
    line2: '走在路上是凉的。',
    lede: '冷热饮品现点现做，随手带走。选好、取走，继续你的一天。',
    ctaMenu: '查看菜单',
    ctaSignature: '招牌饮品',
    factsAria: '店铺简介',
    facts: ['热饮', '冰饮', '仅限外带']
  },
  split: {
    aria: '对比热拿铁和冰拿铁',
    valueText: (hot, iced) => `热 ${hot}%，冰 ${iced}%`,
    hot: '热',
    iced: '冰',
    caption: '同一杯拿铁，两种心情。拖动分隔线，或使用方向键。',
    showHot: '热',
    showIced: '冰'
  },
  temp: { hot: '热', iced: '冰' },
  menu: {
    eyebrow: '菜单',
    title: '选择你的温度。',
    lede: '在热饮和冰饮之间切换，菜单会自动重新排列。',
    switchAria: '选择饮品温度',
    filters: { all: '全部', hot: '热饮', iced: '冰饮' },
    count: (filter, n) =>
      filter === 'hot' ? `显示 ${n} 款热饮` : filter === 'iced' ? `显示 ${n} 款冰饮` : `显示全部 ${n} 款饮品`,
    listAria: '饮品列表',
    note: '示例菜单：名称、描述和图片均为占位内容，价格将由店铺提供。'
  },
  signature: {
    eyebrow: '招牌',
    title: '从豆蔻的热气，到橙香的冰霜。',
    lede: '四杯饮品讲完整个理念。向下滑动，看页面随你一起降温。',
    strength: '浓度',
    sweetness: '甜度',
    scale: (max) => `/ ${max}`,
    profileNote: '示例口味数值',
    stories: {
      'cardamom-tea': '从杯中升起的热气是第一声问候。耐心煮好的茶，第一口之前就能闻到豆蔻香。',
      'cardamom-latte': '外带杯里的家的味道：豆蔻粉撒在浓缩咖啡上，牛奶打到如丝般顺滑。',
      'cold-brew': '慢下来的咖啡：低温冷萃，口感顺滑、色泽深沉、苦味很轻。',
      'orange-tonic': '汤力水的气泡、橙皮和浮在上面的浓缩咖啡——一杯像炎热一天结束时的味道。'
    }
  },
  story: {
    eyebrow: '理念',
    srTitle: '我们的理念：杯中见用心，路上更轻松',
    quote: '没有椅子，没有桌子。一个吧台，一个理念：把你的饮品做好，让你继续前行。',
    steps: [
      { title: '选择', text: '需要温暖时选热饮，需要提神时选冰饮。菜单简短清楚，不用纠结。' },
      { title: '现做', text: '每一杯都在下单后现做：精准萃取，牛奶温度刚好，冰块恰到好处。' },
      { title: '带走', text: '杯盖牢固，杯子顺手。我们不需要桌子——只需要你的下一站。' }
    ]
  },
  takeaway: {
    title: '为路上而做。',
    text: '不用等位，没有冗长的菜单。选好饮品，在吧台取走，让路途继续这个故事。',
    cta: '选择你的饮品'
  },
  visit: {
    eyebrow: '到店',
    title: '路过就来带一杯。',
    placeholderEyebrow: '预留区域',
    placeholderTitle: '店铺信息确认后将显示在这里',
    placeholderText: '为避免展示任何不真实的信息，本区域只会在收到店铺确认的信息后显示：',
    slots: ['地址和地图链接', '营业时间', '点单方式：WhatsApp、电话或外送链接', '价格和杯型'],
    address: '地址',
    hours: '营业时间',
    order: '点单',
    orderNow: '立即点单',
    whatsapp: 'WhatsApp',
    call: '致电'
  },
  footer: {
    notice:
      '本页面是向店主展示想法的概念设计。名称、标志、菜单、文案和图片均为临时内容；目前没有真实的价格、优惠或联系方式。',
    creditsSummary: '图片与技术致谢',
    photosLead: '图片来自 Unsplash，依据 Unsplash 许可：',
    tech: '动效：GSAP（GSAP Standard License）和 Lenis（MIT）。SloshGauge 和 Noise 组件来自 React Bits（MIT + Commons Clause）— © David Haz。'
  },
  drinks: {
    'cardamom-latte': { name: '豆蔻拿铁', desc: '浓缩咖啡与热牛奶，带一丝温暖的豆蔻香。' },
    'iced-latte': { name: '冰拿铁', desc: '浓缩咖啡倒在冰牛奶和冰块上——从不失手的经典。' },
    'cardamom-tea': { name: '豆蔻红茶', desc: '伊拉克风味慢煮红茶，加入豆蔻。' },
    'cold-brew': { name: '冷萃咖啡', desc: '低温冷萃的咖啡——顺滑，苦味很轻。' },
    espresso: { name: '浓缩咖啡', desc: '带金色油脂的浓缩一杯，给喜欢纯咖啡的人。' },
    'orange-tonic': { name: '橙香咖啡汤力', desc: '气泡汤力水和橙皮，冰上漂浮一份浓缩咖啡。' },
    cappuccino: { name: '卡布奇诺', desc: '绵密奶泡覆盖在平衡的浓缩咖啡上。' },
    'iced-matcha': { name: '冰抹茶', desc: '现打抹茶倒在冰牛奶上——两层分明，带淡淡青草香。' },
    mocha: { name: '摩卡', desc: '黑巧克力、浓缩咖啡和热牛奶。' },
    'iced-caramel': { name: '冰焦糖拿铁', desc: '黄油焦糖、浓缩咖啡和冰牛奶。' },
    'matcha-latte': { name: '抹茶拿铁', desc: '现打抹茶配热牛奶和轻盈奶泡。' },
    'citrus-tea': { name: '柑橘冰茶', desc: '冰茶配橙片和柠檬片——清新爽口。' }
  }
};
