(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{2469:function(e,t,n){"use strict";n.d(t,{y:function(){return h},Z:function(){return _}});var r=n(5893),a=n(7294),o=n(9008),i=n(8721),l=n.n(i),s=n(5794),c=n.n(s),u=n(1664),f=n(1163),d="blueputty01",h="blueputty01";function _(e){var t=e.children,n=(e.home,function(e){var t=e.children,n=e.href,a=e.className;return(0,r.jsx)("li",{className:[i.asPath==n?l().active:"",a].join(" "),children:(0,r.jsx)(u.default,{href:n,children:t})})}),i=(0,f.useRouter)(),s=(0,a.useState)(!1),_=s[0],p=s[1];return(0,a.useEffect)((function(){window.addEventListener("scroll",(function(){p(window.scrollY>30)}))}),[]),(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"blueputty01 personal website"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(h),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"google-site-verification",content:"J9pzx4gcsh-JI5UnduPTG0qNCudH6hNqODwdtrzdDDw"}),(0,r.jsx)("meta",{name:"og:title",content:h})]}),(0,r.jsx)("header",{className:_?l().shadow:"",children:(0,r.jsx)("div",{className:l().header,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(u.default,{href:"/",children:(0,r.jsxs)("a",{className:l().logo,children:[(0,r.jsx)("img",{src:"/images/profile.png",className:c().borderCircle,height:30,width:30,alt:d}),(0,r.jsx)("span",{className:l().logoText,children:d})]})})}),(0,r.jsx)(n,{href:"/contact",className:l().push,children:"Contact"}),(0,r.jsx)(n,{href:"/privacy",children:"Privacy"})]})})}),(0,r.jsx)("div",{className:l().fadeLeft}),(0,r.jsx)("div",{className:l().fadeRight}),(0,r.jsx)("main",{children:t}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("div",{className:l().footerContainer,children:[(0,r.jsxs)("div",{className:l().col,children:[(0,r.jsx)("h5",{children:"Form Octopus"}),(0,r.jsx)(u.default,{href:"/privacy",children:"Privacy"}),(0,r.jsx)(u.default,{href:"/terms",children:"Terms"})]}),(0,r.jsxs)("div",{className:l().col,children:[(0,r.jsx)("h5",{children:"Tabs Aside"}),(0,r.jsx)(u.default,{href:"/privacy",children:"Privacy"}),(0,r.jsx)(u.default,{href:"/terms",children:"Terms"})]})]}),(0,r.jsx)("div",{className:l().footerContainer,children:(0,r.jsx)("p",{children:"Built with \u2665 and \u2615."})})]})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),l=n(387),s=n(7190);var c={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,h=f.as,_=e.children,p=e.replace,v=e.shallow,g=e.scroll,m=e.locale;"string"===typeof _&&(_=o.default.createElement("a",null,_));var y=(t=o.default.Children.only(_))&&"object"===typeof t&&t.ref,x=r(s.useIntersection({rootMargin:"200px"}),2),j=x[0],b=x[1],w=o.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);o.default.useEffect((function(){var e=b&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,r=c[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,b,m,n,a]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:l}))}(e,a,d,h,p,v,g,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(h,N,a&&a.locales,a&&a.domainLocales);C.href=L||i.addBasePath(i.addLocale(h,N,a&&a.defaultLocale))}return o.default.cloneElement(t,C)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),c=r(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(7294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},8721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",push:"layout_push__2FFZa",logo:"layout_logo__GTPGC",logoText:"layout_logoText__aydjd",active:"layout_active__YGCU_",shadow:"layout_shadow__52wwW",fadeLeft:"layout_fadeLeft__YD1Jn",fadeRight:"layout_fadeRight__e_xCp",footerContainer:"layout_footerContainer__O7UyO",col:"layout_col__2QHYb"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",verticalCenter:"utils_verticalCenter__Ni8J1",horizontalCenter:"utils_horizontalCenter__o_VG8"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}}]);