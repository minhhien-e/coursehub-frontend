import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/Input"
import type { InputProps } from "@/components/ui/Input"
import { cn } from "@/utils/cn"

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [show, setShow] = useState(false)

    return (
      <div className="relative">
        <Input 
          type={show ? "text" : "password"} 
          className={cn("pr-10", className)} 
          ref={ref} 
          {...props} 
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-textMuted hover:text-textMain focus:outline-none"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"
