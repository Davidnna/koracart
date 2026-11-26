import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  Heart,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  X,
} from 'lucide-react'
import { getApiHealth } from './lib/api'

const categories = [
  { name: 'Electronics', icon: '◈', count: 'Explore collection' },
  { name: 'Fashion', icon: '✳', count: 'Explore collection' },
  { name: 'Home & Living', icon: '⌂', count: 'Explore collection' },
  { name: 'Beauty', icon: '✦', count: 'Explore collection' },
  { name: 'Phones & Tablets', icon: '▣', count: 'Explore collection' },
  { name: 'Sports & Fitness', icon: '◎', count: 'Explore collection' },
]

const products = [
  { name: 'Wireless Headphones', category: 'Electronics', price: '₦38,500', old: '₦45,000', tag: 'Popular', tone: 'sand', symbol: '◖))' },
  { name: 'Everyday Leather Tote', category: 'Fashion', price: '₦24,000', old: '', tag: 'New arrival', tone: 'rose', symbol: '▱' },
  { name: 'Minimal Desk Lamp', category: 'Home & Living', price: '₦19,800', old: '₦23,500', tag: 'Save 16%', tone: 'blue', symbol: '◉' },
  { name: 'Skincare Essentials Set', category: 'Beauty', price: '₦16,500', old: '', tag: 'Vendor pick', tone: 'mint', symbol: '✧' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [search, setSearch] = useState('')

  useEffect(() => {
    getApiHealth()
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'))
  }, [])

  return (
    <div className="min-h-screen bg-white text-koracart-navy">
      <div className="bg-koracart-navy px-4 py-2 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        Discover great finds from independent sellers across Nigeria.
        <span className="ml-2 hidden text-koracart-teal sm:inline">Shop with confidence →</span>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="KoraCart home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-koracart-teal text-xl font-black text-koracart-navy shadow-sm">K</span>
            <span className="text-2xl font-extrabold tracking-tight">Kora<span className="text-koracart-teal">Cart</span></span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            <a className="text-koracart-navy" href="#home">Home</a>
            <a className="transition hover:text-koracart-teal" href="#categories">Categories</a>
            <a className="transition hover:text-koracart-teal" href="#featured">Explore products</a>
            <a className="transition hover:text-koracart-teal" href="#sell">Become a seller</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100" aria-label="Wishlist">
              <Heart size={19} />
            </button>
            <button className="relative rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100" aria-label="Shopping bag">
              <ShoppingBag size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-koracart-teal" />
            </button>
            <button className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold transition hover:border-koracart-teal hover:text-koracart-teal">Log in</button>
            <button className="rounded-full bg-koracart-navy px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-koracart-teal hover:text-koracart-navy">Create account</button>
          </div>

          <button className="rounded-lg p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Categories</a>
              <a href="#featured" onClick={() => setMobileMenuOpen(false)}>Explore products</a>
              <a href="#sell" onClick={() => setMobileMenuOpen(false)}>Become a seller</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 rounded-full border border-slate-200 px-4 py-2.5">Log in</button>
                <button className="flex-1 rounded-full bg-koracart-navy px-4 py-2.5 text-white">Create account</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-koracart-mist">
          <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-koracart-teal/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-koracart-amber/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-koracart-teal/20 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-koracart-navy shadow-sm">
                <span className="h-2 w-2 rounded-full bg-koracart-teal" />
                A marketplace built around you
              </div>
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                More sellers.<br />
                <span className="text-koracart-teal">More to discover.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Find the things you love from independent sellers, all in one place. Discover great products, shop securely and follow every order with confidence.
              </p>

              <form className="mt-8 flex max-w-xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-soft" onSubmit={(event) => event.preventDefault()}>
                <Search className="ml-3 shrink-0 text-slate-400" size={20} />
                <input value={search} onChange={(event) => setSearch(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400" placeholder="Search products, categories and stores" aria-label="Search marketplace" />
                <button type="submit" className="rounded-xl bg-koracart-teal px-5 py-3 text-sm font-extrabold text-koracart-navy transition hover:bg-koracart-amber">Search</button>
              </form>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-koracart-teal" /> Secure checkout</span>
                <span className="flex items-center gap-2"><Truck size={17} className="text-koracart-teal" /> Track your orders</span>
                <span className="flex items-center gap-2"><BadgeCheck size={17} className="text-koracart-teal" /> Independent vendors</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-5 top-12 h-28 w-28 rounded-full border-[18px] border-koracart-amber/20" />
              <div className="absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-koracart-teal/15 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 pt-10 sm:space-y-4">
                  <div className="product-art product-art-sand flex h-48 items-center justify-center rounded-[2rem] p-5 shadow-soft sm:h-60">
                    <div className="art-headphones">◖)))</div>
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">Tech finds</span>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-4 shadow-soft">
                    <p className="text-xs font-bold text-slate-400">THE KORACART PROMISE</p>
                    <p className="mt-1 text-sm font-extrabold">One place. More possibilities.</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="product-art product-art-mint flex h-56 items-center justify-center rounded-[2rem] p-5 shadow-soft sm:h-72">
                    <div className="art-bag">▱</div>
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">Everyday style</span>
                  </div>
                  <div className="product-art product-art-rose flex h-36 items-center justify-center rounded-[2rem] p-5 shadow-soft sm:h-44">
                    <div className="art-beauty">✧</div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">Self care</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-koracart-navy px-5 py-3 text-white shadow-xl">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-koracart-teal text-koracart-navy"><ShoppingBag size={18} /></span>
                <div className="whitespace-nowrap">
                  <p className="text-xs font-bold text-white/60">YOUR MARKETPLACE</p>
                  <p className="text-sm font-extrabold">Everything comes together.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-koracart-teal">Find your next favourite</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Explore categories</h2>
              <p className="mt-3 text-sm text-slate-500 sm:text-base">A little something for every part of your day.</p>
            </div>
            <a href="#featured" className="hidden items-center gap-2 text-sm font-bold text-koracart-navy transition hover:text-koracart-teal sm:flex">View all <ArrowUpRight size={17} /></a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <a href="#featured" key={category.name} className="group rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-1 hover:border-koracart-teal/40 hover:shadow-soft sm:p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-koracart-mist text-2xl text-koracart-teal transition group-hover:bg-koracart-teal group-hover:text-koracart-navy">{category.icon}</span>
                <p className="mt-4 text-sm font-extrabold">{category.name}</p>
                <p className="mt-1 text-xs text-slate-400">{category.count}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="featured" className="bg-koracart-mist py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.18em] text-koracart-teal">Handpicked inspiration</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Discover something good</h2>
                <p className="mt-3 text-sm text-slate-500 sm:text-base">A preview of the finds waiting across the marketplace.</p>
              </div>
              <button className="hidden items-center gap-2 text-sm font-bold sm:flex">Explore all products <ArrowRight size={17} /></button>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {products.map((product) => (
                <article key={product.name} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-soft">
                  <div className={`product-art product-art-${product.tone} relative flex h-40 items-center justify-center sm:h-56`}>
                    <span className="text-6xl font-light text-koracart-navy/70 transition duration-300 group-hover:scale-110">{product.symbol}</span>
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-koracart-navy">{product.tag}</span>
                    <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 transition hover:text-rose-500" aria-label={`Save ${product.name}`}><Heart size={16} /></button>
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{product.category}</p>
                    <h3 className="mt-1 text-sm font-extrabold sm:text-base">{product.name}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-black">{product.price}</span>
                      {product.old && <span className="text-xs text-slate-400 line-through">{product.old}</span>}
                    </div>
                    <p className="mt-2 flex items-center gap-1 text-xs text-slate-400"><Store size={13} /> Independent KoraCart seller</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">Illustrative product previews. Live vendor listings will appear as marketplace features are implemented.</p>
          </div>
        </section>

        <section id="sell" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-koracart-navy px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border-[50px] border-white/5" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[.18em] text-koracart-teal">For independent businesses</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Your business deserves a bigger shop window.</h2>
                <p className="mt-4 max-w-xl leading-7 text-white/65">Bring your products to a marketplace designed to help independent sellers reach more customers and manage orders with confidence.</p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-koracart-teal px-6 py-4 text-sm font-extrabold text-koracart-navy transition hover:bg-koracart-amber">Become a seller <ArrowRight size={18} /></button>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-white py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-koracart-mist text-koracart-teal"><ShieldCheck /></span><div><h3 className="font-extrabold">Shop with confidence</h3><p className="mt-1 text-sm leading-6 text-slate-500">A checkout experience designed with payment security in mind.</p></div></div>
            <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-koracart-mist text-koracart-teal"><PackageCheck /></span><div><h3 className="font-extrabold">Know where your order is</h3><p className="mt-1 text-sm leading-6 text-slate-500">Follow order progress from confirmation to delivery.</p></div></div>
            <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-koracart-mist text-koracart-teal"><Headphones /></span><div><h3 className="font-extrabold">A marketplace for everyone</h3><p className="mt-1 text-sm leading-6 text-slate-500">Discover independent sellers and products in one place.</p></div></div>
          </div>
        </section>
      </main>

      <footer className="bg-koracart-navy px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="inline-flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-koracart-teal font-black text-koracart-navy">K</span><span className="text-xl font-extrabold">Kora<span className="text-koracart-teal">Cart</span></span></a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Many sellers. One seamless marketplace. Discover more, shop confidently.</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                <span className={`h-2 w-2 rounded-full ${apiStatus === 'online' ? 'bg-emerald-400' : apiStatus === 'offline' ? 'bg-amber-400' : 'bg-slate-400'}`} />
                API {apiStatus === 'online' ? 'connected' : apiStatus === 'offline' ? 'not connected yet' : 'checking'}
              </div>
            </div>
            <div><h4 className="font-extrabold">Marketplace</h4><div className="mt-4 flex flex-col gap-3 text-sm text-white/55"><a href="#categories" className="hover:text-white">Categories</a><a href="#featured" className="hover:text-white">Featured products</a><a href="#sell" className="hover:text-white">Become a seller</a></div></div>
            <div><h4 className="font-extrabold">Customer care</h4><div className="mt-4 flex flex-col gap-3 text-sm text-white/55"><a href="#" className="hover:text-white">Help centre</a><a href="#" className="hover:text-white">Order tracking</a><a href="#" className="hover:text-white">Returns policy</a></div></div>
            <div><h4 className="font-extrabold">Your account</h4><div className="mt-4 flex flex-col gap-3 text-sm text-white/55"><a href="#" className="hover:text-white">Sign in</a><a href="#" className="hover:text-white">Create account</a><a href="#" className="hover:text-white">Seller portal</a></div></div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row"><p>© {new Date().getFullYear()} KoraCart. All rights reserved.</p><p>Built for a better way to shop.</p></div>
        </div>
      </footer>
    </div>
  )
}

export default App
