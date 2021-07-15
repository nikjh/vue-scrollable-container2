
# Vue Scrollable container

It's component to create custom scrollable area in your app.
Uses native js methods for scrolling. Has zero dependencies.

[DEMO](https://rognikita.tk/static/demos/vscrollbar)

[CHANGELOG](CHANGELOG.md)

## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vscrollbar.umd.min.js"></script>
<link rel="stylesheet" href="vscrollbar.min.css" />
```


### npm

```
npm i vue-scrollable-container2
```


## Usage

### Browser

```html
<div id="app">
  <vscrolbar>
    Something
  </vscrolbar>
</div>

<script src="vue.js"></script>
<script src="vscrollbar.umd.min.js"></script>
<link rel="stylesheet" href="vscrollbar.min.css" />

<script>
new Vue({
  el: '#app',
  components: {
    vscrollbar,
  },
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
    VScrollbar,
  },
};
</script>
```


## Props

| Props | Type | Default | Description |
|---|---|---|---|
| `tag` | `String` | `"div"` | Basic tag of scrollable area |
| `content-style` | `Object` | `{}` | Custom CSS styles for vs-content |
| `bar-color` | `String` | `'rgba(26, 115, 232, .6)'` | CSS color for backgrounding bars |
| `offsetting-bar` | `Boolean` | `false` | Enable calculating offsets of container for rendering bars by those sizes |

## Result

```html
<div class="vs-container">
  <div class="vs-wrapper">
    <div class="vs-content">
      Something
    </div>
  </div>
  <div class="vs-scroll vs-scroll--x"></div>
  <div class="vs-scroll vs-scroll--y"></div>
</div>

```

## Notes
**tag**
`tag="section"` return `<section class="vs-conatiner">`
Other parts of structure will not changes.

## License

[MIT](LICENSE)


## Author

Nikita Rogachev

