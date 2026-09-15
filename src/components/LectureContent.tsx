import type { Lecture } from '@/data/types'

export default function LectureContent({ lecture }: { lecture: Lecture }) {
  return (
    <div className="lecture-content">
      <h3 id={lecture.id}>{lecture.title}</h3>
      {lecture.sections.map((section, i) => (
        <div key={i}>
          <h4>{section.heading}</h4>
          {section.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {section.formulas && section.formulas.length > 0 && (
            <div className="formula-box">
              {section.formulas.map((f, k) => (
                <div key={k}>{f}</div>
              ))}
            </div>
          )}
          {section.list && (
            <ul>
              {section.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
          {section.example && (
            <div className="example-box">
              <div className="example-label">Worked Example</div>
              <p style={{ marginBottom: 8, color: 'var(--text)' }}>
                <strong>Problem:</strong> {section.example.problem}
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Solution:</strong> {section.example.solution}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
