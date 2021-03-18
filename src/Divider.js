import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Divider.module.css';

const Divider = ({
  size,
  ...props
}) => (
  <li
    role='separator'
    className={classes(style.divider, style[props.size])}
    {...props}
  />
);

Divider.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
};

Divider.defaultProps = {
  size: 'sm',
};

export default Divider;
