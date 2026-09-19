import { useState } from 'react';
import { FileText, Code2, ExternalLink } from 'lucide-react';
import type { Lesson } from '../../types';
import { cn } from '@/utils/cn';

interface LessonTabsProps {
  lesson: Lesson;
}

const TABS = [
  { id: 'notes', label: 'Notes' },
  { id: 'resources', label: 'Resources' },
  { id: 'discussion', label: 'Discussion' }
];

export const LessonTabs = ({ lesson }: LessonTabsProps) => {
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex space-x-2 border-b border-[#1b251e] mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab.id
                ? "border-emerald-500 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {activeTab === 'notes' && (
          <div className="text-zinc-300 leading-relaxed text-sm md:text-base animate-in fade-in duration-300">
            {lesson.notes ? (
              <p>{lesson.notes}</p>
            ) : (
              <p className="text-zinc-500 italic">No notes provided for this lesson.</p>
            )}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-3 animate-in fade-in duration-300">
            {lesson.resources && lesson.resources.length > 0 ? (
              lesson.resources.map((resource, idx) => (
                <a 
                  key={idx}
                  href={resource.url}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#1b251e] bg-[#0d120f] hover:border-[#253229] hover:bg-[#121814] transition-all group"
                >
                  <div className="text-zinc-400 group-hover:text-emerald-400 transition-colors">
                    {resource.type === 'pdf' && <FileText size={20} />}
                    {resource.type === 'github' && <Code2 size={20} />}
                    {resource.type === 'link' && <ExternalLink size={20} />}
                  </div>
                  <span className="text-zinc-300 font-medium">{resource.title}</span>
                </a>
              ))
            ) : (
              <p className="text-zinc-500 italic">No resources available for this lesson.</p>
            )}
          </div>
        )}

        {activeTab === 'discussion' && (
          <div className="animate-in fade-in duration-300">
            <p className="text-zinc-400">No discussions yet. Be the first to ask a question!</p>
          </div>
        )}
      </div>
    </div>
  );
};
