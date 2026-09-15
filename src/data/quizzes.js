// Quiz banks for the Gamify / Practice Arena page. Client-side only.

export const quizzes = [
  {
    id: 'algebra-1-quiz',
    subjectId: 'algebra-1',
    subjectName: 'Algebra I',
    level: 'High School',
    difficulty: 'Beginner',
    questions: [
      {
        q: 'Solve for x: 2x + 5 = 17',
        options: ['x = 5', 'x = 6', 'x = 11', 'x = 22'],
        answer: 1,
        explain: 'Subtract 5: 2x = 12. Divide by 2: x = 6.',
      },
      {
        q: 'What is the slope of the line through (1, 2) and (3, 8)?',
        options: ['2', '3', '4', '6'],
        answer: 2,
        explain: 'm = (8 − 2)/(3 − 1) = 6/2 = 3.',
      },
      {
        q: 'Factor x² + 5x + 6',
        options: ['(x+2)(x+3)', '(x+1)(x+6)', '(x−2)(x−3)', '(x+6)(x−1)'],
        answer: 0,
        explain: 'Need two numbers multiplying to 6 and summing to 5: 2 and 3.',
      },
      {
        q: 'Which point satisfies y = 2x − 1?',
        options: ['(0, 1)', '(1, 1)', '(2, 5)', '(1, 3)'],
        answer: 1,
        explain: 'Plug x=1: y = 2(1) − 1 = 1, matching (1, 1).',
      },
      {
        q: 'Solve the system: x + y = 10, x − y = 2',
        options: ['x=6, y=4', 'x=4, y=6', 'x=5, y=5', 'x=8, y=2'],
        answer: 0,
        explain: 'Add the equations: 2x = 12 → x = 6. Then y = 10 − 6 = 4.',
      },
    ],
  },
  {
    id: 'geometry-quiz',
    subjectId: 'geometry',
    subjectName: 'Geometry',
    level: 'High School',
    difficulty: 'Intermediate',
    questions: [
      {
        q: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
        options: ['10', '12', '14', '9'],
        answer: 0,
        explain: '6² + 8² = 36 + 64 = 100 = 10².',
      },
      {
        q: 'The interior angles of a triangle sum to:',
        options: ['90°', '180°', '270°', '360°'],
        answer: 1,
        explain: 'This holds for every triangle in Euclidean geometry.',
      },
      {
        q: 'What is the area of a circle with radius 5?',
        options: ['10π', '25π', '5π', '50π'],
        answer: 1,
        explain: 'A = πr² = π(5²) = 25π.',
      },
      {
        q: 'Two triangles with equal corresponding angles but different sizes are:',
        options: ['Congruent', 'Similar', 'Regular', 'Complementary'],
        answer: 1,
        explain: 'Same shape, proportional sides, possibly different size — that is similarity.',
      },
    ],
  },
  {
    id: 'trigonometry-quiz',
    subjectId: 'trigonometry',
    subjectName: 'Trigonometry',
    level: 'High School',
    difficulty: 'Intermediate',
    questions: [
      {
        q: 'sin(30°) equals:',
        options: ['1/2', '√2/2', '√3/2', '1'],
        answer: 0,
        explain: 'A standard unit-circle value: sin 30° = 1/2.',
      },
      {
        q: 'How many radians are in 180°?',
        options: ['π/2', 'π', '2π', '360'],
        answer: 1,
        explain: 'π radians = 180° by definition of radian measure.',
      },
      {
        q: 'sin²θ + cos²θ equals:',
        options: ['0', '1', '2', 'tan θ'],
        answer: 1,
        explain: 'The Pythagorean identity, true for all θ.',
      },
      {
        q: 'What is the period of y = sin(3x)?',
        options: ['2π/3', '3π', '2π', 'π/3'],
        answer: 0,
        explain: 'Period = 2π / |B| with B = 3, giving 2π/3.',
      },
    ],
  },
  {
    id: 'calculus-1-quiz',
    subjectId: 'calculus-1',
    subjectName: 'Calculus I',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    questions: [
      {
        q: 'What is d/dx[x³]?',
        options: ['x²', '3x', '3x²', 'x³/3'],
        answer: 2,
        explain: 'Power rule: bring down the exponent and reduce it by 1: 3x².',
      },
      {
        q: 'lim(x→0) sin(x)/x equals:',
        options: ['0', '1', '∞', 'undefined'],
        answer: 1,
        explain: 'A classic limit, provable via the squeeze theorem, equal to 1.',
      },
      {
        q: 'What is ∫2x dx?',
        options: ['x² + C', '2x² + C', 'x²/2 + C', '2 + C'],
        answer: 0,
        explain: 'Reverse the power rule: ∫2x dx = x² + C.',
      },
      {
        q: 'A function has f′(x) = 0 at x = 3 and f″(3) < 0. What happens at x = 3?',
        options: ['Local minimum', 'Local maximum', 'Inflection point', 'Discontinuity'],
        answer: 1,
        explain: 'Negative second derivative at a critical point means concave down — a local maximum.',
      },
      {
        q: 'Using the chain rule, d/dx[(2x+1)³] is:',
        options: ['3(2x+1)²', '6(2x+1)²', '3(2x+1)²·2', '(2x+1)²'],
        answer: 1,
        explain: 'd/dx = 3(2x+1)² × 2 = 6(2x+1)².',
      },
    ],
  },
  {
    id: 'calculus-2-quiz',
    subjectId: 'calculus-2',
    subjectName: 'Calculus II',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    questions: [
      {
        q: 'For ∫x eˣ dx using integration by parts, which choice of u is best?',
        options: ['u = eˣ', 'u = x', 'u = x·eˣ', 'u = 1'],
        answer: 1,
        explain: 'Choosing u = x makes du = dx, simplifying the integral after one application.',
      },
      {
        q: 'The geometric series Σ (1/2)ⁿ converges to:',
        options: ['1', '2', '1/2', 'diverges'],
        answer: 1,
        explain: 'a/(1−r) with a=1, r=1/2 gives 1/(1/2) = 2 (with n starting at 0).',
      },
      {
        q: 'What does the ratio test examine?',
        options: [
          'lim |aₙ₊₁/aₙ|',
          'lim aₙ',
          'the integral of aₙ',
          'the sum of the first n terms',
        ],
        answer: 0,
        explain: 'The ratio test looks at the limiting ratio of consecutive terms.',
      },
    ],
  },
  {
    id: 'linear-algebra-quiz',
    subjectId: 'linear-algebra',
    subjectName: 'Linear Algebra',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    questions: [
      {
        q: 'The determinant of [[3,1],[2,4]] is:',
        options: ['10', '14', '12', '8'],
        answer: 0,
        explain: 'ad − bc = 3(4) − 1(2) = 12 − 2 = 10.',
      },
      {
        q: 'If Av = λv for nonzero v, λ is called:',
        options: ['A determinant', 'An eigenvalue', 'A rank', 'A transpose'],
        answer: 1,
        explain: 'That is the definition of an eigenvalue with eigenvector v.',
      },
      {
        q: 'A matrix with determinant 0 is:',
        options: ['Invertible', 'Singular (not invertible)', 'Symmetric', 'Diagonal'],
        answer: 1,
        explain: 'A zero determinant means the matrix has no inverse.',
      },
    ],
  },
  {
    id: 'differential-equations-quiz',
    subjectId: 'differential-equations',
    subjectName: 'Differential Equations',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    questions: [
      {
        q: 'dy/dx = ky (k constant) has general solution:',
        options: ['y = kx + C', 'y = Ce^(kx)', 'y = k·x²/2', 'y = C/x'],
        answer: 1,
        explain: 'This is exponential growth/decay, solved by separation of variables.',
      },
      {
        q: 'For ay″+by′+cy=0, the characteristic equation is:',
        options: ['ar+b=0', 'ar²+br+c=0', 'a+br=0', 'ar³+br²+c=0'],
        answer: 1,
        explain: 'Substituting y = e^(rx) gives this quadratic in r.',
      },
      {
        q: 'The Laplace transform is most useful for solving ODEs with:',
        options: [
          'Constant solutions only',
          'Discontinuous or impulsive forcing',
          'No initial conditions',
          'Only first-order terms',
        ],
        answer: 1,
        explain: 'Laplace transforms handle discontinuities and impulses that are awkward for direct methods.',
      },
    ],
  },
  {
    id: 'probability-statistics-quiz',
    subjectId: 'probability-statistics',
    subjectName: 'Probability & Statistics',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    questions: [
      {
        q: 'Two fair dice are rolled. What is P(sum = 7)?',
        options: ['1/6', '1/12', '1/36', '6/36'],
        answer: 0,
        explain: '6 of the 36 outcomes sum to 7: 6/36 = 1/6.',
      },
      {
        q: 'For a binomial with n=4, p=0.5, P(exactly 2 successes) is:',
        options: ['0.25', '0.375', '0.5', '0.125'],
        answer: 1,
        explain: 'C(4,2)(0.5)²(0.5)² = 6 × 0.0625 = 0.375.',
      },
      {
        q: 'The standard deviation is:',
        options: [
          'The average of the data',
          'The square root of the variance',
          'The most frequent value',
          'The range divided by 2',
        ],
        answer: 1,
        explain: 'σ = √Var(X), by definition.',
      },
    ],
  },
  {
    id: 'real-analysis-quiz',
    subjectId: 'real-analysis',
    subjectName: 'Real Analysis',
    level: 'Graduate',
    difficulty: 'Advanced',
    questions: [
      {
        q: 'The completeness axiom of the reals states:',
        options: [
          'Every set has a maximum',
          'Every nonempty set bounded above has a least upper bound',
          'Every sequence converges',
          'Every function is continuous',
        ],
        answer: 1,
        explain: 'This least-upper-bound property is what distinguishes R from Q.',
      },
      {
        q: 'A compact subset of R is, equivalently:',
        options: ['Open and unbounded', 'Closed and bounded', 'Countable', 'Convex'],
        answer: 1,
        explain: 'The Heine-Borel theorem: compact ⇔ closed and bounded, in Rⁿ.',
      },
      {
        q: 'The Mean Value Theorem guarantees a point c where:',
        options: [
          'f(c) = 0',
          "f′(c) equals the average rate of change over [a,b]",
          'f is discontinuous',
          'f″(c) = 0',
        ],
        answer: 1,
        explain: 'That equality is precisely the conclusion of the MVT.',
      },
    ],
  },
  {
    id: 'engineering-mathematics-quiz',
    subjectId: 'engineering-mathematics',
    subjectName: 'Engineering Mathematics',
    level: 'Graduate',
    difficulty: 'Advanced',
    questions: [
      {
        q: 'A Fourier series decomposes a periodic signal into:',
        options: [
          'A single exponential',
          'A sum of sines and cosines of increasing frequency',
          'A polynomial approximation',
          'A random noise signal',
        ],
        answer: 1,
        explain: 'That decomposition into harmonics is the essence of a Fourier series.',
      },
      {
        q: 'The heat equation is:',
        options: ['∂u/∂t = α∇²u', '∂²u/∂t² = c²∇²u', '∇²u = 0', '∇×F = 0'],
        answer: 0,
        explain: 'The heat/diffusion equation relates the time derivative to the Laplacian.',
      },
      {
        q: 'Divergence of a vector field measures:',
        options: [
          'Local rotation',
          'Net outflow ("source strength") from a point',
          'The gradient direction',
          'Total energy',
        ],
        answer: 1,
        explain: 'Divergence captures how much a field spreads out from (or converges into) a point.',
      },
    ],
  },
]

export function getQuizzesBySubject(subjectId) {
  return quizzes.filter((quiz) => quiz.subjectId === subjectId)
}
