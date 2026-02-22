'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ChevronRight } from 'lucide-react';

function useParallax(speed = 0.25) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bg = el.querySelector('.par-elem');
    if (!bg) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top * speed;
      bg.style.transform = `translateY(${scrolled}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);
  return ref;
}

// ─── HI TEA MENU DATA ─────────────────────────────────────────────────────────
const hiTeaMenu = [
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    number: '01',
    subtitle: 'Freshly prepared with artisan breads and gourmet fillings.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    items: [
      { id: 'ht1', name: 'Club Sandwich', price: 'Rs. 850', desc: 'Triple-decker toasted sandwich with grilled chicken, bacon, lettuce, tomato & mayo.' },
      { id: 'ht2', name: 'Smoked Salmon Sandwich', price: 'Rs. 1,100', desc: 'Cold smoked salmon with cream cheese, capers, cucumber on sourdough.' },
      { id: 'ht3', name: 'Grilled Mushroom & Cheese', price: 'Rs. 750', desc: 'Portobello mushrooms with Swiss cheese, roasted peppers on ciabatta.' },
      { id: 'ht4', name: 'BLT Deluxe', price: 'Rs. 900', desc: 'Premium bacon, butter lettuce, heirloom tomato with garlic aioli on brioche.' },
      { id: 'ht5', name: 'Chicken Pesto Panini', price: 'Rs. 950', desc: 'Grilled chicken with basil pesto, sun-dried tomatoes, buffalo mozzarella on panini bread.' },
      { id: 'ht6', name: 'Egg & Cress Finger Sandwich', price: 'Rs. 650', desc: 'Classic English style egg mayonnaise with garden cress on soft white bread.' },
      { id: 'ht7', name: 'Turkey & Avocado', price: 'Rs. 1,000', desc: 'Roasted turkey breast with ripe avocado, Swiss cheese, baby spinach & honey mustard.' },
      { id: 'ht8', name: 'Roquefort & Walnut', price: 'Rs. 800', desc: 'French Roquefort cheese with toasted walnuts, honey drizzle on multigrain bread.' },
    ]
  },
  {
    id: 'cakes',
    label: 'Cakes & Pastries',
    number: '02',
    subtitle: 'Exquisite patisserie and handcrafted cakes baked fresh daily.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80',
    items: [
      { id: 'ht9', name: 'Victoria Sponge Cake', price: 'Rs. 750', desc: 'Classic British sponge layered with strawberry jam and fresh whipped cream.' },
      { id: 'ht10', name: 'Lemon Drizzle Slice', price: 'Rs. 680', desc: 'Moist lemon sponge drenched with sharp lemon syrup and glazed with icing.' },
      { id: 'ht11', name: 'Chocolate Éclair', price: 'Rs. 620', desc: 'Choux pastry filled with vanilla custard cream, topped with dark chocolate ganache.' },
      { id: 'ht12', name: 'Strawberry Tart', price: 'Rs. 700', desc: 'Buttery pastry shell with crème pâtissière, fresh strawberries and apricot glaze.' },
      { id: 'ht13', name: 'Raspberry Macarons (3 pcs)', price: 'Rs. 780', desc: 'Delicate French macarons with raspberry buttercream filling.' },
      { id: 'ht14', name: 'Opera Cake', price: 'Rs. 850', desc: 'Classic French layered cake with coffee-soaked almond sponge, coffee buttercream and ganache.' },
      { id: 'ht15', name: 'Carrot Walnut Cake', price: 'Rs. 720', desc: 'Spiced carrot cake with walnuts, topped with cream cheese frosting.' },
      { id: 'ht16', name: 'Croissant au Beurre', price: 'Rs. 580', desc: 'Buttery, flaky French croissant. Served warm with clotted cream and jam.' },
    ]
  },
  {
    id: 'scones',
    label: 'Scones & Savouries',
    number: '03',
    subtitle: 'Traditional British afternoon tea savouries and fresh-baked scones.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    items: [
      { id: 'ht17', name: 'Plain Scones (2 pcs)', price: 'Rs. 650', desc: 'Freshly baked plain scones served with clotted cream, strawberry jam and butter.' },
      { id: 'ht18', name: 'Cheese & Chive Scones', price: 'Rs. 700', desc: 'Savoury scones with mature cheddar and fresh chives, served warm.' },
      { id: 'ht19', name: 'Mini Quiche Lorraine', price: 'Rs. 750', desc: 'Buttery pastry shell with smoked bacon, gruyère and egg custard filling.' },
      { id: 'ht20', name: 'Smoked Salmon Blinis', price: 'Rs: 900', desc: 'Russian-style mini blinis with crème fraîche, smoked salmon, dill and caviar.' },
      { id: 'ht21', name: 'Cheese & Tomato Tartlets', price: 'Rs. 720', desc: 'Mini tartlets with roasted cherry tomato, basil oil and goat cheese.' },
      { id: 'ht22', name: 'Cucumber & Cream Cheese Rounds', price: 'Rs. 580', desc: 'Crisp cucumber topped with herbed cream cheese on cracker biscuits.' },
      { id: 'ht23', name: 'Mini Sausage Rolls', price: 'Rs. 780', desc: 'Puff pastry rolls with seasoned pork or chicken sausage, served with grain mustard.' },
      { id: 'ht24', name: 'Devilled Eggs', price: 'Rs. 650', desc: 'Hard boiled eggs filled with paprika-spiced yolk cream, garnished with chives.' },
    ]
  },
  {
    id: 'desserts',
    label: 'Desserts',
    number: '04',
    subtitle: 'Indulgent sweet endings crafted with finest ingredients.',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&q=80',
    items: [
      { id: 'ht25', name: 'Crème Brûlée', price: 'Rs. 980', desc: 'Classic French vanilla custard with a perfectly caramelised sugar crust.' },
      { id: 'ht26', name: 'Chocolate Fondant', price: 'Rs. 1,100', desc: 'Warm dark chocolate cake with a molten centre, served with vanilla ice cream.' },
      { id: 'ht27', name: 'Tiramisu', price: 'Rs. 950', desc: 'Italian coffee-soaked ladyfingers layered with mascarpone cream, dusted with cocoa.' },
      { id: 'ht28', name: 'Lemon Meringue Tart', price: 'Rs. 850', desc: 'Crisp pastry with tangy lemon curd and toasted Italian meringue.' },
      { id: 'ht29', name: 'Eton Mess', price: 'Rs. 800', desc: 'Crushed meringue, whipped cream and fresh strawberries with strawberry coulis.' },
      { id: 'ht30', name: 'Sticky Toffee Pudding', price: 'Rs. 920', desc: 'Moist date sponge with warm toffee sauce and clotted cream.' },
      { id: 'ht31', name: 'Panna Cotta', price: 'Rs. 870', desc: 'Italian vanilla set cream with berry compote and fresh mint garnish.' },
      { id: 'ht32', name: 'Bread & Butter Pudding', price: 'Rs. 780', desc: 'Brioche pudding with vanilla custard, golden sultanas, served warm.' },
    ]
  },
  {
    id: 'teas',
    label: 'Teas & Infusions',
    number: '05',
    subtitle: 'A curated selection of single-estate teas and premium herbal blends.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
    items: [
      { id: 'ht33', name: 'English Breakfast Tea', price: 'Rs. 450', desc: 'A full-bodied blend of Assam, Ceylon and Kenyan teas. Bold, rich and malty.' },
      { id: 'ht34', name: 'Earl Grey Classic', price: 'Rs. 480', desc: 'Finest black tea infused with bergamot oil. Fragrant and refreshing.' },
      { id: 'ht35', name: 'Darjeeling First Flush', price: 'Rs. 650', desc: 'Delicate, muscatel-flavoured tea from the foothills of the Himalayas.' },
      { id: 'ht36', name: 'Green Jasmine Pearls', price: 'Rs. 580', desc: 'Hand-rolled green tea pearls scented with fresh jasmine blossoms. Gentle and floral.' },
      { id: 'ht37', name: 'Peppermint Herbal', price: 'Rs. 420', desc: 'Pure peppermint leaves. Cooling and caffeine-free. Perfect after a meal.' },
      { id: 'ht38', name: 'Chamomile & Honey', price: 'Rs. 440', desc: 'Soothing chamomile flowers with a hint of golden honey and lavender.' },
      { id: 'ht39', name: 'Roasters Signature Chai', price: 'Rs. 520', desc: 'Our house blend of spiced black tea with cardamom, cinnamon, ginger and fresh milk.' },
      { id: 'ht40', name: 'Hibiscus Berry Tisane', price: 'Rs. 490', desc: 'Vibrant red infusion of hibiscus, rosehip, berry and elderflower. Served hot or iced.' },
    ]
  },
];

// ─── SCROLL NAV ───────────────────────────────────────────────────────────────
function ScrollNav({ active, sections }) {
  return (
    <ul style={{ position: 'fixed', top: '35%', right: 40, zIndex: 20, listStyle: 'none', padding: 0, margin: 0, width: 6 }}>
      {sections.map((s, i) => (
        <li key={s.id} style={{ width: 6, marginBottom: 14, float: 'left', clear: 'both' }}>
          <a href={`#section-${s.id}`}
            onClick={e => { e.preventDefault(); document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}
            title={s.label}
            style={{ display: 'block', width: 6, height: 6, background: active === s.id ? '#C19D60' : 'rgba(255,255,255,0.3)', borderRadius: '50%', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
            {/* Tooltip */}
            <span style={{ position: 'absolute', right: '100%', marginRight: 20, top: '50%', marginTop: -20, height: 40, lineHeight: '40px', minWidth: 150, background: '#292929', color: '#fff', fontSize: 12, fontWeight: 600, fontFamily: "'Playfair Display', cursive", paddingLeft: 16, textAlign: 'left', opacity: 0, visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}>
              {s.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// ─── MENU SECTION ─────────────────────────────────────────────────────────────
function HiTeaMenuSection({ section }) {
  const { addToCart } = useCart();
  const sectionRef = useParallax(0.2);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id={`section-${section.id}`} ref={sectionRef}
      style={{ float: 'left', width: '100%', position: 'relative', overflow: 'hidden', padding: 0, background: '#292929' }}>

      {/* Section title banner with parallax background */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 280 }}>
        <div className="par-elem" style={{
          backgroundImage: `url(${section.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          position: 'absolute', top: '-15%', left: 0, right: 0, height: '130%',
          zIndex: 0, transition: 'transform 0s'
        }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.48, zIndex: 1 }} />
        {/* Dotted corner lines */}
        <div style={{ position: 'absolute', top: 30, left: 30, width: 60, height: 60, borderLeft: '1px dotted rgba(255,255,255,0.3)', borderTop: '1px dotted rgba(255,255,255,0.3)', zIndex: 5 }} />
        <div style={{ position: 'absolute', bottom: 30, right: 30, width: 60, height: 60, borderRight: '1px dotted rgba(255,255,255,0.3)', borderBottom: '1px dotted rgba(255,255,255,0.3)', zIndex: 5 }} />
        <div style={{ position: 'relative', zIndex: 4, padding: '60px 40px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', bottom: 20, left: 30, fontFamily: "'Playfair Display', cursive", fontSize: 22, color: '#fff', zIndex: 4 }}>
            {section.number}.
          </div>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", color: '#C19D60', fontWeight: 600, fontSize: 22, paddingBottom: 8 }}>
            {section.label}
          </h4>
          <h5 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 400 }}>
            {section.subtitle}
          </h5>
        </div>
      </div>

      {/* Menu items - 2 column grid */}
      <div style={{ padding: '30px 30px 40px', margin: '0 auto', maxWidth: 1100, position: 'relative', boxSizing: 'border-box' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 40px', float: 'left', width: '100%' }}>
          {section.items.map((item) => (
            <div key={item.id}
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}>

              {/* Circular image */}
              <div style={{ width: 68, height: 68, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(193,157,96,0.3)', position: 'relative' }}>
                <img
                  src={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=68&h=68&fit=crop&sig=${item.id}`}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=68&h=68&fit=crop'; }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 6 }}>
                  <h6 style={{ color: '#fff', fontSize: 14, fontWeight: 600, fontFamily: "'Poppins', sans-serif", margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.name}
                  </h6>
                  <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 16, color: '#C19D60', fontWeight: 600, flexShrink: 0 }}>
                    {item.price}
                  </div>
                </div>
                <div style={{ borderBottom: '1px dotted rgba(255,255,255,0.12)', margin: '5px 0 7px' }} />
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, lineHeight: 1.7, paddingBottom: 0, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function HiTeaPage() {
  const [activeSection, setActiveSection] = useState(hiTeaMenu[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.replace('section-', ''));
        }
      });
    }, { threshold: 0.3 });

    hiTeaMenu.forEach(s => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── PAGE HEADER ────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.5 }} />
        {/* Corner decorations */}
        <div style={{ position: 'absolute', left: 60, top: 40, width: 70, height: 70, borderLeft: '1px dotted rgba(255,255,255,0.35)', borderTop: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'absolute', right: 60, bottom: 40, width: 70, height: 70, borderRight: '1px dotted rgba(255,255,255,0.35)', borderBottom: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'relative', zIndex: 5, padding: '0 20px' }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: '#C19D60', marginBottom: 20 }}>●●●●●</div>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#C19D60', fontSize: 18, marginBottom: 10 }}>
            Special menu offers.
          </h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
            Discover Our Hi Tea
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>Hi Tea</span>
          </div>
        </div>
      </div>

      {/* ─── FIXED MENU NAV + TAB BAR ───────────────────────────────────── */}
      <section style={{ background: '#1a1a1a', padding: '30px 0 18px', float: 'left', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', position: 'sticky', top: 108, zIndex: 50 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, listStyle: 'none', padding: '16px 22px', margin: 0, border: `1px solid #C19D60`, background: 'rgba(193,157,96,0.04)', position: 'relative' }}>
            {/* Side dotted lines */}
            <div style={{ position: 'absolute', top: '50%', left: -130, width: 100, height: 1, borderTop: `1px dotted rgba(193,157,96,0.5)` }} />
            <div style={{ position: 'absolute', top: '50%', right: -130, width: 100, height: 1, borderTop: `1px dotted rgba(193,157,96,0.5)` }} />
            {hiTeaMenu.map((s, i) => (
              <li key={s.id}
                onClick={() => { document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth' }); setActiveSection(s.id); }}
                style={{ margin: '0 20px', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 17, fontWeight: activeSection === s.id ? 700 : 400, color: activeSection === s.id ? '#C19D60' : 'rgba(255,255,255,0.55)', position: 'relative', transition: 'color 0.2s' }}>
                <span style={{ fontSize: 11, marginRight: 4, color: activeSection === s.id ? '#C19D60' : 'rgba(255,255,255,0.2)', fontFamily: "'Poppins', sans-serif" }}>0{i + 1}.</span>
                {s.label}
                {activeSection === s.id && (
                  <div style={{ position: 'absolute', bottom: -22, right: '50%', marginRight: -7, fontSize: 14, color: '#C19D60' }}>▾</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── MENU SECTIONS ──────────────────────────────────────────────── */}
      {hiTeaMenu.map(section => (
        <HiTeaMenuSection key={section.id} section={section} />
      ))}

      {/* ─── PDF DOWNLOAD STRIP ─────────────────────────────────────────── */}
      <section style={{ background: '#212121', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '36px 5%', float: 'left', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
        <a href="#"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '13px 36px', background: '#C19D60', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 500, textDecoration: 'none', border: '1px solid #C19D60', transition: 'all 0.22s', letterSpacing: 0.5 }}
          onMouseEnter={e => { e.currentTarget.style.background = '#ddd'; e.currentTarget.style.color = '#292929'; e.currentTarget.style.borderColor = '#ddd'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#C19D60'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#C19D60'; }}>
          Download Menu in PDF ↓
        </a>
      </section>

      {/* ─── SCROLL NAV ─────────────────────────────────────────────────── */}
      <ScrollNav active={activeSection} sections={hiTeaMenu} />
    </>
  );
}

