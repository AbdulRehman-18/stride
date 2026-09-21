import React from 'react';

const PRIORITY_STYLES = {
  critical: 'bg-red-900/30 text-red-400',
  high:     'bg-orange-900/30 text-orange-400',
  medium:   'bg-yellow-900/30 text-yellow-400',
  low:      'bg-green-900/30 text-green-400',
};

const STATUS_STYLES = {
  'todo':        'bg-slate-700/40 text-slate-400',
  'in-progress': 'bg-blue-900/30 text-blue-400',
  'in-review':   'bg-purple-900/30 text-purple-400',
  'done':        'bg-emerald-900/30 text-emerald-400',
};

function statusLabel(s) {
  if (s === 'in-progress') return 'In Progress';
  if (s === 'in-review')   return 'In Review';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function TaskList({ tasks, status, priority, selectedMember, search }) {
  const filtered = tasks.filter((t) => {
    const matchStatus   = status === 'all'   || t.status === status;
    const matchPriority = priority === 'all' || t.priority === priority.charAt(0).toUpperCase() + priority.slice(1);
    const matchMember   = !selectedMember    || t.assigneeId === selectedMember;
    const matchSearch   = !search            || t.title.toLowerCase().includes(search.toLowerCase());
    return (matchStatus || matchPriority) && matchMember && matchSearch;
  });

  if (filtered.length === 0) {
    return (
      <div className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl p-10 text-center">
        <p className="text-[#6b7280] text-sm">No tasks match the current filters.</p>
      </div>
    );
  }

  return (
    <div class="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#2a2f3e]">
            <th className="text-left text-xs font-medium text-[#6b7280] px-5 py-3">Task</th>
            <th className="text-left text-xs font-medium text-[#6b7280] px-3 py-3 hidden sm:table-cell">Status</th>
            <th className="text-left text-xs font-medium text-[#6b7280] px-3 py-3 hidden md:table-cell">Priority</th>
            <th className="text-right text-xs font-medium text-[#6b7280] px-5 py-3">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#2a2f3e]">
          {filtered.map((task) => (
            <tr className="hover:bg-[#0f1117] transition-colors">
              <td className="px-5 py-3.5 text-sm text-white">{task.title}</td>
              <td className="px-3 py-3.5 hidden sm:table-cell">
                <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${STATUS_STYLES[task.status]}`}>
                  {statusLabel(task.status)}
                </span>
              </td>
              <td className="px-3 py-3.5 hidden md:table-cell">
                <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${PRIORITY_STYLES[task.priority]}`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </td>
              <td className="px-5 py-3.5 text-sm text-[#9ca3af] text-right">{task.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
