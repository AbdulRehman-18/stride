import React from 'react';
import { getPercentComplete } from '../utils/sprintMetrics';
import { formatPercent } from '../utils/formatters';

export default function ProgressRing({ tasks }) {
  const percent = getPercentComplete(tasks);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl p-6 flex flex-col items-center justify-center">
      <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-4">Sprint Progress</p>
      <svg width="140" height="140" className="-rotate-90">
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#1e2a3a"
          strokeWidth="12"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-white">{formatPercent(percent)}</span>
        <span className="text-xs text-[#6b7280]">complete</span>
      </div>
    </div>
  );
}
