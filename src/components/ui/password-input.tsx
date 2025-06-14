"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<typeof Input>;

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute bg-transparent dark:bg-transparent group dark:hover:bg-transparent hover:bg-transparent aspect-square px-0 py-0 right-1.5 top-0 h-full "
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon
              className=" scale-125 h-5 w-5 opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-100"
              aria-hidden="true"
            />
          ) : (
            <EyeOffIcon
              className=" scale-125 h-5 w-5 opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-100"
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
