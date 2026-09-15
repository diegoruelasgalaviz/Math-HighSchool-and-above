import { Link, useParams } from 'react-router-dom'
import { subjects, getSubjectById } from '../data/subjects.js'
import LectureContent from '../components/LectureContent.jsx'
import NotFound from './NotFound.jsx'

const levelPillClass = {
  'High School': 'pill-hs',
  Undergraduate: 'pill-undergrad',
  Graduate: 'pill-grad',
}

export default function SubjectDetail() {
  const { subjectId } = useParams()
  const subject = getSubjectById(subjectId)

  if (!subject) return <NotFound />

  const idx = subjects.findIndex((s) => s.id === subjectId)
  const prev = subjects[idx - 1]
  const next = subjects[idx + 1]

  return (
    <section className="section">
      <div className="subject-header">
        <div className="breadcrumb">
          <Link to="/documents">Documents</Link> / {subject.name}
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <span className={`pill ${levelPillClass[subject.level]}`}>{subject.level}</span>
          <span className="pill pill-diff">{subject.difficulty}</span>
        </div>
        <h1 style={{ fontSize: '2.1rem', marginBottom: 8 }}>
          {subject.icon} {subject.name}
        </h1>
        <p style={{ maxWidth: '65ch' }}>{subject.summary}</p>
      </div>

      <div className="lecture-layout">
        <aside className="toc">
          <div className="toc-title">Lectures</div>
          {subject.lectures.map((lecture) => (
            <a key={lecture.id} href={`#${lecture.id}`}>
              {lecture.title}
            </a>
          ))}
        </aside>
        <div>
          {subject.lectures.map((lecture) => (
            <LectureContent key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </div>

      <div className="subject-nav-footer">
        {prev ? (
          <Link to={`/documents/${prev.id}`}>&larr; {prev.name}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/documents/${next.id}`}>{next.name} &rarr;</Link>
        ) : (
          <span />
        )}
      </div>
    </section>
  )
}
