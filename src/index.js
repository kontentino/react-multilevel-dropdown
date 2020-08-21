import React, {
  useState, useRef, useEffect, useCallback
} from 'react';
import style from './Dropdown.module.css';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import Item from './Item';
import Submenu from './Submenu';

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = useCallback((e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  const handleButtonOnClick = () => {
    if (props.isDisabled) {
      return;
    }

    setOpen(!isOpen);
  };

  return (
    <div
      className={classes(style.dropdown, props.wrapperClassName)}
      ref={dropdownRef}
    >
      <button
        type='button'
        className={classes(
          style.button,
          isOpen && style.active,
          props.isDisabled && style.disabled,
          props.buttonClassName,
        )}
        disabled={props.isDisabled}
        tabIndex={0}
        onClick={handleButtonOnClick}
      >
        {props.title}
      </button>
      {isOpen && (
        <div className={classes(
          style.menu,
          props.position === 'right' && style.menuRight,
          props.menuClassName,
        )}>
          <ul>
            {props.children}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.any,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  wrapperClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  menuClassName: PropTypes.string,
};

Dropdown.defaultProps = {
  children: null,
  isDisabled: false,
  title: null,
  position: 'left',
  wrapperClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  menuClassName: PropTypes.string,
};

Dropdown.Item = Item;
Dropdown.Submenu = Submenu;

export default Dropdown;
