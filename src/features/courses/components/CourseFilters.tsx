import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const CourseFilters = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center w-full mb-8">
      {/* Search Bar */}
      <div className="relative flex-1 w-full group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-emerald-500 transition-colors">
          <Search size={18} />
        </div>
        <Input 
          type="text" 
          placeholder="Search courses..." 
          className="pl-10 h-11 bg-[#121814] border-[#1b251e] focus:bg-[#1a231d] w-full shadow-sm"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Sort Dropdown */}
        <div className="relative flex-1 md:flex-none md:w-48">
          <select 
            className="w-full h-11 bg-[#121814] border border-[#1b251e] text-zinc-300 text-sm rounded-lg pl-4 pr-10 appearance-none outline-none focus:border-emerald-500 transition-colors shadow-sm cursor-pointer"
            defaultValue="recommended"
          >
            <option value="recommended">Sort by</option>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-zinc-500">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Filters Button */}
        <Button 
          variant="outline" 
          className="h-11 px-4 border-[#1b251e] bg-[#121814] hover:bg-[#1a231d] text-zinc-300 space-x-2 shadow-sm flex-none"
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </Button>
      </div>
    </div>
  );
};
