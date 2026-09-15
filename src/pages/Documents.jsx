import { useMemo, useState } from 'react'
import { subjects } from '../data/subjects.js'
import SubjectCard from '../components/SubjectCard.jsx'
import FilterBar from '../components/FilterBar.jsx'

function matchesQuery(subject, query) {
  if (!query.trim()) return true
  const q = query.trim().toLowerCase()
  if (subject.name.toLowerCase().includes(q)) return true
  if (subject.summary.toLowerCase().includes(q)) return true
  if (subject.tags.some((tag) => tag.toLowerCase().includes(q))) return true
  return subject.lectures.some((lecture) => lecture.title.toLowerCase().includes(q))
}

export default function Documents() {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All')
  const [difficulty, setDifficulty] = useState('All')

  const filtered = useMemo(() => {
    return subjects.filter((subject) => {
      if (level !== 'All' && subject.level !== level) return false
      if (difficulty !== 'All' && subject.difficulty !== difficulty) return false
      return matchesQuery(subject, query)
    })
  }, [query, level, difficulty])

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <div>
            <h2>Documents Library</h2>
            <p>Every subject, high school through graduate engineering math, with full lectures inside.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          level={level}
          onLevelChange={setLevel}
          difficulty={difficulty}
          onDifficultyChange={setDifficulty}
        />
        <div className="result-count">
          {filtered.length} subject{filtered.length === 1 ? '' : 's'} found
        </div>
        {filtered.length === 0 ? (
          <div className="empty-state">
            No subjects match your filters. Try clearing the search or difficulty filter.
          </div>
        ) : (
          <div className="grid">
            {filtered.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
