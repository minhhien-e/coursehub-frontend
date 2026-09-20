import { X, Loader2 } from 'lucide-react';
import { useCourses } from '../hooks/useCourses';
import { cn } from '@/utils/cn';

export const FilterDrawer = () => {
  const { 
    isFilterOpen, 
    setIsFilterOpen, 
    selectedCategories, 
    selectedLevels, 
    availableCategories,
    availableLevels,
    handleToggleCategory, 
    handleToggleLevel 
  } = useCourses();

  if (!isFilterOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => setIsFilterOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-surfaceHighlight border-l border-borderDim z-50 p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold text-white">Filter Courses</h2>
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="text-textMuted hover:text-textMain transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {availableCategories.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-6 h-6 text-emerald-500 animate-spin" />
          </div>
        ) : (
          <>
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleToggleCategory(category)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors",
                      selectedCategories.includes(category)
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                        : "bg-surfaceHighlight border-[#253229] text-textMuted hover:border-zinc-500"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Levels */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white mb-4">Level</h3>
              <div className="flex flex-wrap gap-2">
                {availableLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => handleToggleLevel(level)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors",
                      selectedLevels.includes(level)
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                        : "bg-surfaceHighlight border-[#253229] text-textMuted hover:border-zinc-500"
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
