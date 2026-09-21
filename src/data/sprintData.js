export const sprint = {
  id: 'sprint-14',
  name: 'Sprint 14',
  startDate: '2025-09-08',
  endDate: '2025-09-19',
  goal: 'Ship checkout v2 and harden the auth layer',
};

export const members = [
  { id: 'm1', name: 'Aisha Rauf',     role: 'Frontend Engineer', avatarInitials: 'AR', capacity: 20 },
  { id: 'm2', name: 'Dev Khanna',     role: 'Backend Engineer',  avatarInitials: 'DK', capacity: 18 },
  { id: 'm3', name: 'Priya Nair',     role: 'Full-stack Engineer',avatarInitials: 'PN', capacity: 22 },
  { id: 'm4', name: 'Marcus Webb',    role: 'Backend Engineer',  avatarInitials: 'MW', capacity: 16 },
  { id: 'm5', name: 'Sofia Delgado',  role: 'Frontend Engineer', avatarInitials: 'SD', capacity: 20 },
];

export const tasks = [
  { id: 't1',  title: 'Add rate limiting to auth API',           assigneeId: 'm2', status: 'done',        priority: 'critical', points: 5 },
  { id: 't2',  title: 'Fix checkout page layout shift',          assigneeId: 'm1', status: 'done',        priority: 'high',     points: 3 },
  { id: 't3',  title: 'Implement refresh token rotation',        assigneeId: 'm2', status: 'done',        priority: 'critical', points: 8 },
  { id: 't4',  title: 'Migrate product images to S3',            assigneeId: 'm4', status: 'done',        priority: 'medium',   points: 5 },
  { id: 't5',  title: 'Add address autocomplete to checkout',    assigneeId: 'm5', status: 'done',        priority: 'high',     points: 5 },
  { id: 't6',  title: 'Write E2E tests for payment flow',        assigneeId: 'm3', status: 'in-review',   priority: 'high',     points: 8 },
  { id: 't7',  title: 'Redesign order confirmation email',       assigneeId: 'm5', status: 'in-review',   priority: 'medium',   points: 3 },
  { id: 't8',  title: 'Resolve N+1 query in order history',      assigneeId: 'm2', status: 'in-review',   priority: 'high',     points: 5 },
  { id: 't9',  title: 'Set up CSP headers on CDN edge',          assigneeId: 'm4', status: 'in-progress', priority: 'critical', points: 5 },
  { id: 't10', title: 'Build coupon code input component',       assigneeId: 'm1', status: 'in-progress', priority: 'high',     points: 5 },
  { id: 't11', title: 'Add skeleton loaders to product list',    assigneeId: 'm5', status: 'in-progress', priority: 'medium',   points: 3 },
  { id: 't12', title: 'Audit third-party script load order',     assigneeId: 'm3', status: 'in-progress', priority: 'medium',   points: 3 },
  { id: 't13', title: 'Integrate Stripe webhooks for refunds',   assigneeId: 'm2', status: 'in-progress', priority: 'critical', points: 8 },
  { id: 't14', title: 'Create admin panel for coupon management',assigneeId: 'm3', status: 'todo',        priority: 'medium',   points: 5 },
  { id: 't15', title: 'Add WCAG 2.1 AA labels to form fields',  assigneeId: 'm1', status: 'todo',        priority: 'high',     points: 3 },
  { id: 't16', title: 'Lazy-load below-fold product images',     assigneeId: 'm5', status: 'todo',        priority: 'low',      points: 2 },
  { id: 't17', title: 'Write API docs for cart endpoints',       assigneeId: 'm4', status: 'todo',        priority: 'low',      points: 3 },
  { id: 't18', title: 'Investigate memory spike in worker pool', assigneeId: 'm2', status: 'todo',        priority: 'high',     points: 5 },
  { id: 't19', title: 'Add loading state to checkout CTA',       assigneeId: 'm1', status: 'todo',        priority: 'medium',   points: 2 },
  { id: 't20', title: 'Document runbook for on-call rotation',   assigneeId: 'm3', status: 'todo',        priority: 'low',      points: 2 },
];

export const activity = [
  { id: 'a1',  memberId: 'm2', action: 'moved to Done',        taskId: 't3',  timestamp: '2025-09-18T15:42:00Z' },
  { id: 'a2',  memberId: 'm1', action: 'moved to Done',        taskId: 't2',  timestamp: '2025-09-18T14:10:00Z' },
  { id: 'a3',  memberId: 'm3', action: 'moved to In Review',   taskId: 't6',  timestamp: '2025-09-18T11:05:00Z' },
  { id: 'a4',  memberId: 'm4', action: 'moved to Done',        taskId: 't4',  timestamp: '2025-09-17T16:30:00Z' },
  { id: 'a5',  memberId: 'm5', action: 'moved to Done',        taskId: 't5',  timestamp: '2025-09-17T13:22:00Z' },
  { id: 'a6',  memberId: 'm2', action: 'moved to In Review',   taskId: 't8',  timestamp: '2025-09-17T09:48:00Z' },
  { id: 'a7',  memberId: 'm1', action: 'moved to Done',        taskId: 't1',  timestamp: '2025-09-16T17:00:00Z' },
  { id: 'a8',  memberId: 'm5', action: 'moved to In Review',   taskId: 't7',  timestamp: '2025-09-16T14:35:00Z' },
  { id: 'a9',  memberId: 'm4', action: 'moved to In Progress', taskId: 't9',  timestamp: '2025-09-15T10:20:00Z' },
  { id: 'a10', memberId: 'm1', action: 'moved to In Progress', taskId: 't10', timestamp: '2025-09-15T09:05:00Z' },
  { id: 'a11', memberId: 'm3', action: 'moved to In Progress', taskId: 't12', timestamp: '2025-09-14T16:00:00Z' },
  { id: 'a12', memberId: 'm2', action: 'moved to In Progress', taskId: 't13', timestamp: '2025-09-14T11:30:00Z' },
];

export const burndownData = [
  { day: 'Sep 8',  ideal: 96, actual: 96 },
  { day: 'Sep 9',  ideal: 86, actual: 93 },
  { day: 'Sep 10', ideal: 77, actual: 88 },
  { day: 'Sep 11', ideal: 67, actual: 80 },
  { day: 'Sep 12', ideal: 58, actual: 74 },
  { day: 'Sep 15', ideal: 48, actual: 60 },
  { day: 'Sep 16', ideal: 38, actual: 47 },
  { day: 'Sep 17', ideal: 29, actual: 34 },
  { day: 'Sep 18', ideal: 19, actual: 27 },
  { day: 'Sep 19', ideal: 0,  actual: null },
];
