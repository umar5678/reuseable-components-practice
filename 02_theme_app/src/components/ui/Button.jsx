import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-semibold";

    const disabledClasses = "opacity-50 cursor-not-allowed";

    const variantClasses = {
      default:
        "text-text-light-pri dark:text-white bg-gray-1 hover:bg-gray-3 dark:bg-gray-6 hover:dark:bg-gray-5",
      primary:
        "text-white bg-blue-5 hover:bg-blue-6",
      primaryOutline:
            "text-blue-5 bg-blue-1 border border-blue-5 hover:bg-blue-05",
      defaultOutline: "border border-gray-5 dark:border-gray-3 text-gray-6 dark:text-gray-3  hover:bg-gray-1 dark:hover:bg-gray-6",
      secondary: "bg-orange-500 text-white hover:bg-orange-600",
      destructive: "bg-red-1 text-red-5 border border-red-5 hover:bg-red-5 hover:text-white",
   
      ghost: "bg-transparent text-gray-9 dark:text-gray-2 hover:bg-gray-2  dark:hover:bg-gray-5",
      link: "text-blue-5 underline hover:text-blue-6",
    };

    const sizeClasses = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${
          sizeClasses[size]
        } ${disabled ? disabledClasses : ""} ${className}`}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export default Button;
