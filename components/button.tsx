import Spinner from "@/components/spinner";
import { MouseEvent, ReactNode } from "react";

export type ButtonType = "primary" | "secondary";
export type ButtonSize = "small" | "medium";
export interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  isSubmit?: boolean;
  form?: string;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

export default function Button({
  children = "",
  type = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  isSubmit,
  form,
  onClick,
  className,
}: ButtonProps) {
  const typeClasses = getButtonTypeClasses(type);
  const sizeClasses = getButtonSizeClasses(size);
  const stateClasses =
    "disabled:bg-stone-200 disabled:border-stone-200 disabled:text-stone-400 disabled:shadow-none disabled:transform-none";
  const loadingClasses = loading && "pointer-events-none";
  const classes = `${typeClasses} ${sizeClasses} ${stateClasses} ${loadingClasses}`;
  const loaderMarkup = loading ? (
    <div
      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${classes}`}
    >
      <Spinner />
    </div>
  ) : null;

  return (
    <button
      className={`relative flex justify-center items-center flex-nowrap gap-1 rounded-8 font-semibold overflow-hidden whitespace-nowrap border ${classes} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
      form={form}
    >
      {children}
      {loaderMarkup}
    </button>
  );
}

function getButtonTypeClasses(type: ButtonType): string {
  switch (type) {
    case "secondary":
      return "border border-stone-300";
    case "primary":
    default:
      return "bg-violet-500 hover:bg-violet-600 text-white border-transparent";
  }
}

function getButtonSizeClasses(size: ButtonSize): string {
  switch (size) {
    case "small":
      return "px-4 py-2";
    case "medium":
    default:
      return "px-8 py-4";
  }
}
