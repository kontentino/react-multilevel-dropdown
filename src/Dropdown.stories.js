import React from 'react';
import UIDropdownComponent from './index';

export default {
  title: 'Dropdown',
  // component: UIDropdownComponent,
};

export const Dropdown = () => (
  <div style={{marginLeft: 600}}>
    <UIDropdownComponent
      title='Dropdown example'
    >
      <UIDropdownComponent.Item>
        Item 1
      </UIDropdownComponent.Item>
      <UIDropdownComponent.Item>
        Item 2
      </UIDropdownComponent.Item>
      <UIDropdownComponent.Item>
        Item 3
      </UIDropdownComponent.Item>
      <UIDropdownComponent.Item>
        Item 4 with sub
        <UIDropdownComponent.Submenu>
          <UIDropdownComponent.Item>
            Sub item 1 with sub
            <UIDropdownComponent.Submenu>
              <UIDropdownComponent.Item>
                Sub Sub 1
              </UIDropdownComponent.Item>
              <UIDropdownComponent.Item>
                Sub Sub 2
              </UIDropdownComponent.Item>
            </UIDropdownComponent.Submenu>
          </UIDropdownComponent.Item>
          <UIDropdownComponent.Item>
            Sub item 2
          </UIDropdownComponent.Item>
          <UIDropdownComponent.Item>
            Sub item 3 with sub
            <UIDropdownComponent.Submenu>
              <UIDropdownComponent.Item>
                Sub Sub 1
              </UIDropdownComponent.Item>
              <UIDropdownComponent.Item>
                Sub Sub 2
              </UIDropdownComponent.Item>
            </UIDropdownComponent.Submenu>
          </UIDropdownComponent.Item>
        </UIDropdownComponent.Submenu>
      </UIDropdownComponent.Item>
      <UIDropdownComponent.Item>
        Item 5
      </UIDropdownComponent.Item>
      <UIDropdownComponent.Item>
        Item 6
      </UIDropdownComponent.Item>
    </UIDropdownComponent>
  </div>
);
