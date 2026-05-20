import logoUrl from '../logo.png'
import tshirtUrl from '../tshirt.png'

const products = [
  {
    size: 'M',
    price: '24,99 €',
    href: 'https://www.ebay.de/itm/366348426609?var=636132495995'
  },
  {
    size: 'L',
    price: '29,99 €',
    href: 'https://www.ebay.de/itm/366348426609?var=636132495994'
  }
]

const socialLinks = [
  {
    label: 'Instagram',
    shortLabel: 'IG',
    href: 'https://www.instagram.com/afri_netics/'
  },
  {
    label: 'Facebook',
    shortLabel: 'f',
    href: 'https://www.facebook.com/afrinetic'
  }
]

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <p className="product-card__size">{product.size}</p>
      <p className="product-card__shipping">Free shipping in Germany</p>
      <p className="product-card__price">{product.price}</p>
      <a className="button" href={product.href} target="_blank" rel="noreferrer">
        Buy on eBay
      </a>
    </article>
  )
}

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <img className="hero__logo" src={logoUrl} alt="Afrinetics logo" />
          <p className="hero__eyebrow">African Genetics</p>
          <h1 id="hero-title">AFRINETICS</h1>
          <p className="hero__copy">
            A premium oversized t-shirt inspired by identity, pride and
            heritage. Free shipping everywhere in Germany.
          </p>
        </div>

        <img
          className="hero__product"
          src={tshirtUrl}
          alt="Black Afrinetics oversized t-shirt"
        />
      </section>

      <section className="products" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="section-heading__label">Shop</p>
          <h2 id="products-title">Available Sizes</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.size} product={product} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Follow Afrinetics</p>
        <nav className="social-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              {link.shortLabel}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  )
}
