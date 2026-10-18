export const BAKERY = {
  name: 'Happy Donuts',
  address: '1825 Maple Ave, Zanesville, OH 43701, United States',
  shortAddress: '1825 Maple Ave, Zanesville, OH',
  phone: '(740) 221-3151',
  phoneRaw: '+17402213151',
  email: 'mayana1689@gmail.com',
  hours: '5:00 AM – 2:00 PM Daily',
  hoursNote: 'Or until fresh stock runs out!',
  facebook: 'https://www.facebook.com/people/Happy-Donuts/100063586938907/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1825+Maple+Ave+Zanesville+OH',
  mapsEmbed:
    'https://www.google.com/maps?q=1825+Maple+Ave,+Zanesville,+OH+43701&output=embed',
  coords: { lat: 39.9801, lng: -82.0131 },
};

export const SLIDESHOW = [
  'https://images.unsplash.com/photo-1558972801-32c7cd1e6b3b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba9?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1509445156768-51c43c1a5b59?auto=format&fit=crop&w=1920&q=80',
];

export type MenuItem = {
  name: string;
  price: string;
  desc: string;
  image: string;
  tag?: string;
};

export const MENU: { category: string; emoji: string; items: MenuItem[] }[] = [
  {
    category: 'Fresh Donuts',
    emoji: '🍩',
    items: [
      {
        name: 'Glazed Donuts',
        price: '$1.50',
        desc: 'Soft, classic, and freshly glazed every morning. The timeless original that made us famous.',
        image:
          'https://images.unsplash.com/photo-1558972801-32c7cd1e6b3b?auto=format&fit=crop&w=800&q=80',
        tag: 'Bestseller',
      },
      {
        name: 'Chocolate Sprinkles',
        price: '$1.75',
        desc: 'Fluffy donut topped with rich milk chocolate and a generous shower of colorful sprinkles.',
        image:
          'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
        tag: 'Kids Favorite',
      },
      {
        name: 'Maple Bacon Donut',
        price: '$2.25',
        desc: 'The perfect savory-sweet blend with crispy bacon pieces layered over warm maple icing.',
        image:
          'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
        tag: 'Signature',
      },
      {
        name: 'Cinnamon Roll',
        price: '$2.50',
        desc: 'Jumbo rolled pastry baked with premium cinnamon spice and a swirl of sweet glaze.',
        image:
          'https://images.unsplash.com/photo-1597745037522-61f392d8c2cf?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    category: 'Breakfast & Savory',
    emoji: '🥯',
    items: [
      {
        name: 'Ham, Egg & Cheese Croissant',
        price: '$4.50',
        desc: 'Warm, flaky croissant layered with premium savory meats, a fresh folded egg, and melted cheese.',
        image:
          'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
        tag: 'Hearty',
      },
      {
        name: 'Regular & Jumbo Kolaches',
        price: '$3.25',
        desc: 'Smoked sausage wrapped snug in soft, sweet freshly-baked dough. A Zanesville breakfast staple.',
        image:
          'https://images.unsplash.com/photo-1608224255832-485f1c11b6b2?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    category: 'Donut Holes',
    emoji: '🕳️',
    items: [
      {
        name: 'Signature Glazed Donut Holes',
        price: '$3.00 / dozen',
        desc: 'Bite-sized clouds of pure sugary bliss. Perfect for sharing — if you can resist them all!',
        image:
          'https://images.unsplash.com/photo-1571375937879-dc30c36e0b3d?auto=format&fit=crop&w=800&q=80',
        tag: 'Shareable',
      },
    ],
  },
  {
    category: 'Drinks & Bakery Specials',
    emoji: '☕',
    items: [
      {
        name: 'Premium Hot Coffee',
        price: '$2.00',
        desc: 'Freshly brewed dark roast house blend. The perfect companion to your morning donut.',
        image:
          'https://images.unsplash.com/photo-1509082276028-04d8ad6a5b59?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Fruit Deep Dish Cream Cheese Cake',
        price: '$3.75',
        desc: 'Signature fluffy cake layered with rich cream cheese and fresh blueberry & apple filling.',
        image:
          'https://images.unsplash.com/photo-1565958011703-44f982938187?auto=format&fit=crop&w=800&q=80',
        tag: 'House Special',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    text: "The glazed donuts are literally the best I've ever had. Soft, warm, and absolutely melt in your mouth. We drive 30 minutes just for Happy Donuts!",
    rating: 5,
  },
  {
    name: 'James R.',
    text: 'Family-owned and you can taste the love in every bite. The maple bacon donut is a masterpiece. Service is always warm and welcoming.',
    rating: 5,
  },
  {
    name: 'Emily T.',
    text: "Their cream cheese cake is unreal. I bring a dozen to every office meeting and they're gone in minutes. A Zanesville treasure.",
    rating: 5,
  },
  {
    name: 'Marcus W.',
    text: 'Baked fresh every morning — you can tell. The kolaches are huge and packed with flavor. Best breakfast stop in town, hands down.',
    rating: 5,
  },
  {
    name: 'Alyssa K.',
    text: 'I love that they support local kids and Brave Beginnings. Amazing donuts AND an amazing heart. This is what community looks like.',
    rating: 5,
  },
  {
    name: 'Devon C.',
    text: 'Coffee is hot, donuts are fresh, and the staff treat you like family. Five AM open means I can grab breakfast before work. Perfect.',
    rating: 5,
  },
];

export const CHATBOT_QA: { q: string; a: string }[] = [
  {
    q: 'Where are you located?',
    a: "We're at 1825 Maple Ave, Zanesville, OH 43701, United States — right in the heart of Zanesville!",
  },
  {
    q: 'What are your hours?',
    a: "We're open daily from 5:00 AM to 2:00 PM — but come early, we close when fresh stock runs out!",
  },
  {
    q: 'Do you offer delivery?',
    a: "We're sorry, but we do NOT offer delivery. We do offer Dine-in and Takeout though — come say hi!",
  },
  {
    q: 'What do you sell?',
    a: 'Fresh handmade donuts, croissants, kolaches, donut holes, premium hot coffee, and our signature deep-dish fruit cream cheese cakes.',
  },
  {
    q: 'Are you family-owned?',
    a: 'Yes! Happy Donuts is proudly family-owned and operated, baking happiness in Zanesville since day one. Every customer is family here.',
  },
  {
    q: 'How can I contact you?',
    a: 'Call us at (740) 221-3151 or email mayana1689@gmail.com. We love hearing from our community!',
  },
];
