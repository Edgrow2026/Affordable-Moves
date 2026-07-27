import { ServiceItem, Testimonial, FAQItem, GalleryItem, BlogPost, CoverageArea } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'house-removals',
    title: 'Full House Removals',
    shortDesc: 'Comprehensive moving solutions for flats, houses, and countryside estates across the UK.',
    fullDesc: 'Our flagship house removal service takes the stress out of moving day. We supply floor covers, padded mattress bags, furniture blankets, and TV transit crates as standard.',
    iconName: 'Home',
    features: [
      'Dedicated Move Manager & Experienced 2-4 Man Crew',
      'Goods in Transit Cover up to £50,000 included',
      'Specialist furniture dismantle & reassembly',
      'Full floor, doorway & staircase protection',
      'Punctual arrival with GPS tracked Luton & 3.5t/7.5t vehicles'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £290'
  },
  {
    id: 'man-and-van',
    title: 'Man & Van Transport',
    shortDesc: 'Flexible, affordable transport for small flat moves, single items, and urgent deliveries.',
    fullDesc: 'Need a fast, cost-effective option for studio flats, student moves, or marketplace purchases? Our driver-assisted Man & Van service offers hourly or fixed rates.',
    iconName: 'Truck',
    features: [
      'Choice of 1, 2 or 3 active helpers',
      'Fully equipped with straps, tail lift & loading ramps',
      'Flexible booking slots (same day available)',
      'Ideal for IKEA pickups, single sofas & student relocations',
      'Transparent hourly or fixed job pricing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-91550f4a2422?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £45/hr'
  },
  {
    id: 'office-commercial',
    title: 'Office & Business Relocation',
    shortDesc: 'Minimized downtime commercial moves for offices, retail spaces, and tech hubs.',
    fullDesc: 'Keep your business running without interruption. We offer out-of-hours, evening, and weekend commercial moves complete with IT equipment crate packing.',
    iconName: 'Building2',
    features: [
      'Weekend & overnight move options to eliminate downtime',
      'Antistatic IT & server crate hire',
      'Desk dismantle, cable management & layout setup',
      'Confidential document & archive transport',
      'Risk Assessment & Method Statement (RAMS) provided'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £450'
  },
  {
    id: 'packing-materials',
    title: 'Professional Packing Service',
    shortDesc: 'Full house packing, fragile-only wrapping, and eco-friendly moving box supply.',
    fullDesc: 'Let our trained packers wrap and box your belongings the day before your move using double-walled heavy duty eco-boxes and acid-free tissue paper.',
    iconName: 'PackageCheck',
    features: [
      'Full packing or fragile-only options (china & glassware)',
      'Double-walled recyclable wardrobe & archive boxes',
      'Custom wooden crating for artwork & mirrors',
      'Unpacking & box recycling service available',
      'Saves 15+ hours of stressful preparation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £120'
  },
  {
    id: 'storage-solutions',
    title: 'Secure Short & Long Storage',
    shortDesc: '24/7 CCTV monitored climate-controlled storage units with direct collection.',
    fullDesc: 'Transitioning between properties or downsizing? We load directly into clean, secure storage containers at our nationwide facilities and redeliver when ready.',
    iconName: 'Warehouse',
    features: [
      'Flexible weekly or monthly rental terms',
      '24-Hour security surveillance & alarm systems',
      'Climate controlled dry units (10 sq ft to 200+ sq ft)',
      'Direct collection from your doorstep to container',
      'No deposit required for initial month'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £18/wk'
  },
  {
    id: 'long-distance',
    title: 'Long Distance & Nationwide',
    shortDesc: 'Dedicated door-to-door removals across England, Scotland, Wales, and Northern Ireland.',
    fullDesc: 'Relocating to another corner of the UK? Enjoy direct, dedicated vehicle transport with live GPS tracking so your items never mix with other loads.',
    iconName: 'MapPin',
    features: [
      'Dedicated vehicle & driver (no multi-drop delays)',
      'Real-time GPS tracking link provided',
      'Fixed transparent long-distance rates',
      'Overnight holding if key handover is delayed',
      'Free route breakdown & time planning'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800',
    startingPrice: 'From £380'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James Miller',
    location: 'Kensington, London to Bristol',
    moveDetails: '4-Bed Detached House Move',
    rating: 5,
    date: 'July 2026',
    quote: 'Affordable Moves were outstanding from initial estimate to final box unpacked! The crew arrived 10 minutes early, protected our oak flooring, and dismantled our heavy wardrobes effortlessly. Best removal experience we have ever had in the UK!',
    verified: true
  },
  {
    id: '2',
    name: 'David Croft',
    location: 'Manchester City Centre to Didsbury',
    moveDetails: '2-Bed Apartment Move',
    rating: 5,
    date: 'June 2026',
    quote: 'Incredible value for money. No hidden fees or sudden extra charges on moving day. The team wrapped our OLED TV in a custom transit crate and had everything loaded in under two hours. Highly recommended!',
    verified: true
  },
  {
    id: '3',
    name: 'Rebecca Vance (Vance Tech Hub)',
    location: 'Central Birmingham to Solihull',
    moveDetails: 'Office Relocation (35 Workstations)',
    rating: 5,
    date: 'June 2026',
    quote: 'We moved our entire IT office over a Saturday to avoid client interruption. The crew handled all monitor crates, desk frames, and server racks with extreme care. Monday morning we were 100% operational!',
    verified: true
  },
  {
    id: '4',
    name: 'Eleanor Radcliffe',
    location: 'Islington, London to Oxford',
    moveDetails: '3-Bed Terraced House + Packing',
    rating: 5,
    date: 'May 2026',
    quote: 'The packing service was worth every single penny. Two delightful packers came the day before, boxed up all my glassware and books with supreme care, and on move day everything went smoothly.',
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f1',
    category: 'pricing',
    question: 'How is the cost of my move calculated?',
    answer: 'Our pricing is transparent and calculated based on property size/volume of goods, distance between postcodes, access (floors/stairs/lifts), crew size required, and optional services like full packing or dismantle/reassembly. Use our Moving Cost Estimator on this site for an instant realistic guide.'
  },
  {
    id: 'f2',
    category: 'insurance',
    question: 'Are my personal belongings insured during transit?',
    answer: 'Yes! Every move with Affordable Moves includes up to £50,000 Goods in Transit cover and £5,000,000 Public Liability Insurance as standard. Additional cover limits can be arranged for high-value antiques or art collections.'
  },
  {
    id: 'f3',
    category: 'general',
    question: 'How far in advance should I book my move date?',
    answer: 'We recommend booking 2 to 4 weeks before your intended moving date, especially for Fridays and end-of-month peak periods. However, we also keep emergency vehicles available for short-notice or same-week moves!'
  },
  {
    id: 'f4',
    category: 'packing',
    question: 'Do you supply wardrobe boxes and packing materials?',
    answer: 'Yes! If you select our packing service or order a box bundle, we deliver double-walled heavy-duty boxes, wardrobe cartons with hanging rails, bubble wrap, tape, and acid-free wrapping paper directly to your door prior to move day.'
  },
  {
    id: 'f5',
    category: 'general',
    question: 'What happens if there is a delay in getting key handover?',
    answer: 'We understand estate agent key releases can sometimes be delayed on completion day. Our team provides key delay protection and will comfortably wait with your loaded vehicle until keys are released.'
  },
  {
    id: 'f6',
    category: 'general',
    question: 'Will your team disassemble and reassemble furniture?',
    answer: 'Yes! Our movers carry a full toolkit and can dismantle bed frames, dining tables, and wardrobes at your pickup location and reassemble them in your designated rooms at the new property.'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Fleet Vehicles',
    category: 'fleet',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    caption: 'Our clean, liveried Luton vans equipped with tail lifts and floor protection mats.'
  },
  {
    id: 'g2',
    title: 'Fragile China & Glass Packing',
    category: 'packing',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    caption: 'Individual acid-free tissue wrapping for delicate glassware and porcelain.'
  },
  {
    id: 'g3',
    title: 'Padded Furniture Transit Wraps',
    category: 'removals',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
    caption: 'Thick padded blankets and quilted covers securing sofas and wooden furniture.'
  },
  {
    id: 'g4',
    title: 'Climate Controlled Storage',
    category: 'storage',
    imageUrl: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800',
    caption: 'Spacious, dry, and CCTV-monitored storage containers available for short & long term.'
  },
  {
    id: 'g5',
    title: 'Commercial Office Transition',
    category: 'removals',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    caption: 'Systematic crate tagging and IT equipment handling for seamless business moves.'
  },
  {
    id: 'g6',
    title: 'Eco-Friendly Box Supplies',
    category: 'packing',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    caption: '100% recyclable double-walled cardboard boxes and biodegradable packing tape.'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Ultimate UK House Moving Checklist (8 Weeks Out)',
    category: 'Moving Checklist',
    readTime: '6 min read',
    date: 'July 15, 2026',
    summary: 'Stay organized during your property move with this step-by-step week-by-week timeline covering utility notifications, council tax transfers, and packing milestones.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    author: 'Mark Sterling, Head of Operations',
    content: [
      'Moving house in the UK involves numerous administrative tasks alongside physical packing. Following a clear timeline ensures nothing gets overlooked.',
      '8 Weeks Before: Start decluttering room by room. Sell or donate items you no longer need. Get written removal quotes from BAR-compliant companies like Affordable Moves.',
      '4 Weeks Before: Notify your local council tax office, water supplier, energy companies, and broadband provider. Order packing boxes and start boxing non-essential items.',
      '1 Week Before: Defrost freezer, pack an "Essential First Night Box" (kettle, mugs, chargers, toiletries, bedding), and confirm key release times with your conveyancer.'
    ]
  },
  {
    id: 'b2',
    title: 'How to Pack Fragile Antiques, China & Glassware Safely',
    category: 'Packing Tips',
    readTime: '4 min read',
    date: 'June 28, 2026',
    summary: 'Discover professional techniques used by master packers to safeguard delicate heirlooms, crystal, and artwork during transit.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    author: 'Elena Vance, Packing Specialist',
    content: [
      'Packing glassware and ceramics requires the right materials: double-walled boxes, acid-free packing tissue, and bubble wrap.',
      'Always pack plates vertically like vinyl records rather than stacking them flat. Vertical alignment absorbs shock far better during vehicle movement.',
      'Fill all hollow spaces inside teapots, vases, and wine glasses with crumpled paper before wrapping the exterior.'
    ]
  },
  {
    id: 'b3',
    title: '10 Money-Saving Hacks for a Low-Cost UK Relocation',
    category: 'Cost Guides',
    readTime: '5 min read',
    date: 'June 10, 2026',
    summary: 'Learn smart strategies to reduce your overall moving costs without sacrificing quality or peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-91550f4a2422?auto=format&fit=crop&q=80&w=800',
    author: 'David Hughes, Relocation Advisor',
    content: [
      'Timing matters: Mid-week moves (Tuesday-Thursday) often cost up to 20% less than peak Friday or weekend slots.',
      'Dismantle furniture yourself in advance if you have basic tools. This reduces total billable crew hours on moving day.',
      'Opt for a combined packing and moving package, which frequently offers bundled discounts over buying materials separately.'
    ]
  }
];

export const COVERAGE_AREAS_DATA: CoverageArea[] = [
  {
    region: 'Greater London & South East',
    cities: ['London (All Boroughs)', 'Guildford', 'Brighton', 'Reading', 'St Albans', 'Chelmsford'],
    postcodes: ['E1-E20', 'N1-N22', 'NW1-NW11', 'SE1-SE28', 'SW1-SW20', 'W1-W14', 'WC1-WC2', 'EC1-EC4', 'SL1-SL9', 'GU1-GU35'],
    hubAddress: '124 High Street, Kensington, London W8 4SG',
    isMainHub: true
  },
  {
    region: 'North West England',
    cities: ['Manchester', 'Liverpool', 'Chester', 'Preston', 'Bolton', 'Warrington'],
    postcodes: ['M1-M90', 'L1-L40', 'WA1-WA16', 'CH1-CH8', 'PR1-PR26', 'BL0-BL9'],
    hubAddress: 'Unit 4, Logistics Park, Trafford Park, Manchester M17 1EH'
  },
  {
    region: 'Midlands & Central',
    cities: ['Birmingham', 'Coventry', 'Leicester', 'Nottingham', 'Derby', 'Solihull'],
    postcodes: ['B1-B98', 'CV1-CV47', 'LE1-LE67', 'NG1-NG90', 'DE1-DE75'],
    hubAddress: '7 Industrial Way, Aston, Birmingham B6 4HA'
  },
  {
    region: 'South West England & Wales',
    cities: ['Bristol', 'Bath', 'Exeter', 'Cardiff', 'Swansea', 'Gloucester'],
    postcodes: ['BS1-BS49', 'BA1-BA22', 'EX1-EX39', 'CF10-CF99', 'SA1-SA99', 'GL1-GL50'],
    hubAddress: 'Avonmouth Trade Park, Bristol BS11 8AZ'
  },
  {
    region: 'Yorkshire & North East',
    cities: ['Leeds', 'Sheffield', 'York', 'Newcastle', 'Hull', 'Bradford'],
    postcodes: ['LS1-LS29', 'S1-S81', 'YO1-YO91', 'NE1-NE71', 'HU1-HU20'],
    hubAddress: 'Cross Green Distribution Center, Leeds LS9 0RA'
  },
  {
    region: 'Scotland & Borders',
    cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Carlisle'],
    postcodes: ['EH1-EH55', 'G1-G84', 'AB10-AB56', 'DD1-DD11', 'CA1-CA28'],
    hubAddress: 'Leith Transport Hub, Edinburgh EH6 7BD'
  }
];
