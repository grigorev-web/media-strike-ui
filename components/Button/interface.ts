

export interface IButton {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "focus"
    | "alt"
    | "light"
    | "dark"
    | "link";
  style?:any;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg";
}
