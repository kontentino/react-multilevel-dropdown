import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Submenu.module.css';

const Submenu = ({
  children, position, className, ...props
}) => (
  <div
    className={classes(
      style.submenu,
      style[position],
      className,
    )}
    {...props}
  >
    <ul>
      {children}
    </ul>
  </div>
);

Submenu.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right', 'bottom', 'left-top', 'right-top']),
  className: PropTypes.string,
};

Submenu.defaultProps = {
  children: null,
  position: 'left',
  className: null,
};

export default Submenu;
