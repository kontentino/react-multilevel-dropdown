![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)
# react-multilevel-dropdown by Kontentino
ReactJS multilevel dropdown component

[📒 STORYBOOK](http://kontentino.github.io/react-multilevel-dropdown)

[![npm](https://img.shields.io/npm/v/react-multilevel-dropdown?style=plastic)](https://www.npmjs.com/package/react-multilevel-dropdown)
[![NPM](https://img.shields.io/npm/l/react-multilevel-dropdown)](https://github.com/kontentino/react-multilevel-dropdown/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/dy/react-multilevel-dropdown?style=plastic)](https://www.npmjs.com/package/react-multilevel-dropdown)

![React multilevel dropdown](https://github.com/kontentino/react-multilevel-dropdown/blob/master/src/img/example.png?raw=true)

## Install
`npm install react-multilevel-dropdown`

**NPM:** [npmjs.com/package/react-multilevel-dropdown](https://www.npmjs.com/package/react-multilevel-dropdown)

## Development / testing
`npm run storybook`

## Usage / Example
```javascript
import Dropdown from 'react-multilevel-dropdown';
...

<Dropdown
  title='Dropdown title'
>
  <Dropdown.Item
    onClick={() => doSomething()}
  >
    Item 1
  </Dropdown.Item>
  <Dropdown.Item>
    Item 2
    <Dropdown.Submenu>
      <Dropdown.Item>
        Subitem 1
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
</Dropdown>
```

## Docs

### Props
#### Dropdown
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|ReactNode | ReactNode[]|null|
|title|ReactNode | ReactNode[]|null|
|isDisabled|boolean|false|
|position|"left" | "right" | "top-right" | "top-left"|left|
|buttonVariant|"primary"| "secondary"| "tertiary"| "special"| "special-success"| "dashed"|secondary|
|isActive|boolean|false|
 |openOnHover|boolean|false|
|wrapperClassName|string|null|
|buttonClassName|string|null|
|menuClassName|string|null|
|onClick|(x?: any) => any | null|() => null|

#### Item
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|ReactNode | ReactNode[]|null|
|onClick|(x?: any) => any | null|() => null|
|isActive|boolean|false|
|className|string|null|
|isDisabled|boolean|false| 

#### Submenu
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|ReactNode | ReactNode[]|null|
|position|"left" | "right" | "bottom" | "left-top" | "right-top"|left|
|className|string|null|
