declare module "react-multilevel-dropdown" {
  import { ReactNode, FC } from 'react';

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
    dataName?: string;
    onClick?: (x?: any) => any | null;
    buttonHtmlAttributes?: Record<any, any> | null;
  }> & {
    Submenu: FC<{
      children?: any;
      position?: "left" | "right";
      className?: string | null;
    }>;
    Divider: FC<{
      size?: "sm" | "lg";
    }>;
    Item: FC<{
      children?: any;
      onClick?: () => void;
      isActive?: boolean;
      className?: string | null;
    }>;
  };

  export default Dropdown;
}
