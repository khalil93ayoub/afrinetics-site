export default function App() {
  const products = [
    {
      size: 'M',
      price: '24,99 €',
      link: 'https://www.ebay.de/itm/366348426609?var=636132495995'
    },
    {
      size: 'L',
      price: '29,99 €',
      link: 'https://www.ebay.de/itm/366348426609?var=636132495994'
    }
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050505',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <section
        style={{
          padding: '80px 24px 60px',
          background:
            'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 45%), linear-gradient(180deg, #111 0%, #050505 100%)',
          textAlign: 'center'
        }}
      >
        <img
          src="https://raw.githubusercontent.com/khalil93ayoub/afrinetics-site/main/logo.png"
          alt="Afrinetics logo"
          style={{
            width: 140,
            height: 140,
            objectFit: 'contain',
            marginBottom: 24,
            filter: 'invert(1)'
          }}
        />

        <h1
          style={{
            fontSize: 'clamp(52px, 9vw, 90px)',
            margin: 0,
            letterSpacing: 4
          }}
        >
          AFRINETICS
        </h1>

        <p
          style={{
            fontSize: 24,
            color: '#cfcfcf',
            marginTop: 16,
            letterSpacing: 2
          }}
        >
          African Genetics
        </p>

        <p
          style={{
            maxWidth: 760,
            margin: '28px auto 48px',
            fontSize: 20,
            lineHeight: 1.7,
            color: '#b5b5b5'
          }}
        >
          A premium oversized t-shirt inspired by identity, pride and heritage.
          Free shipping everywhere in Germany.
        </p>

        <img
          src="https://raw.githubusercontent.com/khalil93ayoub/afrinetics-site/main/tshirt.png"
          alt="Afrinetics t-shirt"
          style={{
            width: '100%',
            maxWidth: 1100,
            borderRadius: 32,
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)'
          }}
        />
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '80px 24px'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: 42,
            marginBottom: 50
          }}
        >
          Available Sizes
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 30
          }}
        >
          {products.map((product) => (
            <div
              key={product.size}
              style={{
                background: '#121212',
                border: '1px solid #2a2a2a',
                borderRadius: 30,
                padding: 40,
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 'bold',
                  marginBottom: 10
                }}
              >
                {product.size}
              </div>

              <div
                style={{
                  color: '#aaaaaa',
                  marginBottom: 30,
                  fontSize: 18
                }}
              >
                Free shipping in Germany
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 'bold',
                  marginBottom: 34
                }}
              >
                {product.price}
              </div>

              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#111',
                  padding: '16px 28px',
                  borderRadius: 18,
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: 18
                }}
              >
                Buy on eBay
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
