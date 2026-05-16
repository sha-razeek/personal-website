export interface GearItem {
  name: string;
  brand: string;
  category: 'Computing' | 'Display' | 'Peripherals' | 'Audio' | 'Storage' | 'Other';
  specs?: string;
  description?: string;
  link?: string;
}

export const myGear: GearItem[] = [
  {
    name: 'Mac Mini M4',
    brand: 'Apple',
    category: 'Computing',
    specs: 'M4 Chip, 512GB SSD',
    description: 'The powerhouse of the setup, delivering incredible performance in a compact form factor.',
  },
  {
    name: 'MateView 4K',
    brand: 'Huawei',
    category: 'Display',
    specs: '28.2-inch, 4K+ UHD, 3:2 Aspect Ratio',
    description: 'The primary display, known for its unique aspect ratio and incredible color accuracy.',
  },
  {
    name: 'S2216H',
    brand: 'Dell',
    category: 'Display',
    specs: '21.5-inch, Full HD, IPS',
    description: 'A reliable secondary monitor for keeping documentation and terminal windows visible.',
  },
  {
    name: 'MX Mechanical Mini for Mac',
    brand: 'Logitech',
    category: 'Peripherals',
    specs: 'Tactile Quiet Switches',
    description: 'A low-profile mechanical keyboard that provides a satisfying typing experience optimized for macOS.',
  },
  {
    name: 'Magic Mouse',
    brand: 'Apple',
    category: 'Peripherals',
    specs: 'Multi-Touch Surface',
    description: 'The classic gesture-based navigation tool for smooth scrolling and macOS control.',
  },
  {
    name: 'H1 Pro Headset',
    brand: 'Baseus',
    category: 'Audio',
    specs: 'Noise Cancelling, 70h Battery Life',
    description: 'Comfortable wireless headset for long focus sessions and clear audio.',
  },
  {
    name: 'SXS1000 1TB',
    brand: 'Kingston',
    category: 'Storage',
    specs: 'External SSD, USB 3.2 Gen 2',
    description: 'Blazing fast external storage for large project files and media assets.',
  },
];
