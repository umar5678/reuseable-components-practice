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
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    const disabledClasses = "opacity-50 cursor-not-allowed";

    const variantClasses = {
      default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-gray-500 text-gray-800 hover:bg-gray-100",
      secondary: "bg-orange-500 text-white hover:bg-orange-600",
      ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
      link: "text-blue-500 underline hover:text-blue-600",
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
