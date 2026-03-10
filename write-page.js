const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pest Eraze Melbourne | #1 Same-Day Pest Control from $150</title>
<meta name="description" content="Melbourne's trusted pest control experts. Same-day service, 6-month guarantee, fully licensed & insured. Cockroaches, termites, rodents & more from $150.">
<link rel="canonical" href="https://pesteraze.com.au/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"><\/script>
<script>
tailwind.config={
  theme:{
    extend:{
      fontFamily:{sans:['Inter','system-ui','sans-serif']},
      colors:{
        brand:{50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e3a5f',900:'#0f2744',950:'#0a1929'},
        accent:{300:'#ffff4d',400:'#ffea00',500:'#ffd600',600:'#eab308'},
        cta:{500:'#f97316',600:'#ea580c',700:'#c2410c'}
      },
      animation:{
        'float':'float 6s ease-in-out infinite',
        'pulse-glow':'pulse-glow 2s ease-in-out infinite',
        'marquee':'marquee 30s linear infinite',
        'marquee-reverse':'marquee-reverse 25s linear infinite',
        'fade-up':'fade-up 0.6s ease-out forwards',
        'scale-in':'scale-in 0.5s ease-out forwards',
        'slide-right':'slide-right 0.5s ease-out forwards',
        'count-up':'count-up 2s ease-out forwards',
        'shimmer':'shimmer 2s ease-in-out infinite',
        'bounce-slow':'bounce 3s ease-in-out infinite',
        'notif-in':'notif-in 0.5s ease-out forwards',
        'notif-out':'notif-out 0.5s ease-in forwards'
      },
      keyframes:{
        float:{
          '0%,100%':{transform:'translateY(0)'},
          '50%':{transform:'translateY(-20px)'}
        },
        'pulse-glow':{
          '0%,100%':{boxShadow:'0 0 20px rgba(249,115,22,0.4)'},
          '50%':{boxShadow:'0 0 40px rgba(249,115,22,0.8)'}
        },
        marquee:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-50%)'}
        },
        'marquee-reverse':{
          '0%':{transform:'translateX(-50%)'},
          '100%':{transform:'translateX(0)'}
        },
        'fade-up':{
          from:{opacity:'0',transform:'translateY(30px)'},
          to:{opacity:'1',transform:'translateY(0)'}
        },
        'scale-in':{
          from:{opacity:'0',transform:'scale(0.8)'},
          to:{opacity:'1',transform:'scale(1)'}
        },
        'slide-right':{
          from:{opacity:'0',transform:'translateX(-30px)'},
          to:{opacity:'1',transform:'translateX(0)'}
        },
        shimmer:{
          '0%':{backgroundPosition:'-200% 0'},
          '100%':{backgroundPosition:'200% 0'}
        },
        'notif-in':{
          from:{opacity:'0',transform:'translateX(-100%)'},
          to:{opacity:'1',transform:'translateX(0)'}
        },
        'notif-out':{
          from:{opacity:'1',transform:'translateX(0)'},
          to:{opacity:'0',transform:'translateX(-100%)'}
        }
      }
    }
  }
};
<\/script>
<style>
*{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;overflow-x:hidden}
#scroll-progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#f97316,#ffd600);z-index:9999;transition:width .15s}
.glass{background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12)}
.glass-dark{background:rgba(15,39,68,0.85);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08)}
.gradient-text{background:linear-gradient(135deg,#f97316,#ffd600);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-gradient{background:linear-gradient(135deg,#0a1929 0%,#0f2744 40%,#1e3a5f 100%)}
.cta-btn{background:linear-gradient(135deg,#f97316,#ea580c);position:relative;overflow:hidden;transition:all .3s}
.cta-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left .5s}
.cta-btn:hover::before{left:100%}
.cta-btn:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(249,115,22,0.4)}
.reveal{opacity:0;transform:translateY(30px);transition:all 0.7s cubic-bezier(0.4,0,0.2,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
.card-hover{transition:all .3s cubic-bezier(0.4,0,0.2,1)}
.card-hover:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(0,0,0,0.12)}
.faq-answer{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(0.4,0,0.2,1)}
.faq-answer.open{max-height:500px}
.marquee-track{display:flex;gap:2rem;width:max-content}
.service-card{position:relative;overflow:hidden}
.service-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(37,99,235,0.05),rgba(249,115,22,0.05));opacity:0;transition:opacity .3s}
.service-card:hover::before{opacity:1}
.compare-row:nth-child(even){background:rgba(239,246,255,0.5)}
.stat-number{font-variant-numeric:tabular-nums}
.particle-canvas{position:absolute;inset:0;pointer-events:none}
@media(max-width:768px){
  .hero-form{position:relative!important;margin-top:2rem}
}
</style>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"LocalBusiness","name":"Pest Eraze","image":"https://pesteraze.com.au/logo.png","telephone":"+61416528547","email":"contact@pesteraze.com.au","address":{"@type":"PostalAddress","addressLocality":"Melbourne","addressRegion":"VIC","addressCountry":"AU"},"url":"https://pesteraze.com.au","priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"127"},"areaServed":{"@type":"City","name":"Melbourne"},"openingHours":"Mo-Su 07:00-20:00","sameAs":["https://www.facebook.com/p/Pest-Eraze-61577923252694/","https://www.instagram.com/pesteraze/","https://www.tiktok.com/@pest.eraze"]}
<\/script>
</head>
<body class="bg-white text-gray-800">
<!-- Scroll Progress -->
<div id="scroll-progress" style="width:0%"></div>

<!-- Header -->
<header id="site-header" class="fixed top-0 w-full z-50 transition-all duration-300" style="background:transparent">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cta-500 to-accent-500 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <div>
        <span class="text-xl font-bold text-white tracking-tight">Pest <span class="gradient-text">Eraze</span></span>
        <div class="text-[10px] text-blue-300 font-medium tracking-wider uppercase">Melbourne's #1 Pest Control</div>
      </div>
    </div>
    <div class="hidden md:flex items-center gap-6">
      <a href="tel:0416528547" class="flex items-center gap-2 text-white/90 hover:text-white transition font-medium">
        <svg class="w-5 h-5 text-cta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        0416 528 547
      </a>
      <a href="#lead-form" class="cta-btn text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-lg">Get Free Quote</a>
    </div>
    <a href="tel:0416528547" class="md:hidden cta-btn text-white font-bold px-4 py-2 rounded-full text-xs shadow-lg">Call Now</a>
  </div>
</header>

<!-- Urgency Bar -->
<div class="fixed top-[60px] w-full z-40 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white text-center py-1.5 text-xs md:text-sm font-semibold tracking-wide shadow-lg">
  <span class="animate-pulse inline-block mr-1">&#128680;</span>
  <span id="urgency-spots">7</span> same-day slots left today &mdash; Offer ends in <span id="countdown-timer" class="font-mono font-bold">02:00:00</span>
  <span class="animate-pulse inline-block ml-1">&#128680;</span>
</div>

<!-- Hero Section -->
<section class="hero-gradient relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
  <canvas id="particle-canvas" class="particle-canvas"></canvas>
  <!-- Decorative blobs -->
  <div class="absolute top-20 right-10 w-72 h-72 bg-cta-500/10 rounded-full blur-3xl animate-float"></div>
  <div class="absolute bottom-20 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-float" style="animation-delay:-3s"></div>

  <div class="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full">
    <!-- Left -->
    <div class="text-white">
      <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-accent-400 mb-6">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Trusted by 2,000+ Melbourne Homes
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
        Melbourne's Most Trusted
        <span class="gradient-text block mt-1">Pest Control Experts</span>
      </h1>
      <p class="text-lg md:text-xl text-blue-200/80 mb-8 max-w-lg leading-relaxed">
        Same-day service. 6-month guarantee. Fully licensed &amp; insured. We eliminate pests at the source &mdash; not just the symptoms.
      </p>
      <div class="flex flex-wrap gap-4 mb-8">
        <a href="#lead-form" class="cta-btn animate-pulse-glow text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl flex items-center gap-2">
          Get My Free Quote
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="tel:0416528547" class="glass text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 hover:bg-white/10 transition">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          0416 528 547
        </a>
      </div>
      <!-- Trust badges -->
      <div class="flex flex-wrap gap-6 items-center">
        <div class="flex items-center gap-2">
          <div class="flex -space-x-1">
            <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">&#9733;</div>
            <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">&#9733;</div>
            <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">&#9733;</div>
            <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">&#9733;</div>
            <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">&#9733;</div>
          </div>
          <span class="text-sm text-blue-200">4.9/5 (127+ reviews)</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-blue-200">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Fully Licensed &amp; Insured
        </div>
      </div>
    </div>

    <!-- Right: Lead Form -->
    <div id="lead-form" class="hero-form glass rounded-3xl p-8 shadow-2xl max-w-md mx-auto lg:mx-0 w-full">
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-2 bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-xs font-bold mb-3">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          FREE &mdash; No Obligation
        </div>
        <h2 class="text-2xl font-bold text-white">Get Your Free Quote</h2>
        <p class="text-blue-300 text-sm mt-1">Response within 30 minutes</p>
      </div>
      <form id="lead-form-1" onsubmit="return submitForm(event,'lead-form-1','form-ok-1')" class="space-y-4">
        <input type="hidden" name="access_key" value="2628fc63-2069-4661-8e18-34826cadb806">
        <input type="hidden" name="subject" value="New Pest Eraze Lead (Hero Form)">
        <div>
          <input name="name" required placeholder="Your Name *" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 focus:border-transparent transition">
        </div>
        <div>
          <input name="phone" type="tel" required placeholder="Phone Number *" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 focus:border-transparent transition">
        </div>
        <div>
          <input name="email" type="email" placeholder="Email (optional)" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 focus:border-transparent transition">
        </div>
        <div>
          <select name="pest_type" required class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-blue-300/80 focus:outline-none focus:ring-2 focus:ring-cta-500 transition appearance-none">
            <option value="">Select Pest Type *</option>
            <option value="General Pest">General Pest Treatment</option>
            <option value="Cockroaches">Cockroaches</option>
            <option value="Termites">Termites / White Ants</option>
            <option value="Rats & Mice">Rats &amp; Mice</option>
            <option value="Spiders">Spiders</option>
            <option value="Ants">Ants</option>
            <option value="Bed Bugs">Bed Bugs</option>
            <option value="Fleas">Fleas / End of Lease</option>
            <option value="Wasps & Bees">Wasps &amp; Bees</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea name="message" rows="2" placeholder="Address / details (optional)" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 focus:border-transparent transition resize-none"></textarea>
        </div>
        <button type="submit" class="w-full cta-btn animate-pulse-glow text-white font-bold py-4 rounded-xl text-lg shadow-xl flex items-center justify-center gap-2">
          Get My Free Quote Now
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </button>
        <p class="text-center text-blue-400/60 text-xs">&#128274; Your info is 100% secure &amp; never shared</p>
      </form>
      <div id="form-ok-1" class="hidden text-center py-8">
        <div class="text-5xl mb-4">&#9989;</div>
        <h3 class="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p class="text-blue-300">We'll call you within 30 minutes.</p>
      </div>
    </div>
  </div>
</section>

<!-- Trust Marquee -->
<div class="bg-brand-950 border-y border-brand-800/50 py-4 overflow-hidden">
  <div class="animate-marquee marquee-track">
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#9733;&#9733;&#9733;&#9733;&#9733; Rated 4.9/5 on Google</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#9989; Same-Day Service Available</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128170; 6-Month Re-Treatment Guarantee</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#127968; 2,000+ Homes Protected</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128176; From Just $150</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128272; Fully Licensed &amp; Insured</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#9733;&#9733;&#9733;&#9733;&#9733; Rated 4.9/5 on Google</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#9989; Same-Day Service Available</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128170; 6-Month Re-Treatment Guarantee</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#127968; 2,000+ Homes Protected</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128176; From Just $150</div>
    <div class="flex items-center gap-2 px-6 text-blue-400 text-sm font-medium whitespace-nowrap">&#128272; Fully Licensed &amp; Insured</div>
  </div>
</div>

<!-- Animated Stats -->
<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div class="reveal">
      <div class="text-4xl md:text-5xl font-black text-brand-900 stat-number" data-count="2000">0</div>
      <div class="text-sm text-gray-500 mt-2 font-medium">Homes Protected</div>
    </div>
    <div class="reveal" style="transition-delay:.1s">
      <div class="text-4xl md:text-5xl font-black text-brand-900 stat-number" data-count="127">0</div>
      <div class="text-sm text-gray-500 mt-2 font-medium">5-Star Reviews</div>
    </div>
    <div class="reveal" style="transition-delay:.2s">
      <div class="text-4xl md:text-5xl font-black text-brand-900 stat-number" data-count="6">0</div>
      <div class="text-sm text-gray-500 mt-2 font-medium">Month Guarantee</div>
    </div>
    <div class="reveal" style="transition-delay:.3s">
      <div class="text-4xl md:text-5xl font-black text-brand-900 stat-number" data-count="30">0</div>
      <div class="text-sm text-gray-500 mt-2 font-medium">Min Response Time</div>
    </div>
  </div>
</section>

<!-- Problem Agitation -->
<section class="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal">
      <span class="inline-block bg-red-100 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Don't Wait Until It's Too Late</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Every Hour You Delay, Pests Multiply</h2>
      <p class="text-gray-600 text-lg">Melbourne homes face serious health and financial risks from untreated pest infestations.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="reveal bg-white rounded-2xl p-8 shadow-lg border border-red-100 card-hover text-center">
        <div class="text-5xl mb-4">&#128027;</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">Cockroaches</h3>
        <p class="text-gray-600 mb-4">1 cockroach becomes <span class="font-bold text-red-600">400+ in months</span>. They carry E. coli, Salmonella, and trigger asthma in children.</p>
        <div class="text-red-600 font-bold text-sm">&#9888; Active in 87% of Melbourne homes</div>
      </div>
      <div class="reveal bg-white rounded-2xl p-8 shadow-lg border border-red-100 card-hover text-center" style="transition-delay:.1s">
        <div class="text-5xl mb-4">&#128029;</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">Termites</h3>
        <p class="text-gray-600 mb-4">Cause <span class="font-bold text-red-600">$100,000+ in damage</span> before you even notice. Not covered by most home insurance.</p>
        <div class="text-red-600 font-bold text-sm">&#9888; 1 in 3 Melbourne homes at risk</div>
      </div>
      <div class="reveal bg-white rounded-2xl p-8 shadow-lg border border-red-100 card-hover text-center" style="transition-delay:.2s">
        <div class="text-5xl mb-4">&#128000;</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">Rats &amp; Mice</h3>
        <p class="text-gray-600 mb-4">Carry <span class="font-bold text-red-600">35+ diseases</span>, chew through electrical wiring causing fires, and contaminate food.</p>
        <div class="text-red-600 font-bold text-sm">&#9888; Breed up to 12 pups every 3 weeks</div>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us Comparison -->
<section class="py-20 bg-white">
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal">
      <span class="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">The Clear Choice</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Why Melbourne Chooses Pest Eraze</h2>
    </div>
    <div class="reveal rounded-2xl overflow-hidden shadow-xl border border-gray-100">
      <table class="w-full text-sm md:text-base">
        <thead>
          <tr class="bg-brand-900 text-white">
            <th class="py-4 px-6 text-left font-bold">Feature</th>
            <th class="py-4 px-6 text-center font-bold">
              <span class="gradient-text">Pest Eraze</span>
            </th>
            <th class="py-4 px-6 text-center font-bold text-gray-400">Others</th>
          </tr>
        </thead>
        <tbody>
          <tr class="compare-row border-b border-gray-100">
            <td class="py-4 px-6 font-medium">Same-Day Service</td>
            <td class="py-4 px-6 text-center text-green-600 font-bold text-xl">&#10003;</td>
            <td class="py-4 px-6 text-center text-red-400">&#10007;</td>
          </tr>
          <tr class="compare-row border-b border-gray-100">
            <td class="py-4 px-6 font-medium">6-Month Guarantee</td>
            <td class="py-4 px-6 text-center text-green-600 font-bold text-xl">&#10003;</td>
            <td class="py-4 px-6 text-center text-red-400">&#10007;</td>
          </tr>
          <tr class="compare-row border-b border-gray-100">
            <td class="py-4 px-6 font-medium">Transparent Pricing</td>
            <td class="py-4 px-6 text-center text-green-600 font-bold text-xl">&#10003;</td>
            <td class="py-4 px-6 text-center text-red-400">&#10007;</td>
          </tr>
          <tr class="compare-row border-b border-gray-100">
            <td class="py-4 px-6 font-medium">Google Rating</td>
            <td class="py-4 px-6 text-center font-bold text-brand-700">4.9 &#9733;</td>
            <td class="py-4 px-6 text-center text-gray-400">3.5&ndash;4.0</td>
          </tr>
          <tr class="compare-row border-b border-gray-100">
            <td class="py-4 px-6 font-medium">Fully Insured</td>
            <td class="py-4 px-6 text-center text-green-600 font-bold text-xl">&#10003;</td>
            <td class="py-4 px-6 text-center text-gray-400">Sometimes</td>
          </tr>
          <tr class="compare-row">
            <td class="py-4 px-6 font-medium">Free Re-Treatment</td>
            <td class="py-4 px-6 text-center text-green-600 font-bold text-xl">&#10003;</td>
            <td class="py-4 px-6 text-center text-red-400">&#10007;</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center mt-8 reveal">
      <a href="#lead-form" class="cta-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl">
        Get Protected Today
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- Services -->
<section id="services" class="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal">
      <span class="inline-block bg-cta-500/10 text-cta-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Our Services</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Complete Pest Protection for Your Home</h2>
      <p class="text-gray-600 text-lg">Professional treatments tailored to Melbourne's unique pest challenges.</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">&#128027;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $150</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">General Pest Treatment</h3>
        <p class="text-gray-600 text-sm">Comprehensive treatment covering cockroaches, spiders, ants, and silverfish in one visit.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.05s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl">&#128269;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $280</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Termite Inspection</h3>
        <p class="text-gray-600 text-sm">Thorough inspection using thermal imaging and moisture meters. Detailed report included.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.1s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">&#128029;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $2,500</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Termite Treatment</h3>
        <p class="text-gray-600 text-sm">Full colony elimination with chemical barriers and baiting systems. Long-term protection.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.15s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl">&#128027;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $150</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Cockroach Control</h3>
        <p class="text-gray-600 text-sm">Targeted gel baiting and residual spray treatment. Eliminates nests at the source.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.2s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">&#128000;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $220</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Rat &amp; Mice Control</h3>
        <p class="text-gray-600 text-sm">Strategic baiting, trapping, and entry-point sealing. Full rodent-proofing service.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.25s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl">&#128375;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $150</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Spiders &amp; Ants</h3>
        <p class="text-gray-600 text-sm">Internal and external treatment with long-lasting barrier protection around your home.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.3s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-2xl">&#128055;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $300</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Bed Bug Treatment</h3>
        <p class="text-gray-600 text-sm">Heat and chemical treatment combination. Thorough mattress, furniture, and room treatment.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.35s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-2xl">&#128062;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $180</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Flea / End of Lease</h3>
        <p class="text-gray-600 text-sm">Complete flea elimination with certificate provided. Perfect for end-of-lease requirements.</p>
      </div>
      <div class="reveal service-card bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover" style="transition-delay:.4s">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-2xl">&#127793;</div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">From $150</span>
        </div>
        <h3 class="text-lg font-bold text-brand-900 mb-2">Wasp &amp; Bee Removal</h3>
        <p class="text-gray-600 text-sm">Safe nest removal and relocation. Emergency service available for dangerous nests.</p>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="py-20 bg-white">
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal">
      <span class="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Simple Process</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Pest-Free in 3 Easy Steps</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-8 relative">
      <div class="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-cta-500 via-brand-500 to-cta-500 opacity-20"></div>
      <div class="reveal text-center relative">
        <div class="w-16 h-16 bg-gradient-to-br from-cta-500 to-cta-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-6 shadow-lg">1</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">Get Your Free Quote</h3>
        <p class="text-gray-600">Fill out the form or call us. We'll respond within 30 minutes with a transparent, no-obligation quote.</p>
      </div>
      <div class="reveal text-center relative" style="transition-delay:.15s">
        <div class="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-6 shadow-lg">2</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">We Treat Your Home</h3>
        <p class="text-gray-600">Our licensed technicians arrive same-day and apply targeted, family &amp; pet-safe treatments.</p>
      </div>
      <div class="reveal text-center relative" style="transition-delay:.3s">
        <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-6 shadow-lg">3</div>
        <h3 class="text-xl font-bold text-brand-900 mb-3">Enjoy Peace of Mind</h3>
        <p class="text-gray-600">Pests gone &mdash; guaranteed. If they return within 6 months, so do we. Completely free.</p>
      </div>
    </div>
  </div>
</section>

<!-- Reviews -->
<section class="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-12 reveal">
      <span class="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">&#9733; 4.9/5 Average Rating</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">What Melbourne Homeowners Say</h2>
    </div>
  </div>
  <div class="overflow-hidden mb-6">
    <div class="animate-marquee marquee-track">
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Absolutely fantastic service! They came same-day and the cockroach problem was gone within 24 hours. Highly recommend Pest Eraze to everyone."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700">D</div><div><div class="font-semibold text-brand-900 text-sm">Debbie M.</div><div class="text-gray-400 text-xs">Richmond</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Professional, on time, and very thorough. They explained everything they were doing. Best pest control experience we've had by far."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center font-bold text-pink-700">J</div><div><div class="font-semibold text-brand-900 text-sm">Jacinta T.</div><div class="text-gray-400 text-xs">South Melbourne</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Had a rat problem in our roof cavity. Pest Eraze sealed all entry points and set up baiting stations. No more scratching noises at night!"</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">S</div><div><div class="font-semibold text-brand-900 text-sm">Stephanie</div><div class="text-gray-400 text-xs">St Kilda</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"End of lease flea treatment done perfectly. Got our bond back with zero issues. Certificate was provided on the spot. Great value for money!"</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700">J</div><div><div class="font-semibold text-brand-900 text-sm">Jho M.</div><div class="text-gray-400 text-xs">Carlton</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"The termite inspection was incredibly detailed. They found early signs we would have missed. Saved us potentially thousands in damage."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-700">M</div><div><div class="font-semibold text-brand-900 text-sm">Michael R.</div><div class="text-gray-400 text-xs">Fitzroy</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Called at 8am, they were at our door by 11am. Incredibly responsive and the treatment was super effective. Worth every cent."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700">A</div><div><div class="font-semibold text-brand-900 text-sm">Amanda L.</div><div class="text-gray-400 text-xs">Brunswick</div></div></div>
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Absolutely fantastic service! They came same-day and the cockroach problem was gone within 24 hours. Highly recommend Pest Eraze to everyone."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700">D</div><div><div class="font-semibold text-brand-900 text-sm">Debbie M.</div><div class="text-gray-400 text-xs">Richmond</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Professional, on time, and very thorough. They explained everything they were doing. Best pest control experience we've had by far."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center font-bold text-pink-700">J</div><div><div class="font-semibold text-brand-900 text-sm">Jacinta T.</div><div class="text-gray-400 text-xs">South Melbourne</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Had a rat problem in our roof cavity. Pest Eraze sealed all entry points and set up baiting stations. No more scratching noises at night!"</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">S</div><div><div class="font-semibold text-brand-900 text-sm">Stephanie</div><div class="text-gray-400 text-xs">St Kilda</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"End of lease flea treatment done perfectly. Got our bond back with zero issues. Certificate was provided on the spot. Great value for money!"</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700">J</div><div><div class="font-semibold text-brand-900 text-sm">Jho M.</div><div class="text-gray-400 text-xs">Carlton</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"The termite inspection was incredibly detailed. They found early signs we would have missed. Saved us potentially thousands in damage."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-700">M</div><div><div class="font-semibold text-brand-900 text-sm">Michael R.</div><div class="text-gray-400 text-xs">Fitzroy</div></div></div>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-w-[320px] max-w-[360px] flex-shrink-0">
        <div class="flex items-center gap-1 text-yellow-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="text-gray-700 text-sm mb-4">"Called at 8am, they were at our door by 11am. Incredibly responsive and the treatment was super effective. Worth every cent."</p>
        <div class="flex items-center gap-3"><div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700">A</div><div><div class="font-semibold text-brand-900 text-sm">Amanda L.</div><div class="text-gray-400 text-xs">Brunswick</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- Guarantee -->
<section class="py-20 bg-brand-950 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent"></div>
  <div class="relative max-w-4xl mx-auto px-4 text-center reveal">
    <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cta-500 to-accent-500 rounded-3xl mb-8 shadow-2xl">
      <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    </div>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">Our Iron-Clad 6-Month Guarantee</h2>
    <p class="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">If pests return within 6 months of treatment, we come back and re-treat your property completely free. No questions asked.</p>
    <div class="grid md:grid-cols-3 gap-6 mb-10">
      <div class="glass rounded-2xl p-6">
        <div class="text-3xl mb-3">&#9989;</div>
        <h3 class="text-white font-bold mb-2">Free Re-Treatment</h3>
        <p class="text-blue-300 text-sm">Pests come back? So do we. At absolutely no extra cost to you.</p>
      </div>
      <div class="glass rounded-2xl p-6">
        <div class="text-3xl mb-3">&#128272;</div>
        <h3 class="text-white font-bold mb-2">Fully Insured</h3>
        <p class="text-blue-300 text-sm">Complete public liability insurance for your total peace of mind.</p>
      </div>
      <div class="glass rounded-2xl p-6">
        <div class="text-3xl mb-3">&#128218;</div>
        <h3 class="text-white font-bold mb-2">Licensed Technicians</h3>
        <p class="text-blue-300 text-sm">All treatments performed by VIC-licensed pest control professionals.</p>
      </div>
    </div>
    <a href="#lead-form" class="cta-btn inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl animate-pulse-glow">
      Claim Your Guaranteed Protection
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
    </a>
  </div>
</section>

<!-- Melbourne Suburbs -->
<section class="py-20 bg-white">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <div class="mb-12 reveal">
      <span class="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Service Areas</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Serving All of Melbourne</h2>
      <p class="text-gray-600 text-lg">Fast same-day service across all Melbourne metro suburbs.</p>
    </div>
    <div class="flex flex-wrap justify-center gap-3 reveal">
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">CBD</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Richmond</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">South Melbourne</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">St Kilda</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Carlton</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Fitzroy</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Brunswick</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Collingwood</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Prahran</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">South Yarra</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Toorak</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Hawthorn</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Kew</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Doncaster</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Footscray</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Northcote</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Preston</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Essendon</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Glen Waverley</span>
      <span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-200 hover:bg-brand-100 transition cursor-default">Dandenong</span>
      <span class="px-4 py-2 bg-gradient-to-r from-cta-500 to-accent-500 text-white rounded-full text-sm font-bold shadow-md">+ All Melbourne Suburbs</span>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-3xl mx-auto px-4">
    <div class="text-center mb-12 reveal">
      <span class="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">FAQ</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Frequently Asked Questions</h2>
    </div>
    <div class="space-y-4 reveal">
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>Are your treatments safe for kids and pets?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">Yes! We use government-approved, low-toxicity products that are safe for children and pets once dried (typically 1&ndash;2 hours). We'll always advise you on any precautions specific to your treatment.</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>How quickly can you come out?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">We offer same-day service for most areas across Melbourne. Call us before 12pm and we can usually be there that afternoon. Emergency callouts are also available.</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>What does the 6-month guarantee cover?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">If the treated pests return within 6 months, we'll come back and re-treat your property at absolutely no extra cost. No questions asked, no hidden fees.</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>Which suburbs do you service?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">We service all Melbourne metropolitan suburbs, from the CBD to outer suburbs including Dandenong, Glen Waverley, Essendon, and beyond. If you're unsure, just ask!</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>How much does pest control cost?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">Our general pest treatments start from just $150. Final pricing depends on property size, pest type, and severity. We always provide a free, transparent quote before any work begins.</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left font-bold text-brand-900 hover:text-cta-600 transition">
          <span>Do I need to leave the house during treatment?</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-answer">
          <div class="px-6 pb-6 text-gray-600">For most treatments, we recommend staying out of treated areas for 1&ndash;2 hours while products dry. We'll give you clear instructions based on your specific treatment plan.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="py-20 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 relative overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute top-10 left-10 w-64 h-64 bg-cta-500/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl animate-float" style="animation-delay:-3s"></div>
  </div>
  <div class="relative max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
    <div class="text-white">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-6">Ready to Live Pest-Free?</h2>
      <p class="text-xl text-blue-200 mb-8">Join 2,000+ Melbourne homeowners who trust Pest Eraze. Get your free, no-obligation quote now.</p>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <span class="text-blue-200">Same-day service &mdash; call before noon</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <span class="text-blue-200">6-month guarantee on all treatments</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <span class="text-blue-200">From just $150 &mdash; transparent pricing</span>
        </div>
      </div>
    </div>
    <div class="glass rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-6">
        <h3 class="text-2xl font-bold text-white">Get Your Free Quote</h3>
        <p class="text-blue-300 text-sm mt-1">Takes 30 seconds</p>
      </div>
      <form id="lead-form-2" onsubmit="return submitForm(event,'lead-form-2','form-ok-2')" class="space-y-4">
        <input type="hidden" name="access_key" value="2628fc63-2069-4661-8e18-34826cadb806">
        <input type="hidden" name="subject" value="New Pest Eraze Lead (Bottom Form)">
        <input name="name" required placeholder="Your Name *" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 transition">
        <input name="phone" type="tel" required placeholder="Phone Number *" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cta-500 transition">
        <select name="pest_type" required class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-blue-300/80 focus:outline-none focus:ring-2 focus:ring-cta-500 transition appearance-none">
          <option value="">Select Pest Type *</option>
          <option value="General Pest">General Pest Treatment</option>
          <option value="Cockroaches">Cockroaches</option>
          <option value="Termites">Termites / White Ants</option>
          <option value="Rats & Mice">Rats &amp; Mice</option>
          <option value="Spiders">Spiders</option>
          <option value="Ants">Ants</option>
          <option value="Bed Bugs">Bed Bugs</option>
          <option value="Fleas">Fleas / End of Lease</option>
          <option value="Wasps & Bees">Wasps &amp; Bees</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" class="w-full cta-btn animate-pulse-glow text-white font-bold py-4 rounded-xl text-lg shadow-xl flex items-center justify-center gap-2">
          Get My Free Quote Now
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </button>
        <p class="text-center text-blue-400/60 text-xs">&#128274; Your info is 100% secure &amp; never shared</p>
      </form>
      <div id="form-ok-2" class="hidden text-center py-8">
        <div class="text-5xl mb-4">&#9989;</div>
        <h3 class="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p class="text-blue-300">We'll call you within 30 minutes.</p>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-brand-950 text-white py-12 border-t border-brand-800/50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cta-500 to-accent-500 flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <span class="text-xl font-bold">Pest <span class="gradient-text">Eraze</span></span>
        </div>
        <p class="text-blue-300 text-sm">Melbourne's trusted pest control experts. Protecting homes and families since day one.</p>
      </div>
      <div>
        <h4 class="font-bold mb-4">Contact</h4>
        <div class="space-y-2 text-blue-300 text-sm">
          <a href="tel:0416528547" class="flex items-center gap-2 hover:text-white transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            0416 528 547
          </a>
          <a href="mailto:contact@pesteraze.com.au" class="flex items-center gap-2 hover:text-white transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            contact@pesteraze.com.au
          </a>
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Serving All Melbourne Metro
          </p>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-4">Follow Us</h4>
        <div class="flex gap-4">
          <a href="https://www.facebook.com/p/Pest-Eraze-61577923252694/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition" aria-label="Facebook">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/pesteraze/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition" aria-label="Instagram">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@pest.eraze" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition" aria-label="TikTok">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.84 4.84 0 01-3.59-1.42V6.69h3.59z"/></svg>
          </a>
          <a href="mailto:contact@pesteraze.com.au" class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition" aria-label="Email">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-brand-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-400 text-xs">
      <p>&copy; 2025 Pest Eraze Melbourne. All rights reserved.</p>
      <p>ABN registered &bull; Licensed Pest Control &bull; Fully Insured</p>
    </div>
  </div>
</footer>

<!-- Sticky Mobile Call Bar -->
<div id="mob-bar" class="fixed bottom-0 left-0 right-0 z-50 md:hidden translate-y-full transition-transform duration-300">
  <div class="bg-gradient-to-r from-cta-600 to-cta-500 shadow-2xl px-4 py-3 flex items-center justify-between">
    <div class="text-white">
      <div class="text-xs font-medium opacity-90">Free Quote Available</div>
      <div class="text-sm font-bold">Call Now &mdash; Same Day Service</div>
    </div>
    <a href="tel:0416528547" class="bg-white text-cta-600 font-bold px-5 py-2.5 rounded-full text-sm shadow-lg flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      Call
    </a>
  </div>
</div>

<!-- Social Proof Notification -->
<div id="notif-popup" class="fixed bottom-20 md:bottom-6 left-4 z-40 opacity-0 pointer-events-none transition-all duration-500" style="transform:translateX(-100%)">
  <div class="glass-dark rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 max-w-sm">
    <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    </div>
    <div>
      <div id="notif-text" class="text-white text-sm font-medium"></div>
      <div id="notif-time" class="text-blue-400 text-xs mt-0.5"></div>
    </div>
  </div>
</div>

<!-- Exit Intent Popup -->
<div id="exit-popup" class="fixed inset-0 z-[9999] hidden items-center justify-center p-4" style="background:rgba(0,0,0,0.7);backdrop-filter:blur(4px)">
  <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-scale-in">
    <button onclick="document.getElementById('exit-popup').classList.add('hidden');document.getElementById('exit-popup').classList.remove('flex')" class="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition">&times;</button>
    <div class="text-center">
      <div class="text-5xl mb-4">&#9888;&#65039;</div>
      <h3 class="text-2xl font-extrabold text-brand-900 mb-2">Wait! Don't Leave Yet</h3>
      <p class="text-gray-600 mb-6">Get <span class="font-bold text-cta-600">10% OFF</span> your first treatment when you book today. Limited time only!</p>
      <a href="#lead-form" onclick="document.getElementById('exit-popup').classList.add('hidden');document.getElementById('exit-popup').classList.remove('flex')" class="cta-btn block text-white font-bold py-4 rounded-xl text-lg shadow-xl mb-3 text-center">
        Claim My 10% Discount
      </a>
      <a href="tel:0416528547" class="block text-brand-700 font-semibold hover:text-cta-600 transition">Or call 0416 528 547</a>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>
// Form submission
async function submitForm(e,formId,okId){
  e.preventDefault();
  const f=document.getElementById(formId);
  const btn=f.querySelector('button[type="submit"]');
  const orig=btn.innerHTML;
  btn.innerHTML='<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
  btn.disabled=true;
  try{
    const d=new FormData(f);
    const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:d});
    const j=await r.json();
    if(j.success){
      f.style.display='none';
      document.getElementById(okId).classList.remove('hidden');
    }else{
      btn.innerHTML=orig;btn.disabled=false;
      alert('Something went wrong. Please call us at 0416 528 547.');
    }
  }catch{
    btn.innerHTML=orig;btn.disabled=false;
    alert('Network error. Please call us at 0416 528 547.');
  }
  return false;
}

// FAQ toggle
function toggleFaq(btn){
  const ans=btn.nextElementSibling;
  const icon=btn.querySelector('.faq-icon');
  const isOpen=ans.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(i=>i.style.transform='');
  if(!isOpen){
    ans.classList.add('open');
    icon.style.transform='rotate(180deg)';
  }
}

// Scroll progress bar
window.addEventListener('scroll',()=>{
  const s=window.scrollY;
  const h=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById('scroll-progress').style.width=(s/h*100)+'%';
});

// Header shadow on scroll
const header=document.getElementById('site-header');
window.addEventListener('scroll',()=>{
  if(window.scrollY>80){
    header.style.background='rgba(10,25,41,0.95)';
    header.style.backdropFilter='blur(12px)';
    header.style.boxShadow='0 4px 30px rgba(0,0,0,0.3)';
  }else{
    header.style.background='transparent';
    header.style.backdropFilter='none';
    header.style.boxShadow='none';
  }
});

// Sticky mobile bar
const mobBar=document.getElementById('mob-bar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>600){
    mobBar.classList.remove('translate-y-full');
    mobBar.classList.add('translate-y-0');
  }else{
    mobBar.classList.add('translate-y-full');
    mobBar.classList.remove('translate-y-0');
  }
});

// Scroll reveal
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}});
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Animated counters
const counterObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const target=parseInt(el.dataset.count);
      const suffix=target>=1000?'+':target===30?' min':target===6?' mo':'+';
      let current=0;
      const step=target/60;
      const timer=setInterval(()=>{
        current+=step;
        if(current>=target){
          current=target;
          clearInterval(timer);
        }
        el.textContent=Math.floor(current).toLocaleString()+suffix;
      },16);
      counterObserver.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.stat-number').forEach(el=>counterObserver.observe(el));

// Social proof notifications
const notifications=[
  {text:'Sarah from South Yarra just booked a cockroach treatment',time:'2 minutes ago'},
  {text:'Mark from Richmond requested a termite inspection',time:'5 minutes ago'},
  {text:'Lisa from St Kilda booked general pest control',time:'8 minutes ago'},
  {text:'David from Carlton just got a free quote',time:'12 minutes ago'},
  {text:'Emma from Fitzroy booked a rat treatment',time:'15 minutes ago'},
  {text:'Tom from Brunswick requested end-of-lease treatment',time:'18 minutes ago'}
];
let notifIndex=0;
function showNotification(){
  const popup=document.getElementById('notif-popup');
  const n=notifications[notifIndex%notifications.length];
  document.getElementById('notif-text').textContent=n.text;
  document.getElementById('notif-time').textContent=n.time;
  popup.style.opacity='1';
  popup.style.transform='translateX(0)';
  popup.style.pointerEvents='auto';
  setTimeout(()=>{
    popup.style.opacity='0';
    popup.style.transform='translateX(-100%)';
    popup.style.pointerEvents='none';
  },4000);
  notifIndex++;
}
setTimeout(()=>{showNotification();setInterval(showNotification,15000)},8000);

// Urgency: countdown spots
let spots=7;
function updateSpots(){
  if(spots>3){
    spots--;
    const el=document.getElementById('urgency-spots');
    if(el)el.textContent=spots;
  }
}
setInterval(updateSpots,45000);

// Countdown timer with session persistence
(function(){
  const key='pe_countdown';
  let end=sessionStorage.getItem(key);
  if(!end){
    end=Date.now()+2*60*60*1000;
    sessionStorage.setItem(key,end);
  }
  function tick(){
    let diff=Math.max(0,end-Date.now());
    const h=String(Math.floor(diff/3600000)).padStart(2,'0');
    const m=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    const el=document.getElementById('countdown-timer');
    if(el)el.textContent=h+':'+m+':'+s;
  }
  tick();
  setInterval(tick,1000);
})();

// Particle canvas
(function(){
  const canvas=document.getElementById('particle-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W,H;
  function resize(){W=canvas.width=canvas.parentElement.offsetWidth;H=canvas.height=canvas.parentElement.offsetHeight}
  resize();
  window.addEventListener('resize',resize);
  const particles=[];
  for(let i=0;i<50;i++){
    particles.push({
      x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*2+1,
      dx:(Math.random()-0.5)*0.5,
      dy:(Math.random()-0.5)*0.5,
      o:Math.random()*0.3+0.1
    });
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.dx;p.y+=p.dy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(249,115,22,'+p.o+')';
      ctx.fill();
    });
    // Connections
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle='rgba(249,115,22,'+(0.08*(1-dist/120))+')';
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// Exit intent
let exitShown=false;
document.addEventListener('mouseout',function(e){
  if(!exitShown&&e.clientY<5&&!e.relatedTarget&&e.target.nodeName!=='SELECT'){
    exitShown=true;
    const p=document.getElementById('exit-popup');
    p.classList.remove('hidden');
    p.classList.add('flex');
  }
});
<\/script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('index.html written successfully! Size:', fs.statSync(path.join(__dirname, 'index.html')).size, 'bytes');
