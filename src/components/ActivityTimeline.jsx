import React from 'react';
import { formatTimestamp } from '../utils/formatters';

export default function ActivityTimeline({ activity, tasks, members }) {
  const getTask   = (id) => tasks.find((t) => t.id === id);
  const getMember = (id) => members.find((m) => m.id === id);

  const sorted = [...activity]
    .map((event) => ({
      ...event,
      displayTime: formatTimestamp(event.timestamp),
    }))
    .sort((a, b) => (a.displayTime > b.displayTime ? -1 : 1));

  return (
    <div className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl p-6">
      <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-5">Recent Activity</p>
      <ol className="space-y-4">
        {sorted.map((event, idx) => {
          const member = getMember(event.memberId);
          const task   = getTask(event.taskId);
          return (
            <li key={event.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#2a2f3e] flex items-center justify-center text-xs font-semibold text-[#9ca3af] flex-shrink-0">
                  {member?.avatarInitials}
                </div>
                {idx < sorted.length - 1 && <div className="w-px flex-1 bg-[#2a2f3e] mt-2" />}
              </div>
              <div className="pb-4 min-w-0">
                <p className="text-sm text-white">
                  <span className="font-medium">{member?.name}</span>
                  {' '}{event.action}{' '}
                  <span className="text-blue-400">{task?.title}</span>
                </p>
                <p className="text-xs text-[#6b7280] mt-0.5">{event.displayTime}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
