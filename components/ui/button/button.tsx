import { PropsWithChildren } from "react";

const Button = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => {
  return (
    <button
      className={`${className} cursor-pointer border-2 border-solid px-6 py-3 font-bold`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
