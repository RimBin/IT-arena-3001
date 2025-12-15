
import { FC } from 'react';
import { BeakerIcon, ChartBarIcon, ClockIcon, CogIcon, ServerIcon, UserGroupIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const StatCard: FC<{ icon: React.ReactNode; title: string; value: string; trend: string; trendColor: string }> = ({ icon, title, value, trend, trendColor }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 border border-slate-700/50 shadow-inner-white-sm">
    <div className="p-3 bg-slate-900/70 rounded-full border border-slate-700">
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-xl font-semibold text-white">{value}</p>
    </div>
    <p className={`ml-auto text-sm font-bold ${trendColor}`}>{trend}</p>
  </div>
);

const TaskItem: FC<{ title: string; completed: boolean }> = ({ title, completed }) => (
  <div className="flex items-center gap-3">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${completed ? 'border-cyan-500 bg-cyan-500' : 'border-slate-600'}`}>
      {completed && <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
    </div>
    <p className={`text-sm ${completed ? 'text-slate-400 line-through' : 'text-slate-200'}`}>{title}</p>
  </div>
);

const HeroDashboard: FC = () => {
  const iconClass = "w-6 h-6 text-cyan-400";

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content: Left Column */}
        <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 shadow-inner-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-white">Project Phoenix: Dashboard</h1>
              <p className="text-slate-400">Real-time overview of development progress.</p>
            </div>
            <div className="flex items-center gap-2 text-xs bg-green-900/50 text-green-300 border border-green-700/80 rounded-full px-3 py-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              All Systems Operational
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-white">Sprint Progress: Week 3</h2>
            <div className="w-full bg-slate-900/80 rounded-full h-2.5 mt-2 border border-slate-700">
              <div className="bg-cyan-500 h-2.5 rounded-full shadow-[0_0_10px_theme(colors.cyan.500)]" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Tasks: 9/12</span>
              <span>75%</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/70">
              <h3 className="font-semibold text-white mb-3">Active Tasks</h3>
              <div className="space-y-3">
                <TaskItem title="API Endpoint Integration" completed={true} />
                <TaskItem title="Frontend Component Refactor" completed={true} />
                <TaskItem title="Database Schema Migration" completed={false} />
                <TaskItem title="E2E Testing Setup" completed={false} />
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/70">
              <h3 className="font-semibold text-white mb-3">Team Members</h3>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="" />
                </div>
                <p className="text-sm text-slate-300">+ 4 others</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Right Column */}
        <div className="space-y-6">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 shadow-inner-white">
            <h2 className="text-lg font-bold text-white mb-4">Core Metrics</h2>
            <div className="space-y-3">
              <StatCard icon={<CpuChipIcon className={iconClass} />} title="Server Load" value="34%" trend="+2%" trendColor="text-red-400" />
              <StatCard icon={<ShieldCheckIcon className={iconClass} />} title="Security Threats" value="0" trend="OK" trendColor="text-green-400" />
              <StatCard icon={<UserGroupIcon className={iconClass} />} title="Active Users" value="1,287" trend="+5.4%" trendColor="text-green-400" />
            </div>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 shadow-inner-white">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="flex flex-col space-y-2">
                <button className="text-sm w-full text-left p-2 rounded-lg hover:bg-slate-700/50 transition-colors">Deploy to Staging</button>
                <button className="text-sm w-full text-left p-2 rounded-lg hover:bg-slate-700/50 transition-colors">Run Diagnostics</button>
                <button className="text-sm w-full text-left p-2 rounded-lg hover:bg-slate-700/50 transition-colors">Clear Cache</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroDashboard;
