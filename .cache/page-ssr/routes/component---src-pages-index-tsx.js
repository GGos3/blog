"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 6783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Profile)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: external "/home/runner/work/blog/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(7836);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/hooks/useAuthorProfile.ts
var useAuthorProfile = __webpack_require__(5588);
;// CONCATENATED MODULE: ./src/hooks/useCheckAboutPage.ts
const useCheckAboutPage=()=>(0,gatsby_browser_entry.useStaticQuery)("2538111481").allSitePage.edges.length>0;
// EXTERNAL MODULE: ./src/stitches.config.ts + 1 modules
var stitches_config = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/components/Profile/styles.ts
const Container=(0,stitches_config/* styled */.I4)('div',{display:'grid',gridTemplateColumns:'70px auto',marginBottom:'2rem',padding:'1rem',borderRadius:'1rem',backgroundColor:'$gray100',transition:'background-color $transitionDuration $transitionTiming','.profile-image':{borderRadius:'50%',transform:'translateZ(0)'}});const Wrapper=(0,stitches_config/* styled */.I4)('div',{paddingRight:'1rem',paddingLeft:'1rem',color:'$text300',transition:'color $transitionDuration $transitionTiming'});const Name=(0,stitches_config/* styled */.I4)('p',{marginTop:0,marginBottom:'0.5rem',fontSize:'1.25rem'});const Description=(0,stitches_config/* styled */.I4)('p',{lineHeight:1.2,wordBreak:'keep-all'});const ExternalLinks=(0,stitches_config/* styled */.I4)('ul',{display:'flex',gap:'1em',marginTop:'1em',marginLeft:0});const LinkItem=(0,stitches_config/* styled */.I4)('li',{display:'inline-block',listStyle:'none',transition:'color $transitionDuration $transitionTiming','a':{color:'$link'}});
;// CONCATENATED MODULE: ./src/components/Profile/index.tsx
const ExternalLink=({username,urlPrefix,children})=>{if(!username){return null;}return/*#__PURE__*/index_js_default().createElement(LinkItem,null,/*#__PURE__*/index_js_default().createElement("a",{href:`${urlPrefix}${username}`},children));};const Profile=()=>{var _useAuthorProfile$sit;const siteMetadata=(_useAuthorProfile$sit=(0,useAuthorProfile/* useAuthorProfile */.g)().site)===null||_useAuthorProfile$sit===void 0?void 0:_useAuthorProfile$sit.siteMetadata;const isAboutPageExists=useCheckAboutPage();const author=siteMetadata===null||siteMetadata===void 0?void 0:siteMetadata.author;const description=siteMetadata===null||siteMetadata===void 0?void 0:siteMetadata.description;const social=siteMetadata===null||siteMetadata===void 0?void 0:siteMetadata.social;const socialLinks={github:{text:'GitHub',url:'https://github.com/'},twitter:{text:'Twitter',url:'https://twitter.com/'},facebook:{text:'Facebook',url:'https://www.facebook.com/'},instagram:{text:'Instagram',url:'https://www.instagram.com/'},linkedin:{text:'LinkedIn',url:'https://www.linkedin.com/in/'}};return/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:"profile-image",layout:"fixed",formats:['auto','webp','avif'],src:"../../images/profile-pic.png",width:70,height:70,quality:95,alt:"Profile picture",__imageData:__webpack_require__(3902)}),/*#__PURE__*/index_js_default().createElement(Wrapper,null,/*#__PURE__*/index_js_default().createElement(Name,null,/*#__PURE__*/index_js_default().createElement("strong",null,author)),/*#__PURE__*/index_js_default().createElement(Description,null,description),/*#__PURE__*/index_js_default().createElement(ExternalLinks,null,isAboutPageExists&&/*#__PURE__*/index_js_default().createElement(LinkItem,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:'/about'},"About")),Object.entries(social!==null&&social!==void 0?social:{}).map(([key,username])=>{const serviceName=key;return/*#__PURE__*/index_js_default().createElement(ExternalLink,{key:serviceName,username:username,urlPrefix:socialLinks[serviceName].url},socialLinks[serviceName].text);}))));};/* harmony default export */ const components_Profile = (/*#__PURE__*/(0,index_js_.memo)(Profile));

/***/ }),

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

/***/ 5339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/home/runner/work/blog/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(7836);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/constants/index.ts
let TAG=/*#__PURE__*/function(TAG){TAG["ALL"]="All";return TAG;}({});
// EXTERNAL MODULE: ./src/stitches.config.ts + 1 modules
var stitches_config = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/components/ArticleFilter/styles.ts
const Container=(0,stitches_config/* styled */.I4)('section',{margin:'2rem auto',padding:'1rem',borderLeft:'0.25rem solid $borderPrimary',transition:'border-left-color $transitionDuration $transitionTiming'});const Title=(0,stitches_config/* styled */.I4)('h3',{display:'block',color:'$text300',transition:'color $transitionDuration $transitionTiming'});const Input=(0,stitches_config/* styled */.I4)('input',{maxWidth:'18.75rem',width:'100%',height:'2.5rem',marginTop:'1rem',padding:'0.5rem 0.75rem',border:'1px solid $borderGray',borderRadius:'0.25rem',color:'$text500',fontSize:'1rem',backgroundColor:'$titleFilterBackground',transition:'color $transitionDuration $transitionTiming, border-color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming',appearance:'none'});const TagListWrapper=(0,stitches_config/* styled */.I4)('div',{display:'flex',flexWrap:'wrap',gap:'0.5rem',marginTop:'1rem'});const Tag=(0,stitches_config/* styled */.I4)('button',{padding:'0.5rem 1rem',border:0,borderRadius:'0.25rem',color:'$tagColor',fontSize:'0.875rem',backgroundColor:'$tagFilterBackground',cursor:'pointer',transition:'color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming',appearance:'none',variants:{filtered:{true:{color:'$primary500',backgroundColor:'$primary200'}}}});
;// CONCATENATED MODULE: ./src/components/ArticleFilter/index.tsx
const ArticleFilter=({tags,currentTag,setCurrentTag,titleFilter,onTitleFilterChange})=>{const onClickTag=(0,index_js_.useCallback)(e=>{const tag=e.target.dataset['tag'];setCurrentTag(tag);},[setCurrentTag]);return/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(Title,null,"Filter"),/*#__PURE__*/index_js_default().createElement(Input,{type:"text",placeholder:"Article name..",value:titleFilter,onChange:onTitleFilterChange}),/*#__PURE__*/index_js_default().createElement(TagListWrapper,null,/*#__PURE__*/index_js_default().createElement(Tag,{type:"button","data-tag":TAG.ALL,onClick:onClickTag,filtered:currentTag===TAG.ALL},TAG.ALL),tags.map(tag=>/*#__PURE__*/index_js_default().createElement(Tag,{type:"button",key:tag,"data-tag":tag,onClick:onClickTag,filtered:currentTag===tag},tag))));};/* harmony default export */ const components_ArticleFilter = (/*#__PURE__*/(0,index_js_.memo)(ArticleFilter));
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// CONCATENATED MODULE: ./src/components/ArticleList/Item/styles.ts
const Header=(0,stitches_config/* styled */.I4)('header',{margin:'1rem auto'});const styles_Title=(0,stitches_config/* styled */.I4)('h2',{fontSize:'1.5rem','a':{color:'$text500',transition:'color $transitionDuration $transitionTiming'}});const Section=(0,stitches_config/* styled */.I4)('section',{marginBottom:'3rem',color:'$text200',transition:'color $transitionDuration $transitionTiming'});
;// CONCATENATED MODULE: ./src/components/ArticleList/Item/index.tsx
const ArticleListItem=({slug,title,description})=>/*#__PURE__*/index_js_default().createElement("li",{key:slug},/*#__PURE__*/index_js_default().createElement("article",{className:"post-list-item",itemScope:true,itemType:"http://schema.org/Article"},/*#__PURE__*/index_js_default().createElement(Header,null,/*#__PURE__*/index_js_default().createElement(styles_Title,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:slug,itemProp:"url"},/*#__PURE__*/index_js_default().createElement("span",{itemProp:"headline"},title)))),/*#__PURE__*/index_js_default().createElement(Section,null,/*#__PURE__*/index_js_default().createElement("p",{dangerouslySetInnerHTML:{__html:description},itemProp:"description"}))));/* harmony default export */ const Item = (/*#__PURE__*/(0,index_js_.memo)(ArticleListItem));
;// CONCATENATED MODULE: ./src/components/ArticleList/styles.ts
const styles_Container=(0,stitches_config/* styled */.I4)('ol',{marginLeft:0,listStyle:'none'});
;// CONCATENATED MODULE: ./src/components/ArticleList/index.tsx
const ArticleList=({posts})=>{return/*#__PURE__*/index_js_default().createElement(styles_Container,null,/*#__PURE__*/index_js_default().createElement("ul",null,posts.filter(post=>{var _post$frontmatter;return post&&((_post$frontmatter=post.frontmatter)===null||_post$frontmatter===void 0?void 0:_post$frontmatter.title);})// 필터링: post가 undefined가 아니고, title이 있는 경우에만 진행
.map(post=>{var _ref,_post$frontmatter$tit,_post$frontmatter2,_post$fields,_post$fields$slug,_post$fields2,_ref2,_post$frontmatter$des,_post$frontmatter3;const title=(_ref=(_post$frontmatter$tit=(_post$frontmatter2=post.frontmatter)===null||_post$frontmatter2===void 0?void 0:_post$frontmatter2.title)!==null&&_post$frontmatter$tit!==void 0?_post$frontmatter$tit:(_post$fields=post.fields)===null||_post$fields===void 0?void 0:_post$fields.slug)!==null&&_ref!==void 0?_ref:'';const slug=(_post$fields$slug=(_post$fields2=post.fields)===null||_post$fields2===void 0?void 0:_post$fields2.slug)!==null&&_post$fields$slug!==void 0?_post$fields$slug:'';const description=(_ref2=(_post$frontmatter$des=(_post$frontmatter3=post.frontmatter)===null||_post$frontmatter3===void 0?void 0:_post$frontmatter3.description)!==null&&_post$frontmatter$des!==void 0?_post$frontmatter$des:post.excerpt)!==null&&_ref2!==void 0?_ref2:'';if(!title||!slug){return null;// title이나 slug가 없는 경우 렌더링하지 않음
}return/*#__PURE__*/index_js_default().createElement(Item,{key:slug,title:title,slug:slug,description:description});})));};/* harmony default export */ const components_ArticleList = (/*#__PURE__*/(0,index_js_.memo)(ArticleList));
// EXTERNAL MODULE: ./src/components/Profile/index.tsx + 2 modules
var Profile = __webpack_require__(6783);
// EXTERNAL MODULE: ./src/components/Seo/index.tsx
var Seo = __webpack_require__(5895);
;// CONCATENATED MODULE: ./src/hooks/useArticleTags.ts
const useArticleTags=()=>(0,gatsby_browser_entry.useStaticQuery)("3366795805");
;// CONCATENATED MODULE: ./src/hooks/useIntersectionObserver.ts
const useIntersectionObserver=(ref,options={})=>{const{0:element,1:setElement}=(0,index_js_.useState)(null);const{0:isIntersecting,1:setIsIntersecting}=(0,index_js_.useState)(false);const observer=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{setElement(ref.current);},[ref]);(0,index_js_.useEffect)(()=>{var _observer$current,_observer$current2;if(element===null){return;}(_observer$current=observer.current)===null||_observer$current===void 0?void 0:_observer$current.disconnect();observer.current=new IntersectionObserver(([entry])=>{setIsIntersecting(entry.isIntersecting);},{...options});(_observer$current2=observer.current)===null||_observer$current2===void 0?void 0:_observer$current2.observe(element);return()=>{var _observer$current3;(_observer$current3=observer.current)===null||_observer$current3===void 0?void 0:_observer$current3.disconnect();};},[element,options]);return isIntersecting;};
;// CONCATENATED MODULE: ./src/hooks/useInfiniteScroll.ts
const useInfiniteScroll=(ref,callback)=>{const shouldLoadMore=useIntersectionObserver(ref,{threshold:0});(0,index_js_.useEffect)(()=>{if(shouldLoadMore){callback();}},[shouldLoadMore,callback]);};
// EXTERNAL MODULE: ./src/utils/window.ts
var utils_window = __webpack_require__(4050);
;// CONCATENATED MODULE: ./src/utils/storage.ts
const KEY_PREFIX='__lavender__';const KEY_PAGE=`${KEY_PREFIX}/page`;const savePage=page=>{utils_window/* win */.z===null||utils_window/* win */.z===void 0?void 0:utils_window/* win */.z.sessionStorage.setItem(KEY_PAGE,page.toString());};const loadPage=defaultValue=>{var _win$sessionStorage$g;return Number((_win$sessionStorage$g=utils_window/* win */.z===null||utils_window/* win */.z===void 0?void 0:utils_window/* win */.z.sessionStorage.getItem(KEY_PAGE))!==null&&_win$sessionStorage$g!==void 0?_win$sessionStorage$g:defaultValue);};
;// CONCATENATED MODULE: ./src/hooks/usePage.ts
const initialState=loadPage(1);const usePage=()=>{const{0:page,1:setPage}=(0,index_js_.useState)(initialState);const changePage=nextPage=>{setPage(nextPage);savePage(nextPage);};return[page,changePage];};
// EXTERNAL MODULE: ./node_modules/query-string/index.js + 4 modules
var query_string = __webpack_require__(8798);
;// CONCATENATED MODULE: ./src/hooks/useDebounce.tsx
const useDebounce=(value,delay)=>{const{0:debouncedValue,1:setDebouncedValue}=(0,index_js_.useState)(value);(0,index_js_.useEffect)(()=>{const timeout=setTimeout(()=>{setDebouncedValue(value);},delay);return()=>{clearTimeout(timeout);};},[value,delay]);return debouncedValue;};
;// CONCATENATED MODULE: ./src/hooks/useSearchFilter.ts
const useSearchFilter=()=>{const{0:filter,1:setFilter}=(0,index_js_.useState)('');const debouncedFilter=useDebounce(filter,300);const onPopState=()=>{const params=query_string/* default */.A.parse(location.search);const search=params.search;setFilter(search!==null&&search!==void 0?search:'');};(0,index_js_.useEffect)(()=>{const params=query_string/* default */.A.parse(location.search);const{search}=params;if(search){setFilter(search);}window.addEventListener('popstate',onPopState);return()=>{window.removeEventListener('popstate',onPopState);};},[]);(0,index_js_.useEffect)(()=>{var _params$search;const params=query_string/* default */.A.parse(location.search);if(debouncedFilter===((_params$search=params.search)!==null&&_params$search!==void 0?_params$search:'')){return;}params.search=debouncedFilter;const nextUrl=query_string/* default */.A.stringifyUrl({url:location.pathname,query:params},{skipNull:true,skipEmptyString:true});history.pushState(params,'',nextUrl);},[debouncedFilter]);return[filter,setFilter];};
// EXTERNAL MODULE: ./src/hooks/useSeo.ts
var useSeo = __webpack_require__(4125);
;// CONCATENATED MODULE: ./src/hooks/useTag.ts
const useTag=()=>{const{0:currentTag,1:setCurrentTag}=(0,index_js_.useState)(TAG.ALL);const onPopState=()=>{const params=query_string/* default */.A.parse(location.search);const tag=params.tag;setCurrentTag(tag!==null&&tag!==void 0?tag:TAG.ALL);};(0,index_js_.useEffect)(()=>{const params=query_string/* default */.A.parse(location.search);const tag=params.tag;if(tag){setCurrentTag(tag);}window.addEventListener('popstate',onPopState);return()=>{window.removeEventListener('popstate',onPopState);};},[]);(0,index_js_.useEffect)(()=>{var _params$tag;const params=query_string/* default */.A.parse(location.search);if(currentTag===((_params$tag=params.tag)!==null&&_params$tag!==void 0?_params$tag:TAG.ALL)){return;}if(currentTag===TAG.ALL){delete params.tag;}else{params.tag=currentTag;}const nextUrl=query_string/* default */.A.stringifyUrl({url:location.pathname,query:params},{skipNull:true,skipEmptyString:true});history.pushState(params,'',nextUrl);},[currentTag]);return[currentTag,setCurrentTag];};
// EXTERNAL MODULE: ./src/layout/index.tsx + 7 modules
var layout = __webpack_require__(4345);
;// CONCATENATED MODULE: ./src/utils/filterPosts.ts
const filterPostsByTitle=(posts,title)=>{if(title===''){return posts;}return posts.filter(post=>{var _post$frontmatter,_post$frontmatter$tit;return(_post$frontmatter=post.frontmatter)===null||_post$frontmatter===void 0?void 0:(_post$frontmatter$tit=_post$frontmatter.title)===null||_post$frontmatter$tit===void 0?void 0:_post$frontmatter$tit.toLocaleLowerCase().includes(title);});};const filterPostsByTag=(posts,tag)=>{if(tag===TAG.ALL){return posts;}return posts.filter(post=>{var _post$frontmatter2,_post$frontmatter2$ta;return(_post$frontmatter2=post.frontmatter)===null||_post$frontmatter2===void 0?void 0:(_post$frontmatter2$ta=_post$frontmatter2.tags)===null||_post$frontmatter2$ta===void 0?void 0:_post$frontmatter2$ta.includes(tag);});};
;// CONCATENATED MODULE: ./src/pages/index.tsx














const BlogIndex = ({
  data,
  location
}) => {
  var _useSeo$site, _useArticleTags$allMa, _data$site$siteMetada, _data$site, _data$site$siteMetada2, _data$site$siteMetada3, _data$site2, _data$site2$siteMetad, _data$site3, _data$site3$siteMetad, _siteMetadata$title, _siteMetadata$descrip;
  const infiniteScrollRef = (0,index_js_.useRef)(null);
  const [page, setPage] = usePage();
  const [titleFilter, setTitleFilter] = useSearchFilter();
  const [currentTag, setCurrentTag] = useTag();
  const siteMetadata = (_useSeo$site = (0,useSeo/* useSeo */.h)().site) === null || _useSeo$site === void 0 ? void 0 : _useSeo$site.siteMetadata;
  const tags = (_useArticleTags$allMa = useArticleTags().allMarkdownRemark) === null || _useArticleTags$allMa === void 0 ? void 0 : _useArticleTags$allMa.distinct;
  const siteUrl = (_data$site$siteMetada = (_data$site = data.site) === null || _data$site === void 0 ? void 0 : (_data$site$siteMetada2 = _data$site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.siteUrl) !== null && _data$site$siteMetada !== void 0 ? _data$site$siteMetada : '';
  const siteTitle = (_data$site$siteMetada3 = (_data$site2 = data.site) === null || _data$site2 === void 0 ? void 0 : (_data$site2$siteMetad = _data$site2.siteMetadata) === null || _data$site2$siteMetad === void 0 ? void 0 : _data$site2$siteMetad.title) !== null && _data$site$siteMetada3 !== void 0 ? _data$site$siteMetada3 : '';
  const siteThumbnail = (_data$site3 = data.site) === null || _data$site3 === void 0 ? void 0 : (_data$site3$siteMetad = _data$site3.siteMetadata) === null || _data$site3$siteMetad === void 0 ? void 0 : _data$site3$siteMetad.thumbnail;
  const posts = filterPostsByTag(filterPostsByTitle(data.allMarkdownRemark.nodes, titleFilter), currentTag);
  const articlePerPage = 5;
  const totalPage = Math.ceil(posts.length / articlePerPage);
  const onTitleFilterChange = (0,index_js_.useCallback)(event => {
    setTitleFilter(event.target.value);
  }, []);
  const resetFilter = () => {
    setTitleFilter('');
    setCurrentTag(TAG.ALL);
  };
  const meta = [];
  if (siteThumbnail) {
    const properties = ['og:image', 'twitter:image'];
    for (const property of properties) {
      meta.push({
        property,
        content: `${siteUrl}${siteThumbnail}`
      });
    }
  }
  useInfiniteScroll(infiniteScrollRef, (0,index_js_.useCallback)(() => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }, [page, setPage, totalPage]));
  return /*#__PURE__*/index_js_default().createElement(layout/* default */.A, {
    location: location,
    title: siteTitle,
    resetFilter: resetFilter
  }, /*#__PURE__*/index_js_default().createElement(Seo/* default */.A, {
    lang: "en",
    title: (_siteMetadata$title = siteMetadata === null || siteMetadata === void 0 ? void 0 : siteMetadata.title) !== null && _siteMetadata$title !== void 0 ? _siteMetadata$title : '',
    description: (_siteMetadata$descrip = siteMetadata === null || siteMetadata === void 0 ? void 0 : siteMetadata.description) !== null && _siteMetadata$descrip !== void 0 ? _siteMetadata$descrip : '',
    meta: meta,
    noSiteName: true
  }), /*#__PURE__*/index_js_default().createElement(Profile/* default */.A, null), /*#__PURE__*/index_js_default().createElement(components_ArticleFilter, {
    tags: tags,
    titleFilter: titleFilter,
    onTitleFilterChange: onTitleFilterChange,
    currentTag: currentTag,
    setCurrentTag: setCurrentTag
  }), posts.length === 0 ? /*#__PURE__*/index_js_default().createElement("p", null, "No posts found.") : /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement(components_ArticleList, {
    posts: posts.slice(0, page * articlePerPage)
  })), /*#__PURE__*/index_js_default().createElement("div", {
    className: "infinite-scroll",
    ref: infiniteScrollRef
  }));
};
/* harmony default export */ const pages = (BlogIndex);
const pageQuery = "3492650346";

/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ win)
/* harmony export */ });
const win=typeof window!=='undefined'?window:null;

/***/ }),

/***/ 3902:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"fixed","backgroundColor":"#3868d8","images":{"fallback":{"src":"/static/22abedb688711242445859e5c633f88e/145fc/profile-pic.png","srcSet":"/static/22abedb688711242445859e5c633f88e/145fc/profile-pic.png 70w,\\n/static/22abedb688711242445859e5c633f88e/f2ae4/profile-pic.png 140w","sizes":"70px"},"sources":[{"srcSet":"/static/22abedb688711242445859e5c633f88e/821ec/profile-pic.avif 70w,\\n/static/22abedb688711242445859e5c633f88e/1bb1f/profile-pic.avif 140w","type":"image/avif","sizes":"70px"},{"srcSet":"/static/22abedb688711242445859e5c633f88e/55c64/profile-pic.webp 70w,\\n/static/22abedb688711242445859e5c633f88e/b0396/profile-pic.webp 140w","type":"image/webp","sizes":"70px"}]},"width":70,"height":70}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map