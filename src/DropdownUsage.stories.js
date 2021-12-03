import React, { useRef } from 'react';
import UIDropdown from './index';

export default {
  title: 'Dropdown Usage examples',
};


export const OpenProgrammatically = () => {
  const ref = useRef(null);


  function onClick(e) {
    if (ref.current) {
      ref.current.toggle(e);
    }
  }

  return (
        <div style={{ marginLeft: 400 }}>
            <button onClick={onClick} style={{ marginRight: 100 }}>
                open dropdown
            </button>
            <UIDropdown title='Dropdown example' ref={ref}>
                <UIDropdown.Item>
                    Item 1
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 2
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 3
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 4 with sub
                    <UIDropdown.Submenu>
                        <UIDropdown.Item>
                            Sub item 1 with sub
                            <UIDropdown.Submenu>
                                <UIDropdown.Item>
                                    Sub Sub 1
                                </UIDropdown.Item>
                                <UIDropdown.Item>
                                    Sub Sub 2
                                </UIDropdown.Item>
                            </UIDropdown.Submenu>
                        </UIDropdown.Item>
                        <UIDropdown.Item>
                            Sub item 2
                        </UIDropdown.Item>
                        <UIDropdown.Item>
                            Sub item 3 with sub
                            <UIDropdown.Submenu>
                                <UIDropdown.Item>
                                    Sub Sub 1
                                </UIDropdown.Item>
                                <UIDropdown.Item>
                                    Sub Sub 2
                                </UIDropdown.Item>
                            </UIDropdown.Submenu>
                        </UIDropdown.Item>
                    </UIDropdown.Submenu>
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 5
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 6
                </UIDropdown.Item>
            </UIDropdown>
        </div>
  );
};


export const CloseOnItemClick = () => {
  const ref = useRef(null);


  function onClick(e) {
    if (ref.current) {
      ref.current.toggle(e);
    }
  }

  return (
        <div style={{ marginLeft: 400 }}>
            <UIDropdown title='Dropdown example' ref={ref}>
                <UIDropdown.Item onClick={onClick}>
                    Close on Click
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 2
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 3
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 4 with sub
                    <UIDropdown.Submenu>
                        <UIDropdown.Item>
                            Sub item 1 with sub
                            <UIDropdown.Submenu>
                                <UIDropdown.Item>
                                    Sub Sub 1
                                </UIDropdown.Item>
                                <UIDropdown.Item>
                                    Sub Sub 2
                                </UIDropdown.Item>
                            </UIDropdown.Submenu>
                        </UIDropdown.Item>
                        <UIDropdown.Item>
                            Sub item 2
                        </UIDropdown.Item>
                        <UIDropdown.Item>
                            Sub item 3 with sub
                            <UIDropdown.Submenu>
                                <UIDropdown.Item>
                                    Sub Sub 1
                                </UIDropdown.Item>
                                <UIDropdown.Item>
                                    Sub Sub 2
                                </UIDropdown.Item>
                            </UIDropdown.Submenu>
                        </UIDropdown.Item>
                    </UIDropdown.Submenu>
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 5
                </UIDropdown.Item>
                <UIDropdown.Item>
                    Item 6
                </UIDropdown.Item>
            </UIDropdown>
        </div>
  );
};

export const OpenOnHover = () => (
    <div style={{ marginLeft: 400 }}>
        <UIDropdown title='Dropdown example' openOnHover>
            <UIDropdown.Item>
                Close on Click
            </UIDropdown.Item>
            <UIDropdown.Item>
                Item 2
            </UIDropdown.Item>
            <UIDropdown.Item>
                Item 3
            </UIDropdown.Item>
            <UIDropdown.Item>
                Item 4 with sub
                <UIDropdown.Submenu>
                    <UIDropdown.Item>
                        Sub item 1 with sub
                        <UIDropdown.Submenu>
                            <UIDropdown.Item>
                                Sub Sub 1
                            </UIDropdown.Item>
                            <UIDropdown.Item>
                                Sub Sub 2
                            </UIDropdown.Item>
                        </UIDropdown.Submenu>
                    </UIDropdown.Item>
                    <UIDropdown.Item>
                        Sub item 2
                    </UIDropdown.Item>
                    <UIDropdown.Item>
                        Sub item 3 with sub
                        <UIDropdown.Submenu>
                            <UIDropdown.Item>
                                Sub Sub 1
                            </UIDropdown.Item>
                            <UIDropdown.Item>
                                Sub Sub 2
                            </UIDropdown.Item>
                        </UIDropdown.Submenu>
                    </UIDropdown.Item>
                </UIDropdown.Submenu>
            </UIDropdown.Item>
            <UIDropdown.Item>
                Item 5
            </UIDropdown.Item>
            <UIDropdown.Item>
                Item 6
            </UIDropdown.Item>
        </UIDropdown>
    </div>
);
