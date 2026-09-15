import { LEVELS, DIFFICULTIES } from '../data/subjects.js'

export default function FilterBar({ query, onQueryChange, level, onLevelChange, difficulty, onDifficultyChange }) {
  return (
    <div className="filter-bar">
      <div className="search-input-wrap">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Search subjects or topics (e.g. “derivative”, “eigenvalue”)…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search subjects or topics"
        />
      </div>
      <div className="filter-group" role="group" aria-label="Filter by level">
        <button
          className={`filter-chip ${level === 'All' ? 'active' : ''}`}
          onClick={() => onLevelChange('All')}
          type="button"
        >
          All Levels
        </button>
        {LEVELS.map((lvl) => (
          <button
            key={lvl}
            className={`filter-chip ${level === lvl ? 'active' : ''}`}
            onClick={() => onLevelChange(lvl)}
            type="button"
          >
            {lvl}
          </button>
        ))}
      </div>
      <div className="filter-group" role="group" aria-label="Filter by difficulty">
        <button
          className={`filter-chip ${difficulty === 'All' ? 'active' : ''}`}
          onClick={() => onDifficultyChange('All')}
          type="button"
        >
          All Difficulties
        </button>
        {DIFFICULTIES.map((diff) => (
          <button
            key={diff}
            className={`filter-chip ${difficulty === diff ? 'active' : ''}`}
            onClick={() => onDifficultyChange(diff)}
            type="button"
          >
            {diff}
          </button>
        ))}
      </div>
    </div>
  )
}
