"use strict";var precacheConfig=[["/index.html","68570c81c7130da3965438a62050f517"],["/static/css/main.715d774f.css","2079586e5c58c7f340226378c3287b24"],["/static/js/main.4575ddfe.js","fbe21ccd970ffa704a8cf3f5a58bec7b"],["/static/media/Scout.033c1362.jpg","033c136279c9ab04c20ae5c5a94a5dfe"],["/static/media/bon.f3ef3fc1.jpg","f3ef3fc1846620fbca55748e1d4c84d0"],["/static/media/facebook.3d3d0b30.svg","3d3d0b30c3a67c53605112762f4a2381"],["/static/media/green.76267bce.jpg","76267bced7485c24089dcd0586463e51"],["/static/media/insta.761a2fd0.png","761a2fd0696d47316a29c823dda2ce55"],["/static/media/jimmyOne.b0f5364b.jpg","b0f5364bc987d2257fa956c8ade99e00"],["/static/media/kitaOne.ab29160d.jpg","ab29160d97a1c141378318c12d693029"],["/static/media/logo2.e3e87a14.png","e3e87a1400876a7a42746c063399274e"],["/static/media/rex.c7d6c584.jpg","c7d6c584ccb9aa1262e30d7847f03db5"],["/static/media/rhodaTwo.687bb1c3.jpg","687bb1c3d6fc99ffdbce7571e95df9f9"],["/static/media/roy.aa8ed4c0.jpg","aa8ed4c0b09d5b072ece1666a3ead405"],["/static/media/wendy.ddfdc876.jpg","ddfdc876f87e98b8bb8dc9b8fd677b46"],["/static/media/white.e01d9a58.jpg","e01d9a5836e6eddb6fd7eff30f051809"],["/static/media/zenaOne.e941eac3.jpg","e941eac34526da8fc8f32b5b0850ebb2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});