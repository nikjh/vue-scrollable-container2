# Vue Scrollable container

It's component for create custom scrollable area in your app.
Uses native js methods for scrolling. No dependencies.

## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vscrollbar.umd.min.js"></script>
```


### npm

```
npm install --save vue-scrollable-container2
```


## Usage

### Browser

```html
<div id="app">
  <vscrolbar>
    Your content
  </vscrolbar>
</div>

<script src="vue.js"></script>
<script src="vscrollbar.umd.min.js"></script>
<script>
Vue.use(VScrollbar);
new Vue({
  el: '#app'
});
</script>
```


### SFC

```vue
<template>
  <vscrolbar>
    Something
  </vscrolbar>
</template>

<script>
import VScrollbar from 'vue-scrollable-container2';

export default {
  components: {
    VScrollbar
  }
}
</script>
```


## Props

| Props                  | Type              | Default         | Description                    |
|------------------------|-------------------|-----------------|--------------------------------|
| `tag`                  | `String`          | `"div"`         | Basical tag of scrollable area |
| `scroll-offset-height` | `String, Number`  | `null`          | Height offset for scroll area. Uses if you need add paddings to container or any style which may affect on wrapper size. |

## License

MIT


## Author

Nikita Rogachev
