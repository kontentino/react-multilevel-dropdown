import React from 'react';
import PropTypes from 'prop-types';
import style from './Submenu.module.css';
import classes from 'react-style-classes';

const Submenu = ({children, position, className}) => (
  <div className={classes(
    style.submenu,
    position === 'right' && style.submenuRight,
    className,
  )}>
    <ul>
      {children}
    </ul>
  </div>
)

Submenu.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
}

Submenu.defaultProps = {
  children: null,
  position: 'left',
  className: null,
};

export default Submenu;
