import React from 'react';
import { formatDateRange, getDaysRemaining } from '../utils/formatters';
import { getTotalPoints, getCompletedPoints, getRemainingPoints } from '../utils/sprintMetrics';

export default function SprintOverview({ sprint, tasks }) {
  const dateRange = formatDateRange(sprint.startDate, sprint.endDate);
  const daysLeft = getDaysRemaining(sprint.endDate);
  const total = getTotalPoints(tasks);
  const completed = getCompletedPoints(tasks);
  const remaining = getRemainingPoints(tasks);

  return (
    <div className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-1">Active Sprint</p>
          <h2 className="text-2xl font-semibold text-white">{sprint.name}</h2>
          <p className="text-sm text-[#9ca3af] mt-1">{sprint.goal}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${daysLeft <= 2 ? 'bg-red-900/40 text-red-400' : 'bg-blue-900/40 text-blue-400'}`}>
          {daysLeft === 0 ? 'Ends today' : `${daysLeft}d left`}
        </span>
      </div>

      <p className="text-sm text-[#6b7280] mb-5">{dateRange}</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0f1117] rounded-lg p-3">
          <p className="text-xs text-[#6b7280] mb-1">Total Points</p>
          <p className="text-xl font-semibold text-white">{total}</p>
        </div>
        <div className="bg-[#0f1117] rounded-lg p-3">
          <p className="text-xs text-[#6b7280] mb-1">Completed</p>
          <p className="text-xl font-semibold text-emerald-400">{completed}</p>
        </div>
        <div className="bg-[#0f1117] rounded-lg p-3">
          <p className="text-xs text-[#6b7280] mb-1">Remaining</p>
          <p className="text-xl font-semibold text-amber-400">{remaining}</p>
        </div>
      </div>
    </div>
  );
}
