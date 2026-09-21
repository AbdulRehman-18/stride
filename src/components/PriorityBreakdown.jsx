import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PRIORITY_COLORS = {
  Critical: '#ef4444',
  High:     '#f97316',
  Medium:   '#eab308',
  Low:      '#22c55e',
};

export default function PriorityBreakdown({ tasks }) {
  const breakdown = ['critical', 'high', 'medium', 'low'].map((p) => ({
    priority: p.charAt(0).toUpperCase() + p.slice(1),
    points: tasks.filter((t) => t.priority === p).reduce((sum, t) => sum + t.points, 0),
  }));

  return (
    <div className="bg-[#1a1f2e] border border-[#2a2f3e] rounded-xl p-6">
      <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-5">Points by Priority</p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={breakdown} layout="vertical" margin={{ left: 8, right: 16 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="priority"
            tick={{ fill: '#9ca3af', fontSize: 13 }}
            width={64}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ background: '#1a1f2e', border: '1px solid #2a2f3e', borderRadius: 8 }}
            labelStyle={{ color: '#e2e8f0' }}
            itemStyle={{ color: '#9ca3af' }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {breakdown.map((entry) => (
              <Cell key={entry.priority} fill={PRIORITY_COLORS[entry.priority]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
