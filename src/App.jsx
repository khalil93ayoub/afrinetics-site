export default function App() {
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
