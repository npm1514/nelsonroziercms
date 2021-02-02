"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _blog = require("../styled-components/pages/blog");

var _blogcontent = require("../styled-components/components/blogcontent");

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BlogContentComponent = /*#__PURE__*/function (_Component) {
  _inherits(BlogContentComponent, _Component);

  var _super = _createSuper(BlogContentComponent);

  function BlogContentComponent() {
    _classCallCheck(this, BlogContentComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BlogContentComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blog = _this$props.blog,
          _this$props$blog = _this$props.blog,
          title = _this$props$blog.title,
          categories = _this$props$blog.categories,
          author = _this$props$blog.author,
          share = _this$props$blog.share,
          _this$props$blog$shar = _this$props$blog.share,
          facebook = _this$props$blog$shar.facebook,
          linkedin = _this$props$blog$shar.linkedin,
          twitter = _this$props$blog$shar.twitter,
          blurb = _this$props$blog.blurb,
          content = _this$props$blog.content,
          date = _this$props$blog.date,
          updateState = _this$props.updateState,
          updateAuthor = _this$props.updateAuthor,
          updateCategories = _this$props.updateCategories,
          submitForm = _this$props.submitForm,
          addContent = _this$props.addContent,
          updateContent = _this$props.updateContent,
          deleteContent = _this$props.deleteContent,
          updateType = _this$props.updateType;
      return /*#__PURE__*/_react["default"].createElement(_blogcontent.BlogContent, null, content.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          className: a.type == "h2" ? "selectedCategory" : "",
          onClick: function onClick() {
            updateType(i, "h2");
          }
        }, "Header 2"), /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          className: a.type == "p" ? "selectedCategory" : "",
          onClick: function onClick() {
            updateType(i, "p");
          }
        }, "Paragraph"), /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          className: a.type == "ul" ? "selectedCategory" : "",
          onClick: function onClick() {
            updateType(i, "ul");
          }
        }, "List"), /*#__PURE__*/_react["default"].createElement(_global.Input, {
          type: "text",
          value: a.content,
          onChange: function onChange(e) {
            updateContent(i, e.currentTarget.value);
          }
        }), /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
          onClick: function onClick() {
            deleteContent(i);
          }
        }, "Delete"));
      }), /*#__PURE__*/_react["default"].createElement(_blog.CategoryButton, {
        onClick: addContent
      }, "Add Content"));
    }
  }]);

  return BlogContentComponent;
}(_react.Component);

var _default = BlogContentComponent;
exports["default"] = _default;