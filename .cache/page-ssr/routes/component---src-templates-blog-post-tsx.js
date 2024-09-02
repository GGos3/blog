"use strict";
exports.id = 455;
exports.ids = [455];
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

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_post)
});

// EXTERNAL MODULE: external "/home/runner/work/blog/blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(7836);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/disqus-react/lib/index.js
var lib = __webpack_require__(1392);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/stitches.config.ts + 1 modules
var stitches_config = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/components/ArticleNavigator/styles.ts
const Container=(0,stitches_config/* styled */.I4)('nav',{margin:'1rem auto'});const NavigationList=(0,stitches_config/* styled */.I4)('ul',{display:'flex',flexWrap:'wrap',justifyContent:'space-between',margin:0,listStyle:'none'});const PostLink=(0,stitches_config/* styled */.I4)(gatsby_browser_entry.Link,{display:'block',padding:'0.5rem 1rem',borderRadius:'0.5rem',color:'$link',fontSize:'0.875rem'});
;// CONCATENATED MODULE: ./src/components/ArticleNavigator/index.tsx
const ArticleNavigator=({previousArticle,nextArticle})=>{var _previousArticle$fiel,_previousArticle$fiel2,_previousArticle$fron,_nextArticle$fields$s,_nextArticle$fields,_nextArticle$frontmat;return/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(NavigationList,null,/*#__PURE__*/index_js_default().createElement("li",null,previousArticle?/*#__PURE__*/index_js_default().createElement(PostLink,{to:(_previousArticle$fiel=(_previousArticle$fiel2=previousArticle.fields)===null||_previousArticle$fiel2===void 0?void 0:_previousArticle$fiel2.slug)!==null&&_previousArticle$fiel!==void 0?_previousArticle$fiel:'',rel:"prev"},"\u2190 ",(_previousArticle$fron=previousArticle.frontmatter)===null||_previousArticle$fron===void 0?void 0:_previousArticle$fron.title):/*#__PURE__*/index_js_default().createElement("span",null,"\u2190 No previous article")// Optional fallback text
),/*#__PURE__*/index_js_default().createElement("li",null,nextArticle?/*#__PURE__*/index_js_default().createElement(PostLink,{to:(_nextArticle$fields$s=(_nextArticle$fields=nextArticle.fields)===null||_nextArticle$fields===void 0?void 0:_nextArticle$fields.slug)!==null&&_nextArticle$fields$s!==void 0?_nextArticle$fields$s:'',rel:"next"},(_nextArticle$frontmat=nextArticle.frontmatter)===null||_nextArticle$frontmat===void 0?void 0:_nextArticle$frontmat.title," \u2192"):/*#__PURE__*/index_js_default().createElement("span",null,"No next article \u2192")// Optional fallback text
)));};/* harmony default export */ const components_ArticleNavigator = (ArticleNavigator);
// EXTERNAL MODULE: ./src/components/Profile/index.tsx + 2 modules
var Profile = __webpack_require__(6783);
// EXTERNAL MODULE: ./src/components/Seo/index.tsx
var Seo = __webpack_require__(5895);
;// CONCATENATED MODULE: ./src/components/Tags/styles.ts
const TagList=(0,stitches_config/* styled */.I4)('ul',{margin:0});const Tag=(0,stitches_config/* styled */.I4)('li',{display:'inline-block',listStyle:'none','&:before':{margin:'0 0.25rem',content:'•'}});
;// CONCATENATED MODULE: ./src/components/Tags/index.tsx
const Tags=({tags})=>/*#__PURE__*/index_js_default().createElement(TagList,null,tags===null||tags===void 0?void 0:tags.map(tag=>/*#__PURE__*/index_js_default().createElement(Tag,{key:tag},tag)));/* harmony default export */ const components_Tags = (/*#__PURE__*/(0,index_js_.memo)(Tags));
// EXTERNAL MODULE: ./src/hooks/useDarkMode.ts + 2 modules
var useDarkMode = __webpack_require__(8905);
;// CONCATENATED MODULE: ./src/components/Utterances/index.tsx
const src='https://utteranc.es/client.js';const branch='master';const Utterances=({repo})=>{const ref=/*#__PURE__*/(0,index_js_.createRef)();const[darkMode]=(0,useDarkMode/* useDarkMode */.D)();const utteranceTheme=darkMode?'photon-dark':'github-light';(0,index_js_.useEffect)(()=>{var _ref$current,_ref$current3;const utterances=document.createElement('script');const config={src,repo,branch,theme:utteranceTheme,label:'comment',async:true,crossorigin:'anonymous','issue-term':'pathname'};Object.entries(config).forEach(([key,value])=>{utterances.setAttribute(key,`${value}`);});(_ref$current=ref.current)===null||_ref$current===void 0?void 0:_ref$current.childNodes.forEach(children=>{var _ref$current2;(_ref$current2=ref.current)===null||_ref$current2===void 0?void 0:_ref$current2.removeChild(children);});(_ref$current3=ref.current)===null||_ref$current3===void 0?void 0:_ref$current3.appendChild(utterances);},[]);return/*#__PURE__*/index_js_default().createElement("div",{className:"utterances",ref:ref});};/* harmony default export */ const components_Utterances = (Utterances);
;// CONCATENATED MODULE: ./src/hooks/useComment.ts
const useComment=()=>(0,gatsby_browser_entry.useStaticQuery)("658623446");
// EXTERNAL MODULE: ./src/layout/index.tsx + 7 modules
var layout = __webpack_require__(4345);
;// CONCATENATED MODULE: ./src/templates/styles.ts
const Article=(0,stitches_config/* styled */.I4)('article',{position:'relative',padding:'2rem 1rem',maxWidth:'768px',margin:'0 auto','& .heading-anchor':{borderBottom:0,svg:{fill:'$text500'}}});const TableOfContents=(0,stitches_config/* styled */.I4)('div',{marginBottom:'2rem',border:'1px solid $borderGray',borderRadius:'0.25rem',padding:'1rem',backgroundColor:'$backgroundSecondary','> ul':{marginLeft:0},ul:{listStyle:'none',li:{paddingTop:'0.25rem',paddingBottom:'0.25rem',color:'$text500',fontSize:'0.875rem',transition:'color $transitionDuration $transitionTiming',a:{textDecoration:'none',color:'$link',fontWeight:500,'&:hover':{textDecoration:'underline'}}}}});const Header=(0,stitches_config/* styled */.I4)('header',{marginBottom:'2.5rem',borderBottom:'1px solid $borderGray',paddingBottom:'1rem'});const Title=(0,stitches_config/* styled */.I4)('h1',{fontSize:'2.5rem',fontWeight:700,lineHeight:'1.2'});const ArticleMetadata=(0,stitches_config/* styled */.I4)('div',{display:'flex',alignItems:'center',marginTop:'0.75rem',fontSize:'0.875rem',color:'$text400',fontWeight:500,transition:'color $transitionDuration $transitionTiming'});const Content=(0,stitches_config/* styled */.I4)('section',{wordBreak:'keep-all',lineHeight:'1.7',h1:{marginTop:'2.5rem',marginBottom:'1.5rem',paddingBottom:'0.5rem',borderBottom:'1px solid $borderGray',a:{borderBottom:'none'}},h2:{marginTop:'2rem',marginBottom:'1.25rem',paddingBottom:'0.5rem',borderBottom:'1px solid $borderGray',a:{borderBottom:'none'}},h3:{marginTop:'1.75rem',marginBottom:'1rem'},a:{color:'$link',textDecoration:'none',borderBottom:'2px solid $link',transition:'color $transitionDuration $transitionTiming, border-bottom-color $transitionDuration $transitionTiming','&:hover':{color:'$linkHover',borderBottomColor:'$linkHover'}},pre:{code:{padding:'0rem',wordBreak:'break-all',overflowWrap:'break-word',backgroundColor:'transparent'}},code:{backgroundColor:'$borderGray',padding:'0.25rem 0.5rem',borderRadius:'0.5rem',fontSize:'0.875rem',fontFamily:'monospace'},'pre, code':{fontVariantLigatures:'none'}});const Footer=(0,stitches_config/* styled */.I4)('footer',{marginTop:'3rem',paddingTop:'2rem',borderTop:'1px solid $borderGray','&:before':{display:'block',width:'100%',height:'0.25rem',margin:'3rem auto',backgroundColor:'$primary200',transition:'background-color $transitionDuration $transitionTiming',content:''}});
;// CONCATENATED MODULE: ./src/templates/blog-post.tsx











const BlogPostTemplate = ({
  data,
  location
}) => {
  var _data$site$siteMetada, _data$site, _data$site$siteMetada2, _data$site$siteMetada3, _data$site2, _data$site2$siteMetad, _data$site3, _data$site3$siteMetad, _useComment$site, _useComment$site$site, _post$fields, _ref, _post$tableOfContents, _post$html;
  const {
    0: isClient,
    1: setIsClient
  } = (0,index_js_.useState)(false); // Track if we are on the client
  const post = data.markdownRemark;
  const siteUrl = (_data$site$siteMetada = (_data$site = data.site) === null || _data$site === void 0 ? void 0 : (_data$site$siteMetada2 = _data$site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.siteUrl) !== null && _data$site$siteMetada !== void 0 ? _data$site$siteMetada : '';
  const siteTitle = (_data$site$siteMetada3 = (_data$site2 = data.site) === null || _data$site2 === void 0 ? void 0 : (_data$site2$siteMetad = _data$site2.siteMetadata) === null || _data$site2$siteMetad === void 0 ? void 0 : _data$site2$siteMetad.title) !== null && _data$site$siteMetada3 !== void 0 ? _data$site$siteMetada3 : '';
  const siteThumbnail = (_data$site3 = data.site) === null || _data$site3 === void 0 ? void 0 : (_data$site3$siteMetad = _data$site3.siteMetadata) === null || _data$site3$siteMetad === void 0 ? void 0 : _data$site3$siteMetad.thumbnail;
  const {
    previous,
    next
  } = data;
  const {
    title,
    description,
    date,
    tags,
    thumbnail
  } = post.frontmatter;
  const commentConfig = (_useComment$site = useComment().site) === null || _useComment$site === void 0 ? void 0 : (_useComment$site$site = _useComment$site.siteMetadata) === null || _useComment$site$site === void 0 ? void 0 : _useComment$site$site.comment;
  (0,index_js_.useEffect)(() => {
    setIsClient(true); // Set to true when mounted on the client
  }, []);
  const disqusConfig = {
    title,
    identifier: (_post$fields = post.fields) === null || _post$fields === void 0 ? void 0 : _post$fields.slug
  };
  const meta = [];
  if (siteThumbnail || thumbnail) {
    const properties = ['og:image', 'twitter:image'];
    for (const property of properties) {
      meta.push({
        property,
        content: `${siteUrl}${thumbnail !== null && thumbnail !== void 0 ? thumbnail : siteThumbnail}`
      });
    }
  }
  return /*#__PURE__*/index_js_default().createElement(layout/* default */.A, {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/index_js_default().createElement(Seo/* default */.A, {
    lang: "en",
    title: title !== null && title !== void 0 ? title : '',
    description: (_ref = description !== null && description !== void 0 ? description : post.excerpt) !== null && _ref !== void 0 ? _ref : '',
    meta: meta
  }), /*#__PURE__*/index_js_default().createElement(Article, {
    itemScope: true,
    itemType: "http://schema.org/Article"
  }, /*#__PURE__*/index_js_default().createElement(Header, null, /*#__PURE__*/index_js_default().createElement(Title, {
    itemProp: "headline"
  }, title), /*#__PURE__*/index_js_default().createElement(ArticleMetadata, null, /*#__PURE__*/index_js_default().createElement("span", null, date), /*#__PURE__*/index_js_default().createElement(components_Tags, {
    tags: tags
  }))), /*#__PURE__*/index_js_default().createElement(TableOfContents, {
    dangerouslySetInnerHTML: {
      __html: (_post$tableOfContents = post.tableOfContents) !== null && _post$tableOfContents !== void 0 ? _post$tableOfContents : ''
    }
  }), /*#__PURE__*/index_js_default().createElement(Content, {
    dangerouslySetInnerHTML: {
      __html: (_post$html = post.html) !== null && _post$html !== void 0 ? _post$html : ''
    },
    itemProp: "articleBody"
  }), /*#__PURE__*/index_js_default().createElement(Footer, null, /*#__PURE__*/index_js_default().createElement(Profile/* default */.A, null))), isClient && (commentConfig === null || commentConfig === void 0 ? void 0 : commentConfig.utterances) && /*#__PURE__*/index_js_default().createElement(components_Utterances, {
    repo: commentConfig.utterances
  }), isClient && (commentConfig === null || commentConfig === void 0 ? void 0 : commentConfig.disqusShortName) && /*#__PURE__*/index_js_default().createElement(lib/* DiscussionEmbed */.Mq, {
    shortname: commentConfig === null || commentConfig === void 0 ? void 0 : commentConfig.disqusShortName,
    config: disqusConfig
  }), /*#__PURE__*/index_js_default().createElement(components_ArticleNavigator, {
    previousArticle: previous,
    nextArticle: next
  }));
};
/* harmony default export */ const blog_post = (BlogPostTemplate);
const pageQuery = "1969615232";

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
//# sourceMappingURL=component---src-templates-blog-post-tsx.js.map