'use client'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Exec</h1>
      </header>
      <div className="buttons">
        <button onClick={() => window.location.href='https://www.instagram.com/exec.studios/'}>
          <p>Exec Studios | Insta</p>
        </button>        
        <button onClick={() => window.location.href='https://alejandro0684.wixsite.com/exec-studios'}>
          <p>Exec Studios | Web</p>
        </button>
        <button onClick={() => window.location.href='https://www.executiveav.com/'}>
          <p>Executive Audio Visual</p>
        </button>
      </div>
      <footer>

      </footer>
  </div>
  )
}
