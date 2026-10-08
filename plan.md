# PATH³ — Implementation & Design Plan

## Product approach

Build a polished, responsive, single-page React + TypeScript web application for a college student to explore three career simulations. The complete journey is available locally: landing page → multi-step career/work-style assessment or one-click demo → generated Career DNA and three ranked futures → comparison and skill-gap dashboard → adjustable what-if simulation → Career Twin → career-specific 30-day plan and India-focused placement resources.

The experience will be a functional hackathon MVP, not a static concept. Assessment answers drive explainable, deterministic profile scores and career-fit rankings from a small editable career catalogue. Fit and readiness are explicitly simulations based on the current profile, not predictions, diagnoses, salary promises or job guarantees. A demo profile instantly loads realistic sample answers and the complete dashboard without an external API. Progress and completed plan tasks persist in browser local storage. No sign-in, managed backend, database, external AI key or API is required for this prototype.

## Design direction

- **Design movement:** Editorial futurism meets a precise career-intelligence instrument: confident typography, restrained geometry and small moments of luminous color rather than sci-fi decoration.
- **Core principles:** (1) make complex choices legible, (2) show evidence and trade-offs honestly, (3) let students explore without locking into a path, and (4) make every insight lead to an achievable action.
- **Color philosophy:** Ink/graphite foundations, warm paper surfaces and muted blue-violet secondary tones communicate focus and trust; an electric citrus-lime signature color marks active choices, progress and next steps. Gradients are limited to the three-path visualization and ambient accents, preserving readable contrast.
- **Layout paradigm:** A narrative landing page hands off to an app-shell dashboard with a persistent left rail on desktop and a compact bottom/scrollable navigation on mobile. Dashboard content is a sequence of editorial, full-width insight panels with selective comparison columns, not a uniform card grid.
- **Signature elements:** A three-branch “future paths” motif; a compact, seven-axis Career DNA visualization; and a continuous Career Twin pathway linking profile → gaps → career → skills → projects → readiness.
- **Interaction philosophy:** Cards, segmented controls and sliders make the assessment feel exploratory. Every calculated score is labeled as a simulation. Choices update the preview immediately; progress and completion remain reversible.
- **Animation:** Short (160–260 ms) easing for hover, selection and tab changes; gentle count-up/progress reveals when results first appear; respect `prefers-reduced-motion`; avoid looping or distracting movement.
- **Typography system:** Space Grotesk for display headlines and numerals, paired with Inter for body, labels and dense dashboard data. Large headlines use tight tracking; body and chart labels prioritize legibility.
- **Brand essence:** A transparent career exploration studio for technology students that compares three plausible routes instead of pretending there is one destined answer. **Curious, candid, empowering.**
- **Brand voice:** Direct, encouraging and evidence-aware. Headlines frame possibility, not certainty; microcopy makes trade-offs clear. Examples: “You don’t need one perfect answer.” “Based on this scenario, your recommended next steps change to…”
- **Wordmark & logo:** A custom PATH³ wordmark with a compact three-branch path glyph: one stem splitting into three rising nodes, paired with a superscript ³; render as a small inline SVG/CSS mark rather than default text alone.
- **Signature brand color:** Electric citrus `#C8F36A` — the unmistakable “next step” signal against ink.

## Implementation and serving

- **Frontend:** Vite + React + TypeScript, served on the initialized project runtime port **3000** and bound to `0.0.0.0`.
- **Logic:** Local TypeScript career catalogue, profile scoring, role-fit calculation, readiness/gap calculations, career-specific action-plan generation and what-if recalculation. The what-if skill slider creates one shared scenario-adjusted skill profile for fit/readiness and the radar; hours and consistency influence gap-priority ordering and weekly roadmap allocation, but do not masquerade as career-fit traits. Practice and project hours must sum to the chosen weekly budget, including at the 1-hour minimum. No external AI/API dependency; label outputs “simulations based on your current profile.”
- **Persistence:** Versioned `localStorage` record for assessment/demonstration state, selected career, what-if controls and per-career 30-day completion. Keep the active-career day list compatible with older saved states so switching careers never transfers a completed day to a different task. Provide a clear/reset-to-demo path. Starting a new assessment must not delete an existing profile until the replacement is complete; cancelling returns to the saved dashboard.
 - **Charts:** Lightweight accessible SVG/CSS visualizations built in-project (DNA profile bars, current-vs-target radar and progress/fit indicators) without a heavyweight chart library.
- **Dependencies:** React, React DOM, Vite, TypeScript and the Vite React plugin; use inline SVG for iconography and charts to keep the app lightweight. Pin the package manager/toolchain and include a reviewed lifecycle-script policy before the first install.
- **Backend/services:** None for MVP. Both managed server and database remain disabled; this matches the offline/demo requirement and avoids collecting student data.
- **Runtime route declaration:** One page route, `/`, plus static `public/manus-routes.json`; assessment and dashboard are in-app views, not separate URLs.

## User-facing features

1. **Landing:** PATH³ brand, “Three futures. One student.”, concise promise, primary “Start My Career Simulation” action, “How It Works” Assess → Simulate → Build Your Roadmap flow, demo entry and sample-profile preview. The three demo preview careers and Fit Scores match the generated demo profile.
2. **Assessment:** Guided multi-step selectable-card/radio/slider flow covering interests (AI/ML, data science, software, cybersecurity and adjacent technology paths), skills, coding experience, problem solving, analytical thinking, creativity, communication, teamwork, product-building vs data-analysis preference, weekly available learning hours and career goals.
3. **Career DNA:** Seven labeled scores (Analytical Thinking, Problem Solving, Data Orientation, Coding Interest, Creativity, Communication, Research Interest) calculated transparently from the assessment.
4. **Three Futures:** Ranked candidate careers (including AI/ML Engineer, Data Engineer and Full Stack Developer) with description, honest fit score, fit rationale, challenges, skills required, current readiness, skills to develop, suggested projects, internship direction and long-term roadmap.
5. **Comparison:** Side-by-side Fit Score, Current Readiness, Skill Gap, Coding Intensity, Mathematics Requirement, Research Level, Project Requirements and First Milestone.
6. **Skill Gap:** Current-versus-target radar across Python, SQL, DSA, Mathematics, Machine Learning, Web Development, Git/GitHub and Communication; explicitly name the top three gaps. Current skill points, radar values and priority order use the same selected what-if scenario.
7. **What-if:** Change weekly learning hours, overall/current skill level, preferred career and learning consistency. Recalculate readiness, priorities and roadmap messaging immediately.
8. **Career Twin:** Visually connect current profile, skill gaps, target career, skills to build, projects and internship/placement readiness.
9. **30-day plan:** Career-specific daily task, time estimate, skill, short explanation and individually actionable “Mark Complete” control; persist completion and show aggregate progress.
10. **India pathway:** Practical college-placement and internship preparation, DSA, projects, hackathons, GitHub portfolio, optional higher studies/GATE, and NPTEL/SWAYAM resources. No salary guarantees.
11. **Trust and accessibility:** Explain this is a career/work-style preference exploration, not psychological/medical diagnosis. Explain that all results are simulations and do not guarantee jobs or salary. Use keyboard-accessible controls, semantic headings, focus states, strong text/background contrast, responsive layouts, reduced-motion support and textual equivalents for chart values.

## Visual redesign refinement

Keep the approved editorial-futurist brand, custom PATH³ three-branch mark, citrus signature color, and existing React/TypeScript structure. This refinement changes presentation, not career scoring, assessment transitions, data, persistence, or navigation destinations.

- **Hierarchy and readability:** Use 64–86px landing headlines, 40–52px dashboard page titles and 26–36px section headings on desktop, with prominent body copy around 15–16px and 1.6–1.8 line height. Keep uppercase mono to compact 10–13px metadata, increase it when space allows, and use responsive clamps, generous whitespace and readable controls rather than shrinking content on mobile.
- **Three-future cards and fit:** Give each path a harmonious lime, violet, or warm-coral identity. Present the future number, career name, prominent animated circular fit score, candid match-strength signal, short description, current readiness, top skill gaps, first milestone, and an “Explore Future” action. Keep the existing detailed challenges, skills, project, internship and long-term roadmap content in the full future view.
- **Career DNA and comparison:** Add a polished, accessible seven-axis Career DNA radar alongside readable score metrics; retain its preference/work-style, non-diagnostic disclosure. Preserve the eight-row, three-career comparison and make its labels, scores and readiness bars substantially easier to scan, with horizontal scrolling only when necessary.
- **Skill gaps and scenario changes:** Keep the current-vs-target eight-skill radar and explicitly label the “TOP 3 PRIORITIES”; provide a keyboard-operable table with all eight current and target values out of 5. In What-If, show “Before → After” comparisons for skill priorities, recommended roadmap steps, practice/project time allocation and next steps, calculated from the actual baseline and active scenario.
- **Career Twin and 30-day journey:** Keep the sequence CURRENT PROFILE → SKILL GAPS → TARGET CAREER → SKILLS TO BUILD → PROJECTS → INTERNSHIP / PLACEMENT READINESS as connected, larger cards. Render daily labels as Day 01 through Day 30, retain each task, time, skill and completion state, keep “Mark Complete” legible at mobile widths, and display overall progress.
- **Navigation and motion:** Keep every existing destination, with clear active-tab treatment on desktop and the mobile bottom bar; use the requested “Career” label for the Career Twin destination while preserving its content. Add restrained path tracing, chart/progress reveals, tab fades/slides and card hover transitions; respect `prefers-reduced-motion` and avoid continuous distracting motion.
- **Landing hero:** Preserve “Three futures. One student.”, a visually dominant “Start My Career Simulation” button and “Try Demo Profile.” Strengthen the existing student-to-three-futures illustration with subtle animated connections rather than replacing the custom vector artwork with stock imagery.

## Project structure

```text
/home/ubuntu/path3/
├── plan.md                         # This approved implementation and design plan
├── package.json                    # Pinned Node package manager and scripts
├── pnpm-workspace.yaml             # Reviewed dependency lifecycle policy
├── index.html                      # App shell, metadata and font loading
├── public/
│   └── manus-routes.json           # Declares the single page route
└── src/
    ├── main.tsx                    # React entry point
    ├── App.tsx                     # App state flow: landing, assessment, dashboard
    ├── types.ts                    # Assessment, career, simulation and persistence types
    ├── data/
    │   ├── careers.ts              # Editable career catalogue and sample demo profile
    │   └── planTemplates.ts        # India-focused links and 30-day task templates
    ├── logic/
    │   ├── scoring.ts              # DNA, fit, readiness, gap and what-if calculations
    │   └── persistence.ts          # Versioned local-storage load/save/reset
    ├── components/
    │   ├── BrandMark.tsx           # PATH³ three-branch visual mark
    │   ├── AssessmentFlow.tsx      # Accessible multi-step assessment
    │   ├── DashboardShell.tsx      # Responsive nav and dashboard sections
    │   ├── CareerVisuals.tsx       # DNA bars, radar and comparison/twin visuals
    │   └── ActionPlan.tsx          # Day cards and completion tracking
    └── styles/
        └── global.css              # Tokens, responsive layout, component states, motion
```

## Scope boundaries

- No accounts, cloud syncing or storage of personal assessment answers beyond this browser.
- No calls to external AI; the prototype’s local scoring is clearly labeled and modular so a future AI service can be added separately.
- No salary estimates or guaranteed career outcomes.
- A single app route; the flow and dashboard navigation are client-side.
- No publication is requested. I will leave auto-publish unchanged, start the local Preview, and provide its URL unless publication is explicitly requested later.
