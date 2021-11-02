<div align="center">

# React UI ScrollSpy

[![npm](https://img.shields.io/npm/v/react-ui-scrollspy.svg)](https://npmjs.com/package/react-ui-scrollspy) [![npm](https://img.shields.io/npm/dm/react-ui-scrollspy.svg)](https://npmjs.com/package/react-ui-scrollspy)
[![License MIT](https://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/pettiboy/react-ui-scrollspy/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/pettiboy/react-ui-scrollspy/pulls)

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

</div>

## ✨ Installation

```bash
npm install --save react-ui-scrollspy
```

OR

```bash
yarn add react-ui-scrollspy
```

## ⚙️ Getting started

1. In your navigation component

```tsx
<div>
  <p data-to-scrollspy-id="first">Section 1</p>
  <p data-to-scrollspy-id="second">Section 2</p>
</div>
```

2. Wrap the elements you want to spy on in the `<ScrollSpy>` component.

<!-- prettier-ignore -->
```tsx
import ScrollSpy from "react-ui-scrollspy";

<ScrollSpy>
  <div id="first">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
    Tempore, vero!
  </div>
  <div id="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
    Tempore, vero!
  </div>
</ScrollSpy>
```

3. Write styles for when the navigation element which is active in your `index.css`

```css
.active-scroll-spy {
  background-color: yellowgreen;
  border-radius: 15px;
}
```

## 💡 Props

| Attributes                 | Type                                       | Description                                                                                                            | Default | Required |
| :------------------------- | :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| `children`                 | `ReactNode`                                | Each direct child `Element` should contain an `id`                                                                     | -       | yes      |
| `scrollThrottle`           | `number`                                   | in `milliseconds` to throttle the `onscroll` event. Lower the number, better the response, higher the performance cost | 300     | no       |
| `navContainerRef`          | `MutableRefObject<HTMLDivElement \| null>` | `ref` to your navigation container containing items with `data-to-scrollspy-id` attributes                             | -       | no       |
| `onUpdateCallback`         | `(id: string) => void`                     | Executes this function whenever you scroll to an `Element`, callback returns the `id` of that `Element` as well        | -       | no       |
| `parentScrollContainerRef` | `MutableRefObject<HTMLDivElement \| null>` | If you want to spy only on a particular scrollable `container (Element)` then pass a ref of the same to this prop      | -       | no       |
| `offsetTop`                | `number`                                   | spy will be fired when it has been scrolled `offsetTop` beyond `50%` to the top of the containing element              | 0       | no       |
| `offsetBottom`             | `number`                                   | spy will be fired when it has been scrolled `offsetBottom` beyond `50%` to the bottom of the containing element        | 0       | no       |

## 📝 Authors

- Hussain Pettiwala ([@pettiboy](https://github.com/pettiboy))
