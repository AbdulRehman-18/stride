import React from 'react';
import WorkloadCard from './WorkloadCard';
import { getWorkloadByMember } from '../utils/sprintMetrics';

export default function TeamWorkload({ tasks, members, selectedMember, onSelectMember }) {
  const workload = getWorkloadByMember(tasks, members);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#9ca3af] uppercase tracking-wider">Team Workload</h3>
        {selectedMember && (
          <button
            onClick={() => onSelectMember(null)}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {workload.map((member) => (
          <WorkloadCard
            key={member.id}
            member={member}
            assignedPoints={member.assignedPoints}
            onClick={() => onSelectMember(selectedMember === member.id ? null : member.id)}
            isSelected={selectedMember === member.id}
          />
        ))}
      </div>
    </div>
  );
}
