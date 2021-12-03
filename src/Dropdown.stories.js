import React from 'react';
import UIDropdown from './index';

export default {
  title: 'Dropdown',
};

const Items = () => (
  <>
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
  </>
);


export const Default = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example'>
            <Items/>
        </UIDropdown>
    </div>
);

export const Primary = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='primary'>
            <Items/>
        </UIDropdown>
    </div>
);


export const Secondary = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='secondary'>
            <Items/>
        </UIDropdown>
    </div>
);


export const Tertiary = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='tertiary'>
            <Items/>
        </UIDropdown>
    </div>
);

export const Special = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='special'>
            <Items/>
        </UIDropdown>
    </div>
);

export const SpecialSuccess = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='special-success'>
            <Items/>
        </UIDropdown>
    </div>
);


export const Dashed = () => (
    <div style={{ marginLeft: 600 }}>
        <UIDropdown title='Dropdown example' buttonVariant='dashed'>
            <Items/>
        </UIDropdown>
    </div>
);
