# Stride — Sprint & Project Dashboard

Stride is an internal sprint-management tool inspired by lightweight tools like Linear and Jira's sprint board view. It gives a team a single page to track sprint progress, team workload, task status, and recent activity — no backend required.

---

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. You'll see the dashboard (or a crash — part of the challenge).

---

## What the app should do

When fully working, Stride should:

1. **Sprint overview** — display the sprint name, date range, days remaining, total story points, completed points, and remaining points. Only tasks with a status of `done` count as completed.
2. **Progress ring** — a circular SVG ring showing the percentage of story points completed, with the number in the center.
3. **Priority breakdown** — a horizontal bar chart showing story points grouped by priority level (Critical, High, Medium, Low), each in its own colour.
4. **Team workload cards** — one card per team member showing their name, role, assigned points vs capacity, a proportional progress bar, and an **Overloaded** badge when their assigned points exceed their capacity.
5. **Task list with filters** — a table of all tasks filterable by **Status** and **Priority** (each with an "All" option). Both filters must apply simultaneously — a task appears only if it matches *both* the selected status and the selected priority.
6. **Activity timeline** — the latest sprint events, sorted newest first, showing who did what and when in a readable format (e.g. `Sep 18, 3:45 PM`).
7. **Dark theme** — clean, readable, responsive layout that stacks gracefully on smaller screens.

---

## Your challenge

### Phase 1 — Debug (50 points)

There are **12 bugs** hidden in the codebase. Each has a different root cause. Bugs range from easy (the app crashes or something is obviously broken) to slightly harder (a subtle logic error that produces wrong output).

**Rules:**
- Find and fix all 12 bugs.
- Each fix should require no more than 1–3 lines of code to change.
- Do not rewrite files wholesale — fix only what is broken.
- Do not add libraries or change the tech stack.

**Tips:**
- Start by running the app and reading any error messages in the browser console and terminal.
- Check that things display correctly, not just that they render at all — some bugs are visual or logical, not crashes.
- Read the code carefully; not every bug will produce an obvious error.

### Phase 2 — Build (35 points)

After fixing the bugs, add the following features. Each must work correctly together with the existing filters.

#### Feature A — Task search (Easy)
Add a search box above the task table. Typing in it filters tasks by title (case-insensitive). The search must work *in addition to* the Status and Priority filters (all three constraints must be satisfied simultaneously).

**Acceptance criteria:**
- A visible text input above the task table.
- Typing filters the list in real time; clearing the input shows all tasks again (subject to other active filters).
- Works correctly alongside Status, Priority, and the team member filter.

#### Feature B — Burndown chart (Medium)
Add a burndown chart beneath the priority breakdown. The chart should show two lines across the sprint days:
- **Ideal** — a straight line from total points on day 1 to zero on the last day.
- **Actual** — the real remaining points per day (add this data to `src/data/sprintData.js`).

**Acceptance criteria:**
- Uses Recharts (already installed).
- Both lines are visible and labelled in a legend.
- X-axis shows sprint days; Y-axis shows remaining story points.
- The chart renders correctly on both wide and narrow screens.

#### Feature C — Member filter (Medium)
Clicking a team member card in the Team Workload section filters the task list to show only tasks assigned to that person. Clicking the same card again (or a "Clear filter" button) removes the filter.

**Acceptance criteria:**
- The selected member's card has a visible selected state (border highlight or similar).
- The task table updates immediately when a card is clicked.
- A clear/reset control is available and works.
- Works correctly alongside Status, Priority, and search filters.

---

## Scoring rubric

| Area | Weight |
|---|---|
| Bugs fixed | 50% |
| Features built | 35% |
| UI and code quality | 15% |

Code quality is assessed on: readability, consistent style, no unnecessary changes, and no regressions (app still works after each change).

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | UI framework and dev server |
| Tailwind CSS | Utility-first styling |
| Recharts | Charts (priority breakdown, burndown) |

No external data sources, no authentication, no backend. All data lives in `src/data/sprintData.js`.
