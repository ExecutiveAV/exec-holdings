'use client'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Exec</h1>
      </header>
      <div className="buttons">
        <button onClick={() => window.location.href='https://www.instagram.com/exec.studios/'}>
          <p>Connect: @Exec.Studios</p>
        </button>
        <button onClick={() => window.location.href='https://www.executiveav.com/'}>
          <p>Executive Audio Visual</p>
        </button>
        <button onClick={() => window.location.href='https://alejandro0684.wixsite.com/exec-studios'}>
          <p>Executive Studios</p>
        </button>
        <button onClick={() => window.location.href='https://www.luxbyexecutive.com/'}>
          <p>Lux by Executive</p>
        </button>
      </div>
    </div>
  )
}
