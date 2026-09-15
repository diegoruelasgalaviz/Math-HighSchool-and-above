import { useState } from 'react'

export default function QuizPlayer({ quiz, onExit, onComplete }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = quiz.questions.length
  const question = quiz.questions[index]
  const isLast = index === total - 1

  function selectOption(optIndex) {
    if (selected !== null) return
    setSelected(optIndex)
    const correct = optIndex === question.answer
    if (correct) {
      setScore((s) => s + 1)
      setStreak((st) => {
        const next = st + 1
        setBestStreak((b) => Math.max(b, next))
        return next
      })
    } else {
      setStreak(0)
    }
  }

  function next() {
    if (isLast) {
      const finalScore = score
      setFinished(true)
      onComplete && onComplete({ quizId: quiz.id, score: finalScore, total, bestStreak })
      return
    }
    setSelected(null)
    setIndex((i) => i + 1)
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    return (
      <div className="results-screen">
        <div className="pill pill-undergrad" style={{ marginBottom: 16 }}>
          {quiz.subjectName}
        </div>
        <h2 style={{ marginBottom: 4 }}>Quiz complete</h2>
        <div className="results-score">
          {score}/{total}
        </div>
        <p>
          {pct}% correct &middot; best streak {bestStreak}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
          <button className="btn btn-secondary" onClick={onExit} type="button">
            Back to Arena
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-stage">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span className="pill pill-undergrad">{quiz.subjectName}</span>
        <span className="streak-badge">🔥 {streak} streak</span>
      </div>
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(index / total) * 100}%` }} />
      </div>
      <p style={{ marginTop: 10, color: 'var(--text-faint)', fontSize: '0.85rem' }}>
        Question {index + 1} of {total}
      </p>
      <div className="quiz-question">{question.q}</div>
      <div className="quiz-options">
        {question.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (i === question.answer) cls += ' correct'
            else if (i === selected) cls += ' incorrect'
          }
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={selected !== null}
              onClick={() => selectOption(i)}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <div className="quiz-feedback">
          {selected === question.answer ? 'Correct. ' : 'Not quite. '}
          {question.explain}
        </div>
      )}
      <div className="quiz-footer">
        <button className="btn btn-secondary" onClick={onExit} type="button">
          Exit
        </button>
        <button className="btn btn-primary" onClick={next} disabled={selected === null} type="button">
          {isLast ? 'See Results' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
