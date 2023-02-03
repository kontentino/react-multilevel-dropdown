declare module "react-multilevel-dropdown" {
  import type { ReactNode, FC, MouseEvent } from "react";

   const Dropdown: FC<{
    title?: ReactNode | ReactNode[];
    children?: ReactNode | ReactNode[];
    isDisabled?: boolean;
    position?: "left" | "right" | "top-right" | "top-left";
    buttonVariant?:
      | "primary"
      | "secondary"
      | "tertiary"
      | "special"
      | "special-success"
      | "dashed";
    isActive?: boolean;
    wrapperClassName?: string;
    menuClassName?: string;
    buttonClassName?: string;
    onClick?: (x?: any) => any | null;
    openOnHover?: boolean
    ref?: any
  }> & {
    Submenu: FC<{
      children?: ReactNode | ReactNode[];
      position?: "left" | "right" | "bottom" | "left-top" | "right-top";
      className?: string;
    }>;
    Divider: FC<{
      size?: "sm" | "lg";
    }>;
    Item: FC<{
      children?: ReactNode | ReactNode[];
      onClick?: (e: MouseEvent<HTMLLIElement>) => void;
      isActive?: boolean;
      className?: string;
      isDisabled?: boolean;
    }>;
  };

  export default Dropdown;
}
