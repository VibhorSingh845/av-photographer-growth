import Image from "next/image";
import { CTAForm, Footer, Navbar, PillLink, SectionIntro } from "@/components/site";

const steps = [
  ["01", "We Learn About Your Business", "We look at your work, your style, your location, your pricing and the type of weddings you want more of."],
  ["02", "We Get Your Work in Front of the Right Couples", "We put your photography in front of people who are more likely to appreciate your style and what you offer."],
  ["03", "You Start Getting More Opportunities", "The goal is to give you a more reliable source of new enquiries instead of depending entirely on referrals, Instagram or wedding directories."],
  ["04", "We Keep Improving It", "We look at what is working and keep improving the process over time."],
];

const testimonials = [
  ["SM", "Sarah Mitchell", "Wedding Photographer, United Kingdom", "Most of our bookings used to come through referrals, so there were always quiet periods. Having another reliable way for couples to find us has made a big difference."],
  ["DC", "Daniel Carter", "Wedding Photographer, United States", "We tried a couple of wedding platforms before, but they never really became a consistent source of enquiries. This has been a much better fit for the type of photography we offer."],
  ["RM", "Riya Mehta", "Wedding Photographer, India", "We had the work and the portfolio. The main problem was simply getting in front of enough of the right couples. That is what we wanted to solve."],
];

export default function Home() {
  return (
    <main>
      <Navbar overlay />
      <section className="hero cinematic" id="home">
        <Image src="/images/hero.png" alt="A creative professional working in a warm, cinematic studio" fill priority sizes="100vw" className="cover hero-image" />
        <div className="hero-shade" /><div className="grain" />
        <div className="shell hero-content reveal">
          <p className="eyebrow light">A considered approach to photographer growth</p>
          <h1>Get More of the Clients<br />You Actually Want to Shoot</h1>
          <div className="hero-support"><p>You already have the portfolio. You already know how to deliver great work.</p><p>The difficult part is making sure enough of the right couples find you.</p><p>We help established wedding photographers get their work in front of couples who value good photography, have the budget to invest, and are looking for the kind of work you create.</p></div>
          <div className="hero-action"><PillLink href="#how-it-works">See How It Works</PillLink><span>For established wedding photographers and studios</span></div>
        </div>
        <a className="scroll-cue" href="#story" aria-label="Scroll to the next section"><span>Scroll</span><i /></a>
      </section>

      <section className="section cream" id="story"><div className="shell">
        <div className="editorial-split"><SectionIntro number="01" title={<>Your Next Booking<br />Shouldn&apos;t Depend<br /><em>Only on Referrals</em></>} />
          <div className="prose reveal"><p>Most wedding photographers get a large part of their business through referrals, Instagram, word of mouth and wedding platforms.</p><p>And all of them can work.</p><p>The problem is that you don&apos;t control how many enquiries you get from them. Some months are busy. Some months are quiet.</p><p>You can have an amazing portfolio and still have no idea where your next few weddings are going to come from.</p><p>Wedding platforms can also be hit or miss. You pay to be listed, add your work and wait for couples to find you.</p><p>Your work deserves a more consistent way of reaching new couples.</p></div>
        </div><blockquote className="pull-quote reveal">“Your work deserves a more consistent way of reaching the couples who value it.”</blockquote>
      </div></section>

      <section className="image-break" aria-label="A cinematic pause"><Image src="/images/middle.png" alt="A sunlit editorial workspace viewed from above" fill sizes="100vw" className="cover" /><div className="image-break-label">The work is already there. Let the right people find it.</div></section>

      <section className="section black" id="approach"><div className="shell editorial-split align-center"><SectionIntro number="02" title={<>A Simpler Way<br /><em>to Get Discovered</em></>} /><div className="prose reveal"><p>We build a system around your photography, your location and the kind of couples you want to work with.</p><p>The goal is simple.</p><p>Get your work in front of more of the right people and create a more consistent flow of new enquiries.</p><PillLink href="#how-it-works">See How It Works</PillLink></div></div></section>

      <section className="section terracotta" id="how-it-works"><div className="shell">
        <div className="section-heading reveal"><p className="eyebrow">03 / The process</p><h2>How It Works</h2><p>A simple system built around the work you already create.</p></div>
        <div className="steps">{steps.map(([number, title, copy]) => <article className="step reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div></section>

      <section className="section cream" id="who-its-for"><div className="shell">
        <div className="for-intro editorial-split"><SectionIntro number="04" title={<>Built for photographers<br />who already know<br /><em>their craft.</em></>} /><div className="prose reveal"><p>This is for photographers who have already built a strong business and want to grow it further.</p></div></div>
        <div className="statements reveal"><p><span>01</span>You have a good portfolio.</p><p><span>02</span>You know your style.</p><p><span>03</span>You have experience shooting weddings.</p><p><span>04</span>You know the kind of couples you want to work with.</p><p><span>05</span>And you have room for more bookings.</p></div>
        <div className="for-closing reveal"><p>This is not about getting more people to simply look at your Instagram.</p><p>It is about getting more of the right people to discover your work.</p></div>
      </div></section>

      <section className="section black testimonials"><div className="shell">
        <div className="section-heading light reveal"><p className="eyebrow light">05 / In their words</p><h2>What Photographers Say</h2></div>
        <div className="testimonial-grid">{testimonials.map(([initials, name, role, quote]) => <figure className="testimonial reveal" key={name}><blockquote>“{quote}”</blockquote><figcaption><span className="initials">{initials}</span><span><strong>{name}</strong><small>{role}</small></span></figcaption></figure>)}</div>
        <p className="replace-note">Sample testimonial content — ready to replace with your client stories.</p>
      </div></section>

      <section className="section philosophy cream"><div className="shell philosophy-grid">
        <div className="reveal"><p className="eyebrow">06 / The philosophy</p><h2>Your Photography<br />Is Already <em>the Product</em></h2></div>
        <div className="manifesto reveal"><p>You don&apos;t need to change who you are as a photographer.</p><p>You don&apos;t need to be everywhere online.</p><p>You don&apos;t need to chase trends.</p><p className="accent-line">You need the right couples to see your work and understand why they should choose you.</p><p>That is what we focus on.</p></div>
      </div></section>

      <section className="final-cta cinematic" id="contact"><Image src="/images/footer.png" alt="A warm sunlit studio prepared for a conversation" fill sizes="100vw" className="cover footer-image" /><div className="footer-shade" /><div className="grain" />
        <div className="shell cta-grid"><div className="cta-copy reveal"><p className="eyebrow light">Begin a conversation</p><h2>Ready to Get More<br />of the Right <em>Enquiries?</em></h2><p>Tell us a little about your photography business and what you want to achieve.</p><small>No pressure. Just a conversation about your business.</small></div><CTAForm /></div>
      </section>
      <Footer />
    </main>
  );
}
