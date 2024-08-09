"use strict";
exports.id = 970;
exports.ids = [970];
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

/***/ }),

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

/***/ 4748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6783);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5895);
/* harmony import */ var _hooks_useSeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4125);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4345);





const AboutPage = ({
  data,
  location
}) => {
  var _useSeo$site, _data$site$siteMetada, _data$site, _data$site$siteMetada2, _data$site$siteMetada3, _data$site2, _data$site2$siteMetad, _data$site3, _data$site3$siteMetad, _siteMetadata$title, _siteMetadata$descrip;
  const siteMetadata = (_useSeo$site = (0,_hooks_useSeo__WEBPACK_IMPORTED_MODULE_3__/* .useSeo */ .h)().site) === null || _useSeo$site === void 0 ? void 0 : _useSeo$site.siteMetadata;
  const siteUrl = (_data$site$siteMetada = (_data$site = data.site) === null || _data$site === void 0 ? void 0 : (_data$site$siteMetada2 = _data$site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.siteUrl) !== null && _data$site$siteMetada !== void 0 ? _data$site$siteMetada : '';
  const siteTitle = (_data$site$siteMetada3 = (_data$site2 = data.site) === null || _data$site2 === void 0 ? void 0 : (_data$site2$siteMetad = _data$site2.siteMetadata) === null || _data$site2$siteMetad === void 0 ? void 0 : _data$site2$siteMetad.title) !== null && _data$site$siteMetada3 !== void 0 ? _data$site$siteMetada3 : '';
  const siteThumbnail = (_data$site3 = data.site) === null || _data$site3 === void 0 ? void 0 : (_data$site3$siteMetad = _data$site3.siteMetadata) === null || _data$site3$siteMetad === void 0 ? void 0 : _data$site3$siteMetad.thumbnail;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    lang: "en",
    title: (_siteMetadata$title = siteMetadata === null || siteMetadata === void 0 ? void 0 : siteMetadata.title) !== null && _siteMetadata$title !== void 0 ? _siteMetadata$title : '',
    description: (_siteMetadata$descrip = siteMetadata === null || siteMetadata === void 0 ? void 0 : siteMetadata.description) !== null && _siteMetadata$descrip !== void 0 ? _siteMetadata$descrip : '',
    meta: meta,
    noSiteName: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "I am"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque lectus, varius in vehicula id, viverra eu diam. Duis pellentesque rutrum tincidunt. Nullam bibendum gravida blandit. Maecenas quis enim justo. Sed malesuada lectus mi, sit amet hendrerit nisl consequat sed. Proin semper ex nec nisi egestas gravida. Cras mattis feugiat tempor. Donec sollicitudin est metus, nec posuere mauris dictum at. Praesent laoreet massa pulvinar laoreet dapibus. Sed efficitur lacus eu ligula fermentum, ut sodales justo sagittis. Mauris sit amet vehicula enim."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "In sed gravida libero. Curabitur accumsan massa sed iaculis dictum. Cras est elit, dignissim a convallis ac, condimentum nec justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce varius elit massa. Donec feugiat mi orci, sit amet viverra libero vestibulum in. Donec tristique elit non finibus fermentum. Fusce vestibulum accumsan elit id euismod. Donec quis nibh lobortis eros consequat elementum id non lacus. Mauris eget velit pellentesque, gravida ipsum ut, varius leo. Donec eget mi et diam euismod elementum a in massa."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);
const pageQuery = "4280616";

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
//# sourceMappingURL=component---src-pages-about-tsx.js.map