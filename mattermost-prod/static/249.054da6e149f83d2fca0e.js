(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[249],{86664:function(e,t,n){!function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(){}function r(){}r.resetWarningCache=n;var o,i=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o,o}()}(o={exports:{}},o.exports),o.exports);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},d=function(e){return null!==e&&"object"===a(e)},y="[object Object]",m=function e(t,n){if(!d(t)||!d(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===y;if(o!==(Object.prototype.toString.call(n)===y))return!1;if(!o&&!r)return!1;var i=Object.keys(t),a=Object.keys(n);if(i.length!==a.length)return!1;for(var c={},u=0;u<i.length;u+=1)c[i[u]]=!0;for(var s=0;s<a.length;s+=1)c[a[s]]=!0;var l=Object.keys(c);if(l.length!==i.length)return!1;var p=t,f=n;return l.every((function(t){return e(p[t],f[t])}))},v=function(e,t,n){return d(e)?Object.keys(e).reduce((function(r,o){var i=!d(t)||!m(e[o],t[o]);return n.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):i?s(s({},r||{}),{},c({},o,e[o])):r}),null):null},b=function(e){if(null===e||d(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},h=function(e){if(function(e){return d(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(b)};var t=b(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},g=t.createContext(null);g.displayName="ElementsContext";var E=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useRef(!1),a=t.useRef(!0),c=t.useMemo((function(){return h(n)}),[n]),u=l(t.useState((function(){return{stripe:null,elements:null}})),2),s=u[0],p=u[1],d=f(n);null!==d&&d!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),i.current||("sync"===c.tag&&(i.current=!0,p({stripe:c.stripe,elements:c.stripe.elements(r)})),"async"===c.tag&&(i.current=!0,c.stripePromise.then((function(e){e&&a.current&&p({stripe:e,elements:e.elements(r)})}))));var y=f(r);return t.useEffect((function(){if(s.elements){var e=v(r,y,["clientSecret","fonts"]);e&&s.elements.update(e)}}),[r,y,s.elements]),t.useEffect((function(){return function(){a.current=!1}}),[]),t.useEffect((function(){var e=s.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.6.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.6.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[s.stripe]),t.createElement(g.Provider,{value:s},o)};E.propTypes={stripe:i.any,options:i.object};var w=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(g),e)},S=function(e){return(0,e.children)(w("mounts <ElementsConsumer>"))};S.propTypes={children:i.func.isRequired};var j=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},O=function(){},k=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),a=n?function(e){w("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,i=n.className,a=n.options,c=void 0===a?{}:a,u=n.onBlur,s=void 0===u?O:u,l=n.onFocus,p=void 0===l?O:l,d=n.onReady,y=void 0===d?O:d,m=n.onChange,b=void 0===m?O:m,h=n.onEscape,g=void 0===h?O:h,E=n.onClick,S=void 0===E?O:E,k=w("mounts <".concat(o,">")).elements,P=t.useRef(null),C=t.useRef(null),A=j(y),_=j(s),x=j(p),R=j(S),T=j(b),B=j(g);t.useLayoutEffect((function(){if(null==P.current&&k&&null!=C.current){var t=k.create(e,c);P.current=t,t.mount(C.current),t.on("ready",(function(){return A(t)})),t.on("change",T),t.on("blur",_),t.on("focus",x),t.on("escape",B),t.on("click",R)}}));var I=f(c);return t.useEffect((function(){if(P.current){var e=v(c,I,["paymentRequest"]);e&&P.current.update(e)}}),[c,I]),t.useLayoutEffect((function(){return function(){P.current&&P.current.destroy()}}),[]),t.createElement("div",{id:r,className:i,ref:C})};return a.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onClick:i.func,options:i.object},a.displayName=o,a.__elementType=e,a},P="undefined"==typeof window,C=k("auBankAccount",P),A=k("card",P),_=k("cardNumber",P),x=k("cardExpiry",P),R=k("cardCvc",P),T=k("fpxBank",P),B=k("iban",P),I=k("idealBank",P),N=k("p24Bank",P),F=k("epsBank",P),L=k("payment",P),W=k("paymentRequestButton",P),q=k("linkAuthentication",P),D=k("shippingAddress",P),M=k("afterpayClearpayMessage",P);e.AfterpayClearpayMessageElement=M,e.AuBankAccountElement=C,e.CardCvcElement=R,e.CardElement=A,e.CardExpiryElement=x,e.CardNumberElement=_,e.Elements=E,e.ElementsConsumer=S,e.EpsBankElement=F,e.FpxBankElement=T,e.IbanElement=B,e.IdealBankElement=I,e.LinkAuthenticationElement=q,e.P24BankElement=N,e.PaymentElement=L,e.PaymentRequestButtonElement=W,e.ShippingAddressElement=D,e.useElements=function(){return w("calls useElements()").elements},e.useStripe=function(){return w("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(67294))},47597:(e,t)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,o="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,u=function(e){return null!==c?c:c=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(a),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(i.test(n.src))return n}return null}();r&&e?console.warn(a):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(e){return void n(e)}else t(null)}))},s=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.20.3",startTime:t})}(r,n),r},l=!1,p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var o=Date.now();return u(r).then((function(e){return s(e,t,o)}))};p.setLoadParameters=function(e){if(l)throw new Error("You cannot change load parameters after calling loadStripe");r=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)}(e)},t.loadStripe=p},97894:(e,t,n)=>{e.exports=n(47597)}}]);
//# sourceMappingURL=249.054da6e149f83d2fca0e.js.map