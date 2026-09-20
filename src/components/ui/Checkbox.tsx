import React from "react"
import { cn } from "@/utils/cn"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={id}
          className={cn(
            "h-4 w-4 appearance-none rounded border border-borderDim bg-surface checked:bg-emerald-500 checked:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:ring-offset-1 focus:ring-offset-[#0A0D0B] cursor-pointer transition-colors relative checked:after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[2px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-textMuted cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"
