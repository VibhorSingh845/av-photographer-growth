"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className={`navbar ${overlay ? "overlay" : "solid"}`}><div className="nav-inner"><Link className="brand" href="/" aria-label="AV Photographer Growth home"><span>AV</span><i />Photographer Growth</Link><button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button><nav className={open ? "open" : ""} aria-label="Primary navigation"><Link href="/" onClick={()=>setOpen(false)}>Home</Link><Link href="/#how-it-works" onClick={()=>setOpen(false)}>How It Works</Link><Link href="/#who-its-for" onClick={()=>setOpen(false)}>Who It&apos;s For</Link><Link href="/about" onClick={()=>setOpen(false)}>About</Link><Link className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Get Started</Link></nav></div></header>;
}

export function SectionIntro({ number, title }: { number: string; title: ReactNode }) { return <div className="section-intro reveal"><p className="eyebrow">{number} / The story</p><h2>{title}</h2></div>; }
export function PillLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) { return <Link className={`pill ${dark ? "pill-dark" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>; }

export function CTAForm({ buttonLabel = "Get Started" }: { buttonLabel?: string }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <form className="cta-form reveal" onSubmit={submit} aria-label="Photography business enquiry"><div className="form-grid"><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Phone / WhatsApp<input type="tel" name="phone" autoComplete="tel" /></label><label>Photography Business / Studio Name<input name="studio" autoComplete="organization" /></label><label>Website or Instagram<input type="url" name="website" placeholder="https://" /></label><label>Location<input name="location" autoComplete="address-level2" /></label><label className="full">Average Wedding Package / Budget Range<input name="package" /></label><label className="full">What would you like help with?<textarea name="message" rows={3} required /></label></div><button type="submit">{sent ? "Thank you — we'll be in touch" : buttonLabel}<span aria-hidden="true">↗</span></button><p className="form-note">Your details stay private. We&apos;ll only use them to respond to your enquiry.</p></form>;
}

export function Footer() { return <footer><div className="shell footer-inner"><Link className="brand" href="/"><span>AV</span><i />Photographer Growth</Link><div><a href="mailto:apoorv@avmedia.in.net">apoorv@avmedia.in.net</a><a href="https://www.instagram.com/avmedia.in">Instagram</a><a href="#">Privacy</a></div><p>© {new Date().getFullYear()} AV / Photographer Growth</p></div></footer>; }
