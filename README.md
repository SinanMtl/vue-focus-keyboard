# Vue Focus Keyboard

[![npm version](https://badge.fury.io/js/vue-focus-keyboard.svg)](https://www.npmjs.com/package/vue-focus-keyboard)
[![npm](https://img.shields.io/npm/dt/vue-focus-keyboard.svg)](https://www.npmjs.com/package/vue-focus-keyboard)

> A keyboard component for Vue. Start to write immediately. No input element definition. Plug and play!- [Demo](https://sinanmtl.github.io/vue-focus-keyboard/)

## Installation and usage

Install rate component for your project

```bash
npm install vue-focus-keyboard --save
```

Then, add Vue Focus Keyboard into your app

```javascript
import FocusKeyboard from 'vue-focus-keyboard';

Vue.use(FocusKeyboard)
```

Use HTML template

```html
<FocusKeyboard></FocusKeyboard>
```

## Props
### `theme`

There are 2 theme in Vue Focus Keyboard. They are `dark` and `light` (default: `dark`). You can use one of them with `theme` prop.

```html
<FocusKeyboard :theme="light"></FocusKeyboard>
```

### `keyboardWidth`

Also, you can set keyboard's width.

```html
<FocusKeyboard :keyboardWidth="50%"></FocusKeyboard>
```

### `keyboard`

You don't like current keyboards? Well, set your custom keyboard layout. You can view default layouts in `src/layout.js` file

```javascript
export default {
  data () {
    return {
      customLayout: {
        default: [
          // Normal layout
        ],
        shifted: [
          // Layout when press shift button
        ],
        capsed: [
          // Layout when press capslock button
        ],
        alted: [
          // Layout when press alt button
        ],
        shifted_capsed: [
          // Layout when press shift + capslock button
        ],
        shifted_alted: [
          // Layout when press shift + alt button
        ]
      },
    }
  }
}
```

Then, set your keyboard.
```html
<FocusKeyboard :keyboard="customLayout"></FocusKeyboard>
```

## License

MIT.
