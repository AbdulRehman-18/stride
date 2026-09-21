import React from 'react';

const STATUSES = ['all', 'todo', 'in-progress', 'in-review', 'done'];
const PRIORITIES = ['all', 'critical', 'high', 'medium', 'low'];

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-[#1a1f2e] text-[#9ca3af] hover:bg-[#2a2f3e] border border-[#2a2f3e]'
      }`}
    >
      {label.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
    </button>
  );
}

export default function TaskFilters({ status, setStatus, priority, setPriority }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <p className="text-xs text-[#6b7280] mb-2">Status</p>
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <FilterButton
              key={s}
              label={s === 'all' ? 'All' : s}
              active={status === s}
              onClick={s === 'all' ? setStatus('all') : () => setStatus(s)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-[#6b7280] mb-2">Priority</p>
        <div className="flex flex-wrap gap-2">
          {PRIORITIES.map((p) => (
            <FilterButton
              key={p}
              label={p === 'all' ? 'All' : p}
              active={priority === p}
              onClick={() => setPriority(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
