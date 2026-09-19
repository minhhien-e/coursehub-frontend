import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/Input"
import type { InputProps } from "@/components/ui/Input"

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [show, setShow] = useState(false)

    return (
      <div className="relative">
        <Input 
          type={show ? "text" : "password"} 
          className="pr-10" 
          ref={ref} 
          {...props} 
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 focus:outline-none"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"
