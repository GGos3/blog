"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 2729:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 7838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentCount = void 0;

var _react = _interopRequireDefault(__webpack_require__(7836));

var _propTypes = _interopRequireDefault(__webpack_require__(5556));

var _utils = __webpack_require__(8777);

var _constants = __webpack_require__(9477);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var queueResetCount = (0, _utils.debounce)(function () {
  if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({
    reset: true
  });
}, 300, false); // eslint-disable-line no-magic-numbers

var CommentCount = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentCount, _React$Component);

  var _super = _createSuper(CommentCount);

  function CommentCount() {
    _classCallCheck(this, CommentCount);

    return _super.apply(this, arguments);
  }

  _createClass(CommentCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.shortname !== prevProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;
      if (doc.getElementById(_constants.COMMENT_COUNT_SCRIPT_ID)) queueResetCount();else (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), _constants.COMMENT_COUNT_SCRIPT_ID, doc.body);
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.COMMENT_COUNT_SCRIPT_ID, doc.body); // count.js only reassigns this window object if it's undefined.

      window.DISQUSWIDGETS = undefined;
      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          children = _this$props.children,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config", "children", "className"]);

      var additionalClass = className ? " ".concat(className) : '';
      return /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
        className: "".concat(_constants.COMMENT_COUNT_CLASS).concat(additionalClass),
        "data-disqus-identifier": config.identifier,
        "data-disqus-url": config.url
      }), children);
    }
  }]);

  return CommentCount;
}(_react["default"].Component);

exports.CommentCount = CommentCount;
CommentCount.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};

/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentEmbed = void 0;

var _react = _interopRequireDefault(__webpack_require__(7836));

var _propTypes = _interopRequireDefault(__webpack_require__(5556));

var _constants = __webpack_require__(9477);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CommentEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentEmbed, _React$Component);

  var _super = _createSuper(CommentEmbed);

  function CommentEmbed() {
    _classCallCheck(this, CommentEmbed);

    return _super.apply(this, arguments);
  }

  _createClass(CommentEmbed, [{
    key: "getSrc",
    value: function getSrc() {
      var radixBase = 36;
      var post = Number(this.props.commentId).toString(radixBase);
      var parentParam = this.props.showParentComment ? '1' : '0';
      var mediaParam = this.props.showMedia ? '1' : '0';
      return "https://embed.disqus.com/p/".concat(post, "?p=").concat(parentParam, "&m=").concat(mediaParam);
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          commentId = _this$props.commentId,
          showMedia = _this$props.showMedia,
          showParentComment = _this$props.showParentComment,
          rest = _objectWithoutProperties(_this$props, ["width", "height", "commentId", "showMedia", "showParentComment"]);

      return /*#__PURE__*/_react["default"].createElement("iframe", _extends({}, rest, {
        src: this.getSrc(),
        width: width,
        height: height,
        seamless: "seamless",
        scrolling: "no",
        frameBorder: "0"
      }));
    }
  }]);

  return CommentEmbed;
}(_react["default"].Component);

exports.CommentEmbed = CommentEmbed;
CommentEmbed.defaultProps = {
  showMedia: true,
  showParentComment: true,
  width: _constants.COMMENT_EMBED_WIDTH,
  height: _constants.COMMENT_EMBED_HEIGHT
};
CommentEmbed.propTypes = {
  commentId: _propTypes["default"].string.isRequired,
  showMedia: _propTypes["default"].bool,
  showParentComment: _propTypes["default"].bool,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  className: _propTypes["default"].string
};

/***/ }),

/***/ 2493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DiscussionEmbed = void 0;

var _react = _interopRequireDefault(__webpack_require__(7836));

var _propTypes = _interopRequireDefault(__webpack_require__(5556));

var _utils = __webpack_require__(8777);

var _constants = __webpack_require__(9477);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DiscussionEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(DiscussionEmbed, _React$Component);

  var _super = _createSuper(DiscussionEmbed);

  function DiscussionEmbed() {
    _classCallCheck(this, DiscussionEmbed);

    return _super.apply(this, arguments);
  }

  _createClass(DiscussionEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;

      if (window && window.DISQUS && doc.getElementById(_constants.EMBED_SCRIPT_ID)) {
        window.DISQUS.reset({
          reload: true,
          config: this.getDisqusConfig(this.props.config)
        });
      } else {
        window.disqus_config = this.getDisqusConfig(this.props.config);
        window.disqus_shortname = this.props.shortname;
        (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/embed.js"), _constants.EMBED_SCRIPT_ID, doc.body);
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.EMBED_SCRIPT_ID, doc.body);
      if (window && window.DISQUS) window.DISQUS.reset({});

      try {
        delete window.DISQUS;
      } catch (error) {
        window.DISQUS = undefined;
      }

      var disqusThread = doc.getElementById(_constants.THREAD_ID);

      if (disqusThread) {
        while (disqusThread.hasChildNodes()) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }

      (0, _utils.removeResources)();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        var _this = this;

        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.page.category_id = config.categoryID;
        this.page.remote_auth_s3 = config.remoteAuthS3;
        this.page.api_key = config.apiKey;
        if (config.sso) this.sso = config.sso;
        if (config.language) this.language = config.language;

        _constants.CALLBACKS.forEach(function (callbackName) {
          _this.callbacks[callbackName] = [config[callbackName]];
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.THREAD_ID
      }));
    }
  }]);

  return DiscussionEmbed;
}(_react["default"].Component);

exports.DiscussionEmbed = DiscussionEmbed;
DiscussionEmbed.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string,
    categoryID: _propTypes["default"].string,
    remoteAuthS3: _propTypes["default"].string,
    apiKey: _propTypes["default"].string,
    preData: _propTypes["default"].func,
    preInit: _propTypes["default"].func,
    onInit: _propTypes["default"].func,
    onReady: _propTypes["default"].func,
    afterRender: _propTypes["default"].func,
    preReset: _propTypes["default"].func,
    onIdentify: _propTypes["default"].func,
    beforeComment: _propTypes["default"].func,
    onNewComment: _propTypes["default"].func,
    onPaginate: _propTypes["default"].func,
    sso: _propTypes["default"].shape({
      name: _propTypes["default"].string,
      button: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      url: _propTypes["default"].string,
      logout: _propTypes["default"].string,
      profile_url: _propTypes["default"].string,
      width: _propTypes["default"].string,
      height: _propTypes["default"].string
    })
  }).isRequired
};

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Recommendations = void 0;

var _react = _interopRequireDefault(__webpack_require__(7836));

var _propTypes = _interopRequireDefault(__webpack_require__(5556));

var _utils = __webpack_require__(8777);

var _constants = __webpack_require__(9477);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Recommendations = /*#__PURE__*/function (_React$Component) {
  _inherits(Recommendations, _React$Component);

  var _super = _createSuper(Recommendations);

  function Recommendations() {
    _classCallCheck(this, Recommendations);

    return _super.apply(this, arguments);
  }

  _createClass(Recommendations, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.language = config.language;
      };
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      if (typeof window !== 'undefined' && window.document) {
        window.disqus_config = this.getDisqusConfig(this.props.config);

        if (window.document.getElementById(_constants.RECOMMENDATIONS_SCRIPT_ID)) {
          this.reloadInstance();
        } else {
          (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/recommendations.js"), _constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
        }
      }
    }
  }, {
    key: "reloadInstance",
    value: function reloadInstance() {
      if (window && window.DISQUS_RECOMMENDATIONS) {
        window.DISQUS_RECOMMENDATIONS.reset({
          reload: true
        });
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      (0, _utils.removeScript)(_constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);

      try {
        delete window.DISQUS_RECOMMENDATIONS;
      } catch (error) {
        window.DISQUS_RECOMMENDATIONS = undefined;
      }

      var recommendations = window.document.getElementById(_constants.RECOMMENDATIONS_ID);

      if (recommendations) {
        while (recommendations.hasChildNodes()) {
          recommendations.removeChild(recommendations.firstChild);
        }
      }

      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.RECOMMENDATIONS_ID
      }));
    }
  }]);

  return Recommendations;
}(_react["default"].Component);

exports.Recommendations = Recommendations;
Recommendations.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string
  })
};

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CALLBACKS = exports.RECOMMENDATIONS_SCRIPT_ID = exports.RECOMMENDATIONS_ID = exports.COMMENT_EMBED_HEIGHT = exports.COMMENT_EMBED_WIDTH = exports.COMMENT_COUNT_SCRIPT_ID = exports.COMMENT_COUNT_CLASS = exports.EMBED_SCRIPT_ID = exports.THREAD_ID = void 0;
var THREAD_ID = 'disqus_thread';
exports.THREAD_ID = THREAD_ID;
var EMBED_SCRIPT_ID = 'dsq-embed-scr';
exports.EMBED_SCRIPT_ID = EMBED_SCRIPT_ID;
var COMMENT_COUNT_CLASS = 'disqus-comment-count';
exports.COMMENT_COUNT_CLASS = COMMENT_COUNT_CLASS;
var COMMENT_COUNT_SCRIPT_ID = 'dsq-count-scr';
exports.COMMENT_COUNT_SCRIPT_ID = COMMENT_COUNT_SCRIPT_ID;
var COMMENT_EMBED_WIDTH = 420;
exports.COMMENT_EMBED_WIDTH = COMMENT_EMBED_WIDTH;
var COMMENT_EMBED_HEIGHT = 320;
exports.COMMENT_EMBED_HEIGHT = COMMENT_EMBED_HEIGHT;
var RECOMMENDATIONS_ID = 'disqus_recommendations';
exports.RECOMMENDATIONS_ID = RECOMMENDATIONS_ID;
var RECOMMENDATIONS_SCRIPT_ID = 'dsq-recs-scr';
exports.RECOMMENDATIONS_SCRIPT_ID = RECOMMENDATIONS_SCRIPT_ID;
var CALLBACKS = ['preData', 'preInit', 'onInit', 'onReady', 'afterRender', 'preReset', 'onIdentify', 'beforeComment', 'onNewComment', 'onPaginate'];
exports.CALLBACKS = CALLBACKS;

/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentCount.CommentCount;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentEmbed.CommentEmbed;
  }
});
Object.defineProperty(exports, "Mq", ({
  enumerable: true,
  get: function get() {
    return _DiscussionEmbed.DiscussionEmbed;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _Recommendations.Recommendations;
  }
});
__webpack_unused_export__ = void 0;

var _CommentCount = __webpack_require__(7838);

var _CommentEmbed = __webpack_require__(2648);

var _DiscussionEmbed = __webpack_require__(2493);

var _Recommendations = __webpack_require__(5244);

var Disqus = {
  CommentCount: _CommentCount.CommentCount,
  CommentEmbed: _CommentEmbed.CommentEmbed,
  DiscussionEmbed: _DiscussionEmbed.DiscussionEmbed,
  Recommendations: _Recommendations.Recommendations
};
var _default = Disqus;
__webpack_unused_export__ = _default;

/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.removeResources = removeResources;
exports.debounce = debounce;
exports.isReactElement = isReactElement;
exports.shallowComparison = shallowComparison;

var _react = _interopRequireDefault(__webpack_require__(7836));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function insertScript(src, id, parentElement) {
  var script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = id;
  parentElement.appendChild(script);
  return script;
}

function removeScript(id, parentElement) {
  var script = window.document.getElementById(id);
  if (script) parentElement.removeChild(script);
}

function removeResources() {
  // Remove the bundles that the Disqus scripts add to prevent duplicated resources when navigating between pages
  var disqusResources = window.document.querySelectorAll( // eslint-disable-next-line max-len
  'link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]');
  disqusResources.forEach(function (el) {
    return el.remove();
  });
}

function debounce(func, wait, runOnFirstCall) {
  var timeout;
  return function () {
    var context = this; // eslint-disable-line consistent-this

    var args = arguments;

    var deferredExecution = function deferredExecution() {
      timeout = null;
      if (!runOnFirstCall) func.apply(context, args);
    };

    var callNow = runOnFirstCall && !timeout;
    window.clearTimeout(timeout);
    timeout = setTimeout(deferredExecution, wait);
    if (callNow) func.apply(context, args);
  };
}

function isReactElement(element) {
  if (_react["default"].isValidElement(element)) {
    return true;
  } else if (Array.isArray(element)) {
    return element.some(function (value) {
      return _react["default"].isValidElement(value);
    });
  }

  return false;
}

function shallowComparison(currentProps, nextProps) {
  // Perform a comparison of all props, excluding React Elements, to prevent unnecessary updates
  var propNames = new Set(Object.keys(currentProps), Object.keys(nextProps)); // eslint-disable-line no-undef

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;

      if (_typeof(currentProps[name]) === 'object') {
        if (shallowComparison(currentProps[name], nextProps[name])) return true;
      } else if (currentProps[name] !== nextProps[name] && !isReactElement(currentProps[name])) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iS: () => (/* binding */ Z)
/* harmony export */ });
/* unused harmony exports GatsbyImage, MainImage, Placeholder, generateImageData, getImage, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2729);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=800,c=800,h=(/* unused pure expression or super */ null && (4/3)),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},f=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function w(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,g=void 0===d?["auto","webp"]:d;return g=g.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:g,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||h))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/h):c),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:g}));}function y(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=w(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function b(e){var t,a=(e=w(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,p=e.height,y=e.filename,b=e.reporter,S=void 0===b?{warn:g}:b,N=e.backgroundColor,x=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=v(y)):i={width:h,height:p,format:(null==(t=i)?void 0:t.format)||v(y)||"auto"};var I=new Set(e.formats);(0===I.size||I.has("auto")||I.has(""))&&(I.delete("auto"),I.delete(""),I.add(i.format)),I.has("jpg")&&I.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),I.delete("jpg"===i.format?"png":"jpg"));var W=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:g}:o,d=e.breakpoints,h=void 0===d?l:d,p=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(p.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+p.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:g}:u,h=a.width/a.height,p=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):c;var f=i;if(a.width<i||a.height<r){var v=a.width<i?"width":"height";d.warn("\nThe requested "+v+' "'+("width"===v?i:r)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:p.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}(e):"constrained"===i?E(e):"fullWidth"===i?E(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),j={sources:[]},R=e.sizes;R||(R=m(W.presentationWidth,o)),I.forEach(function(e){var t=W.sizes.map(function(t){var i=r(y,t,Math.round(t/W.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===W.unscaledWidth;})||t[0];i&&(j.fallback={src:i.src,srcSet:f(t),sizes:R});}else{var n;null==(n=j.sources)||n.push({srcSet:f(t),sizes:R,type:"image/"+e});}});var _={images:j,layout:o,backgroundColor:N};switch(x&&(_.placeholder={fallback:x}),o){case"fixed":_.width=W.presentationWidth,_.height=W.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/W.aspectRatio;break;case"constrained":_.width=e.width||W.presentationWidth||1,_.height=(_.width||1)/W.aspectRatio;}return _;}var k=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,c=e.layout,h=a.width/a.height,g=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(d,a.width))/h),i||(i=r*h);var f=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==c||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}function M(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var S=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),N=(/* unused pure expression or super */ null && (["images","placeholder"]));function x(){return true&&true;}var I=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},W=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},j=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function R(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,S);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),b(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function _(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,N),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var A,O=["src","srcSet","loading","alt","shouldLoad"],T=["fallback","sources","shouldLoad"],z=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,O);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},L=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,T),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};z.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},L.displayName="Picture",L.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var q=["fallback"],C=function(t){var a=t.fallback,i=o(t,q);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(A=L.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var D=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},t,{shouldLoad:!0}))));};D.displayName="MainImage",D.propTypes=L.propTypes;var P=["children"],H=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},F=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},B=function(a){var i=a.children,r=o(a,P);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H,null));},G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,G);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,M=u.backgroundColor,S=function(e,t,a){var i={},r="gatsby-image-wrapper";return x()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(x()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),N=S.style,I=S.className,W=o(S,V),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?U(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},N,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return x()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,M,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),x()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],Z=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,Y);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(X),J=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},K=new Set(["fixed","fullWidth","constrained"]),Q={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:J,height:J,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!K.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};Z.displayName="StaticImage",Z.propTypes=Q;

/***/ })

};
;
//# sourceMappingURL=713.js.map