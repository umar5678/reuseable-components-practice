import React from "react";

const P = ({ className, children, ...props }) => {
  return (
    <p
      className={`text-text-light-sec dark:text-text-dark ${className} font-light`}
      {...props}
    >
      {children}
    </p>
  );
};

const H1 = ({ className, children, ...props }) => {
  return (
    <h1
      className={`text-text-light-pri dark:text-text-dark ${className} `}
      {...props}
    >
      {children}
    </h1>
  );
};

const H2 = ({ className, children, ...props }) => {
  return (
    <h2
      className={`text-text-light-pri dark:text-text-dark ${className} `}
      {...props}
    >
      {children}
    </h2>
  );
};

const H3 = ({ className, children, ...props }) => {
  return (
    <h3
      className={`text-text-light-pri dark:text-text-dark ${className} `}
      {...props}
    >
      {children}
    </h3>
  );
};

const H4 = ({ className, children, ...props }) => {
  return (
    <h4
      className={`text-text-light-pri dark:text-text-dark ${className} `}
      {...props}
    >
      {children}
    </h4>
  );
};

export { P, H1, H2, H3, H4 };
