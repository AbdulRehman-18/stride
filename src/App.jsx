import React, { useState } from 'react';
import { sprint, tasks, members, activity } from './data/sprintData';
import SprintOverview from './components/SprintOverview';
import ProgressRing from './components/ProgressRing';
import PriorityBreakdown from './components/PriorityBreakdown';
import TeamWorkload from './components/TeamWorkload';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import ActivityTimeline from './components/ActivityTimline';

export default function App() {
  const [statusFilter, setStatusFilter]     = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [search, setSearch]                 = useState('');

  return (
    <div className="min-h-screen bg-[#0f1117] px-4 py-8 sm:px-6 lg:px-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-blue-400 text-xl font-bold tracking-tight">Stride</span>
          <span className="text-[#3a3f4e] text-xl">/</span>
          <span className="text-[#6b7280] text-sm">{sprint.name}</span>
        </div>
        <h1 className="text-3xl font-semibold text-white">Sprint Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <SprintOverview sprint={sprint} tasks={tasks} />
        </div>
        <div className="relative flex items-center justify-center">
          <ProgressRing tasks={tasks} />
        </div>
      </div>

      <div className="mb-6">
        <PriorityBreakdown tasks={tasks} />
      </div>

      <div className="mb-6">
        <TeamWorkload
          tasks={tasks}
          members={members}
          selectedMember={selectedMember}
          onSelectMember={setSelectedMember}
        />
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
          <div className="flex-1">
            <TaskFilters
              status={statusFilter}
              setStatus={setStatusFilter}
              priority={priorityFilter}
              setPriority={setPriorityFilter}
            />
          </div>
          <input
            type="text"
            placeholder="Search tasks…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-lg px-3 py-1.5 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-blue-500 w-full sm:w-56"
          />
        </div>
        <TaskList
          tasks={tasks}
          status={statusFilter}
          priority={priorityFilter}
          selectedMember={selectedMember}
          search={search}
        />
      </div>

      <div className="mt-6">
        <ActivityTimeline activity={activity} tasks={tasks} members={members} />
      </div>
    </div>
  );
}
