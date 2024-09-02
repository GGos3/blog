"use strict";
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 5895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
/* harmony import */ var _hooks_useSeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4125);
const Seo=({description,lang,meta=[],title,noSiteName=false})=>{var _site$siteMetadata,_site$siteMetadata2,_site$siteMetadata3,_site$siteMetadata3$s;const{site}=(0,_hooks_useSeo__WEBPACK_IMPORTED_MODULE_2__/* .useSeo */ .h)();if(site===undefined){return null;}const metaDescription=description||((_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.description);const defaultTitle=(_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:noSiteName?undefined:`%s | ${defaultTitle}`,meta:[{name:'description',content:metaDescription},{property:'og:title',content:title},{property:'og:description',content:metaDescription},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'twitter:creator',content:((_site$siteMetadata3=site.siteMetadata)===null||_site$siteMetadata3===void 0?void 0:(_site$siteMetadata3$s=_site$siteMetadata3.social)===null||_site$siteMetadata3$s===void 0?void 0:_site$siteMetadata3$s.twitter)||''},{name:'twitter:title',content:title},{name:'twitter:description',content:metaDescription}].concat(meta)});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 5588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useAuthorProfile)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
const useAuthorProfile=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("2260143708");

/***/ }),

/***/ 8905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ useDarkMode)
});

// EXTERNAL MODULE: external "/home/runner/work/blog/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(7836);
// EXTERNAL MODULE: ./src/utils/window.ts
var utils_window = __webpack_require__(4050);
;// CONCATENATED MODULE: ./src/hooks/useLocalStorage.ts
const useLocalStorage=(key,initialValue)=>{const{0:storedValue,1:setStoredValue}=(0,index_js_.useState)(()=>{try{var _win$localStorage$get;const item=(_win$localStorage$get=utils_window/* win */.z===null||utils_window/* win */.z===void 0?void 0:utils_window/* win */.z.localStorage.getItem(key))!==null&&_win$localStorage$get!==void 0?_win$localStorage$get:null;return item?JSON.parse(item):initialValue;}catch(error){console.error(error);return initialValue;}});const setValue=value=>{try{const valueToStore=value instanceof Function?value(storedValue):value;setStoredValue(valueToStore);utils_window/* win */.z===null||utils_window/* win */.z===void 0?void 0:utils_window/* win */.z.localStorage.setItem(key,JSON.stringify(valueToStore));}catch(error){console.error(error);}};return[storedValue,setValue];};
;// CONCATENATED MODULE: ./src/hooks/useMedia.ts
const useMedia=(queries,values,defaultValue)=>{const mediaQueryLists=typeof window==='undefined'?[]:queries.map(q=>window.matchMedia(q));const getValue=()=>{const index=mediaQueryLists.findIndex(mql=>mql.matches);return(values===null||values===void 0?void 0:values[index])||defaultValue;};const{0:value,1:setValue}=(0,index_js_.useState)(getValue);(0,index_js_.useEffect)(()=>{const handler=()=>setValue(getValue);mediaQueryLists.forEach(mql=>mql.addEventListener('change',handler));return()=>mediaQueryLists.forEach(mql=>mql.removeEventListener('change',handler));},[]);return value;};
// EXTERNAL MODULE: ./src/stitches.config.ts + 1 modules
var stitches_config = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/hooks/useDarkMode.ts
const usePrefersDarkMode=()=>{return useMedia(['(prefers-color-scheme: dark)'],[true],false);};const useDarkMode=()=>{const[enabledState,setEnabledState]=useLocalStorage('darkMode',null);const prefersDarkMode=usePrefersDarkMode();const enabled=enabledState!==null&&enabledState!==void 0?enabledState:prefersDarkMode;(0,index_js_.useEffect)(()=>{const className=stitches_config/* darkTheme */.a5;if(!utils_window/* win */.z){return;}const element=utils_window/* win */.z.document.body;if(enabled){element.classList.add(className);}else{element.classList.remove(className);}},[enabled]);return[enabled,setEnabledState];};

/***/ }),

/***/ 4125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useSeo)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
const useSeo=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("984448874");

/***/ }),

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/home/runner/work/blog/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(7836);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/hooks/useAuthorProfile.ts
var useAuthorProfile = __webpack_require__(5588);
// EXTERNAL MODULE: ./src/stitches.config.ts + 1 modules
var stitches_config = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/components/Footer/styles.ts
const Container=(0,stitches_config/* styled */.I4)('footer',{marginTop:'auto',paddingTop:'2rem',paddingBottom:'1.5rem',color:'$text100',fontSize:'0.875rem',textAlign:'center'});
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx
const Footer=()=>{var _useAuthorProfile$sit,_useAuthorProfile$sit2,_useAuthorProfile$sit3,_useAuthorProfile$sit4,_useAuthorProfile$sit5;const githubUsername=(_useAuthorProfile$sit=(0,useAuthorProfile/* useAuthorProfile */.g)().site)===null||_useAuthorProfile$sit===void 0?void 0:(_useAuthorProfile$sit2=_useAuthorProfile$sit.siteMetadata)===null||_useAuthorProfile$sit2===void 0?void 0:(_useAuthorProfile$sit3=_useAuthorProfile$sit2.social)===null||_useAuthorProfile$sit3===void 0?void 0:_useAuthorProfile$sit3.github;const author=(_useAuthorProfile$sit4=(0,useAuthorProfile/* useAuthorProfile */.g)().site)===null||_useAuthorProfile$sit4===void 0?void 0:(_useAuthorProfile$sit5=_useAuthorProfile$sit4.siteMetadata)===null||_useAuthorProfile$sit5===void 0?void 0:_useAuthorProfile$sit5.author;return/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,"\xA9 ",githubUsername?/*#__PURE__*/index_js_default().createElement("a",{href:`https://github.com/${githubUsername}`},author):{author},", Built with",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/blurfx/gatsby-starter-lavender"},"gatsby-starter-lavender")));};/* harmony default export */ const components_Footer = (/*#__PURE__*/(0,index_js_.memo)(Footer));
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/hooks/useDarkMode.ts + 2 modules
var useDarkMode = __webpack_require__(8905);
;// CONCATENATED MODULE: ./src/components/ThemeSwitch/styles.ts
const styles_Container=(0,stitches_config/* styled */.I4)('div',{position:'relative',display:'inline-block',alignSelf:'flex-end',cursor:'pointer',userSelect:'none',touchAction:'pan-x','-webkit-tap-highlight-color':'transparent','@md':{alignSelf:'auto'}});const Checkbox=(0,stitches_config/* styled */.I4)('input',{position:'absolute',height:'1px',marginLeft:'-1px',padding:0,border:0,overflow:'hidden',clip:'rect(0 0 0 0)'});const Track=(0,stitches_config/* styled */.I4)('div',{width:'3.5rem',height:'2rem',borderRadius:'2rem',backgroundColor:'$themeSwitchBackground'});const ThumbWrapper=(0,stitches_config/* styled */.I4)('div',{position:'absolute',top:0,width:'3.5rem',height:'2rem',overflow:'hidden'});const Thumb=(0,stitches_config/* styled */.I4)('div',{position:'absolute',top:'50%',width:'1.25rem',height:'1.25rem',borderRadius:'50%',backgroundColor:'$yellow',transform:'translate(0.5rem, -50%)',transition:'transform $switchTransitionDuration $transitionTiming','webkitTapHighlightColor':'$yellowAccent',[`.${stitches_config/* darkTheme */.a5} &`]:{transform:'translate(1.75rem, -50%)'}});const Shadow=(0,stitches_config/* styled */.I4)('div',{position:'absolute',top:'50%',width:'1.25rem',height:'1.25rem',borderRadius:'50%',backgroundColor:'$themeSwitchBackground',transform:'translate(0, -100%) scale(0)',transition:'transform $switchTransitionDuration $transitionTiming',[`.${stitches_config/* darkTheme */.a5} &`]:{transform:'translate(1.35rem, -70%) scale(1)'}});
;// CONCATENATED MODULE: ./src/components/ThemeSwitch/index.tsx
const ThemeSwitch=()=>{const[darkMode,setDarkMode]=(0,useDarkMode/* useDarkMode */.D)();const{0:isClient,1:setIsClient}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{setIsClient(true);},[]);const onThemeSwitchClick=()=>{setDarkMode(prev=>!prev);};return/*#__PURE__*/index_js_default().createElement(styles_Container,{role:'button',"aria-pressed":isClient?darkMode:false,onClick:onThemeSwitchClick},/*#__PURE__*/index_js_default().createElement(Track,null),/*#__PURE__*/index_js_default().createElement(ThumbWrapper,null,/*#__PURE__*/index_js_default().createElement(Thumb,null),/*#__PURE__*/index_js_default().createElement(Shadow,null)),/*#__PURE__*/index_js_default().createElement(Checkbox,{type:"checkbox","aria-label":'Theme Switch',checked:darkMode,onChange:onThemeSwitchClick}));};/* harmony default export */ const components_ThemeSwitch = (/*#__PURE__*/(0,index_js_.memo)(ThemeSwitch));
;// CONCATENATED MODULE: ./src/components/Header/styles.ts
const Header_styles_Container=(0,stitches_config/* styled */.I4)('header',{display:'flex',flexDirection:'column-reverse',alignItems:'center',width:'100%',margin:'0 auto',padding:'2rem 0','@md':{flexDirection:'row',justifyContent:'space-between'}});const TitleWrapper=(0,stitches_config/* styled */.I4)('div',{display:'flex',flexDirection:'row',alignItems:'center',alignSelf:'start',width:'100%','@md':{width:'auto'}});const Circle=(0,stitches_config/* styled */.I4)('div',{width:'4rem',height:'4rem',borderRadius:'50%',backgroundColor:'$headerCircleColor',transition:'background-color $transitionDuration $transitionTiming'});const Title=(0,stitches_config/* styled */.I4)('h1',{marginLeft:'-2.5rem',a:{color:'$text400',fontWeight:900,fontSize:'2rem',lineHeight:'2rem',transition:'color $transitionDuration $transitionTiming',textDecoration:'none'}});
;// CONCATENATED MODULE: ./src/components/Header/index.tsx
const Header=({title,resetFilter})=>{return/*#__PURE__*/index_js_default().createElement(Header_styles_Container,null,/*#__PURE__*/index_js_default().createElement(TitleWrapper,null,/*#__PURE__*/index_js_default().createElement(Circle,null),/*#__PURE__*/index_js_default().createElement(Title,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:'/',onClick:resetFilter},title))),/*#__PURE__*/index_js_default().createElement(components_ThemeSwitch,null));};/* harmony default export */ const components_Header = (/*#__PURE__*/(0,index_js_.memo)(Header));
;// CONCATENATED MODULE: ./src/layout/styles.ts
const globalStyles=colorScheme=>(0,stitches_config/* globalCss */.Dp)({':root':{fontFamily:'"Pretendard", apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',textRendering:'optimizeLegibility',colorScheme:colorScheme},'*':{boxSizing:'border-box',margin:0,padding:0},html:{minHeight:'100vh'},body:{minHeight:'100vh',backgroundColor:'$backgroundColor'},'#___gatsby, #gatsby-focus-wrapper':{minHeight:'100vh'},a:{color:'inherit',textDecoration:'none'},h1:{fontSize:'1.75rem'},h2:{fontSize:'1.5rem'},h3:{fontSize:'1.25rem'},h4:{fontSize:'1rem'},h5:{fontSize:'0.875rem'},h6:{fontSize:'0.75rem'},hr:{marginTop:'0.25rem',marginBottom:'0.25rem',border:0,borderTop:'0.125rem solid $borderGray'},img:{display:'block',margin:'0 auto',maxWidth:'100%'},table:{width:'100%',marginTop:'0.75rem',marginBottom:'0.75rem',borderCollapse:'collapse',lineHeight:'1.75rem'},tr:{borderBottom:'1px solid $borderGray'},th:{paddingTop:'0.75rem',paddingBottom:'0.75rem'},td:{paddingTop:'0.75rem',paddingBottom:'0.75rem'},p:{marginTop:'0.75rem',marginBottom:'0.75rem',lineHeight:1.625,'> code[class*="language-"]':{whiteSpace:'pre-wrap'}},blockquote:{paddingLeft:'1rem',borderLeft:'0.25rem solid $borderPrimary'},article:{overflowWrap:'break-word','ul, ol':{marginLeft:'2rem','ul, ol':{marginLeft:'1.5rem'},li:{marginTop:'0.375rem',marginBottom:'0.375rem',p:{margin:0}}},'pre[class^="language-"]':{borderRadius:'0.25rem'}},':not(pre) > code[class*="language-"]':{color:'$inlineCodeColor',background:'$inlineCodeBackground'},'.copy-button':{position:'absolute',top:'0.5rem',right:'0.5rem',backgroundColor:'$buttonBackground',border:'none',color:'$buttonText',padding:'0.5rem 1rem',fontSize:'0.75rem',borderRadius:'0.25rem',cursor:'pointer',zIndex:1},'.copy-button:hover':{backgroundColor:'$buttonHoverBackground'}})();const Root=(0,stitches_config/* styled */.I4)('div',{display:'flex',minHeight:'100vh',color:'$text500',backgroundColor:'$backgroundColor',transition:'color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming'});const layout_styles_Container=(0,stitches_config/* styled */.I4)('div',{display:'flex',flexDirection:'column',width:'100%',maxWidth:'$contentWidth',margin:'0 auto',paddingRight:'1em',paddingLeft:'1em','@md':{padding:0}});
;// CONCATENATED MODULE: ./src/layout/index.tsx
const Layout=({title,children,resetFilter})=>{const[isDarkMode]=(0,useDarkMode/* useDarkMode */.D)();globalStyles(isDarkMode?'dark':'light');return/*#__PURE__*/index_js_default().createElement(Root,null,/*#__PURE__*/index_js_default().createElement(layout_styles_Container,null,/*#__PURE__*/index_js_default().createElement(components_Header,{title:title,resetFilter:resetFilter}),/*#__PURE__*/index_js_default().createElement("main",null,children),/*#__PURE__*/index_js_default().createElement(components_Footer,null)));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5895);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4345);



const NotFoundPage = ({
  data,
  location
}) => {
  var _data$site$siteMetada, _data$site, _data$site$siteMetada2;
  const siteTitle = (_data$site$siteMetada = (_data$site = data.site) === null || _data$site === void 0 ? void 0 : (_data$site$siteMetada2 = _data$site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.title) !== null && _data$site$siteMetada !== void 0 ? _data$site$siteMetada : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    lang: "en",
    title: "404: Not Found",
    description: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "404: Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const pageQuery = "2662217147";

/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ win)
/* harmony export */ });
const win=typeof window!=='undefined'?window:null;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map