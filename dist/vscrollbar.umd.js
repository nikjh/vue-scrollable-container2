(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vscrollbar"] = factory();
	else
		root["vscrollbar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3401":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9796":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VScrollbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3401");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VScrollbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VScrollbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VScrollbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VScrollbar.vue?vue&type=script&lang=js&
/* harmony default export */ var VScrollbarvue_type_script_lang_js_ = ({
  name: 'VScrollbar',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    //If important needs using custom styles of element
    customStyles: {
      type: Object,
      default: () => ({})
    },
    scrollOffsetHeight: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      scrollRatioX: 1,
      //Content ratio by X-axis
      scrollRatioY: 1,
      //Content ratio by Y-axis
      hiddenX: false,
      //Hidden scrollbar for X-axis
      hiddenY: false,
      //Hidden scrollbar for X-axis
      barXStyles: {},
      //Computed styles of scrollbar for X-axis
      barYStyles: {},
      //Computed styles of scrollbar for Y-axis
      wrapperStyles: {},
      //Computed styles of wrapper block (if uses max-height on container)
      contentStyles: {},
      //Computed styles of content block (needs because each browsers has self scrollbar params)
      lastPageX: null,
      //Last detected position by X-axis
      lastPageY: null,
      //Last detected position by Y-axis
      dragging: false,
      //Is dragged or not
      currentAxis: 'x',
      //Current dragged axis x/y
      timeoutResize: null,
      //for updating at once in 60ms
      timeoutScroll: null //for updating at once in 60ms

    };
  },

  computed: {
    container() {
      return this.$refs.container;
    },

    wrapper() {
      return this.$refs.wrapper;
    },

    barX() {
      return this.$refs.barX;
    },

    barY() {
      return this.$refs.barY;
    },

    content() {
      return this.$refs.content;
    }

  },

  mounted() {
    this.init();
  },

  destroyed() {
    window.removeEventListener('resize', this.optimizedResize);
  },

  methods: {
    init() {
      this.createStyles();
      this.$nextTick(() => {
        this.moveBar();
      });
      window.addEventListener('resize', this.optimizedResize);
    },

    createStyles(ev) {
      // * If container has max height paramethr we need must add height param for enable scrollbar
      if (this.wrapper.clientHeight > this.container.clientHeight || ev && ev.type == 'resize') {
        const computedContainer = window.getComputedStyle(this.container);
        this.wrapperStyles = {
          height: this.container.clientHeight - Number.parseInt(computedContainer['padding-bottom']) - Number.parseInt(computedContainer['padding-top']) + 'px'
        };
      }

      this.contentStyles = this.customStyles.content;
    },

    moveBar() {
      // Y axis (vertical)
      const ownHeight = this.scrollOffsetHeight ? Number(this.scrollOffsetHeight) : this.content.clientHeight;
      const totalHeight = this.content.scrollHeight; // X axis (horizontal)

      const ownWidth = this.content.clientWidth;
      const totalWidth = this.content.scrollWidth; //Update scroll ratio
      // In EDGE in some places has different in 1px (BAD FIX);

      this.scrollRatioY = totalHeight - ownHeight > 1 ? ownHeight / totalHeight : 1;
      this.scrollRatioX = totalWidth - ownWidth > 1 ? ownWidth / totalWidth : 1; //this.scrollRatioX = ownWidth / totalWidth;
      //this.scrollRatioY = ownHeight / totalHeight;
      //Check ratio num for show/hide bars

      this.hiddenX = this.scrollRatioX >= 1;
      this.hiddenY = this.scrollRatioY >= 1;

      if (!this.hiddenX) {
        this.barXStyles = {
          left: (ownWidth * (this.content.scrollLeft / totalWidth)).toFixed(0) + 'px',
          width: this.hiddenY ? (this.wrapper.clientWidth * this.scrollRatioX).toFixed(0) + 'px' : (this.wrapper.clientWidth * this.scrollRatioX).toFixed(0) - 10 + 'px'
        };
      }

      if (!this.hiddenY) {
        const wrapperHeight = this.scrollOffsetHeight ? this.container.clientHeight : this.wrapper.clientHeight;
        const height = this.hiddenX ? (wrapperHeight * this.scrollRatioY).toFixed(0) + 'px' : (wrapperHeight * this.scrollRatioY).toFixed(0) - 10 + 'px';
        this.barYStyles = {
          height: height,
          top: (ownHeight * (this.content.scrollTop / totalHeight)).toFixed(0) + 'px'
        };
      }
    },

    optimizedResize(ev) {
      if (this.timeoutResize) window.cancelAnimationFrame(this.timeoutResize);
      this.timeoutResize = window.requestAnimationFrame(() => {
        this.createStyles(ev);
        this.$nextTick(() => {
          this.moveBar();
        });
      });
    },

    optimizedScroll() {
      if (this.timeoutScroll) window.cancelAnimationFrame(this.timeoutScroll);
      this.timeoutScroll = window.requestAnimationFrame(() => {
        this.moveBar();
      });
    },

    mousedown(axis, ev) {
      if (axis == 'x') {
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

    drag(ev) {
      if (this.currentAxis == 'x') {
        const delta = ev.pageX - this.lastPageX;
        this.lastPageX = ev.pageX;
        this.content.scrollLeft += delta / this.scrollRatioX;
      } else {
        const delta = ev.pageY - this.lastPageY;
        this.lastPageY = ev.pageY;
        this.content.scrollTop += delta / this.scrollRatioY;
      }
    },

    stop() {
      this.dragging = false;
      document.body.classList.remove('vs-grabbed');
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stop);
    },

    // Calculating height of inner elements in content. (For resize container in dynamic places like vSelect)
    tempHeight(elements) {
      let size = 0;

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        size += element.clientHeight;
      }

      return size;
    }

  },

  render(h) {
    const barX = !this.hiddenX ? h('div', {
      ref: 'barX',
      class: ['vs-scroll', 'vs-scroll--x', {
        'vs-grabbed': this.currentAxis == 'x' && this.dragging
      }],
      style: this.barXStyles,
      on: {
        mousedown: ev => this.mousedown('x', ev)
      }
    }, []) : null;
    const barY = !this.hiddenY ? h('div', {
      ref: 'barY',
      class: ['vs-scroll', 'vs-scroll--y', {
        'vs-grabbed': this.currentAxis == 'y' && this.dragging
      }],
      style: this.barYStyles,
      on: {
        mousedown: ev => this.mousedown('y', ev)
      }
    }, []) : null;
    return h(this.tag, {
      ref: 'container',
      class: 'vs-container'
    }, [h('div', {
      ref: 'wrapper',
      class: 'vs-wrapper',
      style: this.wrapperStyles
    }, [h('div', {
      ref: 'content',
      class: 'vs-content',
      style: this.contentStyles,
      on: {
        scroll: this.optimizedScroll
      }
    }, [this.$slots.default])]), barX, barY]);
  }

});
// CONCATENATED MODULE: ./src/VScrollbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VScrollbarvue_type_script_lang_js_ = (VScrollbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VScrollbar.vue?vue&type=style&index=0&lang=scss&
var VScrollbarvue_type_style_index_0_lang_scss_ = __webpack_require__("9796");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VScrollbar.vue
var render, staticRenderFns





/* normalize component */

var component = normalizeComponent(
  src_VScrollbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VScrollbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VScrollbar);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vscrollbar.umd.js.map