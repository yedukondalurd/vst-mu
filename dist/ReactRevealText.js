(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRevealText"] = factory(require("react"));
	else
		root["ReactRevealText"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactRevealText = function (_React$Component) {
	  _inherits(ReactRevealText, _React$Component);

	  function ReactRevealText(props) {
	    _classCallCheck(this, ReactRevealText);

	    var _this = _possibleConstructorReturn(this, (ReactRevealText.__proto__ || Object.getPrototypeOf(ReactRevealText)).call(this, props));

	    _this.getDelays = _this.getDelays.bind(_this);
	    _this.renderToSpan = _this.renderToSpan.bind(_this);
	    return _this;
	  }

	  _createClass(ReactRevealText, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.show !== nextProps.show;
	    }
	  }, {
	    key: 'getDelays',
	    value: function getDelays(length) {
	      var _props = this.props,
	          threshold = _props.threshold,
	          delayMin = _props.delayMin,
	          delayMax = _props.delayMax;

	      // generate random numbers and then convert to delays

	      var randoms = function randoms() {
	        return (0, _utils.getRandoms)(length, threshold);
	      };
	      var toDelay = function toDelay(num) {
	        return (0, _utils.randomToDelay)(num, delayMin, delayMax);
	      };

	      return randoms().map(toDelay);
	    }
	  }, {
	    key: 'renderToSpan',
	    value: function renderToSpan(_ref, index) {
	      var character = _ref.character,
	          delay = _ref.delay;
	      var _props2 = this.props,
	          show = _props2.show,
	          transitionTime = _props2.transitionTime,
	          timingFunction = _props2.timingFunction;

	      var style = {
	        opacity: show ? '1' : '0',
	        transition: 'opacity ' + transitionTime + 'ms',
	        transitionDelay: delay + 'ms',
	        transitionTimingFunction: timingFunction
	      };
	      return _react2.default.createElement(
	        'span',
	        { key: index, style: style },
	        character
	      );
	    }
	  }, {
	    key: 'renderSpans',
	    value: function renderSpans(text) {
	      var textArray = text.split('');

	      var delays = this.getDelays(textArray.length);
	      var combineWithDelays = function combineWithDelays(character, index) {
	        return { character: character, delay: delays[index] };
	      };

	      return textArray.map(combineWithDelays).map(this.renderToSpan);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          style = _props3.style,
	          className = _props3.className;

	      var text = this.props.text || this.props.children;

	      return _react2.default.createElement(
	        'div',
	        { style: style, className: className },
	        this.renderSpans(text)
	      );
	    }
	  }]);

	  return ReactRevealText;
	}(_react2.default.Component);

	ReactRevealText.propTypes = {
	  text: _react2.default.PropTypes.string,
	  show: _react2.default.PropTypes.bool,
	  transitionTime: _react2.default.PropTypes.number,
	  timingFunction: _react2.default.PropTypes.string,
	  delayMin: _react2.default.PropTypes.number,
	  delayMax: _react2.default.PropTypes.number,
	  threshold: _react2.default.PropTypes.number,
	  style: _react2.default.PropTypes.object,
	  className: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.string
	};

	ReactRevealText.defaultProps = {
	  transitionTime: 1300,
	  timingFunction: 'linear',
	  delayMin: 200,
	  delayMax: 1200,
	  threshold: 0.2
	};

	exports.default = ReactRevealText;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getRandoms = exports.getRandoms = function getRandoms(length, threshold) {
	  var tooClose = function tooClose(a, b) {
	    return Math.abs(a - b) < threshold;
	  };

	  var result = [];
	  var random = void 0;

	  for (var i = 0; i < length; i += 1) {
	    random = Math.random();
	    if (i !== 0) {
	      var prev = result[i - 1];
	      while (tooClose(random, prev)) {
	        random = Math.random();
	      }
	    }
	    result.push(random);
	  }
	  return result;
	};

	var randomToDelay = exports.randomToDelay = function randomToDelay(random, min, max) {
	  var float = random * (max - min);
	  return parseInt(float, 10) + min;
	};

/***/ })
/******/ ])
});
;