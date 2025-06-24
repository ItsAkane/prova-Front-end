

export default function Home() {
  return (
  
  <div style={{ textAlign: 'center', marginTop: '4rem', animation: 'fadeIn 2s' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      👋✨ Bem-vindo à Página Inicial! ✨👋
    </h1>
    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
      Explore as funcionalidades abaixo e aproveite sua experiência! 🚀🎓
    </p>
    <a
      href="/houses"
      style={{
        display: 'inline-block',
        margin: '0.5rem',
        padding: '0.75rem 1.5rem',
        background: '#4f46e5',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        transition: 'background 0.2s',
      }}
    >
      📋 Listar Casas
    </a>
    <a
      href="/houses/new"
      style={{
        display: 'inline-block',
        margin: '0.5rem',
        padding: '0.75rem 1.5rem',
        background: '#22c55e',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        transition: 'background 0.2s',
      }}
    >
      🏫 Cadastrar Casas
    </a>
    <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        a:hover {
          filter: brightness(0.9);
        }
      `}
    </style>
  </div>
  );
}
