'use client';

import Link from 'next/link';


export default function LeftPortion() {
  return (
    <div className="leftPortion">
      <h1>JODHPUR</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Our Services</Link></li>
        <li><Link href="/portfolio">Our Portfolio</Link></li>
        <li><Link href="/news">Latest News</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
