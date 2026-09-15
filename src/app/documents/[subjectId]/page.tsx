import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { subjects, getSubjectById } from '@/data/subjects'
import LectureContent from '@/components/LectureContent'
import type { Level } from '@/data/types'

const levelPillClass: Record<Level, string> = {
  'High School': 'pill-hs',
  Undergraduate: 'pill-undergrad',
  Graduate: 'pill-grad',
}

interface SubjectPageProps {
  params: { subjectId: string }
}

export function generateStaticParams() {
  return subjects.map((subject) => ({ subjectId: subject.id }))
}

export function generateMetadata({ params }: SubjectPageProps): Metadata {
  const subject = getSubjectById(params.subjectId)
  if (!subject) return {}
  return {
    title: `${subject.name} — Summit Math`,
    description: subject.summary,
  }
}

export default function SubjectDetail({ params }: SubjectPageProps) {
  const subject = getSubjectById(params.subjectId)
  if (!subject) notFound()

  const idx = subjects.findIndex((s) => s.id === params.subjectId)
  const prev = subjects[idx - 1]
  const next = subjects[idx + 1]

  return (
    <section className="section">
      <div className="subject-header">
        <div className="breadcrumb">
          <Link href="/documents">Documents</Link> / {subject.name}
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
        {prev ? <Link href={`/documents/${prev.id}`}>&larr; {prev.name}</Link> : <span />}
        {next ? <Link href={`/documents/${next.id}`}>{next.name} &rarr;</Link> : <span />}
      </div>
    </section>
  )
}
