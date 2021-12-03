import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Item.module.css';

const Item = ({
  children,
  onClick,
  isActive,
  className,
  ...props
}) => (
    <li
        className={classes(
          style.item,
          isActive && style.active,
          className,
        )}
        onClick={onClick}
        tabIndex={0}
        {...props}
    >
        {children}
    </li>
);

Item.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

Item.defaultProps = {
  children: null,
  onClick: () => null,
  isActive: false,
  className: null,
};

export default Item;
