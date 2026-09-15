import { Link } from 'react-router-dom'
import { subjects, LEVELS } from '../data/subjects.js'
import SubjectCard from '../components/SubjectCard.jsx'

const totalLectures = subjects.reduce((sum, subj) => sum + subj.lectures.length, 0)

const featuredIds = [
  'algebra-1',
  'geometry',
  'calculus-1',
  'linear-algebra',
  'probability-statistics',
  'engineering-mathematics',
]
const featured = featuredIds.map((id) => subjects.find((s) => s.id === id)).filter(Boolean)

const pathSteps = [
  {
    level: 'High School',
    blurb: 'Pre-Algebra through Precalculus — the arithmetic, algebra, and geometry foundation.',
    color: 'var(--violet)',
  },
  {
    level: 'Undergraduate',
    blurb: 'Calculus I–III, Linear Algebra, Differential Equations, Probability, and more.',
    color: 'var(--accent)',
  },
  {
    level: 'Graduate',
    blurb: 'Real & Complex Analysis, Abstract Algebra, and Engineering Mathematics.',
    color: 'var(--gold)',
  },
]

export default function Landing() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Free &middot; No Sign-Up &middot; No Backend</span>
            <h1>Learn math from Algebra I to graduate engineering &mdash; in one place.</h1>
            <p className="hero-sub">
              Summit Math is a self-contained study reference: real lectures with worked examples for every
              subject, a searchable and filterable documents library, and a gamified practice arena to test
              what you know.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/documents">
                Browse the Documents Library
              </Link>
              <Link className="btn btn-secondary" to="/gamify">
                Try the Practice Arena
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <span className="stat-num">{subjects.length}</span>
                <div className="stat-label">Subjects</div>
              </div>
              <div>
                <span className="stat-num">{totalLectures}</span>
                <div className="stat-label">Lectures</div>
              </div>
              <div>
                <span className="stat-num">3</span>
                <div className="stat-label">Levels, HS to Grad</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-title">A taste of what&rsquo;s inside</div>
            <div className="hero-formula-line">d/dx[xⁿ] = n·xⁿ⁻¹</div>
            <div className="hero-formula-line">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
            <div className="hero-formula-line">Av = λv</div>
            <div className="hero-formula-line">e^(iθ) = cos θ + i sin θ</div>
            <div className="hero-formula-line">P(A|B) = P(A ∩ B) / P(B)</div>
            <div className="hero-formula-line">∇²u = 0</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>One continuous path, three levels</h2>
        </div>
        <div className="grid">
          {pathSteps.map((step) => (
            <div className="card" key={step.level}>
              <div className="card-icon" style={{ background: 'rgba(255,255,255,0.06)', color: step.color }}>
                ●
              </div>
              <h3>{step.level}</h3>
              <p>{step.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured subjects</h2>
          <Link to="/documents">See all {subjects.length} subjects &rarr;</Link>
        </div>
        <div className="grid">
          {featured.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>How Summit Math works</h2>
        </div>
        <div className="grid">
          <div className="card">
            <div className="card-icon" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              📖
            </div>
            <h3>Read</h3>
            <p>
              Every subject is a self-contained set of lectures with definitions, formulas, and worked
              examples &mdash; no external textbook required.
            </p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ background: 'rgba(167,139,250,0.15)', color: 'var(--violet)' }}>
              🔎
            </div>
            <h3>Filter &amp; Search</h3>
            <p>
              Jump straight to what you need with a live search bar plus level and difficulty filters across
              the whole catalog.
            </p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ background: 'rgba(244,201,93,0.15)', color: 'var(--gold)' }}>
              🎮
            </div>
            <h3>Practice</h3>
            <p>
              Reinforce what you read in the Practice Arena: timed multiple-choice quizzes with streaks and
              scoring, subject by subject.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
