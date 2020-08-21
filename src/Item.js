import React from 'react';
import PropTypes from 'prop-types';
import style from './Item.module.css';
import classes from 'react-style-classes';

const Item = (props) => (
  <li
    className={classes(
      style.item,
      props.isActive && style.active,
      props.className,
    )}
    onClick={props.onClick}
    tabIndex={0}
  >
    {props.children}
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
