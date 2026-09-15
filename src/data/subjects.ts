// All content is authored inline — no backend, no CMS, no network calls.
import type { Difficulty, Example, Level, Section, Subject } from './types'

export const LEVELS: Level[] = ['High School', 'Undergraduate', 'Graduate']
export const DIFFICULTIES: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced']

interface SectionOpts {
  formulas?: string[]
  example?: Example | null
  list?: string[] | null
}

const s = (heading: string, paragraphs: string[], opts: SectionOpts = {}): Section => ({
  heading,
  paragraphs,
  formulas: opts.formulas || [],
  example: opts.example || null,
  list: opts.list || null,
})

export const subjects: Subject[] = [
  // ---------------------------------------------------------------- HIGH SCHOOL
  {
    id: 'pre-algebra',
    name: 'Pre-Algebra',
    level: 'High School',
    difficulty: 'Beginner',
    difficultyRank: 1,
    icon: '➗',
    tags: ['arithmetic', 'fractions', 'ratios', 'foundations'],
    summary: 'The arithmetic and number-sense foundation every later course builds on.',
    lectures: [
      {
        id: 'number-sense',
        title: 'Number Sense & Operations',
        sections: [
          s(
            'Integers and the Number Line',
            [
              'Integers are the whole numbers and their negatives: …, −2, −1, 0, 1, 2, …. On a number line, addition moves right and subtraction moves left.',
              'Multiplying two numbers with the same sign gives a positive result; multiplying numbers with opposite signs gives a negative result.',
            ],
            { formulas: ['(−a) × (−b) = a × b', '(−a) × b = −(a × b)'] },
          ),
          s(
            'Order of Operations',
            [
              'When an expression mixes several operations, evaluate it in a fixed order so everyone gets the same answer: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right) — PEMDAS.',
            ],
            {
              example: {
                problem: 'Evaluate 3 + 4 × (6 − 2)² ÷ 8',
                solution:
                  'Parentheses first: 6 − 2 = 4. Exponent: 4² = 16. Multiply/divide left to right: 4 × 16 = 64, then 64 ÷ 8 = 8. Finally add: 3 + 8 = 11.',
              },
            },
          ),
        ],
      },
      {
        id: 'fractions-decimals-percents',
        title: 'Fractions, Decimals & Percents',
        sections: [
          s(
            'Three Views of the Same Number',
            [
              'A fraction a/b, a decimal, and a percent are three notations for the same value. To convert a fraction to a decimal, divide the numerator by the denominator; to convert a decimal to a percent, multiply by 100.',
            ],
            { formulas: ['percent = decimal × 100%', 'decimal = fraction numerator ÷ denominator'] },
          ),
          s(
            'Working with Ratios',
            [
              'A ratio compares two quantities. Proportions (two equal ratios) are solved by cross-multiplying.',
            ],
            {
              example: {
                problem: 'If 3 pencils cost $1.20, how much do 7 pencils cost?',
                solution:
                  'Set up 3/1.20 = 7/x. Cross-multiply: 3x = 7 × 1.20 = 8.40, so x = $2.80.',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'algebra-1',
    name: 'Algebra I',
    level: 'High School',
    difficulty: 'Beginner',
    difficultyRank: 2,
    icon: '𝑥',
    tags: ['equations', 'linear functions', 'graphing', 'foundations'],
    summary: 'Variables, linear equations, graphing, and an introduction to functions.',
    lectures: [
      {
        id: 'solving-linear-equations',
        title: 'Solving Linear Equations',
        sections: [
          s(
            'The Balance Principle',
            [
              'An equation is a statement that two expressions are equal. You solve for a variable by performing the same operation to both sides, keeping the equation "balanced" until the variable stands alone.',
            ],
            { formulas: ['If a = b, then a + c = b + c, and a × c = b × c (c ≠ 0 for division)'] },
          ),
          s(
            'Multi-Step Equations',
            [
              'Combine like terms, clear parentheses with the distributive property, then isolate the variable by undoing operations in reverse order (addition/subtraction before multiplication/division).',
            ],
            {
              example: {
                problem: 'Solve 3(x − 4) + 5 = 2x + 1',
                solution:
                  'Distribute: 3x − 12 + 5 = 2x + 1 → 3x − 7 = 2x + 1. Subtract 2x: x − 7 = 1. Add 7: x = 8.',
              },
            },
          ),
          s(
            'Inequalities',
            [
              'Inequalities solve the same way as equations, with one crucial rule: multiplying or dividing both sides by a negative number flips the inequality sign.',
            ],
            { formulas: ['a < b  and  c < 0  ⇒  a·c > b·c'] },
          ),
        ],
      },
      {
        id: 'graphing-linear-functions',
        title: 'Graphing Linear Functions',
        sections: [
          s(
            'Slope-Intercept Form',
            [
              'Every non-vertical line can be written as y = mx + b, where m is the slope (rise over run) and b is the y-intercept, the point where the line crosses the y-axis.',
            ],
            { formulas: ['y = mx + b', 'm = (y₂ − y₁) / (x₂ − x₁)'] },
          ),
          s(
            'Point-Slope Form',
            [
              'If you know one point (x₁, y₁) on a line and its slope m, point-slope form lets you write the equation directly without solving for b first.',
            ],
            {
              formulas: ['y − y₁ = m(x − x₁)'],
              example: {
                problem: 'Find the line through (2, 5) with slope 3.',
                solution: 'y − 5 = 3(x − 2) → y = 3x − 6 + 5 → y = 3x − 1.',
              },
            },
          ),
        ],
      },
      {
        id: 'systems-of-linear-equations',
        title: 'Systems of Linear Equations',
        sections: [
          s(
            'Solving by Substitution',
            [
              'Solve one equation for a variable, then substitute that expression into the other equation to reduce the system to a single equation in one unknown.',
            ],
          ),
          s(
            'Solving by Elimination',
            [
              'Multiply one or both equations so that a variable’s coefficients become opposites, then add the equations to eliminate it.',
            ],
            {
              example: {
                problem: 'Solve 2x + y = 11 and x − y = 1',
                solution:
                  'Add the equations: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4. Substitute back: 4 − y = 1 → y = 3.',
              },
            },
          ),
        ],
      },
      {
        id: 'polynomials-and-factoring',
        title: 'Polynomials & Factoring',
        sections: [
          s(
            'Adding, Subtracting, Multiplying',
            [
              'Combine polynomials by collecting like terms (same variable and exponent). Multiply polynomials by distributing every term of one factor across every term of the other (FOIL for two binomials).',
            ],
            { formulas: ['(a + b)(c + d) = ac + ad + bc + bd'] },
          ),
          s(
            'Factoring Quadratics',
            [
              'Factoring reverses multiplication: find two numbers that multiply to the constant term and add to the middle coefficient.',
            ],
            {
              formulas: ['x² + (p+q)x + pq = (x + p)(x + q)'],
              example: {
                problem: 'Factor x² + 7x + 12',
                solution: 'Find p, q with pq = 12 and p+q = 7: p = 3, q = 4. So x² + 7x + 12 = (x + 3)(x + 4).',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'algebra-2',
    name: 'Algebra II',
    level: 'High School',
    difficulty: 'Intermediate',
    difficultyRank: 3,
    icon: '𝑥²',
    tags: ['quadratics', 'exponentials', 'logarithms', 'rational expressions'],
    summary: 'Quadratics, exponential and logarithmic functions, and rational expressions.',
    lectures: [
      {
        id: 'quadratic-functions',
        title: 'Quadratic Functions',
        sections: [
          s(
            'The Quadratic Formula',
            [
              'Every quadratic equation ax² + bx + c = 0 can be solved directly with the quadratic formula, which also works when the roots are irrational or complex.',
            ],
            { formulas: ['x = [−b ± √(b² − 4ac)] / (2a)'] },
          ),
          s(
            'Vertex Form & the Parabola',
            [
              'Completing the square rewrites a quadratic as y = a(x − h)² + k, revealing the vertex (h, k) directly — the graph’s minimum or maximum point.',
            ],
            {
              example: {
                problem: 'Find the vertex of y = 2x² − 8x + 3',
                solution:
                  'y = 2(x² − 4x) + 3 = 2(x² − 4x + 4 − 4) + 3 = 2(x − 2)² − 8 + 3 = 2(x − 2)² − 5. Vertex: (2, −5).',
              },
            },
          ),
        ],
      },
      {
        id: 'exponential-logarithmic',
        title: 'Exponential & Logarithmic Functions',
        sections: [
          s(
            'Exponential Growth and Decay',
            [
              'An exponential function y = a·bˣ grows (b > 1) or decays (0 < b < 1) by a constant multiplicative factor for every unit increase in x — the defining feature of compound interest, population growth, and radioactive decay.',
            ],
          ),
          s(
            'Logarithms as Inverses',
            [
              'A logarithm answers "to what power?" It is the inverse operation of exponentiation, which is why it undoes exponentials and lets you solve for exponents.',
            ],
            {
              formulas: ['log_b(x) = y  ⇔  b^y = x', 'log_b(mn) = log_b(m) + log_b(n)'],
              example: {
                problem: 'Solve 3^(2x) = 20 for x',
                solution: 'Take log of both sides: 2x·log 3 = log 20 → x = log 20 / (2 log 3) ≈ 1.36.',
              },
            },
          ),
        ],
      },
      {
        id: 'rational-expressions',
        title: 'Rational Expressions',
        sections: [
          s(
            'Simplifying and Combining',
            [
              'A rational expression is a fraction of polynomials. Simplify by factoring numerator and denominator and cancelling common factors; combine fractions using a common denominator exactly as with numeric fractions.',
            ],
            {
              example: {
                problem: 'Simplify (x² − 9) / (x² + x − 12)',
                solution:
                  'Factor: (x−3)(x+3) / [(x+4)(x−3)]. Cancel (x − 3): result is (x + 3)/(x + 4), for x ≠ 3.',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'geometry',
    name: 'Geometry',
    level: 'High School',
    difficulty: 'Intermediate',
    difficultyRank: 3,
    icon: '△',
    tags: ['proofs', 'triangles', 'circles', 'area', 'volume'],
    summary: 'Shapes, proofs, congruence, similarity, circles, and measurement.',
    lectures: [
      {
        id: 'lines-angles-triangles',
        title: 'Lines, Angles & Triangles',
        sections: [
          s(
            'Angle Relationships',
            [
              'When a line crosses two parallel lines, it creates pairs of equal corresponding angles and equal alternate interior angles, while angles on a straight line always sum to 180°.',
            ],
            { formulas: ['Angles on a line: sum = 180°', 'Angles in a triangle: sum = 180°'] },
          ),
          s(
            'Triangle Classification',
            [
              'Triangles are classified by side length (scalene, isosceles, equilateral) and by angle (acute, right, obtuse). The triangle inequality guarantees any two sides sum to more than the third.',
            ],
            {
              example: {
                problem: 'Can sides 4, 5, 10 form a triangle?',
                solution: 'Check 4 + 5 = 9, which is not greater than 10, so no triangle exists.',
              },
            },
          ),
        ],
      },
      {
        id: 'congruence-similarity',
        title: 'Congruence & Similarity',
        sections: [
          s(
            'Proving Congruence',
            [
              'Two triangles are congruent (identical in shape and size) if their corresponding parts match, which can be shown with SSS, SAS, ASA, or AAS — you never need to check all six parts.',
            ],
          ),
          s(
            'Similar Triangles',
            [
              'Similar triangles have the same shape but possibly different size: corresponding angles are equal and corresponding sides are in a constant ratio.',
            ],
            {
              formulas: ['If △ABC ~ △DEF, then AB/DE = BC/EF = AC/DF'],
              example: {
                problem: 'A 6 ft person casts an 8 ft shadow while a tree casts a 40 ft shadow. How tall is the tree?',
                solution: 'Set up 6/8 = h/40. Cross-multiply: 8h = 240 → h = 30 ft.',
              },
            },
          ),
        ],
      },
      {
        id: 'circles',
        title: 'Circles',
        sections: [
          s(
            'Circumference, Arcs & Chords',
            [
              'Every point on a circle is equidistant from the center. Arc length and sector area scale proportionally to the central angle out of 360°.',
            ],
            { formulas: ['Circumference = 2πr', 'Arc length = (θ/360°) × 2πr'] },
          ),
          s(
            'Inscribed Angles',
            [
              'An inscribed angle is half the measure of the central angle that subtends the same arc — a fact used throughout circle-geometry proofs.',
            ],
          ),
        ],
      },
      {
        id: 'area-volume-pythagorean',
        title: 'Area, Volume & the Pythagorean Theorem',
        sections: [
          s(
            'The Pythagorean Theorem',
            [
              'In any right triangle, the square of the hypotenuse equals the sum of the squares of the other two legs — one of the most-used results in all of mathematics.',
            ],
            {
              formulas: ['a² + b² = c²'],
              example: {
                problem: 'A ladder 13 ft long leans against a wall with its base 5 ft from the wall. How high up the wall does it reach?',
                solution: '5² + h² = 13² → 25 + h² = 169 → h² = 144 → h = 12 ft.',
              },
            },
          ),
          s(
            'Area and Volume Formulas',
            [
              'Area measures two-dimensional space; volume measures three-dimensional space. Most formulas reduce to a base measurement times a height or a characteristic constant like π.',
            ],
            {
              list: [
                'Rectangle: A = lw',
                'Triangle: A = ½bh',
                'Circle: A = πr²',
                'Rectangular prism: V = lwh',
                'Cylinder: V = πr²h',
                'Sphere: V = (4/3)πr³',
              ],
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    level: 'High School',
    difficulty: 'Intermediate',
    difficultyRank: 4,
    icon: '∠',
    tags: ['unit circle', 'identities', 'sine', 'cosine', 'radians'],
    summary: 'Right-triangle trig, the unit circle, identities, and trig graphs.',
    lectures: [
      {
        id: 'right-triangle-trig',
        title: 'Right Triangle Trigonometry',
        sections: [
          s(
            'SOH-CAH-TOA',
            [
              'For an acute angle in a right triangle, the trig ratios relate side lengths to the angle: sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent.',
            ],
            { formulas: ['sin θ = opp/hyp', 'cos θ = adj/hyp', 'tan θ = opp/adj'] },
          ),
          s(
            'Solving Right Triangles',
            [
              'Given any angle and one side, or any two sides, the trig ratios (and their inverse functions) let you solve for every remaining side and angle.',
            ],
            {
              example: {
                problem: 'A 20 ft ramp rises at 15° from the ground. How high is the top of the ramp?',
                solution: 'sin 15° = h / 20 → h = 20 sin 15° ≈ 5.18 ft.',
              },
            },
          ),
        ],
      },
      {
        id: 'unit-circle-radians',
        title: 'The Unit Circle & Radians',
        sections: [
          s(
            'Radian Measure',
            [
              'A radian is the angle subtended by an arc equal in length to the radius. It is the natural unit for angles in higher mathematics because it makes calculus formulas clean.',
            ],
            { formulas: ['π radians = 180°', '1 rad ≈ 57.3°'] },
          ),
          s(
            'Extending Sine and Cosine',
            [
              'On the unit circle (radius 1, centered at the origin), cos θ and sin θ are defined as the x- and y-coordinates of the point at angle θ, extending trig functions to all real angles, not just acute ones.',
            ],
            {
              example: {
                problem: 'Find sin(5π/6)',
                solution: '5π/6 = 150°, in the second quadrant, a reference angle of 30°. sin 150° = sin 30° = 1/2.',
              },
            },
          ),
        ],
      },
      {
        id: 'trig-identities',
        title: 'Trig Identities',
        sections: [
          s(
            'Pythagorean and Angle-Sum Identities',
            [
              'Identities are equations true for all valid angles; they let you rewrite trig expressions in more useful forms, essential for simplifying and solving trig equations and for calculus.',
            ],
            {
              formulas: [
                'sin²θ + cos²θ = 1',
                'sin(A ± B) = sin A cos B ± cos A sin B',
                'cos(A ± B) = cos A cos B ∓ sin A sin B',
              ],
            },
          ),
        ],
      },
      {
        id: 'graphs-of-trig-functions',
        title: 'Graphs of Trig Functions',
        sections: [
          s(
            'Amplitude, Period, and Phase Shift',
            [
              'For y = A sin(B(x − C)) + D, A controls height (amplitude), B controls how fast the wave repeats (period = 2π/B), C shifts the graph horizontally, and D shifts it vertically.',
            ],
            {
              formulas: ['Period = 2π / |B|'],
              example: {
                problem: 'Describe y = 3 sin(2x)',
                solution: 'Amplitude 3, period 2π/2 = π, no phase or vertical shift.',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'precalculus',
    name: 'Precalculus',
    level: 'High School',
    difficulty: 'Advanced',
    difficultyRank: 5,
    icon: 'ƒ',
    tags: ['functions', 'transformations', 'sequences', 'series'],
    summary: 'Function behavior, transformations, and the bridge into calculus.',
    lectures: [
      {
        id: 'functions-and-transformations',
        title: 'Functions & Transformations',
        sections: [
          s(
            'Function Notation and Composition',
            [
              'A function assigns exactly one output to each input. Composing functions, written (f ∘ g)(x) = f(g(x)), feeds the output of one function into another.',
            ],
          ),
          s(
            'Shifting, Stretching, Reflecting',
            [
              'Every transformation of a graph can be read directly off an equation: f(x) + k shifts vertically, f(x − h) shifts horizontally, −f(x) reflects vertically, and a·f(x) stretches vertically by a.',
            ],
            {
              example: {
                problem: 'Describe the graph of y = −2(x − 3)² + 1 relative to y = x²',
                solution: 'Shift right 3, stretch vertically by 2, reflect over the x-axis, shift up 1.',
              },
            },
          ),
        ],
      },
      {
        id: 'polynomial-rational-functions',
        title: 'Polynomial & Rational Functions',
        sections: [
          s(
            'End Behavior and Zeros',
            [
              'A polynomial’s degree and leading coefficient determine its end behavior; its real zeros are the x-intercepts, found via factoring, the rational root theorem, or numerical methods.',
            ],
          ),
          s(
            'Asymptotes of Rational Functions',
            [
              'Rational functions can have vertical asymptotes (where the denominator is zero) and horizontal or slant asymptotes determined by comparing the degrees of numerator and denominator.',
            ],
          ),
        ],
      },
      {
        id: 'sequences-series-intro',
        title: 'Sequences & Series Intro',
        sections: [
          s(
            'Arithmetic and Geometric Sequences',
            [
              'An arithmetic sequence adds a constant difference d each term; a geometric sequence multiplies by a constant ratio r each term.',
            ],
            {
              formulas: ['Arithmetic: aₙ = a₁ + (n−1)d', 'Geometric: aₙ = a₁·r^(n−1)'],
              example: {
                problem: 'Find the 10th term of 3, 7, 11, 15, …',
                solution: 'd = 4, a₁ = 3. a₁₀ = 3 + 9(4) = 39.',
              },
            },
          ),
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- UNDERGRADUATE
  {
    id: 'calculus-1',
    name: 'Calculus I',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    difficultyRank: 5,
    icon: 'd/dx',
    tags: ['limits', 'derivatives', 'integrals', 'continuity'],
    summary: 'Limits, derivatives, and the beginning of integration.',
    lectures: [
      {
        id: 'limits-and-continuity',
        title: 'Limits and Continuity',
        sections: [
          s(
            'The Idea of a Limit',
            [
              'The limit of f(x) as x approaches a describes the value f(x) gets arbitrarily close to, even if f is undefined exactly at a. Limits make precise the intuitive idea of "approaching."',
            ],
            { formulas: ['lim(x→a) f(x) = L'] },
          ),
          s(
            'Continuity',
            [
              'A function is continuous at a if the limit as x approaches a exists, f(a) is defined, and the two agree — no jumps, holes, or asymptotes at that point.',
            ],
            {
              example: {
                problem: 'Evaluate lim(x→2) (x² − 4)/(x − 2)',
                solution: 'Factor: (x−2)(x+2)/(x−2) = x+2 for x ≠ 2. The limit is 2+2 = 4, even though the function is undefined at x = 2.',
              },
            },
          ),
        ],
      },
      {
        id: 'the-derivative',
        title: 'The Derivative',
        sections: [
          s(
            'Definition as a Limit',
            [
              'The derivative f′(x) measures the instantaneous rate of change of f — the slope of the tangent line — defined as the limit of the average rate of change over shrinking intervals.',
            ],
            { formulas: ['f′(x) = lim(h→0) [f(x+h) − f(x)] / h'] },
          ),
          s(
            'Differentiation Rules',
            [
              'Rather than computing limits by hand every time, a small set of rules covers nearly every function encountered in practice.',
            ],
            {
              list: [
                'Power rule: d/dx[xⁿ] = n·xⁿ⁻¹',
                'Product rule: (fg)′ = f′g + fg′',
                'Quotient rule: (f/g)′ = (f′g − fg′)/g²',
                'Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x)',
              ],
              example: {
                problem: 'Differentiate f(x) = (3x² + 1)⁵',
                solution: 'Chain rule: f′(x) = 5(3x² + 1)⁴ · 6x = 30x(3x² + 1)⁴.',
              },
            },
          ),
        ],
      },
      {
        id: 'applications-of-differentiation',
        title: 'Applications of Differentiation',
        sections: [
          s(
            'Curve Sketching',
            [
              'The first derivative reveals where a function increases or decreases and locates local extrema (where f′ = 0 or is undefined); the second derivative reveals concavity and inflection points.',
            ],
          ),
          s(
            'Optimization',
            [
              'Real-world max/min problems are solved by expressing the quantity to optimize as a function of one variable, then finding critical points of its derivative.',
            ],
            {
              example: {
                problem: 'A farmer has 100 m of fence for a rectangular pen against a barn (no fence needed on that side). Maximize the area.',
                solution:
                  'Let x = width (perpendicular to barn), length = 100 − 2x. A(x) = x(100 − 2x) = 100x − 2x². A′(x) = 100 − 4x = 0 → x = 25. Length = 50. Max area = 1250 m².',
              },
            },
          ),
        ],
      },
      {
        id: 'intro-to-integration',
        title: 'Intro to Integration',
        sections: [
          s(
            'Antiderivatives',
            [
              'An antiderivative F of f satisfies F′ = f. Because derivatives of constants vanish, antiderivatives come in families differing by a constant, written with "+C".',
            ],
            { formulas: ['∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)'] },
          ),
          s(
            'The Fundamental Theorem of Calculus',
            [
              'The Fundamental Theorem links derivatives and integrals: the definite integral of a rate of change over an interval equals the net change of the original quantity.',
            ],
            {
              formulas: ['∫ₐᵇ f(x) dx = F(b) − F(a), where F′ = f'],
              example: {
                problem: 'Evaluate ∫₀² 3x² dx',
                solution: 'Antiderivative: x³. Evaluate: 2³ − 0³ = 8.',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'calculus-2',
    name: 'Calculus II',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    difficultyRank: 6,
    icon: '∫',
    tags: ['integration techniques', 'series', 'taylor series', 'sequences'],
    summary: 'Integration techniques, infinite series, and power series.',
    lectures: [
      {
        id: 'techniques-of-integration',
        title: 'Techniques of Integration',
        sections: [
          s(
            'Integration by Parts',
            [
              'When an integrand is a product of two different types of functions, integration by parts (the product rule run in reverse) often simplifies it.',
            ],
            {
              formulas: ['∫u dv = uv − ∫v du'],
              example: {
                problem: 'Evaluate ∫x eˣ dx',
                solution: 'Let u = x, dv = eˣdx, so du = dx, v = eˣ. ∫x eˣ dx = x eˣ − ∫eˣ dx = x eˣ − eˣ + C.',
              },
            },
          ),
          s(
            'Trig Substitution & Partial Fractions',
            [
              'Trig substitution handles integrands with √(a² − x²), √(a² + x²), or √(x² − a²) by substituting x with a trig function; partial fractions break a rational function into a sum of simpler fractions before integrating.',
            ],
          ),
        ],
      },
      {
        id: 'applications-of-integrals',
        title: 'Applications of Integrals',
        sections: [
          s(
            'Area, Volume & Arc Length',
            [
              'Definite integrals generalize summing infinitely many infinitesimal slices — of area between curves, of disks or shells for volumes of revolution, or of small arc-length segments.',
            ],
            {
              formulas: [
                'Area between curves: ∫ₐᵇ [f(x) − g(x)] dx',
                'Disk method volume: V = π∫ₐᵇ [f(x)]² dx',
              ],
            },
          ),
        ],
      },
      {
        id: 'sequences-and-series',
        title: 'Sequences and Series',
        sections: [
          s(
            'Convergence of Series',
            [
              'An infinite series converges if its sequence of partial sums approaches a finite limit. Tests such as the ratio test, comparison test, and integral test determine convergence without summing infinitely many terms directly.',
            ],
            { formulas: ['Geometric series: Σ arⁿ = a/(1−r), for |r| < 1'] },
          ),
          s(
            'The Ratio Test',
            [
              'The ratio test examines the limit of consecutive term ratios to determine absolute convergence — especially useful for series involving factorials or exponentials.',
            ],
            {
              formulas: ['L = lim |aₙ₊₁/aₙ|; converges if L<1, diverges if L>1'],
            },
          ),
        ],
      },
      {
        id: 'power-and-taylor-series',
        title: 'Power Series & Taylor Series',
        sections: [
          s(
            'Taylor Series',
            [
              'A Taylor series represents a smooth function as an infinite polynomial built from its derivatives at a single point, letting us approximate transcendental functions to arbitrary precision.',
            ],
            {
              formulas: ['f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ'],
              example: {
                problem: 'Write the Maclaurin series (Taylor series at a = 0) for eˣ',
                solution: 'Since every derivative of eˣ at 0 equals 1: eˣ = 1 + x + x²/2! + x³/3! + ⋯',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'calculus-3',
    name: 'Calculus III',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    difficultyRank: 6,
    icon: '∇',
    tags: ['multivariable', 'vectors', 'partial derivatives', 'multiple integrals'],
    summary: 'Vectors, partial derivatives, and integration in several variables.',
    lectures: [
      {
        id: 'vectors-and-space',
        title: 'Vectors & the Geometry of Space',
        sections: [
          s(
            'Vector Operations',
            [
              'Vectors in three dimensions have both magnitude and direction. The dot product measures alignment between vectors and yields a scalar; the cross product yields a vector perpendicular to both inputs.',
            ],
            { formulas: ['a·b = |a||b|cos θ', '|a×b| = |a||b|sin θ'] },
          ),
        ],
      },
      {
        id: 'partial-derivatives',
        title: 'Partial Derivatives',
        sections: [
          s(
            'Rates of Change in Several Variables',
            [
              'A partial derivative measures how a multivariable function changes as one variable moves while the others are held fixed. The gradient collects all partial derivatives into a vector pointing in the direction of steepest ascent.',
            ],
            { formulas: ['∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)'] },
          ),
        ],
      },
      {
        id: 'multiple-integrals',
        title: 'Multiple Integrals',
        sections: [
          s(
            'Double and Triple Integrals',
            [
              'Double integrals extend the idea of area under a curve to volume under a surface; triple integrals extend it further to mass or volume throughout a solid region, often evaluated with polar, cylindrical, or spherical coordinates when the region is round.',
            ],
            { formulas: ['∬_R f(x,y) dA', '∭_E f(x,y,z) dV'] },
          ),
        ],
      },
    ],
  },
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    difficultyRank: 5,
    icon: '⎡⎦',
    tags: ['matrices', 'vectors', 'eigenvalues', 'systems'],
    summary: 'Vectors, matrices, linear systems, and eigenvalues.',
    lectures: [
      {
        id: 'vectors-and-matrices',
        title: 'Vectors & Matrices',
        sections: [
          s(
            'Vector Spaces',
            [
              'A vector space is a set of objects ("vectors") that can be added together and scaled by numbers, obeying familiar rules like commutativity and distributivity. Rⁿ (ordered n-tuples of real numbers) is the prototypical example.',
            ],
          ),
          s(
            'Matrix Multiplication',
            [
              'A matrix represents a linear transformation; multiplying a matrix by a vector applies that transformation. Matrix multiplication is defined so that composing two transformations corresponds to multiplying their matrices.',
            ],
            {
              formulas: ['(AB)ᵢⱼ = Σₖ Aᵢₖ Bₖⱼ'],
              example: {
                problem: 'Multiply [[1,2],[3,4]] by the vector [5,6]',
                solution: 'Row 1: 1(5)+2(6)=17. Row 2: 3(5)+4(6)=39. Result: [17, 39].',
              },
            },
          ),
        ],
      },
      {
        id: 'gaussian-elimination',
        title: 'Systems of Equations & Gaussian Elimination',
        sections: [
          s(
            'Row Reduction',
            [
              'Gaussian elimination systematically uses row operations (swap, scale, add a multiple of one row to another) to reduce a system’s augmented matrix to row-echelon form, from which solutions are read off by back-substitution.',
            ],
          ),
        ],
      },
      {
        id: 'determinants-and-inverses',
        title: 'Determinants & Matrix Inverses',
        sections: [
          s(
            'The Determinant',
            [
              'The determinant is a single number encoding whether a matrix is invertible (nonzero determinant) and how much a linear transformation scales area or volume.',
            ],
            {
              formulas: ['det [[a,b],[c,d]] = ad − bc'],
              example: {
                problem: 'Is [[2,4],[1,2]] invertible?',
                solution: 'det = 2(2) − 4(1) = 0, so the matrix is singular — not invertible.',
              },
            },
          ),
        ],
      },
      {
        id: 'eigenvalues-and-eigenvectors',
        title: 'Eigenvalues & Eigenvectors',
        sections: [
          s(
            'The Eigenvalue Equation',
            [
              'An eigenvector of a matrix A is a nonzero vector whose direction is unchanged by the transformation — it is only stretched or shrunk by a scalar factor, the eigenvalue. Eigenvalues solve det(A − λI) = 0, the characteristic equation.',
            ],
            {
              formulas: ['Av = λv', 'det(A − λI) = 0'],
              example: {
                problem: 'Find the eigenvalues of [[2,0],[0,3]]',
                solution: 'The matrix is diagonal, so eigenvalues are the diagonal entries directly: λ = 2 and λ = 3.',
              },
            },
          ),
        ],
      },
    ],
  },
  {
    id: 'differential-equations',
    name: 'Differential Equations',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    difficultyRank: 6,
    icon: 'dy/dx',
    tags: ['ODEs', 'laplace transforms', 'systems'],
    summary: 'Ordinary differential equations, Laplace transforms, and systems of ODEs.',
    lectures: [
      {
        id: 'first-order-odes',
        title: 'First-Order ODEs',
        sections: [
          s(
            'Separable Equations',
            [
              'A separable ODE can be rearranged so all y-terms are on one side and all x-terms on the other, then solved by integrating both sides independently.',
            ],
            {
              example: {
                problem: 'Solve dy/dx = xy',
                solution: 'Separate: dy/y = x dx. Integrate: ln|y| = x²/2 + C → y = Ae^(x²/2).',
              },
            },
          ),
          s(
            'Linear First-Order Equations',
            [
              'A first-order linear ODE y′ + P(x)y = Q(x) is solved using an integrating factor μ(x) = e^∫P(x)dx, which turns the left side into the derivative of a product.',
            ],
            { formulas: ['μ(x) = e^∫P(x)dx'] },
          ),
        ],
      },
      {
        id: 'second-order-linear-odes',
        title: 'Second-Order Linear ODEs',
        sections: [
          s(
            'Constant-Coefficient Homogeneous Equations',
            [
              'For ay″ + by′ + cy = 0, guessing y = e^(rx) reduces the ODE to the characteristic equation ar² + br + c = 0, whose roots determine the solution’s form (real distinct, repeated, or complex).',
            ],
            { formulas: ['ar² + br + c = 0'] },
          ),
          s(
            'Undetermined Coefficients',
            [
              'For nonhomogeneous equations, the general solution is a particular solution plus the homogeneous solution; the particular solution is often guessable from the form of the forcing term.',
            ],
          ),
        ],
      },
      {
        id: 'laplace-transforms-de',
        title: 'Laplace Transforms',
        sections: [
          s(
            'Turning ODEs into Algebra',
            [
              'The Laplace transform converts differential equations in t into algebraic equations in s, because differentiation in t becomes multiplication by s in the transform domain — making it ideal for equations with discontinuous or impulsive forcing.',
            ],
            { formulas: ['L{f(t)} = ∫₀^∞ e^(−st) f(t) dt', 'L{f′(t)} = sF(s) − f(0)'] },
          ),
        ],
      },
      {
        id: 'systems-of-odes',
        title: 'Systems of ODEs',
        sections: [
          s(
            'Matrix Form and Eigenvalues',
            [
              'A system of linear ODEs x′ = Ax is solved using the eigenvalues and eigenvectors of A: each eigenpair (λ, v) contributes a solution v·e^(λt), and the general solution is a linear combination of these.',
            ],
            { formulas: ['x′ = Ax  ⇒  x(t) = c₁v₁e^(λ₁t) + c₂v₂e^(λ₂t) + ⋯'] },
          ),
        ],
      },
    ],
  },
  {
    id: 'discrete-math',
    name: 'Discrete Mathematics',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    difficultyRank: 5,
    icon: '∀',
    tags: ['logic', 'proofs', 'combinatorics', 'graph theory'],
    summary: 'Logic, proof techniques, counting, and graphs — the language of computer science.',
    lectures: [
      {
        id: 'logic-and-proofs',
        title: 'Logic & Proofs',
        sections: [
          s(
            'Propositional Logic',
            [
              'Logical connectives (AND, OR, NOT, implication) combine statements into compound ones whose truth value is fully determined by the truth values of the parts, tabulated in truth tables.',
            ],
            { formulas: ['p → q is false only when p is true and q is false'] },
          ),
          s(
            'Proof Techniques',
            [
              'Direct proof assumes the hypothesis and derives the conclusion; proof by contradiction assumes the conclusion is false and derives an absurdity; induction proves a statement for all natural numbers by proving a base case and an inductive step.',
            ],
          ),
        ],
      },
      {
        id: 'sets-and-combinatorics',
        title: 'Set Theory & Combinatorics',
        sections: [
          s(
            'Counting Principles',
            [
              'Permutations count ordered arrangements; combinations count unordered selections. Both follow from the multiplication principle: if one choice has m outcomes and a second has n, together they have m × n outcomes.',
            ],
            {
              formulas: ['P(n,r) = n!/(n−r)!', 'C(n,r) = n!/[r!(n−r)!]'],
              example: {
                problem: 'How many ways can you choose a 3-person committee from 8 people?',
                solution: 'Order does not matter: C(8,3) = 8!/(3!5!) = 56.',
              },
            },
          ),
        ],
      },
      {
        id: 'graph-theory-basics',
        title: 'Graph Theory Basics',
        sections: [
          s(
            'Graphs, Degrees & Paths',
            [
              'A graph is a set of vertices connected by edges. Key questions — is the graph connected, does it contain a cycle, what is the shortest path between two vertices — underlie network routing, scheduling, and social-network analysis.',
            ],
          ),
        ],
      },
    ],
  },
  {
    id: 'probability-statistics',
    name: 'Probability & Statistics',
    level: 'Undergraduate',
    difficulty: 'Intermediate',
    difficultyRank: 5,
    icon: '𝑃',
    tags: ['probability', 'distributions', 'inference', 'random variables'],
    summary: 'Probability foundations, random variables, distributions, and inference.',
    lectures: [
      {
        id: 'foundations-of-probability',
        title: 'Foundations of Probability',
        sections: [
          s(
            'Sample Spaces and Events',
            [
              'The sample space is the set of all possible outcomes of an experiment; an event is any subset of it. Probability assigns each event a number between 0 and 1 representing its likelihood.',
            ],
            { formulas: ['P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'] },
          ),
          s(
            'Conditional Probability & Independence',
            [
              'Conditional probability updates the likelihood of an event given that another has occurred. Two events are independent exactly when knowing one occurred does not change the probability of the other.',
            ],
            {
              formulas: ['P(A|B) = P(A ∩ B) / P(B)', 'A, B independent  ⇔  P(A ∩ B) = P(A)P(B)'],
              example: {
                problem: 'A bag has 5 red and 3 blue marbles. What is P(red on 1st draw AND blue on 2nd), drawing without replacement?',
                solution: 'P(red) = 5/8. Given red drawn, P(blue) = 3/7. Multiply: (5/8)(3/7) = 15/56.',
              },
            },
          ),
        ],
      },
      {
        id: 'random-variables-and-distributions',
        title: 'Random Variables & Distributions',
        sections: [
          s(
            'Discrete and Continuous Random Variables',
            [
              'A discrete random variable takes countable values, each with an assigned probability (a probability mass function); a continuous random variable takes values over an interval, described by a probability density function whose area under a curve gives probability.',
            ],
          ),
          s(
            'The Binomial Distribution',
            [
              'The binomial distribution models the number of successes in n independent trials, each with success probability p.',
            ],
            {
              formulas: ['P(X = k) = C(n,k) pᵏ(1−p)ⁿ⁻ᵏ'],
              example: {
                problem: 'A fair coin is flipped 5 times. What is P(exactly 3 heads)?',
                solution: 'C(5,3)(0.5)³(0.5)² = 10 × 0.03125 = 0.3125.',
              },
            },
          ),
        ],
      },
      {
        id: 'expectation-variance-normal',
        title: 'Expectation, Variance & the Normal Distribution',
        sections: [
          s(
            'Mean and Spread',
            [
              'The expected value is the long-run average outcome; the variance measures how spread out values are around that average, and its square root, the standard deviation, is in the same units as the data.',
            ],
            { formulas: ['E[X] = Σ x·P(X=x)', 'Var(X) = E[X²] − (E[X])²'] },
          ),
          s(
            'The Normal Distribution',
            [
              'The normal (Gaussian) distribution is the familiar bell curve, fully described by its mean μ and standard deviation σ. It arises naturally as the limiting distribution of averages via the Central Limit Theorem.',
            ],
            { formulas: ['f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²))'] },
          ),
        ],
      },
      {
        id: 'statistical-inference',
        title: 'Statistical Inference',
        sections: [
          s(
            'Confidence Intervals & Hypothesis Testing',
            [
              'Inference uses a sample to draw conclusions about a whole population. A confidence interval gives a range of plausible values for a parameter; hypothesis testing checks whether observed data is surprising enough, under a null assumption, to reject that assumption.',
            ],
            { formulas: ['CI = x̄ ± z·(σ/√n)'] },
          ),
        ],
      },
    ],
  },
  {
    id: 'numerical-methods',
    name: 'Numerical Methods',
    level: 'Undergraduate',
    difficulty: 'Advanced',
    difficultyRank: 6,
    icon: '≈',
    tags: ['root finding', 'numerical integration', 'computation'],
    summary: 'Approximate methods for solving equations, integrals, and systems by computer.',
    lectures: [
      {
        id: 'root-finding',
        title: 'Root Finding',
        sections: [
          s(
            "Newton's Method",
            [
              "Newton's method finds roots of f(x) = 0 by repeatedly following the tangent line down to the x-axis, converging extremely fast near a simple root.",
            ],
            {
              formulas: ['xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)'],
              example: {
                problem: 'Approximate √2 using Newton’s method on f(x) = x² − 2, starting at x₀ = 1.5',
                solution: 'x₁ = 1.5 − (2.25−2)/3 = 1.4167. x₂ = 1.4167 − (2.0069−2)/2.8334 ≈ 1.41422, already close to √2 ≈ 1.41421.',
              },
            },
          ),
          s(
            'Bisection Method',
            [
              'The bisection method repeatedly halves an interval known to contain a sign change of f, guaranteeing convergence (though more slowly than Newton’s method) whenever f is continuous.',
            ],
          ),
        ],
      },
      {
        id: 'numerical-integration-differentiation',
        title: 'Numerical Integration & Differentiation',
        sections: [
          s(
            "Trapezoid Rule and Simpson's Rule",
            [
              'When an antiderivative cannot be found in closed form, definite integrals are approximated by summing the areas of trapezoids (or parabolic arcs, for Simpson’s rule) under the curve.',
            ],
            { formulas: ["Trapezoid: ∫ₐᵇ f dx ≈ (h/2)[f(x₀) + 2f(x₁) + ⋯ + f(xₙ)]"] },
          ),
        ],
      },
      {
        id: 'numerical-linear-systems',
        title: 'Solving Linear Systems Numerically',
        sections: [
          s(
            'Iterative Methods',
            [
              'For very large systems, direct elimination becomes expensive; iterative methods like Jacobi and Gauss-Seidel refine an initial guess toward the true solution, trading exactness for speed and scalability.',
            ],
          ),
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- GRADUATE
  {
    id: 'real-analysis',
    name: 'Real Analysis',
    level: 'Graduate',
    difficulty: 'Advanced',
    difficultyRank: 8,
    icon: 'ε-δ',
    tags: ['proofs', 'limits', 'continuity', 'rigor'],
    summary: 'The rigorous foundations underlying calculus: sequences, limits, and integration.',
    lectures: [
      {
        id: 'real-numbers-and-sequences',
        title: 'The Real Number System & Sequences',
        sections: [
          s(
            'Completeness',
            [
              'The real numbers are distinguished from the rationals by completeness: every nonempty set bounded above has a least upper bound (supremum). This single property underlies nearly every major theorem in analysis.',
            ],
          ),
          s(
            'Convergence of Sequences',
            [
              'A sequence (aₙ) converges to L if, for every ε > 0, all terms beyond some index N lie within ε of L — the formal ε-N definition that replaces intuitive "gets close to" language with something provable.',
            ],
            { formulas: ['∀ε>0 ∃N: n>N ⇒ |aₙ − L| < ε'] },
          ),
        ],
      },
      {
        id: 'limits-continuity-compactness',
        title: 'Limits, Continuity & Compactness',
        sections: [
          s(
            'The ε-δ Definition of Continuity',
            [
              'A function f is continuous at a if for every ε > 0 there is a δ > 0 such that |x − a| < δ implies |f(x) − f(a)| < ε — making rigorous exactly what "no jumps" means.',
            ],
            { formulas: ['∀ε>0 ∃δ>0: |x−a|<δ ⇒ |f(x)−f(a)|<ε'] },
          ),
          s(
            'Compactness',
            [
              'A compact set (in Rⁿ, equivalently closed and bounded, by the Heine-Borel theorem) guarantees that continuous functions on it attain a maximum and minimum — the Extreme Value Theorem, made rigorous.',
            ],
          ),
        ],
      },
      {
        id: 'differentiation-rigorously',
        title: 'Differentiation Rigorously',
        sections: [
          s(
            'Mean Value Theorem',
            [
              'The Mean Value Theorem guarantees that for a differentiable function on [a,b], some point has instantaneous rate of change equal to the average rate of change over the interval — the rigorous justification behind many calculus applications.',
            ],
            { formulas: ['∃c ∈ (a,b): f′(c) = [f(b) − f(a)] / (b − a)'] },
          ),
        ],
      },
      {
        id: 'the-riemann-integral',
        title: 'The Riemann Integral',
        sections: [
          s(
            'Upper and Lower Sums',
            [
              'The Riemann integral is defined by squeezing a function between upper sums (using suprema on each subinterval) and lower sums (using infima); a function is Riemann-integrable exactly when these sums converge to the same value as the partition is refined.',
            ],
          ),
        ],
      },
    ],
  },
  {
    id: 'complex-analysis',
    name: 'Complex Analysis',
    level: 'Graduate',
    difficulty: 'Advanced',
    difficultyRank: 8,
    icon: 'ℂ',
    tags: ['complex numbers', 'analytic functions', 'contour integration'],
    summary: 'Functions of a complex variable, analyticity, and contour integration.',
    lectures: [
      {
        id: 'complex-numbers-and-functions',
        title: 'Complex Numbers & Functions',
        sections: [
          s(
            'The Complex Plane',
            [
              'A complex number z = x + iy can be pictured as a point (x, y) in the plane, with modulus |z| = √(x²+y²) and argument θ giving its polar form z = r(cos θ + i sin θ) = re^(iθ).',
            ],
            { formulas: ["Euler's formula: e^(iθ) = cos θ + i sin θ"] },
          ),
        ],
      },
      {
        id: 'analytic-functions-cauchy-riemann',
        title: 'Analytic Functions & Cauchy-Riemann',
        sections: [
          s(
            'Complex Differentiability',
            [
              'A function is analytic (complex-differentiable in a neighborhood) exactly when its real and imaginary parts satisfy the Cauchy-Riemann equations — a far stronger condition than real differentiability, with dramatic consequences (analytic functions are automatically infinitely differentiable).',
            ],
            { formulas: ['∂u/∂x = ∂v/∂y,  ∂u/∂y = −∂v/∂x  (for f = u + iv)'] },
          ),
        ],
      },
      {
        id: 'contour-integration-cauchys-theorem',
        title: "Contour Integration & Cauchy's Theorem",
        sections: [
          s(
            "Cauchy's Integral Theorem",
            [
              "Cauchy's theorem states that the integral of an analytic function around any closed contour, within a simply connected region, is zero — the central fact that makes complex integration so much more rigid, and powerful, than real integration.",
            ],
            { formulas: ['∮_C f(z) dz = 0  (f analytic inside and on C)'] },
          ),
          s(
            'The Residue Theorem',
            [
              'The residue theorem generalizes Cauchy’s theorem to functions with isolated singularities: the contour integral equals 2πi times the sum of residues enclosed, turning many real integrals — otherwise intractable — into a residue computation.',
            ],
          ),
        ],
      },
    ],
  },
  {
    id: 'abstract-algebra',
    name: 'Abstract Algebra',
    level: 'Graduate',
    difficulty: 'Advanced',
    difficultyRank: 8,
    icon: '⊕',
    tags: ['groups', 'rings', 'fields', 'structures'],
    summary: 'Groups, rings, fields, and the algebraic structures underlying modern mathematics.',
    lectures: [
      {
        id: 'groups',
        title: 'Groups',
        sections: [
          s(
            'The Group Axioms',
            [
              'A group is a set with one operation that is associative, has an identity element, and gives every element an inverse. Groups formalize symmetry: the symmetries of any object — a shape, an equation’s roots, a Rubik’s cube — form a group.',
            ],
            { formulas: ['(a·b)·c = a·(b·c);  ∃e: a·e = a;  ∀a ∃a⁻¹: a·a⁻¹ = e'] },
          ),
          s(
            "Lagrange's Theorem",
            [
              "In a finite group, the order (size) of any subgroup divides the order of the group — a simple-sounding fact with deep structural consequences.",
            ],
          ),
        ],
      },
      {
        id: 'rings-and-fields',
        title: 'Rings & Fields',
        sections: [
          s(
            'Rings',
            [
              'A ring has two operations, addition and multiplication, where addition forms an abelian group and multiplication distributes over addition — the integers Z are the prototypical example, notably without requiring multiplicative inverses.',
            ],
          ),
          s(
            'Fields',
            [
              'A field is a ring where every nonzero element has a multiplicative inverse, so division is always possible — Q, R, and C are fields, but Z is not.',
            ],
          ),
        ],
      },
      {
        id: 'homomorphisms-quotients',
        title: 'Homomorphisms & Quotient Structures',
        sections: [
          s(
            'Structure-Preserving Maps',
            [
              'A homomorphism is a function between algebraic structures that respects their operations; its kernel captures exactly what information is "collapsed," and the First Isomorphism Theorem shows the image is isomorphic to the original structure modulo that kernel.',
            ],
          ),
        ],
      },
    ],
  },
  {
    id: 'engineering-mathematics',
    name: 'Engineering Mathematics',
    level: 'Graduate',
    difficulty: 'Advanced',
    difficultyRank: 9,
    icon: '⚙',
    tags: ['fourier', 'laplace', 'pde', 'vector calculus'],
    summary: 'Fourier and Laplace transforms, PDEs, and vector calculus for engineering practice.',
    lectures: [
      {
        id: 'fourier-series-and-transforms',
        title: 'Fourier Series & Transforms',
        sections: [
          s(
            'Fourier Series',
            [
              'Any reasonably well-behaved periodic signal can be written as a sum of sines and cosines of increasing frequency. This decomposition underlies signal processing, vibration analysis, and heat-flow modeling.',
            ],
            { formulas: ['f(t) = a₀/2 + Σₙ₌₁^∞ [aₙ cos(nωt) + bₙ sin(nωt)]'] },
          ),
          s(
            'The Fourier Transform',
            [
              'The Fourier transform extends this idea to non-periodic signals, expressing a time-domain function as a continuous spectrum of frequencies — the mathematical foundation of filtering, compression, and spectral analysis.',
            ],
            { formulas: ['F(ω) = ∫₋∞^∞ f(t) e^(−iωt) dt'] },
          ),
        ],
      },
      {
        id: 'laplace-transforms-for-engineers',
        title: 'Laplace Transforms for Engineers',
        sections: [
          s(
            'Transfer Functions',
            [
              'Applying the Laplace transform to a linear system’s governing ODE, with zero initial conditions, produces a transfer function H(s) = output/input that fully characterizes the system’s response — the backbone of classical control theory.',
            ],
            { formulas: ['H(s) = Y(s)/X(s)'] },
          ),
        ],
      },
      {
        id: 'partial-differential-equations',
        title: 'Partial Differential Equations',
        sections: [
          s(
            'The Big Three: Heat, Wave, and Laplace',
            [
              'Three PDEs recur throughout physics and engineering: the heat equation (diffusion), the wave equation (vibration and propagation), and Laplace’s equation (steady-state/equilibrium fields).',
            ],
            {
              formulas: [
                'Heat: ∂u/∂t = α∇²u',
                'Wave: ∂²u/∂t² = c²∇²u',
                'Laplace: ∇²u = 0',
              ],
            },
          ),
          s(
            'Separation of Variables',
            [
              'Separation of variables assumes a solution factors as a product of single-variable functions, reducing a PDE to a system of ODEs — the standard first technique for solving PDEs on simple geometries.',
            ],
          ),
        ],
      },
      {
        id: 'vector-calculus-div-grad-curl',
        title: 'Vector Calculus: Div, Grad, Curl',
        sections: [
          s(
            'The Vector Differential Operators',
            [
              'The gradient turns a scalar field into a vector field pointing toward steepest increase; divergence measures a vector field’s net outflow from a point (its "source strength"); curl measures local rotation. Together they describe how fluid, heat, and electromagnetic fields behave.',
            ],
            {
              formulas: ['div F = ∇·F', 'curl F = ∇×F'],
            },
          ),
          s(
            "Stokes' and Divergence Theorems",
            [
              "These theorems relate an integral over a region's boundary to an integral over the region itself — the divergence theorem converts a flux integral over a closed surface into a volume integral of divergence, and Stokes' theorem converts a circulation integral around a closed curve into a surface integral of curl.",
            ],
          ),
        ],
      },
    ],
  },
]

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((subj) => subj.id === id)
}
