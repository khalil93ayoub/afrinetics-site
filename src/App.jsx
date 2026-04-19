export default function App() {
  const ebayLink = "https://www.ebay.de/";

  const products = [
    { size: "M", price: "24,99 €" },
    { size: "L", price: "29,99 €" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #111, #222)'
      }}>
        <div style={{
          width: 140,
          height: 140,
          margin: '0 auto 30px',
          borderRadius: 30,
          background: '#d4a017',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 56,
          fontWeight: 'bold',
          color: '#111'
        }}>
          A
        </div>

        <h1 style={{ fontSize: 56, margin: 0 }}>
          AFRINETICS
        </h1>

        <p style={{ color: '#bbb', fontSize: 22, marginTop: 10 }}>
          African Genetics
        </p>

        <p style={{
          maxWidth: 700,
          margin: '30px auto',
          color: '#ddd',
          fontSize: 20,
          lineHeight: 1.6
        }}>
          Premium t-shirts inspired by African identity and heritage.
          Free shipping anywhere in Germany.
        </p>

        <img
          src="https://via.placeholder.com/500x600?text=Afrinetics+T-Shirt"
          alt="Afrinetics Shirt"
          style={{
            width: '100%',
            maxWidth: 420,
            borderRadius: 30,
            marginTop: 20
          }}
        />
      </section>

}
