import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Item.module.css';

const Item = ({
  children, onClick, isActive, className, isDisabled, ...props
}) => (
  <li
    className={classes(
      style.item,
      isActive && style.active,
      className,
      isDisabled && style.disabled,
    )}
    onClick={isDisabled ? () => null : onClick}
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
  isDisabled: PropTypes.bool,
};

Item.defaultProps = {
  children: null,
  onClick: () => null,
  isActive: false,
  className: null,
  isDisabled: false,
};

export default Item;
