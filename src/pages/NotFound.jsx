import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '96px 24px' }}>
      <h1>404</h1>
      <p>We couldn&rsquo;t find that page.</p>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </section>
  )
}
