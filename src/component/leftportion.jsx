'use client';

import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Latest News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
];

export default function LeftPortion() {
  return (
    <div className="leftPortion">
      <h1>JODHPUR</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
