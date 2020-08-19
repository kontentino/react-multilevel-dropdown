import React from 'react';
import PropTypes from 'prop-types';
import style from './Submenu.module.css';
import classes from 'react-style-classes';

const Submenu = ({children, position}) => (
  <div className={classes(
    style.submenu,
    position === 'right' && style.submenuRight,
  )}>
    <ul>
      {children}
    </ul>
  </div>
)

Submenu.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
}

Submenu.defaultProps = {
  children: null,
  position: 'left',
};

export default Submenu;
