!function(){"use strict";var e,a=window.location,r=window.document,o=r.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event",s="false";try{s=window.localStorage.plausible_ignore}catch(e){}function c(e){console.warn("Ignoring Event: "+e)}function t(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(a.hostname)||"file:"===a.protocol)return c("localhost");if(!(window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==s)return c("localStorage flag");var i={};i.n=e,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&t&&t.callback&&t.callback()}}}function i(){e=a.pathname,t("pageview")}function n(e){for(var t=e.target,i="auxclick"==e.type&&2==e.which,n="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==a.host&&((i||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){a.href=t.href},150),e.preventDefault()))}window.addEventListener("hashchange",i),r.addEventListener("click",n),r.addEventListener("auxclick",n);var d=window.plausible&&window.plausible.q||[];window.plausible=t;for(var p=0;p<d.length;p++)t.apply(this,d[p]);"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){e||"visible"!==r.visibilityState||i()}):i()}();