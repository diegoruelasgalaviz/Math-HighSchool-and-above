import { Link } from 'react-router-dom'

const levelPillClass = {
  'High School': 'pill-hs',
  Undergraduate: 'pill-undergrad',
  Graduate: 'pill-grad',
}

export default function SubjectCard({ subject }) {
  return (
    <Link to={`/documents/${subject.id}`} className="card" style={{ display: 'block', textDecoration: 'none' }}>
      <div className="card-icon" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
        {subject.icon}
      </div>
      <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>{subject.name}</h3>
      <p style={{ fontSize: '0.9rem', minHeight: '3em' }}>{subject.summary}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
        <span className={`pill ${levelPillClass[subject.level]}`}>{subject.level}</span>
        <span className="pill pill-diff">{subject.difficulty}</span>
      </div>
      <div style={{ marginTop: 12, fontSize: '0.8rem', color: 'var(--text-faint)' }}>
        {subject.lectures.length} lecture{subject.lectures.length === 1 ? '' : 's'}
      </div>
    </Link>
  )
}
