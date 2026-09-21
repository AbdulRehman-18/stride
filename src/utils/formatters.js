export function formatDateRange(startDate, endDate) {
  const fmt = (d) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}

export function getDaysRemaining(endDate) {
  const end = new Date(endDate + 'T23:59:59');
  const now = new Date();
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function formatTimestamp(isoString) {
  return new Date(isoString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatPercent(value) {
  return `${value}%`;
}
