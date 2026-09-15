'use client'

import { useEffect, useMemo, useState } from 'react'
import { quizzes } from '@/data/quizzes.js'
import FilterBar from '@/components/FilterBar.jsx'
import QuizPlayer from '@/components/QuizPlayer.jsx'

const STORAGE_KEY = 'summit-math-gamify-stats-v1'

function loadStats() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { totalCorrect: 0, totalAnswered: 0, quizzesCompleted: 0, bestStreak: 0 }
    return JSON.parse(raw)
  } catch {
    return { totalCorrect: 0, totalAnswered: 0, quizzesCompleted: 0, bestStreak: 0 }
  }
}

function saveStats(stats) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  } catch {
    // localStorage unavailable (private mode, etc.) — stats simply won't persist
  }
}

export default function Gamify() {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [activeQuizId, setActiveQuizId] = useState(null)
  const [stats, setStats] = useState(() => ({ totalCorrect: 0, totalAnswered: 0, quizzesCompleted: 0, bestStreak: 0 }))

  useEffect(() => {
    setStats(loadStats())
  }, [])

  const filtered = useMemo(() => {
    return quizzes.filter((quiz) => {
      if (level !== 'All' && quiz.level !== level) return false
      if (difficulty !== 'All' && quiz.difficulty !== difficulty) return false
      if (!query.trim()) return true
      const q = query.trim().toLowerCase()
      return quiz.subjectName.toLowerCase().includes(q)
    })
  }, [query, level, difficulty])

  const activeQuiz = quizzes.find((q) => q.id === activeQuizId)

  function handleComplete({ score, total, bestStreak }) {
    setStats((prev) => {
      const next = {
        totalCorrect: prev.totalCorrect + score,
        totalAnswered: prev.totalAnswered + total,
        quizzesCompleted: prev.quizzesCompleted + 1,
        bestStreak: Math.max(prev.bestStreak, bestStreak),
      }
      saveStats(next)
      return next
    })
  }

  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0

  return (
    <section className="section">
      <div className="section-head">
        <div>
          <h2>Practice Arena</h2>
          <p>Gamified quizzes across every subject &mdash; build a streak and track your accuracy over time.</p>
        </div>
      </div>

      <div className="gamify-hero">
        <div className="stat-card">
          <span className="stat-num">{stats.quizzesCompleted}</span>
          <div className="stat-label">Quizzes Completed</div>
        </div>
        <div className="stat-card">
          <span className="stat-num">{accuracy}%</span>
          <div className="stat-label">Lifetime Accuracy</div>
        </div>
        <div className="stat-card">
          <span className="stat-num">🔥 {stats.bestStreak}</span>
          <div className="stat-label">Best Streak</div>
        </div>
      </div>

      {activeQuiz ? (
        <QuizPlayer quiz={activeQuiz} onExit={() => setActiveQuizId(null)} onComplete={handleComplete} />
      ) : (
        <div className="quiz-picker">
          <FilterBar
            query={query}
            onQueryChange={setQuery}
            level={level}
            onLevelChange={setLevel}
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
          <div className="result-count">
            {filtered.length} quiz{filtered.length === 1 ? '' : 'zes'} available
          </div>
          {filtered.length === 0 ? (
            <div className="empty-state">No quizzes match your filters yet.</div>
          ) : (
            <div className="grid">
              {filtered.map((quiz) => (
                <button
                  key={quiz.id}
                  type="button"
                  className="card quiz-card"
                  style={{ textAlign: 'left', width: '100%', border: '1px solid var(--border)' }}
                  onClick={() => setActiveQuizId(quiz.id)}
                >
                  <div className="card-icon" style={{ background: 'rgba(244,201,93,0.15)', color: 'var(--gold)' }}>
                    🎯
                  </div>
                  <h3 style={{ fontSize: '1.1rem' }}>{quiz.subjectName}</h3>
                  <p style={{ fontSize: '0.88rem' }}>{quiz.questions.length} questions</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className="pill pill-undergrad">{quiz.level}</span>
                    <span className="pill pill-diff">{quiz.difficulty}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
