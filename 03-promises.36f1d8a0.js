var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".form"),{delay:l,step:s,amount:a}=r.elements;function d(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();let o=+l.value;const t=+s.value,n=+a.value;for(let e=1;e<=n;e+=1)d(e,o).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.36f1d8a0.js.map
