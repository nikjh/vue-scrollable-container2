# Vue Scrollable container

It's component for create custom scrollable area in your app.
Uses native js methods for scrolling. No dependencies.

## Props
`tag` - By default tag is div. Notice: it's applying for .vs-container

`scroll-offset-height` - If your base container has locked height (or max-height) and padding, borders or other styles, whats may affect on wrapper - you may need use this prop. This prop tells component about difference between .vs-container and .vs-wrapper height.