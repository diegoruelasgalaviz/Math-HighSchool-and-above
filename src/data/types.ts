export type Level = 'High School' | 'Undergraduate' | 'Graduate'
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Example {
  problem: string
  solution: string
}

export interface Section {
  heading: string
  paragraphs: string[]
  formulas: string[]
  example: Example | null
  list: string[] | null
}

export interface Lecture {
  id: string
  title: string
  sections: Section[]
}

export interface Subject {
  id: string
  name: string
  level: Level
  difficulty: Difficulty
  difficultyRank: number
  icon: string
  tags: string[]
  summary: string
  lectures: Lecture[]
}

export interface Question {
  q: string
  options: string[]
  answer: number
  explain: string
}

export interface Quiz {
  id: string
  subjectId: string
  subjectName: string
  level: Level
  difficulty: Difficulty
  questions: Question[]
}

export interface GamifyStats {
  totalCorrect: number
  totalAnswered: number
  quizzesCompleted: number
  bestStreak: number
}
