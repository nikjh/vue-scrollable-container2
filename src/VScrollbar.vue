<script>
export default {
  name: 'VScrollbar',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    contentStyle: {
      type: Object,
      default: () => ({}),
    },
    barColor: {
      type: String,
      default: 'rgba(26, 115, 232, .6)',
    },
    offsettingBar: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      scrollRatioX: 1, //Content ratio by X-axis
      scrollRatioY: 1, //Content ratio by Y-axis
      hiddenX: false, //Hidden scrollbar for X-axis
      hiddenY: false, //Hidden scrollbar for X-axis

      barXStyles: {}, //Computed styles of scrollbar for X-axis
      barYStyles: {}, //Computed styles of scrollbar for Y-axis
      wrapperStyles: {}, //Computed styles of wrapper block (if uses max-height on container)
      contentStyles: {}, //Computed styles of content block (needs because each browsers has self scrollbar params)

      lastPageX: null, //Last detected position by X-axis
      lastPageY: null, //Last detected position by Y-axis

      dragging: false, //Is dragged or not

      currentAxis: 'x', //Current dragged axis x/y

      timeoutResize: null, //for updating at once in 60ms
      timeoutScroll: null, //for updating at once in 60ms
    };
  },
  computed: {
    container () {
      return this.$refs.container;
    },
    wrapper () {
      return this.$refs.wrapper;
    },
    barX () {
      return this.$refs.barX;
    },
    barY () {
      return this.$refs.barY;
    },
    content () {
      return this.$refs.content;
    },
  },
  mounted () {
    this.resize();
    window.addEventListener('resize', this.optimizedResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.optimizedResize);
  },
  methods: {
    createStyles (ev) {
      // * If container has max height parameter we need must add height param for enable scrollbar
      if(this.wrapper.clientHeight > this.container.clientHeight || (ev && ev.type === 'resize')) {
        const computedContainer = window.getComputedStyle(this.container);
        this.wrapperStyles = {
          height: (this.container.clientHeight - Number.parseInt(computedContainer['padding-bottom']) - Number.parseInt(computedContainer['padding-top']))+'px',
        };
      }

      this.contentStyles = this.contentStyle;
    },
    moveBar () {
      const { offsettingBar, content, container, wrapper } = this;

      // Y axis (vertical)
      const ownHeight = content.clientHeight;
      const totalHeight = content.scrollHeight;

      // X axis (horizontal)
      const ownWidth = content.clientWidth;
      const totalWidth = content.scrollWidth;

      //Update scroll ratio
      // In EDGE in some places has different in 1px (BAD FIX);
      this.scrollRatioY = ((totalHeight - ownHeight) > 1) ? (ownHeight / totalHeight) : 1;
      this.scrollRatioX = ((totalWidth - ownWidth) > 1) ? (ownWidth / totalWidth) : 1;

      //Check ratio num for show/hide bars
      this.hiddenX = this.scrollRatioX >= 1;
      this.hiddenY = this.scrollRatioY >= 1;

      if(!this.hiddenX) {
        const wrapperWidth = offsettingBar ? container.clientWidth : wrapper.clientWidth;
        this.barXStyles = {
          left: (wrapperWidth * (content.scrollLeft / totalWidth)).toFixed(0) + 'px',
          width: this.hiddenY
            ? (wrapperWidth * this.scrollRatioX).toFixed(0) + 'px'
            : (wrapperWidth * this.scrollRatioX).toFixed(0) - 10 + 'px',
        };
      }

      if(!this.hiddenY) {
        const wrapperHeight = offsettingBar ? container.clientHeight : wrapper.clientHeight;
        const height = this.hiddenX
          ? (wrapperHeight * this.scrollRatioY).toFixed(0) + 'px'
          : (wrapperHeight * this.scrollRatioY).toFixed(0) - 10 + 'px';

        this.barYStyles = {
          height,
          top: (wrapperHeight * (content.scrollTop / totalHeight)).toFixed(0) + 'px',
        };
      }
    },
    resize (ev) {
      this.createStyles(ev);
      this.$nextTick(this.moveBar);
    },
    optimizedResize (ev) {
      if (this.timeoutResize) {
        window.cancelAnimationFrame(this.timeoutResize);
      }

      this.timeoutResize = window.requestAnimationFrame(() => {
        this.resize(ev);
      });
    },
    optimizedScroll () {
      if (this.timeoutScroll) {
        window.cancelAnimationFrame(this.timeoutScroll);
      }
      this.timeoutScroll = window.requestAnimationFrame(this.moveBar);
    },

    mousedown (axis, ev) {
      if (axis === 'x') {
        this.lastPageX = ev.pageX;
      } else {
        this.lastPagey = ev.pageY;
      }
      this.dragging = true;
      this.currentAxis = axis;

      document.body.classList.add('vs-grabbed');
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stop);

      return false;
    },
    drag (ev) {
      if (this.currentAxis === 'x') {
        const delta = ev.pageX - this.lastPageX;
        this.lastPageX = ev.pageX;
        this.content.scrollLeft += delta / this.scrollRatioX;
      } else {
        const delta = ev.pageY - this.lastPageY;
        this.lastPageY = ev.pageY;
        this.content.scrollTop += delta / this.scrollRatioY;
      }
    },
    stop () {
      this.dragging = false;

      document.body.classList.remove('vs-grabbed');
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stop);
    },

    // Calculating height of inner elements in content. (For resize container in dynamic places like vSelect)
    tempHeight (elements) {
      let size = 0;
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        size += element.clientHeight;
      }
      return size;
    },
  },
  render (h) {

    const barX = !this.hiddenX ?
      h('div', {
        ref: 'barX',
        class: [ 'vs-scroll', 'vs-scroll--x', { 'vs-grabbed': this.currentAxis === 'x' && this.dragging } ],
        style: {
          ...this.barXStyles,
          background: this.barColor,
        },
        on: {
          mousedown: ev => this.mousedown('x', ev),
        },
      }, []) :
      null
    ;

    const barY = !this.hiddenY ?
      h('div', {
        ref: 'barY',
        class: [ 'vs-scroll', 'vs-scroll--y', { 'vs-grabbed': this.currentAxis === 'y' && this.dragging } ],
        style: {
          ...this.barYStyles,
          background: this.barColor,
        },
        on: {
          mousedown: ev => this.mousedown('y', ev),
        },
      }, []) :
      null
    ;

    return (
      h(this.tag, {
        ref: 'container',
        class: 'vs-container',
      },[
        h('div', {
          ref: 'wrapper',
          class: 'vs-wrapper',
          style: this.wrapperStyles,
        }, [
          h('div', {
            ref: 'content',
            class: 'vs-content',
            style: this.contentStyles,
            on: {
              scroll: this.optimizedScroll,
            },
          }, [this.$slots.default]),
        ]),
        barX,
        barY,
      ])
    );
  },
};
</script>

<style lang="scss">
.vs {
  &-container {
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  &-wrapper {
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &-content {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none; //hide scrollbar in IE 10+
    -webkit-overflow-scrolling: touch; // Smooth scroll iOS
    scrollbar-width: none; //hide scrollbar in FireFox

    &::-webkit-scrollbar { //hide scrollbar in safari, chrome and other webkit based browsers
      width: 0;
      height: 0;
    }
  }

  &-scroll {
    position: absolute;
    border-radius: 4px;
    z-index: 50;
    cursor: grab;
    opacity: 0;
    transition: opacity .25s linear;

    &--y {
      width: 9px;
      right: 0;
    }

    &--x {
      height: 9px;
      bottom: 0;
    }
  }

  &-container:hover > &-scroll,
  &-container:active > &-scroll {
    opacity: 1;
  }

  &-grabbed {
    user-select: none;
    cursor: grabbing;
  }
}
</style>
