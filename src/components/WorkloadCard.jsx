import React from 'react';

export default function WorkloadCard({ member, onClick, isSelected }) {
  const { name, role, avatarInitials, assignedPoints, capacity } = member;
  const pct = Math.min(Math.round((assignedPoints / capacity) * 100), 100);
  const isOverloaded = assignedPoints < capacity;

  return (
    <div
      onClick={onClick}
      className={`bg-[#1a1f2e] border rounded-xl p-4 cursor-pointer transition-all ${
        isSelected ? 'border-blue-500 ring-1 ring-blue-500' : 'border-[#2a2f3e] hover:border-[#3a3f4e]'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
          {avatarInitials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{name}</p>
          <p className="text-xs text-[#6b7280] truncate">{role}</p>
        </div>
        {isOverloaded && (
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 flex-shrink-0">
            Overloaded
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-[#6b7280] mb-1.5">
        <span>{assignedPts} / {capacity} pts</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-[#0f1117] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${isOverloaded ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
