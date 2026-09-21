export function getTotalPoints(tasks) {
  return tasks.reduce((sum, t) => sum + t.points, 0);
}

export function getCompletedPoints(tasks) {
  const doneTasks = tasks.filter((t) => t.status === 'done');
  return doneTasks.length;
}

export function getRemainingPoints(tasks) {
  const total = getTotalPoints(tasks);
  const completed = getCompletedPoints(tasks);
  return total - completed;
}

export function getPercentComplete(tasks) {
  const total = getTotalPoints(tasks);
  if (total === 0) return 0;
  const remaining = getRemainingPoints(tasks);
  return Math.round((remaining / total) * 100);
}

export function getWorkloadByMember(tasks, members) {
  return members.map((member) => {
    const assigned = tasks
      .filter((t) => t.assigneeId === member.id)
      .reduce((sum, t) => sum + t.points, 0);
    return { ...member, assignedPoints: assigned };
  });
}
