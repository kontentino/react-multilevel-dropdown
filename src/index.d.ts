declare module 'react-multilevel-dropdown' {
  import { FC } from 'react';

  export const Dropdown: FC<{
    title?: any;
    children?: any;
    isDisabled?: boolean;
    position?: 'left' | 'right';
    wrapperClassName?: string | null;
    buttonClassName?: string | null;
    menuClassName?: string | null;
  }> & {
    Submenu: FC<{
      children?: any;
      position?: 'left' | 'right';
      className?: string | null;
    }>;
    Divider: FC<{
      size?: 'sm' | 'lg',
    }>;
    Item: FC<{
      children?: any;
      onClick?: () => void;
      isActive?: boolean;
      className?: string | null;
    }>;
  };
}
