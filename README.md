![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)
# react-multilevel-dropdown by Kontentino
ReactJS multilevel dropdown component

![React multilevel dropdown](https://github.com/kontentino/react-multilevel-dropdown/blob/master/src/img/example.png?raw=true)

## Install
`npm install react-multilevel-dropdown`

**NPM:** [npmjs.com/package/react-multilevel-dropdown](https://www.npmjs.com/package/react-multilevel-dropdown)

## Usage
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
      <Dropdown.Item>
        Subitem 2
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item>
    Item 3
  </Dropdown.Item>
</Dropdown>
```

## Docs

### Props
#### Dropdown
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|node|null|
|title|String|null|
|isDisabled|Boolean|false|
|position|String - 'left' or 'right'|'left'|

#### Item
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|node|null|
|onClick|Function|() => null|
|isActive|Boolean|false|

#### Submenu
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|children|node|null|
|position|String - 'left' or 'right'|'left'|
