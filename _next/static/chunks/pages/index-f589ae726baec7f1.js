(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},2469:function(e,t,n){"use strict";n.d(t,{y:function(){return f},Z:function(){return d}});var r=n(5893),i=n(9008),o=n(4034),a=n.n(o),l=n(7288),c=n.n(l),s=n(1664),u="blueputty01",f="blueputty01";function d(e){var t=e.children,n=e.home;return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"blueputty01 personal website"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(f),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"google-site-verification",content:"J9pzx4gcsh-JI5UnduPTG0qNCudH6hNqODwdtrzdDDw"}),(0,r.jsx)("meta",{name:"og:title",content:f})]}),(0,r.jsxs)("header",{className:a().header,children:[n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/images/profile.png",className:c().borderCircle,height:100,width:100,alt:u}),(0,r.jsx)("h1",{className:c().heading2Xl,children:u})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:"/images/profile.png",className:c().borderCircle,height:30,width:30,alt:u}),(0,r.jsx)("a",{className:c().colorInherit,children:u})]})})}),(0,r.jsx)(s.default,{href:"contact",children:"Contact"}),(0,r.jsx)(s.default,{href:"privacy",children:"Privacy Policy"}),(0,r.jsx)(s.default,{href:"terms",children:"Terms of Service"})]}),(0,r.jsx)("main",{children:t}),!n&&(0,r.jsx)("div",{className:a().backToHome,children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back to home"})})}),(0,r.jsx)("footer",{children:"Built with \u2665 by blueputty01 and powered by Next.js (along with \u2615)"})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),l=n(387),c=n(7190);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=l.useRouter(),f=o.default.useMemo((function(){var t=r(a.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?a.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,g=e.shallow,_=e.scroll,m=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),b=x[0],j=x[1],w=o.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);o.default.useEffect((function(){var e=j&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:i&&i.locale,r=s[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,d,h,{locale:t})}),[h,d,j,m,n,i]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l}))}(e,i,d,h,v,g,_,m)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:i&&i.locale,E=i&&i.isLocaleDomain&&a.getDomainLocale(h,N,i&&i.locales,i&&i.domainLocales);k.href=E||a.addBasePath(a.addLocale(h,N,i&&i.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),s=r(i.useState(!1),2),u=s[0],f=s[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(9008),o=n(2469),a=n(7288),l=n.n(a);n(1664);function c(){return(0,r.jsxs)(o.Z,{home:!0,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:o.y})}),(0,r.jsx)("section",{className:l().headingMd,children:(0,r.jsx)("p",{children:"Welcome!"})})]})}},4034:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},7288:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);