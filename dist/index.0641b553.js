// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _copilotWeb = require("@fabric-msft/copilot-web");
var _theme = require("@horizon-msft/theme");
(0, _copilotWeb.TextareaDefinition).define(customElements);
(0, _copilotWeb.CitationDefinition).define(customElements);
(0, _copilotWeb.CitationReferenceDefinition).define(customElements);
(0, _copilotWeb.ReferenceDefinition).define(customElements);
const components = /* html */ `
      <div>
        <fabric-textarea></fabric-textarea>
      </div>
      <div>
        <fabric-citation href="/">
          <span slot="start">Citation</span>
          <span slot="index">1</span>
          <div slot="popover">Popover Content</div>
        </fabric-citation>
      </div>
      <div>
        <fabric-citation>
          <span slot="start">Citation With Reference</span>
          <span slot="index">2</span>
          <fabric-citation-reference citation-href="https://bing.com">
            <span slot="index">1</span>
            <span slot="label">Citation Reference</span>
            <span slot="metadata-text-one">Citation Metadata One</span>
            <span slot="metadata-text-two">Citation Metadata Two</span>
            <span slot="excerpt">Article Excerpt</span>
            <svg
              slot="reference-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 7H15.5C14.673 7 14 6.327 14 5.5V2H6V18H18V7Z"
                fill="white"
              />
              <path
                d="M18 5.99997V5.70697L15 2.70697V5.49997C15 5.77497 15.225 5.99997 15.5 5.99997H18Z"
                fill="white"
              />
              <path
                opacity="0.67"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.707 5L15 1.293C14.8125 1.10545 14.5582 1.00006 14.293 1H6C5.44772 1 5 1.44772 5 2V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V5.707C18.9999 5.4418 18.8945 5.18749 18.707 5ZM18 5.707V6H15.5C15.2241 5.99945 15.0006 5.77591 15 5.5V2.707L18 5.707ZM6 2.2V17.8C6 17.9105 6.08954 18 6.2 18H17.8C17.9105 18 18 17.9105 18 17.8V7H15.5C14.6716 7 14 6.32843 14 5.5V2H6.2C6.09 2 6 2.09 6 2.2Z"
                fill="#605E5C"
              />
              <path
                d="M16.5 12H12V13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12Z"
                fill="#185ABD"
              />
              <path
                d="M16.5 10H12V11H16.5C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10Z"
                fill="#2B7CD3"
              />
              <path
                d="M16.5 8H12V9H16.5C16.7761 9 17 8.77614 17 8.5C17 8.22386 16.7761 8 16.5 8Z"
                fill="#41A5EE"
              />
              <path
                d="M2 16H10C10.5523 16 11 15.5523 11 15V7C11 6.44772 10.5523 6 10 6H2C1.44772 6 1 6.44772 1 7V15C1 15.5523 1.44772 16 2 16Z"
                fill="#185ABD"
              />
              <path
                d="M7.20988 13.936L5.99988 9.49599L4.79388 13.936H3.91788L2.75488 8.09399H3.64088L4.44888 11.92L5.52288 8.09399H6.38888L7.54188 12.01L8.34388 8.09399H9.22888L8.08488 13.936H7.20988Z"
                fill="white"
              />
            </svg>
          </fabric-citation-reference>
        </fabric-citation>
      </div>
      <div>
        <fabric-reference>
          <span slot="index">3</span>
          <span slot="label">fabric Reference</span>
          <span slot="metadata-text-one">Text One</span>
          <span slot="metadata-text-two">Text Two</span>
          <span slot="excerpt">Excerpt</span>
          <svg
            slot="reference-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7H15.5C14.673 7 14 6.327 14 5.5V2H6V18H18V7Z"
              fill="white"
            />
            <path
              d="M18 5.99997V5.70697L15 2.70697V5.49997C15 5.77497 15.225 5.99997 15.5 5.99997H18Z"
              fill="white"
            />
            <path
              opacity="0.67"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.707 5L15 1.293C14.8125 1.10545 14.5582 1.00006 14.293 1H6C5.44772 1 5 1.44772 5 2V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V5.707C18.9999 5.4418 18.8945 5.18749 18.707 5ZM18 5.707V6H15.5C15.2241 5.99945 15.0006 5.77591 15 5.5V2.707L18 5.707ZM6 2.2V17.8C6 17.9105 6.08954 18 6.2 18H17.8C17.9105 18 18 17.9105 18 17.8V7H15.5C14.6716 7 14 6.32843 14 5.5V2H6.2C6.09 2 6 2.09 6 2.2Z"
              fill="#605E5C"
            />
            <path
              d="M16.5 12H12V13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12Z"
              fill="#185ABD"
            />
            <path
              d="M16.5 10H12V11H16.5C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10Z"
              fill="#2B7CD3"
            />
            <path
              d="M16.5 8H12V9H16.5C16.7761 9 17 8.77614 17 8.5C17 8.22386 16.7761 8 16.5 8Z"
              fill="#41A5EE"
            />
            <path
              d="M2 16H10C10.5523 16 11 15.5523 11 15V7C11 6.44772 10.5523 6 10 6H2C1.44772 6 1 6.44772 1 7V15C1 15.5523 1.44772 16 2 16Z"
              fill="#185ABD"
            />
            <path
              d="M7.20988 13.936L5.99988 9.49599L4.79388 13.936H3.91788L2.75488 8.09399H3.64088L4.44888 11.92L5.52288 8.09399H6.38888L7.54188 12.01L8.34388 8.09399H9.22888L8.08488 13.936H7.20988Z"
              fill="white"
            />
          </svg>
        </fabric-reference>
      </div>
`;
function injectComponents() {
    const main = document.querySelector("main");
    main.innerHTML = components;
}
(0, _theme.setTheme)((0, _theme.fabricLightTheme), undefined, injectComponents);

},{"@horizon-msft/theme":"cpccV","@fabric-msft/copilot-web":"h0SmZ"}],"cpccV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _theme = require("./theme");
parcelHelpers.exportAll(_theme, exports);

},{"./theme":"ewXaA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewXaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fabricDarkTheme", ()=>fabricDarkTheme);
parcelHelpers.export(exports, "fabricLightTheme", ()=>fabricLightTheme);
parcelHelpers.export(exports, "setTheme", ()=>setTheme);
parcelHelpers.export(exports, "webDarkTheme", ()=>(0, _tokens.webDarkTheme));
parcelHelpers.export(exports, "webLightTheme", ()=>(0, _tokens.webLightTheme));
var _tokens = require("@fluentui/tokens");
const brandFabric = {
    10: `#001919`,
    20: `#012826`,
    30: `#01322E`,
    40: `#033F38`,
    50: `#054D43`,
    60: `#0A5C50`,
    70: `#0C695A`,
    80: `#117865`,
    90: `#1F937E`,
    100: `#2AAC94`,
    110: `#3ABB9F`,
    120: `#52C7AA`,
    130: `#78D3B9`,
    140: `#9EE0CB`,
    150: `#C0ECDD`,
    160: `#E3F7Ef`
};
const fabricLightTheme = (0, _tokens.createLightTheme)(brandFabric);
const fabricDarkTheme = (0, _tokens.createDarkTheme)(brandFabric);
/**
 * setTheme

 * Set the theme to the root or a specific element. Defaults to setting the theme to the document element.
 * @param theme: FluentUI theme object
 * @param target: The target element to set the theme to. Defaults to the document element.
 * @param callback: A callback function to run after the theme is set. Usefule for running an injector to inject components after theme is loaded.
 */ function setTheme(theme, target, callback) {
    let targetElement = null;
    if (target) {
        if (target === "root") {
            const cssVariables = Object.entries(theme).map(([key, value])=>`--${key}: ${value};`).join(" ");
            const styleElement = document.createElement("style");
            styleElement.innerHTML = `:root { ${cssVariables} }`;
            document.head.appendChild(styleElement);
        } else targetElement = document.querySelector(target);
    } else targetElement = document.documentElement;
    if (targetElement) Object.entries(theme).forEach(([key, value])=>{
        targetElement.style.setProperty(`--${key}`, value);
    });
    callback && callback();
    document.dispatchEvent(new CustomEvent("themeLoaded", {
        detail: {
            target: target || document.documentElement
        },
        bubbles: true
    }));
}

},{"@fluentui/tokens":"jELFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jELFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "teamsDarkTheme", ()=>(0, _index.teamsDarkTheme));
parcelHelpers.export(exports, "teamsHighContrastTheme", ()=>(0, _index.teamsHighContrastTheme));
parcelHelpers.export(exports, "teamsLightTheme", ()=>(0, _index.teamsLightTheme));
parcelHelpers.export(exports, "webDarkTheme", ()=>(0, _index.webDarkTheme));
parcelHelpers.export(exports, "webLightTheme", ()=>(0, _index.webLightTheme));
parcelHelpers.export(exports, "createDarkTheme", ()=>(0, _index1.createDarkTheme));
parcelHelpers.export(exports, "createHighContrastTheme", ()=>(0, _index1.createHighContrastTheme));
parcelHelpers.export(exports, "createLightTheme", ()=>(0, _index1.createLightTheme));
parcelHelpers.export(exports, "createTeamsDarkTheme", ()=>(0, _index1.createTeamsDarkTheme));
parcelHelpers.export(exports, "themeToTokensObject", ()=>(0, _themeToTokensObject.themeToTokensObject));
parcelHelpers.export(exports, "tokens", ()=>(0, _tokens.tokens));
parcelHelpers.export(exports, "typographyStyles", ()=>(0, _index2.typographyStyles));
var _index = require("./themes/index");
var _index1 = require("./utils/index");
var _themeToTokensObject = require("./themeToTokensObject");
var _tokens = require("./tokens");
var _index2 = require("./global/index");

},{"./themes/index":false,"./utils/index":"lu6Ci","./themeToTokensObject":false,"./tokens":false,"./global/index":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lu6Ci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createLightTheme = require("./createLightTheme");
parcelHelpers.exportAll(_createLightTheme, exports);
var _createDarkTheme = require("./createDarkTheme");
parcelHelpers.exportAll(_createDarkTheme, exports);
var _createTeamsDarkTheme = require("./createTeamsDarkTheme");
parcelHelpers.exportAll(_createTeamsDarkTheme, exports);
var _createHighContrastTheme = require("./createHighContrastTheme");
parcelHelpers.exportAll(_createHighContrastTheme, exports);

},{"./createLightTheme":"e1ubi","./createDarkTheme":"lDEZ7","./createTeamsDarkTheme":false,"./createHighContrastTheme":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1ubi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLightTheme", ()=>createLightTheme);
var _lightColorPalette = require("../alias/lightColorPalette");
var _lightColor = require("../alias/lightColor");
var _index = require("../global/index");
var _shadows = require("./shadows");
var _durations = require("../global/durations");
var _curves = require("../global/curves");
var _spacings = require("../global/spacings");
const createLightTheme = (brand)=>{
    const colorTokens = (0, _lightColor.generateColorTokens)(brand);
    return {
        ...(0, _index.borderRadius),
        ...(0, _index.fontSizes),
        ...(0, _index.lineHeights),
        ...(0, _index.fontFamilies),
        ...(0, _index.fontWeights),
        ...(0, _index.strokeWidths),
        ...(0, _spacings.horizontalSpacings),
        ...(0, _spacings.verticalSpacings),
        ...(0, _durations.durations),
        ...(0, _curves.curves),
        ...colorTokens,
        ...(0, _lightColorPalette.colorPaletteTokens),
        ...(0, _lightColorPalette.colorStatusTokens),
        ...(0, _shadows.createShadowTokens)(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...(0, _shadows.createShadowTokens)(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
    };
};

},{"../alias/lightColorPalette":"iU6ZT","../alias/lightColor":"7Vh0j","../global/index":"dc8ul","./shadows":"kLoJO","../global/durations":"haaZB","../global/curves":"9yQtW","../global/spacings":"geTNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iU6ZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorPaletteTokens", ()=>colorPaletteTokens);
parcelHelpers.export(exports, "colorStatusTokens", ()=>colorStatusTokens);
var _colorPalette = require("../global/colorPalette");
var _sharedColorNames = require("../sharedColorNames");
var _statusColorMapping = require("../statusColorMapping");
const statusColorPaletteTokens = (0, _sharedColorNames.statusSharedColorNames).reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background1`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint60,
        [`colorPalette${color}Background2`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint40,
        [`colorPalette${color}Background3`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary,
        [`colorPalette${color}Foreground1`]: (0, _colorPalette.statusSharedColors)[sharedColor].shade10,
        [`colorPalette${color}Foreground2`]: (0, _colorPalette.statusSharedColors)[sharedColor].shade30,
        [`colorPalette${color}Foreground3`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary,
        [`colorPalette${color}BorderActive`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary,
        [`colorPalette${color}Border1`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint40,
        [`colorPalette${color}Border2`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patch for yellow
statusColorPaletteTokens.colorPaletteYellowForeground1 = (0, _colorPalette.statusSharedColors).yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = (0, _colorPalette.statusSharedColors).red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = (0, _colorPalette.statusSharedColors).green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = (0, _colorPalette.statusSharedColors).yellow.tint40;
const personaColorPaletteTokens = (0, _sharedColorNames.personaSharedColorNames).reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background2`]: (0, _colorPalette.personaSharedColors)[sharedColor].tint40,
        [`colorPalette${color}Foreground2`]: (0, _colorPalette.personaSharedColors)[sharedColor].shade30,
        [`colorPalette${color}BorderActive`]: (0, _colorPalette.personaSharedColors)[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
const colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
};
const colorStatusTokens = Object.entries((0, _statusColorMapping.statusColorMapping)).reduce((acc, [statusColor, sharedColor])=>{
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    // TODO: double check the mapping with design
    const statusColorTokens = {
        [`colorStatus${color}Background1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint60,
        [`colorStatus${color}Background2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint40,
        [`colorStatus${color}Background3`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary,
        [`colorStatus${color}Foreground1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].shade10,
        [`colorStatus${color}Foreground2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].shade30,
        [`colorStatus${color}Foreground3`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary,
        [`colorStatus${color}ForegroundInverted`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint30,
        [`colorStatus${color}BorderActive`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary,
        [`colorStatus${color}Border1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint40,
        [`colorStatus${color}Border2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary
    };
    return Object.assign(acc, statusColorTokens);
}, {});
// one-off overrides for colorStatus tokens
colorStatusTokens.colorStatusWarningForeground1 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).warning].shade20;
colorStatusTokens.colorStatusWarningForeground3 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).warning].shade20;
colorStatusTokens.colorStatusWarningBorder2 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).warning].shade20;

},{"../global/colorPalette":"4YIFe","../sharedColorNames":"koxOM","../statusColorMapping":"c4B9M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YIFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statusSharedColors", ()=>statusSharedColors);
parcelHelpers.export(exports, "personaSharedColors", ()=>personaSharedColors);
parcelHelpers.export(exports, "mappedStatusColors", ()=>mappedStatusColors);
var _colors = require("./colors");
const statusSharedColors = {
    red: (0, _colors.red),
    green: (0, _colors.green),
    darkOrange: (0, _colors.darkOrange),
    yellow: (0, _colors.yellow),
    berry: (0, _colors.berry),
    lightGreen: (0, _colors.lightGreen),
    marigold: (0, _colors.marigold)
};
const personaSharedColors = {
    darkRed: (0, _colors.darkRed),
    cranberry: (0, _colors.cranberry),
    pumpkin: (0, _colors.pumpkin),
    peach: (0, _colors.peach),
    gold: (0, _colors.gold),
    brass: (0, _colors.brass),
    brown: (0, _colors.brown),
    forest: (0, _colors.forest),
    seafoam: (0, _colors.seafoam),
    darkGreen: (0, _colors.darkGreen),
    lightTeal: (0, _colors.lightTeal),
    teal: (0, _colors.teal),
    steel: (0, _colors.steel),
    blue: (0, _colors.blue),
    royalBlue: (0, _colors.royalBlue),
    cornflower: (0, _colors.cornflower),
    navy: (0, _colors.navy),
    lavender: (0, _colors.lavender),
    purple: (0, _colors.purple),
    grape: (0, _colors.grape),
    lilac: (0, _colors.lilac),
    pink: (0, _colors.pink),
    magenta: (0, _colors.magenta),
    plum: (0, _colors.plum),
    beige: (0, _colors.beige),
    mink: (0, _colors.mink),
    platinum: (0, _colors.platinum),
    anchor: (0, _colors.anchor)
};
const mappedStatusColors = {
    cranberry: (0, _colors.cranberry),
    green: (0, _colors.green),
    orange: (0, _colors.orange)
};

},{"./colors":"lVTZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVTZS":[function(require,module,exports) {
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "grey", ()=>grey);
parcelHelpers.export(exports, "whiteAlpha", ()=>whiteAlpha);
parcelHelpers.export(exports, "blackAlpha", ()=>blackAlpha);
parcelHelpers.export(exports, "grey10Alpha", ()=>grey10Alpha);
parcelHelpers.export(exports, "grey12Alpha", ()=>grey12Alpha);
parcelHelpers.export(exports, "grey14Alpha", ()=>grey14Alpha);
parcelHelpers.export(exports, "white", ()=>white);
parcelHelpers.export(exports, "black", ()=>black);
parcelHelpers.export(exports, "hcHyperlink", ()=>hcHyperlink);
parcelHelpers.export(exports, "hcHighlight", ()=>hcHighlight);
parcelHelpers.export(exports, "hcDisabled", ()=>hcDisabled);
parcelHelpers.export(exports, "hcCanvas", ()=>hcCanvas);
parcelHelpers.export(exports, "hcCanvasText", ()=>hcCanvasText);
parcelHelpers.export(exports, "hcHighlightText", ()=>hcHighlightText);
parcelHelpers.export(exports, "hcButtonText", ()=>hcButtonText);
parcelHelpers.export(exports, "hcButtonFace", ()=>hcButtonFace);
parcelHelpers.export(exports, "darkRed", ()=>darkRed);
parcelHelpers.export(exports, "burgundy", ()=>burgundy);
parcelHelpers.export(exports, "cranberry", ()=>cranberry);
parcelHelpers.export(exports, "red", ()=>red);
parcelHelpers.export(exports, "darkOrange", ()=>darkOrange);
parcelHelpers.export(exports, "bronze", ()=>bronze);
parcelHelpers.export(exports, "pumpkin", ()=>pumpkin);
parcelHelpers.export(exports, "orange", ()=>orange);
parcelHelpers.export(exports, "peach", ()=>peach);
parcelHelpers.export(exports, "marigold", ()=>marigold);
parcelHelpers.export(exports, "yellow", ()=>yellow);
parcelHelpers.export(exports, "gold", ()=>gold);
parcelHelpers.export(exports, "brass", ()=>brass);
parcelHelpers.export(exports, "brown", ()=>brown);
parcelHelpers.export(exports, "darkBrown", ()=>darkBrown);
parcelHelpers.export(exports, "lime", ()=>lime);
parcelHelpers.export(exports, "forest", ()=>forest);
parcelHelpers.export(exports, "seafoam", ()=>seafoam);
parcelHelpers.export(exports, "lightGreen", ()=>lightGreen);
parcelHelpers.export(exports, "green", ()=>green);
parcelHelpers.export(exports, "darkGreen", ()=>darkGreen);
parcelHelpers.export(exports, "lightTeal", ()=>lightTeal);
parcelHelpers.export(exports, "teal", ()=>teal);
parcelHelpers.export(exports, "darkTeal", ()=>darkTeal);
parcelHelpers.export(exports, "cyan", ()=>cyan);
parcelHelpers.export(exports, "steel", ()=>steel);
parcelHelpers.export(exports, "lightBlue", ()=>lightBlue);
parcelHelpers.export(exports, "blue", ()=>blue);
parcelHelpers.export(exports, "royalBlue", ()=>royalBlue);
parcelHelpers.export(exports, "darkBlue", ()=>darkBlue);
parcelHelpers.export(exports, "cornflower", ()=>cornflower);
parcelHelpers.export(exports, "navy", ()=>navy);
parcelHelpers.export(exports, "lavender", ()=>lavender);
parcelHelpers.export(exports, "purple", ()=>purple);
parcelHelpers.export(exports, "darkPurple", ()=>darkPurple);
parcelHelpers.export(exports, "orchid", ()=>orchid);
parcelHelpers.export(exports, "grape", ()=>grape);
parcelHelpers.export(exports, "berry", ()=>berry);
parcelHelpers.export(exports, "lilac", ()=>lilac);
parcelHelpers.export(exports, "pink", ()=>pink);
parcelHelpers.export(exports, "hotPink", ()=>hotPink);
parcelHelpers.export(exports, "magenta", ()=>magenta);
parcelHelpers.export(exports, "plum", ()=>plum);
parcelHelpers.export(exports, "beige", ()=>beige);
parcelHelpers.export(exports, "mink", ()=>mink);
parcelHelpers.export(exports, "silver", ()=>silver);
parcelHelpers.export(exports, "platinum", ()=>platinum);
parcelHelpers.export(exports, "anchor", ()=>anchor);
parcelHelpers.export(exports, "charcoal", ()=>charcoal);
const grey = {
    "2": "#050505",
    "4": "#0a0a0a",
    "6": "#0f0f0f",
    "8": "#141414",
    "10": "#1a1a1a",
    "12": "#1f1f1f",
    "14": "#242424",
    "16": "#292929",
    "18": "#2e2e2e",
    "20": "#333333",
    "22": "#383838",
    "24": "#3d3d3d",
    "26": "#424242",
    "28": "#474747",
    "30": "#4d4d4d",
    "32": "#525252",
    "34": "#575757",
    "36": "#5c5c5c",
    "38": "#616161",
    "40": "#666666",
    "42": "#6b6b6b",
    "44": "#707070",
    "46": "#757575",
    "48": "#7a7a7a",
    "50": "#808080",
    "52": "#858585",
    "54": "#8a8a8a",
    "56": "#8f8f8f",
    "58": "#949494",
    "60": "#999999",
    "62": "#9e9e9e",
    "64": "#a3a3a3",
    "66": "#a8a8a8",
    "68": "#adadad",
    "70": "#b3b3b3",
    "72": "#b8b8b8",
    "74": "#bdbdbd",
    "76": "#c2c2c2",
    "78": "#c7c7c7",
    "80": "#cccccc",
    "82": "#d1d1d1",
    "84": "#d6d6d6",
    "86": "#dbdbdb",
    "88": "#e0e0e0",
    "90": "#e6e6e6",
    "92": "#ebebeb",
    "94": "#f0f0f0",
    "96": "#f5f5f5",
    "98": "#fafafa"
};
const whiteAlpha = {
    "5": "rgba(255, 255, 255, 0.05)",
    "10": "rgba(255, 255, 255, 0.1)",
    "20": "rgba(255, 255, 255, 0.2)",
    "30": "rgba(255, 255, 255, 0.3)",
    "40": "rgba(255, 255, 255, 0.4)",
    "50": "rgba(255, 255, 255, 0.5)",
    "60": "rgba(255, 255, 255, 0.6)",
    "70": "rgba(255, 255, 255, 0.7)",
    "80": "rgba(255, 255, 255, 0.8)",
    "90": "rgba(255, 255, 255, 0.9)"
};
const blackAlpha = {
    "5": "rgba(0, 0, 0, 0.05)",
    "10": "rgba(0, 0, 0, 0.1)",
    "20": "rgba(0, 0, 0, 0.2)",
    "30": "rgba(0, 0, 0, 0.3)",
    "40": "rgba(0, 0, 0, 0.4)",
    "50": "rgba(0, 0, 0, 0.5)",
    "60": "rgba(0, 0, 0, 0.6)",
    "70": "rgba(0, 0, 0, 0.7)",
    "80": "rgba(0, 0, 0, 0.8)",
    "90": "rgba(0, 0, 0, 0.9)"
};
const grey10Alpha = {
    "5": "rgba(26, 26, 26, 0.05)",
    "10": "rgba(26, 26, 26, 0.1)",
    "20": "rgba(26, 26, 26, 0.2)",
    "30": "rgba(26, 26, 26, 0.3)",
    "40": "rgba(26, 26, 26, 0.4)",
    "50": "rgba(26, 26, 26, 0.5)",
    "60": "rgba(26, 26, 26, 0.6)",
    "70": "rgba(26, 26, 26, 0.7)",
    "80": "rgba(26, 26, 26, 0.8)",
    "90": "rgba(26, 26, 26, 0.9)"
};
const grey12Alpha = {
    "5": "rgba(31, 31, 31, 0.05)",
    "10": "rgba(31, 31, 31, 0.1)",
    "20": "rgba(31, 31, 31, 0.2)",
    "30": "rgba(31, 31, 31, 0.3)",
    "40": "rgba(31, 31, 31, 0.4)",
    "50": "rgba(31, 31, 31, 0.5)",
    "60": "rgba(31, 31, 31, 0.6)",
    "70": "rgba(31, 31, 31, 0.7)",
    "80": "rgba(31, 31, 31, 0.8)",
    "90": "rgba(31, 31, 31, 0.9)"
};
const grey14Alpha = {
    "5": "rgba(36, 36, 36, 0.05)",
    "10": "rgba(36, 36, 36, 0.1)",
    "20": "rgba(36, 36, 36, 0.2)",
    "30": "rgba(36, 36, 36, 0.3)",
    "40": "rgba(36, 36, 36, 0.4)",
    "50": "rgba(36, 36, 36, 0.5)",
    "60": "rgba(36, 36, 36, 0.6)",
    "70": "rgba(36, 36, 36, 0.7)",
    "80": "rgba(36, 36, 36, 0.8)",
    "90": "rgba(36, 36, 36, 0.9)"
};
const white = "#ffffff";
const black = "#000000";
const hcHyperlink = "#ffff00";
const hcHighlight = "#1aebff";
const hcDisabled = "#3ff23f";
const hcCanvas = "#000000";
const hcCanvasText = "#ffffff";
const hcHighlightText = "#000000";
const hcButtonText = "#000000";
const hcButtonFace = "#ffffff";
const darkRed = {
    shade50: "#130204",
    shade40: "#230308",
    shade30: "#420610",
    shade20: "#590815",
    shade10: "#690a19",
    primary: "#750b1c",
    tint10: "#861b2c",
    tint20: "#962f3f",
    tint30: "#ac4f5e",
    tint40: "#d69ca5",
    tint50: "#e9c7cd",
    tint60: "#f9f0f2"
};
const burgundy = {
    shade50: "#1a0607",
    shade40: "#310b0d",
    shade30: "#5c1519",
    shade20: "#7d1d21",
    shade10: "#942228",
    primary: "#a4262c",
    tint10: "#af393e",
    tint20: "#ba4d52",
    tint30: "#c86c70",
    tint40: "#e4afb2",
    tint50: "#f0d3d4",
    tint60: "#fbf4f4"
};
const cranberry = {
    shade50: "#200205",
    shade40: "#3b0509",
    shade30: "#6e0811",
    shade20: "#960b18",
    shade10: "#b10e1c",
    primary: "#c50f1f",
    tint10: "#cc2635",
    tint20: "#d33f4c",
    tint30: "#dc626d",
    tint40: "#eeacb2",
    tint50: "#f6d1d5",
    tint60: "#fdf3f4"
};
const red = {
    shade50: "#210809",
    shade40: "#3f1011",
    shade30: "#751d1f",
    shade20: "#9f282b",
    shade10: "#bc2f32",
    primary: "#d13438",
    tint10: "#d7494c",
    tint20: "#dc5e62",
    tint30: "#e37d80",
    tint40: "#f1bbbc",
    tint50: "#f8dadb",
    tint60: "#fdf6f6"
};
const darkOrange = {
    shade50: "#230900",
    shade40: "#411200",
    shade30: "#7a2101",
    shade20: "#a62d01",
    shade10: "#c43501",
    primary: "#da3b01",
    tint10: "#de501c",
    tint20: "#e36537",
    tint30: "#e9835e",
    tint40: "#f4bfab",
    tint50: "#f9dcd1",
    tint60: "#fdf6f3"
};
const bronze = {
    shade50: "#1b0a01",
    shade40: "#321303",
    shade30: "#5e2405",
    shade20: "#7f3107",
    shade10: "#963a08",
    primary: "#a74109",
    tint10: "#b2521e",
    tint20: "#bc6535",
    tint30: "#ca8057",
    tint40: "#e5bba4",
    tint50: "#f1d9cc",
    tint60: "#fbf5f2"
};
const pumpkin = {
    shade50: "#200d03",
    shade40: "#3d1805",
    shade30: "#712d09",
    shade20: "#9a3d0c",
    shade10: "#b6480e",
    primary: "#ca5010",
    tint10: "#d06228",
    tint20: "#d77440",
    tint30: "#df8e64",
    tint40: "#efc4ad",
    tint50: "#f7dfd2",
    tint60: "#fdf7f4"
};
const orange = {
    shade50: "#271002",
    shade40: "#4a1e04",
    shade30: "#8a3707",
    shade20: "#bc4b09",
    shade10: "#de590b",
    primary: "#f7630c",
    tint10: "#f87528",
    tint20: "#f98845",
    tint30: "#faa06b",
    tint40: "#fdcfb4",
    tint50: "#fee5d7",
    tint60: "#fff9f5"
};
const peach = {
    shade50: "#291600",
    shade40: "#4d2a00",
    shade30: "#8f4e00",
    shade20: "#c26a00",
    shade10: "#e67e00",
    primary: "#ff8c00",
    tint10: "#ff9a1f",
    tint20: "#ffa83d",
    tint30: "#ffba66",
    tint40: "#ffddb3",
    tint50: "#ffedd6",
    tint60: "#fffaf5"
};
const marigold = {
    shade50: "#251a00",
    shade40: "#463100",
    shade30: "#835b00",
    shade20: "#b27c00",
    shade10: "#d39300",
    primary: "#eaa300",
    tint10: "#edad1c",
    tint20: "#efb839",
    tint30: "#f2c661",
    tint40: "#f9e2ae",
    tint50: "#fcefd3",
    tint60: "#fefbf4"
};
const yellow = {
    primary: "#fde300",
    shade10: "#e4cc00",
    shade20: "#c0ad00",
    shade30: "#817400",
    shade40: "#4c4400",
    shade50: "#282400",
    tint10: "#fde61e",
    tint20: "#fdea3d",
    tint30: "#feee66",
    tint40: "#fef7b2",
    tint50: "#fffad6",
    tint60: "#fffef5"
};
const gold = {
    shade50: "#1f1900",
    shade40: "#3a2f00",
    shade30: "#6c5700",
    shade20: "#937700",
    shade10: "#ae8c00",
    primary: "#c19c00",
    tint10: "#c8a718",
    tint20: "#d0b232",
    tint30: "#dac157",
    tint40: "#ecdfa5",
    tint50: "#f5eece",
    tint60: "#fdfbf2"
};
const brass = {
    shade50: "#181202",
    shade40: "#2e2103",
    shade30: "#553e06",
    shade20: "#745408",
    shade10: "#89640a",
    primary: "#986f0b",
    tint10: "#a47d1e",
    tint20: "#b18c34",
    tint30: "#c1a256",
    tint40: "#e0cea2",
    tint50: "#efe4cb",
    tint60: "#fbf8f2"
};
const brown = {
    shade50: "#170e07",
    shade40: "#2b1a0e",
    shade30: "#50301a",
    shade20: "#6c4123",
    shade10: "#804d29",
    primary: "#8e562e",
    tint10: "#9c663f",
    tint20: "#a97652",
    tint30: "#bb8f6f",
    tint40: "#ddc3b0",
    tint50: "#edded3",
    tint60: "#faf7f4"
};
const darkBrown = {
    shade50: "#0c0704",
    shade40: "#170c08",
    shade30: "#2b1710",
    shade20: "#3a1f15",
    shade10: "#452519",
    primary: "#4d291c",
    tint10: "#623a2b",
    tint20: "#784d3e",
    tint30: "#946b5c",
    tint40: "#caada3",
    tint50: "#e3d2cb",
    tint60: "#f8f3f2"
};
const lime = {
    shade50: "#121b06",
    shade40: "#23330b",
    shade30: "#405f14",
    shade20: "#57811b",
    shade10: "#689920",
    primary: "#73aa24",
    tint10: "#81b437",
    tint20: "#90be4c",
    tint30: "#a4cc6c",
    tint40: "#cfe5af",
    tint50: "#e5f1d3",
    tint60: "#f8fcf4"
};
const forest = {
    shade50: "#0c1501",
    shade40: "#162702",
    shade30: "#294903",
    shade20: "#376304",
    shade10: "#427505",
    primary: "#498205",
    tint10: "#599116",
    tint20: "#6ba02b",
    tint30: "#85b44c",
    tint40: "#bdd99b",
    tint50: "#dbebc7",
    tint60: "#f6faf0"
};
const seafoam = {
    shade50: "#002111",
    shade40: "#003d20",
    shade30: "#00723b",
    shade20: "#009b51",
    shade10: "#00b85f",
    primary: "#00cc6a",
    tint10: "#19d279",
    tint20: "#34d889",
    tint30: "#5ae0a0",
    tint40: "#a8f0cd",
    tint50: "#cff7e4",
    tint60: "#f3fdf8"
};
const lightGreen = {
    shade50: "#031a02",
    shade40: "#063004",
    shade30: "#0b5a08",
    shade20: "#0e7a0b",
    shade10: "#11910d",
    primary: "#13a10e",
    tint10: "#27ac22",
    tint20: "#3db838",
    tint30: "#5ec75a",
    tint40: "#a7e3a5",
    tint50: "#cef0cd",
    tint60: "#f2fbf2"
};
const green = {
    shade50: "#031403",
    shade40: "#052505",
    shade30: "#094509",
    shade20: "#0c5e0c",
    shade10: "#0e700e",
    primary: "#107c10",
    tint10: "#218c21",
    tint20: "#359b35",
    tint30: "#54b054",
    tint40: "#9fd89f",
    tint50: "#c9eac9",
    tint60: "#f1faf1"
};
const darkGreen = {
    shade50: "#021102",
    shade40: "#032003",
    shade30: "#063b06",
    shade20: "#085108",
    shade10: "#0a5f0a",
    primary: "#0b6a0b",
    tint10: "#1a7c1a",
    tint20: "#2d8e2d",
    tint30: "#4da64d",
    tint40: "#9ad29a",
    tint50: "#c6e7c6",
    tint60: "#f0f9f0"
};
const lightTeal = {
    shade50: "#001d1f",
    shade40: "#00373a",
    shade30: "#00666d",
    shade20: "#008b94",
    shade10: "#00a5af",
    primary: "#00b7c3",
    tint10: "#18bfca",
    tint20: "#32c8d1",
    tint30: "#58d3db",
    tint40: "#a6e9ed",
    tint50: "#cef3f5",
    tint60: "#f2fcfd"
};
const teal = {
    shade50: "#001516",
    shade40: "#012728",
    shade30: "#02494c",
    shade20: "#026467",
    shade10: "#037679",
    primary: "#038387",
    tint10: "#159195",
    tint20: "#2aa0a4",
    tint30: "#4cb4b7",
    tint40: "#9bd9db",
    tint50: "#c7ebec",
    tint60: "#f0fafa"
};
const darkTeal = {
    shade50: "#001010",
    shade40: "#001f1f",
    shade30: "#003939",
    shade20: "#004e4e",
    shade10: "#005c5c",
    primary: "#006666",
    tint10: "#0e7878",
    tint20: "#218b8b",
    tint30: "#41a3a3",
    tint40: "#92d1d1",
    tint50: "#c2e7e7",
    tint60: "#eff9f9"
};
const cyan = {
    shade50: "#00181e",
    shade40: "#002e38",
    shade30: "#005669",
    shade20: "#00748f",
    shade10: "#008aa9",
    primary: "#0099bc",
    tint10: "#18a4c4",
    tint20: "#31afcc",
    tint30: "#56bfd7",
    tint40: "#a4deeb",
    tint50: "#cdedf4",
    tint60: "#f2fafc"
};
const steel = {
    shade50: "#000f12",
    shade40: "#001b22",
    shade30: "#00333f",
    shade20: "#004555",
    shade10: "#005265",
    primary: "#005b70",
    tint10: "#0f6c81",
    tint20: "#237d92",
    tint30: "#4496a9",
    tint40: "#94c8d4",
    tint50: "#c3e1e8",
    tint60: "#eff7f9"
};
const lightBlue = {
    shade50: "#091823",
    shade40: "#112d42",
    shade30: "#20547c",
    shade20: "#2c72a8",
    shade10: "#3487c7",
    primary: "#3a96dd",
    tint10: "#4fa1e1",
    tint20: "#65ade5",
    tint30: "#83bdeb",
    tint40: "#bfddf5",
    tint50: "#dcedfa",
    tint60: "#f6fafe"
};
const blue = {
    shade50: "#001322",
    shade40: "#002440",
    shade30: "#004377",
    shade20: "#005ba1",
    shade10: "#006cbf",
    primary: "#0078d4",
    tint10: "#1a86d9",
    tint20: "#3595de",
    tint30: "#5caae5",
    tint40: "#a9d3f2",
    tint50: "#d0e7f8",
    tint60: "#f3f9fd"
};
const royalBlue = {
    shade50: "#000c16",
    shade40: "#00172a",
    shade30: "#002c4e",
    shade20: "#003b6a",
    shade10: "#00467e",
    primary: "#004e8c",
    tint10: "#125e9a",
    tint20: "#286fa8",
    tint30: "#4a89ba",
    tint40: "#9abfdc",
    tint50: "#c7dced",
    tint60: "#f0f6fa"
};
const darkBlue = {
    shade50: "#000910",
    shade40: "#00111f",
    shade30: "#002039",
    shade20: "#002b4e",
    shade10: "#00335c",
    primary: "#003966",
    tint10: "#0e4a78",
    tint20: "#215c8b",
    tint30: "#4178a3",
    tint40: "#92b5d1",
    tint50: "#c2d6e7",
    tint60: "#eff4f9"
};
const cornflower = {
    shade50: "#0d1126",
    shade40: "#182047",
    shade30: "#2c3c85",
    shade20: "#3c51b4",
    shade10: "#4760d5",
    primary: "#4f6bed",
    tint10: "#637cef",
    tint20: "#778df1",
    tint30: "#93a4f4",
    tint40: "#c8d1fa",
    tint50: "#e1e6fc",
    tint60: "#f7f9fe"
};
const navy = {
    shade50: "#00061d",
    shade40: "#000c36",
    shade30: "#001665",
    shade20: "#001e89",
    shade10: "#0023a2",
    primary: "#0027b4",
    tint10: "#173bbd",
    tint20: "#3050c6",
    tint30: "#546fd2",
    tint40: "#a3b2e8",
    tint50: "#ccd5f3",
    tint60: "#f2f4fc"
};
const lavender = {
    shade50: "#120f25",
    shade40: "#221d46",
    shade30: "#3f3682",
    shade20: "#5649b0",
    shade10: "#6656d1",
    primary: "#7160e8",
    tint10: "#8172eb",
    tint20: "#9184ee",
    tint30: "#a79cf1",
    tint40: "#d2ccf8",
    tint50: "#e7e4fb",
    tint60: "#f9f8fe"
};
const purple = {
    shade50: "#0f0717",
    shade40: "#1c0e2b",
    shade30: "#341a51",
    shade20: "#46236e",
    shade10: "#532982",
    primary: "#5c2e91",
    tint10: "#6b3f9e",
    tint20: "#7c52ab",
    tint30: "#9470bd",
    tint40: "#c6b1de",
    tint50: "#e0d3ed",
    tint60: "#f7f4fb"
};
const darkPurple = {
    shade50: "#0a0411",
    shade40: "#130820",
    shade30: "#240f3c",
    shade20: "#311552",
    shade10: "#3a1861",
    primary: "#401b6c",
    tint10: "#512b7e",
    tint20: "#633e8f",
    tint30: "#7e5ca7",
    tint40: "#b9a3d3",
    tint50: "#d8cce7",
    tint60: "#f5f2f9"
};
const orchid = {
    shade50: "#16101d",
    shade40: "#281e37",
    shade30: "#4c3867",
    shade20: "#674c8c",
    shade10: "#795aa6",
    primary: "#8764b8",
    tint10: "#9373c0",
    tint20: "#a083c9",
    tint30: "#b29ad4",
    tint40: "#d7caea",
    tint50: "#e9e2f4",
    tint60: "#f9f8fc"
};
const grape = {
    shade50: "#160418",
    shade40: "#29072e",
    shade30: "#4c0d55",
    shade20: "#671174",
    shade10: "#7a1589",
    primary: "#881798",
    tint10: "#952aa4",
    tint20: "#a33fb1",
    tint30: "#b55fc1",
    tint40: "#d9a7e0",
    tint50: "#eaceef",
    tint60: "#faf2fb"
};
const berry = {
    shade50: "#1f091d",
    shade40: "#3a1136",
    shade30: "#6d2064",
    shade20: "#932b88",
    shade10: "#af33a1",
    primary: "#c239b3",
    tint10: "#c94cbc",
    tint20: "#d161c4",
    tint30: "#da7ed0",
    tint40: "#edbbe7",
    tint50: "#f5daf2",
    tint60: "#fdf5fc"
};
const lilac = {
    shade50: "#1c0b1f",
    shade40: "#35153a",
    shade30: "#63276d",
    shade20: "#863593",
    shade10: "#9f3faf",
    primary: "#b146c2",
    tint10: "#ba58c9",
    tint20: "#c36bd1",
    tint30: "#cf87da",
    tint40: "#e6bfed",
    tint50: "#f2dcf5",
    tint60: "#fcf6fd"
};
const pink = {
    shade50: "#24091b",
    shade40: "#441232",
    shade30: "#80215d",
    shade20: "#ad2d7e",
    shade10: "#cd3595",
    primary: "#e43ba6",
    tint10: "#e750b0",
    tint20: "#ea66ba",
    tint30: "#ef85c8",
    tint40: "#f7c0e3",
    tint50: "#fbddf0",
    tint60: "#fef6fb"
};
const hotPink = {
    shade50: "#240016",
    shade40: "#44002a",
    shade30: "#7f004e",
    shade20: "#ad006a",
    shade10: "#cc007e",
    primary: "#e3008c",
    tint10: "#e61c99",
    tint20: "#ea38a6",
    tint30: "#ee5fb7",
    tint40: "#f7adda",
    tint50: "#fbd2eb",
    tint60: "#fef4fa"
};
const magenta = {
    shade50: "#1f0013",
    shade40: "#390024",
    shade30: "#6b0043",
    shade20: "#91005a",
    shade10: "#ac006b",
    primary: "#bf0077",
    tint10: "#c71885",
    tint20: "#ce3293",
    tint30: "#d957a8",
    tint40: "#eca5d1",
    tint50: "#f5cee6",
    tint60: "#fcf2f9"
};
const plum = {
    shade50: "#13000c",
    shade40: "#240017",
    shade30: "#43002b",
    shade20: "#5a003b",
    shade10: "#6b0045",
    primary: "#77004d",
    tint10: "#87105d",
    tint20: "#98246f",
    tint30: "#ad4589",
    tint40: "#d696c0",
    tint50: "#e9c4dc",
    tint60: "#faf0f6"
};
const beige = {
    shade50: "#141313",
    shade40: "#252323",
    shade30: "#444241",
    shade20: "#5d5958",
    shade10: "#6e6968",
    primary: "#7a7574",
    tint10: "#8a8584",
    tint20: "#9a9594",
    tint30: "#afabaa",
    tint40: "#d7d4d4",
    tint50: "#eae8e8",
    tint60: "#faf9f9"
};
const mink = {
    shade50: "#0f0e0e",
    shade40: "#1c1b1a",
    shade30: "#343231",
    shade20: "#474443",
    shade10: "#54514f",
    primary: "#5d5a58",
    tint10: "#706d6b",
    tint20: "#84817e",
    tint30: "#9e9b99",
    tint40: "#cecccb",
    tint50: "#e5e4e3",
    tint60: "#f8f8f8"
};
const silver = {
    shade50: "#151818",
    shade40: "#282d2e",
    shade30: "#4a5356",
    shade20: "#657174",
    shade10: "#78868a",
    primary: "#859599",
    tint10: "#92a1a5",
    tint20: "#a0aeb1",
    tint30: "#b3bfc2",
    tint40: "#d8dfe0",
    tint50: "#eaeeef",
    tint60: "#fafbfb"
};
const platinum = {
    shade50: "#111314",
    shade40: "#1f2426",
    shade30: "#3b4447",
    shade20: "#505c60",
    shade10: "#5f6d71",
    primary: "#69797e",
    tint10: "#79898d",
    tint20: "#89989d",
    tint30: "#a0adb2",
    tint40: "#cdd6d8",
    tint50: "#e4e9ea",
    tint60: "#f8f9fa"
};
const anchor = {
    shade50: "#090a0b",
    shade40: "#111315",
    shade30: "#202427",
    shade20: "#2b3135",
    shade10: "#333a3f",
    primary: "#394146",
    tint10: "#4d565c",
    tint20: "#626c72",
    tint30: "#808a90",
    tint40: "#bcc3c7",
    tint50: "#dbdfe1",
    tint60: "#f6f7f8"
};
const charcoal = {
    shade50: "#090909",
    shade40: "#111111",
    shade30: "#202020",
    shade20: "#2b2b2b",
    shade10: "#333333",
    primary: "#393939",
    tint10: "#515151",
    tint20: "#686868",
    tint30: "#888888",
    tint40: "#c4c4c4",
    tint50: "#dfdfdf",
    tint60: "#f7f7f7"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"koxOM":[function(require,module,exports) {
/* Names of colors used in shared color palette alias tokens for status. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statusSharedColorNames", ()=>statusSharedColorNames);
parcelHelpers.export(exports, "personaSharedColorNames", ()=>personaSharedColorNames);
parcelHelpers.export(exports, "mappedStatusColorNames", ()=>mappedStatusColorNames);
parcelHelpers.export(exports, "unusedSharedColorNames", ()=>unusedSharedColorNames);
const statusSharedColorNames = [
    "red",
    "green",
    "darkOrange",
    "yellow",
    "berry",
    "lightGreen",
    "marigold"
];
const personaSharedColorNames = [
    "darkRed",
    "cranberry",
    "pumpkin",
    "peach",
    "gold",
    "brass",
    "brown",
    "forest",
    "seafoam",
    "darkGreen",
    "lightTeal",
    "teal",
    "steel",
    "blue",
    "royalBlue",
    "cornflower",
    "navy",
    "lavender",
    "purple",
    "grape",
    "lilac",
    "pink",
    "magenta",
    "plum",
    "beige",
    "mink",
    "platinum",
    "anchor"
];
const mappedStatusColorNames = [
    "cranberry",
    "green",
    "orange"
];
const unusedSharedColorNames = [
    "burgundy",
    "bronze",
    "orange",
    "darkBrown",
    "lime",
    "darkTeal",
    "cyan",
    "lightBlue",
    "darkBlue",
    "darkPurple",
    "orchid",
    "hotPink",
    "silver",
    "charcoal"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4B9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statusColorMapping", ()=>statusColorMapping);
const statusColorMapping = {
    success: "green",
    warning: "orange",
    danger: "cranberry"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vh0j":[function(require,module,exports) {
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateColorTokens", ()=>generateColorTokens);
var _colors = require("../global/colors");
const generateColorTokens = (brand)=>({
        colorNeutralForeground1: (0, _colors.grey)[14],
        colorNeutralForeground1Hover: (0, _colors.grey)[14],
        colorNeutralForeground1Pressed: (0, _colors.grey)[14],
        colorNeutralForeground1Selected: (0, _colors.grey)[14],
        colorNeutralForeground2: (0, _colors.grey)[26],
        colorNeutralForeground2Hover: (0, _colors.grey)[14],
        colorNeutralForeground2Pressed: (0, _colors.grey)[14],
        colorNeutralForeground2Selected: (0, _colors.grey)[14],
        colorNeutralForeground2BrandHover: brand[80],
        colorNeutralForeground2BrandPressed: brand[70],
        colorNeutralForeground2BrandSelected: brand[80],
        colorNeutralForeground3: (0, _colors.grey)[38],
        colorNeutralForeground3Hover: (0, _colors.grey)[26],
        colorNeutralForeground3Pressed: (0, _colors.grey)[26],
        colorNeutralForeground3Selected: (0, _colors.grey)[26],
        colorNeutralForeground3BrandHover: brand[80],
        colorNeutralForeground3BrandPressed: brand[70],
        colorNeutralForeground3BrandSelected: brand[80],
        colorNeutralForeground4: (0, _colors.grey)[44],
        colorNeutralForegroundDisabled: (0, _colors.grey)[74],
        colorNeutralForegroundInvertedDisabled: (0, _colors.whiteAlpha)[40],
        colorBrandForegroundLink: brand[70],
        colorBrandForegroundLinkHover: brand[60],
        colorBrandForegroundLinkPressed: brand[40],
        colorBrandForegroundLinkSelected: brand[70],
        colorNeutralForeground2Link: (0, _colors.grey)[26],
        colorNeutralForeground2LinkHover: (0, _colors.grey)[14],
        colorNeutralForeground2LinkPressed: (0, _colors.grey)[14],
        colorNeutralForeground2LinkSelected: (0, _colors.grey)[14],
        colorCompoundBrandForeground1: brand[80],
        colorCompoundBrandForeground1Hover: brand[70],
        colorCompoundBrandForeground1Pressed: brand[60],
        colorBrandForeground1: brand[80],
        colorBrandForeground2: brand[70],
        colorBrandForeground2Hover: brand[60],
        colorBrandForeground2Pressed: brand[30],
        colorNeutralForeground1Static: (0, _colors.grey)[14],
        colorNeutralForegroundStaticInverted: (0, _colors.white),
        colorNeutralForegroundInverted: (0, _colors.white),
        colorNeutralForegroundInvertedHover: (0, _colors.white),
        colorNeutralForegroundInvertedPressed: (0, _colors.white),
        colorNeutralForegroundInvertedSelected: (0, _colors.white),
        colorNeutralForegroundInverted2: (0, _colors.white),
        colorNeutralForegroundOnBrand: (0, _colors.white),
        colorNeutralForegroundInvertedLink: (0, _colors.white),
        colorNeutralForegroundInvertedLinkHover: (0, _colors.white),
        colorNeutralForegroundInvertedLinkPressed: (0, _colors.white),
        colorNeutralForegroundInvertedLinkSelected: (0, _colors.white),
        colorBrandForegroundInverted: brand[100],
        colorBrandForegroundInvertedHover: brand[110],
        colorBrandForegroundInvertedPressed: brand[100],
        colorBrandForegroundOnLight: brand[80],
        colorBrandForegroundOnLightHover: brand[70],
        colorBrandForegroundOnLightPressed: brand[50],
        colorBrandForegroundOnLightSelected: brand[60],
        colorNeutralBackground1: (0, _colors.white),
        colorNeutralBackground1Hover: (0, _colors.grey)[96],
        colorNeutralBackground1Pressed: (0, _colors.grey)[88],
        colorNeutralBackground1Selected: (0, _colors.grey)[92],
        colorNeutralBackground2: (0, _colors.grey)[98],
        colorNeutralBackground2Hover: (0, _colors.grey)[94],
        colorNeutralBackground2Pressed: (0, _colors.grey)[86],
        colorNeutralBackground2Selected: (0, _colors.grey)[90],
        colorNeutralBackground3: (0, _colors.grey)[96],
        colorNeutralBackground3Hover: (0, _colors.grey)[92],
        colorNeutralBackground3Pressed: (0, _colors.grey)[84],
        colorNeutralBackground3Selected: (0, _colors.grey)[88],
        colorNeutralBackground4: (0, _colors.grey)[94],
        colorNeutralBackground4Hover: (0, _colors.grey)[98],
        colorNeutralBackground4Pressed: (0, _colors.grey)[96],
        colorNeutralBackground4Selected: (0, _colors.white),
        colorNeutralBackground5: (0, _colors.grey)[92],
        colorNeutralBackground5Hover: (0, _colors.grey)[96],
        colorNeutralBackground5Pressed: (0, _colors.grey)[94],
        colorNeutralBackground5Selected: (0, _colors.grey)[98],
        colorNeutralBackground6: (0, _colors.grey)[90],
        colorNeutralBackgroundInverted: (0, _colors.grey)[16],
        colorNeutralBackgroundStatic: (0, _colors.grey)[20],
        colorNeutralBackgroundAlpha: (0, _colors.whiteAlpha)[50],
        colorNeutralBackgroundAlpha2: (0, _colors.whiteAlpha)[80],
        colorSubtleBackground: "transparent",
        colorSubtleBackgroundHover: (0, _colors.grey)[96],
        colorSubtleBackgroundPressed: (0, _colors.grey)[88],
        colorSubtleBackgroundSelected: (0, _colors.grey)[92],
        colorSubtleBackgroundLightAlphaHover: (0, _colors.whiteAlpha)[70],
        colorSubtleBackgroundLightAlphaPressed: (0, _colors.whiteAlpha)[50],
        colorSubtleBackgroundLightAlphaSelected: "transparent",
        colorSubtleBackgroundInverted: "transparent",
        colorSubtleBackgroundInvertedHover: (0, _colors.blackAlpha)[10],
        colorSubtleBackgroundInvertedPressed: (0, _colors.blackAlpha)[30],
        colorSubtleBackgroundInvertedSelected: (0, _colors.blackAlpha)[20],
        colorTransparentBackground: "transparent",
        colorTransparentBackgroundHover: "transparent",
        colorTransparentBackgroundPressed: "transparent",
        colorTransparentBackgroundSelected: "transparent",
        colorNeutralBackgroundDisabled: (0, _colors.grey)[94],
        colorNeutralBackgroundInvertedDisabled: (0, _colors.whiteAlpha)[10],
        colorNeutralStencil1: (0, _colors.grey)[90],
        colorNeutralStencil2: (0, _colors.grey)[98],
        colorNeutralStencil1Alpha: (0, _colors.blackAlpha)[10],
        colorNeutralStencil2Alpha: (0, _colors.blackAlpha)[5],
        colorBackgroundOverlay: (0, _colors.blackAlpha)[40],
        colorScrollbarOverlay: (0, _colors.blackAlpha)[50],
        colorBrandBackground: brand[80],
        colorBrandBackgroundHover: brand[70],
        colorBrandBackgroundPressed: brand[40],
        colorBrandBackgroundSelected: brand[60],
        colorCompoundBrandBackground: brand[80],
        colorCompoundBrandBackgroundHover: brand[70],
        colorCompoundBrandBackgroundPressed: brand[60],
        colorBrandBackgroundStatic: brand[80],
        colorBrandBackground2: brand[160],
        colorBrandBackground2Hover: brand[150],
        colorBrandBackground2Pressed: brand[130],
        colorBrandBackgroundInverted: (0, _colors.white),
        colorBrandBackgroundInvertedHover: brand[160],
        colorBrandBackgroundInvertedPressed: brand[140],
        colorBrandBackgroundInvertedSelected: brand[150],
        colorNeutralStrokeAccessible: (0, _colors.grey)[38],
        colorNeutralStrokeAccessibleHover: (0, _colors.grey)[34],
        colorNeutralStrokeAccessiblePressed: (0, _colors.grey)[30],
        colorNeutralStrokeAccessibleSelected: brand[80],
        colorNeutralStroke1: (0, _colors.grey)[82],
        colorNeutralStroke1Hover: (0, _colors.grey)[78],
        colorNeutralStroke1Pressed: (0, _colors.grey)[70],
        colorNeutralStroke1Selected: (0, _colors.grey)[74],
        colorNeutralStroke2: (0, _colors.grey)[88],
        colorNeutralStroke3: (0, _colors.grey)[94],
        colorNeutralStrokeSubtle: (0, _colors.grey)[88],
        colorNeutralStrokeOnBrand: (0, _colors.white),
        colorNeutralStrokeOnBrand2: (0, _colors.white),
        colorNeutralStrokeOnBrand2Hover: (0, _colors.white),
        colorNeutralStrokeOnBrand2Pressed: (0, _colors.white),
        colorNeutralStrokeOnBrand2Selected: (0, _colors.white),
        colorBrandStroke1: brand[80],
        colorBrandStroke2: brand[140],
        colorBrandStroke2Hover: brand[120],
        colorBrandStroke2Pressed: brand[80],
        colorBrandStroke2Contrast: brand[140],
        colorCompoundBrandStroke: brand[80],
        colorCompoundBrandStrokeHover: brand[70],
        colorCompoundBrandStrokePressed: brand[60],
        colorNeutralStrokeDisabled: (0, _colors.grey)[88],
        colorNeutralStrokeInvertedDisabled: (0, _colors.whiteAlpha)[40],
        colorTransparentStroke: "transparent",
        colorTransparentStrokeInteractive: "transparent",
        colorTransparentStrokeDisabled: "transparent",
        colorNeutralStrokeAlpha: (0, _colors.blackAlpha)[5],
        colorNeutralStrokeAlpha2: (0, _colors.whiteAlpha)[20],
        colorStrokeFocus1: (0, _colors.white),
        colorStrokeFocus2: (0, _colors.black),
        colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
        colorNeutralShadowKey: "rgba(0,0,0,0.14)",
        colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
        colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
        colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
        colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
        colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
        colorBrandShadowKey: "rgba(0,0,0,0.25)"
    });

},{"../global/colors":"lVTZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dc8ul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _borderRadius = require("./borderRadius");
parcelHelpers.exportAll(_borderRadius, exports);
var _colors = require("./colors");
parcelHelpers.exportAll(_colors, exports);
var _curves = require("./curves");
parcelHelpers.exportAll(_curves, exports);
var _durations = require("./durations");
parcelHelpers.exportAll(_durations, exports);
var _fonts = require("./fonts");
parcelHelpers.exportAll(_fonts, exports);
var _spacings = require("./spacings");
parcelHelpers.exportAll(_spacings, exports);
var _strokeWidths = require("./strokeWidths");
parcelHelpers.exportAll(_strokeWidths, exports);
parcelHelpers.exportAll(_borderRadius, exports);
var _typographyStyles = require("./typographyStyles");
parcelHelpers.exportAll(_typographyStyles, exports);

},{"./borderRadius":"iED6W","./colors":false,"./curves":false,"./durations":false,"./fonts":"4kqeU","./spacings":false,"./strokeWidths":"8gk9M","./typographyStyles":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iED6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "borderRadius", ()=>borderRadius);
const borderRadius = {
    borderRadiusNone: "0",
    borderRadiusSmall: "2px",
    borderRadiusMedium: "4px",
    borderRadiusLarge: "6px",
    borderRadiusXLarge: "8px",
    borderRadiusCircular: "10000px"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yQtW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "curves", ()=>curves);
const curves = {
    curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
    curveAccelerateMid: "cubic-bezier(1,0,1,1)",
    curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
    curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
    curveDecelerateMid: "cubic-bezier(0,0,0,1)",
    curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
    curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
    curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
    curveLinear: "cubic-bezier(0,0,1,1)"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haaZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "durations", ()=>durations);
const durations = {
    durationUltraFast: "50ms",
    durationFaster: "100ms",
    durationFast: "150ms",
    durationNormal: "200ms",
    durationGentle: "250ms",
    durationSlow: "300ms",
    durationSlower: "400ms",
    durationUltraSlow: "500ms"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kqeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fontSizes", ()=>fontSizes);
parcelHelpers.export(exports, "lineHeights", ()=>lineHeights);
parcelHelpers.export(exports, "fontWeights", ()=>fontWeights);
parcelHelpers.export(exports, "fontFamilies", ()=>fontFamilies);
const fontSizes = {
    fontSizeBase100: "10px",
    fontSizeBase200: "12px",
    fontSizeBase300: "14px",
    fontSizeBase400: "16px",
    fontSizeBase500: "20px",
    fontSizeBase600: "24px",
    fontSizeHero700: "28px",
    fontSizeHero800: "32px",
    fontSizeHero900: "40px",
    fontSizeHero1000: "68px"
};
const lineHeights = {
    lineHeightBase100: "14px",
    lineHeightBase200: "16px",
    lineHeightBase300: "20px",
    lineHeightBase400: "22px",
    lineHeightBase500: "28px",
    lineHeightBase600: "32px",
    lineHeightHero700: "36px",
    lineHeightHero800: "40px",
    lineHeightHero900: "52px",
    lineHeightHero1000: "92px"
};
const fontWeights = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700
};
const fontFamilies = {
    fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
    fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"geTNu":[function(require,module,exports) {
// Intentionally not exported! Use horizontalSpacings and verticalSpacings instead.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "horizontalSpacings", ()=>horizontalSpacings);
parcelHelpers.export(exports, "verticalSpacings", ()=>verticalSpacings);
const spacings = {
    none: "0",
    xxs: "2px",
    xs: "4px",
    sNudge: "6px",
    s: "8px",
    mNudge: "10px",
    m: "12px",
    l: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px"
};
const horizontalSpacings = {
    spacingHorizontalNone: spacings.none,
    spacingHorizontalXXS: spacings.xxs,
    spacingHorizontalXS: spacings.xs,
    spacingHorizontalSNudge: spacings.sNudge,
    spacingHorizontalS: spacings.s,
    spacingHorizontalMNudge: spacings.mNudge,
    spacingHorizontalM: spacings.m,
    spacingHorizontalL: spacings.l,
    spacingHorizontalXL: spacings.xl,
    spacingHorizontalXXL: spacings.xxl,
    spacingHorizontalXXXL: spacings.xxxl
};
const verticalSpacings = {
    spacingVerticalNone: spacings.none,
    spacingVerticalXXS: spacings.xxs,
    spacingVerticalXS: spacings.xs,
    spacingVerticalSNudge: spacings.sNudge,
    spacingVerticalS: spacings.s,
    spacingVerticalMNudge: spacings.mNudge,
    spacingVerticalM: spacings.m,
    spacingVerticalL: spacings.l,
    spacingVerticalXL: spacings.xl,
    spacingVerticalXXL: spacings.xxl,
    spacingVerticalXXXL: spacings.xxxl
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gk9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strokeWidths", ()=>strokeWidths);
const strokeWidths = {
    strokeWidthThin: "1px",
    strokeWidthThick: "2px",
    strokeWidthThicker: "3px",
    strokeWidthThickest: "4px"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLoJO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createShadowTokens", ()=>createShadowTokens);
function createShadowTokens(ambientColor, keyColor, tokenSuffix = "") {
    return {
        [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
        [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
        [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
        [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
        [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
        [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDEZ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDarkTheme", ()=>createDarkTheme);
var _darkColorPalette = require("../alias/darkColorPalette");
var _darkColor = require("../alias/darkColor");
var _index = require("../global/index");
var _shadows = require("./shadows");
var _durations = require("../global/durations");
var _curves = require("../global/curves");
var _spacings = require("../global/spacings");
const createDarkTheme = (brand)=>{
    const colorTokens = (0, _darkColor.generateColorTokens)(brand);
    return {
        ...(0, _index.borderRadius),
        ...(0, _index.fontSizes),
        ...(0, _index.lineHeights),
        ...(0, _index.fontFamilies),
        ...(0, _index.fontWeights),
        ...(0, _index.strokeWidths),
        ...(0, _spacings.horizontalSpacings),
        ...(0, _spacings.verticalSpacings),
        ...(0, _durations.durations),
        ...(0, _curves.curves),
        ...colorTokens,
        ...(0, _darkColorPalette.colorPaletteTokens),
        ...(0, _darkColorPalette.colorStatusTokens),
        ...(0, _shadows.createShadowTokens)(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...(0, _shadows.createShadowTokens)(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
    };
};

},{"../alias/darkColorPalette":"eNKuQ","../alias/darkColor":"7JwI6","../global/index":"dc8ul","./shadows":"kLoJO","../global/durations":"haaZB","../global/curves":"9yQtW","../global/spacings":"geTNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNKuQ":[function(require,module,exports) {
/* color palette used in both darkTheme and teamsDarkTheme */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorPaletteTokens", ()=>colorPaletteTokens);
parcelHelpers.export(exports, "colorStatusTokens", ()=>colorStatusTokens);
var _colorPalette = require("../global/colorPalette");
var _sharedColorNames = require("../sharedColorNames");
var _statusColorMapping = require("../statusColorMapping");
const statusColorPaletteTokens = (0, _sharedColorNames.statusSharedColorNames).reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background1`]: (0, _colorPalette.statusSharedColors)[sharedColor].shade40,
        [`colorPalette${color}Background2`]: (0, _colorPalette.statusSharedColors)[sharedColor].shade30,
        [`colorPalette${color}Background3`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary,
        [`colorPalette${color}Foreground1`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint30,
        [`colorPalette${color}Foreground2`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint40,
        [`colorPalette${color}Foreground3`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint20,
        [`colorPalette${color}BorderActive`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint30,
        [`colorPalette${color}Border1`]: (0, _colorPalette.statusSharedColors)[sharedColor].primary,
        [`colorPalette${color}Border2`]: (0, _colorPalette.statusSharedColors)[sharedColor].tint20
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patches
statusColorPaletteTokens.colorPaletteRedForeground3 = (0, _colorPalette.statusSharedColors).red.tint30;
statusColorPaletteTokens.colorPaletteRedBorder2 = (0, _colorPalette.statusSharedColors).red.tint30;
statusColorPaletteTokens.colorPaletteGreenForeground3 = (0, _colorPalette.statusSharedColors).green.tint40;
statusColorPaletteTokens.colorPaletteGreenBorder2 = (0, _colorPalette.statusSharedColors).green.tint40;
statusColorPaletteTokens.colorPaletteDarkOrangeForeground3 = (0, _colorPalette.statusSharedColors).darkOrange.tint30;
statusColorPaletteTokens.colorPaletteDarkOrangeBorder2 = (0, _colorPalette.statusSharedColors).darkOrange.tint30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = (0, _colorPalette.statusSharedColors).red.primary;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = (0, _colorPalette.statusSharedColors).green.primary;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = (0, _colorPalette.statusSharedColors).yellow.shade30;
const personaColorPaletteTokens = (0, _sharedColorNames.personaSharedColorNames).reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background2`]: (0, _colorPalette.personaSharedColors)[sharedColor].shade30,
        [`colorPalette${color}Foreground2`]: (0, _colorPalette.personaSharedColors)[sharedColor].tint40,
        [`colorPalette${color}BorderActive`]: (0, _colorPalette.personaSharedColors)[sharedColor].tint30
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patches
personaColorPaletteTokens.colorPaletteDarkRedBackground2 = (0, _colorPalette.personaSharedColors).darkRed.shade20;
personaColorPaletteTokens.colorPalettePlumBackground2 = (0, _colorPalette.personaSharedColors).plum.shade20;
const colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
};
const colorStatusTokens = Object.entries((0, _statusColorMapping.statusColorMapping)).reduce((acc, [statusColor, sharedColor])=>{
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    // TODO: double check the mapping with design - see the one-off patches above
    const statusColorTokens = {
        [`colorStatus${color}Background1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].shade40,
        [`colorStatus${color}Background2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].shade30,
        [`colorStatus${color}Background3`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary,
        [`colorStatus${color}Foreground1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint30,
        [`colorStatus${color}Foreground2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint40,
        [`colorStatus${color}Foreground3`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint20,
        [`colorStatus${color}BorderActive`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint30,
        [`colorStatus${color}ForegroundInverted`]: (0, _colorPalette.mappedStatusColors)[sharedColor].shade10,
        [`colorStatus${color}Border1`]: (0, _colorPalette.mappedStatusColors)[sharedColor].primary,
        [`colorStatus${color}Border2`]: (0, _colorPalette.mappedStatusColors)[sharedColor].tint20
    };
    return Object.assign(acc, statusColorTokens);
}, {});
// one-off overrides for colorStatus tokens
colorStatusTokens.colorStatusDangerForeground3 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).danger].tint30;
colorStatusTokens.colorStatusDangerBorder2 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).danger].tint30;
colorStatusTokens.colorStatusSuccessForeground3 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).success].tint40;
colorStatusTokens.colorStatusSuccessBorder2 = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).success].tint40;
colorStatusTokens.colorStatusWarningForegroundInverted = (0, _colorPalette.mappedStatusColors)[(0, _statusColorMapping.statusColorMapping).warning].shade20;

},{"../global/colorPalette":"4YIFe","../sharedColorNames":"koxOM","../statusColorMapping":"c4B9M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JwI6":[function(require,module,exports) {
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateColorTokens", ()=>generateColorTokens);
var _colors = require("../global/colors");
const generateColorTokens = (brand)=>({
        colorNeutralForeground1: (0, _colors.white),
        colorNeutralForeground1Hover: (0, _colors.white),
        colorNeutralForeground1Pressed: (0, _colors.white),
        colorNeutralForeground1Selected: (0, _colors.white),
        colorNeutralForeground2: (0, _colors.grey)[84],
        colorNeutralForeground2Hover: (0, _colors.white),
        colorNeutralForeground2Pressed: (0, _colors.white),
        colorNeutralForeground2Selected: (0, _colors.white),
        colorNeutralForeground2BrandHover: brand[100],
        colorNeutralForeground2BrandPressed: brand[90],
        colorNeutralForeground2BrandSelected: brand[100],
        colorNeutralForeground3: (0, _colors.grey)[68],
        colorNeutralForeground3Hover: (0, _colors.grey)[84],
        colorNeutralForeground3Pressed: (0, _colors.grey)[84],
        colorNeutralForeground3Selected: (0, _colors.grey)[84],
        colorNeutralForeground3BrandHover: brand[100],
        colorNeutralForeground3BrandPressed: brand[90],
        colorNeutralForeground3BrandSelected: brand[100],
        colorNeutralForeground4: (0, _colors.grey)[60],
        colorNeutralForegroundDisabled: (0, _colors.grey)[36],
        colorNeutralForegroundInvertedDisabled: (0, _colors.whiteAlpha)[40],
        colorBrandForegroundLink: brand[100],
        colorBrandForegroundLinkHover: brand[110],
        colorBrandForegroundLinkPressed: brand[90],
        colorBrandForegroundLinkSelected: brand[100],
        colorNeutralForeground2Link: (0, _colors.grey)[84],
        colorNeutralForeground2LinkHover: (0, _colors.white),
        colorNeutralForeground2LinkPressed: (0, _colors.white),
        colorNeutralForeground2LinkSelected: (0, _colors.white),
        colorCompoundBrandForeground1: brand[100],
        colorCompoundBrandForeground1Hover: brand[110],
        colorCompoundBrandForeground1Pressed: brand[90],
        colorBrandForeground1: brand[100],
        colorBrandForeground2: brand[110],
        colorBrandForeground2Hover: brand[130],
        colorBrandForeground2Pressed: brand[160],
        colorNeutralForeground1Static: (0, _colors.grey)[14],
        colorNeutralForegroundStaticInverted: (0, _colors.white),
        colorNeutralForegroundInverted: (0, _colors.grey)[14],
        colorNeutralForegroundInvertedHover: (0, _colors.grey)[14],
        colorNeutralForegroundInvertedPressed: (0, _colors.grey)[14],
        colorNeutralForegroundInvertedSelected: (0, _colors.grey)[14],
        colorNeutralForegroundInverted2: (0, _colors.grey)[14],
        colorNeutralForegroundOnBrand: (0, _colors.white),
        colorNeutralForegroundInvertedLink: (0, _colors.white),
        colorNeutralForegroundInvertedLinkHover: (0, _colors.white),
        colorNeutralForegroundInvertedLinkPressed: (0, _colors.white),
        colorNeutralForegroundInvertedLinkSelected: (0, _colors.white),
        colorBrandForegroundInverted: brand[80],
        colorBrandForegroundInvertedHover: brand[70],
        colorBrandForegroundInvertedPressed: brand[60],
        colorBrandForegroundOnLight: brand[80],
        colorBrandForegroundOnLightHover: brand[70],
        colorBrandForegroundOnLightPressed: brand[50],
        colorBrandForegroundOnLightSelected: brand[60],
        colorNeutralBackground1: (0, _colors.grey)[16],
        colorNeutralBackground1Hover: (0, _colors.grey)[24],
        colorNeutralBackground1Pressed: (0, _colors.grey)[12],
        colorNeutralBackground1Selected: (0, _colors.grey)[22],
        colorNeutralBackground2: (0, _colors.grey)[12],
        colorNeutralBackground2Hover: (0, _colors.grey)[20],
        colorNeutralBackground2Pressed: (0, _colors.grey)[8],
        colorNeutralBackground2Selected: (0, _colors.grey)[18],
        colorNeutralBackground3: (0, _colors.grey)[8],
        colorNeutralBackground3Hover: (0, _colors.grey)[16],
        colorNeutralBackground3Pressed: (0, _colors.grey)[4],
        colorNeutralBackground3Selected: (0, _colors.grey)[14],
        colorNeutralBackground4: (0, _colors.grey)[4],
        colorNeutralBackground4Hover: (0, _colors.grey)[12],
        colorNeutralBackground4Pressed: (0, _colors.black),
        colorNeutralBackground4Selected: (0, _colors.grey)[10],
        colorNeutralBackground5: (0, _colors.black),
        colorNeutralBackground5Hover: (0, _colors.grey)[8],
        colorNeutralBackground5Pressed: (0, _colors.grey)[2],
        colorNeutralBackground5Selected: (0, _colors.grey)[6],
        colorNeutralBackground6: (0, _colors.grey)[20],
        colorNeutralBackgroundInverted: (0, _colors.white),
        colorNeutralBackgroundStatic: (0, _colors.grey)[24],
        colorNeutralBackgroundAlpha: (0, _colors.grey10Alpha)[50],
        colorNeutralBackgroundAlpha2: (0, _colors.grey12Alpha)[70],
        colorSubtleBackground: "transparent",
        colorSubtleBackgroundHover: (0, _colors.grey)[22],
        colorSubtleBackgroundPressed: (0, _colors.grey)[18],
        colorSubtleBackgroundSelected: (0, _colors.grey)[20],
        colorSubtleBackgroundLightAlphaHover: (0, _colors.grey14Alpha)[80],
        colorSubtleBackgroundLightAlphaPressed: (0, _colors.grey14Alpha)[50],
        colorSubtleBackgroundLightAlphaSelected: "transparent",
        colorSubtleBackgroundInverted: "transparent",
        colorSubtleBackgroundInvertedHover: (0, _colors.blackAlpha)[10],
        colorSubtleBackgroundInvertedPressed: (0, _colors.blackAlpha)[30],
        colorSubtleBackgroundInvertedSelected: (0, _colors.blackAlpha)[20],
        colorTransparentBackground: "transparent",
        colorTransparentBackgroundHover: "transparent",
        colorTransparentBackgroundPressed: "transparent",
        colorTransparentBackgroundSelected: "transparent",
        colorNeutralBackgroundDisabled: (0, _colors.grey)[8],
        colorNeutralBackgroundInvertedDisabled: (0, _colors.whiteAlpha)[10],
        colorNeutralStencil1: (0, _colors.grey)[34],
        colorNeutralStencil2: (0, _colors.grey)[20],
        colorNeutralStencil1Alpha: (0, _colors.whiteAlpha)[10],
        colorNeutralStencil2Alpha: (0, _colors.whiteAlpha)[5],
        colorBackgroundOverlay: (0, _colors.blackAlpha)[50],
        colorScrollbarOverlay: (0, _colors.whiteAlpha)[60],
        colorBrandBackground: brand[70],
        colorBrandBackgroundHover: brand[80],
        colorBrandBackgroundPressed: brand[40],
        colorBrandBackgroundSelected: brand[60],
        colorCompoundBrandBackground: brand[100],
        colorCompoundBrandBackgroundHover: brand[110],
        colorCompoundBrandBackgroundPressed: brand[90],
        colorBrandBackgroundStatic: brand[80],
        colorBrandBackground2: brand[20],
        colorBrandBackground2Hover: brand[40],
        colorBrandBackground2Pressed: brand[10],
        colorBrandBackgroundInverted: (0, _colors.white),
        colorBrandBackgroundInvertedHover: brand[160],
        colorBrandBackgroundInvertedPressed: brand[140],
        colorBrandBackgroundInvertedSelected: brand[150],
        colorNeutralStrokeAccessible: (0, _colors.grey)[68],
        colorNeutralStrokeAccessibleHover: (0, _colors.grey)[74],
        colorNeutralStrokeAccessiblePressed: (0, _colors.grey)[70],
        colorNeutralStrokeAccessibleSelected: brand[100],
        colorNeutralStroke1: (0, _colors.grey)[40],
        colorNeutralStroke1Hover: (0, _colors.grey)[46],
        colorNeutralStroke1Pressed: (0, _colors.grey)[42],
        colorNeutralStroke1Selected: (0, _colors.grey)[44],
        colorNeutralStroke2: (0, _colors.grey)[32],
        colorNeutralStroke3: (0, _colors.grey)[24],
        colorNeutralStrokeSubtle: (0, _colors.grey)[4],
        colorNeutralStrokeOnBrand: (0, _colors.grey)[16],
        colorNeutralStrokeOnBrand2: (0, _colors.white),
        colorNeutralStrokeOnBrand2Hover: (0, _colors.white),
        colorNeutralStrokeOnBrand2Pressed: (0, _colors.white),
        colorNeutralStrokeOnBrand2Selected: (0, _colors.white),
        colorBrandStroke1: brand[100],
        colorBrandStroke2: brand[50],
        colorBrandStroke2Hover: brand[50],
        colorBrandStroke2Pressed: brand[30],
        colorBrandStroke2Contrast: brand[50],
        colorCompoundBrandStroke: brand[100],
        colorCompoundBrandStrokeHover: brand[110],
        colorCompoundBrandStrokePressed: brand[90],
        colorNeutralStrokeDisabled: (0, _colors.grey)[26],
        colorNeutralStrokeInvertedDisabled: (0, _colors.whiteAlpha)[40],
        colorTransparentStroke: "transparent",
        colorTransparentStrokeInteractive: "transparent",
        colorTransparentStrokeDisabled: "transparent",
        colorNeutralStrokeAlpha: (0, _colors.whiteAlpha)[10],
        colorNeutralStrokeAlpha2: (0, _colors.whiteAlpha)[20],
        colorStrokeFocus1: (0, _colors.black),
        colorStrokeFocus2: (0, _colors.white),
        colorNeutralShadowAmbient: "rgba(0,0,0,0.24)",
        colorNeutralShadowKey: "rgba(0,0,0,0.28)",
        colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.12)",
        colorNeutralShadowKeyLighter: "rgba(0,0,0,0.14)",
        colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.40)",
        colorNeutralShadowKeyDarker: "rgba(0,0,0,0.48)",
        colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
        colorBrandShadowKey: "rgba(0,0,0,0.25)"
    });

},{"../global/colors":"lVTZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0SmZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Citation", ()=>Citation);
parcelHelpers.export(exports, "CitationDefinition", ()=>definition$3);
parcelHelpers.export(exports, "CitationReference", ()=>CitationReference);
parcelHelpers.export(exports, "CitationReferenceAttributeNames", ()=>CitationReferenceAttributeNames);
parcelHelpers.export(exports, "CitationReferenceDefinition", ()=>CitationReferenceDefinition);
parcelHelpers.export(exports, "CitationReferenceStyles", ()=>styles$7);
parcelHelpers.export(exports, "CitationReferenceTemplate", ()=>template$7);
parcelHelpers.export(exports, "CitationStyles", ()=>styles$6);
parcelHelpers.export(exports, "CitationTemplate", ()=>template$6);
parcelHelpers.export(exports, "DefaultErrorMessage", ()=>DefaultErrorMessage);
parcelHelpers.export(exports, "DefaultMaxCharacters", ()=>DefaultMaxCharacters);
parcelHelpers.export(exports, "Reference", ()=>Reference);
parcelHelpers.export(exports, "ReferenceAttributeNames", ()=>ReferenceAttributeNames);
parcelHelpers.export(exports, "ReferenceDefinition", ()=>ReferenceDefinition);
parcelHelpers.export(exports, "ReferenceGroup", ()=>ReferenceGroup);
parcelHelpers.export(exports, "ReferenceGroupDefinition", ()=>definition$2);
parcelHelpers.export(exports, "ReferenceGroupStyles", ()=>styles$5);
parcelHelpers.export(exports, "ReferenceGroupTemplate", ()=>template$5);
parcelHelpers.export(exports, "ReferenceList", ()=>ReferenceList);
parcelHelpers.export(exports, "ReferenceListDefinition", ()=>ReferenceListDefinition);
parcelHelpers.export(exports, "ReferenceListStyles", ()=>styles$4);
parcelHelpers.export(exports, "ReferenceListTemplate", ()=>template$4);
parcelHelpers.export(exports, "ReferenceTemplate", ()=>template$3);
parcelHelpers.export(exports, "Referencetyles", ()=>styles$3);
parcelHelpers.export(exports, "SidecarShell", ()=>SidecarShell);
parcelHelpers.export(exports, "SidecarShellHeader", ()=>SidecarShellHeader);
parcelHelpers.export(exports, "SidecarShellHeaderDefinition", ()=>definition$1);
parcelHelpers.export(exports, "SidecarShellHeaderStyles", ()=>styles$2);
parcelHelpers.export(exports, "SidecarShellHeaderTemplate", ()=>template$2);
parcelHelpers.export(exports, "SidecarShellStyles", ()=>styles$1);
parcelHelpers.export(exports, "SidecarShellTemplate", ()=>template$1);
parcelHelpers.export(exports, "SidecarshellDefinition", ()=>SidecarshellDefinition);
parcelHelpers.export(exports, "Textarea", ()=>Textarea);
parcelHelpers.export(exports, "TextareaAttributeNames", ()=>TextareaAttributeNames);
parcelHelpers.export(exports, "TextareaDefinition", ()=>definition);
parcelHelpers.export(exports, "TextareaStyles", ()=>styles);
parcelHelpers.export(exports, "TextareaSubmitEventName", ()=>TextareaSubmitEventName);
parcelHelpers.export(exports, "TextareaTemplate", ()=>template);
var _fastElement = require("@microsoft/fast-element");
var _webComponents = require("@fluentui/web-components");
var _fastFoundation = require("@microsoft/fast-foundation");
var _fabricWeb = require("@fabric-msft/fabric-web");
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
typeof SuppressedError === "function" && SuppressedError;
/**
 * Placeholder prop name from workspace generator, replace with actual props.
 */ const CitationReferenceAttributeNames = {
    citationHref: "citation-href",
    citationIndex: "citation-index",
    metadataText: "metadata-text"
};
/**
 * # CitationReference
 *
 * When slotted in to the Citation component it displays on hover of the citation. The citation reference is a more simplified version of the reference that is only meant to appear inside of a citation popover.
 *
 * usage:
 * ```html
 * <fabric-citation>
 *     <span slot="index">1</span>
 *     <fabric-citation-reference>
 *         <span slot="index">1</span>
 *         <svg slot="reference-icon"></svg>
 *     </fabric-citation-reference>
 * </fabric-citation>
 * ```
 */ class CitationReference extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        /**
     * ## indexReference
     *
     * A reference to the slotted index element
     */ this.indexReference = [];
        /**
     * ## metadataTextOne
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextOne = [];
        /**
     * ## hasMetadataTextOne
     * true when text is present
     */ this.hasMetadataTextOne = false;
        /**
     * ## metadataTextTwo
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextTwo = [];
        /**
     * ## hasMetadataTextTwo
     * true when text is present
     */ this.hasMetadataTextTwo = false;
        /**
     * ## metadataTextThree
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextThree = [];
        /**
     * ## hasMetadataTextThree
     * true when text is present
     */ this.hasMetadataTextThree = false;
        this.target = "_self";
    }
    indexReferenceChanged() {
        var _a, _b;
        this.index = parseInt(((_b = (_a = this.indexReference) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.innerText) || "");
    }
    /**
   * ## metadataTextOne
   * change handler
   */ metadataTextOneChanged() {
        if (this.metadataTextOne.length > 0) this.hasMetadataTextOne = true;
        else this.hasMetadataTextOne = false;
    }
    /**
   * ## metadataTextTwo
   * change handler
   */ metadataTextTwoChanged() {
        if (this.metadataTextTwo.length > 0) this.hasMetadataTextTwo = true;
        else this.hasMetadataTextTwo = false;
    }
    /**
   * ## metadataTextThree
   * change handler
   */ metadataTextThreeChanged() {
        if (this.metadataTextThree && this.metadataTextThree.length > 0) this.hasMetadataTextThree = true;
        else this.hasMetadataTextThree = false;
    }
    /**
   * # handleKeyboardNavigation
   *
   *  Because Fast Tooltip seems to block interactive elements embedded inside, when this citation is embedded in the popover-polyfill regular keyboard events on the anchor element do not work - probably because WCAG guidelines maintain that tooltips do not recieve focus. It is recommended to use an html dialog for interactive modal situations.
   *
   * [WCAG tooltip reference](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
   * [html dialog reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
   */ handleKeyboardNavigation(event) {
        if (this.citationHref && (event.key === "Space" || event.key === " " || event.key === "Enter")) {
            if (window.top) window.top.location.href = this.citationHref;
            else window.location.href = this.citationHref;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keydown", (event)=>this.handleKeyboardNavigation(event));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", (event)=>this.handleKeyboardNavigation(event));
    }
}
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "index", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "indexReference", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: CitationReferenceAttributeNames.citationHref
    })
], CitationReference.prototype, "citationHref", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "metadataTextOne", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "hasMetadataTextOne", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "metadataTextTwo", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "hasMetadataTextTwo", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "metadataTextThree", void 0);
__decorate([
    (0, _fastElement.observable)
], CitationReference.prototype, "hasMetadataTextThree", void 0);
__decorate([
    (0, _fastElement.attr)
], CitationReference.prototype, "target", void 0);
/**
 * The template for the CitationReference component.
 * @public
 */ // TODO: add aria label back to anchor el
// aria-label="${x => `Citation ${x.index}`}"
function CitationReferenceTemplate() {
    return (0, _fastElement.html)`<template slot="popover"><div class="base" part="base"><div class="reference-title-box reference-row"><a href="${(x)=>x.citationHref}" id="citation-anchor" class="citation-number" tabindex="0" target="${(x)=>x.target}" aria-label="${(x)=>x.index}"><slot name="index" ${(0, _fastElement.slotted)("indexReference")}></slot></a><div class="reference-icon"><slot name="reference-icon"></slot></div><div class="reference-name"><slot name="label"></slot></div></div><div class="metadata-container"><div class="metadata-text reference-row"><slot name="metadata-icon-start"></slot><slot name="metadata-text-one" ${(0, _fastElement.slotted)("metadataTextOne")}></slot>${(0, _fastElement.when)((x)=>x.hasMetadataTextOne && x.hasMetadataTextTwo, (0, _fastElement.html)`<div class="divider"></div>`)}<slot name="metadata-text-two" ${(0, _fastElement.slotted)("metadataTextTwo")}></slot>${(0, _fastElement.when)((x)=>x.hasMetadataTextTwo && x.hasMetadataTextThree, (0, _fastElement.html)`<div class="divider"></div>`)}<slot name="metadata-text-three" ${(0, _fastElement.slotted)("metadataTextThree")}></slot><slot name="metadata-icon-end"></slot></div><div class="reference-quote"><slot name="excerpt"></slot></div></div></div></template>`;
}
const template$7 = CitationReferenceTemplate();
const citationNumberStyles = (0, _fastElement.css)`
  .citation-number:hover{cursor:pointer}.citation-number{font-weight:${(0, _webComponents.fontWeightBold)};font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};display:inline-block;padding:0 ${(0, _webComponents.spacingHorizontalXS)};border-radius:${(0, _webComponents.borderRadiusMedium)};border:1px solid ${(0, _webComponents.colorNeutralStroke2)};color:${(0, _webComponents.colorNeutralForeground2)};text-decoration:none}.citation-number:hover{color:var(--colorBrandForeground2Hover);border-color:var(--colorBrandStroke2Hover);background-color:var(--colorBrandBackground2Hover)}.citation-number:active{color:var(--colorNeutralForeground2BrandHover);border-color:var(--colorBrandStroke2Pressed);background-color:var(--colorBrandBackground2Pressed)}`;
const styles$7 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}
  ${citationNumberStyles}

  .reference-row{display:flex;flex-direction:row;align-items:center}.base{font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase200)};font-weight:${(0, _webComponents.fontWeightRegular)};line-height:${(0, _webComponents.lineHeightBase200)};display:flex;flex-direction:column;color:${(0, _webComponents.colorNeutralForeground1)}}.citation-number{margin-right:${(0, _webComponents.spacingHorizontalXS)}}.reference-name{flex-grow:1;padding-right:${(0, _webComponents.spacingHorizontalXS)};padding-left:${(0, _webComponents.spacingHorizontalSNudge)};font-weight:${(0, _webComponents.fontWeightSemibold)}}.reference-title-box{width:100%;height:24px;color:${(0, _webComponents.colorNeutralForeground1)};margin:0 0 ${(0, _webComponents.spacingVerticalXS)} 0}.reference-icon{display:flex}.reference-quote{color:${(0, _webComponents.colorNeutralForeground3)}}.reference-name,.reference-actions,.expand-button{display:inline-block}.metadata-text{margin-bottom:${(0, _webComponents.spacingVerticalXS)}}::slotted([slot="metadata-text-one"]),::slotted([slot="metadata-text-two"]),::slotted([slot="metadata-text-three"]){display:inline-flex;align-items:center;font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};font-weight:${(0, _webComponents.fontWeightRegular)}}.divider{display:inline-block;border-right:1px solid ${(0, _webComponents.colorNeutralStroke1)};height:8px;width:1px;margin:0 ${(0, _webComponents.spacingHorizontalSNudge)}}fluent-button::part(content){width:10px}`;
const DesignSystem = Object.freeze({
    prefix: "fabric",
    shadowRootMode: "open",
    registry: customElements
});
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-citation-reference\>
 */ const CitationReferenceDefinition = CitationReference.compose({
    name: `${DesignSystem.prefix}-citation-reference`,
    template: template$7,
    styles: styles$7,
    shadowOptions: {
        delegatesFocus: true
    }
});
/**
 * # Citation
 *
 * Citation gives context to references. It's an actionable (clickable) element that can reveal a popover with information pertaining to the reference.
 *
 * ```html
 * <fabric-citation show="true" href="https://bing.com">
 *   <span slot="index">${x => x.index}</span>
 * </fabric-citation>
 * ```
 */ class Citation extends (0, _fastElement.FASTElement) {
    constructor(){
        super();
        /**
     * ## popoverPlacement
     *
     * Sets the location of the popover when user hovers over citation
     */ this.popoverPosition = (0, _fabricWeb.PositioningShorthand).belowCenter;
        /**
     * # popoverContent
     *
     * The content which is rendered inside of the popover
     */ this.popoverContent = [];
        /**
     * # hasPopover
     *
     * Controls whether the popover is openable/showable
     */ this.hasPopover = false;
        /**
     * ## repositionMode
     *
     * Controls the repositioning behavior of the popover when it is about to overflow the viewport.
     */ this.repositionMode = (0, _fabricWeb.PopoverRepositionModes).flip;
        /**
     * # show
     *
     * shows popover when set to true
     */ this.show = false;
        this.target = "_self";
        this.popoverReference = undefined;
        this.mouseInPopover = true;
        /**
     * ## handleHoverLeave
     *
     * handler for popover hiding
     * @param event
     */ this.handleHoverLeave = ()=>{
            this.emitMouseLeaveEvent();
            if (this.hasPopover && !this.mouseInPopover) {
                this.show = false;
                this.emitChangeEvent();
            }
        };
        /**
     * # handlePopoverEnter
     */ this.handlePopoverEnter = ()=>{
            this.mouseInPopover = true;
        };
        /**
     * # handlePopoverLeave
     */ this.handlePopoverLeave = ()=>{
            this.mouseInPopover = false;
            this.handleHoverLeave();
        };
        /**
     * # addMouseOverEventListeners
     */ this.addMouseOverEventListeners = ()=>{
            var _a;
            const citationBase = (_a = this.popoverReference) === null || _a === void 0 ? void 0 : _a.querySelector(".citation-number");
            if (citationBase) {
                citationBase.addEventListener("mouseenter", this.handleHoverEnter);
                citationBase.addEventListener("mouseleave", this.handleHoverLeave);
            }
            const citationPopover = this.popoverReference;
            if (citationPopover) {
                citationPopover.addEventListener("mouseEnterPopover", this.handlePopoverEnter);
                citationPopover.addEventListener("mouseLeavePopover", this.handlePopoverLeave);
            }
        };
        this.handleHoverEnter = this.handleHoverEnter.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
    }
    indexReferenceChanged() {
        var _a, _b;
        this.index = parseInt(((_b = (_a = this.indexReference) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.innerText) || "");
    }
    /**
   * # popoverContentChanged
   *
   * Sets hasPopover to true when there is content. When there is no popover content the citation should not allow popover to open.
   */ popoverContentChanged() {
        if (this.popoverContent.length > 0) this.hasPopover = true;
    }
    popoverReferenceChanged() {
        if (this.popoverReference) {
            this.addMouseOverEventListeners();
            this.addKeyboardEventListeners();
        }
    }
    /**
   * # handleHoverEnter
   *
   * handler for popover showing
   * @param event
   */ handleHoverEnter() {
        this.mouseInPopover = true;
        this.emitMouseEnterEvent();
        if (this.hasPopover) {
            this.show = true;
            this.emitChangeEvent();
        }
    }
    /**
   * ## emitMouseEnterEvent
   */ emitMouseEnterEvent() {
        this.dispatchEvent(new CustomEvent("mouseenter", {
            detail: {
                target: this
            },
            bubbles: true
        }));
    }
    /**
   * ## emitMouseLeaveEvent
   */ emitMouseLeaveEvent() {
        this.dispatchEvent(new CustomEvent("mouseleave", {
            detail: {
                target: this
            },
            bubbles: true
        }));
    }
    /**
   * ## emitChangeEvent
   */ emitChangeEvent() {
        this.dispatchEvent(new CustomEvent("change", {
            detail: {
                target: this,
                show: this.show
            },
            bubbles: true
        }));
    }
    /**
   *  # handleKeyboardEvents
   */ handleKeyEvents(event) {
        if (event.key === "Enter" || event.key === " ") {
            if (this.hasPopover) {
                event.preventDefault();
                this.show = !this.show;
            }
        }
    }
    /**
   * # removeMouseOverEventListeners
   */ removeMouseOverEventListeners() {
        var _a;
        const citationBase = (_a = this.popoverReference) === null || _a === void 0 ? void 0 : _a.querySelector(".citation-number");
        if (citationBase) {
            citationBase.removeEventListener("mouseenter", this.handleHoverEnter);
            citationBase.removeEventListener("mouseleave", this.handleHoverLeave);
        }
        const citationPopover = this.popoverReference;
        if (citationPopover) {
            citationPopover.removeEventListener("mouseEnterPopover", this.handlePopoverEnter);
            citationPopover.removeEventListener("mouseLeavePopover", this.handlePopoverLeave);
        }
    }
    addKeyboardEventListeners() {
        this.addEventListener("keydown", this.handleKeyEvents);
    }
    removeKeyboardEventListeners() {
        this.removeEventListener("keydown", this.handleKeyEvents);
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _fabricWeb.PopoverDefinition).define(DesignSystem.registry);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeMouseOverEventListeners();
        this.removeKeyboardEventListeners();
    }
}
__decorate([
    (0, _fastElement.observable)
], Citation.prototype, "index", void 0);
__decorate([
    (0, _fastElement.observable)
], Citation.prototype, "indexReference", void 0);
__decorate([
    (0, _fastElement.attr)
], Citation.prototype, "size", void 0);
__decorate([
    (0, _fastElement.attr)
], Citation.prototype, "href", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: "popover-position"
    })
], Citation.prototype, "popoverPosition", void 0);
__decorate([
    (0, _fastElement.observable)
], Citation.prototype, "popoverContent", void 0);
__decorate([
    (0, _fastElement.observable)
], Citation.prototype, "hasPopover", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: "reposition-mode"
    })
], Citation.prototype, "repositionMode", void 0);
__decorate([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.booleanConverter)
    })
], Citation.prototype, "show", void 0);
__decorate([
    (0, _fastElement.attr)
], Citation.prototype, "target", void 0);
__decorate([
    (0, _fastElement.observable)
], Citation.prototype, "popoverReference", void 0);
const styles$6 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host{font-weight:${(0, _webComponents.fontWeightRegular)};font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};max-width:fit-content;position:relative}${citationNumberStyles}

  :host([popover-position="above-start"]) ::part(popover){left:-18px}:host([popover-position="above-start"]) ::part(beak-shadow):after{left:0px}:host([popover-position="below-start"]) ::part(popover){left:-18px}:host([popover-position="below-start"]) ::part(beak-shadow):after{left:0px}:host([popover-position="above-end"]) ::part(popover){left:calc(100% + 17px)}:host([popover-position="above-end"]) ::part(beak-shadow):after{right:0px}:host([popover-position="below-end"]) ::part(popover){left:calc(100% + 17px)}:host([popover-position="below-end"]) ::part(beak-shadow):after{right:0px}:host([popover-position="end-top"]) ::part(popover){top:-14px}:host([popover-position="end-top"]) ::part(beak-shadow):after{top:4px}:host([popover-position="start-top"]) ::part(popover){top:-14px}:host([popover-position="start-top"]) ::part(beak-shadow):after{top:4px}:host([popover-position="end-bottom"]) ::part(popover){bottom:-14px}:host([popover-position="end-bottom"]) ::part(beak-shadow):after{bottom:0px}:host([popover-position="start-bottom"]) ::part(popover){bottom:-14px}:host([popover-position="start-bottom"]) ::part(beak-shadow):after{bottom:0px}`;
/**
 * The template for the Citation component.
 * @public
 */ function CitationTemplate(options = {}) {
    return (0, _fastElement.html)` ${(0, _fastFoundation.startSlotTemplate)(options)}<div class="base" part="base"><fabric-popover beak clickable="false" open="${(x)=>x.show}" class="popover" position="${(x)=>x.popoverPosition}" reposition-mode="${(x)=>x.repositionMode}" anchor="citation-anchor" ${(0, _fastElement.ref)("popoverReference")}><div slot="popover-content" class="popover-content"><slot name="popover" ${(0, _fastElement.slotted)("popoverContent")}></slot></div><a tabindex="0" href="${(x)=>x.href}" target="${(x)=>x.target}" id="citation-anchor" class="citation-number" aria-label="${(x)=>`Citation ${x.index}`}" slot="popover-trigger"><slot name="index" ${(0, _fastElement.slotted)("indexReference")}></slot></a></fabric-popover></div>${(0, _fastFoundation.endSlotTemplate)(options)} `;
}
const template$6 = CitationTemplate();
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-citation\>
 */ const definition$3 = Citation.compose({
    name: `${DesignSystem.prefix}-citation`,
    template: template$6,
    styles: styles$6,
    shadowOptions: {
        delegatesFocus: true,
        mode: DesignSystem.shadowRootMode
    }
});
/**
 * # ReferenceGroup
 *
 * A collapsable element that composes a Reference List of Fluent References. It adds keyboard navigation and also removes tab focusing from the child references.
 *
 * ```html
 * <fabric-reference-group>
 *    <fabric-reference-list>
 *        <fabric-reference>
 *        </fabric-reference>
 *    </fabric-reference-list>
 * </fabric-reference-group>
 * ```
 */ class ReferenceGroup extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        /**
     * ## referenceList
     * Encapsulated list of references.
     *
     * @type Array<ReferenceList>
     */ this.referenceList = [];
        /**
     * # expanded
     * Set to true to expand the group
     *
     * @type boolean
     */ this.expanded = false;
    }
    /**
   * ## expandedChanged
   * When the expanded property changes, we need to update the aria-expanded attribute.
   */ expandedChanged() {
        this.dispatchEvent(new CustomEvent("change", {
            detail: {
                expanded: this.expanded
            }
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _webComponents.ButtonDefinition).define(DesignSystem.registry);
    }
}
__decorate([
    (0, _fastElement.observable)
], ReferenceGroup.prototype, "referenceList", void 0);
__decorate([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.booleanConverter)
    })
], ReferenceGroup.prototype, "expanded", void 0);
const chevronDownSVG$1 = (0, _fastElement.html)`<svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L5 4.79289L9.14645 0.646447C9.34171 0.451185 9.65829 0.451185 9.85355 0.646447C10.0488 0.841709 10.0488 1.15829 9.85355 1.35355L5.35355 5.85355C5.15829 6.04882 4.84171 6.04882 4.64645 5.85355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z" fill="currentColor" /></svg>`;
const chevronUpSVG$1 = (0, _fastElement.html)`<svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.146447 5.35355C0.341709 5.54882 0.658291 5.54882 0.853553 5.35355L5 1.20711L9.14645 5.35355C9.34171 5.54882 9.65829 5.54882 9.85355 5.35355C10.0488 5.15829 10.0488 4.84171 9.85355 4.64645L5.35355 0.146447C5.15829 -0.0488156 4.84171 -0.0488156 4.64645 0.146447L0.146447 4.64645C-0.0488155 4.84171 -0.0488155 5.15829 0.146447 5.35355Z" fill="currentColor" /></svg>`;
/**
 * The template for the ReferenceGroup component.
 * @public
 */ function ReferenceGroupTemplate(options) {
    return (0, _fastElement.html)`<div class="reference-group-label" aria-expanded="${(x)=>x.expanded}"><slot></slot><div class="group-expand-button-container"><fluent-button class="group-expand-button" @click=${(x)=>x.expanded = !x.expanded} appearance="transparent">${(0, _fastElement.when)((x)=>x.expanded, chevronUpSVG$1, chevronDownSVG$1)}</fluent-button></div></div><div class="reference-list-container" ?hidden="${(x)=>!x.expanded}" aria-expanded="${(x)=>x.expanded}"><slot name="reference-list" ${(0, _fastElement.slotted)("referenceList")}></slot></div>`;
}
const template$5 = ReferenceGroupTemplate();
const styles$5 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host{font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase100)};font-weight:${(0, _webComponents.fontWeightRegular)};line-height:${(0, _webComponents.lineHeightBase200)};color:${(0, _webComponents.colorNeutralForeground3)};flex-direction:column;margin:2px 0}.reference-group-label{display:flex;align-items:center;line-height:${(0, _webComponents.lineHeightBase100)}}:host .group-expand-button-container fluent-button::part(control){min-height:16px;height:16px;width:16px;min-width:16px;padding:${(0, _webComponents.spacingVerticalSNudge)};margin-left:${(0, _webComponents.spacingHorizontalXS)}}:host .group-expand-button-container fluent-button::part(content){width:10px}.reference-list-container{height:0;overflow:hidden;visibility:visible}.reference-list-container[hidden]{visibility:hidden}:host .reference-list-container[aria-expanded='true']{height:fit-content}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-reference-group\>
 */ const definition$2 = ReferenceGroup.compose({
    name: `${DesignSystem.prefix}-reference-group`,
    template: template$5,
    styles: styles$5,
    shadowOptions: {
        delegatesFocus: true
    }
});
/**
 * # ReferenceList
 *
 * Composes a list of fluent references into a styled list with keyboard navigation. Meant to be composed inside of a ReferenceGroup component.
 *
 * ```html
 * <fabric-reference-list>
 *    <fabric-reference citation-index="1"></fabric-reference>
 *    <fabric-reference citation-index="2"></fabric-reference>
 *    <fabric-reference citation-index="3"></fabric-reference>
 *    <fabric-reference citation-index="4"></fabric-reference>
 * </fabric-reference-list>
 * ```
 */ class ReferenceList extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        /**
     * ## references
     * Encapsulated list of references
     * @type Array<Reference>
     */ this.references = [];
    }
    /**
   * ## _activeIndexChanged
   *
   * Checks for an active index and focuses the reference at that index.
   */ _activeIndexChanged() {
        if (this.references && this.activeIndex !== undefined) {
            const reference = this.references[this.activeIndex];
            reference.focus();
        }
    }
    /**
   * ## activeIndex
   *
   * getter for the active index of the focused reference element in the list
   */ get activeIndex() {
        return this._activeIndex;
    }
    /**
   * ## activeIndex
   *
   * setter for the active index of the focused reference element in the list
   */ set activeIndex(newIndex) {
        var _a;
        if (newIndex !== undefined && typeof newIndex === "number") this._activeIndex = newIndex % (((_a = this.references) === null || _a === void 0 ? void 0 : _a.length) || 0);
        else this._activeIndex = undefined;
    }
    /**
   * ## handleIndexUp
   *
   * Indexes up and shifts focus to the next element. Called when the keyboard up arrows is presed.
   */ handleIndexUp() {
        if (this.activeIndex) this.references[this.activeIndex].activeIndex = undefined;
        this.activeIndex = (this.activeIndex || 0) + 1;
    }
    /**
   * ## handleIndexDown
   *
   * Indexes down and shifts focus to the previous element. Called when the keyboard down arrow is presed.
   */ handleIndexDown() {
        var _a;
        if (this.activeIndex) this.references[this.activeIndex].activeIndex = undefined;
        this.activeIndex = (this.activeIndex || 0) - 1 + (((_a = this.references) === null || _a === void 0 ? void 0 : _a.length) || 0);
    }
    /**
   * ## trapFocus
   *
   * A keyboard event handler that sets the focusable elements to the references array and routes keys to the corresponding action.
   *
   * @param event
   */ trapFocus(event) {
        var _a;
        if (this.references.length > 0 && ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === "fabric-reference") {
            this.activeIndex = this.references.indexOf(document.activeElement);
            if (event.key === "ArrowDown") this.handleIndexUp();
            if (event.key === "ArrowUp" || event.shiftKey && event.key === "Tab") this.handleIndexDown();
            if (event.key === "Home") this.activeIndex = 0;
            if (event.key === "End") this.activeIndex = this.references.length - 1;
            if (event.key === "Escape") {
                const activeReference = document.activeElement;
                activeReference.blur();
            }
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keydown", this.trapFocus);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.trapFocus);
    }
}
__decorate([
    (0, _fastElement.observable)
], ReferenceList.prototype, "references", void 0);
__decorate([
    (0, _fastElement.observable)
], ReferenceList.prototype, "_activeIndex", void 0);
/**
 * The template for the ReferenceList component.
 * @public
 */ function ReferenceListTemplate() {
    return (0, _fastElement.html)`<template slot="reference-list">${(0, _fastFoundation.startSlotTemplate)({})}<div class="base"><slot name="references" ${(0, _fastElement.slotted)("references")}></slot></div>${(0, _fastFoundation.endSlotTemplate)({})}</template>`;
}
const template$4 = ReferenceListTemplate();
const styles$4 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host ::slotted(fabric-reference){margin-top:${(0, _webComponents.spacingVerticalXS)}}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-reference-list\>
 */ const ReferenceListDefinition = ReferenceList.compose({
    name: `${DesignSystem.prefix}-reference-list`,
    template: template$4,
    styles: styles$4,
    shadowOptions: {
        delegatesFocus: true
    }
});
const ReferenceAttributeNames = {
    citationHref: "citation-href",
    citationIndex: "citation-index",
    metadataText: "metadata-text"
};
/**
 * # Reference
 *
 * Fluent Reference. A collapsable frame designed to compose information related to content source and citation.
 *
 *
 * ```html
 * <fabric-reference>
 *    <span slot="index">1</span>
 *    <span slot="label">Title</span>
 *    <span slot="metadata-text-one">Word</span>
 *    <span slot="metadata-text-two">Private</span>
 *    <span slot="metadata-text-three">Last Edited Yesterday by Monica Kane</span>
 *    <span slot="excerpt">"...Summary of reference"</span>
 *    <svg slot="reference-icon"></svg>
 * </fabric-reference>
 * ```
 */ class Reference extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        /**
     * ## actions
     *
     * the elements slotted into the actions slot
     *
     * @type HTMLElement[]
     */ this.actions = [];
        /**
     * # actionsButtons
     * Actionable elements pulled from the actions slot.
     *
     * @type HTMLElement[]
     */ this.actionsButtons = [];
        /**
     * ## indexReference
     *
     * A reference to the slotted index element
     */ this.indexReference = [];
        /**
     * ## metadataTextOne
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextOne = [];
        /**
     * ## hasMetadataTextOne
     * true when text is present
     */ this.hasMetadataTextOne = false;
        /**
     * ## metadataTextTwo
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextTwo = [];
        /**
     * ## hasMetadataTextTwo
     * true when text is present
     */ this.hasMetadataTextTwo = false;
        /**
     * ## metadataTextThree
     *
     * text metadata content for citation. appears above reference quote
     */ this.metadataTextThree = [];
        /**
     * ## hasMetadataTextThree
     * true when text is present
     */ this.hasMetadataTextThree = false;
        /**
     * ## loading
     * Used to set loading state of the reference
     *
     * @type boolean
     */ this.loading = false;
        /**
     * ## _focusableELements
     * Elements where focus becomes trapped for keyboard navigation.
     *
     * @type HTMLElement[]
     */ this._focusableElements = [];
        /**
     * ##_activeIndex
     *
     * the active index of the focused element
     *
     * @type number | undefined
     */ this._activeIndex = undefined;
    }
    /**
   * ## actionsChanged
   *
   * when elements are slotted into the actions section they are looped through and queried for fluent-menus and fluent-buttons. These elements are added to the actionsButtons array which is then merged into the _focusableElements array.
   * @type () => void
   */ actionsChanged() {
        this.actions.forEach((action)=>{
            if (action.tagName.toLowerCase() === "fluent-menu") {
                const menuButton = action.querySelector("fluent-menu-button");
                this.actionsButtons.push(menuButton);
            } else if (action.tagName.toLowerCase() === "fluent-button") this.actionsButtons.push(action);
        });
    }
    indexReferenceChanged() {
        var _a, _b;
        this.index = parseInt(((_b = (_a = this.indexReference) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.innerText) || "");
    }
    /**
   * ## metadataTextOne
   * change handler
   */ metadataTextOneChanged() {
        if (this.metadataTextOne.length > 0) this.hasMetadataTextOne = true;
        else this.hasMetadataTextOne = false;
    }
    /**
   * ## metadataTextTwo
   * change handler
   */ metadataTextTwoChanged() {
        if (this.metadataTextTwo.length > 0) this.hasMetadataTextTwo = true;
        else this.hasMetadataTextTwo = false;
    }
    /**
   * ## metadataTextThree
   * change handler
   */ metadataTextThreeChanged() {
        if (this.metadataTextThree && this.metadataTextThree.length > 0) this.hasMetadataTextThree = true;
        else this.hasMetadataTextThree = false;
    }
    /**
   * ## expandedChanged
   */ expandedChanged() {
        this.dispatchEvent(new CustomEvent("change", {
            detail: {
                target: this,
                expanded: this.expanded
            },
            bubbles: true
        }));
    }
    /**
   * ## emitDismissEvent
   * Called when the reference is dismissed.
   *
   * @type () => void
   */ emitDismissEvent() {
        this.dispatchEvent(new CustomEvent("referenceDismiss", {
            detail: {
                target: this
            },
            bubbles: true
        }));
    }
    _activeIndexChanged() {
        if (this._focusableElements.length > 0 && typeof this._activeIndex === "number") this._focusableElements[this.activeIndex || 0].focus();
    }
    /**
   * ## activeIndex
   *
   * getter for _activeIndex
   */ get activeIndex() {
        return this._activeIndex;
    }
    /**
   * ## activeIndex
   *
   * setter for _activeIndex. Sets value to undefined when null or undefined. Index value is capped to the length of focusable elements.
   */ set activeIndex(newIndex) {
        if (typeof newIndex === "number" && newIndex > 0) this._activeIndex = newIndex % this._focusableElements.length;
        else if (newIndex === undefined || newIndex === null) this._activeIndex = undefined;
        else this._activeIndex = 0;
    }
    /**
   * ## handleIndexUp
   *
   * Handles index up for keyboard navigation. Increases with right arrow press.
   */ handleIndexUp() {
        if (this.activeIndex !== undefined && this.activeIndex >= 0) this.activeIndex = this.activeIndex + 1;
        else this.activeIndex = 0;
    }
    /**
   * ## handleIndexDown
   *
   * Handles index down for keyboard navigation. Decreases with left arrow press.
   */ handleIndexDown() {
        this.activeIndex = (this._activeIndex || 0) + this._focusableElements.length - 1;
    }
    /**
   * ## handleKeyEvents
   *
   * Handles key events for control
   * @param event
   */ handleKeyEvents(event) {
        if (this.activeIndex === undefined && event.key === "Enter") this.activeIndex = this._focusableElements.length - 1;
        if (this.activeIndex === undefined && event.key === " ") {
            this.expanded = !this.expanded;
            this.activeIndex = this._focusableElements.length - 1;
        }
        if (event.key === "ArrowRight") this.handleIndexUp();
        if (event.key === "ArrowLeft") this.handleIndexDown();
        if (event.key === "ArrowUp" || event.key === "ArrowDown") event.preventDefault();
        if (event.shiftKey && event.key === "Tab" || event.key === "Escape") this.blur();
    }
    /**
   * ## trapFocus
   *
   * A keyboard event handler that sets the focusable elements to the _focusableElements array and routes keys to the corresponding action.
   *
   * @param event
   */ trapFocus(event) {
        this.gatherFocusableElements();
        if (this._focusableElements.length > 0) this.handleKeyEvents(event);
    }
    handleBlur(event) {
        this.activeIndex = undefined;
    }
    /**
   * ## gatherFocusableElements
   *
   * Queries the shadowRoot for 'fluent-button', 'fabric-citation' and 'fluent-menu-button'. These are the expected controls to be slotted into the reference.
   */ gatherFocusableElements() {
        var _a;
        const focusableElements = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("fluent-button, fabric-citation, fluent-menu-button");
        if (focusableElements) {
            const focusableElementsArray = Array.from(focusableElements);
            focusableElementsArray.splice(1, 0, ...this.actionsButtons);
            this._focusableElements = focusableElementsArray;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _webComponents.ButtonDefinition).define(DesignSystem.registry);
        definition$3.define(DesignSystem.registry);
        this.addEventListener("keydown", this.trapFocus);
        this.addEventListener("blur", this.handleBlur);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.trapFocus);
        this.removeEventListener("blur", this.handleBlur);
    }
}
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "actions", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "actionsButtons", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "index", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "indexReference", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "metadataTextOne", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "hasMetadataTextOne", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "metadataTextTwo", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "hasMetadataTextTwo", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "metadataTextThree", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "hasMetadataTextThree", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: ReferenceAttributeNames.citationHref
    })
], Reference.prototype, "citationHref", void 0);
__decorate([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.booleanConverter)
    })
], Reference.prototype, "loading", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "expanded", void 0);
__decorate([
    (0, _fastElement.observable)
], Reference.prototype, "_activeIndex", void 0);
// import type { ReferenceOptions } from './reference.options.js';
const chevronDownSVG = (0, _fastElement.html)`<svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L5 4.79289L9.14645 0.646447C9.34171 0.451185 9.65829 0.451185 9.85355 0.646447C10.0488 0.841709 10.0488 1.15829 9.85355 1.35355L5.35355 5.85355C5.15829 6.04882 4.84171 6.04882 4.64645 5.85355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z" fill="currentColor" /></svg>`;
const chevronUpSVG = (0, _fastElement.html)`<svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.146447 5.35355C0.341709 5.54882 0.658291 5.54882 0.853553 5.35355L5 1.20711L9.14645 5.35355C9.34171 5.54882 9.65829 5.54882 9.85355 5.35355C10.0488 5.15829 10.0488 4.84171 9.85355 4.64645L5.35355 0.146447C5.15829 -0.0488156 4.84171 -0.0488156 4.64645 0.146447L0.146447 4.64645C-0.0488155 4.84171 -0.0488155 5.15829 0.146447 5.35355Z" fill="currentColor" /></svg>`;
const dismissSVG = (0, _fastElement.html)`<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.588591 0.715694L0.646447 0.646447C0.820013 0.47288 1.08944 0.453595 1.28431 0.588591L1.35355 0.646447L6 5.293L10.6464 0.646447C10.8417 0.451185 11.1583 0.451185 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.707 6L11.3536 10.6464C11.5271 10.82 11.5464 11.0894 11.4114 11.2843L11.3536 11.3536C11.18 11.5271 10.9106 11.5464 10.7157 11.4114L10.6464 11.3536L6 6.707L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451185 11.1583 0.451185 10.8417 0.646447 10.6464L5.293 6L0.646447 1.35355C0.47288 1.17999 0.453595 0.910563 0.588591 0.715694L0.646447 0.646447L0.588591 0.715694Z" fill="currentColor" /></svg>`;
/**
 * The template for the Reference component.
 * @public
 */ function ReferenceTemplate() {
    return (0, _fastElement.html)`<template slot="references"><div class="base" part="base" tabindex="0" aria-expanded="${(x)=>x.expanded}"><div class="reference-title-box reference-row"><fabric-citation href="${(x)=>x.citationHref}" tabindex="-1"><span slot="index"><slot name="index" ${(0, _fastElement.slotted)("indexReference")}></slot></span></fabric-citation><div class="reference-icon"><slot name="reference-icon"></slot></div><div class="reference-name"><slot name="label"></slot></div><div class="reference-actions"><slot name="actions" ${(0, _fastElement.slotted)("actions")}></slot></div><div class="expand-button">${(0, _fastElement.when)((x)=>x.loading, (0, _fastElement.html)`<fluent-button tabindex="-1" @click=${(x)=>x.emitDismissEvent()} appearance="transparent">${dismissSVG}</fluent-button>`, (0, _fastElement.html)`<fluent-button tabindex="-1" @click=${(x)=>x.expanded = !x.expanded} appearance="transparent">${(0, _fastElement.when)((x)=>x.expanded, chevronUpSVG, chevronDownSVG)}</fluent-button>`)}</div></div><div class="metadata-container" aria-hidden="${(x)=>!x.expanded}">${(0, _fastElement.when)((x)=>x.expanded, (0, _fastElement.html)`<div class="metadata-text reference-row"><slot name="metadata-icon-start"></slot><slot name="metadata-text-one" ${(0, _fastElement.slotted)("metadataTextOne")}></slot>${(0, _fastElement.when)((x)=>x.hasMetadataTextOne && x.hasMetadataTextTwo, (0, _fastElement.html)`<div class="divider"></div>`)}<slot name="metadata-text-two" ${(0, _fastElement.slotted)("metadataTextTwo")}></slot>${(0, _fastElement.when)((x)=>x.hasMetadataTextTwo && x.hasMetadataTextThree, (0, _fastElement.html)`<div class="divider"></div>`)}<slot name="metadata-text-three" ${(0, _fastElement.slotted)("metadataTextThree")}></slot><slot name="metadata-icon-end"></slot></div><div class="reference-quote"><slot name="excerpt"></slot></div>`)}</div></div></template>`;
}
const template$3 = ReferenceTemplate();
const styles$3 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  .reference-row{display:flex;flex-direction:row;align-items:center}.base{font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase200)};font-weight:${(0, _webComponents.fontWeightRegular)};line-height:${(0, _webComponents.lineHeightBase200)};display:flex;flex-direction:column;border:1px solid ${(0, _webComponents.colorNeutralStroke1)};border-radius:${(0, _webComponents.borderRadiusMedium)};padding:0 ${(0, _webComponents.spacingHorizontalS)};color:${(0, _webComponents.colorNeutralForeground1)};width:238px}fabric-citation{margin-right:${(0, _webComponents.spacingHorizontalXS)}}.expand-button fluent-button::part(control){min-height:24px;height:24px;min-width:unset;padding:${(0, _webComponents.spacingVerticalSNudge)}}.reference-name{flex-grow:1;padding-right:${(0, _webComponents.spacingHorizontalXS)};padding-left:${(0, _webComponents.spacingHorizontalSNudge)};font-weight:${(0, _webComponents.fontWeightSemibold)}}.reference-title-box{width:100%;height:24px;color:${(0, _webComponents.colorNeutralForeground1)};margin:${(0, _webComponents.spacingVerticalXS)} 0}.reference-icon{display:flex}.reference-quote{margin-bottom:${(0, _webComponents.spacingVerticalS)}}.reference-name,.reference-actions,.expand-button{display:inline-block}.metadata-text{margin-bottom:${(0, _webComponents.spacingVerticalXS)}}::slotted([slot="metadata-text-one"]),::slotted([slot="metadata-text-two"]),::slotted([slot="metadata-text-three"]){display:flex;align-items:center;font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};font-weight:${(0, _webComponents.fontWeightRegular)}}.divider{display:inline-block;border-right:1px solid ${(0, _webComponents.colorNeutralStroke1)};height:8px;width:1px;margin:0 ${(0, _webComponents.spacingHorizontalSNudge)}}fluent-button::part(content){width:10px}.base[aria-expanded="true"] .metadata-container{}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-reference\>
 */ const ReferenceDefinition = Reference.compose({
    name: `${DesignSystem.prefix}-reference`,
    template: template$3,
    styles: styles$3,
    shadowOptions: {
        delegatesFocus: true
    }
});
/**
 * Sidecar Shell event names
 */ const SidecarShellEventNames = {
    dismiss: "dismissSidecarShell",
    close: "closeSidecarShell",
    open: "openSidecarShell",
    openChanged: "openSidecarShellChanged",
    detach: "detachSidecarShell",
    attach: "attachSidecarShell"
};
class SidecarShellHeader extends (0, _fastElement.FASTElement) {
    /**
   * public dismissSidecar
   * emits the "dismissSidecarShell" event when called
   */ dismissSidecar() {
        this.$emit(SidecarShellEventNames.dismiss);
    }
    /**
   * public detachSidecar
   * emits the "detachSidecarShell" event when called
   */ detachSidecar() {
        this.$emit(SidecarShellEventNames.detach);
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _webComponents.ButtonDefinition).define(DesignSystem.registry);
    }
}
const m365Icon = (0, _fastElement.html)`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.625 1.96094L12.5 2.15163V7.55279L9.5 8.24974L8.50001 9.62186V11.7788C8.50001 13.2282 9.28404 14.5642 10.5494 15.271L13.3773 16.8506L8.5 19.4301L6.47245 19.7191L4.54939 18.6449C3.28403 17.9381 2.5 16.6022 2.5 15.1528V8.84836C2.5 7.3986 3.28445 6.06232 4.55035 5.35568L10.1984 2.2029L10.1951 2.20523L10.625 1.96094Z" fill="url(#paint0_radial_848_12319)" /><path d="M10.625 1.96094L12.5 2.15163V7.55279L9.5 8.24974L8.50001 9.62186V11.7788C8.50001 13.2282 9.28404 14.5642 10.5494 15.271L13.3773 16.8506L8.5 19.4301L6.47245 19.7191L4.54939 18.6449C3.28403 17.9381 2.5 16.6022 2.5 15.1528V8.84836C2.5 7.3986 3.28445 6.06232 4.55035 5.35568L10.1984 2.2029L10.1951 2.20523L10.625 1.96094Z" fill="url(#paint1_linear_848_12319)" /><path d="M16.5 8.99988L21.5 11.9999L22.5 12.9999V15.1525C22.5 16.6019 21.716 17.9379 20.4506 18.6447L14.4506 21.9961C13.2384 22.6732 11.7616 22.6732 10.5494 21.9961L4.54939 18.6447C4.43277 18.5795 4.32024 18.5091 4.21204 18.4336L4.54936 18.6221C5.76162 19.2992 7.23833 19.2992 8.45059 18.6221L14.4506 15.2706C15.7159 14.5638 16.5 13.2279 16.5 11.7785V8.99988Z" fill="url(#paint2_radial_848_12319)" /><path d="M16.5 8.99988L21.5 11.9999L22.5 12.9999V15.1525C22.5 16.6019 21.716 17.9379 20.4506 18.6447L14.4506 21.9961C13.2384 22.6732 11.7616 22.6732 10.5494 21.9961L4.54939 18.6447C4.43277 18.5795 4.32024 18.5091 4.21204 18.4336L4.54936 18.6221C5.76162 19.2992 7.23833 19.2992 8.45059 18.6221L14.4506 15.2706C15.7159 14.5638 16.5 13.2279 16.5 11.7785V8.99988Z" fill="url(#paint3_linear_848_12319)" /><path d="M20.4496 5.3556L14.4496 2.00634C13.2379 1.32992 11.7621 1.32992 10.5503 2.00634L10.1972 2.20346C9.1402 2.94738 8.5 4.16447 8.5 5.47418V9.65284L10.5503 8.50832C11.7621 7.8319 13.2379 7.8319 14.4496 8.50832L20.4496 11.8576C21.6867 12.5481 22.464 13.84 22.4988 15.2515C22.4996 15.2186 22.5 15.1857 22.5 15.1527V8.84829C22.5 7.39852 21.7155 6.06224 20.4496 5.3556Z" fill="url(#paint4_radial_848_12319)" /><path d="M20.4496 5.3556L14.4496 2.00634C13.2379 1.32992 11.7621 1.32992 10.5503 2.00634L10.1972 2.20346C9.1402 2.94738 8.5 4.16447 8.5 5.47418V9.65284L10.5503 8.50832C11.7621 7.8319 13.2379 7.8319 14.4496 8.50832L20.4496 11.8576C21.6867 12.5481 22.464 13.84 22.4988 15.2515C22.4996 15.2186 22.5 15.1857 22.5 15.1527V8.84829C22.5 7.39852 21.7155 6.06224 20.4496 5.3556Z" fill="url(#paint5_linear_848_12319)" /><defs><radialGradient id="paint0_radial_848_12319" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.9409 7.67621) rotate(112.544) scale(14.6574 12.0667)"><stop offset="0.206732" stop-color="#45D586" /><stop offset="0.875628" stop-color="#128245" /></radialGradient><linearGradient id="paint1_linear_848_12319" x1="9.41403" y1="18.1348" x2="8.61684" y2="16.6511" gradientUnits="userSpaceOnUse"><stop offset="0.9999" stop-color="#0F773F" /><stop offset="1" stop-color="#0078D4" stop-opacity="0" /></linearGradient><radialGradient id="paint2_radial_848_12319" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.81249 16.8251) rotate(-3.9995) scale(15.3873 9.66209)"><stop offset="0.140029" stop-color="#FBFF47" /><stop offset="0.952721" stop-color="#54B228" /></radialGradient><linearGradient id="paint3_linear_848_12319" x1="19.3089" y1="11.2185" x2="18.4688" y2="12.6818" gradientUnits="userSpaceOnUse"><stop offset="0.9999" stop-color="#27770B" /><stop offset="1" stop-color="#8C66BA" stop-opacity="0" /></linearGradient><radialGradient id="paint4_radial_848_12319" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.1452 11.7414) rotate(-138.33) scale(14.2509 8.12793)"><stop stop-color="#95FEA0" /><stop offset="0.839255" stop-color="#10B7B7" /></radialGradient><linearGradient id="paint5_linear_848_12319" x1="8.5" y1="6.94488" x2="10.1334" y2="6.94488" gradientUnits="userSpaceOnUse"><stop offset="0.9999" stop-color="#0A7B7B" /><stop offset="1" stop-color="#436DCD" stop-opacity="0" /></linearGradient></defs></svg>`;
const dismissIcon = (0, _fastElement.html)`<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.588591 0.215694L0.646447 0.146447C0.820013 -0.0271197 1.08944 -0.046405 1.28431 0.0885911L1.35355 0.146447L6.5 5.293L11.6464 0.146447C11.82 -0.0271197 12.0894 -0.046405 12.2843 0.0885911L12.3536 0.146447C12.5271 0.320013 12.5464 0.589437 12.4114 0.784306L12.3536 0.853553L7.207 6L12.3536 11.1464C12.5271 11.32 12.5464 11.5894 12.4114 11.7843L12.3536 11.8536C12.18 12.0271 11.9106 12.0464 11.7157 11.9114L11.6464 11.8536L6.5 6.707L1.35355 11.8536C1.17999 12.0271 0.910563 12.0464 0.715694 11.9114L0.646447 11.8536C0.47288 11.68 0.453595 11.4106 0.588591 11.2157L0.646447 11.1464L5.793 6L0.646447 0.853553C0.47288 0.679987 0.453595 0.410563 0.588591 0.215694L0.646447 0.146447L0.588591 0.215694Z" fill="#424242" /></svg>`;
/**
 * The template for the sidecar-shell-header component.
 * @public
 */ function SidecarShellHeaderTemplate() {
    return (0, _fastElement.html)`<template slot="header"><div class="title-container"><slot name="icon" part="icon">${m365Icon}</slot><h2 class="title"><slot name="title" part="title">fluent</slot></h2><slot name="badges" part="badges"></slot></div><div class="buttons-container"><slot name="detach" part="detach"></slot><slot name="overflow" part="overflow"></slot><fluent-button part="dismiss" class="dismiss-button" appearance="subtle" @click="${(x)=>x.dismissSidecar()}">${dismissIcon}</fluent-button></div></template>`;
}
const template$2 = SidecarShellHeaderTemplate();
const styles$2 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host{height:32px;padding:${(0, _webComponents.spacingHorizontalL)};font-family:${(0, _webComponents.fontFamilyBase)};color:${(0, _webComponents.colorNeutralForeground1)};justify-content:space-between;align-items:center;flex-grow:1}:host .title-container{display:flex;align-items:center}:host h2.title{max-width:100px;padding:0px 4px 0px 8px;margin:0px;display:inline;font-size:${(0, _webComponents.fontSizeBase400)};line-height:${(0, _webComponents.lineHeightBase400)};weight:${(0, _webComponents.fontWeightSemibold)}}:host .buttons-container{display:flex;align-items:center}fluent-button.dismiss-button{display:flex;background-color:transparent;border:none;cursor:pointer}fluent-button.dismiss-button svg{font-size:12px;height:12px;width:12px}fluent-button.dismiss-button::part(control){min-width:unset;min-height:unset;margin:unset;padding:8px}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-sidecar-shell-header\>
 */ const definition$1 = SidecarShellHeader.compose({
    name: `${DesignSystem.prefix}-sidecar-shell-header`,
    template: template$2,
    styles: styles$2,
    shadowOptions: {
        delegatesFocus: true
    }
});
class SidecarShell extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        /**
     * The open attribute. Opens the sidecar from the right side of the viewport.
     */ this.open = false;
        /**
     * The detach attribute. Detaches the sidecar from the page. Behavior and styling currently undefined.
     */ this.detach = false;
        /**
     * internal
     */ this.header = [];
        /**
     * internal
     */ this.content = [];
        /**
     * internal
     */ this.footer = [];
        /**
     * internal
     */ this.footerOptional = [];
    }
    /**
   * openChanged
   *
   * Emits events for open and dismiss on changes
   */ openChanged() {
        this.$emit(SidecarShellEventNames.openChanged);
    }
    /**
   * toggleSidecar
   * a public method to open and close the sidecar
   */ toggleSidecar() {
        this.open = !this.open;
    }
    /**
   * dismissSidecar
   * a public method to close the sidecar
   */ dismisSidecar() {
        this.open = false;
    }
    /**
   * openSidecar
   * a public method to open the sidecar
   */ openSidecar() {
        this.open = true;
    }
    /**
   * detachSidecar
   * a public method to detach the sidecar from the side of the screen. Behavior for detached mode is currently undefined.
   */ detachSidecar() {
        this.detach = true;
    }
    /**
   * attachSidecar
   * a public method to re-attach the sidecar to the side of the screen. Behavior for detached mode is currently undefined.
   */ attachSidecar() {
        this.detach = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener(SidecarShellEventNames.dismiss, this.dismisSidecar);
        this.addEventListener(SidecarShellEventNames.open, this.openSidecar);
        this.addEventListener(SidecarShellEventNames.detach, this.detachSidecar);
        this.addEventListener(SidecarShellEventNames.attach, this.attachSidecar);
    }
}
__decorate([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], SidecarShell.prototype, "open", void 0);
__decorate([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], SidecarShell.prototype, "detach", void 0);
__decorate([
    (0, _fastElement.observable)
], SidecarShell.prototype, "header", void 0);
__decorate([
    (0, _fastElement.observable)
], SidecarShell.prototype, "content", void 0);
__decorate([
    (0, _fastElement.observable)
], SidecarShell.prototype, "footer", void 0);
__decorate([
    (0, _fastElement.observable)
], SidecarShell.prototype, "footerOptional", void 0);
/**
 * The template for the SidecarShell component.
 * @public
 */ function SidecarShellTemplate() {
    return (0, _fastElement.html)`<template ?open="${(x)=>x.open}" tabindex="${(x)=>x.open ? 0 : -1}"><div class="header"><slot name="header" ${(0, _fastElement.slotted)("header")}></slot></div><div class="content"><slot name="content" ${(0, _fastElement.slotted)("content")}></slot>${(0, _fastElement.when)((x)=>x.content.length === 0, (0, _fastElement.html)`<slot part="slot"></slot>`)}</div><div class="footer"><div class="footer-optional"><slot name="footer-optional" ${(0, _fastElement.slotted)("footerOptional")}></slot></div><slot name="footer" ${(0, _fastElement.slotted)("footer")}></slot></div></template>`;
}
const template$1 = SidecarShellTemplate();
const styles$1 = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host{--sidecar-width:320px;font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase300)};color:${(0, _webComponents.colorNeutralForeground1)};display:flex;flex-shrink:0;flex-direction:column;overflow:hidden;height:100%;width:0px;border-left:1px solid ${(0, _webComponents.colorNeutralStroke3)};background:${(0, _webComponents.colorNeutralBackground2)};transition-property:width;transition-duration:${(0, _webComponents.durationFast)};transition-timing-function:${(0, _webComponents.curveAccelerateMid)};position:relative}@media (max-width:320px){:host{--sidecar-width:100%}}:host([open]){transition-timing-function:${(0, _webComponents.curveDecelerateMid)};width:var(--sidecar-width)}:host .header{width:var(--sidecar-width);height:64px;flex-shrink:0}:host([no-header]) .header{display:none}:host .content{width:var(--sidecar-width);overflow:auto;flex-grow:1}:host .footer{width:var(--sidecar-width);flex-shrink:0;min-height:92px}:host([no-footer]) .footer{display:none}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-sidecarshell\>
 */ const SidecarshellDefinition = SidecarShell.compose({
    name: `${DesignSystem.prefix}-sidecar-shell`,
    template: template$1,
    styles: styles$1,
    shadowOptions: {
        delegatesFocus: true
    }
});
const TextareaAttributeNames = {
    hideCharacterCount: "hide-character-count",
    maxLength: "max-length",
    errorMessage: "error-message"
};
/**
 * DefaultMaxCharacters
 *
 * the default for maximum number of characters allowed inside of the text area.
 */ const DefaultMaxCharacters = 500;
/** DefaultErrorMessage */ const DefaultErrorMessage = "You\u2019ve exceed the maximum number of words we can process. Try reducing your text.";
/**
 * TextareaSubmitEventName
 *
 * The event name emitted when submit events occur
 */ const TextareaSubmitEventName = "textareaSubmit";
/**
 * # Textarea
 *
 * The Prompt Text Area control is designed for AI chat features and allows the user to enter and edit multiple lines of text.
 *
 */ class Textarea extends (0, _fastElement.FASTElement) {
    constructor(){
        super(...arguments);
        this.svgColor = (0, _webComponents.colorNeutralForeground4);
        this.svgColorDisabled = (0, _webComponents.colorNeutralForegroundDisabled);
        /**
     * ## errorMessage
     *
     * For overriding the default error message.
     */ this.errorMessage = DefaultErrorMessage;
        /**
     * ## disabled
     *
     * Puts the send button into a disabled state, where user input can still be inputed, but cannot be sent.
     */ this.disabled = false;
        /**
     * ## maxLength
     *
     * sets the max allowed character count of the text area
     */ this.maxLength = DefaultMaxCharacters;
        /**
     * 33 showCharacterCount
     *
     * @public boolean
     */ this.hideCharacterCount = false;
        /**
     * ## _characterCount
     *
     * @private
     *
     * the number of characters currently inputed into the text input
     */ this._characterCount = 0;
        /**
     * ## buttons
     *
     * An array of html button elements slotted into the buttons slot
     *
     */ this.buttons = [];
        this.buttonsChanged = ()=>{
            this.hasButtons = this.buttons.length > 0;
            this.buttons.forEach((button)=>{
                button.addEventListener("click", ()=>{
                    button.blur();
                });
            });
        };
        /**
     * ## messages
     *
     * An array of html elements that have been slotted into the messges area.
     *
     * When messages are slotted in, the hasMessages boolean is set to true and class names are added in the html template.
     */ this.messages = [];
        /**
     * ## attachments
     *
     * An array of html elements slotted into the attachments area
     */ this.attachments = [];
        /**
     * ## updateControlUiValues
     *
     * Sets the values for characterCount and value. Sets the data-value attribute to the textarea dom element. Resizes the textarea height to match the scroll height of the text area.
     *
     * @param value - string
     * @private
     */ this.updateControlUiValues = (value)=>{
            this._characterCount = value.length;
            this._value = value;
            this.setAttribute("data-value", value);
            // resize text area height when height changes due to more characters
            this.handleTextareaHeight();
        };
        /**
     * ## handleTextareaKeydown
     *
     * @param inputRef to FluentTextField which is actually FASTTextField
     *
     */ this.handleTextareaInput = (inputRef)=>{
            if (inputRef) {
                this.updateControlUiValues(inputRef.value);
                this.emitChangeEvent();
            }
        };
        /**
     * ## handleTextareaPaste
     *
     * handles paste events for the textarea control that's nested inside the fabric-textarea
     */ this.handleTextareaPaste = (event, inputRef)=>{
            var _a;
            const pastedData = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text");
            if (pastedData) {
                if ((pastedData === null || pastedData === void 0 ? void 0 : pastedData.length) > this.maxLength) this.hasMaxCharLimit = true;
                this.updateControlUiValues(pastedData.slice(0, this.maxLength));
            }
        };
        /**
     * ## handleTextareaKeydown
     *
     * Handles keydown events for the textarea control that's nested inside the fabric-textarea
     *
     * @param event - KeyboardEvent
     */ this.handleTextareaKeydown = (event)=>{
            if (!this.isTextareaKeyPressed) {
                this.isTextareaKeyPressed = true;
                if (event.key.length === 1) {
                    if (this.maxLength == this._characterCount) this.hasMaxCharLimit = !this.hasMaxCharLimit;
                } else this.hasMaxCharLimit = false;
            } else if (event.key.length === 1 && this.maxLength == this._characterCount) this.hasMaxCharLimit = true;
        };
        /**
     * ## handleTextareaEvents
     *
     * adds event handlers for the DOM textarea in the shadowRoot
     */ this.handleTextareaEvents = ()=>{
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.inputRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("textarea");
            (_b = this.inputRef) === null || _b === void 0 || _b.addEventListener("select", ()=>{
                this.emitSelectEvent();
            });
            (_c = this.inputRef) === null || _c === void 0 || _c.addEventListener("focus", ()=>{
                this.emitFocusEvent();
            });
            (_d = this.inputRef) === null || _d === void 0 || _d.addEventListener("blur", ()=>{
                this.emitBlurEvent();
            });
            (_e = this.inputRef) === null || _e === void 0 || _e.addEventListener("input", ()=>this.handleTextareaInput(this.inputRef));
            (_f = this.inputRef) === null || _f === void 0 || _f.addEventListener("paste", (event)=>this.handleTextareaPaste(event, this.inputRef));
            (_g = this.inputRef) === null || _g === void 0 || _g.addEventListener("keydown", this.handleTextareaKeydown);
            (_h = this.inputRef) === null || _h === void 0 || _h.addEventListener("keyup", ()=>this.isTextareaKeyPressed = false);
        };
        /**
     * ## removeTextareaEvents
     */ this.removeTextareaEvents = ()=>{
            var _a, _b, _c, _d, _e, _f, _g;
            this.inputRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("textarea");
            (_b = this.inputRef) === null || _b === void 0 || _b.removeEventListener("select", ()=>{
                this.emitSelectEvent();
            });
            (_c = this.inputRef) === null || _c === void 0 || _c.removeEventListener("focus", ()=>{
                this.emitFocusEvent();
            });
            (_d = this.inputRef) === null || _d === void 0 || _d.removeEventListener("input", ()=>this.handleTextareaInput(this.inputRef));
            (_e = this.inputRef) === null || _e === void 0 || _e.removeEventListener("paste", (event)=>this.handleTextareaPaste(event, this.inputRef));
            (_f = this.inputRef) === null || _f === void 0 || _f.removeEventListener("keydown", this.handleTextareaKeydown);
            (_g = this.inputRef) === null || _g === void 0 || _g.removeEventListener("keyup", ()=>this.isTextareaKeyPressed = false);
        };
        /**
     * ## emitSubmitEvent
     *
     * Emits a TextareaSubmitEvent
     */ this.emitSubmitEvent = ()=>{
            this.dispatchEvent(new CustomEvent(TextareaSubmitEventName, {
                detail: {
                    target: this,
                    value: this.value || ""
                },
                bubbles: true
            }));
        };
        /**
     * ## emitSelectEvent
     *
     * Emits a focus event
     */ this.emitSelectEvent = ()=>{
            this.dispatchEvent(new CustomEvent("select", {
                detail: {
                    target: this,
                    value: this.value || ""
                },
                bubbles: true
            }));
        };
        /**
     * ## emitFocusEvent
     *
     * Emits a focus event
     */ this.emitFocusEvent = ()=>{
            this.dispatchEvent(new CustomEvent("focus", {
                detail: {
                    target: this,
                    value: this.value || ""
                },
                bubbles: true
            }));
        };
        /**
     * ## emitBlurEvent
     *
     * Emits a focus event
     */ this.emitBlurEvent = ()=>{
            this.dispatchEvent(new CustomEvent("blur", {
                detail: {
                    target: this,
                    value: this.value || ""
                },
                bubbles: true
            }));
        };
        /**
     * ## emitChangeEvent
     * Emits a change event
     */ this.emitChangeEvent = ()=>{
            this.dispatchEvent(new CustomEvent("change", {
                detail: {
                    target: this,
                    value: this.value || ""
                },
                bubbles: true
            }));
        };
        /**
     *
     * ## handleSubmitButton
     *
     * called wben the submit button is pressed
     *
     * @param event
     */ this.handleSubmitButton = (event)=>{
            this.emitSubmitEvent();
            this.blur();
        };
        /**
     * ## handleSubmitButtonEvent
     *
     * Adds an event listener to the submit / send button. Responds to click events.
     */ this.handleSubmitButtonEvent = ()=>{
            var _a;
            const submitButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("fluent-button.submit-button");
            submitButton === null || submitButton === void 0 || submitButton.addEventListener("click", this.handleSubmitButton);
        };
        /**
     * ## removeSubmitButtonEvents
     *
     * removes event listeners for button events on submit button
     */ this.removeSubmitButtonEvents = ()=>{
            var _a;
            const submitButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("fluent-button.submit-button");
            submitButton === null || submitButton === void 0 || submitButton.removeEventListener("click", this.handleSubmitButton);
        };
        /**
     * ## handleKeydown
     *
     * handles keydown events for the root textarea element
     */ this.handleKeydown = (event)=>{
            // blur on escape
            if (event.key === "Escape") this.blur();
            // send message on ctrl enter
            if (event.ctrlKey && event.key === "Enter") this.handleSubmitButton(event);
        };
        /**
     * ## handleKeyEvents
     *
     * A keydown event handler for the root fabric-textarea control.
     *
     * @private
     */ this.handleKeyEvents = ()=>{
            this.addEventListener("keydown", this.handleKeydown);
        };
        /**
     * ## removeKeyEvents
     *
     * Removes keydown events for the root fluent textarea element
     */ this.removeKeyEvents = ()=>{
            this.removeEventListener("keydown", this.handleKeydown);
        };
        /**
     * ## handleClickEvents
     *
     * A click event handler for the root fabric-textarea control.
     *
     * @private
     */ this.handleClickEvents = ()=>{
            this.addEventListener("click", this.andHasMaxCharLimit);
        };
        /**
     * ## removeClickEvents
     *
     * removes click events for the root fluent textarea element.
     */ this.removeClickEvents = ()=>{
            this.removeEventListener("click", this.andHasMaxCharLimit);
        };
    }
    get characterCount() {
        return this._characterCount;
    }
    messagesChanged() {
        this.hasMessages = this.messages.length > 0;
    }
    attachmentsChanged() {
        this.hasAttachments = this.attachments.length > 0;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
    /**
   * ## handleTextareaHeight
   *
   * Resizes the textarea to accomodate more rows of text. Sets the height to the scroll height
   *
   * Textarea has limitations with fitting content through css, so it's required to calculate the size with javascript
   */ handleTextareaHeight() {
        if (this.inputRef) {
            this.inputRef.style.height = "20px";
            this.inputRef.style.height = this.inputRef.scrollHeight + "px";
        }
    }
    /**
   * ## andHasMaxCharLimit
   *
   * if hasMaxCharLimit is true set it to false
   */ andHasMaxCharLimit() {
        if (this.hasMaxCharLimit) this.hasMaxCharLimit = false;
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _webComponents.TextInputDefinition).define(DesignSystem.registry);
        (0, _webComponents.ButtonDefinition).define(DesignSystem.registry);
        this.handleTextareaEvents();
        this.handleSubmitButtonEvent();
        this.handleKeyEvents();
        this.handleClickEvents();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeTextareaEvents();
        this.removeSubmitButtonEvents();
        this.removeKeyEvents();
        this.removeClickEvents();
    }
}
__decorate([
    (0, _fastElement.attr)({
        attribute: TextareaAttributeNames.errorMessage
    })
], Textarea.prototype, "errorMessage", void 0);
__decorate([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], Textarea.prototype, "disabled", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: TextareaAttributeNames.maxLength,
        converter: (0, _fastElement.nullableNumberConverter)
    })
], Textarea.prototype, "maxLength", void 0);
__decorate([
    (0, _fastElement.attr)
], Textarea.prototype, "placeholder", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: TextareaAttributeNames.hideCharacterCount,
        mode: "boolean"
    })
], Textarea.prototype, "hideCharacterCount", void 0);
__decorate([
    (0, _fastElement.attr)
], Textarea.prototype, "name", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "hasMaxCharLimit", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "_characterCount", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "hasButtons", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "buttons", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "hasMessages", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "messages", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "hasAttachments", void 0);
__decorate([
    (0, _fastElement.observable)
], Textarea.prototype, "attachments", void 0);
const sendSVG = (0, _fastElement.html)`<svg width="21" height="20" viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.93412 2.11244C3.08657 1.98818 3.29771 1.96483 3.47363 2.05279L18.4736 9.55279C18.643 9.63749 18.75 9.81062 18.75 10C18.75 10.1894 18.643 10.3625 18.4736 10.4472L3.47363 17.9472C3.29771 18.0352 3.08657 18.0118 2.93412 17.8876C2.78167 17.7633 2.71623 17.5612 2.7669 17.3712L4.73255 10L2.7669 2.62884C2.71623 2.4388 2.78167 2.2367 2.93412 2.11244ZM5.63416 10.5L4.01911 16.5564L17.132 10L4.01911 3.44357L5.63416 9.5H12.25C12.5262 9.5 12.75 9.72386 12.75 10C12.75 10.2761 12.5262 10.5 12.25 10.5H5.63416Z" fill="currentColor" /></svg>`;
const errorCircleSVG = (0, _fastElement.html)`<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM5.25 8.25C5.25 7.83579 5.58579 7.5 6 7.5C6.41421 7.5 6.75 7.83579 6.75 8.25C6.75 8.66421 6.41421 9 6 9C5.58579 9 5.25 8.66421 5.25 8.25ZM5.50806 3.41012C5.55039 3.17688 5.75454 3 6 3C6.24546 3 6.44961 3.17688 6.49194 3.41012L6.5 3.5V6L6.49194 6.08988C6.44961 6.32312 6.24546 6.5 6 6.5C5.75454 6.5 5.55039 6.32312 5.50806 6.08988L5.5 6V3.5L5.50806 3.41012Z" fill="#BC2F32" /></svg>`;
/**
 * The template for the Textarea component.
 * @public
 */ function TextareaTemplate(options = {}) {
    return (0, _fastElement.html)`<div role="group" class="textarea-container" part="root"><fluent-text-input class="text-input" part="text-input"><div class="textarea-root" part="textarea-root" slot="end"><textarea class="textarea" maxlength="${(x)=>x.maxLength}" placeholder="${(x)=>x.placeholder}" aria-describedby="Use ctrlKey + enterKey to submit the prompt." part="textarea-element"></textarea><div class="messages-row ${(x)=>x.hasMessages && !x.hasAttachments ? "margin-bottom" : ""}" part="messages-row" aria-expanded="${(x)=>x.hasMessages || x.hasMaxCharLimit}"><slot name="messages" part="messages" ${(0, _fastElement.slotted)("messages")}></slot>${(0, _fastElement.when)((x)=>x.hasMaxCharLimit, (0, _fastElement.html)`<div class="error-message-container">${errorCircleSVG}<span class="error-message">${(x)=>x.errorMessage}</span></div>`)}</div><div class="attachments-row" part="attachments-row" aria-expanded="${(x)=>x.hasAttachments}"><slot name="attachments" ${(0, _fastElement.slotted)("attachments")}></slot></div><div class="interactions-row" part="interactions-row"><div class="interactions-left-col" part="interactions-left-col">${(0, _fastElement.when)((x)=>!x.hideCharacterCount, (0, _fastElement.html)`<div part="character-count" class="character-count">${(x)=>x.characterCount}/${(x)=>x.maxLength}</div>`)}</div><div class="interactions-center-col" part="interactions-center-col" aria-expanded="${(x)=>x.hasButtons}"><slot name="buttons" ${(0, _fastElement.slotted)("buttons")}></slot></div><div class="interactions-right-col" part="interactions-right-col">${(0, _fastElement.when)((x)=>x.hasButtons, (0, _fastElement.html)`<div class="divider" part="divider"></div>`)}<fluent-button appearance="transparent" class="submit-button" part="submit-button" ?disabled="${(x)=>x.disabled}" aria-describedby="Use enterKey to submit the prompt.">${sendSVG}</fluent-button></div></div></div></fluent-text-input>${(0, _fastFoundation.endSlotTemplate)(options)}</div>`;
}
const template = TextareaTemplate();
const styles = (0, _fastElement.css)`
  ${(0, _fastFoundation.display)("flex")}

  :host{width:100%;font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase300)};font-weight:${(0, _webComponents.fontWeightRegular)};line-height:${(0, _webComponents.lineHeightBase300)}}:host .textarea-container{width:100%}:host fluent-text-input{font-family:${(0, _webComponents.fontFamilyBase)};background-color:${(0, _webComponents.colorNeutralBackground1)};max-width:unset;min-height:76px}:host fluent-text-input.text-input::part(root){display:flex;flex-direction:column;height:unset;padding:${(0, _webComponents.spacingVerticalM)} ${(0, _webComponents.spacingHorizontalS)} ${(0, _webComponents.spacingVerticalSNudge)};max-width:unset;border-color:${(0, _webComponents.colorNeutralStroke1)}}:host fluent-text-input .messages-row{font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};font-weight:${(0, _webComponents.fontWeightRegular)};display:inline-block;flex:0 0 auto;width:100%}:host fluent-text-input::part(control){padding:0px ${(0, _webComponents.spacingVerticalXS)}}:host fluent-text-input::part(control){display:none}:host fluent-text-input:focus-within::part(control){color:${(0, _webComponents.colorNeutralForeground4)}}:host fluent-text-input .textarea-root{display:flex;flex-direction:row;flex-wrap:wrap;flex:0 0 auto;width:100%;padding-left:0px;gap:0}:host fluent-text-input .labels{flex:0 0 auto;width:100%}:host textarea.textarea{font-family:${(0, _webComponents.fontFamilyBase)};font-size:${(0, _webComponents.fontSizeBase300)};font-weight:${(0, _webComponents.fontWeightRegular)};line-height:${(0, _webComponents.lineHeightBase300)};color:${(0, _webComponents.colorNeutralForeground4)};border:none;outline:none;padding:0;margin:0;resize:none;background-color:transparent;width:100%;height:20px;max-height:252px;padding:0px ${(0, _webComponents.spacingVerticalXS)};margin-bottom:${(0, _webComponents.spacingVerticalXS)}}:host textarea.textarea::placeholder{color:${(0, _webComponents.colorNeutralForeground4)}}:host .messages-row{margin-top:${(0, _webComponents.spacingVerticalXS)}}:host .interactions-row .interactions-left-col .character-count,:host .messages-row .messages,:host ::slotted([slot="end"]){font-size:${(0, _webComponents.fontSizeBase100)};line-height:${(0, _webComponents.lineHeightBase100)};font-weight:${(0, _webComponents.fontWeightRegular)};display:inline-block}:host .interactions-row .interactions-left-col .character-count{margin:0px ${(0, _webComponents.spacingHorizontalXS)}}:host .error-message-container{display:flex;justify-content:space-between}:host .error-message-container svg{min-width:12px;margin-right:2px}:host .error-message-container .error-message{display:block;color:${(0, _webComponents.colorPaletteRedForeground1)}}:host .messages-row.margin-bottom{margin-bottom:${(0, _webComponents.spacingVerticalXS)}}:host .attachments-row{display:flex;width:100%;padding:0px ${(0, _webComponents.spacingHorizontalXS)}}:host ::slotted([slot="end"]){color:${(0, _webComponents.colorNeutralForeground4)};margin-top:${(0, _webComponents.spacingVerticalS)};display:block}:host .interactions-row{display:flex;width:100%}:host .interactions-row .interactions-center-col,:host .interactions-row .interactions-right-col,:host .interactions-row .interactions-left-col{height:32px;min-width:32px;flex-grow:0;display:flex;align-items:center;flex-direction:row}:host .interactions-row .interactions-left-col{flex-grow:1}:host .interactions-row .interactions-right-col fluent-button::part(control){min-width:unset;padding:${(0, _webComponents.spacingVerticalSNudge)}}:host .interactions-right-col .divider{margin:0px 4px;border-right:1px solid ${(0, _webComponents.colorNeutralStroke2)};height:24px}:host([disabled]) fluent-button::part(control){background-color:transparent;border-color:transparent}:host([disabled]) fluent-button::part(content){pointer-events:none;color:${(0, _webComponents.colorNeutralForegroundDisabled)}}:host([disabled]) fluent-button::part(control){color:${(0, _webComponents.colorNeutralForegroundDisabled)}}`;
/**
 *
 * @public
 * @remarks
 * HTML Element: \<fabric-textarea\>
 */ const definition = Textarea.compose({
    name: `${DesignSystem.prefix}-textarea`,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true
    }
});

},{"@microsoft/fast-element":"j6ee6","@fluentui/web-components":"hZW12","@microsoft/fast-foundation":"cd0ab","@fabric-msft/fabric-web":"b5wkx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6ee6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugJs = require("./debug.js");
var _indexJs = require("./index.js");
parcelHelpers.exportAll(_indexJs, exports);

},{"./debug.js":"9S8Yv","./index.js":"db3kA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9S8Yv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
if (globalThis.FAST === void 0) Reflect.defineProperty(globalThis, "FAST", {
    value: Object.create(null),
    configurable: false,
    enumerable: false,
    writable: false
});
const FAST = globalThis.FAST;
const debugMessages = {
    [1101 /* needsArrayObservation */ ]: "Must call enableArrayObservation before observing arrays.",
    [1201 /* onlySetDOMPolicyOnce */ ]: "The DOM Policy can only be set once.",
    [1202 /* bindingInnerHTMLRequiresTrustedTypes */ ]: "To bind innerHTML, you must use a TrustedTypesPolicy.",
    [1203 /* twoWayBindingRequiresObservables */ ]: "View=>Model update skipped. To use twoWay binding, the target property must be observable.",
    [1204 /* hostBindingWithoutHost */ ]: "No host element is present. Cannot bind host with ${name}.",
    [1205 /* unsupportedBindingBehavior */ ]: "The requested binding behavior is not supported by the binding engine.",
    [1206 /* directCallToHTMLTagNotAllowed */ ]: "Calling html`` as a normal function invalidates the security guarantees provided by FAST.",
    [1207 /* onlySetTemplatePolicyOnce */ ]: "The DOM Policy for an HTML template can only be set once.",
    [1208 /* cannotSetTemplatePolicyAfterCompilation */ ]: "The DOM Policy cannot be set after a template is compiled.",
    [1209 /* blockedByDOMPolicy */ ]: "'${aspectName}' on '${tagName}' is blocked by the current DOMPolicy.",
    [1401 /* missingElementDefinition */ ]: "Missing FASTElement definition.",
    [1501 /* noRegistrationForContext */ ]: "No registration for Context/Interface '${name}'.",
    [1502 /* noFactoryForResolver */ ]: "Dependency injection resolver for '${key}' returned a null factory.",
    [1503 /* invalidResolverStrategy */ ]: "Invalid dependency injection resolver strategy specified '${strategy}'.",
    [1504 /* cannotAutoregisterDependency */ ]: "Unable to autoregister dependency.",
    [1505 /* cannotResolveKey */ ]: "Unable to resolve dependency injection key '${key}'.",
    [1506 /* cannotConstructNativeFunction */ ]: "'${name}' is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.",
    [1507 /* cannotJITRegisterNonConstructor */ ]: "Attempted to jitRegister something that is not a constructor '${value}'. Did you forget to register this dependency?",
    [1508 /* cannotJITRegisterIntrinsic */ ]: "Attempted to jitRegister an intrinsic type '${value}'. Did you forget to add @inject(Key)?",
    [1509 /* cannotJITRegisterInterface */ ]: "Attempted to jitRegister an interface '${value}'.",
    [1510 /* invalidResolver */ ]: "A valid resolver was not returned from the register method.",
    [1511 /* invalidKey */ ]: "Key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?",
    [1512 /* noDefaultResolver */ ]: "'${key}' not registered. Did you forget to add @singleton()?",
    [1513 /* cyclicDependency */ ]: "Cyclic dependency found '${name}'.",
    [1514 /* connectUpdateRequiresController */ ]: "Injected properties that are updated on changes to DOM connectivity require the target object to be an instance of FASTElement."
};
const allPlaceholders = /(\$\{\w+?})/g;
const placeholder = /\$\{(\w+?)}/g;
const noValues = Object.freeze({});
function formatMessage(message, values) {
    return message.split(allPlaceholders).map((v)=>{
        var _a;
        const replaced = v.replace(placeholder, "$1");
        return String((_a = values[replaced]) !== null && _a !== void 0 ? _a : v);
    }).join("");
}
Object.assign(FAST, {
    addMessages (messages) {
        Object.assign(debugMessages, messages);
    },
    warn (code, values = noValues) {
        var _a;
        const message = (_a = debugMessages[code]) !== null && _a !== void 0 ? _a : "Unknown Warning";
        console.warn(formatMessage(message, values));
    },
    error (code, values = noValues) {
        var _a;
        const message = (_a = debugMessages[code]) !== null && _a !== void 0 ? _a : "Unknown Error";
        return new Error(formatMessage(message, values));
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db3kA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>(0, _platformJs.FAST));
parcelHelpers.export(exports, "emptyArray", ()=>(0, _platformJs.emptyArray));
// DOM
parcelHelpers.export(exports, "DOMAspect", ()=>(0, _domJs.DOMAspect));
parcelHelpers.export(exports, "DOM", ()=>(0, _domJs.DOM));
// Observation
parcelHelpers.export(exports, "ExecutionContext", ()=>(0, _observableJs.ExecutionContext));
parcelHelpers.export(exports, "Observable", ()=>(0, _observableJs.Observable));
parcelHelpers.export(exports, "observable", ()=>(0, _observableJs.observable));
parcelHelpers.export(exports, "SourceLifetime", ()=>(0, _observableJs.SourceLifetime));
parcelHelpers.export(exports, "volatile", ()=>(0, _observableJs.volatile));
parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>(0, _notifierJs.PropertyChangeNotifier));
parcelHelpers.export(exports, "SubscriberSet", ()=>(0, _notifierJs.SubscriberSet));
parcelHelpers.export(exports, "ArrayObserver", ()=>(0, _arraysJs.ArrayObserver));
parcelHelpers.export(exports, "lengthOf", ()=>(0, _arraysJs.lengthOf));
parcelHelpers.export(exports, "Splice", ()=>(0, _arraysJs.Splice));
parcelHelpers.export(exports, "SpliceStrategy", ()=>(0, _arraysJs.SpliceStrategy));
parcelHelpers.export(exports, "SpliceStrategySupport", ()=>(0, _arraysJs.SpliceStrategySupport));
parcelHelpers.export(exports, "Updates", ()=>(0, _updateQueueJs.Updates));
// Binding
parcelHelpers.export(exports, "Binding", ()=>(0, _bindingJs.Binding));
parcelHelpers.export(exports, "listener", ()=>(0, _oneWayJs.listener));
parcelHelpers.export(exports, "oneWay", ()=>(0, _oneWayJs.oneWay));
parcelHelpers.export(exports, "oneTime", ()=>(0, _oneTimeJs.oneTime));
parcelHelpers.export(exports, "normalizeBinding", ()=>(0, _normalizeJs.normalizeBinding));
// Styles
parcelHelpers.export(exports, "ElementStyles", ()=>(0, _elementStylesJs.ElementStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssJs.css));
parcelHelpers.export(exports, "cssDirective", ()=>(0, _cssDirectiveJs.cssDirective));
parcelHelpers.export(exports, "CSSDirective", ()=>(0, _cssDirectiveJs.CSSDirective));
parcelHelpers.export(exports, "CSSBindingDirective", ()=>(0, _cssBindingDirectiveJs.CSSBindingDirective));
// Templating
parcelHelpers.export(exports, "html", ()=>(0, _templateJs.html));
parcelHelpers.export(exports, "InlineTemplateDirective", ()=>(0, _templateJs.InlineTemplateDirective));
parcelHelpers.export(exports, "ViewTemplate", ()=>(0, _templateJs.ViewTemplate));
parcelHelpers.export(exports, "Compiler", ()=>(0, _compilerJs.Compiler));
parcelHelpers.export(exports, "Markup", ()=>(0, _markupJs.Markup));
parcelHelpers.export(exports, "Parser", ()=>(0, _markupJs.Parser));
parcelHelpers.export(exports, "HTMLBindingDirective", ()=>(0, _htmlBindingDirectiveJs.HTMLBindingDirective));
parcelHelpers.export(exports, "htmlDirective", ()=>(0, _htmlDirectiveJs.htmlDirective));
parcelHelpers.export(exports, "HTMLDirective", ()=>(0, _htmlDirectiveJs.HTMLDirective));
parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>(0, _htmlDirectiveJs.StatelessAttachedAttributeDirective));
parcelHelpers.export(exports, "ref", ()=>(0, _refJs.ref));
parcelHelpers.export(exports, "RefDirective", ()=>(0, _refJs.RefDirective));
parcelHelpers.export(exports, "when", ()=>(0, _whenJs.when));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJs.repeat));
parcelHelpers.export(exports, "RepeatBehavior", ()=>(0, _repeatJs.RepeatBehavior));
parcelHelpers.export(exports, "RepeatDirective", ()=>(0, _repeatJs.RepeatDirective));
parcelHelpers.export(exports, "slotted", ()=>(0, _slottedJs.slotted));
parcelHelpers.export(exports, "SlottedDirective", ()=>(0, _slottedJs.SlottedDirective));
parcelHelpers.export(exports, "children", ()=>(0, _childrenJs.children));
parcelHelpers.export(exports, "ChildrenDirective", ()=>(0, _childrenJs.ChildrenDirective));
parcelHelpers.export(exports, "HTMLView", ()=>(0, _viewJs.HTMLView));
parcelHelpers.export(exports, "elements", ()=>(0, _nodeObservationJs.elements));
parcelHelpers.export(exports, "NodeObservationDirective", ()=>(0, _nodeObservationJs.NodeObservationDirective));
// Components
parcelHelpers.export(exports, "customElement", ()=>(0, _fastElementJs.customElement));
parcelHelpers.export(exports, "FASTElement", ()=>(0, _fastElementJs.FASTElement));
parcelHelpers.export(exports, "FASTElementDefinition", ()=>(0, _fastDefinitionsJs.FASTElementDefinition));
parcelHelpers.export(exports, "attr", ()=>(0, _attributesJs.attr));
parcelHelpers.export(exports, "AttributeConfiguration", ()=>(0, _attributesJs.AttributeConfiguration));
parcelHelpers.export(exports, "AttributeDefinition", ()=>(0, _attributesJs.AttributeDefinition));
parcelHelpers.export(exports, "booleanConverter", ()=>(0, _attributesJs.booleanConverter));
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>(0, _attributesJs.nullableBooleanConverter));
parcelHelpers.export(exports, "nullableNumberConverter", ()=>(0, _attributesJs.nullableNumberConverter));
parcelHelpers.export(exports, "ElementController", ()=>(0, _elementControllerJs.ElementController));
var _platformJs = require("./platform.js");
var _domJs = require("./dom.js");
var _observableJs = require("./observation/observable.js");
var _notifierJs = require("./observation/notifier.js");
var _arraysJs = require("./observation/arrays.js");
var _updateQueueJs = require("./observation/update-queue.js");
var _bindingJs = require("./binding/binding.js");
var _oneWayJs = require("./binding/one-way.js");
var _oneTimeJs = require("./binding/one-time.js");
var _normalizeJs = require("./binding/normalize.js");
var _elementStylesJs = require("./styles/element-styles.js");
var _cssJs = require("./styles/css.js");
var _cssDirectiveJs = require("./styles/css-directive.js");
var _hostJs = require("./styles/host.js");
var _styleStrategyJs = require("./styles/style-strategy.js");
var _cssBindingDirectiveJs = require("./styles/css-binding-directive.js");
var _templateJs = require("./templating/template.js");
var _compilerJs = require("./templating/compiler.js");
var _markupJs = require("./templating/markup.js");
var _htmlBindingDirectiveJs = require("./templating/html-binding-directive.js");
var _htmlDirectiveJs = require("./templating/html-directive.js");
var _refJs = require("./templating/ref.js");
var _whenJs = require("./templating/when.js");
var _repeatJs = require("./templating/repeat.js");
var _slottedJs = require("./templating/slotted.js");
var _childrenJs = require("./templating/children.js");
var _viewJs = require("./templating/view.js");
var _nodeObservationJs = require("./templating/node-observation.js");
var _fastElementJs = require("./components/fast-element.js");
var _fastDefinitionsJs = require("./components/fast-definitions.js");
var _attributesJs = require("./components/attributes.js");
var _elementControllerJs = require("./components/element-controller.js");

},{"./platform.js":"aWsKi","./dom.js":false,"./observation/observable.js":"a7TJ2","./observation/notifier.js":"3Ve9s","./observation/arrays.js":false,"./observation/update-queue.js":"8aP8r","./binding/binding.js":false,"./binding/one-way.js":false,"./binding/one-time.js":false,"./binding/normalize.js":false,"./styles/element-styles.js":"jf7rv","./styles/css.js":"l6SHD","./styles/css-directive.js":"iBccj","./styles/host.js":"3YBF3","./styles/style-strategy.js":"ek7Hf","./styles/css-binding-directive.js":false,"./templating/template.js":"6QbNE","./templating/compiler.js":false,"./templating/markup.js":false,"./templating/html-binding-directive.js":false,"./templating/html-directive.js":"jlaqE","./templating/ref.js":"ak4xA","./templating/when.js":"g3O57","./templating/repeat.js":false,"./templating/slotted.js":"59SVF","./templating/children.js":false,"./templating/view.js":false,"./templating/node-observation.js":false,"./components/fast-element.js":"eHqCx","./components/fast-definitions.js":false,"./components/attributes.js":"fTX1F","./components/element-controller.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWsKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>FAST);
parcelHelpers.export(exports, "emptyArray", ()=>emptyArray);
/**
 * Do not change. Part of shared kernel contract.
 * @internal
 */ parcelHelpers.export(exports, "createTypeRegistry", ()=>createTypeRegistry);
/**
 * Creates a function capable of locating metadata associated with a type.
 * @returns A metadata locator function.
 * @internal
 */ parcelHelpers.export(exports, "createMetadataLocator", ()=>createMetadataLocator);
/**
 * Makes a type noop for JSON serialization.
 * @param type - The type to make noop for JSON serialization.
 * @internal
 */ parcelHelpers.export(exports, "makeSerializationNoop", ()=>makeSerializationNoop);
var _interfacesJs = require("./interfaces.js");
var _polyfillsJs = require("./polyfills.js");
// ensure FAST global - duplicated debug.ts
const propConfig = {
    configurable: false,
    enumerable: false,
    writable: false
};
if (globalThis.FAST === void 0) Reflect.defineProperty(globalThis, "FAST", Object.assign({
    value: Object.create(null)
}, propConfig));
const FAST = globalThis.FAST;
if (FAST.getById === void 0) {
    const storage = Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({
        value (id, initialize) {
            let found = storage[id];
            if (found === void 0) found = initialize ? storage[id] = initialize() : null;
            return found;
        }
    }, propConfig));
}
if (FAST.error === void 0) Object.assign(FAST, {
    warn () {},
    error (code) {
        return new Error(`Error ${code}`);
    },
    addMessages () {}
});
const emptyArray = Object.freeze([]);
function createTypeRegistry() {
    const typeToDefinition = new Map();
    return Object.freeze({
        register (definition) {
            if (typeToDefinition.has(definition.type)) return false;
            typeToDefinition.set(definition.type, definition);
            return true;
        },
        getByType (key) {
            return typeToDefinition.get(key);
        },
        getForInstance (object) {
            if (object === null || object === void 0) return void 0;
            return typeToDefinition.get(object.constructor);
        }
    });
}
function createMetadataLocator() {
    const metadataLookup = new WeakMap();
    return function(target) {
        let metadata = metadataLookup.get(target);
        if (metadata === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while(metadata === void 0 && currentTarget !== null){
                metadata = metadataLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            metadata = metadata === void 0 ? [] : metadata.slice(0);
            metadataLookup.set(target, metadata);
        }
        return metadata;
    };
}
function makeSerializationNoop(type) {
    type.prototype.toJSON = (0, _interfacesJs.noop);
}

},{"./interfaces.js":"5090A","./polyfills.js":"onSgt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5090A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KernelServiceId", ()=>KernelServiceId);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "noop", ()=>noop);
let kernelMode;
const kernelAttr = "fast-kernel";
try {
    if (document.currentScript) kernelMode = document.currentScript.getAttribute(kernelAttr);
    else {
        const scripts = document.getElementsByTagName("script");
        const currentScript = scripts[scripts.length - 1];
        kernelMode = currentScript.getAttribute(kernelAttr);
    }
} catch (e) {
    kernelMode = "isolate";
}
let KernelServiceId;
switch(kernelMode){
    case "share":
        KernelServiceId = Object.freeze({
            updateQueue: 1,
            observable: 2,
            contextEvent: 3,
            elementRegistry: 4
        });
        break;
    case "share-v2":
        KernelServiceId = Object.freeze({
            updateQueue: 1.2,
            observable: 2.2,
            contextEvent: 3.2,
            elementRegistry: 4.2
        });
        break;
    default:
        // fully isolate the kernel from all other FAST instances
        const postfix = `-${Math.random().toString(36).substring(2, 8)}`;
        KernelServiceId = Object.freeze({
            updateQueue: `1.2${postfix}`,
            observable: `2.2${postfix}`,
            contextEvent: `3.2${postfix}`,
            elementRegistry: `4.2${postfix}`
        });
        break;
}
const isFunction = (object)=>typeof object === "function";
const isString = (object)=>typeof object === "string";
const noop = ()=>void 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"onSgt":[function(require,module,exports) {
var global = arguments[3];
/* eslint-disable @typescript-eslint/ban-ts-comment */ (function ensureGlobalThis() {
    if (typeof globalThis !== "undefined") // We're running in a modern environment.
    return;
    // @ts-ignore
    if (typeof global !== "undefined") // We're running in NodeJS
    // @ts-ignore
    global.globalThis = global;
    else if (typeof self !== "undefined") self.globalThis = self;
    else if (typeof window !== "undefined") // We're running in the browser's main thread.
    window.globalThis = window;
    else {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        const result = new Function("return this")();
        result.globalThis = result;
    }
})();

},{}],"9qDgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMAspect", ()=>DOMAspect);
parcelHelpers.export(exports, "DOM", ()=>DOM);
var _interfacesJs = require("./interfaces.js");
var _platformJs = require("./platform.js");
const DOMAspect = Object.freeze({
    /**
     * Not aspected.
     */ none: 0,
    /**
     * An attribute.
     */ attribute: 1,
    /**
     * A boolean attribute.
     */ booleanAttribute: 2,
    /**
     * A property.
     */ property: 3,
    /**
     * Content
     */ content: 4,
    /**
     * A token list.
     */ tokenList: 5,
    /**
     * An event.
     */ event: 6
});
const createHTML = (html)=>html;
const fastTrustedType = globalThis.trustedTypes ? globalThis.trustedTypes.createPolicy("fast-html", {
    createHTML
}) : {
    createHTML
};
let defaultPolicy = Object.freeze({
    createHTML (value) {
        return fastTrustedType.createHTML(value);
    },
    protect (tagName, aspect, aspectName, sink) {
        return sink;
    }
});
const fastPolicy = defaultPolicy;
const DOM = Object.freeze({
    /**
     * Gets the dom policy used by the templating system.
     */ get policy () {
        return defaultPolicy;
    },
    /**
     * Sets the dom policy used by the templating system.
     * @param policy - The policy to set.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */ setPolicy (value) {
        if (defaultPolicy !== fastPolicy) throw (0, _platformJs.FAST).error(1201 /* Message.onlySetDOMPolicyOnce */ );
        defaultPolicy = value;
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */ setAttribute (element, attributeName, value) {
        value === null || value === undefined ? element.removeAttribute(attributeName) : element.setAttribute(attributeName, value);
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */ setBooleanAttribute (element, attributeName, value) {
        value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
    }
});

},{"./interfaces.js":"5090A","./platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7TJ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SourceLifetime", ()=>SourceLifetime);
parcelHelpers.export(exports, "Observable", ()=>Observable);
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */ parcelHelpers.export(exports, "observable", ()=>observable);
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */ parcelHelpers.export(exports, "volatile", ()=>volatile);
parcelHelpers.export(exports, "ExecutionContext", ()=>ExecutionContext);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _updateQueueJs = require("./update-queue.js");
var _notifierJs = require("./notifier.js");
const SourceLifetime = Object.freeze({
    /**
     * The source to controller lifetime relationship is unknown.
     */ unknown: void 0,
    /**
     * The source and controller lifetimes are coupled to one another.
     * They can/will be GC'd together.
     */ coupled: 1
});
const Observable = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).observable, ()=>{
    const queueUpdate = (0, _updateQueueJs.Updates).enqueue;
    const volatileRegex = /(:|&&|\|\||if|\?\.)/;
    const notifierLookup = new WeakMap();
    let watcher = void 0;
    let createArrayObserver = (array)=>{
        throw (0, _platformJs.FAST).error(1101 /* Message.needsArrayObservation */ );
    };
    function getNotifier(source) {
        var _a;
        let found = (_a = source.$fastController) !== null && _a !== void 0 ? _a : notifierLookup.get(source);
        if (found === void 0) Array.isArray(source) ? found = createArrayObserver(source) : notifierLookup.set(source, found = new (0, _notifierJs.PropertyChangeNotifier)(source));
        return found;
    }
    const getAccessors = (0, _platformJs.createMetadataLocator)();
    class DefaultObservableAccessor {
        constructor(name){
            this.name = name;
            this.field = `_${name}`;
            this.callback = `${name}Changed`;
        }
        getValue(source) {
            if (watcher !== void 0) watcher.watch(source, this.name);
            return source[this.field];
        }
        setValue(source, newValue) {
            const field = this.field;
            const oldValue = source[field];
            if (oldValue !== newValue) {
                source[field] = newValue;
                const callback = source[this.callback];
                if ((0, _interfacesJs.isFunction)(callback)) callback.call(source, oldValue, newValue);
                getNotifier(source).notify(this.name);
            }
        }
    }
    class ExpressionNotifierImplementation extends (0, _notifierJs.SubscriberSet) {
        constructor(expression, initialSubscriber, isVolatileBinding = false){
            super(expression, initialSubscriber);
            this.expression = expression;
            this.isVolatileBinding = isVolatileBinding;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.isAsync = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
        }
        setMode(isAsync) {
            this.isAsync = this.needsQueue = isAsync;
        }
        bind(controller) {
            this.controller = controller;
            const value = this.observe(controller.source, controller.context);
            if (!controller.isBound && this.requiresUnbind(controller)) controller.onUnbind(this);
            return value;
        }
        requiresUnbind(controller) {
            return controller.sourceLifetime !== SourceLifetime.coupled || this.first !== this.last || this.first.propertySource !== controller.source;
        }
        unbind(controller) {
            this.dispose();
        }
        observe(source, context) {
            if (this.needsRefresh && this.last !== null) this.dispose();
            const previousWatcher = watcher;
            watcher = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            let result;
            try {
                result = this.expression(source, context);
            } finally{
                watcher = previousWatcher;
            }
            return result;
        }
        // backwards compat with v1 kernel
        disconnect() {
            this.dispose();
        }
        dispose() {
            if (this.last !== null) {
                let current = this.first;
                while(current !== void 0){
                    current.notifier.unsubscribe(this, current.propertyName);
                    current = current.next;
                }
                this.last = null;
                this.needsRefresh = this.needsQueue = this.isAsync;
            }
        }
        watch(propertySource, propertyName) {
            const prev = this.last;
            const notifier = getNotifier(propertySource);
            const current = prev === null ? this.first : {};
            current.propertySource = propertySource;
            current.propertyName = propertyName;
            current.notifier = notifier;
            notifier.subscribe(this, propertyName);
            if (prev !== null) {
                if (!this.needsRefresh) {
                    // Declaring the variable prior to assignment below circumvents
                    // a bug in Angular's optimization process causing infinite recursion
                    // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                    let prevValue;
                    watcher = void 0;
                    /* eslint-disable-next-line */ prevValue = prev.propertySource[prev.propertyName];
                    /* eslint-disable-next-line */ watcher = this;
                    if (propertySource === prevValue) this.needsRefresh = true;
                }
                prev.next = current;
            }
            this.last = current;
        }
        handleChange() {
            if (this.needsQueue) {
                this.needsQueue = false;
                queueUpdate(this);
            } else if (!this.isAsync) this.call();
        }
        call() {
            if (this.last !== null) {
                this.needsQueue = this.isAsync;
                this.notify(this);
            }
        }
        *records() {
            let next = this.first;
            while(next !== void 0){
                yield next;
                next = next.next;
            }
        }
    }
    (0, _platformJs.makeSerializationNoop)(ExpressionNotifierImplementation);
    return Object.freeze({
        /**
         * @internal
         * @param factory - The factory used to create array observers.
         */ setArrayObserverFactory (factory) {
            createArrayObserver = factory;
        },
        /**
         * Gets a notifier for an object or Array.
         * @param source - The object or Array to get the notifier for.
         */ getNotifier,
        /**
         * Records a property change for a source object.
         * @param source - The object to record the change against.
         * @param propertyName - The property to track as changed.
         */ track (source, propertyName) {
            watcher && watcher.watch(source, propertyName);
        },
        /**
         * Notifies watchers that the currently executing property getter or function is volatile
         * with respect to its observable dependencies.
         */ trackVolatile () {
            watcher && (watcher.needsRefresh = true);
        },
        /**
         * Notifies subscribers of a source object of changes.
         * @param source - the object to notify of changes.
         * @param args - The change args to pass to subscribers.
         */ notify (source, args) {
            /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ getNotifier(source).notify(args);
        },
        /**
         * Defines an observable property on an object or prototype.
         * @param target - The target object to define the observable on.
         * @param nameOrAccessor - The name of the property to define as observable;
         * or a custom accessor that specifies the property name and accessor implementation.
         */ defineProperty (target, nameOrAccessor) {
            if ((0, _interfacesJs.isString)(nameOrAccessor)) nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
            getAccessors(target).push(nameOrAccessor);
            Reflect.defineProperty(target, nameOrAccessor.name, {
                enumerable: true,
                get () {
                    return nameOrAccessor.getValue(this);
                },
                set (newValue) {
                    nameOrAccessor.setValue(this, newValue);
                }
            });
        },
        /**
         * Finds all the observable accessors defined on the target,
         * including its prototype chain.
         * @param target - The target object to search for accessor on.
         */ getAccessors,
        /**
         * Creates a {@link ExpressionNotifier} that can watch the
         * provided {@link Expression} for changes.
         * @param expression - The binding to observe.
         * @param initialSubscriber - An initial subscriber to changes in the binding value.
         * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
         */ binding (expression, initialSubscriber, isVolatileBinding = this.isVolatileBinding(expression)) {
            return new ExpressionNotifierImplementation(expression, initialSubscriber, isVolatileBinding);
        },
        /**
         * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
         * on every evaluation of the value.
         * @param expression - The binding to inspect.
         */ isVolatileBinding (expression) {
            return volatileRegex.test(expression.toString());
        }
    });
});
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get () {
            Observable.trackVolatile();
            return descriptor.get.apply(this);
        }
    });
}
const contextEvent = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).contextEvent, ()=>{
    let current = null;
    return {
        get () {
            return current;
        },
        set (event) {
            current = event;
        }
    };
});
const ExecutionContext = Object.freeze({
    /**
     * A default execution context.
     */ default: {
        index: 0,
        length: 0,
        get event () {
            return ExecutionContext.getEvent();
        },
        eventDetail () {
            return this.event.detail;
        },
        eventTarget () {
            return this.event.target;
        }
    },
    /**
     * Gets the current event.
     * @returns An event object.
     */ getEvent () {
        return contextEvent.get();
    },
    /**
     * Sets the current event.
     * @param event - An event object.
     */ setEvent (event) {
        contextEvent.set(event);
    }
});

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","./update-queue.js":"8aP8r","./notifier.js":"3Ve9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aP8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Updates", ()=>Updates);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
const Updates = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).updateQueue, ()=>{
    const tasks = [];
    const pendingErrors = [];
    const rAF = globalThis.requestAnimationFrame;
    let updateAsync = true;
    function throwFirstError() {
        if (pendingErrors.length) throw pendingErrors.shift();
    }
    function tryRunTask(task) {
        try {
            task.call();
        } catch (error) {
            if (updateAsync) {
                pendingErrors.push(error);
                setTimeout(throwFirstError, 0);
            } else {
                tasks.length = 0;
                throw error;
            }
        }
    }
    function process() {
        const capacity = 1024;
        let index = 0;
        while(index < tasks.length){
            tryRunTask(tasks[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `enqueue`.
            // If we call `enqueue` within a task scheduled by `enqueue`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for(let scan = 0, newLength = tasks.length - index; scan < newLength; scan++)tasks[scan] = tasks[scan + index];
                tasks.length -= index;
                index = 0;
            }
        }
        tasks.length = 0;
    }
    function enqueue(callable) {
        tasks.push(callable);
        if (tasks.length < 2) updateAsync ? rAF(process) : process();
    }
    return Object.freeze({
        enqueue,
        next: ()=>new Promise(enqueue),
        process,
        setMode: (isAsync)=>updateAsync = isAsync
    });
});

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ve9s":[function(require,module,exports) {
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable subject.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriberSet", ()=>SubscriberSet);
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */ parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>PropertyChangeNotifier);
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified subject.
     * @param subject - The subject that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */ constructor(subject, initialSubscriber){
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.subject = subject;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */ has(subscriber) {
        return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */ subscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.has(subscriber)) return;
            if (this.sub1 === void 0) {
                this.sub1 = subscriber;
                return;
            }
            if (this.sub2 === void 0) {
                this.sub2 = subscriber;
                return;
            }
            this.spillover = [
                this.sub1,
                this.sub2,
                subscriber
            ];
            this.sub1 = void 0;
            this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index === -1) spillover.push(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */ unsubscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.sub1 === subscriber) this.sub1 = void 0;
            else if (this.sub2 === subscriber) this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index !== -1) spillover.splice(index, 1);
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */ notify(args) {
        const spillover = this.spillover;
        const subject = this.subject;
        if (spillover === void 0) {
            const sub1 = this.sub1;
            const sub2 = this.sub2;
            if (sub1 !== void 0) sub1.handleChange(subject, args);
            if (sub2 !== void 0) sub2.handleChange(subject, args);
        } else for(let i = 0, ii = spillover.length; i < ii; ++i)spillover[i].handleChange(subject, args);
    }
}
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified subject.
     * @param subject - The object that subscribers will receive notifications for.
     */ constructor(subject){
        this.subscribers = {};
        this.subjectSubscribers = null;
        this.subject = subject;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */ notify(propertyName) {
        var _a, _b;
        (_a = this.subscribers[propertyName]) === null || _a === void 0 || _a.notify(propertyName);
        (_b = this.subjectSubscribers) === null || _b === void 0 || _b.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */ subscribe(subscriber, propertyToWatch) {
        var _a, _b;
        let subscribers;
        if (propertyToWatch) subscribers = (_a = this.subscribers[propertyToWatch]) !== null && _a !== void 0 ? _a : this.subscribers[propertyToWatch] = new SubscriberSet(this.subject);
        else subscribers = (_b = this.subjectSubscribers) !== null && _b !== void 0 ? _b : this.subjectSubscribers = new SubscriberSet(this.subject);
        subscribers.subscribe(subscriber);
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */ unsubscribe(subscriber, propertyToUnwatch) {
        var _a, _b;
        if (propertyToUnwatch) (_a = this.subscribers[propertyToUnwatch]) === null || _a === void 0 || _a.unsubscribe(subscriber);
        else (_b = this.subjectSubscribers) === null || _b === void 0 || _b.unsubscribe(subscriber);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkRAU":[function(require,module,exports) {
/**
 * Captures a binding expression along with related information and capabilities.
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Binding", ()=>Binding);
class Binding {
    /**
     * Creates a binding.
     * @param evaluate - Evaluates the binding.
     * @param policy - The security policy to associate with this binding.
     * @param isVolatile - Indicates whether the binding is volatile.
     */ constructor(evaluate, policy, isVolatile = false){
        this.evaluate = evaluate;
        this.policy = policy;
        this.isVolatile = isVolatile;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1Y9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates an standard binding.
 * @param expression - The binding to refresh when changed.
 * @param policy - The security policy to associate with th binding.
 * @param isVolatile - Indicates whether the binding is volatile or not.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneWay", ()=>oneWay);
/**
 * Creates an event listener binding.
 * @param expression - The binding to invoke when the event is raised.
 * @param options - Event listener options.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "listener", ()=>listener);
var _observableJs = require("../observation/observable.js");
var _bindingJs = require("./binding.js");
class OneWayBinding extends (0, _bindingJs.Binding) {
    createObserver(subscriber) {
        return (0, _observableJs.Observable).binding(this.evaluate, subscriber, this.isVolatile);
    }
}
function oneWay(expression, policy, isVolatile = (0, _observableJs.Observable).isVolatileBinding(expression)) {
    return new OneWayBinding(expression, policy, isVolatile);
}
function listener(expression, options) {
    const config = new OneWayBinding(expression);
    config.options = options;
    return config;
}

},{"../observation/observable.js":"a7TJ2","./binding.js":"bkRAU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bSYC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a one time binding
 * @param expression - The binding to refresh when signaled.
 * @param policy - The security policy to associate with th binding.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneTime", ()=>oneTime);
var _platformJs = require("../platform.js");
var _bindingJs = require("./binding.js");
class OneTimeBinding extends (0, _bindingJs.Binding) {
    createObserver() {
        return this;
    }
    bind(controller) {
        return this.evaluate(controller.source, controller.context);
    }
}
(0, _platformJs.makeSerializationNoop)(OneTimeBinding);
function oneTime(expression, policy) {
    return new OneTimeBinding(expression, policy);
}

},{"../platform.js":"aWsKi","./binding.js":"bkRAU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jf7rv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents styles that can be applied to a custom element.
 * @public
 */ parcelHelpers.export(exports, "ElementStyles", ()=>ElementStyles);
let DefaultStyleStrategy;
function reduceStyles(styles) {
    return styles.map((x)=>x instanceof ElementStyles ? reduceStyles(x.styles) : [
            x
        ]).reduce((prev, curr)=>prev.concat(curr), []);
}
class ElementStyles {
    /**
     * Creates an instance of ElementStyles.
     * @param styles - The styles that will be associated with elements.
     */ constructor(styles){
        this.styles = styles;
        this.targets = new WeakSet();
        this._strategy = null;
        this.behaviors = styles.map((x)=>x instanceof ElementStyles ? x.behaviors : null).reduce((prev, curr)=>curr === null ? prev : prev === null ? curr : prev.concat(curr), null);
    }
    /**
     * Gets the StyleStrategy associated with these element styles.
     */ get strategy() {
        if (this._strategy === null) this.withStrategy(DefaultStyleStrategy);
        return this._strategy;
    }
    /** @internal */ addStylesTo(target) {
        this.strategy.addStylesTo(target);
        this.targets.add(target);
    }
    /** @internal */ removeStylesFrom(target) {
        this.strategy.removeStylesFrom(target);
        this.targets.delete(target);
    }
    /** @internal */ isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */ withBehaviors(...behaviors) {
        this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
    /**
     * Sets the strategy that handles adding/removing these styles for an element.
     * @param strategy - The strategy to use.
     */ withStrategy(Strategy) {
        this._strategy = new Strategy(reduceStyles(this.styles));
        return this;
    }
    /**
     * Sets the default strategy type to use when creating style strategies.
     * @param Strategy - The strategy type to construct.
     */ static setDefaultStrategy(Strategy) {
        DefaultStyleStrategy = Strategy;
    }
    /**
     * Normalizes a set of composable style options.
     * @param styles - The style options to normalize.
     * @returns A singular ElementStyles instance or undefined.
     */ static normalize(styles) {
        return styles === void 0 ? void 0 : Array.isArray(styles) ? new ElementStyles(styles) : styles instanceof ElementStyles ? styles : new ElementStyles([
            styles
        ]);
    }
}
/**
 * Indicates whether the DOM supports the adoptedStyleSheets feature.
 */ ElementStyles.supportsAdoptedStyleSheets = Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6SHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _oneWayJs = require("../binding/one-way.js");
var _cssDirectiveJs = require("./css-directive.js");
var _elementStylesJs = require("./element-styles.js");
var _cssBindingDirectiveJs = require("./css-binding-directive.js");
const marker = `${Math.random().toString(36).substring(2, 8)}`;
let varId = 0;
const nextCSSVariable = ()=>`--v${marker}${++varId}`;
function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    const add = (behavior)=>{
        behaviors.push(behavior);
    };
    for(let i = 0, ii = strings.length - 1; i < ii; ++i){
        cssString += strings[i];
        let value = values[i];
        if ((0, _interfacesJs.isFunction)(value)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)((0, _oneWayJs.oneWay)(value), nextCSSVariable()).createCSS(add);
        else if (value instanceof (0, _bindingJs.Binding)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)(value, nextCSSVariable()).createCSS(add);
        else if ((0, _cssDirectiveJs.CSSDirective).getForInstance(value) !== void 0) value = value.createCSS(add);
        if (value instanceof (0, _elementStylesJs.ElementStyles) || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        } else cssString += value;
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") styles.push(cssString);
    return {
        styles,
        behaviors
    };
}
const css = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = new (0, _elementStylesJs.ElementStyles)(styles);
    return behaviors.length ? elementStyles.withBehaviors(...behaviors) : elementStyles;
};
class CSSPartial {
    constructor(styles, behaviors){
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current)=>{
            if ((0, _interfacesJs.isString)(current)) this.css += current;
            else accumulated.push(current);
            return accumulated;
        }, []);
        if (stylesheets.length) this.styles = new (0, _elementStylesJs.ElementStyles)(stylesheets);
    }
    createCSS(add) {
        this.behaviors.forEach(add);
        if (this.styles) add(this);
        return this.css;
    }
    addedCallback(controller) {
        controller.addStyles(this.styles);
    }
    removedCallback(controller) {
        controller.removeStyles(this.styles);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSPartial);
css.partial = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
};

},{"../interfaces.js":"5090A","../binding/binding.js":"bkRAU","../binding/one-way.js":"c1Y9Q","./css-directive.js":"iBccj","./element-styles.js":"jf7rv","./css-binding-directive.js":"9wXia","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBccj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSDirective", ()=>CSSDirective);
/**
 * Decorator: Defines a CSSDirective.
 * @public
 */ parcelHelpers.export(exports, "cssDirective", ()=>cssDirective);
var _platformJs = require("../platform.js");
const registry = (0, _platformJs.createTypeRegistry)();
const CSSDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines a CSSDirective.
     * @param type - The type to define as a directive.
     */ define (type) {
        registry.register({
            type
        });
        return type;
    }
});
function cssDirective() {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        CSSDirective.define(type);
    };
}

},{"../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wXia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Enables bindings in CSS.
 *
 * @public
 */ parcelHelpers.export(exports, "CSSBindingDirective", ()=>CSSBindingDirective);
var _cssDirectiveJs = require("./css-directive.js");
function handleChange(directive, controller, observer) {
    controller.source.style.setProperty(directive.targetAspect, observer.bind(controller));
}
class CSSBindingDirective {
    /**
     * Creates an instance of CSSBindingDirective.
     * @param dataBinding - The binding to use in CSS.
     * @param targetAspect - The CSS property to target.
     */ constructor(dataBinding, targetAspect){
        this.dataBinding = dataBinding;
        this.targetAspect = targetAspect;
    }
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */ createCSS(add) {
        add(this);
        return `var(${this.targetAspect})`;
    }
    /**
     * Executed when this behavior is attached to a controller.
     * @param controller - Controls the behavior lifecycle.
     */ addedCallback(controller) {
        var _a;
        const element = controller.source;
        if (!element.$cssBindings) {
            element.$cssBindings = new Map();
            const setAttribute = element.setAttribute;
            element.setAttribute = (attr, value)=>{
                setAttribute.call(element, attr, value);
                if (attr === "style") element.$cssBindings.forEach((v, k)=>handleChange(k, v.controller, v.observer));
            };
        }
        const observer = (_a = controller[this.targetAspect]) !== null && _a !== void 0 ? _a : controller[this.targetAspect] = this.dataBinding.createObserver(this, this);
        observer.controller = controller;
        controller.source.$cssBindings.set(this, {
            controller,
            observer
        });
    }
    /**
     * Executed when this behavior's host is connected.
     * @param controller - Controls the behavior lifecycle.
     */ connectedCallback(controller) {
        handleChange(this, controller, controller[this.targetAspect]);
    }
    /**
     * Executed when this behavior is detached from a controller.
     * @param controller - Controls the behavior lifecycle.
     */ removedCallback(controller) {
        if (controller.source.$cssBindings) controller.source.$cssBindings.delete(this);
    }
    /**
     * Called when a subject this instance has subscribed to changes.
     * @param subject - The subject of the change.
     * @param args - The event args detailing the change that occurred.
     *
     * @internal
     */ handleChange(_, observer) {
        handleChange(this, observer.controller, observer);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSBindingDirective);

},{"./css-directive.js":"iBccj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YBF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ek7Hf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QbNE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Inlines a template into another template.
 * @public
 */ parcelHelpers.export(exports, "InlineTemplateDirective", ()=>InlineTemplateDirective);
/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */ parcelHelpers.export(exports, "ViewTemplate", ()=>ViewTemplate);
parcelHelpers.export(exports, "html", ()=>html);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _platformJs = require("../platform.js");
var _oneWayJs = require("../binding/one-way.js");
var _oneTimeJs = require("../binding/one-time.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _compilerJs = require("./compiler.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = /* eslint-disable-next-line no-control-regex */ /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
const noFactories = Object.create(null);
class InlineTemplateDirective {
    /**
     * Creates an instance of InlineTemplateDirective.
     * @param template - The template to inline.
     */ constructor(html, factories = noFactories){
        this.html = html;
        this.factories = factories;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        const factories = this.factories;
        for(const key in factories)add(factories[key]);
        return this.html;
    }
}
/**
 * An empty template partial.
 */ InlineTemplateDirective.empty = new InlineTemplateDirective("");
(0, _htmlDirectiveJs.HTMLDirective).define(InlineTemplateDirective);
function createHTML(value, prevString, add, definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(value)) {
    if (definition.aspected) {
        const match = lastAttributeNameRegex.exec(prevString);
        if (match !== null) (0, _htmlDirectiveJs.HTMLDirective).assignAspect(value, match[2]);
    }
    return value.createHTML(add);
}
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param factories - The directives that will be connected to placeholders in the html.
     * @param policy - The security policy to use when compiling this template.
     */ constructor(html, factories = {}, policy){
        this.policy = policy;
        this.result = null;
        this.html = html;
        this.factories = factories;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */ create(hostBindingTarget) {
        if (this.result === null) this.result = (0, _compilerJs.Compiler).compile(this.html, this.factories, this.policy);
        return this.result.createView(hostBindingTarget);
    }
    /**
     * Returns a directive that can inline the template.
     */ inline() {
        return new InlineTemplateDirective((0, _interfacesJs.isString)(this.html) ? this.html : this.html.innerHTML, this.factories);
    }
    /**
     * Sets the DOMPolicy for this template.
     * @param policy - The policy to associated with this template.
     * @returns The modified template instance.
     * @remarks
     * The DOMPolicy can only be set once for a template and cannot be
     * set after the template is compiled.
     */ withPolicy(policy) {
        if (this.result) throw (0, _platformJs.FAST).error(1208 /* Message.cannotSetTemplatePolicyAfterCompilation */ );
        if (this.policy) throw (0, _platformJs.FAST).error(1207 /* Message.onlySetTemplatePolicyOnce */ );
        this.policy = policy;
        return this;
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */ render(source, host, hostBindingTarget) {
        const view = this.create(hostBindingTarget);
        view.bind(source);
        view.appendTo(host);
        return view;
    }
    /**
     * Creates a template based on a set of static strings and dynamic values.
     * @param strings - The static strings to create the template with.
     * @param values - The dynamic values to create the template with.
     * @param policy - The DOMPolicy to associated with the template.
     * @returns A ViewTemplate.
     * @remarks
     * This API should not be used directly under normal circumstances because constructing
     * a template in this way, if not done properly, can open up the application to XSS
     * attacks. When using this API, provide a strong DOMPolicy that can properly sanitize
     * and also be sure to manually sanitize all static strings particularly if they can
     * come from user input.
     */ static create(strings, values, policy) {
        let html = "";
        const factories = Object.create(null);
        const add = (factory)=>{
            var _a;
            const id = (_a = factory.id) !== null && _a !== void 0 ? _a : factory.id = (0, _markupJs.nextId)();
            factories[id] = factory;
            return id;
        };
        for(let i = 0, ii = strings.length - 1; i < ii; ++i){
            const currentString = strings[i];
            let currentValue = values[i];
            let definition;
            html += currentString;
            if ((0, _interfacesJs.isFunction)(currentValue)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneWayJs.oneWay)(currentValue));
            else if (currentValue instanceof (0, _bindingJs.Binding)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)(currentValue);
            else if (!(definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(currentValue))) {
                const staticValue = currentValue;
                currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>staticValue));
            }
            html += createHTML(currentValue, currentString, add, definition);
        }
        return new ViewTemplate(html + strings[strings.length - 1], factories, policy);
    }
}
(0, _platformJs.makeSerializationNoop)(ViewTemplate);
const html = (strings, ...values)=>{
    if (Array.isArray(strings) && Array.isArray(strings.raw)) return ViewTemplate.create(strings, values);
    throw (0, _platformJs.FAST).error(1206 /* Message.directCallToHTMLTagNotAllowed */ );
};
html.partial = (html)=>{
    return new InlineTemplateDirective(html);
};

},{"../interfaces.js":"5090A","../binding/binding.js":"bkRAU","../platform.js":"aWsKi","../binding/one-way.js":"c1Y9Q","../binding/one-time.js":"8bSYC","./html-binding-directive.js":"2zgpw","./compiler.js":"bSUH3","./html-directive.js":"jlaqE","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zgpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that applies bindings.
 * @public
 */ parcelHelpers.export(exports, "HTMLBindingDirective", ()=>HTMLBindingDirective);
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _domJs = require("../dom.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
function updateContent(target, aspect, value, controller) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) value = "";
    // If the value has a "create" method, then it's a ContentTemplate.
    if (value.create) {
        target.textContent = "";
        let view = target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) view = value.create();
        else // If there is a previous view, but it wasn't created
        // from the same template as the new value, then we
        // need to remove the old view if it's still in the DOM
        // and create a new view from the template.
        if (target.$fastTemplate !== value) {
            if (view.isComposed) {
                view.remove();
                view.unbind();
            }
            view = value.create();
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(controller.source, controller.context);
            view.insertBefore(target);
            target.$fastView = view;
            target.$fastTemplate = value;
        } else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(controller.source, controller.context);
        }
    } else {
        const view = target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) view.needsBindOnly = false;
            else view.unbind();
        }
        target.textContent = value;
    }
}
function updateTokenList(target, aspect, value) {
    var _a;
    const lookup = `${this.id}-t`;
    const state = (_a = target[lookup]) !== null && _a !== void 0 ? _a : target[lookup] = {
        v: 0,
        cv: Object.create(null)
    };
    const classVersions = state.cv;
    let version = state.v;
    const tokenList = target[aspect];
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for(let i = 0, ii = names.length; i < ii; ++i){
            const currentName = names[i];
            if (currentName === "") continue;
            classVersions[currentName] = version;
            tokenList.add(currentName);
        }
    }
    state.v = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) return;
    // Remove classes from the previous version.
    version -= 1;
    for(const name in classVersions)if (classVersions[name] === version) tokenList.remove(name);
}
const sinkLookup = {
    [(0, _domJs.DOMAspect).attribute]: (0, _domJs.DOM).setAttribute,
    [(0, _domJs.DOMAspect).booleanAttribute]: (0, _domJs.DOM).setBooleanAttribute,
    [(0, _domJs.DOMAspect).property]: (t, a, v)=>t[a] = v,
    [(0, _domJs.DOMAspect).content]: updateContent,
    [(0, _domJs.DOMAspect).tokenList]: updateTokenList,
    [(0, _domJs.DOMAspect).event]: ()=>void 0
};
class HTMLBindingDirective {
    /**
     * Creates an instance of HTMLBindingDirective.
     * @param dataBinding - The binding configuration to apply.
     */ constructor(dataBinding){
        this.dataBinding = dataBinding;
        this.updateTarget = null;
        /**
         * The type of aspect to target.
         */ this.aspectType = (0, _domJs.DOMAspect).content;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        return (0, _markupJs.Markup).interpolation(add(this));
    }
    /**
     * Creates a behavior.
     */ createBehavior() {
        var _a;
        if (this.updateTarget === null) {
            const sink = sinkLookup[this.aspectType];
            const policy = (_a = this.dataBinding.policy) !== null && _a !== void 0 ? _a : this.policy;
            if (!sink) throw (0, _platformJs.FAST).error(1205 /* Message.unsupportedBindingBehavior */ );
            this.data = `${this.id}-d`;
            this.updateTarget = policy.protect(this.targetTagName, this.aspectType, this.targetAspect, sink);
        }
        return this;
    }
    /** @internal */ bind(controller) {
        var _a;
        const target = controller.targets[this.targetNodeId];
        switch(this.aspectType){
            case (0, _domJs.DOMAspect).event:
                target[this.data] = controller;
                target.addEventListener(this.targetAspect, this, this.dataBinding.options);
                break;
            case (0, _domJs.DOMAspect).content:
                controller.onUnbind(this);
            // intentional fall through
            default:
                const observer = (_a = target[this.data]) !== null && _a !== void 0 ? _a : target[this.data] = this.dataBinding.createObserver(this, this);
                observer.target = target;
                observer.controller = controller;
                this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
                break;
        }
    }
    /** @internal */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        const view = target.$fastView;
        if (view !== void 0 && view.isComposed) {
            view.unbind();
            view.needsBindOnly = true;
        }
    }
    /** @internal */ handleEvent(event) {
        const controller = event.currentTarget[this.data];
        if (controller.isBound) {
            (0, _observableJs.ExecutionContext).setEvent(event);
            const result = this.dataBinding.evaluate(controller.source, controller.context);
            (0, _observableJs.ExecutionContext).setEvent(null);
            if (result !== true) event.preventDefault();
        }
    }
    /** @internal */ handleChange(binding, observer) {
        const target = observer.target;
        const controller = observer.controller;
        this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(HTMLBindingDirective, {
    aspected: true
});

},{"../interfaces.js":"5090A","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../dom.js":"9qDgN","./html-directive.js":"jlaqE","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlaqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLDirective", ()=>HTMLDirective);
/**
 * Decorator: Defines an HTMLDirective.
 * @param options - Provides options that specify the directive's application.
 * @public
 */ parcelHelpers.export(exports, "htmlDirective", ()=>htmlDirective);
/**
 * A base class used for attribute directives that don't need internal state.
 * @public
 */ parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>StatelessAttachedAttributeDirective);
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
var _markupJs = require("./markup.js");
const registry = (0, _platformJs.createTypeRegistry)();
const HTMLDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines an HTMLDirective based on the options.
     * @param type - The type to define as a directive.
     * @param options - Options that specify the directive's application.
     */ define (type, options) {
        options = options || {};
        options.type = type;
        registry.register(options);
        return type;
    },
    /**
     *
     * @param directive - The directive to assign the aspect to.
     * @param value - The value to base the aspect determination on.
     * @remarks
     * If a falsy value is provided, then the content aspect will be assigned.
     */ assignAspect (directive, value) {
        if (!value) {
            directive.aspectType = (0, _domJs.DOMAspect).content;
            return;
        }
        directive.sourceAspect = value;
        switch(value[0]){
            case ":":
                directive.targetAspect = value.substring(1);
                directive.aspectType = directive.targetAspect === "classList" ? (0, _domJs.DOMAspect).tokenList : (0, _domJs.DOMAspect).property;
                break;
            case "?":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).booleanAttribute;
                break;
            case "@":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).event;
                break;
            default:
                directive.targetAspect = value;
                directive.aspectType = (0, _domJs.DOMAspect).attribute;
                break;
        }
    }
});
function htmlDirective(options) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        HTMLDirective.define(type, options);
    };
}
class StatelessAttachedAttributeDirective {
    /**
     * Creates an instance of RefDirective.
     * @param options - The options to use in configuring the directive.
     */ constructor(options){
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */ createHTML(add) {
        return (0, _markupJs.Markup).attribute(add(this));
    }
    /**
     * Creates a behavior.
     * @param targets - The targets available for behaviors to be attached to.
     */ createBehavior() {
        return this;
    }
}
(0, _platformJs.makeSerializationNoop)(StatelessAttachedAttributeDirective);

},{"../dom.js":"9qDgN","../platform.js":"aWsKi","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byCOc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextId", ()=>nextId);
parcelHelpers.export(exports, "Markup", ()=>Markup);
parcelHelpers.export(exports, "Parser", ()=>Parser);
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
const interpolationStart = `${marker}{`;
const interpolationEnd = `}${marker}`;
const interpolationEndLength = interpolationEnd.length;
let id = 0;
const nextId = ()=>`${marker}-${++id}`;
const Markup = Object.freeze({
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */ interpolation: (id)=>`${interpolationStart}${id}${interpolationEnd}`,
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */ attribute: (id)=>`${nextId()}="${interpolationStart}${id}${interpolationEnd}"`,
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */ comment: (id)=>`<!--${interpolationStart}${id}${interpolationEnd}-->`
});
const Parser = Object.freeze({
    /**
     * Parses text content or HTML attribute content, separating out the static strings
     * from the directives.
     * @param value - The content or attribute string to parse.
     * @param factories - A list of directives to search for in the string.
     * @returns A heterogeneous array of static strings interspersed with
     * directives or null if no directives are found in the string.
     */ parse (value, factories) {
        const parts = value.split(interpolationStart);
        if (parts.length === 1) return null;
        const result = [];
        for(let i = 0, ii = parts.length; i < ii; ++i){
            const current = parts[i];
            const index = current.indexOf(interpolationEnd);
            let literal;
            if (index === -1) literal = current;
            else {
                const factoryId = current.substring(0, index);
                result.push(factories[factoryId]);
                literal = current.substring(index + interpolationEndLength);
            }
            if (literal !== "") result.push(literal);
        }
        return result;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSUH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Compiler", ()=>Compiler);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _domJs = require("../dom.js");
var _oneTimeJs = require("../binding/one-time.js");
var _markupJs = require("./markup.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _viewJs = require("./view.js");
const targetIdFrom = (parentId, nodeIndex)=>`${parentId}.${nodeIndex}`;
const descriptorCache = {};
// used to prevent creating lots of objects just to track node and index while compiling
const next = {
    index: 0,
    node: null
};
function tryWarn(name) {
    if (!name.startsWith("fast-")) (0, _platformJs.FAST).warn(1204 /* Message.hostBindingWithoutHost */ , {
        name
    });
}
const warningHost = new Proxy(document.createElement("div"), {
    get (target, property) {
        tryWarn(property);
        const value = Reflect.get(target, property);
        return (0, _interfacesJs.isFunction)(value) ? value.bind(target) : value;
    },
    set (target, property, value) {
        tryWarn(property);
        return Reflect.set(target, property, value);
    }
});
class CompilationContext {
    constructor(fragment, directives, policy){
        this.fragment = fragment;
        this.directives = directives;
        this.policy = policy;
        this.proto = null;
        this.nodeIds = new Set();
        this.descriptors = {};
        this.factories = [];
    }
    addFactory(factory, parentId, nodeId, targetIndex, tagName) {
        var _a, _b;
        if (!this.nodeIds.has(nodeId)) {
            this.nodeIds.add(nodeId);
            this.addTargetDescriptor(parentId, nodeId, targetIndex);
        }
        factory.id = (_a = factory.id) !== null && _a !== void 0 ? _a : (0, _markupJs.nextId)();
        factory.targetNodeId = nodeId;
        factory.targetTagName = tagName;
        factory.policy = (_b = factory.policy) !== null && _b !== void 0 ? _b : this.policy;
        this.factories.push(factory);
    }
    freeze() {
        this.proto = Object.create(null, this.descriptors);
        return this;
    }
    addTargetDescriptor(parentId, targetId, targetIndex) {
        const descriptors = this.descriptors;
        if (targetId === "r" || // root
        targetId === "h" || // host
        descriptors[targetId]) return;
        if (!descriptors[parentId]) {
            const index = parentId.lastIndexOf(".");
            const grandparentId = parentId.substring(0, index);
            const childIndex = parseInt(parentId.substring(index + 1));
            this.addTargetDescriptor(grandparentId, parentId, childIndex);
        }
        let descriptor = descriptorCache[targetId];
        if (!descriptor) {
            const field = `_${targetId}`;
            descriptorCache[targetId] = descriptor = {
                get () {
                    var _a;
                    return (_a = this[field]) !== null && _a !== void 0 ? _a : this[field] = this[parentId].childNodes[targetIndex];
                }
            };
        }
        descriptors[targetId] = descriptor;
    }
    createView(hostBindingTarget) {
        const fragment = this.fragment.cloneNode(true);
        const targets = Object.create(this.proto);
        targets.r = fragment;
        targets.h = hostBindingTarget !== null && hostBindingTarget !== void 0 ? hostBindingTarget : warningHost;
        for (const id of this.nodeIds)targets[id]; // trigger locator
        return new (0, _viewJs.HTMLView)(fragment, this.factories, targets);
    }
}
function compileAttributes(context, parentId, node, nodeId, nodeIndex, includeBasicValues = false) {
    const attributes = node.attributes;
    const directives = context.directives;
    for(let i = 0, ii = attributes.length; i < ii; ++i){
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = (0, _markupJs.Parser).parse(attrValue, directives);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>attrValue, context.policy));
                (0, _htmlDirectiveJs.HTMLDirective).assignAspect(result, attr.name);
            }
        } else /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ result = Compiler.aggregate(parseResult, context.policy);
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result, parentId, nodeId, nodeIndex, node.tagName);
        }
    }
}
function compileContent(context, node, parentId, nodeId, nodeIndex) {
    const parseResult = (0, _markupJs.Parser).parse(node.textContent, context.directives);
    if (parseResult === null) {
        next.node = node.nextSibling;
        next.index = nodeIndex + 1;
        return next;
    }
    let currentNode;
    let lastNode = currentNode = node;
    for(let i = 0, ii = parseResult.length; i < ii; ++i){
        const currentPart = parseResult[i];
        if (i !== 0) {
            nodeIndex++;
            nodeId = targetIdFrom(parentId, nodeIndex);
            currentNode = lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
        }
        if ((0, _interfacesJs.isString)(currentPart)) currentNode.textContent = currentPart;
        else {
            currentNode.textContent = " ";
            (0, _htmlDirectiveJs.HTMLDirective).assignAspect(currentPart);
            context.addFactory(currentPart, parentId, nodeId, nodeIndex, null);
        }
        lastNode = currentNode;
    }
    next.index = nodeIndex + 1;
    next.node = lastNode.nextSibling;
    return next;
}
function compileChildren(context, parent, parentId) {
    let nodeIndex = 0;
    let childNode = parent.firstChild;
    while(childNode){
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ const result = compileNode(context, parentId, childNode, nodeIndex);
        childNode = result.node;
        nodeIndex = result.index;
    }
}
function compileNode(context, parentId, node, nodeIndex) {
    const nodeId = targetIdFrom(parentId, nodeIndex);
    switch(node.nodeType){
        case 1:
            compileAttributes(context, parentId, node, nodeId, nodeIndex);
            compileChildren(context, node, nodeId);
            break;
        case 3:
            return compileContent(context, node, parentId, nodeId, nodeIndex);
        case 8:
            const parts = (0, _markupJs.Parser).parse(node.data, context.directives);
            if (parts !== null) context.addFactory(/* eslint-disable-next-line @typescript-eslint/no-use-before-define */ Compiler.aggregate(parts), parentId, nodeId, nodeIndex, null);
            break;
    }
    next.index = nodeIndex + 1;
    next.node = node.nextSibling;
    return next;
}
function isMarker(node, directives) {
    return node && node.nodeType == 8 && (0, _markupJs.Parser).parse(node.data, directives) !== null;
}
const templateTag = "TEMPLATE";
const Compiler = {
    /**
     * Compiles a template and associated directives into a compilation
     * result which can be used to create views.
     * @param html - The html string or template element to compile.
     * @param factories - The behavior factories referenced by the template.
     * @param policy - The security policy to compile the html with.
     * @remarks
     * The template that is provided for compilation is altered in-place
     * and cannot be compiled again. If the original template must be preserved,
     * it is recommended that you clone the original and pass the clone to this API.
     * @public
     */ compile (html, factories, policy = (0, _domJs.DOM).policy) {
        let template;
        if ((0, _interfacesJs.isString)(html)) {
            template = document.createElement(templateTag);
            template.innerHTML = policy.createHTML(html);
            const fec = template.content.firstElementChild;
            if (fec !== null && fec.tagName === templateTag) template = fec;
        } else template = html;
        if (!template.content.firstChild && !template.content.lastChild) template.content.appendChild(document.createComment(""));
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
        const fragment = document.adoptNode(template.content);
        const context = new CompilationContext(fragment, factories, policy);
        compileAttributes(context, "", template, /* host */ "h", 0, true);
        if (// If the first node in a fragment is a marker, that means it's an unstable first node,
        // because something like a when, repeat, etc. could add nodes before the marker.
        // To mitigate this, we insert a stable first node. However, if we insert a node,
        // that will alter the result of the TreeWalker. So, we also need to offset the target index.
        isMarker(fragment.firstChild, factories) || // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        fragment.childNodes.length === 1 && Object.keys(factories).length > 0) fragment.insertBefore(document.createComment(""), fragment.firstChild);
        compileChildren(context, fragment, /* root */ "r");
        next.node = null; // prevent leaks
        return context.freeze();
    },
    /**
     * Sets the default compilation strategy that will be used by the ViewTemplate whenever
     * it needs to compile a view preprocessed with the html template function.
     * @param strategy - The compilation strategy to use when compiling templates.
     */ setDefaultStrategy (strategy) {
        this.compile = strategy;
    },
    /**
     * Aggregates an array of strings and directives into a single directive.
     * @param parts - A heterogeneous array of static strings interspersed with
     * directives.
     * @param policy - The security policy to use with the aggregated bindings.
     * @returns A single inline directive that aggregates the behavior of all the parts.
     */ aggregate (parts, policy = (0, _domJs.DOM).policy) {
        if (parts.length === 1) return parts[0];
        let sourceAspect;
        let binding;
        let isVolatile = false;
        let bindingPolicy = void 0;
        const partCount = parts.length;
        const finalParts = parts.map((x)=>{
            if ((0, _interfacesJs.isString)(x)) return ()=>x;
            sourceAspect = x.sourceAspect || sourceAspect;
            binding = x.dataBinding || binding;
            isVolatile = isVolatile || x.dataBinding.isVolatile;
            bindingPolicy = bindingPolicy || x.dataBinding.policy;
            return x.dataBinding.evaluate;
        });
        const expression = (scope, context)=>{
            let output = "";
            for(let i = 0; i < partCount; ++i)output += finalParts[i](scope, context);
            return output;
        };
        binding.evaluate = expression;
        binding.isVolatile = isVolatile;
        binding.policy = bindingPolicy !== null && bindingPolicy !== void 0 ? bindingPolicy : policy;
        const directive = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)(binding);
        (0, _htmlDirectiveJs.HTMLDirective).assignAspect(directive, sourceAspect);
        return directive;
    }
};

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","../dom.js":"9qDgN","../binding/one-time.js":"8bSYC","./markup.js":"byCOc","./html-binding-directive.js":"2zgpw","./html-directive.js":"jlaqE","./view.js":"hUlFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUlFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */ parcelHelpers.export(exports, "HTMLView", ()=>HTMLView);
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
function removeNodeSequence(firstNode, lastNode) {
    const parent = firstNode.parentNode;
    let current = firstNode;
    let next;
    while(current !== lastNode){
        next = current.nextSibling;
        parent.removeChild(current);
        current = next;
    }
    parent.removeChild(lastNode);
}
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */ constructor(fragment, factories, targets){
        this.fragment = fragment;
        this.factories = factories;
        this.targets = targets;
        this.behaviors = null;
        this.unbindables = [];
        /**
         * The data that the view is bound to.
         */ this.source = null;
        /**
         * Indicates whether the controller is bound.
         */ this.isBound = false;
        /**
         * Indicates how the source's lifetime relates to the controller's lifetime.
         */ this.sourceLifetime = (0, _observableJs.SourceLifetime).unknown;
        /**
         * The execution context the view is running within.
         */ this.context = this;
        /**
         * The index of the current item within a repeat context.
         */ this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */ this.length = 0;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * The current event within an event handler.
     */ get event() {
        return (0, _observableJs.ExecutionContext).getEvent();
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */ get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */ get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */ get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */ get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */ get isLast() {
        return this.index === this.length - 1;
    }
    /**
     * Returns the typed event detail of a custom event.
     */ eventDetail() {
        return this.event.detail;
    }
    /**
     * Returns the typed event target of the event.
     */ eventTarget() {
        return this.event.target;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */ appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */ insertBefore(node) {
        if (this.fragment.hasChildNodes()) node.parentNode.insertBefore(this.fragment, node);
        else {
            const end = this.lastChild;
            if (node.previousSibling === end) return;
            const parentNode = node.parentNode;
            let current = this.firstChild;
            let next;
            while(current !== end){
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */ remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while(current !== end){
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */ dispose() {
        removeNodeSequence(this.firstChild, this.lastChild);
        this.unbind();
    }
    onUnbind(behavior) {
        this.unbindables.push(behavior);
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */ bind(source, context = this) {
        if (this.source === source) return;
        let behaviors = this.behaviors;
        if (behaviors === null) {
            this.source = source;
            this.context = context;
            this.behaviors = behaviors = new Array(this.factories.length);
            const factories = this.factories;
            for(let i = 0, ii = factories.length; i < ii; ++i){
                const behavior = factories[i].createBehavior();
                behavior.bind(this);
                behaviors[i] = behavior;
            }
        } else {
            if (this.source !== null) this.evaluateUnbindables();
            this.isBound = false;
            this.source = source;
            this.context = context;
            for(let i = 0, ii = behaviors.length; i < ii; ++i)behaviors[i].bind(this);
        }
        this.isBound = true;
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */ unbind() {
        if (!this.isBound || this.source === null) return;
        this.evaluateUnbindables();
        this.source = null;
        this.context = this;
        this.isBound = false;
    }
    evaluateUnbindables() {
        const unbindables = this.unbindables;
        for(let i = 0, ii = unbindables.length; i < ii; ++i)unbindables[i].unbind(this);
        unbindables.length = 0;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */ static disposeContiguousBatch(views) {
        if (views.length === 0) return;
        removeNodeSequence(views[0].firstChild, views[views.length - 1].lastChild);
        for(let i = 0, ii = views.length; i < ii; ++i)views[i].unbind();
    }
}
(0, _platformJs.makeSerializationNoop)(HTMLView);
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "index");
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "length");

},{"../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ak4xA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for template references.
 * @public
 */ parcelHelpers.export(exports, "RefDirective", ()=>RefDirective);
parcelHelpers.export(exports, "ref", ()=>ref);
var _htmlDirectiveJs = require("./html-directive.js");
class RefDirective extends (0, _htmlDirectiveJs.StatelessAttachedAttributeDirective) {
    /**
     * Bind this behavior.
     * @param controller - The view controller that manages the lifecycle of this behavior.
     */ bind(controller) {
        controller.source[this.options] = controller.targets[this.targetNodeId];
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(RefDirective);
const ref = (propertyName)=>new RefDirective(propertyName);

},{"./html-directive.js":"jlaqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3O57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that enables basic conditional rendering in a template.
 * @param condition - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @param elseTemplateOrTemplateBinding - Optional template or binding that that
 * gets the template to render when the conditional is false.
 * @public
 */ parcelHelpers.export(exports, "when", ()=>when);
var _interfacesJs = require("../interfaces.js");
const noTemplate = ()=>null;
function normalizeBinding(value) {
    return value === undefined ? noTemplate : (0, _interfacesJs.isFunction)(value) ? value : ()=>value;
}
function when(condition, templateOrTemplateBinding, elseTemplateOrTemplateBinding) {
    const dataBinding = (0, _interfacesJs.isFunction)(condition) ? condition : ()=>condition;
    const templateBinding = normalizeBinding(templateOrTemplateBinding);
    const elseBinding = normalizeBinding(elseTemplateOrTemplateBinding);
    return (source, context)=>dataBinding(source, context) ? templateBinding(source, context) : elseBinding(source, context);
}

},{"../interfaces.js":"5090A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59SVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "SlottedDirective", ()=>SlottedDirective);
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "slotted", ()=>slotted);
var _interfacesJs = require("../interfaces.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _nodeObservationJs = require("./node-observation.js");
const slotEvent = "slotchange";
class SlottedDirective extends (0, _nodeObservationJs.NodeObservationDirective) {
    /**
     * Begins observation of the nodes.
     * @param target - The target to observe.
     */ observe(target) {
        target.addEventListener(slotEvent, this);
    }
    /**
     * Disconnects observation of the nodes.
     * @param target - The target to unobserve.
     */ disconnect(target) {
        target.removeEventListener(slotEvent, this);
    }
    /**
     * Retrieves the raw nodes that should be assigned to the source property.
     * @param target - The target to get the node to.
     */ getNodes(target) {
        return target.assignedNodes(this.options);
    }
    /** @internal */ handleEvent(event) {
        const target = event.currentTarget;
        this.updateTarget(this.getSource(target), this.computeNodes(target));
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(SlottedDirective);
function slotted(propertyOrOptions) {
    if ((0, _interfacesJs.isString)(propertyOrOptions)) propertyOrOptions = {
        property: propertyOrOptions
    };
    return new SlottedDirective(propertyOrOptions);
}

},{"../interfaces.js":"5090A","./html-directive.js":"jlaqE","./node-observation.js":"6lFIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lFIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements);
/**
 * A base class for node observation.
 * @public
 * @remarks
 * Internally used by the SlottedDirective and the ChildrenDirective.
 */ parcelHelpers.export(exports, "NodeObservationDirective", ()=>NodeObservationDirective);
var _platformJs = require("../platform.js");
var _htmlDirectiveJs = require("./html-directive.js");
const selectElements = (value)=>value.nodeType === 1;
const elements = (selector)=>selector ? (value)=>value.nodeType === 1 && value.matches(selector) : selectElements;
class NodeObservationDirective extends (0, _htmlDirectiveJs.StatelessAttachedAttributeDirective) {
    /**
     * The unique id of the factory.
     */ get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        this._controllerProperty = `${value}-c`;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ bind(controller) {
        const target = controller.targets[this.targetNodeId];
        target[this._controllerProperty] = controller;
        this.updateTarget(controller.source, this.computeNodes(target));
        this.observe(target);
        controller.onUnbind(this);
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        this.updateTarget(controller.source, (0, _platformJs.emptyArray));
        this.disconnect(target);
        target[this._controllerProperty] = null;
    }
    /**
     * Gets the data source for the target.
     * @param target - The target to get the source for.
     * @returns The source.
     */ getSource(target) {
        return target[this._controllerProperty].source;
    }
    /**
     * Updates the source property with the computed nodes.
     * @param source - The source object to assign the nodes property to.
     * @param value - The nodes to assign to the source object property.
     */ updateTarget(source, value) {
        source[this.options.property] = value;
    }
    /**
     * Computes the set of nodes that should be assigned to the source property.
     * @param target - The target to compute the nodes for.
     * @returns The computed nodes.
     * @remarks
     * Applies filters if provided.
     */ computeNodes(target) {
        let nodes = this.getNodes(target);
        if ("filter" in this.options) nodes = nodes.filter(this.options.filter);
        return nodes;
    }
}

},{"../platform.js":"aWsKi","./html-directive.js":"jlaqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHqCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FASTElement", ()=>FASTElement);
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */ parcelHelpers.export(exports, "customElement", ()=>customElement);
var _interfacesJs = require("../interfaces.js");
var _elementControllerJs = require("./element-controller.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ function createFASTElement(BaseType) {
    const type = class extends BaseType {
        constructor(){
            /* eslint-disable-next-line */ super();
            (0, _elementControllerJs.ElementController).forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.connect();
        }
        disconnectedCallback() {
            this.$fastController.disconnect();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
    (0, _fastDefinitionsJs.FASTElementDefinition).registerBaseType(type);
    return type;
}
function compose(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef);
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type);
}
function define(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef).define().type;
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type).define().type;
}
function from(BaseType) {
    return createFASTElement(BaseType);
}
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */ from,
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */ define,
    /**
     * Defines metadata for a FASTElement which can be used to later define the element.
     * @public
     */ compose
});
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        define(type, nameOrDef);
    };
}

},{"../interfaces.js":"5090A","./element-controller.js":"ljMOy","./fast-definitions.js":"j7Lm6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljMOy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */ parcelHelpers.export(exports, "ElementController", ()=>ElementController);
// Default StyleStrategy implementations are defined in this module because they
// require access to element shadowRoots, and we don't want to leak shadowRoot
// objects out of this module.
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */ parcelHelpers.export(exports, "AdoptedStyleSheetsStrategy", ()=>AdoptedStyleSheetsStrategy);
/**
 * @internal
 */ parcelHelpers.export(exports, "StyleElementStrategy", ()=>StyleElementStrategy);
var _interfacesJs = require("../interfaces.js");
var _notifierJs = require("../observation/notifier.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true
};
const isConnectedPropertyName = "isConnected";
const shadowRoots = new WeakMap();
function getShadowRoot(element) {
    var _a, _b;
    return (_b = (_a = element.shadowRoot) !== null && _a !== void 0 ? _a : shadowRoots.get(element)) !== null && _b !== void 0 ? _b : null;
}
let elementControllerStrategy;
class ElementController extends (0, _notifierJs.PropertyChangeNotifier) {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */ constructor(element, definition){
        super(element);
        this.boundObservables = null;
        this.needsInitialization = true;
        this.hasExistingShadowRoot = false;
        this._template = null;
        this.stage = 3 /* Stages.disconnected */ ;
        /**
         * A guard against connecting behaviors multiple times
         * during connect in scenarios where a behavior adds
         * another behavior during it's connectedCallback
         */ this.guardBehaviorConnection = false;
        this.behaviors = null;
        this._mainStyles = null;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */ this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */ this.view = null;
        this.source = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            let shadowRoot = element.shadowRoot;
            if (shadowRoot) this.hasExistingShadowRoot = true;
            else {
                shadowRoot = element.attachShadow(shadowOptions);
                if (shadowOptions.mode === "closed") shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = (0, _observableJs.Observable).getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = this.boundObservables = Object.create(null);
            for(let i = 0, ii = accessors.length; i < ii; ++i){
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */ get isConnected() {
        (0, _observableJs.Observable).track(this, isConnectedPropertyName);
        return this.stage === 1 /* Stages.connected */ ;
    }
    /**
     * The context the expression is evaluated against.
     */ get context() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.context) !== null && _b !== void 0 ? _b : (0, _observableJs.ExecutionContext).default;
    }
    /**
     * Indicates whether the controller is bound.
     */ get isBound() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.isBound) !== null && _b !== void 0 ? _b : false;
    }
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */ get sourceLifetime() {
        var _a;
        return (_a = this.view) === null || _a === void 0 ? void 0 : _a.sourceLifetime;
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */ get template() {
        var _a;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            const definition = this.definition;
            if (this.source.resolveTemplate) // 2. Allow for element instance overrides next.
            this._template = this.source.resolveTemplate();
            else if (definition.template) // 3. Default to the static definition.
            this._template = (_a = definition.template) !== null && _a !== void 0 ? _a : null;
        }
        return this._template;
    }
    set template(value) {
        if (this._template === value) return;
        this._template = value;
        if (!this.needsInitialization) this.renderTemplate(value);
    }
    /**
     * The main set of styles used for the component, independent
     * of any dynamically added styles.
     */ get mainStyles() {
        var _a;
        // 1. Styles overrides take top precedence.
        if (this._mainStyles === null) {
            const definition = this.definition;
            if (this.source.resolveStyles) // 2. Allow for element instance overrides next.
            this._mainStyles = this.source.resolveStyles();
            else if (definition.styles) // 3. Default to the static definition.
            this._mainStyles = (_a = definition.styles) !== null && _a !== void 0 ? _a : null;
        }
        return this._mainStyles;
    }
    set mainStyles(value) {
        if (this._mainStyles === value) return;
        if (this._mainStyles !== null) this.removeStyles(this._mainStyles);
        this._mainStyles = value;
        if (!this.needsInitialization) this.addStyles(value);
    }
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */ onUnbind(behavior) {
        var _a;
        (_a = this.view) === null || _a === void 0 || _a.onUnbind(behavior);
    }
    /**
     * Adds the behavior to the component.
     * @param behavior - The behavior to add.
     */ addBehavior(behavior) {
        var _a, _b;
        const targetBehaviors = (_a = this.behaviors) !== null && _a !== void 0 ? _a : this.behaviors = new Map();
        const count = (_b = targetBehaviors.get(behavior)) !== null && _b !== void 0 ? _b : 0;
        if (count === 0) {
            targetBehaviors.set(behavior, 1);
            behavior.addedCallback && behavior.addedCallback(this);
            if (behavior.connectedCallback && !this.guardBehaviorConnection && (this.stage === 1 /* Stages.connected */  || this.stage === 0 /* Stages.connecting */ )) behavior.connectedCallback(this);
        } else targetBehaviors.set(behavior, count + 1);
    }
    /**
     * Removes the behavior from the component.
     * @param behavior - The behavior to remove.
     * @param force - Forces removal even if this behavior was added more than once.
     */ removeBehavior(behavior, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) return;
        const count = targetBehaviors.get(behavior);
        if (count === void 0) return;
        if (count === 1 || force) {
            targetBehaviors.delete(behavior);
            if (behavior.disconnectedCallback && this.stage !== 3 /* Stages.disconnected */ ) behavior.disconnectedCallback(this);
            behavior.removedCallback && behavior.removedCallback(this);
        } else targetBehaviors.set(behavior, count - 1);
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */ addStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : this.source;
            target.append(styles);
        } else if (!styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.addBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */ removeStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : source;
            target.removeChild(styles);
        } else if (styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.removeBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */ connect() {
        if (this.stage !== 3 /* Stages.disconnected */ ) return;
        this.stage = 0 /* Stages.connecting */ ;
        // If we have any observables that were bound, re-apply their values.
        if (this.boundObservables !== null) {
            const element = this.source;
            const boundObservables = this.boundObservables;
            const propertyNames = Object.keys(boundObservables);
            for(let i = 0, ii = propertyNames.length; i < ii; ++i){
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            this.guardBehaviorConnection = true;
            for (const key of behaviors.keys())key.connectedCallback && key.connectedCallback(this);
            this.guardBehaviorConnection = false;
        }
        if (this.needsInitialization) {
            this.renderTemplate(this.template);
            this.addStyles(this.mainStyles);
            this.needsInitialization = false;
        } else if (this.view !== null) this.view.bind(this.source);
        this.stage = 1 /* Stages.connected */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */ disconnect() {
        if (this.stage !== 1 /* Stages.connected */ ) return;
        this.stage = 2 /* Stages.disconnecting */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
        if (this.view !== null) this.view.unbind();
        const behaviors = this.behaviors;
        if (behaviors !== null) for (const key of behaviors.keys())key.disconnectedCallback && key.disconnectedCallback(this);
        this.stage = 3 /* Stages.disconnected */ ;
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */ onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) attrDef.onAttributeChangedCallback(this.source, newValue);
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */ emit(type, detail, options) {
        if (this.stage === 1 /* Stages.connected */ ) return this.source.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({
            detail
        }, defaultEventOptions), options)));
        return false;
    }
    renderTemplate(template) {
        var _a;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const element = this.source;
        const host = (_a = getShadowRoot(element)) !== null && _a !== void 0 ? _a : element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        } else if (!this.needsInitialization || this.hasExistingShadowRoot) {
            this.hasExistingShadowRoot = false;
            // If there was previous custom rendering, we need to clear out the host.
            for(let child = host.firstChild; child !== null; child = host.firstChild)host.removeChild(child);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
            this.view.sourceLifetime = (0, _observableJs.SourceLifetime).coupled;
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */ static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) return controller;
        const definition = (0, _fastDefinitionsJs.FASTElementDefinition).getForInstance(element);
        if (definition === void 0) throw (0, _platformJs.FAST).error(1401 /* Message.missingElementDefinition */ );
        return element.$fastController = new elementControllerStrategy(element, definition);
    }
    /**
     * Sets the strategy that ElementController.forCustomElement uses to construct
     * ElementController instances for an element.
     * @param strategy - The strategy to use.
     */ static setStrategy(strategy) {
        elementControllerStrategy = strategy;
    }
}
(0, _platformJs.makeSerializationNoop)(ElementController);
// Set default strategy for ElementController
ElementController.setStrategy(ElementController);
/**
 * Converts a styleTarget into the operative target. When the provided target is an Element
 * that is a FASTElement, the function will return the ShadowRoot for that element. Otherwise,
 * it will return the root node for the element.
 * @param target
 * @returns
 */ function normalizeStyleTarget(target) {
    var _a;
    if ("adoptedStyleSheets" in target) return target;
    else return (_a = getShadowRoot(target)) !== null && _a !== void 0 ? _a : target.getRootNode();
}
class AdoptedStyleSheetsStrategy {
    constructor(styles){
        const styleSheetCache = AdoptedStyleSheetsStrategy.styleSheetCache;
        this.sheets = styles.map((x)=>{
            if (x instanceof CSSStyleSheet) return x;
            let sheet = styleSheetCache.get(x);
            if (sheet === void 0) {
                sheet = new CSSStyleSheet();
                sheet.replaceSync(x);
                styleSheetCache.set(x, sheet);
            }
            return sheet;
        });
    }
    addStylesTo(target) {
        addAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
    removeStylesFrom(target) {
        removeAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
}
AdoptedStyleSheetsStrategy.styleSheetCache = new Map();
let id = 0;
const nextStyleId = ()=>`fast-${++id}`;
function usableStyleTarget(target) {
    return target === document ? document.body : target;
}
class StyleElementStrategy {
    constructor(styles){
        this.styles = styles;
        this.styleClass = nextStyleId();
    }
    addStylesTo(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = this.styles;
        const styleClass = this.styleClass;
        for(let i = 0; i < styles.length; i++){
            const element = document.createElement("style");
            element.innerHTML = styles[i];
            element.className = styleClass;
            target.append(element);
        }
    }
    removeStylesFrom(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for(let i = 0, ii = styles.length; i < ii; ++i)target.removeChild(styles[i]);
    }
}
let addAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = [
        ...target.adoptedStyleSheets,
        ...sheets
    ];
};
let removeAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x)=>sheets.indexOf(x) === -1);
};
if ((0, _elementStylesJs.ElementStyles).supportsAdoptedStyleSheets) {
    try {
        // Test if browser implementation uses FrozenArray.
        // If not, use push / splice to alter the stylesheets
        // in place. This circumvents a bug in Safari 16.4 where
        // periodically, assigning the array would previously
        // cause sheets to be removed.
        document.adoptedStyleSheets.push();
        document.adoptedStyleSheets.splice();
        addAdoptedStyleSheets = (target, sheets)=>{
            target.adoptedStyleSheets.push(...sheets);
        };
        removeAdoptedStyleSheets = (target, sheets)=>{
            for (const sheet of sheets){
                const index = target.adoptedStyleSheets.indexOf(sheet);
                if (index !== -1) target.adoptedStyleSheets.splice(index, 1);
            }
        };
    } catch (e) {
    // Do nothing if an error is thrown, the default
    // case handles FrozenArray.
    }
    (0, _elementStylesJs.ElementStyles).setDefaultStrategy(AdoptedStyleSheetsStrategy);
} else (0, _elementStylesJs.ElementStyles).setDefaultStrategy(StyleElementStrategy);

},{"../interfaces.js":"5090A","../observation/notifier.js":"3Ve9s","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../styles/element-styles.js":"jf7rv","./fast-definitions.js":"j7Lm6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7Lm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Defines metadata for a FASTElement.
 * @public
 */ parcelHelpers.export(exports, "FASTElementDefinition", ()=>FASTElementDefinition);
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _attributesJs = require("./attributes.js");
const defaultShadowOptions = {
    mode: "open"
};
const defaultElementOptions = {};
const fastElementBaseTypes = new Set();
const fastElementRegistry = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).elementRegistry, ()=>(0, _platformJs.createTypeRegistry)());
class FASTElementDefinition {
    constructor(type, nameOrConfig = type.definition){
        var _a;
        this.platformDefined = false;
        if ((0, _interfacesJs.isString)(nameOrConfig)) nameOrConfig = {
            name: nameOrConfig
        };
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        this.registry = (_a = nameOrConfig.registry) !== null && _a !== void 0 ? _a : customElements;
        const proto = type.prototype;
        const attributes = (0, _attributesJs.AttributeDefinition).collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for(let i = 0, ii = attributes.length; i < ii; ++i){
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
            (0, _observableJs.Observable).defineProperty(proto, current);
        }
        Reflect.defineProperty(type, "observedAttributes", {
            value: observedAttributes,
            enumerable: true
        });
        this.attributes = attributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles = (0, _elementStylesJs.ElementStyles).normalize(nameOrConfig.styles);
        fastElementRegistry.register(this);
    }
    /**
     * Indicates if this element has been defined in at least one registry.
     */ get isDefined() {
        return this.platformDefined;
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     * @remarks
     * This operation is idempotent per registry.
     */ define(registry = this.registry) {
        const type = this.type;
        if (!registry.get(this.name)) {
            this.platformDefined = true;
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrDef - The name of the element to define or a config object
     * that describes the element to define.
     */ static compose(type, nameOrDef) {
        if (fastElementBaseTypes.has(type) || fastElementRegistry.getByType(type)) return new FASTElementDefinition(class extends type {
        }, nameOrDef);
        return new FASTElementDefinition(type, nameOrDef);
    }
    /**
     * Registers a FASTElement base type.
     * @param type - The type to register as a base type.
     * @internal
     */ static registerBaseType(type) {
        fastElementBaseTypes.add(type);
    }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */ FASTElementDefinition.getByType = fastElementRegistry.getByType;
/**
 * Gets the element definition associated with the instance.
 * @param instance - The custom element instance to retrieve the definition for.
 */ FASTElementDefinition.getForInstance = fastElementRegistry.getForInstance;

},{"../interfaces.js":"5090A","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../styles/element-styles.js":"jf7rv","./attributes.js":"fTX1F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTX1F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeConfiguration", ()=>AttributeConfiguration);
parcelHelpers.export(exports, "booleanConverter", ()=>booleanConverter);
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>nullableBooleanConverter);
parcelHelpers.export(exports, "nullableNumberConverter", ()=>nullableNumberConverter);
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */ parcelHelpers.export(exports, "AttributeDefinition", ()=>AttributeDefinition);
parcelHelpers.export(exports, "attr", ()=>attr);
var _observableJs = require("../observation/observable.js");
var _interfacesJs = require("../interfaces.js");
var _updateQueueJs = require("../observation/update-queue.js");
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
const booleanMode = "boolean";
const reflectMode = "reflect";
const AttributeConfiguration = Object.freeze({
    /**
     * Locates all attribute configurations associated with a type.
     */ locate: (0, _platformJs.createMetadataLocator)()
});
const booleanConverter = {
    toView (value) {
        return value ? "true" : "false";
    },
    fromView (value) {
        return value === null || value === void 0 || value === "false" || value === false || value === 0 ? false : true;
    }
};
const nullableBooleanConverter = {
    toView (value) {
        return typeof value === "boolean" ? value.toString() : "";
    },
    fromView (value) {
        return [
            null,
            undefined,
            void 0
        ].includes(value) ? null : booleanConverter.fromView(value);
    }
};
function toNumber(value) {
    if (value === null || value === undefined) return null;
    const number = value * 1;
    return isNaN(number) ? null : number;
}
const nullableNumberConverter = {
    toView (value) {
        const output = toNumber(value);
        return output ? output.toString() : output;
    },
    fromView: toNumber
};
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */ constructor(Owner, name, attribute = name.toLowerCase(), mode = reflectMode, converter){
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === booleanMode && converter === void 0) this.converter = booleanConverter;
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */ setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) newValue = converter.fromView(newValue);
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) source[this.callbackName](oldValue, newValue);
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */ getValue(source) {
        (0, _observableJs.Observable).track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */ onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) return;
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") return;
        (0, _updateQueueJs.Updates).enqueue(()=>{
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch(mode){
                case reflectMode:
                    const converter = this.converter;
                    (0, _domJs.DOM).setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case booleanMode:
                    (0, _domJs.DOM).setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */ static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(AttributeConfiguration.locate(Owner));
        for(let i = 0, ii = attributeLists.length; i < ii; ++i){
            const list = attributeLists[i];
            if (list === void 0) continue;
            for(let j = 0, jj = list.length; j < jj; ++j){
                const config = list[j];
                if ((0, _interfacesJs.isString)(config)) attributes.push(new AttributeDefinition(Owner, config));
                else attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) // Non invocation:
        // - @attr
        // Invocation with or w/o opts:
        // - @attr()
        // - @attr({...opts})
        config.property = $prop;
        AttributeConfiguration.locate($target.constructor).push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}

},{"../observation/observable.js":"a7TJ2","../interfaces.js":"5090A","../observation/update-queue.js":"8aP8r","../dom.js":"9qDgN","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZW12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./accordion/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./accordion-item/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _indexJs2 = require("./anchor-button/index.js");
parcelHelpers.exportAll(_indexJs2, exports);
var _indexJs3 = require("./avatar/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
var _indexJs4 = require("./badge/index.js");
parcelHelpers.exportAll(_indexJs4, exports);
var _indexJs5 = require("./button/index.js");
parcelHelpers.exportAll(_indexJs5, exports);
var _indexJs6 = require("./checkbox/index.js");
parcelHelpers.exportAll(_indexJs6, exports);
var _indexJs7 = require("./compound-button/index.js");
parcelHelpers.exportAll(_indexJs7, exports);
var _indexJs8 = require("./counter-badge/index.js");
parcelHelpers.exportAll(_indexJs8, exports);
var _indexJs9 = require("./dialog/index.js");
parcelHelpers.exportAll(_indexJs9, exports);
var _indexJs10 = require("./divider/index.js");
parcelHelpers.exportAll(_indexJs10, exports);
var _indexJs11 = require("./image/index.js");
parcelHelpers.exportAll(_indexJs11, exports);
var _indexJs12 = require("./label/index.js");
parcelHelpers.exportAll(_indexJs12, exports);
var _indexJs13 = require("./menu/index.js");
parcelHelpers.exportAll(_indexJs13, exports);
var _indexJs14 = require("./menu-button/index.js");
parcelHelpers.exportAll(_indexJs14, exports);
var _indexJs15 = require("./menu-item/index.js");
parcelHelpers.exportAll(_indexJs15, exports);
var _indexJs16 = require("./menu-list/index.js");
parcelHelpers.exportAll(_indexJs16, exports);
var _indexJs17 = require("./progress-bar/index.js");
parcelHelpers.exportAll(_indexJs17, exports);
var _indexJs18 = require("./radio/index.js");
parcelHelpers.exportAll(_indexJs18, exports);
var _indexJs19 = require("./radio-group/index.js");
parcelHelpers.exportAll(_indexJs19, exports);
var _indexJs20 = require("./slider/index.js");
parcelHelpers.exportAll(_indexJs20, exports);
var _indexJs21 = require("./spinner/index.js");
parcelHelpers.exportAll(_indexJs21, exports);
var _indexJs22 = require("./switch/index.js");
parcelHelpers.exportAll(_indexJs22, exports);
var _indexJs23 = require("./tabs/index.js");
parcelHelpers.exportAll(_indexJs23, exports);
var _indexJs24 = require("./tab/index.js");
parcelHelpers.exportAll(_indexJs24, exports);
var _indexJs25 = require("./tab-panel/index.js");
parcelHelpers.exportAll(_indexJs25, exports);
var _indexJs26 = require("./text/index.js");
parcelHelpers.exportAll(_indexJs26, exports);
var _indexJs27 = require("./text-input/index.js");
parcelHelpers.exportAll(_indexJs27, exports);
var _indexJs28 = require("./toggle-button/index.js");
parcelHelpers.exportAll(_indexJs28, exports);
var _fluentDesignSystemJs = require("./fluent-design-system.js");
parcelHelpers.exportAll(_fluentDesignSystemJs, exports);
var _indexJs29 = require("./theme/index.js");
parcelHelpers.exportAll(_indexJs29, exports);

},{"./accordion/index.js":false,"./accordion-item/index.js":false,"./anchor-button/index.js":false,"./avatar/index.js":false,"./badge/index.js":false,"./button/index.js":"2w35N","./checkbox/index.js":false,"./compound-button/index.js":false,"./counter-badge/index.js":false,"./dialog/index.js":false,"./divider/index.js":false,"./image/index.js":false,"./label/index.js":false,"./menu/index.js":false,"./menu-button/index.js":false,"./menu-item/index.js":false,"./menu-list/index.js":false,"./progress-bar/index.js":false,"./radio/index.js":false,"./radio-group/index.js":false,"./slider/index.js":false,"./spinner/index.js":false,"./switch/index.js":false,"./tabs/index.js":false,"./tab/index.js":false,"./tab-panel/index.js":false,"./text/index.js":false,"./text-input/index.js":"3n9nB","./toggle-button/index.js":false,"./fluent-design-system.js":false,"./theme/index.js":"g4AJN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2w35N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonTemplate", ()=>(0, _buttonTemplateJs.template));
parcelHelpers.export(exports, "ButtonStyles", ()=>(0, _buttonStylesJs.styles));
parcelHelpers.export(exports, "ButtonDefinition", ()=>(0, _buttonDefinitionJs.definition));
var _buttonJs = require("./button.js");
parcelHelpers.exportAll(_buttonJs, exports);
var _buttonOptionsJs = require("./button.options.js");
parcelHelpers.exportAll(_buttonOptionsJs, exports);
var _buttonTemplateJs = require("./button.template.js");
var _buttonStylesJs = require("./button.styles.js");
var _buttonDefinitionJs = require("./button.definition.js");

},{"./button.js":false,"./button.options.js":false,"./button.template.js":false,"./button.styles.js":false,"./button.definition.js":"hRc7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f40CA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The base class used for constructing a fluent-button custom element
 * @public
 */ parcelHelpers.export(exports, "Button", ()=>Button);
var _fastElement = require("@microsoft/fast-element");
var _buttonJs = require("@microsoft/fast-foundation/button.js");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Button extends (0, _buttonJs.FASTButton) {
    constructor(){
        super(...arguments);
        /**
         * The button has an icon only, no text content
         *
         * @public
         * @remarks
         * HTML Attribute: icon-only
         */ this.iconOnly = false;
        /**
         * The button is disabled but focusable
         *
         * @public
         * @remarks
         * HTML Attribute: disabled-focusable
         */ this.disabledFocusable = false;
        /**
         * Prevents disabledFocusable click events
         */ this.handleDisabledFocusableClick = (e)=>{
            if (e && this.disabledFocusable) {
                e.stopImmediatePropagation();
                return;
            }
        };
    }
    disabledFocusableChanged(prev, next) {
        if (!this.$fastController.isConnected) return;
        if (this.disabledFocusable) this.setAttribute("aria-disabled", "true");
        else this.removeAttribute("aria-disabled");
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.handleDisabledFocusableClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleDisabledFocusableClick);
    }
}
__decorate([
    (0, _fastElement.attr)
], Button.prototype, "appearance", void 0);
__decorate([
    (0, _fastElement.attr)
], Button.prototype, "shape", void 0);
__decorate([
    (0, _fastElement.attr)
], Button.prototype, "size", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: "icon-only",
        mode: "boolean"
    })
], Button.prototype, "iconOnly", void 0);
__decorate([
    (0, _fastElement.attr)({
        attribute: "disabled-focusable",
        mode: "boolean"
    })
], Button.prototype, "disabledFocusable", void 0);

},{"@microsoft/fast-element":"j6ee6","@microsoft/fast-foundation/button.js":"9e4wt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9e4wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DelegatesARIAButton", ()=>(0, _buttonJs.DelegatesARIAButton));
parcelHelpers.export(exports, "FASTButton", ()=>(0, _buttonJs.FASTButton));
parcelHelpers.export(exports, "ButtonType", ()=>(0, _buttonOptionsJs.ButtonType));
parcelHelpers.export(exports, "buttonTemplate", ()=>(0, _buttonTemplateJs.buttonTemplate));
var _buttonJs = require("./button.js");
var _buttonOptionsJs = require("./button.options.js");
var _buttonTemplateJs = require("./button.template.js");

},{"./button.js":"eLuJS","./button.options.js":false,"./button.template.js":"ibh8U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLuJS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A Button Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element }.
 *
 * @slot start - Content which can be provided before the button content
 * @slot end - Content which can be provided after the button content
 * @slot - The default slot for button content
 * @csspart control - The button element
 * @csspart content - The element wrapping button content
 *
 * @public
 */ parcelHelpers.export(exports, "FASTButton", ()=>FASTButton);
/**
 * Includes ARIA states and properties relating to the ARIA button role
 *
 * @public
 */ parcelHelpers.export(exports, "DelegatesARIAButton", ()=>DelegatesARIAButton);
var _tslib = require("tslib");
var _fastElement = require("@microsoft/fast-element");
var _indexJs = require("../patterns/index.js");
var _applyMixinsJs = require("../utilities/apply-mixins.js");
var _buttonFormAssociatedJs = require("./button.form-associated.js");
var _buttonOptionsJs = require("./button.options.js");
class FASTButton extends (0, _buttonFormAssociatedJs.FormAssociatedButton) {
    constructor(){
        super(...arguments);
        /**
         * Submits the parent form
         */ this.handleSubmission = ()=>{
            if (!this.form) return;
            const attached = this.proxy.isConnected;
            if (!attached) this.attachProxy();
            // Browser support for requestSubmit is not comprehensive
            // so click the proxy if it isn't supported
            typeof this.form.requestSubmit === "function" ? this.form.requestSubmit(this.proxy) : this.proxy.click();
            if (!attached) this.detachProxy();
        };
        /**
         * Resets the parent form
         */ this.handleFormReset = ()=>{
            var _a;
            (_a = this.form) === null || _a === void 0 || _a.reset();
        };
    }
    formactionChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.formAction = this.formaction;
    }
    formenctypeChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.formEnctype = this.formenctype;
    }
    formmethodChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.formMethod = this.formmethod;
    }
    formnovalidateChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.formNoValidate = this.formnovalidate;
    }
    formtargetChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.formTarget = this.formtarget;
    }
    typeChanged(previous, next) {
        if (this.proxy instanceof HTMLInputElement) this.proxy.type = this.type;
        next === (0, _buttonOptionsJs.ButtonType).submit && this.addEventListener("click", this.handleSubmission);
        previous === (0, _buttonOptionsJs.ButtonType).submit && this.removeEventListener("click", this.handleSubmission);
        next === (0, _buttonOptionsJs.ButtonType).reset && this.addEventListener("click", this.handleFormReset);
        previous === (0, _buttonOptionsJs.ButtonType).reset && this.removeEventListener("click", this.handleFormReset);
    }
    /** {@inheritDoc (FormAssociated:interface).validate} */ validate() {
        super.validate(this.control);
    }
    /**
     * @internal
     */ connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
    }
}
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], FASTButton.prototype, "autofocus", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "form"
    })
], FASTButton.prototype, "formId", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTButton.prototype, "formaction", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTButton.prototype, "formenctype", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTButton.prototype, "formmethod", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], FASTButton.prototype, "formnovalidate", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTButton.prototype, "formtarget", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTButton.prototype, "type", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.observable)
], FASTButton.prototype, "defaultSlottedContent", void 0);
class DelegatesARIAButton {
}
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-expanded"
    })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-pressed"
    })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
(0, _applyMixinsJs.applyMixins)(DelegatesARIAButton, (0, _indexJs.ARIAGlobalStatesAndProperties));
(0, _applyMixinsJs.applyMixins)(FASTButton, (0, _indexJs.StartEnd), DelegatesARIAButton);

},{"tslib":"8wyHd","@microsoft/fast-element":"j6ee6","../patterns/index.js":"1S92S","../utilities/apply-mixins.js":"dll7D","./button.form-associated.js":"2PD3c","./button.options.js":"8tXHT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wyHd":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1S92S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tagFor", ()=>(0, _tagForJs.tagFor));
parcelHelpers.export(exports, "ARIAGlobalStatesAndProperties", ()=>(0, _ariaGlobalJs.ARIAGlobalStatesAndProperties));
parcelHelpers.export(exports, "endSlotTemplate", ()=>(0, _startEndJs.endSlotTemplate));
parcelHelpers.export(exports, "StartEnd", ()=>(0, _startEndJs.StartEnd));
parcelHelpers.export(exports, "startSlotTemplate", ()=>(0, _startEndJs.startSlotTemplate));
var _tagForJs = require("./tag-for.js");
var _ariaGlobalJs = require("./aria-global.js");
var _startEndJs = require("./start-end.js");

},{"./tag-for.js":false,"./aria-global.js":"5uXWm","./start-end.js":"eCfQZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uXWm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Some states and properties are applicable to all host language elements regardless of whether a role is applied.
 * The following global states and properties are supported by all roles and by all base markup elements.
 * {@link https://www.w3.org/TR/wai-aria-1.1/#global_states}
 *
 * This is intended to be used as a mixin. Be sure you extend FASTElement.
 *
 * @public
 */ parcelHelpers.export(exports, "ARIAGlobalStatesAndProperties", ()=>ARIAGlobalStatesAndProperties);
var _tslib = require("tslib");
var _fastElement = require("@microsoft/fast-element");
class ARIAGlobalStatesAndProperties {
}
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-atomic"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-busy"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-controls"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-current"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-describedby"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-details"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-disabled"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-errormessage"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-flowto"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-haspopup"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-hidden"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-invalid"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-keyshortcuts"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-label"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-labelledby"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-live"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-owns"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-relevant"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "aria-roledescription"
    })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);

},{"tslib":"8wyHd","@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eCfQZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A mixin class implementing start and end slots.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */ parcelHelpers.export(exports, "StartEnd", ()=>StartEnd);
/**
 * The template for the end slot.
 * For use with {@link StartEnd}
 *
 * @public
 */ parcelHelpers.export(exports, "endSlotTemplate", ()=>endSlotTemplate);
/**
 * The template for the start slots.
 * For use with {@link StartEnd}
 *
 * @public
 */ parcelHelpers.export(exports, "startSlotTemplate", ()=>startSlotTemplate);
var _fastElement = require("@microsoft/fast-element");
var _templateHelpersJs = require("../utilities/template-helpers.js");
class StartEnd {
}
function endSlotTemplate(options) {
    return (0, _fastElement.html)`
        <slot name="end" ${(0, _fastElement.ref)("end")}>${(0, _templateHelpersJs.staticallyCompose)(options.end)}</slot>
    `.inline();
}
function startSlotTemplate(options) {
    return (0, _fastElement.html)`
        <slot name="start" ${(0, _fastElement.ref)("start")}>${(0, _templateHelpersJs.staticallyCompose)(options.start)}</slot>
    `.inline();
}

},{"@microsoft/fast-element":"j6ee6","../utilities/template-helpers.js":"6XIcn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XIcn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A function to compose template options.
 * @public
 */ parcelHelpers.export(exports, "staticallyCompose", ()=>staticallyCompose);
var _fastElement = require("@microsoft/fast-element");
function staticallyCompose(item) {
    if (!item) return (0, _fastElement.InlineTemplateDirective).empty;
    if (typeof item === "string") return new (0, _fastElement.InlineTemplateDirective)(item);
    if ("inline" in item) return item.inline();
    return item;
}

},{"@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dll7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Apply mixins to a constructor.
 * Sourced from {@link https://www.typescriptlang.org/docs/handbook/mixins.html | TypeScript Documentation }.
 * @internal
 */ parcelHelpers.export(exports, "applyMixins", ()=>applyMixins);
var _fastElement = require("@microsoft/fast-element");
function applyMixins(derivedCtor, ...baseCtors) {
    const derivedAttributes = (0, _fastElement.AttributeConfiguration).locate(derivedCtor);
    baseCtors.forEach((baseCtor)=>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name)=>{
            if (name !== "constructor") Object.defineProperty(derivedCtor.prototype, name, /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */ Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
        const baseAttributes = (0, _fastElement.AttributeConfiguration).locate(baseCtor);
        baseAttributes.forEach((x)=>derivedAttributes.push(x));
    });
}

},{"@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PD3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(FASTButton:class)} component.
 *
 * @beta
 */ parcelHelpers.export(exports, "FormAssociatedButton", ()=>FormAssociatedButton);
var _fastElement = require("@microsoft/fast-element");
var _formAssociatedJs = require("../form-associated/form-associated.js");
class _Button extends (0, _fastElement.FASTElement) {
}
class FormAssociatedButton extends (0, _formAssociatedJs.FormAssociated)(_Button) {
    constructor(){
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}

},{"@microsoft/fast-element":"j6ee6","../form-associated/form-associated.js":"lgJjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgJjF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsElementInternals", ()=>supportsElementInternals);
/**
 * Base function for providing Custom Element Form Association.
 *
 * @beta
 */ parcelHelpers.export(exports, "FormAssociated", ()=>FormAssociated);
/**
 * Creates a checkable form associated component.
 * @beta
 */ parcelHelpers.export(exports, "CheckableFormAssociated", ()=>CheckableFormAssociated);
var _fastElement = require("@microsoft/fast-element");
var _fastWebUtilities = require("@microsoft/fast-web-utilities");
const proxySlotName = "form-associated-proxy";
const ElementInternalsKey = "ElementInternals";
const supportsElementInternals = ElementInternalsKey in window && "setFormValue" in window[ElementInternalsKey].prototype;
const InternalsMap = new WeakMap();
function FormAssociated(BaseCtor) {
    const C = class extends BaseCtor {
        constructor(...args){
            super(...args);
            /**
             * Track whether the value has been changed from the initial value
             */ this.dirtyValue = false;
            /**
             * Sets the element's disabled state. A disabled element will not be included during form submission.
             *
             * @remarks
             * HTML Attribute: disabled
             */ this.disabled = false;
            /**
             * These are events that are still fired by the proxy
             * element based on user / programmatic interaction.
             *
             * The proxy implementation should be transparent to
             * the app author, so block these events from emitting.
             */ this.proxyEventsToBlock = [
                "change",
                "click"
            ];
            this.proxyInitialized = false;
            this.required = false;
            this.initialValue = this.initialValue || "";
            if (!this.elementInternals) // When elementInternals is not supported, formResetCallback is
            // bound to an event listener, so ensure the handler's `this`
            // context is correct.
            this.formResetCallback = this.formResetCallback.bind(this);
        }
        /**
         * Must evaluate to true to enable elementInternals.
         * Feature detects API support and resolve respectively
         *
         * @internal
         */ static get formAssociated() {
            return supportsElementInternals;
        }
        /**
         * Returns the validity state of the element
         *
         * @beta
         */ get validity() {
            return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
        }
        /**
         * Retrieve a reference to the associated form.
         * Returns null if not associated to any form.
         *
         * @beta
         */ get form() {
            return this.elementInternals ? this.elementInternals.form : this.proxy.form;
        }
        /**
         * Retrieve the localized validation message,
         * or custom validation message if set.
         *
         * @beta
         */ get validationMessage() {
            return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
        }
        /**
         * Whether the element will be validated when the
         * form is submitted
         */ get willValidate() {
            return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
        }
        /**
         * A reference to all associated label elements
         */ get labels() {
            if (this.elementInternals) return Object.freeze(Array.from(this.elementInternals.labels));
            else if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
                // Labels associated by wrapping the element: <label><custom-element></custom-element></label>
                const parentLabels = this.proxy.labels;
                // Labels associated using the `for` attribute
                const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
                const labels = parentLabels ? forLabels.concat(Array.from(parentLabels)) : forLabels;
                return Object.freeze(labels);
            } else return 0, _fastElement.emptyArray;
        }
        /**
         * Invoked when the `value` property changes
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `valueChanged` method
         * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */ valueChanged(previous, next) {
            this.dirtyValue = true;
            if (this.proxy instanceof HTMLElement) this.proxy.value = this.value;
            this.currentValue = this.value;
            this.setFormValue(this.value);
            this.validate();
        }
        currentValueChanged() {
            this.value = this.currentValue;
        }
        /**
         * Invoked when the `initialValue` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `initialValueChanged` method
         * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */ initialValueChanged(previous, next) {
            // If the value is clean and the component is connected to the DOM
            // then set value equal to the attribute value.
            if (!this.dirtyValue) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
        }
        /**
         * Invoked when the `disabled` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `disabledChanged` method
         * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */ disabledChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) this.proxy.disabled = this.disabled;
            (0, _fastElement.Updates).enqueue(()=>this.classList.toggle("disabled", this.disabled));
        }
        /**
         * Invoked when the `name` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `nameChanged` method
         * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */ nameChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) this.proxy.name = this.name;
        }
        /**
         * Invoked when the `required` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `requiredChanged` method
         * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */ requiredChanged(prev, next) {
            if (this.proxy instanceof HTMLElement) this.proxy.required = this.required;
            (0, _fastElement.Updates).enqueue(()=>this.classList.toggle("required", this.required));
            this.validate();
        }
        /**
         * The element internals object. Will only exist
         * in browsers supporting the attachInternals API
         */ get elementInternals() {
            if (!supportsElementInternals) return null;
            let internals = InternalsMap.get(this);
            if (!internals) {
                internals = this.attachInternals();
                InternalsMap.set(this, internals);
            }
            return internals;
        }
        /**
         * @internal
         */ connectedCallback() {
            super.connectedCallback();
            this.addEventListener("keypress", this._keypressHandler);
            if (!this.value) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
            if (!this.elementInternals) {
                this.attachProxy();
                if (this.form) this.form.addEventListener("reset", this.formResetCallback);
            }
        }
        /**
         * @internal
         */ disconnectedCallback() {
            this.proxyEventsToBlock.forEach((name)=>this.proxy.removeEventListener(name, this.stopPropagation));
            if (!this.elementInternals && this.form) this.form.removeEventListener("reset", this.formResetCallback);
        }
        /**
         * Return the current validity of the element.
         */ checkValidity() {
            return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
        }
        /**
         * Return the current validity of the element.
         * If false, fires an invalid event at the element.
         */ reportValidity() {
            return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
        }
        /**
         * Set the validity of the control. In cases when the elementInternals object is not
         * available (and the proxy element is used to report validity), this function will
         * do nothing unless a message is provided, at which point the setCustomValidity method
         * of the proxy element will be invoked with the provided message.
         * @param flags - Validity flags
         * @param message - Optional message to supply
         * @param anchor - Optional element used by UA to display an interactive validation UI
         */ setValidity(flags, message, anchor) {
            if (this.elementInternals) this.elementInternals.setValidity(flags, message, anchor);
            else if (typeof message === "string") this.proxy.setCustomValidity(message);
        }
        /**
         * Invoked when a connected component's form or fieldset has its disabled
         * state changed.
         * @param disabled - the disabled value of the form / fieldset
         */ formDisabledCallback(disabled) {
            this.disabled = disabled;
        }
        formResetCallback() {
            this.value = this.initialValue;
            this.dirtyValue = false;
        }
        /**
         * Attach the proxy element to the DOM
         */ attachProxy() {
            var _a;
            if (!this.proxyInitialized) {
                this.proxyInitialized = true;
                this.proxy.style.display = "none";
                this.proxyEventsToBlock.forEach((name)=>this.proxy.addEventListener(name, this.stopPropagation));
                // These are typically mapped to the proxy during
                // property change callbacks, but during initialization
                // on the initial call of the callback, the proxy is
                // still undefined. We should find a better way to address this.
                this.proxy.disabled = this.disabled;
                this.proxy.required = this.required;
                if (typeof this.name === "string") this.proxy.name = this.name;
                if (typeof this.value === "string") this.proxy.value = this.value;
                this.proxy.setAttribute("slot", proxySlotName);
                this.proxySlot = document.createElement("slot");
                this.proxySlot.setAttribute("name", proxySlotName);
            }
            (_a = this.shadowRoot) === null || _a === void 0 || _a.appendChild(this.proxySlot);
            this.appendChild(this.proxy);
        }
        /**
         * Detach the proxy element from the DOM
         */ detachProxy() {
            var _a;
            this.removeChild(this.proxy);
            (_a = this.shadowRoot) === null || _a === void 0 || _a.removeChild(this.proxySlot);
        }
        /** {@inheritDoc (FormAssociated:interface).validate} */ validate(anchor) {
            if (this.proxy instanceof HTMLElement) this.setValidity(this.proxy.validity, this.proxy.validationMessage, anchor);
        }
        /**
         * Associates the provided value (and optional state) with the parent form.
         * @param value - The value to set
         * @param state - The state object provided to during session restores and when autofilling.
         */ setFormValue(value, state) {
            if (this.elementInternals) this.elementInternals.setFormValue(value, state || value);
        }
        _keypressHandler(e) {
            switch(e.key){
                case 0, _fastWebUtilities.keyEnter:
                    if (this.form instanceof HTMLFormElement) {
                        // Implicit submission
                        const defaultButton = this.form.querySelector("[type=submit]");
                        defaultButton === null || defaultButton === void 0 || defaultButton.click();
                    }
                    break;
            }
        }
        /**
         * Used to stop propagation of proxy element events
         * @param e - Event object
         */ stopPropagation(e) {
            e.stopPropagation();
        }
    };
    (0, _fastElement.attr)({
        mode: "boolean"
    })(C.prototype, "disabled");
    (0, _fastElement.attr)({
        mode: "fromView",
        attribute: "value"
    })(C.prototype, "initialValue");
    (0, _fastElement.attr)({
        attribute: "current-value"
    })(C.prototype, "currentValue");
    (0, _fastElement.attr)(C.prototype, "name");
    (0, _fastElement.attr)({
        mode: "boolean"
    })(C.prototype, "required");
    (0, _fastElement.observable)(C.prototype, "value");
    return C;
}
function CheckableFormAssociated(BaseCtor) {
    class C extends FormAssociated(BaseCtor) {
    }
    class D extends C {
        constructor(...args){
            super(args);
            /**
             * Tracks whether the "checked" property has been changed.
             * This is necessary to provide consistent behavior with
             * normal input checkboxes
             */ this.dirtyChecked = false;
            /**
             * Provides the default checkedness of the input element
             * Passed down to proxy
             *
             * @public
             * @remarks
             * HTML Attribute: checked
             */ this.checkedAttribute = false;
            /**
             * The checked state of the control.
             *
             * @public
             */ this.checked = false;
            // Re-initialize dirtyChecked because initialization of other values
            // causes it to become true
            this.dirtyChecked = false;
        }
        checkedAttributeChanged() {
            this.defaultChecked = this.checkedAttribute;
        }
        /**
         * @internal
         */ defaultCheckedChanged() {
            if (!this.dirtyChecked) {
                // Setting this.checked will cause us to enter a dirty state,
                // but if we are clean when defaultChecked is changed, we want to stay
                // in a clean state, so reset this.dirtyChecked
                this.checked = this.defaultChecked;
                this.dirtyChecked = false;
            }
        }
        checkedChanged(prev, next) {
            if (!this.dirtyChecked) this.dirtyChecked = true;
            this.currentChecked = this.checked;
            this.updateForm();
            if (this.proxy instanceof HTMLInputElement) this.proxy.checked = this.checked;
            if (prev !== undefined) this.$emit("change");
            this.validate();
        }
        currentCheckedChanged(prev, next) {
            this.checked = this.currentChecked;
        }
        updateForm() {
            const value = this.checked ? this.value : null;
            this.setFormValue(value, value);
        }
        connectedCallback() {
            super.connectedCallback();
            this.updateForm();
        }
        formResetCallback() {
            super.formResetCallback();
            this.checked = !!this.checkedAttribute;
            this.dirtyChecked = false;
        }
    }
    (0, _fastElement.attr)({
        attribute: "checked",
        mode: "boolean"
    })(D.prototype, "checkedAttribute");
    (0, _fastElement.attr)({
        attribute: "current-checked",
        converter: (0, _fastElement.booleanConverter)
    })(D.prototype, "currentChecked");
    (0, _fastElement.observable)(D.prototype, "defaultChecked");
    (0, _fastElement.observable)(D.prototype, "checked");
    return D;
}

},{"@microsoft/fast-element":"j6ee6","@microsoft/fast-web-utilities":"4nlaV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nlaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ariaJs = require("./aria.js");
parcelHelpers.exportAll(_ariaJs, exports);
var _arrayJs = require("./array.js");
parcelHelpers.exportAll(_arrayJs, exports);
var _classNamesJs = require("./class-names.js");
parcelHelpers.exportAll(_classNamesJs, exports);
var _domJs = require("./dom.js");
parcelHelpers.exportAll(_domJs, exports);
var _eventsJs = require("./events.js");
parcelHelpers.exportAll(_eventsJs, exports);
var _htmlJs = require("./html.js");
parcelHelpers.exportAll(_htmlJs, exports);
var _keyCodesJs = require("./key-codes.js");
parcelHelpers.exportAll(_keyCodesJs, exports);
var _localizationJs = require("./localization.js");
parcelHelpers.exportAll(_localizationJs, exports);
var _numbersJs = require("./numbers.js");
parcelHelpers.exportAll(_numbersJs, exports);
var _stringsJs = require("./strings.js");
parcelHelpers.exportAll(_stringsJs, exports);
var _queryJs = require("./query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _rtlScrollConverterJs = require("./rtl-scroll-converter.js");
parcelHelpers.exportAll(_rtlScrollConverterJs, exports);
var _systemColorsJs = require("./system-colors.js");
parcelHelpers.exportAll(_systemColorsJs, exports);

},{"./aria.js":false,"./array.js":false,"./class-names.js":false,"./dom.js":false,"./events.js":false,"./html.js":false,"./key-codes.js":"3nNAB","./localization.js":false,"./numbers.js":false,"./strings.js":false,"./query.js":false,"./rtl-scroll-converter.js":false,"./system-colors.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nNAB":[function(require,module,exports) {
/**
 * String values for use with KeyboardEvent.key
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyAlt", ()=>keyAlt);
parcelHelpers.export(exports, "keyAltGraph", ()=>keyAltGraph);
parcelHelpers.export(exports, "keyCapsLock", ()=>keyCapsLock);
parcelHelpers.export(exports, "keyControl", ()=>keyControl);
parcelHelpers.export(exports, "keyArrowDown", ()=>keyArrowDown);
parcelHelpers.export(exports, "keyArrowLeft", ()=>keyArrowLeft);
parcelHelpers.export(exports, "keyArrowRight", ()=>keyArrowRight);
parcelHelpers.export(exports, "keyArrowUp", ()=>keyArrowUp);
parcelHelpers.export(exports, "keyBackspace", ()=>keyBackspace);
parcelHelpers.export(exports, "keyDelete", ()=>keyDelete);
parcelHelpers.export(exports, "keyEnd", ()=>keyEnd);
parcelHelpers.export(exports, "keyEnter", ()=>keyEnter);
parcelHelpers.export(exports, "keyEscape", ()=>keyEscape);
parcelHelpers.export(exports, "keyHome", ()=>keyHome);
parcelHelpers.export(exports, "keyFunction", ()=>keyFunction);
parcelHelpers.export(exports, "keyFunctionLock", ()=>keyFunctionLock);
parcelHelpers.export(exports, "keyFunction2", ()=>keyFunction2);
parcelHelpers.export(exports, "keyFunction3", ()=>keyFunction3);
parcelHelpers.export(exports, "keyFunction4", ()=>keyFunction4);
parcelHelpers.export(exports, "keyFunction5", ()=>keyFunction5);
parcelHelpers.export(exports, "keyFunction6", ()=>keyFunction6);
parcelHelpers.export(exports, "keyFunction7", ()=>keyFunction7);
parcelHelpers.export(exports, "keyFunction8", ()=>keyFunction8);
parcelHelpers.export(exports, "keyFunction9", ()=>keyFunction9);
parcelHelpers.export(exports, "keyFunction10", ()=>keyFunction10);
parcelHelpers.export(exports, "keyFunction11", ()=>keyFunction11);
parcelHelpers.export(exports, "keyFunction12", ()=>keyFunction12);
parcelHelpers.export(exports, "keyFunction13", ()=>keyFunction13);
parcelHelpers.export(exports, "keyFunction14", ()=>keyFunction14);
parcelHelpers.export(exports, "keyFunction15", ()=>keyFunction15);
parcelHelpers.export(exports, "keyNumLock", ()=>keyNumLock);
parcelHelpers.export(exports, "keyPageDown", ()=>keyPageDown);
parcelHelpers.export(exports, "keyPageUp", ()=>keyPageUp);
parcelHelpers.export(exports, "keyScrollLock", ()=>keyScrollLock);
parcelHelpers.export(exports, "keyShift", ()=>keyShift);
parcelHelpers.export(exports, "keySpace", ()=>keySpace);
parcelHelpers.export(exports, "keyTab", ()=>keyTab);
parcelHelpers.export(exports, "ArrowKeys", ()=>ArrowKeys);
const keyAlt = "Alt";
const keyAltGraph = "AltGraph";
const keyCapsLock = "CapsLock";
const keyControl = "Control";
const keyArrowDown = "ArrowDown";
const keyArrowLeft = "ArrowLeft";
const keyArrowRight = "ArrowRight";
const keyArrowUp = "ArrowUp";
const keyBackspace = "Backspace";
const keyDelete = "Delete";
const keyEnd = "End";
const keyEnter = "Enter";
const keyEscape = "Escape";
const keyHome = "Home";
const keyFunction = "Fn";
const keyFunctionLock = "FnLock";
const keyFunction2 = "F2";
const keyFunction3 = "F3";
const keyFunction4 = "F4";
const keyFunction5 = "F5";
const keyFunction6 = "F6";
const keyFunction7 = "F7";
const keyFunction8 = "F8";
const keyFunction9 = "F9";
const keyFunction10 = "F10";
const keyFunction11 = "F11";
const keyFunction12 = "F12";
const keyFunction13 = "F13";
const keyFunction14 = "F14";
const keyFunction15 = "F15";
const keyNumLock = "NumLock";
const keyPageDown = "PageDown";
const keyPageUp = "PageUp";
const keyScrollLock = "ScrollLock";
const keyShift = "Shift";
const keySpace = " ";
const keyTab = "Tab";
const ArrowKeys = {
    ArrowDown: keyArrowDown,
    ArrowLeft: keyArrowLeft,
    ArrowRight: keyArrowRight,
    ArrowUp: keyArrowUp
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tXHT":[function(require,module,exports) {
/**
 * Button type values.
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonType", ()=>ButtonType);
const ButtonType = {
    submit: "submit",
    reset: "reset",
    button: "button"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibh8U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The template for the {@link @microsoft/fast-foundation#(FASTButton:class)} component.
 * @public
 */ parcelHelpers.export(exports, "buttonTemplate", ()=>buttonTemplate);
var _fastElement = require("@microsoft/fast-element");
var _indexJs = require("../patterns/index.js");
function buttonTemplate(options = {}) {
    return (0, _fastElement.html)`
        <button
            class="control"
            part="control"
            ?autofocus="${(x)=>x.autofocus}"
            ?disabled="${(x)=>x.disabled}"
            form="${(x)=>x.formId}"
            formaction="${(x)=>x.formaction}"
            formenctype="${(x)=>x.formenctype}"
            formmethod="${(x)=>x.formmethod}"
            ?formnovalidate="${(x)=>x.formnovalidate}"
            formtarget="${(x)=>x.formtarget}"
            name="${(x)=>x.name}"
            type="${(x)=>x.type}"
            value="${(x)=>x.value}"
            aria-atomic="${(x)=>x.ariaAtomic}"
            aria-busy="${(x)=>x.ariaBusy}"
            aria-controls="${(x)=>x.ariaControls}"
            aria-current="${(x)=>x.ariaCurrent}"
            aria-describedby="${(x)=>x.ariaDescribedby}"
            aria-details="${(x)=>x.ariaDetails}"
            aria-disabled="${(x)=>x.ariaDisabled}"
            aria-errormessage="${(x)=>x.ariaErrormessage}"
            aria-expanded="${(x)=>x.ariaExpanded}"
            aria-flowto="${(x)=>x.ariaFlowto}"
            aria-haspopup="${(x)=>x.ariaHaspopup}"
            aria-hidden="${(x)=>x.ariaHidden}"
            aria-invalid="${(x)=>x.ariaInvalid}"
            aria-keyshortcuts="${(x)=>x.ariaKeyshortcuts}"
            aria-label="${(x)=>x.ariaLabel}"
            aria-labelledby="${(x)=>x.ariaLabelledby}"
            aria-live="${(x)=>x.ariaLive}"
            aria-owns="${(x)=>x.ariaOwns}"
            aria-pressed="${(x)=>x.ariaPressed}"
            aria-relevant="${(x)=>x.ariaRelevant}"
            aria-roledescription="${(x)=>x.ariaRoledescription}"
            ${(0, _fastElement.ref)("control")}
        >
            ${(0, _indexJs.startSlotTemplate)(options)}
            <span class="content" part="content">
                <slot ${(0, _fastElement.slotted)("defaultSlottedContent")}></slot>
            </span>
            ${(0, _indexJs.endSlotTemplate)(options)}
        </button>
    `;
}

},{"@microsoft/fast-element":"j6ee6","../patterns/index.js":"1S92S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hL4FG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "template", ()=>template);
var _buttonJs = require("@microsoft/fast-foundation/button.js");
const template = (0, _buttonJs.buttonTemplate)();

},{"@microsoft/fast-foundation/button.js":"9e4wt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbSmC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styles", ()=>styles);
var _fastElement = require("@microsoft/fast-element");
var _utilitiesJs = require("@microsoft/fast-foundation/utilities.js");
var _designTokensJs = require("../theme/design-tokens.js");
const styles = (0, _fastElement.css)`
  ${(0, _utilitiesJs.display)("inline-flex")}

  :host {
    --icon-spacing: ${0, _designTokensJs.spacingHorizontalSNudge};
    contain: layout style;
    vertical-align: middle;
  }

  :host .control {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${0, _designTokensJs.colorNeutralBackground1};
    color: ${0, _designTokensJs.colorNeutralForeground1};
    border: ${0, _designTokensJs.strokeWidthThin} solid ${0, _designTokensJs.colorNeutralStroke1};
    padding: 0 ${0, _designTokensJs.spacingHorizontalM};
    min-width: 96px;
    border-radius: ${0, _designTokensJs.borderRadiusMedium};
    font-size: ${0, _designTokensJs.fontSizeBase300};
    font-family: ${0, _designTokensJs.fontFamilyBase};
    font-weight: ${0, _designTokensJs.fontWeightSemibold};
    line-height: ${0, _designTokensJs.lineHeightBase300};
    transition-duration: ${0, _designTokensJs.durationFaster};
    transition-property: background, border, color;
    transition-timing-function: ${0, _designTokensJs.curveEasyEase};
    cursor: pointer;
  }

  .content {
    display: inherit;
  }

  :host(:hover) .control {
    background-color: ${0, _designTokensJs.colorNeutralBackground1Hover};
    color: ${0, _designTokensJs.colorNeutralForeground1Hover};
    border-color: ${0, _designTokensJs.colorNeutralStroke1Hover};
  }

  :host(:hover:active) .control {
    background-color: ${0, _designTokensJs.colorNeutralBackground1Pressed};
    border-color: ${0, _designTokensJs.colorNeutralStroke1Pressed};
    color: ${0, _designTokensJs.colorNeutralForeground1Pressed};
    outline-style: none;
  }

  :host .control:focus-visible {
    border-color: ${0, _designTokensJs.colorTransparentStroke};
    outline: ${0, _designTokensJs.strokeWidthThick} solid ${0, _designTokensJs.colorTransparentStroke};
    box-shadow: ${0, _designTokensJs.shadow4}, 0 0 0 2px ${0, _designTokensJs.colorStrokeFocus2};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  [slot='start'],
  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  [slot='end'],
  ::slotted([slot='end']) {
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) .control {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${0, _designTokensJs.spacingHorizontalXS};
  }

  :host([size='small']) .control {
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${0, _designTokensJs.spacingHorizontalS};
    border-radius: ${0, _designTokensJs.borderRadiusSmall};
    font-size: ${0, _designTokensJs.fontSizeBase200};
    line-height: ${0, _designTokensJs.lineHeightBase200};
    font-weight: ${0, _designTokensJs.fontWeightRegular};
  }

  :host([size='small'][icon-only]) .control {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) .control {
    min-height: 40px;
    border-radius: ${0, _designTokensJs.borderRadiusLarge};
    padding: 0 ${0, _designTokensJs.spacingHorizontalL};
    font-size: ${0, _designTokensJs.fontSizeBase400};
    line-height: ${0, _designTokensJs.lineHeightBase400};
  }

  :host([size='large'][icon-only]) .control {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host([shape='circular']) .control,
  :host([shape='circular']) .control:focus-visible {
    border-radius: ${0, _designTokensJs.borderRadiusCircular};
  }

  :host([shape='square']) .control,
  :host([shape='square']) .control:focus-visible {
    border-radius: ${0, _designTokensJs.borderRadiusNone};
  }

  :host([appearance='primary']) .control {
    background-color: ${0, _designTokensJs.colorBrandBackground};
    color: ${0, _designTokensJs.colorNeutralForegroundOnBrand};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) .control {
    background-color: ${0, _designTokensJs.colorBrandBackgroundHover};
  }

  :host([appearance='primary']:hover) .control,
  :host([appearance='primary']:hover:active) .control {
    border-color: transparent;
    color: ${0, _designTokensJs.colorNeutralForegroundOnBrand};
  }

  :host([appearance='primary']:hover:active) .control {
    background-color: ${0, _designTokensJs.colorBrandBackgroundPressed};
  }

  :host([appearance='primary']) .control:focus-visible {
    border-color: ${0, _designTokensJs.colorNeutralForegroundOnBrand};
    box-shadow: ${0, _designTokensJs.shadow2}, 0 0 0 2px ${0, _designTokensJs.colorStrokeFocus2};
  }

  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"])) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover:active) .control {
    border-color: transparent;
  }

  :host([appearance='outline']) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackground};
  }

  :host([appearance='outline']:hover) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackgroundHover};
  }

  :host([appearance='outline']:hover:active) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackgroundPressed};
  }

  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"])) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover:active) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackground};
  }

  :host([appearance='subtle']) .control {
    background-color: ${0, _designTokensJs.colorSubtleBackground};
    color: ${0, _designTokensJs.colorNeutralForeground2};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) .control {
    background-color: ${0, _designTokensJs.colorSubtleBackgroundHover};
    color: ${0, _designTokensJs.colorNeutralForeground2Hover};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) .control {
    background-color: ${0, _designTokensJs.colorSubtleBackgroundPressed};
    color: ${0, _designTokensJs.colorNeutralForeground2Pressed};
    border-color: transparent;
  }

  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"])) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover:active) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackground};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${0, _designTokensJs.colorNeutralForeground2BrandHover};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${0, _designTokensJs.colorNeutralForeground2BrandPressed};
  }

  :host([appearance='transparent']) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackground};
    color: ${0, _designTokensJs.colorNeutralForeground2};
  }

  :host([appearance='transparent']:hover) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackgroundHover};
    color: ${0, _designTokensJs.colorNeutralForeground2BrandHover};
  }

  :host([appearance='transparent']:hover:active) .control {
    background-color: ${0, _designTokensJs.colorTransparentBackgroundPressed};
    color: ${0, _designTokensJs.colorNeutralForeground2BrandPressed};
  }

  :host([appearance='transparent']) .control,
  :host([appearance='transparent']:hover) .control,
  :host([appearance='transparent']:hover:active) .control {
    border-color: transparent;
  }

  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"])) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover:active) .control {
    border-color: transparent;
    background-color: ${0, _designTokensJs.colorTransparentBackground};
  }

  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable])) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover:active)
    .control {
    background-color: ${0, _designTokensJs.colorNeutralBackgroundDisabled};
    border-color: ${0, _designTokensJs.colorNeutralStrokeDisabled};
    color: ${0, _designTokensJs.colorNeutralForegroundDisabled};
    cursor: not-allowed;
  }
`.withBehaviors((0, _utilitiesJs.forcedColorsStylesheetBehavior)((0, _fastElement.css)`
    :host([appearance='transparent']:hover) .control {
      border-color: Highlight;
    }
  `));

},{"@microsoft/fast-element":"j6ee6","@microsoft/fast-foundation/utilities.js":"9Ode1","../theme/design-tokens.js":"5zHiq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ode1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDirection", ()=>(0, _directionJs.getDirection));
parcelHelpers.export(exports, "darkModeStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.darkModeStylesheetBehavior));
parcelHelpers.export(exports, "lightModeStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.lightModeStylesheetBehavior));
parcelHelpers.export(exports, "forcedColorsStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.forcedColorsStylesheetBehavior));
parcelHelpers.export(exports, "MatchMediaBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.MatchMediaBehavior));
parcelHelpers.export(exports, "MatchMediaStyleSheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.MatchMediaStyleSheetBehavior));
parcelHelpers.export(exports, "PropertyStyleSheetBehavior", ()=>(0, _propertyStylesheetBehaviorJs.PropertyStyleSheetBehavior));
parcelHelpers.export(exports, "disabledCursor", ()=>(0, _indexJs.disabledCursor));
parcelHelpers.export(exports, "display", ()=>(0, _indexJs.display));
parcelHelpers.export(exports, "hidden", ()=>(0, _indexJs.hidden));
parcelHelpers.export(exports, "focusVisible", ()=>(0, _indexJs.focusVisible));
parcelHelpers.export(exports, "whitespaceFilter", ()=>(0, _whitespaceFilterJs.whitespaceFilter));
parcelHelpers.export(exports, "staticallyCompose", ()=>(0, _templateHelpersJs.staticallyCompose));
var _directionJs = require("./direction.js");
var _matchMediaStylesheetBehaviorJs = require("./match-media-stylesheet-behavior.js");
var _propertyStylesheetBehaviorJs = require("./property-stylesheet-behavior.js");
var _indexJs = require("./style/index.js");
var _typingsJs = require("./typings.js");
var _whitespaceFilterJs = require("./whitespace-filter.js");
var _templateHelpersJs = require("./template-helpers.js");

},{"./direction.js":false,"./match-media-stylesheet-behavior.js":"aJYwE","./property-stylesheet-behavior.js":false,"./style/index.js":"ezcaC","./typings.js":false,"./whitespace-filter.js":false,"./template-helpers.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJYwE":[function(require,module,exports) {
/**
 * An abstract behavior to react to media queries. Implementations should implement
 * the `constructListener` method to perform some action based on media query changes.
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MatchMediaBehavior", ()=>MatchMediaBehavior);
/**
 * A behavior to add or remove a stylesheet from an element based on a media query. The behavior ensures that
 * styles are applied while the a query matches the environment and that styles are not applied if the query does
 * not match the environment.
 *
 * @public
 */ parcelHelpers.export(exports, "MatchMediaStyleSheetBehavior", ()=>MatchMediaStyleSheetBehavior);
parcelHelpers.export(exports, "forcedColorsStylesheetBehavior", ()=>forcedColorsStylesheetBehavior);
parcelHelpers.export(exports, "darkModeStylesheetBehavior", ()=>darkModeStylesheetBehavior);
parcelHelpers.export(exports, "lightModeStylesheetBehavior", ()=>lightModeStylesheetBehavior);
class MatchMediaBehavior {
    /**
     *
     * @param query - The media query to operate from.
     */ constructor(query){
        /**
         * The behavior needs to operate on element instances but elements might share a behavior instance.
         * To ensure proper attachment / detachment per instance, we construct a listener for
         * each bind invocation and cache the listeners by element reference.
         */ this.listenerCache = new WeakMap();
        this.query = query;
    }
    /**
     * Binds the behavior to the element.
     * @param controller - The host controller orchestrating this behavior.
     */ connectedCallback(controller) {
        const { query } = this;
        let listener = this.listenerCache.get(controller);
        if (!listener) {
            listener = this.constructListener(controller);
            this.listenerCache.set(controller, listener);
        }
        // Invoke immediately to add if the query currently matches
        listener.bind(query)();
        query.addEventListener("change", listener);
    }
    /**
     * Unbinds the behavior from the element.
     * @param controller - The host controller orchestrating this behavior.
     */ disconnectedCallback(controller) {
        const listener = this.listenerCache.get(controller);
        if (listener) this.query.removeEventListener("change", listener);
    }
}
class MatchMediaStyleSheetBehavior extends MatchMediaBehavior {
    /**
     * Constructs a {@link MatchMediaStyleSheetBehavior} instance.
     * @param query - The media query to operate from.
     * @param styles - The styles to coordinate with the query.
     */ constructor(query, styles){
        super(query);
        this.styles = styles;
    }
    /**
     * Defines a function to construct {@link MatchMediaStyleSheetBehavior | MatchMediaStyleSheetBehaviors} for
     * a provided query.
     * @param query - The media query to operate from.
     *
     * @public
     * @example
     *
     * ```ts
     * import { css } from "@microsoft/fast-element";
     * import { MatchMediaStyleSheetBehavior } from "@microsoft/fast-foundation";
     *
     * const landscapeBehavior = MatchMediaStyleSheetBehavior.with(
     *   window.matchMedia("(orientation: landscape)")
     * );
     *
     * const styles = css`
     *   :host {
     *     width: 200px;
     *     height: 400px;
     *   }
     * `
     * .withBehaviors(landscapeBehavior(css`
     *   :host {
     *     width: 400px;
     *     height: 200px;
     *   }
     * `))
     * ```
     */ static with(query) {
        return (styles)=>{
            return new MatchMediaStyleSheetBehavior(query, styles);
        };
    }
    /**
     * Constructs a match-media listener for a provided element.
     * @param source - the element for which to attach or detach styles.
     */ constructListener(controller) {
        let attached = false;
        const styles = this.styles;
        return function listener() {
            const { matches } = this;
            if (matches && !attached) {
                controller.addStyles(styles);
                attached = matches;
            } else if (!matches && attached) {
                controller.removeStyles(styles);
                attached = matches;
            }
        };
    }
    /**
     * Unbinds the behavior from the element.
     * @param controller - The host controller orchestrating this behavior.
     * @internal
     */ removedCallback(controller) {
        controller.removeStyles(this.styles);
    }
}
const forcedColorsStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(forced-colors)"));
const darkModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: dark)"));
const lightModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: light)"));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezcaC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disabledCursor", ()=>(0, _disabledJs.disabledCursor));
parcelHelpers.export(exports, "display", ()=>(0, _displayJs.display));
parcelHelpers.export(exports, "hidden", ()=>(0, _displayJs.hidden));
parcelHelpers.export(exports, "focusVisible", ()=>(0, _focusJs.focusVisible));
var _disabledJs = require("./disabled.js");
var _displayJs = require("./display.js");
var _focusJs = require("./focus.js");

},{"./disabled.js":false,"./display.js":"73ejp","./focus.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73ejp":[function(require,module,exports) {
/**
 * A CSS fragment to set `display: none;` when the host is hidden using the [hidden] attribute.
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hidden", ()=>hidden);
/**
 * Applies a CSS display property.
 * Also adds CSS rules to not display the element when the [hidden] attribute is applied to the element.
 * @param display - The CSS display property value
 * @public
 */ parcelHelpers.export(exports, "display", ()=>display);
const hidden = `:host([hidden]){display:none}`;
function display(displayValue) {
    return `${hidden}:host{display:${displayValue}}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKJyo":[function(require,module,exports) {
/**
 * filters out any whitespace-only nodes, to be used inside a template.
 *
 * @param value - The Node that is being inspected
 * @param index - The index of the node within the array
 * @param array - The Node array that is being filtered
 * @returns true if the node is not a whitespace-only node, false otherwise
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "whitespaceFilter", ()=>whitespaceFilter);
const whitespaceFilter = (value)=>{
    var _a;
    return value.nodeType !== Node.TEXT_NODE || !!((_a = value.nodeValue) === null || _a === void 0 ? void 0 : _a.trim().length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zHiq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "borderRadiusNone", ()=>borderRadiusNone);
parcelHelpers.export(exports, "borderRadiusSmall", ()=>borderRadiusSmall);
parcelHelpers.export(exports, "borderRadiusMedium", ()=>borderRadiusMedium);
parcelHelpers.export(exports, "borderRadiusLarge", ()=>borderRadiusLarge);
parcelHelpers.export(exports, "borderRadiusXLarge", ()=>borderRadiusXLarge);
parcelHelpers.export(exports, "borderRadiusCircular", ()=>borderRadiusCircular);
parcelHelpers.export(exports, "fontSizeBase100", ()=>fontSizeBase100);
parcelHelpers.export(exports, "fontSizeBase200", ()=>fontSizeBase200);
parcelHelpers.export(exports, "fontSizeBase300", ()=>fontSizeBase300);
parcelHelpers.export(exports, "fontSizeBase400", ()=>fontSizeBase400);
parcelHelpers.export(exports, "fontSizeBase500", ()=>fontSizeBase500);
parcelHelpers.export(exports, "fontSizeBase600", ()=>fontSizeBase600);
parcelHelpers.export(exports, "fontSizeHero700", ()=>fontSizeHero700);
parcelHelpers.export(exports, "fontSizeHero800", ()=>fontSizeHero800);
parcelHelpers.export(exports, "fontSizeHero900", ()=>fontSizeHero900);
parcelHelpers.export(exports, "fontSizeHero1000", ()=>fontSizeHero1000);
parcelHelpers.export(exports, "lineHeightBase100", ()=>lineHeightBase100);
parcelHelpers.export(exports, "lineHeightBase200", ()=>lineHeightBase200);
parcelHelpers.export(exports, "lineHeightBase300", ()=>lineHeightBase300);
parcelHelpers.export(exports, "lineHeightBase400", ()=>lineHeightBase400);
parcelHelpers.export(exports, "lineHeightBase500", ()=>lineHeightBase500);
parcelHelpers.export(exports, "lineHeightBase600", ()=>lineHeightBase600);
parcelHelpers.export(exports, "lineHeightHero700", ()=>lineHeightHero700);
parcelHelpers.export(exports, "lineHeightHero800", ()=>lineHeightHero800);
parcelHelpers.export(exports, "lineHeightHero900", ()=>lineHeightHero900);
parcelHelpers.export(exports, "lineHeightHero1000", ()=>lineHeightHero1000);
parcelHelpers.export(exports, "fontFamilyBase", ()=>fontFamilyBase);
parcelHelpers.export(exports, "fontFamilyMonospace", ()=>fontFamilyMonospace);
parcelHelpers.export(exports, "fontFamilyNumeric", ()=>fontFamilyNumeric);
parcelHelpers.export(exports, "fontWeightRegular", ()=>fontWeightRegular);
parcelHelpers.export(exports, "fontWeightMedium", ()=>fontWeightMedium);
parcelHelpers.export(exports, "fontWeightSemibold", ()=>fontWeightSemibold);
parcelHelpers.export(exports, "fontWeightBold", ()=>fontWeightBold);
parcelHelpers.export(exports, "strokeWidthThin", ()=>strokeWidthThin);
parcelHelpers.export(exports, "strokeWidthThick", ()=>strokeWidthThick);
parcelHelpers.export(exports, "strokeWidthThicker", ()=>strokeWidthThicker);
parcelHelpers.export(exports, "strokeWidthThickest", ()=>strokeWidthThickest);
parcelHelpers.export(exports, "spacingHorizontalNone", ()=>spacingHorizontalNone);
parcelHelpers.export(exports, "spacingHorizontalXXS", ()=>spacingHorizontalXXS);
parcelHelpers.export(exports, "spacingHorizontalXS", ()=>spacingHorizontalXS);
parcelHelpers.export(exports, "spacingHorizontalSNudge", ()=>spacingHorizontalSNudge);
parcelHelpers.export(exports, "spacingHorizontalS", ()=>spacingHorizontalS);
parcelHelpers.export(exports, "spacingHorizontalMNudge", ()=>spacingHorizontalMNudge);
parcelHelpers.export(exports, "spacingHorizontalM", ()=>spacingHorizontalM);
parcelHelpers.export(exports, "spacingHorizontalL", ()=>spacingHorizontalL);
parcelHelpers.export(exports, "spacingHorizontalXL", ()=>spacingHorizontalXL);
parcelHelpers.export(exports, "spacingHorizontalXXL", ()=>spacingHorizontalXXL);
parcelHelpers.export(exports, "spacingHorizontalXXXL", ()=>spacingHorizontalXXXL);
parcelHelpers.export(exports, "spacingVerticalNone", ()=>spacingVerticalNone);
parcelHelpers.export(exports, "spacingVerticalXXS", ()=>spacingVerticalXXS);
parcelHelpers.export(exports, "spacingVerticalXS", ()=>spacingVerticalXS);
parcelHelpers.export(exports, "spacingVerticalSNudge", ()=>spacingVerticalSNudge);
parcelHelpers.export(exports, "spacingVerticalS", ()=>spacingVerticalS);
parcelHelpers.export(exports, "spacingVerticalMNudge", ()=>spacingVerticalMNudge);
parcelHelpers.export(exports, "spacingVerticalM", ()=>spacingVerticalM);
parcelHelpers.export(exports, "spacingVerticalL", ()=>spacingVerticalL);
parcelHelpers.export(exports, "spacingVerticalXL", ()=>spacingVerticalXL);
parcelHelpers.export(exports, "spacingVerticalXXL", ()=>spacingVerticalXXL);
parcelHelpers.export(exports, "spacingVerticalXXXL", ()=>spacingVerticalXXXL);
parcelHelpers.export(exports, "durationUltraFast", ()=>durationUltraFast);
parcelHelpers.export(exports, "durationFaster", ()=>durationFaster);
parcelHelpers.export(exports, "durationFast", ()=>durationFast);
parcelHelpers.export(exports, "durationNormal", ()=>durationNormal);
parcelHelpers.export(exports, "durationSlow", ()=>durationSlow);
parcelHelpers.export(exports, "durationSlower", ()=>durationSlower);
parcelHelpers.export(exports, "durationUltraSlow", ()=>durationUltraSlow);
parcelHelpers.export(exports, "curveAccelerateMax", ()=>curveAccelerateMax);
parcelHelpers.export(exports, "curveAccelerateMid", ()=>curveAccelerateMid);
parcelHelpers.export(exports, "curveAccelerateMin", ()=>curveAccelerateMin);
parcelHelpers.export(exports, "curveDecelerateMax", ()=>curveDecelerateMax);
parcelHelpers.export(exports, "curveDecelerateMid", ()=>curveDecelerateMid);
parcelHelpers.export(exports, "curveDecelerateMin", ()=>curveDecelerateMin);
parcelHelpers.export(exports, "curveEasyEaseMax", ()=>curveEasyEaseMax);
parcelHelpers.export(exports, "curveEasyEase", ()=>curveEasyEase);
parcelHelpers.export(exports, "curveLinear", ()=>curveLinear);
parcelHelpers.export(exports, "colorNeutralForeground1", ()=>colorNeutralForeground1);
parcelHelpers.export(exports, "colorNeutralForeground1Hover", ()=>colorNeutralForeground1Hover);
parcelHelpers.export(exports, "colorNeutralForeground1Pressed", ()=>colorNeutralForeground1Pressed);
parcelHelpers.export(exports, "colorNeutralForeground1Selected", ()=>colorNeutralForeground1Selected);
parcelHelpers.export(exports, "colorNeutralForeground2", ()=>colorNeutralForeground2);
parcelHelpers.export(exports, "colorNeutralForeground2Hover", ()=>colorNeutralForeground2Hover);
parcelHelpers.export(exports, "colorNeutralForeground2Pressed", ()=>colorNeutralForeground2Pressed);
parcelHelpers.export(exports, "colorNeutralForeground2Selected", ()=>colorNeutralForeground2Selected);
parcelHelpers.export(exports, "colorNeutralForeground2BrandHover", ()=>colorNeutralForeground2BrandHover);
parcelHelpers.export(exports, "colorNeutralForeground2BrandPressed", ()=>colorNeutralForeground2BrandPressed);
parcelHelpers.export(exports, "colorNeutralForeground2BrandSelected", ()=>colorNeutralForeground2BrandSelected);
parcelHelpers.export(exports, "colorNeutralForeground3", ()=>colorNeutralForeground3);
parcelHelpers.export(exports, "colorNeutralForeground3Hover", ()=>colorNeutralForeground3Hover);
parcelHelpers.export(exports, "colorNeutralForeground3Pressed", ()=>colorNeutralForeground3Pressed);
parcelHelpers.export(exports, "colorNeutralForeground3Selected", ()=>colorNeutralForeground3Selected);
parcelHelpers.export(exports, "colorNeutralForeground3BrandHover", ()=>colorNeutralForeground3BrandHover);
parcelHelpers.export(exports, "colorNeutralForeground3BrandPressed", ()=>colorNeutralForeground3BrandPressed);
parcelHelpers.export(exports, "colorNeutralForeground3BrandSelected", ()=>colorNeutralForeground3BrandSelected);
parcelHelpers.export(exports, "colorNeutralForeground4", ()=>colorNeutralForeground4);
parcelHelpers.export(exports, "colorNeutralForegroundDisabled", ()=>colorNeutralForegroundDisabled);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedDisabled", ()=>colorNeutralForegroundInvertedDisabled);
parcelHelpers.export(exports, "colorBrandForegroundLink", ()=>colorBrandForegroundLink);
parcelHelpers.export(exports, "colorBrandForegroundLinkHover", ()=>colorBrandForegroundLinkHover);
parcelHelpers.export(exports, "colorBrandForegroundLinkPressed", ()=>colorBrandForegroundLinkPressed);
parcelHelpers.export(exports, "colorBrandForegroundLinkSelected", ()=>colorBrandForegroundLinkSelected);
parcelHelpers.export(exports, "colorNeutralForeground2Link", ()=>colorNeutralForeground2Link);
parcelHelpers.export(exports, "colorNeutralForeground2LinkHover", ()=>colorNeutralForeground2LinkHover);
parcelHelpers.export(exports, "colorNeutralForeground2LinkPressed", ()=>colorNeutralForeground2LinkPressed);
parcelHelpers.export(exports, "colorNeutralForeground2LinkSelected", ()=>colorNeutralForeground2LinkSelected);
parcelHelpers.export(exports, "colorCompoundBrandForeground1", ()=>colorCompoundBrandForeground1);
parcelHelpers.export(exports, "colorCompoundBrandForeground1Hover", ()=>colorCompoundBrandForeground1Hover);
parcelHelpers.export(exports, "colorCompoundBrandForeground1Pressed", ()=>colorCompoundBrandForeground1Pressed);
parcelHelpers.export(exports, "colorBrandForeground1", ()=>colorBrandForeground1);
parcelHelpers.export(exports, "colorBrandForeground2", ()=>colorBrandForeground2);
parcelHelpers.export(exports, "colorNeutralForeground1Static", ()=>colorNeutralForeground1Static);
parcelHelpers.export(exports, "colorNeutralForegroundStaticInverted", ()=>colorNeutralForegroundStaticInverted);
parcelHelpers.export(exports, "colorNeutralForegroundInverted", ()=>colorNeutralForegroundInverted);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedHover", ()=>colorNeutralForegroundInvertedHover);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedPressed", ()=>colorNeutralForegroundInvertedPressed);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedSelected", ()=>colorNeutralForegroundInvertedSelected);
parcelHelpers.export(exports, "colorNeutralForegroundInverted2", ()=>colorNeutralForegroundInverted2);
parcelHelpers.export(exports, "colorNeutralForegroundOnBrand", ()=>colorNeutralForegroundOnBrand);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLink", ()=>colorNeutralForegroundInvertedLink);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkHover", ()=>colorNeutralForegroundInvertedLinkHover);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkPressed", ()=>colorNeutralForegroundInvertedLinkPressed);
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkSelected", ()=>colorNeutralForegroundInvertedLinkSelected);
parcelHelpers.export(exports, "colorBrandForegroundInverted", ()=>colorBrandForegroundInverted);
parcelHelpers.export(exports, "colorBrandForegroundInvertedHover", ()=>colorBrandForegroundInvertedHover);
parcelHelpers.export(exports, "colorBrandForegroundInvertedPressed", ()=>colorBrandForegroundInvertedPressed);
parcelHelpers.export(exports, "colorBrandForegroundOnLight", ()=>colorBrandForegroundOnLight);
parcelHelpers.export(exports, "colorBrandForegroundOnLightHover", ()=>colorBrandForegroundOnLightHover);
parcelHelpers.export(exports, "colorBrandForegroundOnLightPressed", ()=>colorBrandForegroundOnLightPressed);
parcelHelpers.export(exports, "colorBrandForegroundOnLightSelected", ()=>colorBrandForegroundOnLightSelected);
parcelHelpers.export(exports, "colorNeutralBackground1", ()=>colorNeutralBackground1);
parcelHelpers.export(exports, "colorNeutralBackground1Hover", ()=>colorNeutralBackground1Hover);
parcelHelpers.export(exports, "colorNeutralBackground1Pressed", ()=>colorNeutralBackground1Pressed);
parcelHelpers.export(exports, "colorNeutralBackground1Selected", ()=>colorNeutralBackground1Selected);
parcelHelpers.export(exports, "colorNeutralBackground2", ()=>colorNeutralBackground2);
parcelHelpers.export(exports, "colorNeutralBackground2Hover", ()=>colorNeutralBackground2Hover);
parcelHelpers.export(exports, "colorNeutralBackground2Pressed", ()=>colorNeutralBackground2Pressed);
parcelHelpers.export(exports, "colorNeutralBackground2Selected", ()=>colorNeutralBackground2Selected);
parcelHelpers.export(exports, "colorNeutralBackground3", ()=>colorNeutralBackground3);
parcelHelpers.export(exports, "colorNeutralBackground3Hover", ()=>colorNeutralBackground3Hover);
parcelHelpers.export(exports, "colorNeutralBackground3Pressed", ()=>colorNeutralBackground3Pressed);
parcelHelpers.export(exports, "colorNeutralBackground3Selected", ()=>colorNeutralBackground3Selected);
parcelHelpers.export(exports, "colorNeutralBackground4", ()=>colorNeutralBackground4);
parcelHelpers.export(exports, "colorNeutralBackground4Hover", ()=>colorNeutralBackground4Hover);
parcelHelpers.export(exports, "colorNeutralBackground4Pressed", ()=>colorNeutralBackground4Pressed);
parcelHelpers.export(exports, "colorNeutralBackground4Selected", ()=>colorNeutralBackground4Selected);
parcelHelpers.export(exports, "colorNeutralBackground5", ()=>colorNeutralBackground5);
parcelHelpers.export(exports, "colorNeutralBackground5Hover", ()=>colorNeutralBackground5Hover);
parcelHelpers.export(exports, "colorNeutralBackground5Pressed", ()=>colorNeutralBackground5Pressed);
parcelHelpers.export(exports, "colorNeutralBackground5Selected", ()=>colorNeutralBackground5Selected);
parcelHelpers.export(exports, "colorNeutralBackground6", ()=>colorNeutralBackground6);
parcelHelpers.export(exports, "colorNeutralBackgroundInverted", ()=>colorNeutralBackgroundInverted);
parcelHelpers.export(exports, "colorNeutralBackgroundStatic", ()=>colorNeutralBackgroundStatic);
parcelHelpers.export(exports, "colorSubtleBackground", ()=>colorSubtleBackground);
parcelHelpers.export(exports, "colorSubtleBackgroundHover", ()=>colorSubtleBackgroundHover);
parcelHelpers.export(exports, "colorSubtleBackgroundPressed", ()=>colorSubtleBackgroundPressed);
parcelHelpers.export(exports, "colorSubtleBackgroundSelected", ()=>colorSubtleBackgroundSelected);
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaHover", ()=>colorSubtleBackgroundLightAlphaHover);
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaPressed", ()=>colorSubtleBackgroundLightAlphaPressed);
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaSelected", ()=>colorSubtleBackgroundLightAlphaSelected);
parcelHelpers.export(exports, "colorSubtleBackgroundInverted", ()=>colorSubtleBackgroundInverted);
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedHover", ()=>colorSubtleBackgroundInvertedHover);
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedPressed", ()=>colorSubtleBackgroundInvertedPressed);
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedSelected", ()=>colorSubtleBackgroundInvertedSelected);
parcelHelpers.export(exports, "colorTransparentBackground", ()=>colorTransparentBackground);
parcelHelpers.export(exports, "colorTransparentBackgroundHover", ()=>colorTransparentBackgroundHover);
parcelHelpers.export(exports, "colorTransparentBackgroundPressed", ()=>colorTransparentBackgroundPressed);
parcelHelpers.export(exports, "colorTransparentBackgroundSelected", ()=>colorTransparentBackgroundSelected);
parcelHelpers.export(exports, "colorNeutralBackgroundDisabled", ()=>colorNeutralBackgroundDisabled);
parcelHelpers.export(exports, "colorNeutralBackgroundInvertedDisabled", ()=>colorNeutralBackgroundInvertedDisabled);
parcelHelpers.export(exports, "colorNeutralStencil1", ()=>colorNeutralStencil1);
parcelHelpers.export(exports, "colorNeutralStencil2", ()=>colorNeutralStencil2);
parcelHelpers.export(exports, "colorNeutralStencil1Alpha", ()=>colorNeutralStencil1Alpha);
parcelHelpers.export(exports, "colorNeutralStencil2Alpha", ()=>colorNeutralStencil2Alpha);
parcelHelpers.export(exports, "colorBackgroundOverlay", ()=>colorBackgroundOverlay);
parcelHelpers.export(exports, "colorScrollbarOverlay", ()=>colorScrollbarOverlay);
parcelHelpers.export(exports, "colorBrandBackground", ()=>colorBrandBackground);
parcelHelpers.export(exports, "colorBrandBackgroundHover", ()=>colorBrandBackgroundHover);
parcelHelpers.export(exports, "colorBrandBackgroundPressed", ()=>colorBrandBackgroundPressed);
parcelHelpers.export(exports, "colorBrandBackgroundSelected", ()=>colorBrandBackgroundSelected);
parcelHelpers.export(exports, "colorCompoundBrandBackground", ()=>colorCompoundBrandBackground);
parcelHelpers.export(exports, "colorCompoundBrandBackgroundHover", ()=>colorCompoundBrandBackgroundHover);
parcelHelpers.export(exports, "colorCompoundBrandBackgroundPressed", ()=>colorCompoundBrandBackgroundPressed);
parcelHelpers.export(exports, "colorBrandBackgroundStatic", ()=>colorBrandBackgroundStatic);
parcelHelpers.export(exports, "colorBrandBackground2", ()=>colorBrandBackground2);
parcelHelpers.export(exports, "colorBrandBackgroundInverted", ()=>colorBrandBackgroundInverted);
parcelHelpers.export(exports, "colorBrandBackgroundInvertedHover", ()=>colorBrandBackgroundInvertedHover);
parcelHelpers.export(exports, "colorBrandBackgroundInvertedPressed", ()=>colorBrandBackgroundInvertedPressed);
parcelHelpers.export(exports, "colorBrandBackgroundInvertedSelected", ()=>colorBrandBackgroundInvertedSelected);
parcelHelpers.export(exports, "colorNeutralStrokeAccessible", ()=>colorNeutralStrokeAccessible);
parcelHelpers.export(exports, "colorNeutralStrokeAccessibleHover", ()=>colorNeutralStrokeAccessibleHover);
parcelHelpers.export(exports, "colorNeutralStrokeAccessiblePressed", ()=>colorNeutralStrokeAccessiblePressed);
parcelHelpers.export(exports, "colorNeutralStrokeAccessibleSelected", ()=>colorNeutralStrokeAccessibleSelected);
parcelHelpers.export(exports, "colorNeutralStroke1", ()=>colorNeutralStroke1);
parcelHelpers.export(exports, "colorNeutralStroke1Hover", ()=>colorNeutralStroke1Hover);
parcelHelpers.export(exports, "colorNeutralStroke1Pressed", ()=>colorNeutralStroke1Pressed);
parcelHelpers.export(exports, "colorNeutralStroke1Selected", ()=>colorNeutralStroke1Selected);
parcelHelpers.export(exports, "colorNeutralStroke2", ()=>colorNeutralStroke2);
parcelHelpers.export(exports, "colorNeutralStroke3", ()=>colorNeutralStroke3);
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand", ()=>colorNeutralStrokeOnBrand);
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2", ()=>colorNeutralStrokeOnBrand2);
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Hover", ()=>colorNeutralStrokeOnBrand2Hover);
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Pressed", ()=>colorNeutralStrokeOnBrand2Pressed);
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Selected", ()=>colorNeutralStrokeOnBrand2Selected);
parcelHelpers.export(exports, "colorBrandStroke1", ()=>colorBrandStroke1);
parcelHelpers.export(exports, "colorBrandStroke2", ()=>colorBrandStroke2);
parcelHelpers.export(exports, "colorCompoundBrandStroke", ()=>colorCompoundBrandStroke);
parcelHelpers.export(exports, "colorCompoundBrandStrokeHover", ()=>colorCompoundBrandStrokeHover);
parcelHelpers.export(exports, "colorCompoundBrandStrokePressed", ()=>colorCompoundBrandStrokePressed);
parcelHelpers.export(exports, "colorNeutralStrokeDisabled", ()=>colorNeutralStrokeDisabled);
parcelHelpers.export(exports, "colorNeutralStrokeInvertedDisabled", ()=>colorNeutralStrokeInvertedDisabled);
parcelHelpers.export(exports, "colorTransparentStroke", ()=>colorTransparentStroke);
parcelHelpers.export(exports, "colorTransparentStrokeInteractive", ()=>colorTransparentStrokeInteractive);
parcelHelpers.export(exports, "colorTransparentStrokeDisabled", ()=>colorTransparentStrokeDisabled);
parcelHelpers.export(exports, "colorStrokeFocus1", ()=>colorStrokeFocus1);
parcelHelpers.export(exports, "colorStrokeFocus2", ()=>colorStrokeFocus2);
parcelHelpers.export(exports, "colorNeutralShadowAmbient", ()=>colorNeutralShadowAmbient);
parcelHelpers.export(exports, "colorNeutralShadowKey", ()=>colorNeutralShadowKey);
parcelHelpers.export(exports, "colorNeutralShadowAmbientLighter", ()=>colorNeutralShadowAmbientLighter);
parcelHelpers.export(exports, "colorNeutralShadowKeyLighter", ()=>colorNeutralShadowKeyLighter);
parcelHelpers.export(exports, "colorNeutralShadowAmbientDarker", ()=>colorNeutralShadowAmbientDarker);
parcelHelpers.export(exports, "colorNeutralShadowKeyDarker", ()=>colorNeutralShadowKeyDarker);
parcelHelpers.export(exports, "colorBrandShadowAmbient", ()=>colorBrandShadowAmbient);
parcelHelpers.export(exports, "colorBrandShadowKey", ()=>colorBrandShadowKey);
parcelHelpers.export(exports, "colorPaletteRedBackground1", ()=>colorPaletteRedBackground1);
parcelHelpers.export(exports, "colorPaletteRedBackground2", ()=>colorPaletteRedBackground2);
parcelHelpers.export(exports, "colorPaletteRedBackground3", ()=>colorPaletteRedBackground3);
parcelHelpers.export(exports, "colorPaletteRedForeground1", ()=>colorPaletteRedForeground1);
parcelHelpers.export(exports, "colorPaletteRedForeground2", ()=>colorPaletteRedForeground2);
parcelHelpers.export(exports, "colorPaletteRedForeground3", ()=>colorPaletteRedForeground3);
parcelHelpers.export(exports, "colorPaletteRedBorderActive", ()=>colorPaletteRedBorderActive);
parcelHelpers.export(exports, "colorPaletteRedBorder1", ()=>colorPaletteRedBorder1);
parcelHelpers.export(exports, "colorPaletteRedBorder2", ()=>colorPaletteRedBorder2);
parcelHelpers.export(exports, "colorPaletteGreenBackground1", ()=>colorPaletteGreenBackground1);
parcelHelpers.export(exports, "colorPaletteGreenBackground2", ()=>colorPaletteGreenBackground2);
parcelHelpers.export(exports, "colorPaletteGreenBackground3", ()=>colorPaletteGreenBackground3);
parcelHelpers.export(exports, "colorPaletteGreenForeground1", ()=>colorPaletteGreenForeground1);
parcelHelpers.export(exports, "colorPaletteGreenForeground2", ()=>colorPaletteGreenForeground2);
parcelHelpers.export(exports, "colorPaletteGreenForeground3", ()=>colorPaletteGreenForeground3);
parcelHelpers.export(exports, "colorPaletteGreenBorderActive", ()=>colorPaletteGreenBorderActive);
parcelHelpers.export(exports, "colorPaletteGreenBorder1", ()=>colorPaletteGreenBorder1);
parcelHelpers.export(exports, "colorPaletteGreenBorder2", ()=>colorPaletteGreenBorder2);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground1", ()=>colorPaletteDarkOrangeBackground1);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground2", ()=>colorPaletteDarkOrangeBackground2);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground3", ()=>colorPaletteDarkOrangeBackground3);
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground1", ()=>colorPaletteDarkOrangeForeground1);
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground2", ()=>colorPaletteDarkOrangeForeground2);
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground3", ()=>colorPaletteDarkOrangeForeground3);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorderActive", ()=>colorPaletteDarkOrangeBorderActive);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorder1", ()=>colorPaletteDarkOrangeBorder1);
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorder2", ()=>colorPaletteDarkOrangeBorder2);
parcelHelpers.export(exports, "colorPaletteYellowBackground1", ()=>colorPaletteYellowBackground1);
parcelHelpers.export(exports, "colorPaletteYellowBackground2", ()=>colorPaletteYellowBackground2);
parcelHelpers.export(exports, "colorPaletteYellowBackground3", ()=>colorPaletteYellowBackground3);
parcelHelpers.export(exports, "colorPaletteYellowForeground1", ()=>colorPaletteYellowForeground1);
parcelHelpers.export(exports, "colorPaletteYellowForeground2", ()=>colorPaletteYellowForeground2);
parcelHelpers.export(exports, "colorPaletteYellowForeground3", ()=>colorPaletteYellowForeground3);
parcelHelpers.export(exports, "colorPaletteYellowBorderActive", ()=>colorPaletteYellowBorderActive);
parcelHelpers.export(exports, "colorPaletteYellowBorder1", ()=>colorPaletteYellowBorder1);
parcelHelpers.export(exports, "colorPaletteYellowBorder2", ()=>colorPaletteYellowBorder2);
parcelHelpers.export(exports, "colorPaletteBerryBackground1", ()=>colorPaletteBerryBackground1);
parcelHelpers.export(exports, "colorPaletteBerryBackground2", ()=>colorPaletteBerryBackground2);
parcelHelpers.export(exports, "colorPaletteBerryBackground3", ()=>colorPaletteBerryBackground3);
parcelHelpers.export(exports, "colorPaletteBerryForeground1", ()=>colorPaletteBerryForeground1);
parcelHelpers.export(exports, "colorPaletteBerryForeground2", ()=>colorPaletteBerryForeground2);
parcelHelpers.export(exports, "colorPaletteBerryForeground3", ()=>colorPaletteBerryForeground3);
parcelHelpers.export(exports, "colorPaletteBerryBorderActive", ()=>colorPaletteBerryBorderActive);
parcelHelpers.export(exports, "colorPaletteBerryBorder1", ()=>colorPaletteBerryBorder1);
parcelHelpers.export(exports, "colorPaletteBerryBorder2", ()=>colorPaletteBerryBorder2);
parcelHelpers.export(exports, "colorPaletteLightGreenBackground1", ()=>colorPaletteLightGreenBackground1);
parcelHelpers.export(exports, "colorPaletteLightGreenBackground2", ()=>colorPaletteLightGreenBackground2);
parcelHelpers.export(exports, "colorPaletteLightGreenBackground3", ()=>colorPaletteLightGreenBackground3);
parcelHelpers.export(exports, "colorPaletteLightGreenForeground1", ()=>colorPaletteLightGreenForeground1);
parcelHelpers.export(exports, "colorPaletteLightGreenForeground2", ()=>colorPaletteLightGreenForeground2);
parcelHelpers.export(exports, "colorPaletteLightGreenForeground3", ()=>colorPaletteLightGreenForeground3);
parcelHelpers.export(exports, "colorPaletteLightGreenBorderActive", ()=>colorPaletteLightGreenBorderActive);
parcelHelpers.export(exports, "colorPaletteLightGreenBorder1", ()=>colorPaletteLightGreenBorder1);
parcelHelpers.export(exports, "colorPaletteLightGreenBorder2", ()=>colorPaletteLightGreenBorder2);
parcelHelpers.export(exports, "colorPaletteMarigoldBackground1", ()=>colorPaletteMarigoldBackground1);
parcelHelpers.export(exports, "colorPaletteMarigoldBackground2", ()=>colorPaletteMarigoldBackground2);
parcelHelpers.export(exports, "colorPaletteMarigoldBackground3", ()=>colorPaletteMarigoldBackground3);
parcelHelpers.export(exports, "colorPaletteMarigoldForeground1", ()=>colorPaletteMarigoldForeground1);
parcelHelpers.export(exports, "colorPaletteMarigoldForeground2", ()=>colorPaletteMarigoldForeground2);
parcelHelpers.export(exports, "colorPaletteMarigoldForeground3", ()=>colorPaletteMarigoldForeground3);
parcelHelpers.export(exports, "colorPaletteMarigoldBorderActive", ()=>colorPaletteMarigoldBorderActive);
parcelHelpers.export(exports, "colorPaletteMarigoldBorder1", ()=>colorPaletteMarigoldBorder1);
parcelHelpers.export(exports, "colorPaletteMarigoldBorder2", ()=>colorPaletteMarigoldBorder2);
parcelHelpers.export(exports, "colorPaletteDarkRedBackground2", ()=>colorPaletteDarkRedBackground2);
parcelHelpers.export(exports, "colorPaletteDarkRedForeground2", ()=>colorPaletteDarkRedForeground2);
parcelHelpers.export(exports, "colorPaletteDarkRedBorderActive", ()=>colorPaletteDarkRedBorderActive);
parcelHelpers.export(exports, "colorPaletteCranberryBackground2", ()=>colorPaletteCranberryBackground2);
parcelHelpers.export(exports, "colorPaletteCranberryForeground2", ()=>colorPaletteCranberryForeground2);
parcelHelpers.export(exports, "colorPaletteCranberryBorderActive", ()=>colorPaletteCranberryBorderActive);
parcelHelpers.export(exports, "colorPalettePumpkinBackground2", ()=>colorPalettePumpkinBackground2);
parcelHelpers.export(exports, "colorPalettePumpkinForeground2", ()=>colorPalettePumpkinForeground2);
parcelHelpers.export(exports, "colorPalettePumpkinBorderActive", ()=>colorPalettePumpkinBorderActive);
parcelHelpers.export(exports, "colorPalettePeachBackground2", ()=>colorPalettePeachBackground2);
parcelHelpers.export(exports, "colorPalettePeachForeground2", ()=>colorPalettePeachForeground2);
parcelHelpers.export(exports, "colorPalettePeachBorderActive", ()=>colorPalettePeachBorderActive);
parcelHelpers.export(exports, "colorPaletteGoldBackground2", ()=>colorPaletteGoldBackground2);
parcelHelpers.export(exports, "colorPaletteGoldForeground2", ()=>colorPaletteGoldForeground2);
parcelHelpers.export(exports, "colorPaletteGoldBorderActive", ()=>colorPaletteGoldBorderActive);
parcelHelpers.export(exports, "colorPaletteBrassBackground2", ()=>colorPaletteBrassBackground2);
parcelHelpers.export(exports, "colorPaletteBrassForeground2", ()=>colorPaletteBrassForeground2);
parcelHelpers.export(exports, "colorPaletteBrassBorderActive", ()=>colorPaletteBrassBorderActive);
parcelHelpers.export(exports, "colorPaletteBrownBackground2", ()=>colorPaletteBrownBackground2);
parcelHelpers.export(exports, "colorPaletteBrownForeground2", ()=>colorPaletteBrownForeground2);
parcelHelpers.export(exports, "colorPaletteBrownBorderActive", ()=>colorPaletteBrownBorderActive);
parcelHelpers.export(exports, "colorPaletteForestBackground2", ()=>colorPaletteForestBackground2);
parcelHelpers.export(exports, "colorPaletteForestForeground2", ()=>colorPaletteForestForeground2);
parcelHelpers.export(exports, "colorPaletteForestBorderActive", ()=>colorPaletteForestBorderActive);
parcelHelpers.export(exports, "colorPaletteSeafoamBackground2", ()=>colorPaletteSeafoamBackground2);
parcelHelpers.export(exports, "colorPaletteSeafoamForeground2", ()=>colorPaletteSeafoamForeground2);
parcelHelpers.export(exports, "colorPaletteSeafoamBorderActive", ()=>colorPaletteSeafoamBorderActive);
parcelHelpers.export(exports, "colorPaletteDarkGreenBackground2", ()=>colorPaletteDarkGreenBackground2);
parcelHelpers.export(exports, "colorPaletteDarkGreenForeground2", ()=>colorPaletteDarkGreenForeground2);
parcelHelpers.export(exports, "colorPaletteDarkGreenBorderActive", ()=>colorPaletteDarkGreenBorderActive);
parcelHelpers.export(exports, "colorPaletteLightTealBackground2", ()=>colorPaletteLightTealBackground2);
parcelHelpers.export(exports, "colorPaletteLightTealForeground2", ()=>colorPaletteLightTealForeground2);
parcelHelpers.export(exports, "colorPaletteLightTealBorderActive", ()=>colorPaletteLightTealBorderActive);
parcelHelpers.export(exports, "colorPaletteTealBackground2", ()=>colorPaletteTealBackground2);
parcelHelpers.export(exports, "colorPaletteTealForeground2", ()=>colorPaletteTealForeground2);
parcelHelpers.export(exports, "colorPaletteTealBorderActive", ()=>colorPaletteTealBorderActive);
parcelHelpers.export(exports, "colorPaletteSteelBackground2", ()=>colorPaletteSteelBackground2);
parcelHelpers.export(exports, "colorPaletteSteelForeground2", ()=>colorPaletteSteelForeground2);
parcelHelpers.export(exports, "colorPaletteSteelBorderActive", ()=>colorPaletteSteelBorderActive);
parcelHelpers.export(exports, "colorPaletteBlueBackground2", ()=>colorPaletteBlueBackground2);
parcelHelpers.export(exports, "colorPaletteBlueForeground2", ()=>colorPaletteBlueForeground2);
parcelHelpers.export(exports, "colorPaletteBlueBorderActive", ()=>colorPaletteBlueBorderActive);
parcelHelpers.export(exports, "colorPaletteRoyalBlueBackground2", ()=>colorPaletteRoyalBlueBackground2);
parcelHelpers.export(exports, "colorPaletteRoyalBlueForeground2", ()=>colorPaletteRoyalBlueForeground2);
parcelHelpers.export(exports, "colorPaletteRoyalBlueBorderActive", ()=>colorPaletteRoyalBlueBorderActive);
parcelHelpers.export(exports, "colorPaletteCornflowerBackground2", ()=>colorPaletteCornflowerBackground2);
parcelHelpers.export(exports, "colorPaletteCornflowerForeground2", ()=>colorPaletteCornflowerForeground2);
parcelHelpers.export(exports, "colorPaletteCornflowerBorderActive", ()=>colorPaletteCornflowerBorderActive);
parcelHelpers.export(exports, "colorPaletteNavyBackground2", ()=>colorPaletteNavyBackground2);
parcelHelpers.export(exports, "colorPaletteNavyForeground2", ()=>colorPaletteNavyForeground2);
parcelHelpers.export(exports, "colorPaletteNavyBorderActive", ()=>colorPaletteNavyBorderActive);
parcelHelpers.export(exports, "colorPaletteLavenderBackground2", ()=>colorPaletteLavenderBackground2);
parcelHelpers.export(exports, "colorPaletteLavenderForeground2", ()=>colorPaletteLavenderForeground2);
parcelHelpers.export(exports, "colorPaletteLavenderBorderActive", ()=>colorPaletteLavenderBorderActive);
parcelHelpers.export(exports, "colorPalettePurpleBackground2", ()=>colorPalettePurpleBackground2);
parcelHelpers.export(exports, "colorPalettePurpleForeground2", ()=>colorPalettePurpleForeground2);
parcelHelpers.export(exports, "colorPalettePurpleBorderActive", ()=>colorPalettePurpleBorderActive);
parcelHelpers.export(exports, "colorPaletteGrapeBackground2", ()=>colorPaletteGrapeBackground2);
parcelHelpers.export(exports, "colorPaletteGrapeForeground2", ()=>colorPaletteGrapeForeground2);
parcelHelpers.export(exports, "colorPaletteGrapeBorderActive", ()=>colorPaletteGrapeBorderActive);
parcelHelpers.export(exports, "colorPaletteLilacBackground2", ()=>colorPaletteLilacBackground2);
parcelHelpers.export(exports, "colorPaletteLilacForeground2", ()=>colorPaletteLilacForeground2);
parcelHelpers.export(exports, "colorPaletteLilacBorderActive", ()=>colorPaletteLilacBorderActive);
parcelHelpers.export(exports, "colorPalettePinkBackground2", ()=>colorPalettePinkBackground2);
parcelHelpers.export(exports, "colorPalettePinkForeground2", ()=>colorPalettePinkForeground2);
parcelHelpers.export(exports, "colorPalettePinkBorderActive", ()=>colorPalettePinkBorderActive);
parcelHelpers.export(exports, "colorPaletteMagentaBackground2", ()=>colorPaletteMagentaBackground2);
parcelHelpers.export(exports, "colorPaletteMagentaForeground2", ()=>colorPaletteMagentaForeground2);
parcelHelpers.export(exports, "colorPaletteMagentaBorderActive", ()=>colorPaletteMagentaBorderActive);
parcelHelpers.export(exports, "colorPalettePlumBackground2", ()=>colorPalettePlumBackground2);
parcelHelpers.export(exports, "colorPalettePlumForeground2", ()=>colorPalettePlumForeground2);
parcelHelpers.export(exports, "colorPalettePlumBorderActive", ()=>colorPalettePlumBorderActive);
parcelHelpers.export(exports, "colorPaletteBeigeBackground2", ()=>colorPaletteBeigeBackground2);
parcelHelpers.export(exports, "colorPaletteBeigeForeground2", ()=>colorPaletteBeigeForeground2);
parcelHelpers.export(exports, "colorPaletteBeigeBorderActive", ()=>colorPaletteBeigeBorderActive);
parcelHelpers.export(exports, "colorPaletteMinkBackground2", ()=>colorPaletteMinkBackground2);
parcelHelpers.export(exports, "colorPaletteMinkForeground2", ()=>colorPaletteMinkForeground2);
parcelHelpers.export(exports, "colorPaletteMinkBorderActive", ()=>colorPaletteMinkBorderActive);
parcelHelpers.export(exports, "colorPalettePlatinumBackground2", ()=>colorPalettePlatinumBackground2);
parcelHelpers.export(exports, "colorPalettePlatinumForeground2", ()=>colorPalettePlatinumForeground2);
parcelHelpers.export(exports, "colorPalettePlatinumBorderActive", ()=>colorPalettePlatinumBorderActive);
parcelHelpers.export(exports, "colorPaletteAnchorBackground2", ()=>colorPaletteAnchorBackground2);
parcelHelpers.export(exports, "colorPaletteAnchorForeground2", ()=>colorPaletteAnchorForeground2);
parcelHelpers.export(exports, "colorPaletteAnchorBorderActive", ()=>colorPaletteAnchorBorderActive);
parcelHelpers.export(exports, "colorPaletteRedForegroundInverted", ()=>colorPaletteRedForegroundInverted);
parcelHelpers.export(exports, "colorPaletteGreenForegroundInverted", ()=>colorPaletteGreenForegroundInverted);
parcelHelpers.export(exports, "colorPaletteYellowForegroundInverted", ()=>colorPaletteYellowForegroundInverted);
parcelHelpers.export(exports, "shadow2", ()=>shadow2);
parcelHelpers.export(exports, "shadow4", ()=>shadow4);
parcelHelpers.export(exports, "shadow8", ()=>shadow8);
parcelHelpers.export(exports, "shadow16", ()=>shadow16);
parcelHelpers.export(exports, "shadow28", ()=>shadow28);
parcelHelpers.export(exports, "shadow64", ()=>shadow64);
parcelHelpers.export(exports, "shadow2Brand", ()=>shadow2Brand);
parcelHelpers.export(exports, "shadow4Brand", ()=>shadow4Brand);
parcelHelpers.export(exports, "shadow8Brand", ()=>shadow8Brand);
parcelHelpers.export(exports, "shadow16Brand", ()=>shadow16Brand);
parcelHelpers.export(exports, "shadow28Brand", ()=>shadow28Brand);
parcelHelpers.export(exports, "shadow64Brand", ()=>shadow64Brand);
var _designTokenJs = require("@microsoft/fast-foundation/design-token.js");
const { create } = (0, _designTokenJs.DesignToken);
const borderRadiusNone = create("borderRadiusNone");
const borderRadiusSmall = create("borderRadiusSmall");
const borderRadiusMedium = create("borderRadiusMedium");
const borderRadiusLarge = create("borderRadiusLarge");
const borderRadiusXLarge = create("borderRadiusXLarge");
const borderRadiusCircular = create("borderRadiusCircular");
const fontSizeBase100 = create("fontSizeBase100");
const fontSizeBase200 = create("fontSizeBase200");
const fontSizeBase300 = create("fontSizeBase300");
const fontSizeBase400 = create("fontSizeBase400");
const fontSizeBase500 = create("fontSizeBase500");
const fontSizeBase600 = create("fontSizeBase600");
const fontSizeHero700 = create("fontSizeHero700");
const fontSizeHero800 = create("fontSizeHero800");
const fontSizeHero900 = create("fontSizeHero900");
const fontSizeHero1000 = create("fontSizeHero1000");
const lineHeightBase100 = create("lineHeightBase100");
const lineHeightBase200 = create("lineHeightBase200");
const lineHeightBase300 = create("lineHeightBase300");
const lineHeightBase400 = create("lineHeightBase400");
const lineHeightBase500 = create("lineHeightBase500");
const lineHeightBase600 = create("lineHeightBase600");
const lineHeightHero700 = create("lineHeightHero700");
const lineHeightHero800 = create("lineHeightHero800");
const lineHeightHero900 = create("lineHeightHero900");
const lineHeightHero1000 = create("lineHeightHero1000");
const fontFamilyBase = create("fontFamilyBase");
const fontFamilyMonospace = create("fontFamilyMonospace");
const fontFamilyNumeric = create("fontFamilyNumeric");
const fontWeightRegular = create("fontWeightRegular");
const fontWeightMedium = create("fontWeightMedium");
const fontWeightSemibold = create("fontWeightSemibold");
const fontWeightBold = create("fontWeightBold");
const strokeWidthThin = create("strokeWidthThin");
const strokeWidthThick = create("strokeWidthThick");
const strokeWidthThicker = create("strokeWidthThicker");
const strokeWidthThickest = create("strokeWidthThickest");
const spacingHorizontalNone = create("spacingHorizontalNone");
const spacingHorizontalXXS = create("spacingHorizontalXXS");
const spacingHorizontalXS = create("spacingHorizontalXS");
const spacingHorizontalSNudge = create("spacingHorizontalSNudge");
const spacingHorizontalS = create("spacingHorizontalS");
const spacingHorizontalMNudge = create("spacingHorizontalMNudge");
const spacingHorizontalM = create("spacingHorizontalM");
const spacingHorizontalL = create("spacingHorizontalL");
const spacingHorizontalXL = create("spacingHorizontalXL");
const spacingHorizontalXXL = create("spacingHorizontalXXL");
const spacingHorizontalXXXL = create("spacingHorizontalXXXL");
const spacingVerticalNone = create("spacingVerticalNone");
const spacingVerticalXXS = create("spacingVerticalXXS");
const spacingVerticalXS = create("spacingVerticalXS");
const spacingVerticalSNudge = create("spacingVerticalSNudge");
const spacingVerticalS = create("spacingVerticalS");
const spacingVerticalMNudge = create("spacingVerticalMNudge");
const spacingVerticalM = create("spacingVerticalM");
const spacingVerticalL = create("spacingVerticalL");
const spacingVerticalXL = create("spacingVerticalXL");
const spacingVerticalXXL = create("spacingVerticalXXL");
const spacingVerticalXXXL = create("spacingVerticalXXXL");
const durationUltraFast = create("durationUltraFast");
const durationFaster = create("durationFaster");
const durationFast = create("durationFast");
const durationNormal = create("durationNormal");
const durationSlow = create("durationSlow");
const durationSlower = create("durationSlower");
const durationUltraSlow = create("durationUltraSlow");
const curveAccelerateMax = create("curveAccelerateMax");
const curveAccelerateMid = create("curveAccelerateMid");
const curveAccelerateMin = create("curveAccelerateMin");
const curveDecelerateMax = create("curveDecelerateMax");
const curveDecelerateMid = create("curveDecelerateMid");
const curveDecelerateMin = create("curveDecelerateMin");
const curveEasyEaseMax = create("curveEasyEaseMax");
const curveEasyEase = create("curveEasyEase");
const curveLinear = create("curveLinear");
const colorNeutralForeground1 = create("colorNeutralForeground1");
const colorNeutralForeground1Hover = create("colorNeutralForeground1Hover");
const colorNeutralForeground1Pressed = create("colorNeutralForeground1Pressed");
const colorNeutralForeground1Selected = create("colorNeutralForeground1Selected");
const colorNeutralForeground2 = create("colorNeutralForeground2");
const colorNeutralForeground2Hover = create("colorNeutralForeground2Hover");
const colorNeutralForeground2Pressed = create("colorNeutralForeground2Pressed");
const colorNeutralForeground2Selected = create("colorNeutralForeground2Selected");
const colorNeutralForeground2BrandHover = create("colorNeutralForeground2BrandHover");
const colorNeutralForeground2BrandPressed = create("colorNeutralForeground2BrandPressed");
const colorNeutralForeground2BrandSelected = create("colorNeutralForeground2BrandSelected");
const colorNeutralForeground3 = create("colorNeutralForeground3");
const colorNeutralForeground3Hover = create("colorNeutralForeground3Hover");
const colorNeutralForeground3Pressed = create("colorNeutralForeground3Pressed");
const colorNeutralForeground3Selected = create("colorNeutralForeground3Selected");
const colorNeutralForeground3BrandHover = create("colorNeutralForeground3BrandHover");
const colorNeutralForeground3BrandPressed = create("colorNeutralForeground3BrandPressed");
const colorNeutralForeground3BrandSelected = create("colorNeutralForeground3BrandSelected");
const colorNeutralForeground4 = create("colorNeutralForeground4");
const colorNeutralForegroundDisabled = create("colorNeutralForegroundDisabled");
const colorNeutralForegroundInvertedDisabled = create("colorNeutralForegroundInvertedDisabled");
const colorBrandForegroundLink = create("colorBrandForegroundLink");
const colorBrandForegroundLinkHover = create("colorBrandForegroundLinkHover");
const colorBrandForegroundLinkPressed = create("colorBrandForegroundLinkPressed");
const colorBrandForegroundLinkSelected = create("colorBrandForegroundLinkSelected");
const colorNeutralForeground2Link = create("colorNeutralForeground2Link");
const colorNeutralForeground2LinkHover = create("colorNeutralForeground2LinkHover");
const colorNeutralForeground2LinkPressed = create("colorNeutralForeground2LinkPressed");
const colorNeutralForeground2LinkSelected = create("colorNeutralForeground2LinkSelected");
const colorCompoundBrandForeground1 = create("colorCompoundBrandForeground1");
const colorCompoundBrandForeground1Hover = create("colorCompoundBrandForeground1Hover");
const colorCompoundBrandForeground1Pressed = create("colorCompoundBrandForeground1Pressed");
const colorBrandForeground1 = create("colorBrandForeground1");
const colorBrandForeground2 = create("colorBrandForeground2");
const colorNeutralForeground1Static = create("colorNeutralForeground1Static");
const colorNeutralForegroundStaticInverted = create("colorNeutralForegroundStaticInverted");
const colorNeutralForegroundInverted = create("colorNeutralForegroundInverted");
const colorNeutralForegroundInvertedHover = create("colorNeutralForegroundInvertedHover");
const colorNeutralForegroundInvertedPressed = create("colorNeutralForegroundInvertedPressed");
const colorNeutralForegroundInvertedSelected = create("colorNeutralForegroundInvertedSelected");
const colorNeutralForegroundInverted2 = create("colorNeutralForegroundInverted2");
const colorNeutralForegroundOnBrand = create("colorNeutralForegroundOnBrand");
const colorNeutralForegroundInvertedLink = create("colorNeutralForegroundInvertedLink");
const colorNeutralForegroundInvertedLinkHover = create("colorNeutralForegroundInvertedLinkHover");
const colorNeutralForegroundInvertedLinkPressed = create("colorNeutralForegroundInvertedLinkPressed");
const colorNeutralForegroundInvertedLinkSelected = create("colorNeutralForegroundInvertedLinkSelected");
const colorBrandForegroundInverted = create("colorBrandForegroundInverted");
const colorBrandForegroundInvertedHover = create("colorBrandForegroundInvertedHover");
const colorBrandForegroundInvertedPressed = create("colorBrandForegroundInvertedPressed");
const colorBrandForegroundOnLight = create("colorBrandForegroundOnLight");
const colorBrandForegroundOnLightHover = create("colorBrandForegroundOnLightHover");
const colorBrandForegroundOnLightPressed = create("colorBrandForegroundOnLightPressed");
const colorBrandForegroundOnLightSelected = create("colorBrandForegroundOnLightSelected");
const colorNeutralBackground1 = create("colorNeutralBackground1");
const colorNeutralBackground1Hover = create("colorNeutralBackground1Hover");
const colorNeutralBackground1Pressed = create("colorNeutralBackground1Pressed");
const colorNeutralBackground1Selected = create("colorNeutralBackground1Selected");
const colorNeutralBackground2 = create("colorNeutralBackground2");
const colorNeutralBackground2Hover = create("colorNeutralBackground2Hover");
const colorNeutralBackground2Pressed = create("colorNeutralBackground2Pressed");
const colorNeutralBackground2Selected = create("colorNeutralBackground2Selected");
const colorNeutralBackground3 = create("colorNeutralBackground3");
const colorNeutralBackground3Hover = create("colorNeutralBackground3Hover");
const colorNeutralBackground3Pressed = create("colorNeutralBackground3Pressed");
const colorNeutralBackground3Selected = create("colorNeutralBackground3Selected");
const colorNeutralBackground4 = create("colorNeutralBackground4");
const colorNeutralBackground4Hover = create("colorNeutralBackground4Hover");
const colorNeutralBackground4Pressed = create("colorNeutralBackground4Pressed");
const colorNeutralBackground4Selected = create("colorNeutralBackground4Selected");
const colorNeutralBackground5 = create("colorNeutralBackground5");
const colorNeutralBackground5Hover = create("colorNeutralBackground5Hover");
const colorNeutralBackground5Pressed = create("colorNeutralBackground5Pressed");
const colorNeutralBackground5Selected = create("colorNeutralBackground5Selected");
const colorNeutralBackground6 = create("colorNeutralBackground6");
const colorNeutralBackgroundInverted = create("colorNeutralBackgroundInverted");
const colorNeutralBackgroundStatic = create("colorNeutralBackgroundStatic");
const colorSubtleBackground = create("colorSubtleBackground");
const colorSubtleBackgroundHover = create("colorSubtleBackgroundHover");
const colorSubtleBackgroundPressed = create("colorSubtleBackgroundPressed");
const colorSubtleBackgroundSelected = create("colorSubtleBackgroundSelected");
const colorSubtleBackgroundLightAlphaHover = create("colorSubtleBackgroundLightAlphaHover");
const colorSubtleBackgroundLightAlphaPressed = create("colorSubtleBackgroundLightAlphaPressed");
const colorSubtleBackgroundLightAlphaSelected = create("colorSubtleBackgroundLightAlphaSelected");
const colorSubtleBackgroundInverted = create("colorSubtleBackgroundInverted");
const colorSubtleBackgroundInvertedHover = create("colorSubtleBackgroundInvertedHover");
const colorSubtleBackgroundInvertedPressed = create("colorSubtleBackgroundInvertedPressed");
const colorSubtleBackgroundInvertedSelected = create("colorSubtleBackgroundInvertedSelected");
const colorTransparentBackground = create("colorTransparentBackground");
const colorTransparentBackgroundHover = create("colorTransparentBackgroundHover");
const colorTransparentBackgroundPressed = create("colorTransparentBackgroundPressed");
const colorTransparentBackgroundSelected = create("colorTransparentBackgroundSelected");
const colorNeutralBackgroundDisabled = create("colorNeutralBackgroundDisabled");
const colorNeutralBackgroundInvertedDisabled = create("colorNeutralBackgroundInvertedDisabled");
const colorNeutralStencil1 = create("colorNeutralStencil1");
const colorNeutralStencil2 = create("colorNeutralStencil2");
const colorNeutralStencil1Alpha = create("colorNeutralStencil1Alpha");
const colorNeutralStencil2Alpha = create("colorNeutralStencil2Alpha");
const colorBackgroundOverlay = create("colorBackgroundOverlay");
const colorScrollbarOverlay = create("colorScrollbarOverlay");
const colorBrandBackground = create("colorBrandBackground");
const colorBrandBackgroundHover = create("colorBrandBackgroundHover");
const colorBrandBackgroundPressed = create("colorBrandBackgroundPressed");
const colorBrandBackgroundSelected = create("colorBrandBackgroundSelected");
const colorCompoundBrandBackground = create("colorCompoundBrandBackground");
const colorCompoundBrandBackgroundHover = create("colorCompoundBrandBackgroundHover");
const colorCompoundBrandBackgroundPressed = create("colorCompoundBrandBackgroundPressed");
const colorBrandBackgroundStatic = create("colorBrandBackgroundStatic");
const colorBrandBackground2 = create("colorBrandBackground2");
const colorBrandBackgroundInverted = create("colorBrandBackgroundInverted");
const colorBrandBackgroundInvertedHover = create("colorBrandBackgroundInvertedHover");
const colorBrandBackgroundInvertedPressed = create("colorBrandBackgroundInvertedPressed");
const colorBrandBackgroundInvertedSelected = create("colorBrandBackgroundInvertedSelected");
const colorNeutralStrokeAccessible = create("colorNeutralStrokeAccessible");
const colorNeutralStrokeAccessibleHover = create("colorNeutralStrokeAccessibleHover");
const colorNeutralStrokeAccessiblePressed = create("colorNeutralStrokeAccessiblePressed");
const colorNeutralStrokeAccessibleSelected = create("colorNeutralStrokeAccessibleSelected");
const colorNeutralStroke1 = create("colorNeutralStroke1");
const colorNeutralStroke1Hover = create("colorNeutralStroke1Hover");
const colorNeutralStroke1Pressed = create("colorNeutralStroke1Pressed");
const colorNeutralStroke1Selected = create("colorNeutralStroke1Selected");
const colorNeutralStroke2 = create("colorNeutralStroke2");
const colorNeutralStroke3 = create("colorNeutralStroke3");
const colorNeutralStrokeOnBrand = create("colorNeutralStrokeOnBrand");
const colorNeutralStrokeOnBrand2 = create("colorNeutralStrokeOnBrand2");
const colorNeutralStrokeOnBrand2Hover = create("colorNeutralStrokeOnBrand2Hover");
const colorNeutralStrokeOnBrand2Pressed = create("colorNeutralStrokeOnBrand2Pressed");
const colorNeutralStrokeOnBrand2Selected = create("colorNeutralStrokeOnBrand2Selected");
const colorBrandStroke1 = create("colorBrandStroke1");
const colorBrandStroke2 = create("colorBrandStroke2");
const colorCompoundBrandStroke = create("colorCompoundBrandStroke");
const colorCompoundBrandStrokeHover = create("colorCompoundBrandStrokeHover");
const colorCompoundBrandStrokePressed = create("colorCompoundBrandStrokePressed");
const colorNeutralStrokeDisabled = create("colorNeutralStrokeDisabled");
const colorNeutralStrokeInvertedDisabled = create("colorNeutralStrokeInvertedDisabled");
const colorTransparentStroke = create("colorTransparentStroke");
const colorTransparentStrokeInteractive = create("colorTransparentStrokeInteractive");
const colorTransparentStrokeDisabled = create("colorTransparentStrokeDisabled");
const colorStrokeFocus1 = create("colorStrokeFocus1");
const colorStrokeFocus2 = create("colorStrokeFocus2");
const colorNeutralShadowAmbient = create("colorNeutralShadowAmbient");
const colorNeutralShadowKey = create("colorNeutralShadowKey");
const colorNeutralShadowAmbientLighter = create("colorNeutralShadowAmbientLighter");
const colorNeutralShadowKeyLighter = create("colorNeutralShadowKeyLighter");
const colorNeutralShadowAmbientDarker = create("colorNeutralShadowAmbientDarker");
const colorNeutralShadowKeyDarker = create("colorNeutralShadowKeyDarker");
const colorBrandShadowAmbient = create("colorBrandShadowAmbient");
const colorBrandShadowKey = create("colorBrandShadowKey");
const colorPaletteRedBackground1 = create("colorPaletteRedBackground1");
const colorPaletteRedBackground2 = create("colorPaletteRedBackground2");
const colorPaletteRedBackground3 = create("colorPaletteRedBackground3");
const colorPaletteRedForeground1 = create("colorPaletteRedForeground1");
const colorPaletteRedForeground2 = create("colorPaletteRedForeground2");
const colorPaletteRedForeground3 = create("colorPaletteRedForeground3");
const colorPaletteRedBorderActive = create("colorPaletteRedBorderActive");
const colorPaletteRedBorder1 = create("colorPaletteRedBorder1");
const colorPaletteRedBorder2 = create("colorPaletteRedBorder2");
const colorPaletteGreenBackground1 = create("colorPaletteGreenBackground1");
const colorPaletteGreenBackground2 = create("colorPaletteGreenBackground2");
const colorPaletteGreenBackground3 = create("colorPaletteGreenBackground3");
const colorPaletteGreenForeground1 = create("colorPaletteGreenForeground1");
const colorPaletteGreenForeground2 = create("colorPaletteGreenForeground2");
const colorPaletteGreenForeground3 = create("colorPaletteGreenForeground3");
const colorPaletteGreenBorderActive = create("colorPaletteGreenBorderActive");
const colorPaletteGreenBorder1 = create("colorPaletteGreenBorder1");
const colorPaletteGreenBorder2 = create("colorPaletteGreenBorder2");
const colorPaletteDarkOrangeBackground1 = create("colorPaletteDarkOrangeBackground1");
const colorPaletteDarkOrangeBackground2 = create("colorPaletteDarkOrangeBackground2");
const colorPaletteDarkOrangeBackground3 = create("colorPaletteDarkOrangeBackground3");
const colorPaletteDarkOrangeForeground1 = create("colorPaletteDarkOrangeForeground1");
const colorPaletteDarkOrangeForeground2 = create("colorPaletteDarkOrangeForeground2");
const colorPaletteDarkOrangeForeground3 = create("colorPaletteDarkOrangeForeground3");
const colorPaletteDarkOrangeBorderActive = create("colorPaletteDarkOrangeBorderActive");
const colorPaletteDarkOrangeBorder1 = create("colorPaletteDarkOrangeBorder1");
const colorPaletteDarkOrangeBorder2 = create("colorPaletteDarkOrangeBorder2");
const colorPaletteYellowBackground1 = create("colorPaletteYellowBackground1");
const colorPaletteYellowBackground2 = create("colorPaletteYellowBackground2");
const colorPaletteYellowBackground3 = create("colorPaletteYellowBackground3");
const colorPaletteYellowForeground1 = create("colorPaletteYellowForeground1");
const colorPaletteYellowForeground2 = create("colorPaletteYellowForeground2");
const colorPaletteYellowForeground3 = create("colorPaletteYellowForeground3");
const colorPaletteYellowBorderActive = create("colorPaletteYellowBorderActive");
const colorPaletteYellowBorder1 = create("colorPaletteYellowBorder1");
const colorPaletteYellowBorder2 = create("colorPaletteYellowBorder2");
const colorPaletteBerryBackground1 = create("colorPaletteBerryBackground1");
const colorPaletteBerryBackground2 = create("colorPaletteBerryBackground2");
const colorPaletteBerryBackground3 = create("colorPaletteBerryBackground3");
const colorPaletteBerryForeground1 = create("colorPaletteBerryForeground1");
const colorPaletteBerryForeground2 = create("colorPaletteBerryForeground2");
const colorPaletteBerryForeground3 = create("colorPaletteBerryForeground3");
const colorPaletteBerryBorderActive = create("colorPaletteBerryBorderActive");
const colorPaletteBerryBorder1 = create("colorPaletteBerryBorder1");
const colorPaletteBerryBorder2 = create("colorPaletteBerryBorder2");
const colorPaletteLightGreenBackground1 = create("colorPaletteLightGreenBackground1");
const colorPaletteLightGreenBackground2 = create("colorPaletteLightGreenBackground2");
const colorPaletteLightGreenBackground3 = create("colorPaletteLightGreenBackground3");
const colorPaletteLightGreenForeground1 = create("colorPaletteLightGreenForeground1");
const colorPaletteLightGreenForeground2 = create("colorPaletteLightGreenForeground2");
const colorPaletteLightGreenForeground3 = create("colorPaletteLightGreenForeground3");
const colorPaletteLightGreenBorderActive = create("colorPaletteLightGreenBorderActive");
const colorPaletteLightGreenBorder1 = create("colorPaletteLightGreenBorder1");
const colorPaletteLightGreenBorder2 = create("colorPaletteLightGreenBorder2");
const colorPaletteMarigoldBackground1 = create("colorPaletteMarigoldBackground1");
const colorPaletteMarigoldBackground2 = create("colorPaletteMarigoldBackground2");
const colorPaletteMarigoldBackground3 = create("colorPaletteMarigoldBackground3");
const colorPaletteMarigoldForeground1 = create("colorPaletteMarigoldForeground1");
const colorPaletteMarigoldForeground2 = create("colorPaletteMarigoldForeground2");
const colorPaletteMarigoldForeground3 = create("colorPaletteMarigoldForeground3");
const colorPaletteMarigoldBorderActive = create("colorPaletteMarigoldBorderActive");
const colorPaletteMarigoldBorder1 = create("colorPaletteMarigoldBorder1");
const colorPaletteMarigoldBorder2 = create("colorPaletteMarigoldBorder2");
const colorPaletteDarkRedBackground2 = create("colorPaletteDarkRedBackground2");
const colorPaletteDarkRedForeground2 = create("colorPaletteDarkRedForeground2");
const colorPaletteDarkRedBorderActive = create("colorPaletteDarkRedBorderActive");
const colorPaletteCranberryBackground2 = create("colorPaletteCranberryBackground2");
const colorPaletteCranberryForeground2 = create("colorPaletteCranberryForeground2");
const colorPaletteCranberryBorderActive = create("colorPaletteCranberryBorderActive");
const colorPalettePumpkinBackground2 = create("colorPalettePumpkinBackground2");
const colorPalettePumpkinForeground2 = create("colorPalettePumpkinForeground2");
const colorPalettePumpkinBorderActive = create("colorPalettePumpkinBorderActive");
const colorPalettePeachBackground2 = create("colorPalettePeachBackground2");
const colorPalettePeachForeground2 = create("colorPalettePeachForeground2");
const colorPalettePeachBorderActive = create("colorPalettePeachBorderActive");
const colorPaletteGoldBackground2 = create("colorPaletteGoldBackground2");
const colorPaletteGoldForeground2 = create("colorPaletteGoldForeground2");
const colorPaletteGoldBorderActive = create("colorPaletteGoldBorderActive");
const colorPaletteBrassBackground2 = create("colorPaletteBrassBackground2");
const colorPaletteBrassForeground2 = create("colorPaletteBrassForeground2");
const colorPaletteBrassBorderActive = create("colorPaletteBrassBorderActive");
const colorPaletteBrownBackground2 = create("colorPaletteBrownBackground2");
const colorPaletteBrownForeground2 = create("colorPaletteBrownForeground2");
const colorPaletteBrownBorderActive = create("colorPaletteBrownBorderActive");
const colorPaletteForestBackground2 = create("colorPaletteForestBackground2");
const colorPaletteForestForeground2 = create("colorPaletteForestForeground2");
const colorPaletteForestBorderActive = create("colorPaletteForestBorderActive");
const colorPaletteSeafoamBackground2 = create("colorPaletteSeafoamBackground2");
const colorPaletteSeafoamForeground2 = create("colorPaletteSeafoamForeground2");
const colorPaletteSeafoamBorderActive = create("colorPaletteSeafoamBorderActive");
const colorPaletteDarkGreenBackground2 = create("colorPaletteDarkGreenBackground2");
const colorPaletteDarkGreenForeground2 = create("colorPaletteDarkGreenForeground2");
const colorPaletteDarkGreenBorderActive = create("colorPaletteDarkGreenBorderActive");
const colorPaletteLightTealBackground2 = create("colorPaletteLightTealBackground2");
const colorPaletteLightTealForeground2 = create("colorPaletteLightTealForeground2");
const colorPaletteLightTealBorderActive = create("colorPaletteLightTealBorderActive");
const colorPaletteTealBackground2 = create("colorPaletteTealBackground2");
const colorPaletteTealForeground2 = create("colorPaletteTealForeground2");
const colorPaletteTealBorderActive = create("colorPaletteTealBorderActive");
const colorPaletteSteelBackground2 = create("colorPaletteSteelBackground2");
const colorPaletteSteelForeground2 = create("colorPaletteSteelForeground2");
const colorPaletteSteelBorderActive = create("colorPaletteSteelBorderActive");
const colorPaletteBlueBackground2 = create("colorPaletteBlueBackground2");
const colorPaletteBlueForeground2 = create("colorPaletteBlueForeground2");
const colorPaletteBlueBorderActive = create("colorPaletteBlueBorderActive");
const colorPaletteRoyalBlueBackground2 = create("colorPaletteRoyalBlueBackground2");
const colorPaletteRoyalBlueForeground2 = create("colorPaletteRoyalBlueForeground2");
const colorPaletteRoyalBlueBorderActive = create("colorPaletteRoyalBlueBorderActive");
const colorPaletteCornflowerBackground2 = create("colorPaletteCornflowerBackground2");
const colorPaletteCornflowerForeground2 = create("colorPaletteCornflowerForeground2");
const colorPaletteCornflowerBorderActive = create("colorPaletteCornflowerBorderActive");
const colorPaletteNavyBackground2 = create("colorPaletteNavyBackground2");
const colorPaletteNavyForeground2 = create("colorPaletteNavyForeground2");
const colorPaletteNavyBorderActive = create("colorPaletteNavyBorderActive");
const colorPaletteLavenderBackground2 = create("colorPaletteLavenderBackground2");
const colorPaletteLavenderForeground2 = create("colorPaletteLavenderForeground2");
const colorPaletteLavenderBorderActive = create("colorPaletteLavenderBorderActive");
const colorPalettePurpleBackground2 = create("colorPalettePurpleBackground2");
const colorPalettePurpleForeground2 = create("colorPalettePurpleForeground2");
const colorPalettePurpleBorderActive = create("colorPalettePurpleBorderActive");
const colorPaletteGrapeBackground2 = create("colorPaletteGrapeBackground2");
const colorPaletteGrapeForeground2 = create("colorPaletteGrapeForeground2");
const colorPaletteGrapeBorderActive = create("colorPaletteGrapeBorderActive");
const colorPaletteLilacBackground2 = create("colorPaletteLilacBackground2");
const colorPaletteLilacForeground2 = create("colorPaletteLilacForeground2");
const colorPaletteLilacBorderActive = create("colorPaletteLilacBorderActive");
const colorPalettePinkBackground2 = create("colorPalettePinkBackground2");
const colorPalettePinkForeground2 = create("colorPalettePinkForeground2");
const colorPalettePinkBorderActive = create("colorPalettePinkBorderActive");
const colorPaletteMagentaBackground2 = create("colorPaletteMagentaBackground2");
const colorPaletteMagentaForeground2 = create("colorPaletteMagentaForeground2");
const colorPaletteMagentaBorderActive = create("colorPaletteMagentaBorderActive");
const colorPalettePlumBackground2 = create("colorPalettePlumBackground2");
const colorPalettePlumForeground2 = create("colorPalettePlumForeground2");
const colorPalettePlumBorderActive = create("colorPalettePlumBorderActive");
const colorPaletteBeigeBackground2 = create("colorPaletteBeigeBackground2");
const colorPaletteBeigeForeground2 = create("colorPaletteBeigeForeground2");
const colorPaletteBeigeBorderActive = create("colorPaletteBeigeBorderActive");
const colorPaletteMinkBackground2 = create("colorPaletteMinkBackground2");
const colorPaletteMinkForeground2 = create("colorPaletteMinkForeground2");
const colorPaletteMinkBorderActive = create("colorPaletteMinkBorderActive");
const colorPalettePlatinumBackground2 = create("colorPalettePlatinumBackground2");
const colorPalettePlatinumForeground2 = create("colorPalettePlatinumForeground2");
const colorPalettePlatinumBorderActive = create("colorPalettePlatinumBorderActive");
const colorPaletteAnchorBackground2 = create("colorPaletteAnchorBackground2");
const colorPaletteAnchorForeground2 = create("colorPaletteAnchorForeground2");
const colorPaletteAnchorBorderActive = create("colorPaletteAnchorBorderActive");
const colorPaletteRedForegroundInverted = create("colorPaletteRedForegroundInverted");
const colorPaletteGreenForegroundInverted = create("colorPaletteGreenForegroundInverted");
const colorPaletteYellowForegroundInverted = create("colorPaletteYellowForegroundInverted");
const shadow2 = create("shadow2");
const shadow4 = create("shadow4");
const shadow8 = create("shadow8");
const shadow16 = create("shadow16");
const shadow28 = create("shadow28");
const shadow64 = create("shadow64");
const shadow2Brand = create("shadow2Brand");
const shadow4Brand = create("shadow4Brand");
const shadow8Brand = create("shadow8Brand");
const shadow16Brand = create("shadow16Brand");
const shadow28Brand = create("shadow28Brand");
const shadow64Brand = create("shadow64Brand");

},{"@microsoft/fast-foundation/design-token.js":"l8mui","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8mui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DesignTokenStyleTarget", ()=>(0, _designTokenStyleTargetJs.DesignTokenStyleTarget));
parcelHelpers.export(exports, "DesignTokenEventResolutionStrategy", ()=>(0, _eventStrategyJs.DesignTokenEventResolutionStrategy));
parcelHelpers.export(exports, "CSSDesignToken", ()=>(0, _fastDesignTokenJs.CSSDesignToken));
parcelHelpers.export(exports, "DesignToken", ()=>(0, _fastDesignTokenJs.DesignToken));
var _designTokenStyleTargetJs = require("./design-token-style-target.js");
var _eventStrategyJs = require("./event-strategy.js");
var _fastDesignTokenJs = require("./fast-design-token.js");

},{"./design-token-style-target.js":false,"./event-strategy.js":false,"./fast-design-token.js":"bGtba","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGtba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @public
 */ parcelHelpers.export(exports, "DesignToken", ()=>DesignToken);
parcelHelpers.export(exports, "CSSDesignToken", ()=>CSSDesignToken);
var _tslib = require("tslib");
var _fastElement = require("@microsoft/fast-element");
var _utilitiesJs = require("@microsoft/fast-element/utilities.js");
var _designTokenNodeJs = require("./core/design-token-node.js");
var _customPropertyManagerJs = require("./custom-property-manager.js");
class DesignToken {
    constructor(configuration){
        this.subscriberNotifier = {
            handleChange: (source, change)=>{
                const record = {
                    target: change.target === FASTDesignTokenNode.defaultNode ? "default" : change.target.target,
                    token: this
                };
                this.subscribers.notify(record);
            }
        };
        this.name = configuration.name;
        (0, _fastElement.Observable).getNotifier(this).subscribe(this.subscriberNotifier);
    }
    /**
     * The default value of the token (alias of {@link DesignToken.default})
     */ get $value() {
        return this.default;
    }
    /**
     * The default value of the token, or undefined if it has not been set.
     */ get default() {
        return FASTDesignTokenNode.defaultNode.getTokenValue(this);
    }
    get subscribers() {
        if (this._subscribers) return this._subscribers;
        this._subscribers = new (0, _fastElement.SubscriberSet)(this);
        return this._subscribers;
    }
    static isCSSDesignTokenConfiguration(config) {
        return typeof config.cssCustomPropertyName === "string";
    }
    static create(config) {
        if (typeof config === "string") return new CSSDesignToken({
            name: config,
            cssCustomPropertyName: config
        });
        else return DesignToken.isCSSDesignTokenConfiguration(config) ? new CSSDesignToken(config) : new DesignToken(config);
    }
    /**
     * Configures the strategy for resolving hierarchical relationships between FASTElement targets.
     */ static withStrategy(strategy) {
        FASTDesignTokenNode.withStrategy(strategy);
    }
    /**
     * Registers a target for emitting default style values.
     * {@link CSSDesignToken | CSSDesignTokens} with default values assigned via
     * {@link DesignToken.withDefault} will emit CSS custom properties to all
     * registered targets.
     * @param target - The target to register, defaults to the document
     */ static registerDefaultStyleTarget(target = document) {
        if (target instanceof (0, _fastElement.FASTElement) || target instanceof Document) target = (0, _customPropertyManagerJs.PropertyTargetManager).getOrCreate(target);
        (0, _customPropertyManagerJs.RootStyleSheetTarget).registerRoot(target);
    }
    /**
     * Unregister a target for default style emission.
     * @param target - The root to deregister, defaults to the document
     */ static unregisterDefaultStyleTarget(target = document) {
        if (target instanceof (0, _fastElement.FASTElement) || target instanceof Document) target = (0, _customPropertyManagerJs.PropertyTargetManager).getOrCreate(target);
        (0, _customPropertyManagerJs.RootStyleSheetTarget).unregisterRoot(target);
    }
    /**
     * Retrieves the value of the token for a target element.
     */ getValueFor(target) {
        return FASTDesignTokenNode.getOrCreate(target).getTokenValue(this);
    }
    /**
     * Sets the value of the token for a target element.
     */ setValueFor(target, value) {
        FASTDesignTokenNode.getOrCreate(target).setTokenValue(this, this.normalizeValue(value));
    }
    /**
     * Deletes the value of the token for a target element.
     */ deleteValueFor(target) {
        FASTDesignTokenNode.getOrCreate(target).deleteTokenValue(this);
        return this;
    }
    /**
     * Sets the default value of the token.
     */ withDefault(value) {
        FASTDesignTokenNode.defaultNode.setTokenValue(this, this.normalizeValue(value));
        return this;
    }
    /**
     * Subscribes a subscriber to notifications for the token.
     */ subscribe(subscriber) {
        this.subscribers.subscribe(subscriber);
    }
    /**
     * Unsubscribes a subscriber to notifications for the token.
     */ unsubscribe(subscriber) {
        this.subscribers.unsubscribe(subscriber);
    }
    /**
     * Alias the token to the provided token.
     * @param token - the token to alias to
     */ alias(token) {
        return (resolve)=>resolve(token);
    }
    normalizeValue(value) {
        if (value instanceof DesignToken) value = this.alias(value);
        return value;
    }
}
/**
 * @public
 */ let CSSDesignToken = class CSSDesignToken extends DesignToken {
    constructor(configuration){
        super(configuration);
        this.cssReflector = {
            handleChange: (source, record)=>{
                const target = record.target === FASTDesignTokenNode.defaultNode ? FASTDesignTokenNode.rootStyleSheetTarget : record.target instanceof FASTDesignTokenNode ? (0, _customPropertyManagerJs.PropertyTargetManager).getOrCreate(record.target.target) : null;
                if (target) {
                    if (record.type === 2 /* DesignTokenMutationType.delete */ ) target.removeProperty(this.cssCustomProperty);
                    else target.setProperty(this.cssCustomProperty, this.resolveCSSValue(record.target.getTokenValue(this)));
                }
            }
        };
        this.cssCustomProperty = `--${configuration.cssCustomPropertyName}`;
        this.cssVar = `var(${this.cssCustomProperty})`;
        (0, _fastElement.Observable).getNotifier(this).subscribe(this.cssReflector);
    }
    /**
     * The DesignToken represented as a string that can be used in CSS.
     */ createCSS() {
        return this.cssVar;
    }
    /**
     * Creates HTML to be used within a template.
     */ createHTML() {
        return this.cssVar;
    }
    resolveCSSValue(value) {
        return value && typeof value.createCSS === "function" ? value.createCSS() : value;
    }
};
CSSDesignToken = (0, _tslib.__decorate)([
    (0, _fastElement.cssDirective)(),
    (0, _fastElement.htmlDirective)()
], CSSDesignToken);
const defaultDesignTokenResolutionStrategy = {
    contains: (0, _utilitiesJs.composedContains),
    parent (element) {
        let parent = (0, _utilitiesJs.composedParent)(element);
        while(parent !== null){
            if (parent instanceof (0, _fastElement.FASTElement)) return parent;
            parent = (0, _utilitiesJs.composedParent)(parent);
        }
        return null;
    }
};
class FASTDesignTokenNode extends (0, _designTokenNodeJs.DesignTokenNode) {
    constructor(target){
        super();
        this.target = target;
        // By default, nodes are not attached to the defaultNode for performance
        // reasons. However, that behavior can throw if retrieval for a node
        // happens before the bind() method is called. To guard against that,
        //  lazily attach to the defaultNode when get/set/delete methods are called.
        this.setTokenValue = this.lazyAttachToDefault(super.setTokenValue);
        this.getTokenValue = this.lazyAttachToDefault(super.getTokenValue);
        this.deleteTokenValue = this.lazyAttachToDefault(super.deleteTokenValue);
    }
    static get strategy() {
        if (this._strategy === undefined) FASTDesignTokenNode.withStrategy(defaultDesignTokenResolutionStrategy);
        return this._strategy;
    }
    connectedCallback(controller) {
        let parent = FASTDesignTokenNode.findParent(controller.source);
        if (parent === null) parent = FASTDesignTokenNode.defaultNode;
        if (parent !== this.parent) {
            const reparent = [];
            for (const child of parent.children)if (child instanceof FASTDesignTokenNode && FASTDesignTokenNode.strategy.contains(controller.source, child.target)) reparent.push(child);
            parent.appendChild(this);
            for (const child of reparent)this.appendChild(child);
        }
    }
    disconnectedCallback(controller) {
        FASTDesignTokenNode.cache.delete(this.target);
        this.dispose();
    }
    static getOrCreate(target) {
        let found = FASTDesignTokenNode.cache.get(target);
        if (found) return found;
        found = new FASTDesignTokenNode(target);
        FASTDesignTokenNode.cache.set(target, found);
        target.$fastController.addBehavior(FASTDesignTokenNode.strategy);
        target.$fastController.addBehavior(found);
        return found;
    }
    static withStrategy(strategy) {
        this._strategy = strategy;
    }
    static findParent(target) {
        let current = FASTDesignTokenNode.strategy.parent(target);
        while(current !== null){
            const node = FASTDesignTokenNode.cache.get(current);
            if (node) return node;
            current = FASTDesignTokenNode.strategy.parent(current);
        }
        return null;
    }
    /**
     * Creates a function from a function that lazily attaches the node to the default node.
     */ lazyAttachToDefault(fn) {
        const cb = (...args)=>{
            if (this.parent === null) FASTDesignTokenNode.defaultNode.appendChild(this);
            return fn.apply(this, args);
        };
        return cb;
    }
}
FASTDesignTokenNode.defaultNode = new (0, _designTokenNodeJs.DesignTokenNode)();
FASTDesignTokenNode.rootStyleSheetTarget = new (0, _customPropertyManagerJs.RootStyleSheetTarget)();
FASTDesignTokenNode.cache = new WeakMap();

},{"tslib":"8wyHd","@microsoft/fast-element":"j6ee6","@microsoft/fast-element/utilities.js":"lI4Oy","./core/design-token-node.js":"cSzu5","./custom-property-manager.js":"6RlME","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lI4Oy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieves the "composed parent" element of a node, ignoring DOM tree boundaries.
 * When the parent of a node is a shadow-root, it will return the host
 * element of the shadow root. Otherwise it will return the parent node or null if
 * no parent node exists.
 * @param element - The element for which to retrieve the composed parent
 *
 * @public
 */ parcelHelpers.export(exports, "composedParent", ()=>composedParent);
/**
 * Determines if the reference element contains the test element in a "composed" DOM tree that
 * ignores shadow DOM boundaries.
 *
 * Returns true of the test element is a descendent of the reference, or exists in
 * a shadow DOM that is a logical descendent of the reference. Otherwise returns false.
 * @param reference - The element to test for containment against.
 * @param test - The element being tested for containment.
 *
 * @public
 */ parcelHelpers.export(exports, "composedContains", ()=>composedContains);
/**
 * An extension of MutationObserver that supports unobserving nodes.
 * @internal
 */ parcelHelpers.export(exports, "UnobservableMutationObserver", ()=>UnobservableMutationObserver);
parcelHelpers.export(exports, "ViewBehaviorOrchestrator", ()=>ViewBehaviorOrchestrator);
var _domJs = require("./dom.js");
var _observableJs = require("./observation/observable.js");
var _markupJs = require("./templating/markup.js");
function composedParent(element) {
    const parentNode = element.parentElement;
    if (parentNode) return parentNode;
    else {
        const rootNode = element.getRootNode();
        if (rootNode.host instanceof HTMLElement) // this is shadow-root
        return rootNode.host;
    }
    return null;
}
function composedContains(reference, test) {
    let current = test;
    while(current !== null){
        if (current === reference) return true;
        current = composedParent(current);
    }
    return false;
}
class UnobservableMutationObserver extends MutationObserver {
    /**
     * Creates an instance of UnobservableMutationObserver.
     * @param callback - The callback to invoke when observed nodes are changed.
     */ constructor(callback){
        function handler(mutations) {
            this.callback.call(null, mutations.filter((record)=>this.observedNodes.has(record.target)));
        }
        super(handler);
        this.callback = callback;
        this.observedNodes = new Set();
    }
    observe(target, options) {
        this.observedNodes.add(target);
        super.observe(target, options);
    }
    unobserve(target) {
        this.observedNodes.delete(target);
        if (this.observedNodes.size < 1) this.disconnect();
    }
}
const ViewBehaviorOrchestrator = Object.freeze({
    /**
     * Creates a ViewBehaviorOrchestrator.
     * @param source - The source to to associate behaviors with.
     * @returns A ViewBehaviorOrchestrator.
     */ create (source) {
        const behaviors = [];
        const targets = {};
        let unbindables = null;
        let isConnected = false;
        return {
            source,
            context: (0, _observableJs.ExecutionContext).default,
            targets,
            get isBound () {
                return isConnected;
            },
            addBehaviorFactory (factory, target) {
                var _a, _b, _c, _d;
                const compiled = factory;
                compiled.id = (_a = compiled.id) !== null && _a !== void 0 ? _a : (0, _markupJs.nextId)();
                compiled.targetNodeId = (_b = compiled.targetNodeId) !== null && _b !== void 0 ? _b : (0, _markupJs.nextId)();
                compiled.targetTagName = (_c = target.tagName) !== null && _c !== void 0 ? _c : null;
                compiled.policy = (_d = compiled.policy) !== null && _d !== void 0 ? _d : (0, _domJs.DOM).policy;
                this.addTarget(compiled.targetNodeId, target);
                this.addBehavior(compiled.createBehavior());
            },
            addTarget (nodeId, target) {
                targets[nodeId] = target;
            },
            addBehavior (behavior) {
                behaviors.push(behavior);
                if (isConnected) behavior.bind(this);
            },
            onUnbind (unbindable) {
                if (unbindables === null) unbindables = [];
                unbindables.push(unbindable);
            },
            connectedCallback (controller) {
                if (!isConnected) {
                    isConnected = true;
                    behaviors.forEach((x)=>x.bind(this));
                }
            },
            disconnectedCallback (controller) {
                if (isConnected) {
                    isConnected = false;
                    if (unbindables !== null) unbindables.forEach((x)=>x.unbind(this));
                }
            }
        };
    }
});

},{"./dom.js":"9qDgN","./observation/observable.js":"a7TJ2","./templating/markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSzu5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "DesignTokenChangeRecordImpl", ()=>DesignTokenChangeRecordImpl);
/**
 * @public
 */ parcelHelpers.export(exports, "DesignTokenNode", ()=>DesignTokenNode);
var _fastElement = require("@microsoft/fast-element");
class DerivedValueEvaluator {
    constructor(value){
        this.value = value;
        this.notifier = (0, _fastElement.Observable).getNotifier(this);
        this.dependencies = new Set();
        this.binding = (0, _fastElement.Observable).binding(value, this);
        this.binding.setMode(false);
    }
    static getOrCreate(value) {
        let v = DerivedValueEvaluator.cache.get(value);
        if (v) return v;
        v = new DerivedValueEvaluator(value);
        DerivedValueEvaluator.cache.set(value, v);
        return v;
    }
    evaluate(node, tokenContext) {
        const resolve = (token)=>{
            this.dependencies.add(token);
            if (tokenContext === token) {
                if (node.parent) return node.parent.getTokenValue(token);
                throw new Error("DesignTokenNode has encountered a circular token reference. Avoid this by setting the token value for an ancestor node.");
            } else return node.getTokenValue(token);
        };
        return this.binding.observe(resolve);
    }
    handleChange() {
        this.notifier.notify(undefined);
    }
}
DerivedValueEvaluator.cache = new WeakMap();
class DerivedValue {
    constructor(token, evaluator, node, subscriber){
        this.token = token;
        this.evaluator = evaluator;
        this.node = node;
        this.subscriber = subscriber;
        this.value = evaluator.evaluate(node, token);
        if (this.subscriber) (0, _fastElement.Observable).getNotifier(this.evaluator).subscribe(this.subscriber);
    }
    dispose() {
        if (this.subscriber) (0, _fastElement.Observable).getNotifier(this.evaluator).unsubscribe(this.subscriber);
    }
    update() {
        this.value = this.evaluator.evaluate(this.node, this.token);
        return this;
    }
}
class DesignTokenChangeRecordImpl {
    constructor(target, type, token, value){
        this.target = target;
        this.type = type;
        this.token = token;
        this.value = value;
    }
    notify() {
        (0, _fastElement.Observable).getNotifier(this.token).notify(this);
    }
}
class DesignTokenNode {
    constructor(){
        this._parent = null;
        this._children = new Set();
        this._values = new Map();
        this._derived = new Map();
        this.dependencyGraph = new Map();
    }
    /**
     * Determines if a value is a {@link DerivedDesignTokenValue}
     * @param value - The value to test
     */ static isDerivedTokenValue(value) {
        return typeof value === "function";
    }
    /**
     * Determines if a token has a derived value for a node.
     */ static isDerivedFor(node, token) {
        return node._derived.has(token);
    }
    /**
     * Collects token/value pairs for all derived token / values set on upstream nodes.
     */ static collectDerivedContext(node) {
        const collected = new Map();
        // Exit early if  there is no parent
        if (node.parent === null) return collected;
        let ignored = DesignTokenNode.getAssignedTokensForNode(node);
        let current = node.parent;
        do {
            const assigned = DesignTokenNode.getAssignedTokensForNode(current);
            for(let i = 0, l = assigned.length; i < l; i++){
                const token = assigned[i];
                if (!ignored.includes(token) && DesignTokenNode.isDerivedFor(current, token)) collected.set(token, current._derived.get(token));
            }
            ignored = Array.from(new Set(ignored.concat(assigned)));
            current = current.parent;
        }while (current !== null);
        return collected;
    }
    /**
     * Resolves the local value for a token if it is assigned, otherwise returns undefined.
     */ static getLocalTokenValue(node, token) {
        return !DesignTokenNode.isAssigned(node, token) ? undefined : DesignTokenNode.isDerivedFor(node, token) ? node._derived.get(token).value : node._values.get(token);
    }
    static getOrCreateDependencyGraph(node, token) {
        let dependents = node.dependencyGraph.get(token);
        if (dependents) return dependents;
        dependents = new Set();
        node.dependencyGraph.set(token, dependents);
        return dependents;
    }
    /**
     * Emit all queued notifications
     */ static notify() {
        const notifications = this._notifications;
        this._notifications = [];
        for (const record of notifications)record.notify();
    }
    static queueNotification(...records) {
        this._notifications.push(...records);
    }
    /**
     * Retrieves all tokens assigned directly to a node.
     * @param node - the node to retrieve assigned tokens for
     * @returns
     */ static getAssignedTokensForNode(node) {
        return Array.from(node._values.keys());
    }
    /**
     * Retrieves all tokens assigned to the node and ancestor nodes.
     * @param node - the node to compose assigned tokens for
     */ static composeAssignedTokensForNode(node) {
        const tokens = new Set(DesignTokenNode.getAssignedTokensForNode(node));
        let current = node.parent;
        while(current !== null){
            const assignedTokens = DesignTokenNode.getAssignedTokensForNode(current);
            for (const token of assignedTokens)tokens.add(token);
            current = current.parent;
        }
        return Array.from(tokens);
    }
    /**
     * Tests if a token is assigned directly to a node
     * @param node - The node to test
     * @param token  - The token to test
     * @returns
     */ static isAssigned(node, token) {
        return node._values.has(token);
    }
    /**
     * The parent node
     */ get parent() {
        return this._parent;
    }
    get children() {
        return Array.from(this._children);
    }
    /**
     * Appends a child to the node, notifying for any tokens set for the node's context.
     */ appendChild(child) {
        var _a, _b;
        let prevContext = null;
        // If this node is already attached, get it's context so change record
        // types can be determined
        if (child.parent !== null) {
            prevContext = DesignTokenNode.composeAssignedTokensForNode(child.parent);
            child.parent._children.delete(child);
        }
        const context = DesignTokenNode.composeAssignedTokensForNode(this);
        const derivedContext = DesignTokenNode.collectDerivedContext(this);
        child._parent = this;
        this._children.add(child);
        for (const token of context){
            let type = 0 /* DesignTokenMutationType.add */ ;
            if (prevContext !== null) {
                const prevContextIndex = prevContext.indexOf(token);
                if (prevContextIndex !== -1) {
                    type = 1 /* DesignTokenMutationType.change */ ;
                    prevContext.splice(prevContextIndex, 1);
                }
            }
            child.dispatch(new DesignTokenChangeRecordImpl(this, type, token, (_a = derivedContext.get(token)) === null || _a === void 0 ? void 0 : _a.evaluator.value));
        }
        if (prevContext !== null && prevContext.length > 0) for (const token of prevContext)child.dispatch(new DesignTokenChangeRecordImpl(this, 2 /* DesignTokenMutationType.delete */ , token, (_b = derivedContext.get(token)) === null || _b === void 0 ? void 0 : _b.evaluator.value));
        DesignTokenNode.notify();
    }
    /**
     * Appends a child to the node, notifying for any tokens set for the node's context.
     */ removeChild(child) {
        if (child.parent === this) {
            const context = DesignTokenNode.composeAssignedTokensForNode(this);
            child._parent = null;
            this._children.delete(child);
            for (const token of context)child.dispatch(new DesignTokenChangeRecordImpl(this, 2 /* DesignTokenMutationType.delete */ , token));
            DesignTokenNode.notify();
        }
    }
    /**
     * Dispose of the node, removing parent/child relationships and
     * unsubscribing all observable binding subscribers. Does not emit
     * notifications.
     */ dispose() {
        if (this.parent) {
            this.parent._children.delete(this);
            this._parent = null;
        }
        for (const [, derived] of this._derived)derived.dispose();
    }
    /**
     * Sets a token to a value
     */ setTokenValue(token, value) {
        const changeType = DesignTokenNode.isAssigned(this, token) || DesignTokenNode.isDerivedFor(this, token) ? 1 /* DesignTokenMutationType.change */  : 0 /* DesignTokenMutationType.add */ ;
        const prev = DesignTokenNode.getLocalTokenValue(this, token);
        this._values.set(token, value);
        if (DesignTokenNode.isDerivedFor(this, token)) this.tearDownDerivedTokenValue(token);
        const isDerived = DesignTokenNode.isDerivedTokenValue(value);
        const derivedContext = DesignTokenNode.collectDerivedContext(this);
        let result;
        if (isDerived) {
            const evaluator = this.setupDerivedTokenValue(token, value, true);
            result = evaluator.value;
        } else result = value;
        if (prev !== result) DesignTokenNode.queueNotification(new DesignTokenChangeRecordImpl(this, changeType, token, value));
        this.dispatch(new DesignTokenChangeRecordImpl(this, changeType, token, value));
        derivedContext.forEach((derivedValue, token)=>{
            // Skip over any derived values already established locally, because
            // those will get updated via this.notifyDerived and this.notifyStatic
            if (!DesignTokenNode.isDerivedFor(this, token)) {
                const prev = DesignTokenNode.getLocalTokenValue(this, token);
                derivedValue = this.setupDerivedTokenValue(token, derivedValue.evaluator.value);
                const result = derivedValue.value;
                if (prev !== result) DesignTokenNode.queueNotification(new DesignTokenChangeRecordImpl(this, 1 /* DesignTokenMutationType.change */ , token, derivedValue.evaluator.value));
                this.dispatch(new DesignTokenChangeRecordImpl(this, 0 /* DesignTokenMutationType.add */ , token, derivedValue.evaluator.value));
            }
        });
        DesignTokenNode.notify();
    }
    /**
     * Returns the resolve value for a token
     */ getTokenValue(token) {
        /* eslint-disable-next-line */ let node = this;
        let value;
        while(node !== null){
            if (DesignTokenNode.isDerivedFor(node, token)) {
                value = node._derived.get(token).value;
                break;
            }
            if (DesignTokenNode.isAssigned(node, token)) {
                value = node._values.get(token);
                break;
            }
            node = node._parent;
        }
        if (value !== undefined) return value;
        else throw new Error(`No value set for token ${token} in node tree.`);
    }
    /**
     * Deletes the token value for a node
     */ deleteTokenValue(token) {
        if (DesignTokenNode.isAssigned(this, token)) {
            const prev = DesignTokenNode.getLocalTokenValue(this, token);
            this._values.delete(token);
            this.tearDownDerivedTokenValue(token);
            let newValue;
            try {
                newValue = this.getTokenValue(token);
            } catch (e) {
                newValue = undefined;
            }
            DesignTokenNode.queueNotification(new DesignTokenChangeRecordImpl(this, 2 /* DesignTokenMutationType.delete */ , token));
            if (prev !== newValue) this.dispatch(new DesignTokenChangeRecordImpl(this, 2 /* DesignTokenMutationType.delete */ , token));
            DesignTokenNode.notify();
        }
    }
    /**
     * Notifies that a token has been mutated
     */ dispatch(record) {
        var _a, _b, _c;
        if (this !== record.target) {
            const { token } = record;
            // If the node is assigned the token being dispatched and the assigned value does not depend on the token
            // (circular token reference) then terminate the dispatch.
            const isAssigned = DesignTokenNode.isAssigned(this, token);
            const containsCircularForToken = isAssigned && ((_a = this._derived.get(token)) === null || _a === void 0 ? void 0 : _a.evaluator.dependencies.has(token));
            if (isAssigned && !containsCircularForToken) return;
            // Delete token evaluations if the token is not assigned explicitly but is derived for the node and
            // the record is a delete type.
            if (record.type === 2 /* DesignTokenMutationType.delete */  && !isAssigned && DesignTokenNode.isDerivedFor(this, token)) {
                this.tearDownDerivedTokenValue(token);
                DesignTokenNode.queueNotification(new DesignTokenChangeRecordImpl(this, 2 /* DesignTokenMutationType.delete */ , token));
            }
            if (containsCircularForToken) record = new DesignTokenChangeRecordImpl(this, 1 /* DesignTokenMutationType.change */ , token, (_b = this._derived.get(token)) === null || _b === void 0 ? void 0 : _b.evaluator.value);
            const { value } = record;
            if (value && DesignTokenNode.isDerivedTokenValue(value)) {
                const dependencies = DerivedValueEvaluator.getOrCreate(value).dependencies;
                // If this is not the originator, check to see if this node
                // has any dependencies of the token value. If so, we need to evaluate for this node
                let evaluate = false;
                for (const dependency of dependencies)if (DesignTokenNode.isAssigned(this, dependency)) {
                    evaluate = true;
                    break;
                }
                if (evaluate) {
                    const prev = (_c = this._derived.get(token)) === null || _c === void 0 ? void 0 : _c.value;
                    const derivedValue = this.setupDerivedTokenValue(token, value);
                    if (prev !== derivedValue.value) {
                        const type = prev === undefined ? 0 /* DesignTokenMutationType.add */  : 1 /* DesignTokenMutationType.change */ ;
                        const notification = new DesignTokenChangeRecordImpl(this, type, token, derivedValue.evaluator.value);
                        DesignTokenNode.queueNotification(notification);
                        record = notification;
                    }
                }
            }
        }
        this.collectLocalChangeRecords(record).forEach((_record)=>{
            DesignTokenNode.queueNotification(_record);
            this.dispatch(_record);
        });
        this.notifyChildren(record);
    }
    /**
     * Generate change-records for local dependencies of a change record
     */ collectLocalChangeRecords(record) {
        const collected = new Map();
        for (const dependent of DesignTokenNode.getOrCreateDependencyGraph(this, record.token))if (dependent.value !== dependent.update().value) collected.set(dependent.token, new DesignTokenChangeRecordImpl(this, 1 /* DesignTokenMutationType.change */ , dependent.token, dependent.evaluator.value));
        return collected;
    }
    /**
     *
     * Notify children of changes to the node
     */ notifyChildren(...records) {
        if (this.children.length) {
            for(let i = 0, l = this.children.length; i < l; i++)for(let j = 0; j < records.length; j++)this.children[i].dispatch(records[j]);
        }
    }
    tearDownDerivedTokenValue(token) {
        if (DesignTokenNode.isDerivedFor(this, token)) {
            const value = this._derived.get(token);
            value.dispose();
            this._derived.delete(token);
            value.evaluator.dependencies.forEach((dependency)=>{
                DesignTokenNode.getOrCreateDependencyGraph(this, dependency).delete(value);
            });
        }
    }
    setupDerivedTokenValue(token, value, subscribeNode = false) {
        const deriver = new DerivedValue(token, DerivedValueEvaluator.getOrCreate(value), this, subscribeNode ? {
            handleChange: ()=>{
                if (deriver.value !== deriver.update().value) {
                    const record = new DesignTokenChangeRecordImpl(this, 1 /* DesignTokenMutationType.change */ , deriver.token, deriver.evaluator.value);
                    DesignTokenNode.queueNotification(record);
                    this.dispatch(record);
                    DesignTokenNode.notify();
                }
            }
        } : undefined);
        this._derived.set(token, deriver);
        deriver.evaluator.dependencies.forEach((dependency)=>{
            if (dependency !== token) DesignTokenNode.getOrCreateDependencyGraph(this, dependency).add(deriver);
        });
        return deriver;
    }
}
DesignTokenNode._notifications = [];

},{"@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6RlME":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Controls emission for default values. This control is capable
 * of emitting to multiple {@link PropertyTarget | PropertyTargets},
 * and only emits if it has at least one root.
 *
 * @internal
 */ parcelHelpers.export(exports, "RootStyleSheetTarget", ()=>RootStyleSheetTarget);
parcelHelpers.export(exports, "PropertyTargetManager", ()=>PropertyTargetManager);
var _tslib = require("tslib");
var _fastElement = require("@microsoft/fast-element");
class QueuedStyleSheetTarget {
    setProperty(name, value) {
        (0, _fastElement.Updates).enqueue(()=>this.target.setProperty(name, value));
    }
    removeProperty(name) {
        (0, _fastElement.Updates).enqueue(()=>this.target.removeProperty(name));
    }
}
/**
 * Handles setting properties for a FASTElement using Constructable Stylesheets
 */ class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor(source){
        super();
        const sheet = new CSSStyleSheet();
        this.target = sheet.cssRules[sheet.insertRule(":host{}")].style;
        source.$fastController.addStyles(new (0, _fastElement.ElementStyles)([
            sheet
        ]));
    }
}
class DocumentStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor(){
        super();
        const sheet = new CSSStyleSheet();
        this.target = sheet.cssRules[sheet.insertRule(":root{}")].style;
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            sheet
        ];
    }
}
class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget {
    constructor(){
        super();
        this.style = document.createElement("style");
        document.head.appendChild(this.style);
        const { sheet } = this.style;
        // Because the HTMLStyleElement has been appended,
        // there shouldn't exist a case where `sheet` is null,
        // but if-check it just in case.
        if (sheet) {
            // https://github.com/jsdom/jsdom uses https://github.com/NV/CSSOM for it's CSSOM implementation,
            // which implements the DOM Level 2 spec for CSSStyleSheet where insertRule() requires an index argument.
            const index = sheet.insertRule(":root{}", sheet.cssRules.length);
            this.target = sheet.cssRules[index].style;
        }
    }
}
/**
 * Handles setting properties for a FASTElement using an HTMLStyleElement
 */ class StyleElementStyleSheetTarget {
    constructor(target){
        this.store = new Map();
        this.target = null;
        const controller = target.$fastController;
        this.style = document.createElement("style");
        controller.addStyles(this.style);
        (0, _fastElement.Observable).getNotifier(controller).subscribe(this, "isConnected");
        this.handleChange(controller, "isConnected");
    }
    targetChanged() {
        if (this.target !== null) for (const [key, value] of this.store.entries())this.target.setProperty(key, value);
    }
    setProperty(name, value) {
        this.store.set(name, value);
        (0, _fastElement.Updates).enqueue(()=>{
            if (this.target !== null) this.target.setProperty(name, value);
        });
    }
    removeProperty(name) {
        this.store.delete(name);
        (0, _fastElement.Updates).enqueue(()=>{
            if (this.target !== null) this.target.removeProperty(name);
        });
    }
    handleChange(source, key) {
        // HTMLStyleElement.sheet is null if the element isn't connected to the DOM,
        // so this method reacts to changes in DOM connection for the element hosting
        // the HTMLStyleElement.
        //
        // All rules applied via the CSSOM also get cleared when the element disconnects,
        // so we need to add a new rule each time and populate it with the stored properties
        const { sheet } = this.style;
        if (sheet) {
            // Safari will throw if we try to use the return result of insertRule()
            // to index the rule inline, so store as a const prior to indexing.
            // https://github.com/jsdom/jsdom uses https://github.com/NV/CSSOM for it's CSSOM implementation,
            // which implements the DOM Level 2 spec for CSSStyleSheet where insertRule() requires an index argument.
            const index = sheet.insertRule(":host{}", sheet.cssRules.length);
            this.target = sheet.cssRules[index].style;
        } else this.target = null;
    }
}
(0, _tslib.__decorate)([
    (0, _fastElement.observable)
], StyleElementStyleSheetTarget.prototype, "target", void 0);
class RootStyleSheetTarget {
    setProperty(name, value) {
        RootStyleSheetTarget.properties[name] = value;
        for (const target of RootStyleSheetTarget.roots.values())target.setProperty(name, value);
    }
    removeProperty(name) {
        delete RootStyleSheetTarget.properties[name];
        for (const target of RootStyleSheetTarget.roots.values())target.removeProperty(name);
    }
    static registerRoot(root) {
        const { roots } = RootStyleSheetTarget;
        if (!roots.has(root)) {
            roots.add(root);
            for(const key in RootStyleSheetTarget.properties)root.setProperty(key, RootStyleSheetTarget.properties[key]);
        }
    }
    static unregisterRoot(root) {
        const { roots } = RootStyleSheetTarget;
        if (roots.has(root)) {
            roots.delete(root);
            for(const key in RootStyleSheetTarget.properties)root.removeProperty(key);
        }
    }
}
RootStyleSheetTarget.roots = new Set();
RootStyleSheetTarget.properties = {};
// Caches PropertyTarget instances
const propertyTargetCache = new WeakMap();
// Use Constructable StyleSheets for FAST elements when supported, otherwise use
// HTMLStyleElement instances
const propertyTargetCtor = (0, _fastElement.ElementStyles).supportsAdoptedStyleSheets ? ConstructableStyleSheetTarget : StyleElementStyleSheetTarget;
const PropertyTargetManager = Object.freeze({
    getOrCreate (source) {
        if (propertyTargetCache.has(source)) /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */ return propertyTargetCache.get(source);
        let target;
        if (source instanceof Document) target = (0, _fastElement.ElementStyles).supportsAdoptedStyleSheets ? new DocumentStyleSheetTarget() : new HeadStyleElementStyleSheetTarget();
        else target = new propertyTargetCtor(source);
        propertyTargetCache.set(source, target);
        return target;
    }
});

},{"tslib":"8wyHd","@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRc7n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "definition", ()=>definition);
var _fluentDesignSystemJs = require("../fluent-design-system.js");
var _buttonJs = require("./button.js");
var _buttonStylesJs = require("./button.styles.js");
var _buttonTemplateJs = require("./button.template.js");
const definition = (0, _buttonJs.Button).compose({
    name: `${(0, _fluentDesignSystemJs.FluentDesignSystem).prefix}-button`,
    template: (0, _buttonTemplateJs.template),
    styles: (0, _buttonStylesJs.styles),
    shadowOptions: {
        delegatesFocus: true
    }
});

},{"../fluent-design-system.js":"b2Lls","./button.js":"f40CA","./button.styles.js":"gbSmC","./button.template.js":"hL4FG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2Lls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FluentDesignSystem", ()=>FluentDesignSystem);
const FluentDesignSystem = Object.freeze({
    prefix: "fluent",
    shadowRootMode: "open",
    registry: customElements
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3n9nB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextInputTemplate", ()=>(0, _textInputTemplateJs.template));
parcelHelpers.export(exports, "TextInputStyles", ()=>(0, _textInputStylesJs.styles));
parcelHelpers.export(exports, "TextInputDefinition", ()=>(0, _textInputDefinitionJs.definition));
parcelHelpers.export(exports, "TextInputType", ()=>(0, _textFieldJs.TextFieldType));
var _textInputJs = require("./text-input.js");
parcelHelpers.exportAll(_textInputJs, exports);
var _textInputOptionsJs = require("./text-input.options.js");
parcelHelpers.exportAll(_textInputOptionsJs, exports);
var _textInputTemplateJs = require("./text-input.template.js");
var _textInputStylesJs = require("./text-input.styles.js");
var _textInputDefinitionJs = require("./text-input.definition.js");
var _textFieldJs = require("@microsoft/fast-foundation/text-field.js");

},{"./text-input.js":false,"./text-input.options.js":false,"./text-input.template.js":false,"./text-input.styles.js":false,"./text-input.definition.js":"9pqzN","@microsoft/fast-foundation/text-field.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpOLh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The base class used for constructing a fluent-text-input custom element
 * @public
 */ parcelHelpers.export(exports, "TextInput", ()=>TextInput);
var _fastElement = require("@microsoft/fast-element");
var _textFieldJs = require("@microsoft/fast-foundation/text-field.js");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class TextInput extends (0, _textFieldJs.FASTTextField) {
}
__decorate([
    (0, _fastElement.attr)({
        attribute: "control-size"
    })
], TextInput.prototype, "controlSize", void 0);
__decorate([
    (0, _fastElement.attr)
], TextInput.prototype, "appearance", void 0);

},{"@microsoft/fast-element":"j6ee6","@microsoft/fast-foundation/text-field.js":"gTnw8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTnw8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textFieldTemplate", ()=>(0, _textFieldTemplateJs.textFieldTemplate));
parcelHelpers.export(exports, "DelegatesARIATextbox", ()=>(0, _textFieldJs.DelegatesARIATextbox));
parcelHelpers.export(exports, "FASTTextField", ()=>(0, _textFieldJs.FASTTextField));
parcelHelpers.export(exports, "TextFieldType", ()=>(0, _textFieldJs.TextFieldType));
var _textFieldTemplateJs = require("./text-field.template.js");
var _textFieldJs = require("./text-field.js");

},{"./text-field.template.js":"duk0Y","./text-field.js":"aWiUO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"duk0Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The template for the {@link @microsoft/fast-foundation#(FASTTextField:class)} component.
 * @public
 */ parcelHelpers.export(exports, "textFieldTemplate", ()=>textFieldTemplate);
var _fastElement = require("@microsoft/fast-element");
var _indexJs = require("../patterns/index.js");
var _whitespaceFilterJs = require("../utilities/whitespace-filter.js");
function textFieldTemplate(options = {}) {
    return (0, _fastElement.html)`
        <label
            part="label"
            for="control"
            class="${(x)=>x.defaultSlottedNodes && x.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot
                ${(0, _fastElement.slotted)({
        property: "defaultSlottedNodes",
        filter: (0, _whitespaceFilterJs.whitespaceFilter)
    })}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0, _indexJs.startSlotTemplate)(options)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${(x)=>x.handleTextInput()}"
                @change="${(x)=>x.handleChange()}"
                ?autofocus="${(x)=>x.autofocus}"
                ?disabled="${(x)=>x.disabled}"
                list="${(x)=>x.list}"
                maxlength="${(x)=>x.maxlength}"
                name="${(x)=>x.name}"
                minlength="${(x)=>x.minlength}"
                pattern="${(x)=>x.pattern}"
                placeholder="${(x)=>x.placeholder}"
                ?readonly="${(x)=>x.readOnly}"
                ?required="${(x)=>x.required}"
                size="${(x)=>x.size}"
                ?spellcheck="${(x)=>x.spellcheck}"
                :value="${(x)=>x.value}"
                type="${(x)=>x.type}"
                aria-atomic="${(x)=>x.ariaAtomic}"
                aria-busy="${(x)=>x.ariaBusy}"
                aria-controls="${(x)=>x.ariaControls}"
                aria-current="${(x)=>x.ariaCurrent}"
                aria-describedby="${(x)=>x.ariaDescribedby}"
                aria-details="${(x)=>x.ariaDetails}"
                aria-disabled="${(x)=>x.ariaDisabled}"
                aria-errormessage="${(x)=>x.ariaErrormessage}"
                aria-flowto="${(x)=>x.ariaFlowto}"
                aria-haspopup="${(x)=>x.ariaHaspopup}"
                aria-hidden="${(x)=>x.ariaHidden}"
                aria-invalid="${(x)=>x.ariaInvalid}"
                aria-keyshortcuts="${(x)=>x.ariaKeyshortcuts}"
                aria-label="${(x)=>x.ariaLabel}"
                aria-labelledby="${(x)=>x.ariaLabelledby}"
                aria-live="${(x)=>x.ariaLive}"
                aria-owns="${(x)=>x.ariaOwns}"
                aria-relevant="${(x)=>x.ariaRelevant}"
                aria-roledescription="${(x)=>x.ariaRoledescription}"
                ${(0, _fastElement.ref)("control")}
            />
            ${(0, _indexJs.endSlotTemplate)(options)}
        </div>
    `;
}

},{"@microsoft/fast-element":"j6ee6","../patterns/index.js":"1S92S","../utilities/whitespace-filter.js":"eKJyo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWiUO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextFieldType", ()=>(0, _textFieldOptionsJs.TextFieldType));
/**
 * A Text Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text | <input type="text" /> element }.
 *
 * @slot start - Content which can be provided before the number field input
 * @slot end - Content which can be provided after the number field input
 * @slot - The default slot for the label
 * @csspart label - The label
 * @csspart root - The element wrapping the control, including start and end slots
 * @csspart control - The text field element
 * @fires change - Fires a custom 'change' event when the value has changed
 *
 * @public
 */ parcelHelpers.export(exports, "FASTTextField", ()=>FASTTextField);
/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @public
 */ parcelHelpers.export(exports, "DelegatesARIATextbox", ()=>DelegatesARIATextbox);
var _tslib = require("tslib");
var _fastElement = require("@microsoft/fast-element");
var _indexJs = require("../patterns/index.js");
var _applyMixinsJs = require("../utilities/apply-mixins.js");
var _textFieldFormAssociatedJs = require("./text-field.form-associated.js");
var _textFieldOptionsJs = require("./text-field.options.js");
class FASTTextField extends (0, _textFieldFormAssociatedJs.FormAssociatedTextField) {
    constructor(){
        super(...arguments);
        /**
         * Allows setting a type or mode of text.
         * @public
         * @remarks
         * HTML Attribute: type
         */ this.type = (0, _textFieldOptionsJs.TextFieldType).text;
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.readOnly = this.readOnly;
            this.validate();
        }
    }
    autofocusChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.autofocus = this.autofocus;
            this.validate();
        }
    }
    placeholderChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.placeholder = this.placeholder;
    }
    typeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.type = this.type;
            this.validate();
        }
    }
    listChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.setAttribute("list", this.list);
            this.validate();
        }
    }
    maxlengthChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.maxLength = this.maxlength;
            this.validate();
        }
    }
    minlengthChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.minLength = this.minlength;
            this.validate();
        }
    }
    patternChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.pattern = this.pattern;
            this.validate();
        }
    }
    sizeChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.size = this.size;
    }
    spellcheckChanged() {
        if (this.proxy instanceof HTMLInputElement) this.proxy.spellcheck = this.spellcheck;
    }
    /**
     * @internal
     */ connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
        this.validate();
        if (this.autofocus) (0, _fastElement.Updates).enqueue(()=>{
            this.focus();
        });
    }
    /**
     * Selects all the text in the text field
     *
     * @public
     */ select() {
        this.control.select();
        /**
         * The select event does not permeate the shadow DOM boundary.
         * This fn effectively proxies the select event,
         * emitting a `select` event whenever the internal
         * control emits a `select` event
         */ this.$emit("select");
    }
    /**
     * Handles the internal control's `input` event
     * @internal
     */ handleTextInput() {
        this.value = this.control.value;
    }
    /**
     * Change event handler for inner control.
     * @remarks
     * "Change" events are not `composable` so they will not
     * permeate the shadow DOM boundary. This fn effectively proxies
     * the change event, emitting a `change` event whenever the internal
     * control emits a `change` event
     * @internal
     */ handleChange() {
        this.$emit("change");
    }
    /** {@inheritDoc (FormAssociated:interface).validate} */ validate() {
        super.validate(this.control);
    }
}
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        attribute: "readonly",
        mode: "boolean"
    })
], FASTTextField.prototype, "readOnly", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], FASTTextField.prototype, "autofocus", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTTextField.prototype, "placeholder", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTTextField.prototype, "type", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTTextField.prototype, "list", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.nullableNumberConverter)
    })
], FASTTextField.prototype, "maxlength", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.nullableNumberConverter)
    })
], FASTTextField.prototype, "minlength", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)
], FASTTextField.prototype, "pattern", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        converter: (0, _fastElement.nullableNumberConverter)
    })
], FASTTextField.prototype, "size", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.attr)({
        mode: "boolean"
    })
], FASTTextField.prototype, "spellcheck", void 0);
(0, _tslib.__decorate)([
    (0, _fastElement.observable)
], FASTTextField.prototype, "defaultSlottedNodes", void 0);
class DelegatesARIATextbox {
}
(0, _applyMixinsJs.applyMixins)(DelegatesARIATextbox, (0, _indexJs.ARIAGlobalStatesAndProperties));
(0, _applyMixinsJs.applyMixins)(FASTTextField, (0, _indexJs.StartEnd), DelegatesARIATextbox);

},{"tslib":"8wyHd","@microsoft/fast-element":"j6ee6","../patterns/index.js":"1S92S","../utilities/apply-mixins.js":"dll7D","./text-field.form-associated.js":"cTwsj","./text-field.options.js":"4Gflx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTwsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(TextField:class)} component.
 *
 * @beta
 */ parcelHelpers.export(exports, "FormAssociatedTextField", ()=>FormAssociatedTextField);
var _fastElement = require("@microsoft/fast-element");
var _formAssociatedJs = require("../form-associated/form-associated.js");
class _TextField extends (0, _fastElement.FASTElement) {
}
class FormAssociatedTextField extends (0, _formAssociatedJs.FormAssociated)(_TextField) {
    constructor(){
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}

},{"@microsoft/fast-element":"j6ee6","../form-associated/form-associated.js":"lgJjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Gflx":[function(require,module,exports) {
/**
 * Text field sub-types
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextFieldType", ()=>TextFieldType);
const TextFieldType = {
    /**
     * An email TextField
     */ email: "email",
    /**
     * A password TextField
     */ password: "password",
    /**
     * A telephone TextField
     */ tel: "tel",
    /**
     * A text TextField
     */ text: "text",
    /**
     * A URL TextField
     */ url: "url"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDf95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "template", ()=>template);
var _textFieldJs = require("@microsoft/fast-foundation/text-field.js");
const template = (0, _textFieldJs.textFieldTemplate)();

},{"@microsoft/fast-foundation/text-field.js":"gTnw8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRXxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styles", ()=>styles);
var _fastElement = require("@microsoft/fast-element");
var _utilitiesJs = require("@microsoft/fast-foundation/utilities.js");
var _designTokensJs = require("../theme/design-tokens.js");
const styles = (0, _fastElement.css)`
  ${(0, _utilitiesJs.display)("block")}

  :host {
    font-family: ${(0, _designTokensJs.fontFamilyBase)};
    font-size: ${(0, _designTokensJs.fontSizeBase300)};
    font-weight: ${(0, _designTokensJs.fontWeightRegular)};
    line-height: ${(0, _designTokensJs.lineHeightBase300)};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${(0, _designTokensJs.colorNeutralForeground1)};
    padding-bottom: ${(0, _designTokensJs.spacingVerticalXS)};
    flex-shrink: 0;
    padding-inline-end: ${(0, _designTokensJs.spacingHorizontalXS)};
  }
  .label__hidden {
    display: none;
  }
  .root {
    position: relative;
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0 ${(0, _designTokensJs.spacingHorizontalMNudge)};
    border: ${(0, _designTokensJs.strokeWidthThin)} solid ${(0, _designTokensJs.colorNeutralStroke1)};
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeAccessible)};
    border-radius: ${(0, _designTokensJs.borderRadiusMedium)};
    gap: ${(0, _designTokensJs.spacingHorizontalXXS)};
  }
  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${(0, _designTokensJs.borderRadiusMedium)});
    border-radius: 0 0 ${(0, _designTokensJs.borderRadiusMedium)} ${(0, _designTokensJs.borderRadiusMedium)};
    border-bottom: 2px solid ${(0, _designTokensJs.colorCompoundBrandStroke)};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${(0, _designTokensJs.durationUltraFast)};
    transition-delay: ${(0, _designTokensJs.curveAccelerateMid)};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${(0, _designTokensJs.colorNeutralForeground1)};
    border-radius: ${(0, _designTokensJs.borderRadiusMedium)};
    background: ${(0, _designTokensJs.colorTransparentBackground)};
    font-family: ${(0, _designTokensJs.fontFamilyBase)};
    font-weight: ${(0, _designTokensJs.fontWeightRegular)};
    font-size: ${(0, _designTokensJs.fontSizeBase300)};
    border: none;
    background: transparent;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${(0, _designTokensJs.colorNeutralForeground4)};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(0, _designTokensJs.colorNeutralForeground3)};
    font-size: ${(0, _designTokensJs.fontSizeBase500)};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${(0, _designTokensJs.spacingHorizontalXXS)};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${(0, _designTokensJs.spacingHorizontalXXS)};
    gap: ${(0, _designTokensJs.spacingHorizontalXS)};
  }
  :host(:hover) .root {
    border-color: ${(0, _designTokensJs.colorNeutralStroke1Hover)};
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeAccessibleHover)};
  }
  :host(:active) .root {
    border-color: ${(0, _designTokensJs.colorNeutralStroke1Pressed)};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${(0, _designTokensJs.durationNormal)};
    transition-delay: ${(0, _designTokensJs.curveDecelerateMid)};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${(0, _designTokensJs.colorCompoundBrandStrokePressed)};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${(0, _designTokensJs.strokeWidthThin)} solid ${(0, _designTokensJs.colorNeutralStroke1)};
  }
  :host(:focus-within) .control {
    color: ${(0, _designTokensJs.colorNeutralForeground1)};
  }
  :host([disabled]) .root {
    background: ${(0, _designTokensJs.colorTransparentBackground)};
    border: ${(0, _designTokensJs.strokeWidthThin)} solid ${(0, _designTokensJs.colorNeutralStrokeDisabled)};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${(0, _designTokensJs.colorNeutralForegroundDisabled)};
  }
  ::selection {
    color: ${(0, _designTokensJs.colorNeutralForegroundInverted)};
    background-color: ${(0, _designTokensJs.colorNeutralBackgroundInverted)};
  }
  :host([control-size='small']) .control {
    font-size: ${(0, _designTokensJs.fontSizeBase200)};
    font-weight: ${(0, _designTokensJs.fontWeightRegular)};
    line-height: ${(0, _designTokensJs.lineHeightBase200)};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${(0, _designTokensJs.spacingHorizontalXXS)};
    padding: 0 ${(0, _designTokensJs.spacingHorizontalSNudge)};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${(0, _designTokensJs.fontSizeBase400)};
  }
  :host([control-size='large']) .control {
    font-size: ${(0, _designTokensJs.fontSizeBase400)};
    font-weight: ${(0, _designTokensJs.fontWeightRegular)};
    line-height: ${(0, _designTokensJs.lineHeightBase400)};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${(0, _designTokensJs.spacingHorizontalS)};
    padding: 0 ${(0, _designTokensJs.spacingHorizontalM)};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${(0, _designTokensJs.fontSizeBase600)};
  }
  :host([appearance='underline']) .root {
    background: ${(0, _designTokensJs.colorTransparentBackground)};
    border: 0;
    border-radius: 0;
    border-bottom: ${(0, _designTokensJs.strokeWidthThin)} solid ${(0, _designTokensJs.colorNeutralStrokeAccessible)};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeAccessibleHover)};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeAccessiblePressed)};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeAccessiblePressed)};
  }
  :host([appearance='underline'][disabled]) .root {
    border-bottom-color: ${(0, _designTokensJs.colorNeutralStrokeDisabled)};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${(0, _designTokensJs.strokeWidthThin)} solid ${(0, _designTokensJs.colorTransparentStroke)};
    box-shadow: ${(0, _designTokensJs.shadow2)};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${(0, _designTokensJs.colorNeutralBackground1)};
  }
  :host([appearance='filled-darker']) .root {
    background: ${(0, _designTokensJs.colorNeutralBackground3)};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${(0, _designTokensJs.colorTransparentStrokeInteractive)};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${(0, _designTokensJs.colorTransparentStrokeInteractive)};
    background: ${(0, _designTokensJs.colorNeutralBackground3)};
  }
`;

},{"@microsoft/fast-element":"j6ee6","@microsoft/fast-foundation/utilities.js":"9Ode1","../theme/design-tokens.js":"5zHiq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9pqzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "definition", ()=>definition);
var _fluentDesignSystemJs = require("../fluent-design-system.js");
var _textInputJs = require("./text-input.js");
var _textInputStylesJs = require("./text-input.styles.js");
var _textInputTemplateJs = require("./text-input.template.js");
const definition = (0, _textInputJs.TextInput).compose({
    name: `${(0, _fluentDesignSystemJs.FluentDesignSystem).prefix}-text-input`,
    template: (0, _textInputTemplateJs.template),
    styles: (0, _textInputStylesJs.styles)
});

},{"../fluent-design-system.js":"b2Lls","./text-input.js":"lpOLh","./text-input.styles.js":"gRXxS","./text-input.template.js":"aDf95","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4AJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "borderRadiusNone", ()=>(0, _designTokensJs.borderRadiusNone));
parcelHelpers.export(exports, "borderRadiusSmall", ()=>(0, _designTokensJs.borderRadiusSmall));
parcelHelpers.export(exports, "borderRadiusMedium", ()=>(0, _designTokensJs.borderRadiusMedium));
parcelHelpers.export(exports, "borderRadiusLarge", ()=>(0, _designTokensJs.borderRadiusLarge));
parcelHelpers.export(exports, "borderRadiusXLarge", ()=>(0, _designTokensJs.borderRadiusXLarge));
parcelHelpers.export(exports, "borderRadiusCircular", ()=>(0, _designTokensJs.borderRadiusCircular));
parcelHelpers.export(exports, "fontSizeBase100", ()=>(0, _designTokensJs.fontSizeBase100));
parcelHelpers.export(exports, "fontSizeBase200", ()=>(0, _designTokensJs.fontSizeBase200));
parcelHelpers.export(exports, "fontSizeBase300", ()=>(0, _designTokensJs.fontSizeBase300));
parcelHelpers.export(exports, "fontSizeBase400", ()=>(0, _designTokensJs.fontSizeBase400));
parcelHelpers.export(exports, "fontSizeBase500", ()=>(0, _designTokensJs.fontSizeBase500));
parcelHelpers.export(exports, "fontSizeBase600", ()=>(0, _designTokensJs.fontSizeBase600));
parcelHelpers.export(exports, "fontSizeHero700", ()=>(0, _designTokensJs.fontSizeHero700));
parcelHelpers.export(exports, "fontSizeHero800", ()=>(0, _designTokensJs.fontSizeHero800));
parcelHelpers.export(exports, "fontSizeHero900", ()=>(0, _designTokensJs.fontSizeHero900));
parcelHelpers.export(exports, "fontSizeHero1000", ()=>(0, _designTokensJs.fontSizeHero1000));
parcelHelpers.export(exports, "lineHeightBase100", ()=>(0, _designTokensJs.lineHeightBase100));
parcelHelpers.export(exports, "lineHeightBase200", ()=>(0, _designTokensJs.lineHeightBase200));
parcelHelpers.export(exports, "lineHeightBase300", ()=>(0, _designTokensJs.lineHeightBase300));
parcelHelpers.export(exports, "lineHeightBase400", ()=>(0, _designTokensJs.lineHeightBase400));
parcelHelpers.export(exports, "lineHeightBase500", ()=>(0, _designTokensJs.lineHeightBase500));
parcelHelpers.export(exports, "lineHeightBase600", ()=>(0, _designTokensJs.lineHeightBase600));
parcelHelpers.export(exports, "lineHeightHero700", ()=>(0, _designTokensJs.lineHeightHero700));
parcelHelpers.export(exports, "lineHeightHero800", ()=>(0, _designTokensJs.lineHeightHero800));
parcelHelpers.export(exports, "lineHeightHero900", ()=>(0, _designTokensJs.lineHeightHero900));
parcelHelpers.export(exports, "lineHeightHero1000", ()=>(0, _designTokensJs.lineHeightHero1000));
parcelHelpers.export(exports, "fontFamilyBase", ()=>(0, _designTokensJs.fontFamilyBase));
parcelHelpers.export(exports, "fontFamilyMonospace", ()=>(0, _designTokensJs.fontFamilyMonospace));
parcelHelpers.export(exports, "fontFamilyNumeric", ()=>(0, _designTokensJs.fontFamilyNumeric));
parcelHelpers.export(exports, "fontWeightRegular", ()=>(0, _designTokensJs.fontWeightRegular));
parcelHelpers.export(exports, "fontWeightMedium", ()=>(0, _designTokensJs.fontWeightMedium));
parcelHelpers.export(exports, "fontWeightSemibold", ()=>(0, _designTokensJs.fontWeightSemibold));
parcelHelpers.export(exports, "fontWeightBold", ()=>(0, _designTokensJs.fontWeightBold));
parcelHelpers.export(exports, "strokeWidthThin", ()=>(0, _designTokensJs.strokeWidthThin));
parcelHelpers.export(exports, "strokeWidthThick", ()=>(0, _designTokensJs.strokeWidthThick));
parcelHelpers.export(exports, "strokeWidthThicker", ()=>(0, _designTokensJs.strokeWidthThicker));
parcelHelpers.export(exports, "strokeWidthThickest", ()=>(0, _designTokensJs.strokeWidthThickest));
parcelHelpers.export(exports, "spacingHorizontalNone", ()=>(0, _designTokensJs.spacingHorizontalNone));
parcelHelpers.export(exports, "spacingHorizontalXXS", ()=>(0, _designTokensJs.spacingHorizontalXXS));
parcelHelpers.export(exports, "spacingHorizontalXS", ()=>(0, _designTokensJs.spacingHorizontalXS));
parcelHelpers.export(exports, "spacingHorizontalSNudge", ()=>(0, _designTokensJs.spacingHorizontalSNudge));
parcelHelpers.export(exports, "spacingHorizontalS", ()=>(0, _designTokensJs.spacingHorizontalS));
parcelHelpers.export(exports, "spacingHorizontalMNudge", ()=>(0, _designTokensJs.spacingHorizontalMNudge));
parcelHelpers.export(exports, "spacingHorizontalM", ()=>(0, _designTokensJs.spacingHorizontalM));
parcelHelpers.export(exports, "spacingHorizontalL", ()=>(0, _designTokensJs.spacingHorizontalL));
parcelHelpers.export(exports, "spacingHorizontalXL", ()=>(0, _designTokensJs.spacingHorizontalXL));
parcelHelpers.export(exports, "spacingHorizontalXXL", ()=>(0, _designTokensJs.spacingHorizontalXXL));
parcelHelpers.export(exports, "spacingHorizontalXXXL", ()=>(0, _designTokensJs.spacingHorizontalXXXL));
parcelHelpers.export(exports, "spacingVerticalNone", ()=>(0, _designTokensJs.spacingVerticalNone));
parcelHelpers.export(exports, "spacingVerticalXXS", ()=>(0, _designTokensJs.spacingVerticalXXS));
parcelHelpers.export(exports, "spacingVerticalXS", ()=>(0, _designTokensJs.spacingVerticalXS));
parcelHelpers.export(exports, "spacingVerticalSNudge", ()=>(0, _designTokensJs.spacingVerticalSNudge));
parcelHelpers.export(exports, "spacingVerticalS", ()=>(0, _designTokensJs.spacingVerticalS));
parcelHelpers.export(exports, "spacingVerticalMNudge", ()=>(0, _designTokensJs.spacingVerticalMNudge));
parcelHelpers.export(exports, "spacingVerticalM", ()=>(0, _designTokensJs.spacingVerticalM));
parcelHelpers.export(exports, "spacingVerticalL", ()=>(0, _designTokensJs.spacingVerticalL));
parcelHelpers.export(exports, "spacingVerticalXL", ()=>(0, _designTokensJs.spacingVerticalXL));
parcelHelpers.export(exports, "spacingVerticalXXL", ()=>(0, _designTokensJs.spacingVerticalXXL));
parcelHelpers.export(exports, "spacingVerticalXXXL", ()=>(0, _designTokensJs.spacingVerticalXXXL));
parcelHelpers.export(exports, "durationUltraFast", ()=>(0, _designTokensJs.durationUltraFast));
parcelHelpers.export(exports, "durationFaster", ()=>(0, _designTokensJs.durationFaster));
parcelHelpers.export(exports, "durationFast", ()=>(0, _designTokensJs.durationFast));
parcelHelpers.export(exports, "durationNormal", ()=>(0, _designTokensJs.durationNormal));
parcelHelpers.export(exports, "durationSlow", ()=>(0, _designTokensJs.durationSlow));
parcelHelpers.export(exports, "durationSlower", ()=>(0, _designTokensJs.durationSlower));
parcelHelpers.export(exports, "durationUltraSlow", ()=>(0, _designTokensJs.durationUltraSlow));
parcelHelpers.export(exports, "curveAccelerateMax", ()=>(0, _designTokensJs.curveAccelerateMax));
parcelHelpers.export(exports, "curveAccelerateMid", ()=>(0, _designTokensJs.curveAccelerateMid));
parcelHelpers.export(exports, "curveAccelerateMin", ()=>(0, _designTokensJs.curveAccelerateMin));
parcelHelpers.export(exports, "curveDecelerateMax", ()=>(0, _designTokensJs.curveDecelerateMax));
parcelHelpers.export(exports, "curveDecelerateMid", ()=>(0, _designTokensJs.curveDecelerateMid));
parcelHelpers.export(exports, "curveDecelerateMin", ()=>(0, _designTokensJs.curveDecelerateMin));
parcelHelpers.export(exports, "curveEasyEaseMax", ()=>(0, _designTokensJs.curveEasyEaseMax));
parcelHelpers.export(exports, "curveEasyEase", ()=>(0, _designTokensJs.curveEasyEase));
parcelHelpers.export(exports, "curveLinear", ()=>(0, _designTokensJs.curveLinear));
parcelHelpers.export(exports, "colorNeutralForeground1", ()=>(0, _designTokensJs.colorNeutralForeground1));
parcelHelpers.export(exports, "colorNeutralForeground1Hover", ()=>(0, _designTokensJs.colorNeutralForeground1Hover));
parcelHelpers.export(exports, "colorNeutralForeground1Pressed", ()=>(0, _designTokensJs.colorNeutralForeground1Pressed));
parcelHelpers.export(exports, "colorNeutralForeground1Selected", ()=>(0, _designTokensJs.colorNeutralForeground1Selected));
parcelHelpers.export(exports, "colorNeutralForeground2", ()=>(0, _designTokensJs.colorNeutralForeground2));
parcelHelpers.export(exports, "colorNeutralForeground2Hover", ()=>(0, _designTokensJs.colorNeutralForeground2Hover));
parcelHelpers.export(exports, "colorNeutralForeground2Pressed", ()=>(0, _designTokensJs.colorNeutralForeground2Pressed));
parcelHelpers.export(exports, "colorNeutralForeground2Selected", ()=>(0, _designTokensJs.colorNeutralForeground2Selected));
parcelHelpers.export(exports, "colorNeutralForeground2BrandHover", ()=>(0, _designTokensJs.colorNeutralForeground2BrandHover));
parcelHelpers.export(exports, "colorNeutralForeground2BrandPressed", ()=>(0, _designTokensJs.colorNeutralForeground2BrandPressed));
parcelHelpers.export(exports, "colorNeutralForeground2BrandSelected", ()=>(0, _designTokensJs.colorNeutralForeground2BrandSelected));
parcelHelpers.export(exports, "colorNeutralForeground3", ()=>(0, _designTokensJs.colorNeutralForeground3));
parcelHelpers.export(exports, "colorNeutralForeground3Hover", ()=>(0, _designTokensJs.colorNeutralForeground3Hover));
parcelHelpers.export(exports, "colorNeutralForeground3Pressed", ()=>(0, _designTokensJs.colorNeutralForeground3Pressed));
parcelHelpers.export(exports, "colorNeutralForeground3Selected", ()=>(0, _designTokensJs.colorNeutralForeground3Selected));
parcelHelpers.export(exports, "colorNeutralForeground3BrandHover", ()=>(0, _designTokensJs.colorNeutralForeground3BrandHover));
parcelHelpers.export(exports, "colorNeutralForeground3BrandPressed", ()=>(0, _designTokensJs.colorNeutralForeground3BrandPressed));
parcelHelpers.export(exports, "colorNeutralForeground3BrandSelected", ()=>(0, _designTokensJs.colorNeutralForeground3BrandSelected));
parcelHelpers.export(exports, "colorNeutralForeground4", ()=>(0, _designTokensJs.colorNeutralForeground4));
parcelHelpers.export(exports, "colorNeutralForegroundDisabled", ()=>(0, _designTokensJs.colorNeutralForegroundDisabled));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedDisabled", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedDisabled));
parcelHelpers.export(exports, "colorBrandForegroundLink", ()=>(0, _designTokensJs.colorBrandForegroundLink));
parcelHelpers.export(exports, "colorBrandForegroundLinkHover", ()=>(0, _designTokensJs.colorBrandForegroundLinkHover));
parcelHelpers.export(exports, "colorBrandForegroundLinkPressed", ()=>(0, _designTokensJs.colorBrandForegroundLinkPressed));
parcelHelpers.export(exports, "colorBrandForegroundLinkSelected", ()=>(0, _designTokensJs.colorBrandForegroundLinkSelected));
parcelHelpers.export(exports, "colorNeutralForeground2Link", ()=>(0, _designTokensJs.colorNeutralForeground2Link));
parcelHelpers.export(exports, "colorNeutralForeground2LinkHover", ()=>(0, _designTokensJs.colorNeutralForeground2LinkHover));
parcelHelpers.export(exports, "colorNeutralForeground2LinkPressed", ()=>(0, _designTokensJs.colorNeutralForeground2LinkPressed));
parcelHelpers.export(exports, "colorNeutralForeground2LinkSelected", ()=>(0, _designTokensJs.colorNeutralForeground2LinkSelected));
parcelHelpers.export(exports, "colorCompoundBrandForeground1", ()=>(0, _designTokensJs.colorCompoundBrandForeground1));
parcelHelpers.export(exports, "colorCompoundBrandForeground1Hover", ()=>(0, _designTokensJs.colorCompoundBrandForeground1Hover));
parcelHelpers.export(exports, "colorCompoundBrandForeground1Pressed", ()=>(0, _designTokensJs.colorCompoundBrandForeground1Pressed));
parcelHelpers.export(exports, "colorBrandForeground1", ()=>(0, _designTokensJs.colorBrandForeground1));
parcelHelpers.export(exports, "colorBrandForeground2", ()=>(0, _designTokensJs.colorBrandForeground2));
parcelHelpers.export(exports, "colorNeutralForeground1Static", ()=>(0, _designTokensJs.colorNeutralForeground1Static));
parcelHelpers.export(exports, "colorNeutralForegroundStaticInverted", ()=>(0, _designTokensJs.colorNeutralForegroundStaticInverted));
parcelHelpers.export(exports, "colorNeutralForegroundInverted", ()=>(0, _designTokensJs.colorNeutralForegroundInverted));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedHover", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedHover));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedPressed", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedPressed));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedSelected", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedSelected));
parcelHelpers.export(exports, "colorNeutralForegroundInverted2", ()=>(0, _designTokensJs.colorNeutralForegroundInverted2));
parcelHelpers.export(exports, "colorNeutralForegroundOnBrand", ()=>(0, _designTokensJs.colorNeutralForegroundOnBrand));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLink", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedLink));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkHover", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedLinkHover));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkPressed", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedLinkPressed));
parcelHelpers.export(exports, "colorNeutralForegroundInvertedLinkSelected", ()=>(0, _designTokensJs.colorNeutralForegroundInvertedLinkSelected));
parcelHelpers.export(exports, "colorBrandForegroundInverted", ()=>(0, _designTokensJs.colorBrandForegroundInverted));
parcelHelpers.export(exports, "colorBrandForegroundInvertedHover", ()=>(0, _designTokensJs.colorBrandForegroundInvertedHover));
parcelHelpers.export(exports, "colorBrandForegroundInvertedPressed", ()=>(0, _designTokensJs.colorBrandForegroundInvertedPressed));
parcelHelpers.export(exports, "colorBrandForegroundOnLight", ()=>(0, _designTokensJs.colorBrandForegroundOnLight));
parcelHelpers.export(exports, "colorBrandForegroundOnLightHover", ()=>(0, _designTokensJs.colorBrandForegroundOnLightHover));
parcelHelpers.export(exports, "colorBrandForegroundOnLightPressed", ()=>(0, _designTokensJs.colorBrandForegroundOnLightPressed));
parcelHelpers.export(exports, "colorBrandForegroundOnLightSelected", ()=>(0, _designTokensJs.colorBrandForegroundOnLightSelected));
parcelHelpers.export(exports, "colorNeutralBackground1", ()=>(0, _designTokensJs.colorNeutralBackground1));
parcelHelpers.export(exports, "colorNeutralBackground1Hover", ()=>(0, _designTokensJs.colorNeutralBackground1Hover));
parcelHelpers.export(exports, "colorNeutralBackground1Pressed", ()=>(0, _designTokensJs.colorNeutralBackground1Pressed));
parcelHelpers.export(exports, "colorNeutralBackground1Selected", ()=>(0, _designTokensJs.colorNeutralBackground1Selected));
parcelHelpers.export(exports, "colorNeutralBackground2", ()=>(0, _designTokensJs.colorNeutralBackground2));
parcelHelpers.export(exports, "colorNeutralBackground2Hover", ()=>(0, _designTokensJs.colorNeutralBackground2Hover));
parcelHelpers.export(exports, "colorNeutralBackground2Pressed", ()=>(0, _designTokensJs.colorNeutralBackground2Pressed));
parcelHelpers.export(exports, "colorNeutralBackground2Selected", ()=>(0, _designTokensJs.colorNeutralBackground2Selected));
parcelHelpers.export(exports, "colorNeutralBackground3", ()=>(0, _designTokensJs.colorNeutralBackground3));
parcelHelpers.export(exports, "colorNeutralBackground3Hover", ()=>(0, _designTokensJs.colorNeutralBackground3Hover));
parcelHelpers.export(exports, "colorNeutralBackground3Pressed", ()=>(0, _designTokensJs.colorNeutralBackground3Pressed));
parcelHelpers.export(exports, "colorNeutralBackground3Selected", ()=>(0, _designTokensJs.colorNeutralBackground3Selected));
parcelHelpers.export(exports, "colorNeutralBackground4", ()=>(0, _designTokensJs.colorNeutralBackground4));
parcelHelpers.export(exports, "colorNeutralBackground4Hover", ()=>(0, _designTokensJs.colorNeutralBackground4Hover));
parcelHelpers.export(exports, "colorNeutralBackground4Pressed", ()=>(0, _designTokensJs.colorNeutralBackground4Pressed));
parcelHelpers.export(exports, "colorNeutralBackground4Selected", ()=>(0, _designTokensJs.colorNeutralBackground4Selected));
parcelHelpers.export(exports, "colorNeutralBackground5", ()=>(0, _designTokensJs.colorNeutralBackground5));
parcelHelpers.export(exports, "colorNeutralBackground5Hover", ()=>(0, _designTokensJs.colorNeutralBackground5Hover));
parcelHelpers.export(exports, "colorNeutralBackground5Pressed", ()=>(0, _designTokensJs.colorNeutralBackground5Pressed));
parcelHelpers.export(exports, "colorNeutralBackground5Selected", ()=>(0, _designTokensJs.colorNeutralBackground5Selected));
parcelHelpers.export(exports, "colorNeutralBackground6", ()=>(0, _designTokensJs.colorNeutralBackground6));
parcelHelpers.export(exports, "colorNeutralBackgroundInverted", ()=>(0, _designTokensJs.colorNeutralBackgroundInverted));
parcelHelpers.export(exports, "colorNeutralBackgroundStatic", ()=>(0, _designTokensJs.colorNeutralBackgroundStatic));
parcelHelpers.export(exports, "colorSubtleBackground", ()=>(0, _designTokensJs.colorSubtleBackground));
parcelHelpers.export(exports, "colorSubtleBackgroundHover", ()=>(0, _designTokensJs.colorSubtleBackgroundHover));
parcelHelpers.export(exports, "colorSubtleBackgroundPressed", ()=>(0, _designTokensJs.colorSubtleBackgroundPressed));
parcelHelpers.export(exports, "colorSubtleBackgroundSelected", ()=>(0, _designTokensJs.colorSubtleBackgroundSelected));
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaHover", ()=>(0, _designTokensJs.colorSubtleBackgroundLightAlphaHover));
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaPressed", ()=>(0, _designTokensJs.colorSubtleBackgroundLightAlphaPressed));
parcelHelpers.export(exports, "colorSubtleBackgroundLightAlphaSelected", ()=>(0, _designTokensJs.colorSubtleBackgroundLightAlphaSelected));
parcelHelpers.export(exports, "colorSubtleBackgroundInverted", ()=>(0, _designTokensJs.colorSubtleBackgroundInverted));
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedHover", ()=>(0, _designTokensJs.colorSubtleBackgroundInvertedHover));
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedPressed", ()=>(0, _designTokensJs.colorSubtleBackgroundInvertedPressed));
parcelHelpers.export(exports, "colorSubtleBackgroundInvertedSelected", ()=>(0, _designTokensJs.colorSubtleBackgroundInvertedSelected));
parcelHelpers.export(exports, "colorTransparentBackground", ()=>(0, _designTokensJs.colorTransparentBackground));
parcelHelpers.export(exports, "colorTransparentBackgroundHover", ()=>(0, _designTokensJs.colorTransparentBackgroundHover));
parcelHelpers.export(exports, "colorTransparentBackgroundPressed", ()=>(0, _designTokensJs.colorTransparentBackgroundPressed));
parcelHelpers.export(exports, "colorTransparentBackgroundSelected", ()=>(0, _designTokensJs.colorTransparentBackgroundSelected));
parcelHelpers.export(exports, "colorNeutralBackgroundDisabled", ()=>(0, _designTokensJs.colorNeutralBackgroundDisabled));
parcelHelpers.export(exports, "colorNeutralBackgroundInvertedDisabled", ()=>(0, _designTokensJs.colorNeutralBackgroundInvertedDisabled));
parcelHelpers.export(exports, "colorNeutralStencil1", ()=>(0, _designTokensJs.colorNeutralStencil1));
parcelHelpers.export(exports, "colorNeutralStencil2", ()=>(0, _designTokensJs.colorNeutralStencil2));
parcelHelpers.export(exports, "colorNeutralStencil1Alpha", ()=>(0, _designTokensJs.colorNeutralStencil1Alpha));
parcelHelpers.export(exports, "colorNeutralStencil2Alpha", ()=>(0, _designTokensJs.colorNeutralStencil2Alpha));
parcelHelpers.export(exports, "colorBackgroundOverlay", ()=>(0, _designTokensJs.colorBackgroundOverlay));
parcelHelpers.export(exports, "colorScrollbarOverlay", ()=>(0, _designTokensJs.colorScrollbarOverlay));
parcelHelpers.export(exports, "colorBrandBackground", ()=>(0, _designTokensJs.colorBrandBackground));
parcelHelpers.export(exports, "colorBrandBackgroundHover", ()=>(0, _designTokensJs.colorBrandBackgroundHover));
parcelHelpers.export(exports, "colorBrandBackgroundPressed", ()=>(0, _designTokensJs.colorBrandBackgroundPressed));
parcelHelpers.export(exports, "colorBrandBackgroundSelected", ()=>(0, _designTokensJs.colorBrandBackgroundSelected));
parcelHelpers.export(exports, "colorCompoundBrandBackground", ()=>(0, _designTokensJs.colorCompoundBrandBackground));
parcelHelpers.export(exports, "colorCompoundBrandBackgroundHover", ()=>(0, _designTokensJs.colorCompoundBrandBackgroundHover));
parcelHelpers.export(exports, "colorCompoundBrandBackgroundPressed", ()=>(0, _designTokensJs.colorCompoundBrandBackgroundPressed));
parcelHelpers.export(exports, "colorBrandBackgroundStatic", ()=>(0, _designTokensJs.colorBrandBackgroundStatic));
parcelHelpers.export(exports, "colorBrandBackground2", ()=>(0, _designTokensJs.colorBrandBackground2));
parcelHelpers.export(exports, "colorBrandBackgroundInverted", ()=>(0, _designTokensJs.colorBrandBackgroundInverted));
parcelHelpers.export(exports, "colorBrandBackgroundInvertedHover", ()=>(0, _designTokensJs.colorBrandBackgroundInvertedHover));
parcelHelpers.export(exports, "colorBrandBackgroundInvertedPressed", ()=>(0, _designTokensJs.colorBrandBackgroundInvertedPressed));
parcelHelpers.export(exports, "colorBrandBackgroundInvertedSelected", ()=>(0, _designTokensJs.colorBrandBackgroundInvertedSelected));
parcelHelpers.export(exports, "colorNeutralStrokeAccessible", ()=>(0, _designTokensJs.colorNeutralStrokeAccessible));
parcelHelpers.export(exports, "colorNeutralStrokeAccessibleHover", ()=>(0, _designTokensJs.colorNeutralStrokeAccessibleHover));
parcelHelpers.export(exports, "colorNeutralStrokeAccessiblePressed", ()=>(0, _designTokensJs.colorNeutralStrokeAccessiblePressed));
parcelHelpers.export(exports, "colorNeutralStrokeAccessibleSelected", ()=>(0, _designTokensJs.colorNeutralStrokeAccessibleSelected));
parcelHelpers.export(exports, "colorNeutralStroke1", ()=>(0, _designTokensJs.colorNeutralStroke1));
parcelHelpers.export(exports, "colorNeutralStroke1Hover", ()=>(0, _designTokensJs.colorNeutralStroke1Hover));
parcelHelpers.export(exports, "colorNeutralStroke1Pressed", ()=>(0, _designTokensJs.colorNeutralStroke1Pressed));
parcelHelpers.export(exports, "colorNeutralStroke1Selected", ()=>(0, _designTokensJs.colorNeutralStroke1Selected));
parcelHelpers.export(exports, "colorNeutralStroke2", ()=>(0, _designTokensJs.colorNeutralStroke2));
parcelHelpers.export(exports, "colorNeutralStroke3", ()=>(0, _designTokensJs.colorNeutralStroke3));
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand", ()=>(0, _designTokensJs.colorNeutralStrokeOnBrand));
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2", ()=>(0, _designTokensJs.colorNeutralStrokeOnBrand2));
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Hover", ()=>(0, _designTokensJs.colorNeutralStrokeOnBrand2Hover));
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Pressed", ()=>(0, _designTokensJs.colorNeutralStrokeOnBrand2Pressed));
parcelHelpers.export(exports, "colorNeutralStrokeOnBrand2Selected", ()=>(0, _designTokensJs.colorNeutralStrokeOnBrand2Selected));
parcelHelpers.export(exports, "colorBrandStroke1", ()=>(0, _designTokensJs.colorBrandStroke1));
parcelHelpers.export(exports, "colorBrandStroke2", ()=>(0, _designTokensJs.colorBrandStroke2));
parcelHelpers.export(exports, "colorCompoundBrandStroke", ()=>(0, _designTokensJs.colorCompoundBrandStroke));
parcelHelpers.export(exports, "colorCompoundBrandStrokeHover", ()=>(0, _designTokensJs.colorCompoundBrandStrokeHover));
parcelHelpers.export(exports, "colorCompoundBrandStrokePressed", ()=>(0, _designTokensJs.colorCompoundBrandStrokePressed));
parcelHelpers.export(exports, "colorNeutralStrokeDisabled", ()=>(0, _designTokensJs.colorNeutralStrokeDisabled));
parcelHelpers.export(exports, "colorNeutralStrokeInvertedDisabled", ()=>(0, _designTokensJs.colorNeutralStrokeInvertedDisabled));
parcelHelpers.export(exports, "colorTransparentStroke", ()=>(0, _designTokensJs.colorTransparentStroke));
parcelHelpers.export(exports, "colorTransparentStrokeInteractive", ()=>(0, _designTokensJs.colorTransparentStrokeInteractive));
parcelHelpers.export(exports, "colorTransparentStrokeDisabled", ()=>(0, _designTokensJs.colorTransparentStrokeDisabled));
parcelHelpers.export(exports, "colorStrokeFocus1", ()=>(0, _designTokensJs.colorStrokeFocus1));
parcelHelpers.export(exports, "colorStrokeFocus2", ()=>(0, _designTokensJs.colorStrokeFocus2));
parcelHelpers.export(exports, "colorNeutralShadowAmbient", ()=>(0, _designTokensJs.colorNeutralShadowAmbient));
parcelHelpers.export(exports, "colorNeutralShadowKey", ()=>(0, _designTokensJs.colorNeutralShadowKey));
parcelHelpers.export(exports, "colorNeutralShadowAmbientLighter", ()=>(0, _designTokensJs.colorNeutralShadowAmbientLighter));
parcelHelpers.export(exports, "colorNeutralShadowKeyLighter", ()=>(0, _designTokensJs.colorNeutralShadowKeyLighter));
parcelHelpers.export(exports, "colorNeutralShadowAmbientDarker", ()=>(0, _designTokensJs.colorNeutralShadowAmbientDarker));
parcelHelpers.export(exports, "colorNeutralShadowKeyDarker", ()=>(0, _designTokensJs.colorNeutralShadowKeyDarker));
parcelHelpers.export(exports, "colorBrandShadowAmbient", ()=>(0, _designTokensJs.colorBrandShadowAmbient));
parcelHelpers.export(exports, "colorBrandShadowKey", ()=>(0, _designTokensJs.colorBrandShadowKey));
parcelHelpers.export(exports, "colorPaletteRedBackground1", ()=>(0, _designTokensJs.colorPaletteRedBackground1));
parcelHelpers.export(exports, "colorPaletteRedBackground2", ()=>(0, _designTokensJs.colorPaletteRedBackground2));
parcelHelpers.export(exports, "colorPaletteRedBackground3", ()=>(0, _designTokensJs.colorPaletteRedBackground3));
parcelHelpers.export(exports, "colorPaletteRedForeground1", ()=>(0, _designTokensJs.colorPaletteRedForeground1));
parcelHelpers.export(exports, "colorPaletteRedForeground2", ()=>(0, _designTokensJs.colorPaletteRedForeground2));
parcelHelpers.export(exports, "colorPaletteRedForeground3", ()=>(0, _designTokensJs.colorPaletteRedForeground3));
parcelHelpers.export(exports, "colorPaletteRedBorderActive", ()=>(0, _designTokensJs.colorPaletteRedBorderActive));
parcelHelpers.export(exports, "colorPaletteRedBorder1", ()=>(0, _designTokensJs.colorPaletteRedBorder1));
parcelHelpers.export(exports, "colorPaletteRedBorder2", ()=>(0, _designTokensJs.colorPaletteRedBorder2));
parcelHelpers.export(exports, "colorPaletteGreenBackground1", ()=>(0, _designTokensJs.colorPaletteGreenBackground1));
parcelHelpers.export(exports, "colorPaletteGreenBackground2", ()=>(0, _designTokensJs.colorPaletteGreenBackground2));
parcelHelpers.export(exports, "colorPaletteGreenBackground3", ()=>(0, _designTokensJs.colorPaletteGreenBackground3));
parcelHelpers.export(exports, "colorPaletteGreenForeground1", ()=>(0, _designTokensJs.colorPaletteGreenForeground1));
parcelHelpers.export(exports, "colorPaletteGreenForeground2", ()=>(0, _designTokensJs.colorPaletteGreenForeground2));
parcelHelpers.export(exports, "colorPaletteGreenForeground3", ()=>(0, _designTokensJs.colorPaletteGreenForeground3));
parcelHelpers.export(exports, "colorPaletteGreenBorderActive", ()=>(0, _designTokensJs.colorPaletteGreenBorderActive));
parcelHelpers.export(exports, "colorPaletteGreenBorder1", ()=>(0, _designTokensJs.colorPaletteGreenBorder1));
parcelHelpers.export(exports, "colorPaletteGreenBorder2", ()=>(0, _designTokensJs.colorPaletteGreenBorder2));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground1", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBackground1));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground2", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBackground2));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBackground3", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBackground3));
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground1", ()=>(0, _designTokensJs.colorPaletteDarkOrangeForeground1));
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground2", ()=>(0, _designTokensJs.colorPaletteDarkOrangeForeground2));
parcelHelpers.export(exports, "colorPaletteDarkOrangeForeground3", ()=>(0, _designTokensJs.colorPaletteDarkOrangeForeground3));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorderActive", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBorderActive));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorder1", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBorder1));
parcelHelpers.export(exports, "colorPaletteDarkOrangeBorder2", ()=>(0, _designTokensJs.colorPaletteDarkOrangeBorder2));
parcelHelpers.export(exports, "colorPaletteYellowBackground1", ()=>(0, _designTokensJs.colorPaletteYellowBackground1));
parcelHelpers.export(exports, "colorPaletteYellowBackground2", ()=>(0, _designTokensJs.colorPaletteYellowBackground2));
parcelHelpers.export(exports, "colorPaletteYellowBackground3", ()=>(0, _designTokensJs.colorPaletteYellowBackground3));
parcelHelpers.export(exports, "colorPaletteYellowForeground1", ()=>(0, _designTokensJs.colorPaletteYellowForeground1));
parcelHelpers.export(exports, "colorPaletteYellowForeground2", ()=>(0, _designTokensJs.colorPaletteYellowForeground2));
parcelHelpers.export(exports, "colorPaletteYellowForeground3", ()=>(0, _designTokensJs.colorPaletteYellowForeground3));
parcelHelpers.export(exports, "colorPaletteYellowBorderActive", ()=>(0, _designTokensJs.colorPaletteYellowBorderActive));
parcelHelpers.export(exports, "colorPaletteYellowBorder1", ()=>(0, _designTokensJs.colorPaletteYellowBorder1));
parcelHelpers.export(exports, "colorPaletteYellowBorder2", ()=>(0, _designTokensJs.colorPaletteYellowBorder2));
parcelHelpers.export(exports, "colorPaletteBerryBackground1", ()=>(0, _designTokensJs.colorPaletteBerryBackground1));
parcelHelpers.export(exports, "colorPaletteBerryBackground2", ()=>(0, _designTokensJs.colorPaletteBerryBackground2));
parcelHelpers.export(exports, "colorPaletteBerryBackground3", ()=>(0, _designTokensJs.colorPaletteBerryBackground3));
parcelHelpers.export(exports, "colorPaletteBerryForeground1", ()=>(0, _designTokensJs.colorPaletteBerryForeground1));
parcelHelpers.export(exports, "colorPaletteBerryForeground2", ()=>(0, _designTokensJs.colorPaletteBerryForeground2));
parcelHelpers.export(exports, "colorPaletteBerryForeground3", ()=>(0, _designTokensJs.colorPaletteBerryForeground3));
parcelHelpers.export(exports, "colorPaletteBerryBorderActive", ()=>(0, _designTokensJs.colorPaletteBerryBorderActive));
parcelHelpers.export(exports, "colorPaletteBerryBorder1", ()=>(0, _designTokensJs.colorPaletteBerryBorder1));
parcelHelpers.export(exports, "colorPaletteBerryBorder2", ()=>(0, _designTokensJs.colorPaletteBerryBorder2));
parcelHelpers.export(exports, "colorPaletteLightGreenBackground1", ()=>(0, _designTokensJs.colorPaletteLightGreenBackground1));
parcelHelpers.export(exports, "colorPaletteLightGreenBackground2", ()=>(0, _designTokensJs.colorPaletteLightGreenBackground2));
parcelHelpers.export(exports, "colorPaletteLightGreenBackground3", ()=>(0, _designTokensJs.colorPaletteLightGreenBackground3));
parcelHelpers.export(exports, "colorPaletteLightGreenForeground1", ()=>(0, _designTokensJs.colorPaletteLightGreenForeground1));
parcelHelpers.export(exports, "colorPaletteLightGreenForeground2", ()=>(0, _designTokensJs.colorPaletteLightGreenForeground2));
parcelHelpers.export(exports, "colorPaletteLightGreenForeground3", ()=>(0, _designTokensJs.colorPaletteLightGreenForeground3));
parcelHelpers.export(exports, "colorPaletteLightGreenBorderActive", ()=>(0, _designTokensJs.colorPaletteLightGreenBorderActive));
parcelHelpers.export(exports, "colorPaletteLightGreenBorder1", ()=>(0, _designTokensJs.colorPaletteLightGreenBorder1));
parcelHelpers.export(exports, "colorPaletteLightGreenBorder2", ()=>(0, _designTokensJs.colorPaletteLightGreenBorder2));
parcelHelpers.export(exports, "colorPaletteMarigoldBackground1", ()=>(0, _designTokensJs.colorPaletteMarigoldBackground1));
parcelHelpers.export(exports, "colorPaletteMarigoldBackground2", ()=>(0, _designTokensJs.colorPaletteMarigoldBackground2));
parcelHelpers.export(exports, "colorPaletteMarigoldBackground3", ()=>(0, _designTokensJs.colorPaletteMarigoldBackground3));
parcelHelpers.export(exports, "colorPaletteMarigoldForeground1", ()=>(0, _designTokensJs.colorPaletteMarigoldForeground1));
parcelHelpers.export(exports, "colorPaletteMarigoldForeground2", ()=>(0, _designTokensJs.colorPaletteMarigoldForeground2));
parcelHelpers.export(exports, "colorPaletteMarigoldForeground3", ()=>(0, _designTokensJs.colorPaletteMarigoldForeground3));
parcelHelpers.export(exports, "colorPaletteMarigoldBorderActive", ()=>(0, _designTokensJs.colorPaletteMarigoldBorderActive));
parcelHelpers.export(exports, "colorPaletteMarigoldBorder1", ()=>(0, _designTokensJs.colorPaletteMarigoldBorder1));
parcelHelpers.export(exports, "colorPaletteMarigoldBorder2", ()=>(0, _designTokensJs.colorPaletteMarigoldBorder2));
parcelHelpers.export(exports, "colorPaletteDarkRedBackground2", ()=>(0, _designTokensJs.colorPaletteDarkRedBackground2));
parcelHelpers.export(exports, "colorPaletteDarkRedForeground2", ()=>(0, _designTokensJs.colorPaletteDarkRedForeground2));
parcelHelpers.export(exports, "colorPaletteDarkRedBorderActive", ()=>(0, _designTokensJs.colorPaletteDarkRedBorderActive));
parcelHelpers.export(exports, "colorPaletteCranberryBackground2", ()=>(0, _designTokensJs.colorPaletteCranberryBackground2));
parcelHelpers.export(exports, "colorPaletteCranberryForeground2", ()=>(0, _designTokensJs.colorPaletteCranberryForeground2));
parcelHelpers.export(exports, "colorPaletteCranberryBorderActive", ()=>(0, _designTokensJs.colorPaletteCranberryBorderActive));
parcelHelpers.export(exports, "colorPalettePumpkinBackground2", ()=>(0, _designTokensJs.colorPalettePumpkinBackground2));
parcelHelpers.export(exports, "colorPalettePumpkinForeground2", ()=>(0, _designTokensJs.colorPalettePumpkinForeground2));
parcelHelpers.export(exports, "colorPalettePumpkinBorderActive", ()=>(0, _designTokensJs.colorPalettePumpkinBorderActive));
parcelHelpers.export(exports, "colorPalettePeachBackground2", ()=>(0, _designTokensJs.colorPalettePeachBackground2));
parcelHelpers.export(exports, "colorPalettePeachForeground2", ()=>(0, _designTokensJs.colorPalettePeachForeground2));
parcelHelpers.export(exports, "colorPalettePeachBorderActive", ()=>(0, _designTokensJs.colorPalettePeachBorderActive));
parcelHelpers.export(exports, "colorPaletteGoldBackground2", ()=>(0, _designTokensJs.colorPaletteGoldBackground2));
parcelHelpers.export(exports, "colorPaletteGoldForeground2", ()=>(0, _designTokensJs.colorPaletteGoldForeground2));
parcelHelpers.export(exports, "colorPaletteGoldBorderActive", ()=>(0, _designTokensJs.colorPaletteGoldBorderActive));
parcelHelpers.export(exports, "colorPaletteBrassBackground2", ()=>(0, _designTokensJs.colorPaletteBrassBackground2));
parcelHelpers.export(exports, "colorPaletteBrassForeground2", ()=>(0, _designTokensJs.colorPaletteBrassForeground2));
parcelHelpers.export(exports, "colorPaletteBrassBorderActive", ()=>(0, _designTokensJs.colorPaletteBrassBorderActive));
parcelHelpers.export(exports, "colorPaletteBrownBackground2", ()=>(0, _designTokensJs.colorPaletteBrownBackground2));
parcelHelpers.export(exports, "colorPaletteBrownForeground2", ()=>(0, _designTokensJs.colorPaletteBrownForeground2));
parcelHelpers.export(exports, "colorPaletteBrownBorderActive", ()=>(0, _designTokensJs.colorPaletteBrownBorderActive));
parcelHelpers.export(exports, "colorPaletteForestBackground2", ()=>(0, _designTokensJs.colorPaletteForestBackground2));
parcelHelpers.export(exports, "colorPaletteForestForeground2", ()=>(0, _designTokensJs.colorPaletteForestForeground2));
parcelHelpers.export(exports, "colorPaletteForestBorderActive", ()=>(0, _designTokensJs.colorPaletteForestBorderActive));
parcelHelpers.export(exports, "colorPaletteSeafoamBackground2", ()=>(0, _designTokensJs.colorPaletteSeafoamBackground2));
parcelHelpers.export(exports, "colorPaletteSeafoamForeground2", ()=>(0, _designTokensJs.colorPaletteSeafoamForeground2));
parcelHelpers.export(exports, "colorPaletteSeafoamBorderActive", ()=>(0, _designTokensJs.colorPaletteSeafoamBorderActive));
parcelHelpers.export(exports, "colorPaletteDarkGreenBackground2", ()=>(0, _designTokensJs.colorPaletteDarkGreenBackground2));
parcelHelpers.export(exports, "colorPaletteDarkGreenForeground2", ()=>(0, _designTokensJs.colorPaletteDarkGreenForeground2));
parcelHelpers.export(exports, "colorPaletteDarkGreenBorderActive", ()=>(0, _designTokensJs.colorPaletteDarkGreenBorderActive));
parcelHelpers.export(exports, "colorPaletteLightTealBackground2", ()=>(0, _designTokensJs.colorPaletteLightTealBackground2));
parcelHelpers.export(exports, "colorPaletteLightTealForeground2", ()=>(0, _designTokensJs.colorPaletteLightTealForeground2));
parcelHelpers.export(exports, "colorPaletteLightTealBorderActive", ()=>(0, _designTokensJs.colorPaletteLightTealBorderActive));
parcelHelpers.export(exports, "colorPaletteTealBackground2", ()=>(0, _designTokensJs.colorPaletteTealBackground2));
parcelHelpers.export(exports, "colorPaletteTealForeground2", ()=>(0, _designTokensJs.colorPaletteTealForeground2));
parcelHelpers.export(exports, "colorPaletteTealBorderActive", ()=>(0, _designTokensJs.colorPaletteTealBorderActive));
parcelHelpers.export(exports, "colorPaletteSteelBackground2", ()=>(0, _designTokensJs.colorPaletteSteelBackground2));
parcelHelpers.export(exports, "colorPaletteSteelForeground2", ()=>(0, _designTokensJs.colorPaletteSteelForeground2));
parcelHelpers.export(exports, "colorPaletteSteelBorderActive", ()=>(0, _designTokensJs.colorPaletteSteelBorderActive));
parcelHelpers.export(exports, "colorPaletteBlueBackground2", ()=>(0, _designTokensJs.colorPaletteBlueBackground2));
parcelHelpers.export(exports, "colorPaletteBlueForeground2", ()=>(0, _designTokensJs.colorPaletteBlueForeground2));
parcelHelpers.export(exports, "colorPaletteBlueBorderActive", ()=>(0, _designTokensJs.colorPaletteBlueBorderActive));
parcelHelpers.export(exports, "colorPaletteRoyalBlueBackground2", ()=>(0, _designTokensJs.colorPaletteRoyalBlueBackground2));
parcelHelpers.export(exports, "colorPaletteRoyalBlueForeground2", ()=>(0, _designTokensJs.colorPaletteRoyalBlueForeground2));
parcelHelpers.export(exports, "colorPaletteRoyalBlueBorderActive", ()=>(0, _designTokensJs.colorPaletteRoyalBlueBorderActive));
parcelHelpers.export(exports, "colorPaletteCornflowerBackground2", ()=>(0, _designTokensJs.colorPaletteCornflowerBackground2));
parcelHelpers.export(exports, "colorPaletteCornflowerForeground2", ()=>(0, _designTokensJs.colorPaletteCornflowerForeground2));
parcelHelpers.export(exports, "colorPaletteCornflowerBorderActive", ()=>(0, _designTokensJs.colorPaletteCornflowerBorderActive));
parcelHelpers.export(exports, "colorPaletteNavyBackground2", ()=>(0, _designTokensJs.colorPaletteNavyBackground2));
parcelHelpers.export(exports, "colorPaletteNavyForeground2", ()=>(0, _designTokensJs.colorPaletteNavyForeground2));
parcelHelpers.export(exports, "colorPaletteNavyBorderActive", ()=>(0, _designTokensJs.colorPaletteNavyBorderActive));
parcelHelpers.export(exports, "colorPaletteLavenderBackground2", ()=>(0, _designTokensJs.colorPaletteLavenderBackground2));
parcelHelpers.export(exports, "colorPaletteLavenderForeground2", ()=>(0, _designTokensJs.colorPaletteLavenderForeground2));
parcelHelpers.export(exports, "colorPaletteLavenderBorderActive", ()=>(0, _designTokensJs.colorPaletteLavenderBorderActive));
parcelHelpers.export(exports, "colorPalettePurpleBackground2", ()=>(0, _designTokensJs.colorPalettePurpleBackground2));
parcelHelpers.export(exports, "colorPalettePurpleForeground2", ()=>(0, _designTokensJs.colorPalettePurpleForeground2));
parcelHelpers.export(exports, "colorPalettePurpleBorderActive", ()=>(0, _designTokensJs.colorPalettePurpleBorderActive));
parcelHelpers.export(exports, "colorPaletteGrapeBackground2", ()=>(0, _designTokensJs.colorPaletteGrapeBackground2));
parcelHelpers.export(exports, "colorPaletteGrapeForeground2", ()=>(0, _designTokensJs.colorPaletteGrapeForeground2));
parcelHelpers.export(exports, "colorPaletteGrapeBorderActive", ()=>(0, _designTokensJs.colorPaletteGrapeBorderActive));
parcelHelpers.export(exports, "colorPaletteLilacBackground2", ()=>(0, _designTokensJs.colorPaletteLilacBackground2));
parcelHelpers.export(exports, "colorPaletteLilacForeground2", ()=>(0, _designTokensJs.colorPaletteLilacForeground2));
parcelHelpers.export(exports, "colorPaletteLilacBorderActive", ()=>(0, _designTokensJs.colorPaletteLilacBorderActive));
parcelHelpers.export(exports, "colorPalettePinkBackground2", ()=>(0, _designTokensJs.colorPalettePinkBackground2));
parcelHelpers.export(exports, "colorPalettePinkForeground2", ()=>(0, _designTokensJs.colorPalettePinkForeground2));
parcelHelpers.export(exports, "colorPalettePinkBorderActive", ()=>(0, _designTokensJs.colorPalettePinkBorderActive));
parcelHelpers.export(exports, "colorPaletteMagentaBackground2", ()=>(0, _designTokensJs.colorPaletteMagentaBackground2));
parcelHelpers.export(exports, "colorPaletteMagentaForeground2", ()=>(0, _designTokensJs.colorPaletteMagentaForeground2));
parcelHelpers.export(exports, "colorPaletteMagentaBorderActive", ()=>(0, _designTokensJs.colorPaletteMagentaBorderActive));
parcelHelpers.export(exports, "colorPalettePlumBackground2", ()=>(0, _designTokensJs.colorPalettePlumBackground2));
parcelHelpers.export(exports, "colorPalettePlumForeground2", ()=>(0, _designTokensJs.colorPalettePlumForeground2));
parcelHelpers.export(exports, "colorPalettePlumBorderActive", ()=>(0, _designTokensJs.colorPalettePlumBorderActive));
parcelHelpers.export(exports, "colorPaletteBeigeBackground2", ()=>(0, _designTokensJs.colorPaletteBeigeBackground2));
parcelHelpers.export(exports, "colorPaletteBeigeForeground2", ()=>(0, _designTokensJs.colorPaletteBeigeForeground2));
parcelHelpers.export(exports, "colorPaletteBeigeBorderActive", ()=>(0, _designTokensJs.colorPaletteBeigeBorderActive));
parcelHelpers.export(exports, "colorPaletteMinkBackground2", ()=>(0, _designTokensJs.colorPaletteMinkBackground2));
parcelHelpers.export(exports, "colorPaletteMinkForeground2", ()=>(0, _designTokensJs.colorPaletteMinkForeground2));
parcelHelpers.export(exports, "colorPaletteMinkBorderActive", ()=>(0, _designTokensJs.colorPaletteMinkBorderActive));
parcelHelpers.export(exports, "colorPalettePlatinumBackground2", ()=>(0, _designTokensJs.colorPalettePlatinumBackground2));
parcelHelpers.export(exports, "colorPalettePlatinumForeground2", ()=>(0, _designTokensJs.colorPalettePlatinumForeground2));
parcelHelpers.export(exports, "colorPalettePlatinumBorderActive", ()=>(0, _designTokensJs.colorPalettePlatinumBorderActive));
parcelHelpers.export(exports, "colorPaletteAnchorBackground2", ()=>(0, _designTokensJs.colorPaletteAnchorBackground2));
parcelHelpers.export(exports, "colorPaletteAnchorForeground2", ()=>(0, _designTokensJs.colorPaletteAnchorForeground2));
parcelHelpers.export(exports, "colorPaletteAnchorBorderActive", ()=>(0, _designTokensJs.colorPaletteAnchorBorderActive));
parcelHelpers.export(exports, "colorPaletteRedForegroundInverted", ()=>(0, _designTokensJs.colorPaletteRedForegroundInverted));
parcelHelpers.export(exports, "colorPaletteGreenForegroundInverted", ()=>(0, _designTokensJs.colorPaletteGreenForegroundInverted));
parcelHelpers.export(exports, "colorPaletteYellowForegroundInverted", ()=>(0, _designTokensJs.colorPaletteYellowForegroundInverted));
parcelHelpers.export(exports, "shadow2", ()=>(0, _designTokensJs.shadow2));
parcelHelpers.export(exports, "shadow4", ()=>(0, _designTokensJs.shadow4));
parcelHelpers.export(exports, "shadow8", ()=>(0, _designTokensJs.shadow8));
parcelHelpers.export(exports, "shadow16", ()=>(0, _designTokensJs.shadow16));
parcelHelpers.export(exports, "shadow28", ()=>(0, _designTokensJs.shadow28));
parcelHelpers.export(exports, "shadow64", ()=>(0, _designTokensJs.shadow64));
parcelHelpers.export(exports, "shadow2Brand", ()=>(0, _designTokensJs.shadow2Brand));
parcelHelpers.export(exports, "shadow4Brand", ()=>(0, _designTokensJs.shadow4Brand));
parcelHelpers.export(exports, "shadow8Brand", ()=>(0, _designTokensJs.shadow8Brand));
parcelHelpers.export(exports, "shadow16Brand", ()=>(0, _designTokensJs.shadow16Brand));
parcelHelpers.export(exports, "shadow28Brand", ()=>(0, _designTokensJs.shadow28Brand));
parcelHelpers.export(exports, "shadow64Brand", ()=>(0, _designTokensJs.shadow64Brand));
parcelHelpers.export(exports, "setTheme", ()=>(0, _setThemeJs.setTheme));
parcelHelpers.export(exports, "setThemeFor", ()=>(0, _setThemeJs.setThemeFor));
var _designTokensJs = require("./design-tokens.js");
var _setThemeJs = require("./set-theme.js");

},{"./design-tokens.js":"5zHiq","./set-theme.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cd0ab":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reflectAttributes", ()=>(0, _reflectAttributesJs.reflectAttributes));
var _indexJs = require("./accordion-item/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./accordion/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _indexJs2 = require("./anchor/index.js");
parcelHelpers.exportAll(_indexJs2, exports);
var _indexJs3 = require("./anchored-region/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
var _indexJs4 = require("./avatar/index.js");
parcelHelpers.exportAll(_indexJs4, exports);
var _indexJs5 = require("./badge/index.js");
parcelHelpers.exportAll(_indexJs5, exports);
var _indexJs6 = require("./breadcrumb-item/index.js");
parcelHelpers.exportAll(_indexJs6, exports);
var _indexJs7 = require("./breadcrumb/index.js");
parcelHelpers.exportAll(_indexJs7, exports);
var _indexJs8 = require("./button/index.js");
parcelHelpers.exportAll(_indexJs8, exports);
var _indexJs9 = require("./calendar/index.js");
parcelHelpers.exportAll(_indexJs9, exports);
var _indexJs10 = require("./card/index.js");
parcelHelpers.exportAll(_indexJs10, exports);
var _indexJs11 = require("./checkbox/index.js");
parcelHelpers.exportAll(_indexJs11, exports);
var _indexJs12 = require("./combobox/index.js");
parcelHelpers.exportAll(_indexJs12, exports);
var _indexJs13 = require("./data-grid/index.js");
parcelHelpers.exportAll(_indexJs13, exports);
var _exportsJs = require("./design-token/exports.js");
parcelHelpers.exportAll(_exportsJs, exports);
var _indexJs14 = require("./dialog/index.js");
parcelHelpers.exportAll(_indexJs14, exports);
var _reflectAttributesJs = require("./directives/reflect-attributes.js");
var _indexJs15 = require("./disclosure/index.js");
parcelHelpers.exportAll(_indexJs15, exports);
var _indexJs16 = require("./divider/index.js");
parcelHelpers.exportAll(_indexJs16, exports);
var _indexJs17 = require("./flipper/index.js");
parcelHelpers.exportAll(_indexJs17, exports);
var _indexJs18 = require("./form-associated/index.js");
parcelHelpers.exportAll(_indexJs18, exports);
var _indexJs19 = require("./listbox-option/index.js");
parcelHelpers.exportAll(_indexJs19, exports);
var _indexJs20 = require("./listbox/index.js");
parcelHelpers.exportAll(_indexJs20, exports);
var _indexJs21 = require("./picker/index.js");
parcelHelpers.exportAll(_indexJs21, exports);
var _indexJs22 = require("./menu-item/index.js");
parcelHelpers.exportAll(_indexJs22, exports);
var _indexJs23 = require("./menu/index.js");
parcelHelpers.exportAll(_indexJs23, exports);
var _indexJs24 = require("./number-field/index.js");
parcelHelpers.exportAll(_indexJs24, exports);
var _indexJs25 = require("./patterns/index.js");
parcelHelpers.exportAll(_indexJs25, exports);
var _indexJs26 = require("./progress-ring/index.js");
parcelHelpers.exportAll(_indexJs26, exports);
var _indexJs27 = require("./progress/index.js");
parcelHelpers.exportAll(_indexJs27, exports);
var _indexJs28 = require("./radio-group/index.js");
parcelHelpers.exportAll(_indexJs28, exports);
var _indexJs29 = require("./radio/index.js");
parcelHelpers.exportAll(_indexJs29, exports);
var _indexJs30 = require("./horizontal-scroll/index.js");
parcelHelpers.exportAll(_indexJs30, exports);
var _indexJs31 = require("./search/index.js");
parcelHelpers.exportAll(_indexJs31, exports);
var _indexJs32 = require("./select/index.js");
parcelHelpers.exportAll(_indexJs32, exports);
var _indexJs33 = require("./skeleton/index.js");
parcelHelpers.exportAll(_indexJs33, exports);
var _indexJs34 = require("./slider-label/index.js");
parcelHelpers.exportAll(_indexJs34, exports);
var _indexJs35 = require("./slider/index.js");
parcelHelpers.exportAll(_indexJs35, exports);
var _indexJs36 = require("./switch/index.js");
parcelHelpers.exportAll(_indexJs36, exports);
var _indexJs37 = require("./tab-panel/index.js");
parcelHelpers.exportAll(_indexJs37, exports);
var _indexJs38 = require("./tab/index.js");
parcelHelpers.exportAll(_indexJs38, exports);
var _indexJs39 = require("./tabs/index.js");
parcelHelpers.exportAll(_indexJs39, exports);
var _indexJs40 = require("./text-area/index.js");
parcelHelpers.exportAll(_indexJs40, exports);
var _indexJs41 = require("./text-field/index.js");
parcelHelpers.exportAll(_indexJs41, exports);
var _indexJs42 = require("./toolbar/index.js");
parcelHelpers.exportAll(_indexJs42, exports);
var _indexJs43 = require("./tooltip/index.js");
parcelHelpers.exportAll(_indexJs43, exports);
var _indexJs44 = require("./tree-item/index.js");
parcelHelpers.exportAll(_indexJs44, exports);
var _indexJs45 = require("./tree-view/index.js");
parcelHelpers.exportAll(_indexJs45, exports);
// export our utilities
var _indexJs46 = require("./utilities/index.js");
parcelHelpers.exportAll(_indexJs46, exports);

},{"./accordion-item/index.js":false,"./accordion/index.js":false,"./anchor/index.js":false,"./anchored-region/index.js":false,"./avatar/index.js":false,"./badge/index.js":false,"./breadcrumb-item/index.js":false,"./breadcrumb/index.js":false,"./button/index.js":false,"./calendar/index.js":false,"./card/index.js":false,"./checkbox/index.js":false,"./combobox/index.js":false,"./data-grid/index.js":false,"./design-token/exports.js":false,"./dialog/index.js":false,"./directives/reflect-attributes.js":false,"./disclosure/index.js":false,"./divider/index.js":false,"./flipper/index.js":false,"./form-associated/index.js":false,"./listbox-option/index.js":false,"./listbox/index.js":false,"./picker/index.js":false,"./menu-item/index.js":false,"./menu/index.js":false,"./number-field/index.js":false,"./patterns/index.js":"hRQyq","./progress-ring/index.js":false,"./progress/index.js":false,"./radio-group/index.js":false,"./radio/index.js":false,"./horizontal-scroll/index.js":false,"./search/index.js":false,"./select/index.js":false,"./skeleton/index.js":false,"./slider-label/index.js":false,"./slider/index.js":false,"./switch/index.js":false,"./tab-panel/index.js":false,"./tab/index.js":false,"./tabs/index.js":false,"./text-area/index.js":false,"./text-field/index.js":false,"./toolbar/index.js":false,"./tooltip/index.js":false,"./tree-item/index.js":false,"./tree-view/index.js":false,"./utilities/index.js":"2QYLV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRQyq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tagFor", ()=>(0, _tagForJs.tagFor));
parcelHelpers.export(exports, "ARIAGlobalStatesAndProperties", ()=>(0, _ariaGlobalJs.ARIAGlobalStatesAndProperties));
parcelHelpers.export(exports, "endSlotTemplate", ()=>(0, _startEndJs.endSlotTemplate));
parcelHelpers.export(exports, "StartEnd", ()=>(0, _startEndJs.StartEnd));
parcelHelpers.export(exports, "startSlotTemplate", ()=>(0, _startEndJs.startSlotTemplate));
var _tagForJs = require("./tag-for.js");
var _ariaGlobalJs = require("./aria-global.js");
var _startEndJs = require("./start-end.js");

},{"./tag-for.js":false,"./aria-global.js":false,"./start-end.js":"9b5mM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9b5mM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A mixin class implementing start and end slots.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */ parcelHelpers.export(exports, "StartEnd", ()=>StartEnd);
/**
 * The template for the end slot.
 * For use with {@link StartEnd}
 *
 * @public
 */ parcelHelpers.export(exports, "endSlotTemplate", ()=>endSlotTemplate);
/**
 * The template for the start slots.
 * For use with {@link StartEnd}
 *
 * @public
 */ parcelHelpers.export(exports, "startSlotTemplate", ()=>startSlotTemplate);
var _fastElement = require("@microsoft/fast-element");
var _templateHelpersJs = require("../utilities/template-helpers.js");
class StartEnd {
}
function endSlotTemplate(options) {
    return (0, _fastElement.html)`
        <slot name="end" ${(0, _fastElement.ref)("end")}>${(0, _templateHelpersJs.staticallyCompose)(options.end)}</slot>
    `.inline();
}
function startSlotTemplate(options) {
    return (0, _fastElement.html)`
        <slot name="start" ${(0, _fastElement.ref)("start")}>${(0, _templateHelpersJs.staticallyCompose)(options.start)}</slot>
    `.inline();
}

},{"@microsoft/fast-element":"j6ee6","../utilities/template-helpers.js":"floPl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"floPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A function to compose template options.
 * @public
 */ parcelHelpers.export(exports, "staticallyCompose", ()=>staticallyCompose);
var _fastElement = require("@microsoft/fast-element");
function staticallyCompose(item) {
    if (!item) return (0, _fastElement.InlineTemplateDirective).empty;
    if (typeof item === "string") return new (0, _fastElement.InlineTemplateDirective)(item);
    if ("inline" in item) return item.inline();
    return item;
}

},{"@microsoft/fast-element":"j6ee6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QYLV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDirection", ()=>(0, _directionJs.getDirection));
parcelHelpers.export(exports, "darkModeStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.darkModeStylesheetBehavior));
parcelHelpers.export(exports, "lightModeStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.lightModeStylesheetBehavior));
parcelHelpers.export(exports, "forcedColorsStylesheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.forcedColorsStylesheetBehavior));
parcelHelpers.export(exports, "MatchMediaBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.MatchMediaBehavior));
parcelHelpers.export(exports, "MatchMediaStyleSheetBehavior", ()=>(0, _matchMediaStylesheetBehaviorJs.MatchMediaStyleSheetBehavior));
parcelHelpers.export(exports, "PropertyStyleSheetBehavior", ()=>(0, _propertyStylesheetBehaviorJs.PropertyStyleSheetBehavior));
parcelHelpers.export(exports, "disabledCursor", ()=>(0, _indexJs.disabledCursor));
parcelHelpers.export(exports, "display", ()=>(0, _indexJs.display));
parcelHelpers.export(exports, "hidden", ()=>(0, _indexJs.hidden));
parcelHelpers.export(exports, "focusVisible", ()=>(0, _indexJs.focusVisible));
parcelHelpers.export(exports, "whitespaceFilter", ()=>(0, _whitespaceFilterJs.whitespaceFilter));
parcelHelpers.export(exports, "staticallyCompose", ()=>(0, _templateHelpersJs.staticallyCompose));
var _directionJs = require("./direction.js");
var _matchMediaStylesheetBehaviorJs = require("./match-media-stylesheet-behavior.js");
var _propertyStylesheetBehaviorJs = require("./property-stylesheet-behavior.js");
var _indexJs = require("./style/index.js");
var _typingsJs = require("./typings.js");
var _whitespaceFilterJs = require("./whitespace-filter.js");
var _templateHelpersJs = require("./template-helpers.js");

},{"./direction.js":false,"./match-media-stylesheet-behavior.js":false,"./property-stylesheet-behavior.js":false,"./style/index.js":"3ML6s","./typings.js":false,"./whitespace-filter.js":false,"./template-helpers.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ML6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disabledCursor", ()=>(0, _disabledJs.disabledCursor));
parcelHelpers.export(exports, "display", ()=>(0, _displayJs.display));
parcelHelpers.export(exports, "hidden", ()=>(0, _displayJs.hidden));
parcelHelpers.export(exports, "focusVisible", ()=>(0, _focusJs.focusVisible));
var _disabledJs = require("./disabled.js");
var _displayJs = require("./display.js");
var _focusJs = require("./focus.js");

},{"./disabled.js":false,"./display.js":"1VZJe","./focus.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VZJe":[function(require,module,exports) {
/**
 * A CSS fragment to set `display: none;` when the host is hidden using the [hidden] attribute.
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hidden", ()=>hidden);
/**
 * Applies a CSS display property.
 * Also adds CSS rules to not display the element when the [hidden] attribute is applied to the element.
 * @param display - The CSS display property value
 * @public
 */ parcelHelpers.export(exports, "display", ()=>display);
const hidden = `:host([hidden]){display:none}`;
function display(displayValue) {
    return `${hidden}:host{display:${displayValue}}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5wkx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionEdge", ()=>Yi);
parcelHelpers.export(exports, "MultiView", ()=>at);
parcelHelpers.export(exports, "MultiViewController", ()=>_i);
parcelHelpers.export(exports, "MultiViewControllerDefinition", ()=>Wi);
parcelHelpers.export(exports, "MultiViewDefinition", ()=>Hi);
parcelHelpers.export(exports, "MultiViewGroup", ()=>qi);
parcelHelpers.export(exports, "MultiViewGroupDefinition", ()=>Xi);
parcelHelpers.export(exports, "Popover", ()=>os);
parcelHelpers.export(exports, "PopoverDefinition", ()=>rs);
parcelHelpers.export(exports, "PopoverEventNames", ()=>es);
parcelHelpers.export(exports, "PopoverPositions", ()=>Zi);
parcelHelpers.export(exports, "PopoverRepositionModes", ()=>Ji);
parcelHelpers.export(exports, "PopoverStyles", ()=>is);
parcelHelpers.export(exports, "PopoverTemplate", ()=>ss);
parcelHelpers.export(exports, "PositioningShorthand", ()=>Qi);
parcelHelpers.export(exports, "Step", ()=>as);
parcelHelpers.export(exports, "StepDefinition", ()=>ps);
parcelHelpers.export(exports, "StepState", ()=>ns);
parcelHelpers.export(exports, "Stepper", ()=>fs);
parcelHelpers.export(exports, "StepperDefinition", ()=>ms);
parcelHelpers.export(exports, "SvgIcon", ()=>Ss);
parcelHelpers.export(exports, "SvgIconDefinition", ()=>Ps);
parcelHelpers.export(exports, "TeachingBubble", ()=>Es);
parcelHelpers.export(exports, "TeachingBubbleDefinition", ()=>$s);
parcelHelpers.export(exports, "TeachingBubblePlacement", ()=>Fs);
parcelHelpers.export(exports, "TeachingBubbleSize", ()=>Is);
parcelHelpers.export(exports, "Wizard", ()=>Vs);
parcelHelpers.export(exports, "WizardDefinition", ()=>zs);
parcelHelpers.export(exports, "WizardPanel", ()=>Hs);
parcelHelpers.export(exports, "WizardPanelDefinition", ()=>Gs);
parcelHelpers.export(exports, "WizardStep", ()=>Ls);
parcelHelpers.export(exports, "WizardStepDefinition", ()=>Os);
parcelHelpers.export(exports, "WizardStepState", ()=>ns);
parcelHelpers.export(exports, "multiViewControllerStyles", ()=>ji);
parcelHelpers.export(exports, "multiViewControllerTemplate", ()=>Gi);
parcelHelpers.export(exports, "multiViewGroupStyles", ()=>Ki);
parcelHelpers.export(exports, "multiViewGroupTemplate", ()=>Ui);
parcelHelpers.export(exports, "multiViewStyles", ()=>Di);
parcelHelpers.export(exports, "multiViewTemplate", ()=>zi);
parcelHelpers.export(exports, "stepStyles", ()=>ls);
parcelHelpers.export(exports, "stepTemplate", ()=>us);
parcelHelpers.export(exports, "stepperStyles", ()=>gs);
parcelHelpers.export(exports, "stepperTemplate", ()=>vs);
parcelHelpers.export(exports, "styles", ()=>Ms);
parcelHelpers.export(exports, "svgIconStyles", ()=>Cs);
parcelHelpers.export(exports, "svgIconTemplate", ()=>Bs);
parcelHelpers.export(exports, "teachingBubbleStyles", ()=>As);
parcelHelpers.export(exports, "teachingBubbleTemplate", ()=>Ts);
parcelHelpers.export(exports, "template", ()=>Ns);
parcelHelpers.export(exports, "wizardPanelStyles", ()=>_s);
parcelHelpers.export(exports, "wizardPanelTemplate", ()=>js);
parcelHelpers.export(exports, "wizardStyles", ()=>Rs);
parcelHelpers.export(exports, "wizardTemplate", ()=>Ds);
var global = arguments[3];
function e(e, t, o, i) {
    var s, r = arguments.length, n = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, i);
    else for(var a = e.length - 1; a >= 0; a--)(s = e[a]) && (n = (r < 3 ? s(n) : r > 3 ? s(t, o, n) : s(t, o)) || n);
    return r > 3 && n && Object.defineProperty(t, o, n), n;
}
let t;
"function" == typeof SuppressedError && SuppressedError;
const o = "fast-kernel";
try {
    if (document.currentScript) t = document.currentScript.getAttribute(o);
    else {
        const e = document.getElementsByTagName("script");
        t = e[e.length - 1].getAttribute(o);
    }
} catch (e) {
    t = "isolate";
}
let i;
switch(t){
    case "share":
        i = Object.freeze({
            updateQueue: 1,
            observable: 2,
            contextEvent: 3,
            elementRegistry: 4
        });
        break;
    case "share-v2":
        i = Object.freeze({
            updateQueue: 1.2,
            observable: 2.2,
            contextEvent: 3.2,
            elementRegistry: 4.2
        });
        break;
    default:
        const e1 = `-${Math.random().toString(36).substring(2, 8)}`;
        i = Object.freeze({
            updateQueue: `1.2${e1}`,
            observable: `2.2${e1}`,
            contextEvent: `3.2${e1}`,
            elementRegistry: `4.2${e1}`
        });
}
const s = (e)=>"function" == typeof e, r = (e)=>"string" == typeof e, n = ()=>{};
var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
!function() {
    if ("undefined" == typeof globalThis) {
        if (void 0 !== a) a.globalThis = a;
        else if ("undefined" != typeof self) self.globalThis = self;
        else if ("undefined" != typeof window) window.globalThis = window;
        else {
            const e = new Function("return this")();
            e.globalThis = e;
        }
    }
}();
const l = {
    configurable: !1,
    enumerable: !1,
    writable: !1
};
void 0 === globalThis.FAST && Reflect.defineProperty(globalThis, "FAST", Object.assign({
    value: Object.create(null)
}, l));
const d = globalThis.FAST;
if (void 0 === d.getById) {
    const e = Object.create(null);
    Reflect.defineProperty(d, "getById", Object.assign({
        value (t, o) {
            let i = e[t];
            return void 0 === i && (i = o ? e[t] = o() : null), i;
        }
    }, l));
}
void 0 === d.error && Object.assign(d, {
    warn () {},
    error: (e)=>new Error(`Error ${e}`),
    addMessages () {}
});
const c = Object.freeze([]);
function h() {
    const e = new Map;
    return Object.freeze({
        register: (t)=>!e.has(t.type) && (e.set(t.type, t), !0),
        getByType: (t)=>e.get(t),
        getForInstance (t) {
            if (null != t) return e.get(t.constructor);
        }
    });
}
function u() {
    const e = new WeakMap;
    return function(t) {
        let o = e.get(t);
        if (void 0 === o) {
            let i = Reflect.getPrototypeOf(t);
            for(; void 0 === o && null !== i;)o = e.get(i), i = Reflect.getPrototypeOf(i);
            o = void 0 === o ? [] : o.slice(0), e.set(t, o);
        }
        return o;
    };
}
function p(e) {
    e.prototype.toJSON = n;
}
const f = Object.freeze({
    none: 0,
    attribute: 1,
    booleanAttribute: 2,
    property: 3,
    content: 4,
    tokenList: 5,
    event: 6
}), g = (e)=>e, v = globalThis.trustedTypes ? globalThis.trustedTypes.createPolicy("fast-html", {
    createHTML: g
}) : {
    createHTML: g
};
let m = Object.freeze({
    createHTML: (e)=>v.createHTML(e),
    protect: (e, t, o, i)=>i
});
const b = m, w = Object.freeze({
    get policy () {
        return m;
    },
    setPolicy (e) {
        if (m !== b) throw d.error(1201);
        m = e;
    },
    setAttribute (e, t, o) {
        null == o ? e.removeAttribute(t) : e.setAttribute(t, o);
    },
    setBooleanAttribute (e, t, o) {
        o ? e.setAttribute(t, "") : e.removeAttribute(t);
    }
}), y = d.getById(i.updateQueue, ()=>{
    const e = [], t = [], o = globalThis.requestAnimationFrame;
    let i = !0;
    function s() {
        if (t.length) throw t.shift();
    }
    function r(o) {
        try {
            o.call();
        } catch (o) {
            if (!i) throw e.length = 0, o;
            t.push(o), setTimeout(s, 0);
        }
    }
    function n() {
        let t = 0;
        for(; t < e.length;)if (r(e[t]), t++, t > 1024) {
            for(let o = 0, i = e.length - t; o < i; o++)e[o] = e[o + t];
            e.length -= t, t = 0;
        }
        e.length = 0;
    }
    function a(t) {
        e.push(t), e.length < 2 && (i ? o(n) : n());
    }
    return Object.freeze({
        enqueue: a,
        next: ()=>new Promise(a),
        process: n,
        setMode: (e)=>i = e
    });
});
class x {
    constructor(e, t){
        this.sub1 = void 0, this.sub2 = void 0, this.spillover = void 0, this.subject = e, this.sub1 = t;
    }
    has(e) {
        return void 0 === this.spillover ? this.sub1 === e || this.sub2 === e : -1 !== this.spillover.indexOf(e);
    }
    subscribe(e) {
        const t = this.spillover;
        if (void 0 === t) {
            if (this.has(e)) return;
            if (void 0 === this.sub1) return void (this.sub1 = e);
            if (void 0 === this.sub2) return void (this.sub2 = e);
            this.spillover = [
                this.sub1,
                this.sub2,
                e
            ], this.sub1 = void 0, this.sub2 = void 0;
        } else -1 === t.indexOf(e) && t.push(e);
    }
    unsubscribe(e) {
        const t = this.spillover;
        if (void 0 === t) this.sub1 === e ? this.sub1 = void 0 : this.sub2 === e && (this.sub2 = void 0);
        else {
            const o = t.indexOf(e);
            -1 !== o && t.splice(o, 1);
        }
    }
    notify(e) {
        const t = this.spillover, o = this.subject;
        if (void 0 === t) {
            const t = this.sub1, i = this.sub2;
            void 0 !== t && t.handleChange(o, e), void 0 !== i && i.handleChange(o, e);
        } else for(let i = 0, s = t.length; i < s; ++i)t[i].handleChange(o, e);
    }
}
class k {
    constructor(e){
        this.subscribers = {}, this.subjectSubscribers = null, this.subject = e;
    }
    notify(e) {
        var t, o;
        null === (t = this.subscribers[e]) || void 0 === t || t.notify(e), null === (o = this.subjectSubscribers) || void 0 === o || o.notify(e);
    }
    subscribe(e, t) {
        var o, i;
        let s;
        s = t ? null !== (o = this.subscribers[t]) && void 0 !== o ? o : this.subscribers[t] = new x(this.subject) : null !== (i = this.subjectSubscribers) && void 0 !== i ? i : this.subjectSubscribers = new x(this.subject), s.subscribe(e);
    }
    unsubscribe(e, t) {
        var o, i;
        t ? null === (o = this.subscribers[t]) || void 0 === o || o.unsubscribe(e) : null === (i = this.subjectSubscribers) || void 0 === i || i.unsubscribe(e);
    }
}
const S = Object.freeze({
    unknown: void 0,
    coupled: 1
}), C = d.getById(i.observable, ()=>{
    const e = y.enqueue, t = /(:|&&|\|\||if|\?\.)/, o = new WeakMap;
    let i, n = (e)=>{
        throw d.error(1101);
    };
    function a(e) {
        var t;
        let i = null !== (t = e.$fastController) && void 0 !== t ? t : o.get(e);
        return void 0 === i && (Array.isArray(e) ? i = n(e) : o.set(e, i = new k(e))), i;
    }
    const l = u();
    class c {
        constructor(e){
            this.name = e, this.field = `_${e}`, this.callback = `${e}Changed`;
        }
        getValue(e) {
            return void 0 !== i && i.watch(e, this.name), e[this.field];
        }
        setValue(e, t) {
            const o = this.field, i = e[o];
            if (i !== t) {
                e[o] = t;
                const r = e[this.callback];
                s(r) && r.call(e, i, t), a(e).notify(this.name);
            }
        }
    }
    class h extends x {
        constructor(e, t, o = !1){
            super(e, t), this.expression = e, this.isVolatileBinding = o, this.needsRefresh = !0, this.needsQueue = !0, this.isAsync = !0, this.first = this, this.last = null, this.propertySource = void 0, this.propertyName = void 0, this.notifier = void 0, this.next = void 0;
        }
        setMode(e) {
            this.isAsync = this.needsQueue = e;
        }
        bind(e) {
            this.controller = e;
            const t = this.observe(e.source, e.context);
            return !e.isBound && this.requiresUnbind(e) && e.onUnbind(this), t;
        }
        requiresUnbind(e) {
            return e.sourceLifetime !== S.coupled || this.first !== this.last || this.first.propertySource !== e.source;
        }
        unbind(e) {
            this.dispose();
        }
        observe(e, t) {
            this.needsRefresh && null !== this.last && this.dispose();
            const o = i;
            let s;
            i = this.needsRefresh ? this : void 0, this.needsRefresh = this.isVolatileBinding;
            try {
                s = this.expression(e, t);
            } finally{
                i = o;
            }
            return s;
        }
        disconnect() {
            this.dispose();
        }
        dispose() {
            if (null !== this.last) {
                let e = this.first;
                for(; void 0 !== e;)e.notifier.unsubscribe(this, e.propertyName), e = e.next;
                this.last = null, this.needsRefresh = this.needsQueue = this.isAsync;
            }
        }
        watch(e, t) {
            const o = this.last, s = a(e), r = null === o ? this.first : {};
            if (r.propertySource = e, r.propertyName = t, r.notifier = s, s.subscribe(this, t), null !== o) {
                if (!this.needsRefresh) {
                    let t;
                    i = void 0, t = o.propertySource[o.propertyName], i = this, e === t && (this.needsRefresh = !0);
                }
                o.next = r;
            }
            this.last = r;
        }
        handleChange() {
            this.needsQueue ? (this.needsQueue = !1, e(this)) : this.isAsync || this.call();
        }
        call() {
            null !== this.last && (this.needsQueue = this.isAsync, this.notify(this));
        }
        *records() {
            let e = this.first;
            for(; void 0 !== e;)yield e, e = e.next;
        }
    }
    return p(h), Object.freeze({
        setArrayObserverFactory (e) {
            n = e;
        },
        getNotifier: a,
        track (e, t) {
            i && i.watch(e, t);
        },
        trackVolatile () {
            i && (i.needsRefresh = !0);
        },
        notify (e, t) {
            a(e).notify(t);
        },
        defineProperty (e, t) {
            r(t) && (t = new c(t)), l(e).push(t), Reflect.defineProperty(e, t.name, {
                enumerable: !0,
                get () {
                    return t.getValue(this);
                },
                set (e) {
                    t.setValue(this, e);
                }
            });
        },
        getAccessors: l,
        binding (e, t, o = this.isVolatileBinding(e)) {
            return new h(e, t, o);
        },
        isVolatileBinding: (e)=>t.test(e.toString())
    });
});
function B(e, t) {
    C.defineProperty(e, t);
}
const P = d.getById(i.contextEvent, ()=>{
    let e = null;
    return {
        get: ()=>e,
        set (t) {
            e = t;
        }
    };
}), E = Object.freeze({
    default: {
        index: 0,
        length: 0,
        get event () {
            return E.getEvent();
        },
        eventDetail () {
            return this.event.detail;
        },
        eventTarget () {
            return this.event.target;
        }
    },
    getEvent: ()=>P.get(),
    setEvent (e) {
        P.set(e);
    }
});
class A {
    constructor(e, t, o = !1){
        this.evaluate = e, this.policy = t, this.isVolatile = o;
    }
}
class T extends A {
    createObserver(e) {
        return C.binding(this.evaluate, e, this.isVolatile);
    }
}
function $(e, t, o = C.isVolatileBinding(e)) {
    return new T(e, t, o);
}
class I extends A {
    createObserver() {
        return this;
    }
    bind(e) {
        return this.evaluate(e.source, e.context);
    }
}
function F(e, t) {
    return new I(e, t);
}
let L;
function M(e) {
    return e.map((e)=>e instanceof N ? M(e.styles) : [
            e
        ]).reduce((e, t)=>e.concat(t), []);
}
p(I);
class N {
    constructor(e){
        this.styles = e, this.targets = new WeakSet, this._strategy = null, this.behaviors = e.map((e)=>e instanceof N ? e.behaviors : null).reduce((e, t)=>null === t ? e : null === e ? t : e.concat(t), null);
    }
    get strategy() {
        return null === this._strategy && this.withStrategy(L), this._strategy;
    }
    addStylesTo(e) {
        this.strategy.addStylesTo(e), this.targets.add(e);
    }
    removeStylesFrom(e) {
        this.strategy.removeStylesFrom(e), this.targets.delete(e);
    }
    isAttachedTo(e) {
        return this.targets.has(e);
    }
    withBehaviors(...e) {
        return this.behaviors = null === this.behaviors ? e : this.behaviors.concat(e), this;
    }
    withStrategy(e) {
        return this._strategy = new e(M(this.styles)), this;
    }
    static setDefaultStrategy(e) {
        L = e;
    }
    static normalize(e) {
        return void 0 === e ? void 0 : Array.isArray(e) ? new N(e) : e instanceof N ? e : new N([
            e
        ]);
    }
}
N.supportsAdoptedStyleSheets = Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype;
const O = h(), V = Object.freeze({
    getForInstance: O.getForInstance,
    getByType: O.getByType,
    define: (e)=>(O.register({
            type: e
        }), e)
});
function R(e, t, o) {
    t.source.style.setProperty(e.targetAspect, o.bind(t));
}
class D {
    constructor(e, t){
        this.dataBinding = e, this.targetAspect = t;
    }
    createCSS(e) {
        return e(this), `var(${this.targetAspect})`;
    }
    addedCallback(e) {
        var t;
        const o = e.source;
        if (!o.$cssBindings) {
            o.$cssBindings = new Map;
            const e = o.setAttribute;
            o.setAttribute = (t, i)=>{
                e.call(o, t, i), "style" === t && o.$cssBindings.forEach((e, t)=>R(t, e.controller, e.observer));
            };
        }
        const i = null !== (t = e[this.targetAspect]) && void 0 !== t ? t : e[this.targetAspect] = this.dataBinding.createObserver(this, this);
        i.controller = e, e.source.$cssBindings.set(this, {
            controller: e,
            observer: i
        });
    }
    connectedCallback(e) {
        R(this, e, e[this.targetAspect]);
    }
    removedCallback(e) {
        e.source.$cssBindings && e.source.$cssBindings.delete(this);
    }
    handleChange(e, t) {
        R(this, t.controller, t);
    }
}
V.define(D);
const z = `${Math.random().toString(36).substring(2, 8)}`;
let H = 0;
const _ = ()=>`--v${z}${++H}`;
function j(e, t) {
    const o = [];
    let i = "";
    const r = [], n = (e)=>{
        r.push(e);
    };
    for(let r = 0, a = e.length - 1; r < a; ++r){
        i += e[r];
        let a = t[r];
        s(a) ? a = new D($(a), _()).createCSS(n) : a instanceof A ? a = new D(a, _()).createCSS(n) : void 0 !== V.getForInstance(a) && (a = a.createCSS(n)), a instanceof N || a instanceof CSSStyleSheet ? ("" !== i.trim() && (o.push(i), i = ""), o.push(a)) : i += a;
    }
    return i += e[e.length - 1], "" !== i.trim() && o.push(i), {
        styles: o,
        behaviors: r
    };
}
const G = (e, ...t)=>{
    const { styles: o, behaviors: i } = j(e, t), s = new N(o);
    return i.length ? s.withBehaviors(...i) : s;
};
class W {
    constructor(e, t){
        this.behaviors = t, this.css = "";
        const o = e.reduce((e, t)=>(r(t) ? this.css += t : e.push(t), e), []);
        o.length && (this.styles = new N(o));
    }
    createCSS(e) {
        return this.behaviors.forEach(e), this.styles && e(this), this.css;
    }
    addedCallback(e) {
        e.addStyles(this.styles);
    }
    removedCallback(e) {
        e.removeStyles(this.styles);
    }
}
V.define(W), G.partial = (e, ...t)=>{
    const { styles: o, behaviors: i } = j(e, t);
    return new W(o, i);
};
const q = `fast-${Math.random().toString(36).substring(2, 8)}`, K = `${q}{`, U = `}${q}`, X = U.length;
let Y = 0;
const Q = ()=>`${q}-${++Y}`, Z = Object.freeze({
    interpolation: (e)=>`${K}${e}${U}`,
    attribute: (e)=>`${Q()}="${K}${e}${U}"`,
    comment: (e)=>`\x3c!--${K}${e}${U}--\x3e`
}), J = Object.freeze({
    parse (e, t) {
        const o = e.split(K);
        if (1 === o.length) return null;
        const i = [];
        for(let e = 0, s = o.length; e < s; ++e){
            const s = o[e], r = s.indexOf(U);
            let n;
            if (-1 === r) n = s;
            else {
                const e = s.substring(0, r);
                i.push(t[e]), n = s.substring(r + X);
            }
            "" !== n && i.push(n);
        }
        return i;
    }
}), ee = h(), te = Object.freeze({
    getForInstance: ee.getForInstance,
    getByType: ee.getByType,
    define: (e, t)=>((t = t || {}).type = e, ee.register(t), e),
    assignAspect (e, t) {
        if (t) switch(e.sourceAspect = t, t[0]){
            case ":":
                e.targetAspect = t.substring(1), e.aspectType = "classList" === e.targetAspect ? f.tokenList : f.property;
                break;
            case "?":
                e.targetAspect = t.substring(1), e.aspectType = f.booleanAttribute;
                break;
            case "@":
                e.targetAspect = t.substring(1), e.aspectType = f.event;
                break;
            default:
                e.targetAspect = t, e.aspectType = f.attribute;
        }
        else e.aspectType = f.content;
    }
});
class oe {
    constructor(e){
        this.options = e;
    }
    createHTML(e) {
        return Z.attribute(e(this));
    }
    createBehavior() {
        return this;
    }
}
p(oe);
const ie = {
    [f.attribute]: w.setAttribute,
    [f.booleanAttribute]: w.setBooleanAttribute,
    [f.property]: (e, t, o)=>e[t] = o,
    [f.content]: function(e, t, o, i) {
        if (null == o && (o = ""), o.create) {
            e.textContent = "";
            let t = e.$fastView;
            void 0 === t ? t = o.create() : e.$fastTemplate !== o && (t.isComposed && (t.remove(), t.unbind()), t = o.create()), t.isComposed ? t.needsBindOnly && (t.needsBindOnly = !1, t.bind(i.source, i.context)) : (t.isComposed = !0, t.bind(i.source, i.context), t.insertBefore(e), e.$fastView = t, e.$fastTemplate = o);
        } else {
            const t = e.$fastView;
            void 0 !== t && t.isComposed && (t.isComposed = !1, t.remove(), t.needsBindOnly ? t.needsBindOnly = !1 : t.unbind()), e.textContent = o;
        }
    },
    [f.tokenList]: function(e, t, o) {
        var i;
        const s = `${this.id}-t`, r = null !== (i = e[s]) && void 0 !== i ? i : e[s] = {
            v: 0,
            cv: Object.create(null)
        }, n = r.cv;
        let a = r.v;
        const l = e[t];
        if (null != o && o.length) {
            const e = o.split(/\s+/);
            for(let t = 0, o = e.length; t < o; ++t){
                const o = e[t];
                "" !== o && (n[o] = a, l.add(o));
            }
        }
        if (r.v = a + 1, 0 !== a) {
            a -= 1;
            for(const e in n)n[e] === a && l.remove(e);
        }
    },
    [f.event]: ()=>{}
};
class se {
    constructor(e){
        this.dataBinding = e, this.updateTarget = null, this.aspectType = f.content;
    }
    createHTML(e) {
        return Z.interpolation(e(this));
    }
    createBehavior() {
        var e;
        if (null === this.updateTarget) {
            const t = ie[this.aspectType], o = null !== (e = this.dataBinding.policy) && void 0 !== e ? e : this.policy;
            if (!t) throw d.error(1205);
            this.data = `${this.id}-d`, this.updateTarget = o.protect(this.targetTagName, this.aspectType, this.targetAspect, t);
        }
        return this;
    }
    bind(e) {
        var t;
        const o = e.targets[this.targetNodeId];
        switch(this.aspectType){
            case f.event:
                o[this.data] = e, o.addEventListener(this.targetAspect, this, this.dataBinding.options);
                break;
            case f.content:
                e.onUnbind(this);
            default:
                const i = null !== (t = o[this.data]) && void 0 !== t ? t : o[this.data] = this.dataBinding.createObserver(this, this);
                i.target = o, i.controller = e, this.updateTarget(o, this.targetAspect, i.bind(e), e);
        }
    }
    unbind(e) {
        const t = e.targets[this.targetNodeId].$fastView;
        void 0 !== t && t.isComposed && (t.unbind(), t.needsBindOnly = !0);
    }
    handleEvent(e) {
        const t = e.currentTarget[this.data];
        if (t.isBound) {
            E.setEvent(e);
            const o = this.dataBinding.evaluate(t.source, t.context);
            E.setEvent(null), !0 !== o && e.preventDefault();
        }
    }
    handleChange(e, t) {
        const o = t.target, i = t.controller;
        this.updateTarget(o, this.targetAspect, t.bind(i), i);
    }
}
function re(e, t) {
    const o = e.parentNode;
    let i, s = e;
    for(; s !== t;)i = s.nextSibling, o.removeChild(s), s = i;
    o.removeChild(t);
}
te.define(se, {
    aspected: !0
});
class ne {
    constructor(e, t, o){
        this.fragment = e, this.factories = t, this.targets = o, this.behaviors = null, this.unbindables = [], this.source = null, this.isBound = !1, this.sourceLifetime = S.unknown, this.context = this, this.index = 0, this.length = 0, this.firstChild = e.firstChild, this.lastChild = e.lastChild;
    }
    get event() {
        return E.getEvent();
    }
    get isEven() {
        return this.index % 2 == 0;
    }
    get isOdd() {
        return this.index % 2 != 0;
    }
    get isFirst() {
        return 0 === this.index;
    }
    get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    get isLast() {
        return this.index === this.length - 1;
    }
    eventDetail() {
        return this.event.detail;
    }
    eventTarget() {
        return this.event.target;
    }
    appendTo(e) {
        e.appendChild(this.fragment);
    }
    insertBefore(e) {
        if (this.fragment.hasChildNodes()) e.parentNode.insertBefore(this.fragment, e);
        else {
            const t = this.lastChild;
            if (e.previousSibling === t) return;
            const o = e.parentNode;
            let i, s = this.firstChild;
            for(; s !== t;)i = s.nextSibling, o.insertBefore(s, e), s = i;
            o.insertBefore(t, e);
        }
    }
    remove() {
        const e = this.fragment, t = this.lastChild;
        let o, i = this.firstChild;
        for(; i !== t;)o = i.nextSibling, e.appendChild(i), i = o;
        e.appendChild(t);
    }
    dispose() {
        re(this.firstChild, this.lastChild), this.unbind();
    }
    onUnbind(e) {
        this.unbindables.push(e);
    }
    bind(e, t = this) {
        if (this.source === e) return;
        let o = this.behaviors;
        if (null === o) {
            this.source = e, this.context = t, this.behaviors = o = new Array(this.factories.length);
            const i = this.factories;
            for(let e = 0, t = i.length; e < t; ++e){
                const t = i[e].createBehavior();
                t.bind(this), o[e] = t;
            }
        } else {
            null !== this.source && this.evaluateUnbindables(), this.isBound = !1, this.source = e, this.context = t;
            for(let e = 0, t = o.length; e < t; ++e)o[e].bind(this);
        }
        this.isBound = !0;
    }
    unbind() {
        this.isBound && null !== this.source && (this.evaluateUnbindables(), this.source = null, this.context = this, this.isBound = !1);
    }
    evaluateUnbindables() {
        const e = this.unbindables;
        for(let t = 0, o = e.length; t < o; ++t)e[t].unbind(this);
        e.length = 0;
    }
    static disposeContiguousBatch(e) {
        if (0 !== e.length) {
            re(e[0].firstChild, e[e.length - 1].lastChild);
            for(let t = 0, o = e.length; t < o; ++t)e[t].unbind();
        }
    }
}
p(ne), C.defineProperty(ne.prototype, "index"), C.defineProperty(ne.prototype, "length");
const ae = (e, t)=>`${e}.${t}`, le = {}, de = {
    index: 0,
    node: null
};
function ce(e) {
    e.startsWith("fast-") || d.warn(1204, {
        name: e
    });
}
const he = new Proxy(document.createElement("div"), {
    get (e, t) {
        ce(t);
        const o = Reflect.get(e, t);
        return s(o) ? o.bind(e) : o;
    },
    set: (e, t, o)=>(ce(t), Reflect.set(e, t, o))
});
class ue {
    constructor(e, t, o){
        this.fragment = e, this.directives = t, this.policy = o, this.proto = null, this.nodeIds = new Set, this.descriptors = {}, this.factories = [];
    }
    addFactory(e, t, o, i, s) {
        var r, n;
        this.nodeIds.has(o) || (this.nodeIds.add(o), this.addTargetDescriptor(t, o, i)), e.id = null !== (r = e.id) && void 0 !== r ? r : Q(), e.targetNodeId = o, e.targetTagName = s, e.policy = null !== (n = e.policy) && void 0 !== n ? n : this.policy, this.factories.push(e);
    }
    freeze() {
        return this.proto = Object.create(null, this.descriptors), this;
    }
    addTargetDescriptor(e, t, o) {
        const i = this.descriptors;
        if ("r" === t || "h" === t || i[t]) return;
        if (!i[e]) {
            const t = e.lastIndexOf("."), o = e.substring(0, t), i = parseInt(e.substring(t + 1));
            this.addTargetDescriptor(o, e, i);
        }
        let s = le[t];
        if (!s) {
            const i = `_${t}`;
            le[t] = s = {
                get () {
                    var t;
                    return null !== (t = this[i]) && void 0 !== t ? t : this[i] = this[e].childNodes[o];
                }
            };
        }
        i[t] = s;
    }
    createView(e) {
        const t = this.fragment.cloneNode(!0), o = Object.create(this.proto);
        o.r = t, o.h = null != e ? e : he;
        for (const e of this.nodeIds)o[e];
        return new ne(t, this.factories, o);
    }
}
function pe(e, t, o, i, s, r = !1) {
    const n = o.attributes, a = e.directives;
    for(let l = 0, d = n.length; l < d; ++l){
        const c = n[l], h = c.value, u = J.parse(h, a);
        let p = null;
        null === u ? r && (p = new se(F(()=>h, e.policy)), te.assignAspect(p, c.name)) : p = me.aggregate(u, e.policy), null !== p && (o.removeAttributeNode(c), l--, d--, e.addFactory(p, t, i, s, o.tagName));
    }
}
function fe(e, t, o) {
    let i = 0, s = t.firstChild;
    for(; s;){
        const t = ge(e, o, s, i);
        s = t.node, i = t.index;
    }
}
function ge(e, t, o, i) {
    const s = ae(t, i);
    switch(o.nodeType){
        case 1:
            pe(e, t, o, s, i), fe(e, o, s);
            break;
        case 3:
            return function(e, t, o, i, s) {
                const n = J.parse(t.textContent, e.directives);
                if (null === n) return de.node = t.nextSibling, de.index = s + 1, de;
                let a, l = a = t;
                for(let t = 0, d = n.length; t < d; ++t){
                    const d = n[t];
                    0 !== t && (s++, i = ae(o, s), a = l.parentNode.insertBefore(document.createTextNode(""), l.nextSibling)), r(d) ? a.textContent = d : (a.textContent = " ", te.assignAspect(d), e.addFactory(d, o, i, s, null)), l = a;
                }
                return de.index = s + 1, de.node = l.nextSibling, de;
            }(e, o, t, s, i);
        case 8:
            const n = J.parse(o.data, e.directives);
            null !== n && e.addFactory(me.aggregate(n), t, s, i, null);
    }
    return de.index = i + 1, de.node = o.nextSibling, de;
}
const ve = "TEMPLATE", me = {
    compile (e, t, o = w.policy) {
        let i;
        if (r(e)) {
            i = document.createElement(ve), i.innerHTML = o.createHTML(e);
            const t = i.content.firstElementChild;
            null !== t && t.tagName === ve && (i = t);
        } else i = e;
        i.content.firstChild || i.content.lastChild || i.content.appendChild(document.createComment(""));
        const s = document.adoptNode(i.content), n = new ue(s, t, o);
        var a, l;
        return pe(n, "", i, "h", 0, !0), a = s.firstChild, l = t, (a && 8 == a.nodeType && null !== J.parse(a.data, l) || 1 === s.childNodes.length && Object.keys(t).length > 0) && s.insertBefore(document.createComment(""), s.firstChild), fe(n, s, "r"), de.node = null, n.freeze();
    },
    setDefaultStrategy (e) {
        this.compile = e;
    },
    aggregate (e, t = w.policy) {
        if (1 === e.length) return e[0];
        let o, i, s, n = !1;
        const a = e.length, l = e.map((e)=>r(e) ? ()=>e : (o = e.sourceAspect || o, i = e.dataBinding || i, n = n || e.dataBinding.isVolatile, s = s || e.dataBinding.policy, e.dataBinding.evaluate));
        i.evaluate = (e, t)=>{
            let o = "";
            for(let i = 0; i < a; ++i)o += l[i](e, t);
            return o;
        }, i.isVolatile = n, i.policy = null != s ? s : t;
        const d = new se(i);
        return te.assignAspect(d, o), d;
    }
}, be = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/, we = Object.create(null);
class ye {
    constructor(e, t = we){
        this.html = e, this.factories = t;
    }
    createHTML(e) {
        const t = this.factories;
        for(const o in t)e(t[o]);
        return this.html;
    }
}
function xe(e, t, o, i = te.getForInstance(e)) {
    if (i.aspected) {
        const o = be.exec(t);
        null !== o && te.assignAspect(e, o[2]);
    }
    return e.createHTML(o);
}
ye.empty = new ye(""), te.define(ye);
class ke {
    constructor(e, t = {}, o){
        this.policy = o, this.result = null, this.html = e, this.factories = t;
    }
    create(e) {
        return null === this.result && (this.result = me.compile(this.html, this.factories, this.policy)), this.result.createView(e);
    }
    inline() {
        return new ye(r(this.html) ? this.html : this.html.innerHTML, this.factories);
    }
    withPolicy(e) {
        if (this.result) throw d.error(1208);
        if (this.policy) throw d.error(1207);
        return this.policy = e, this;
    }
    render(e, t, o) {
        const i = this.create(o);
        return i.bind(e), i.appendTo(t), i;
    }
    static create(e, t, o) {
        let i = "";
        const r = Object.create(null), n = (e)=>{
            var t;
            const o = null !== (t = e.id) && void 0 !== t ? t : e.id = Q();
            return r[o] = e, o;
        };
        for(let o = 0, r = e.length - 1; o < r; ++o){
            const r = e[o];
            let a, l = t[o];
            if (i += r, s(l)) l = new se($(l));
            else if (l instanceof A) l = new se(l);
            else if (!(a = te.getForInstance(l))) {
                const e = l;
                l = new se(F(()=>e));
            }
            i += xe(l, r, n, a);
        }
        return new ke(i + e[e.length - 1], r, o);
    }
}
p(ke);
const Se = (e, ...t)=>{
    if (Array.isArray(e) && Array.isArray(e.raw)) return ke.create(e, t);
    throw d.error(1206);
};
Se.partial = (e)=>new ye(e);
class Ce extends oe {
    bind(e) {
        e.source[this.options] = e.targets[this.targetNodeId];
    }
}
te.define(Ce);
const Be = (e)=>new Ce(e), Pe = ()=>null;
function Ee(e) {
    return void 0 === e ? Pe : s(e) ? e : ()=>e;
}
function Ae(e, t, o) {
    const i = s(e) ? e : ()=>e, r = Ee(t), n = Ee(o);
    return (e, t)=>i(e, t) ? r(e, t) : n(e, t);
}
class Te extends oe {
    get id() {
        return this._id;
    }
    set id(e) {
        this._id = e, this._controllerProperty = `${e}-c`;
    }
    bind(e) {
        const t = e.targets[this.targetNodeId];
        t[this._controllerProperty] = e, this.updateTarget(e.source, this.computeNodes(t)), this.observe(t), e.onUnbind(this);
    }
    unbind(e) {
        const t = e.targets[this.targetNodeId];
        this.updateTarget(e.source, c), this.disconnect(t), t[this._controllerProperty] = null;
    }
    getSource(e) {
        return e[this._controllerProperty].source;
    }
    updateTarget(e, t) {
        e[this.options.property] = t;
    }
    computeNodes(e) {
        let t = this.getNodes(e);
        return "filter" in this.options && (t = t.filter(this.options.filter)), t;
    }
}
const $e = "slotchange";
class Ie extends Te {
    observe(e) {
        e.addEventListener($e, this);
    }
    disconnect(e) {
        e.removeEventListener($e, this);
    }
    getNodes(e) {
        return e.assignedNodes(this.options);
    }
    handleEvent(e) {
        const t = e.currentTarget;
        this.updateTarget(this.getSource(t), this.computeNodes(t));
    }
}
function Fe(e) {
    return r(e) && (e = {
        property: e
    }), new Ie(e);
}
te.define(Ie);
const Le = "boolean", Me = "reflect", Ne = Object.freeze({
    locate: u()
}), Oe = {
    toView: (e)=>e ? "true" : "false",
    fromView: (e)=>null != e && "false" !== e && !1 !== e && 0 !== e
};
function Ve(e) {
    if (null == e) return null;
    const t = 1 * e;
    return isNaN(t) ? null : t;
}
const Re = {
    toView (e) {
        const t = Ve(e);
        return t ? t.toString() : t;
    },
    fromView: Ve
};
class De {
    constructor(e, t, o = t.toLowerCase(), i = Me, s){
        this.guards = new Set, this.Owner = e, this.name = t, this.attribute = o, this.mode = i, this.converter = s, this.fieldName = `_${t}`, this.callbackName = `${t}Changed`, this.hasCallback = this.callbackName in e.prototype, i === Le && void 0 === s && (this.converter = Oe);
    }
    setValue(e, t) {
        const o = e[this.fieldName], i = this.converter;
        void 0 !== i && (t = i.fromView(t)), o !== t && (e[this.fieldName] = t, this.tryReflectToAttribute(e), this.hasCallback && e[this.callbackName](o, t), e.$fastController.notify(this.name));
    }
    getValue(e) {
        return C.track(e, this.name), e[this.fieldName];
    }
    onAttributeChangedCallback(e, t) {
        this.guards.has(e) || (this.guards.add(e), this.setValue(e, t), this.guards.delete(e));
    }
    tryReflectToAttribute(e) {
        const t = this.mode, o = this.guards;
        o.has(e) || "fromView" === t || y.enqueue(()=>{
            o.add(e);
            const i = e[this.fieldName];
            switch(t){
                case Me:
                    const t1 = this.converter;
                    w.setAttribute(e, this.attribute, void 0 !== t1 ? t1.toView(i) : i);
                    break;
                case Le:
                    w.setBooleanAttribute(e, this.attribute, i);
            }
            o.delete(e);
        });
    }
    static collect(e, ...t) {
        const o = [];
        t.push(Ne.locate(e));
        for(let i = 0, s = t.length; i < s; ++i){
            const s = t[i];
            if (void 0 !== s) for(let t = 0, i = s.length; t < i; ++t){
                const i = s[t];
                r(i) ? o.push(new De(e, i)) : o.push(new De(e, i.property, i.attribute, i.mode, i.converter));
            }
        }
        return o;
    }
}
function ze(e, t) {
    let o;
    function i(e, t) {
        arguments.length > 1 && (o.property = t), Ne.locate(e.constructor).push(o);
    }
    return arguments.length > 1 ? (o = {}, void i(e, t)) : (o = void 0 === e ? {} : e, i);
}
const He = {
    mode: "open"
}, _e = {}, je = new Set, Ge = d.getById(i.elementRegistry, ()=>h());
class We {
    constructor(e, t = e.definition){
        var o;
        this.platformDefined = !1, r(t) && (t = {
            name: t
        }), this.type = e, this.name = t.name, this.template = t.template, this.registry = null !== (o = t.registry) && void 0 !== o ? o : customElements;
        const i = e.prototype, s = De.collect(e, t.attributes), n = new Array(s.length), a = {}, l = {};
        for(let e = 0, t = s.length; e < t; ++e){
            const t = s[e];
            n[e] = t.attribute, a[t.name] = t, l[t.attribute] = t, C.defineProperty(i, t);
        }
        Reflect.defineProperty(e, "observedAttributes", {
            value: n,
            enumerable: !0
        }), this.attributes = s, this.propertyLookup = a, this.attributeLookup = l, this.shadowOptions = void 0 === t.shadowOptions ? He : null === t.shadowOptions ? void 0 : Object.assign(Object.assign({}, He), t.shadowOptions), this.elementOptions = void 0 === t.elementOptions ? _e : Object.assign(Object.assign({}, _e), t.elementOptions), this.styles = N.normalize(t.styles), Ge.register(this);
    }
    get isDefined() {
        return this.platformDefined;
    }
    define(e = this.registry) {
        const t = this.type;
        return e.get(this.name) || (this.platformDefined = !0, e.define(this.name, t, this.elementOptions)), this;
    }
    static compose(e, t) {
        return je.has(e) || Ge.getByType(e) ? new We(class extends e {
        }, t) : new We(e, t);
    }
    static registerBaseType(e) {
        je.add(e);
    }
}
We.getByType = Ge.getByType, We.getForInstance = Ge.getForInstance;
const qe = {
    bubbles: !0,
    composed: !0,
    cancelable: !0
}, Ke = "isConnected", Ue = new WeakMap;
function Xe(e) {
    var t, o;
    return null !== (o = null !== (t = e.shadowRoot) && void 0 !== t ? t : Ue.get(e)) && void 0 !== o ? o : null;
}
let Ye;
class Qe extends k {
    constructor(e, t){
        super(e), this.boundObservables = null, this.needsInitialization = !0, this.hasExistingShadowRoot = !1, this._template = null, this.stage = 3, this.guardBehaviorConnection = !1, this.behaviors = null, this._mainStyles = null, this.$fastController = this, this.view = null, this.source = e, this.definition = t;
        const o = t.shadowOptions;
        if (void 0 !== o) {
            let t = e.shadowRoot;
            t ? this.hasExistingShadowRoot = !0 : (t = e.attachShadow(o), "closed" === o.mode && Ue.set(e, t));
        }
        const i = C.getAccessors(e);
        if (i.length > 0) {
            const t = this.boundObservables = Object.create(null);
            for(let o = 0, s = i.length; o < s; ++o){
                const s = i[o].name, r = e[s];
                void 0 !== r && (delete e[s], t[s] = r);
            }
        }
    }
    get isConnected() {
        return C.track(this, Ke), 1 === this.stage;
    }
    get context() {
        var e, t;
        return null !== (t = null === (e = this.view) || void 0 === e ? void 0 : e.context) && void 0 !== t ? t : E.default;
    }
    get isBound() {
        var e, t;
        return null !== (t = null === (e = this.view) || void 0 === e ? void 0 : e.isBound) && void 0 !== t && t;
    }
    get sourceLifetime() {
        var e;
        return null === (e = this.view) || void 0 === e ? void 0 : e.sourceLifetime;
    }
    get template() {
        var e;
        if (null === this._template) {
            const t = this.definition;
            this.source.resolveTemplate ? this._template = this.source.resolveTemplate() : t.template && (this._template = null !== (e = t.template) && void 0 !== e ? e : null);
        }
        return this._template;
    }
    set template(e) {
        this._template !== e && (this._template = e, this.needsInitialization || this.renderTemplate(e));
    }
    get mainStyles() {
        var e;
        if (null === this._mainStyles) {
            const t = this.definition;
            this.source.resolveStyles ? this._mainStyles = this.source.resolveStyles() : t.styles && (this._mainStyles = null !== (e = t.styles) && void 0 !== e ? e : null);
        }
        return this._mainStyles;
    }
    set mainStyles(e) {
        this._mainStyles !== e && (null !== this._mainStyles && this.removeStyles(this._mainStyles), this._mainStyles = e, this.needsInitialization || this.addStyles(e));
    }
    onUnbind(e) {
        var t;
        null === (t = this.view) || void 0 === t || t.onUnbind(e);
    }
    addBehavior(e) {
        var t, o;
        const i = null !== (t = this.behaviors) && void 0 !== t ? t : this.behaviors = new Map, s = null !== (o = i.get(e)) && void 0 !== o ? o : 0;
        0 === s ? (i.set(e, 1), e.addedCallback && e.addedCallback(this), !e.connectedCallback || this.guardBehaviorConnection || 1 !== this.stage && 0 !== this.stage || e.connectedCallback(this)) : i.set(e, s + 1);
    }
    removeBehavior(e, t = !1) {
        const o = this.behaviors;
        if (null === o) return;
        const i = o.get(e);
        void 0 !== i && (1 === i || t ? (o.delete(e), e.disconnectedCallback && 3 !== this.stage && e.disconnectedCallback(this), e.removedCallback && e.removedCallback(this)) : o.set(e, i - 1));
    }
    addStyles(e) {
        var t;
        if (!e) return;
        const o = this.source;
        if (e instanceof HTMLElement) (null !== (t = Xe(o)) && void 0 !== t ? t : this.source).append(e);
        else if (!e.isAttachedTo(o)) {
            const t = e.behaviors;
            if (e.addStylesTo(o), null !== t) for(let e = 0, o = t.length; e < o; ++e)this.addBehavior(t[e]);
        }
    }
    removeStyles(e) {
        var t;
        if (!e) return;
        const o = this.source;
        if (e instanceof HTMLElement) (null !== (t = Xe(o)) && void 0 !== t ? t : o).removeChild(e);
        else if (e.isAttachedTo(o)) {
            const t = e.behaviors;
            if (e.removeStylesFrom(o), null !== t) for(let e = 0, o = t.length; e < o; ++e)this.removeBehavior(t[e]);
        }
    }
    connect() {
        if (3 !== this.stage) return;
        if (this.stage = 0, null !== this.boundObservables) {
            const e = this.source, t = this.boundObservables, o = Object.keys(t);
            for(let i = 0, s = o.length; i < s; ++i){
                const s = o[i];
                e[s] = t[s];
            }
            this.boundObservables = null;
        }
        const e = this.behaviors;
        if (null !== e) {
            this.guardBehaviorConnection = !0;
            for (const t of e.keys())t.connectedCallback && t.connectedCallback(this);
            this.guardBehaviorConnection = !1;
        }
        this.needsInitialization ? (this.renderTemplate(this.template), this.addStyles(this.mainStyles), this.needsInitialization = !1) : null !== this.view && this.view.bind(this.source), this.stage = 1, C.notify(this, Ke);
    }
    disconnect() {
        if (1 !== this.stage) return;
        this.stage = 2, C.notify(this, Ke), null !== this.view && this.view.unbind();
        const e = this.behaviors;
        if (null !== e) for (const t of e.keys())t.disconnectedCallback && t.disconnectedCallback(this);
        this.stage = 3;
    }
    onAttributeChangedCallback(e, t, o) {
        const i = this.definition.attributeLookup[e];
        void 0 !== i && i.onAttributeChangedCallback(this.source, o);
    }
    emit(e, t, o) {
        return 1 === this.stage && this.source.dispatchEvent(new CustomEvent(e, Object.assign(Object.assign({
            detail: t
        }, qe), o)));
    }
    renderTemplate(e) {
        var t;
        const o = this.source, i = null !== (t = Xe(o)) && void 0 !== t ? t : o;
        if (null !== this.view) this.view.dispose(), this.view = null;
        else if (!this.needsInitialization || this.hasExistingShadowRoot) {
            this.hasExistingShadowRoot = !1;
            for(let e = i.firstChild; null !== e; e = i.firstChild)i.removeChild(e);
        }
        e && (this.view = e.render(o, i, o), this.view.sourceLifetime = S.coupled);
    }
    static forCustomElement(e) {
        const t = e.$fastController;
        if (void 0 !== t) return t;
        const o = We.getForInstance(e);
        if (void 0 === o) throw d.error(1401);
        return e.$fastController = new Ye(e, o);
    }
    static setStrategy(e) {
        Ye = e;
    }
}
function Ze(e) {
    var t;
    return "adoptedStyleSheets" in e ? e : null !== (t = Xe(e)) && void 0 !== t ? t : e.getRootNode();
}
p(Qe), Qe.setStrategy(Qe);
class Je {
    constructor(e){
        const t = Je.styleSheetCache;
        this.sheets = e.map((e)=>{
            if (e instanceof CSSStyleSheet) return e;
            let o = t.get(e);
            return void 0 === o && (o = new CSSStyleSheet, o.replaceSync(e), t.set(e, o)), o;
        });
    }
    addStylesTo(e) {
        it(Ze(e), this.sheets);
    }
    removeStylesFrom(e) {
        st(Ze(e), this.sheets);
    }
}
Je.styleSheetCache = new Map;
let et = 0;
function tt(e) {
    return e === document ? document.body : e;
}
class ot {
    constructor(e){
        this.styles = e, this.styleClass = "fast-" + ++et;
    }
    addStylesTo(e) {
        e = tt(Ze(e));
        const t = this.styles, o = this.styleClass;
        for(let i = 0; i < t.length; i++){
            const s = document.createElement("style");
            s.innerHTML = t[i], s.className = o, e.append(s);
        }
    }
    removeStylesFrom(e) {
        const t = (e = tt(Ze(e))).querySelectorAll(`.${this.styleClass}`);
        for(let o = 0, i = t.length; o < i; ++o)e.removeChild(t[o]);
    }
}
let it = (e, t)=>{
    e.adoptedStyleSheets = [
        ...e.adoptedStyleSheets,
        ...t
    ];
}, st = (e, t)=>{
    e.adoptedStyleSheets = e.adoptedStyleSheets.filter((e)=>-1 === t.indexOf(e));
};
if (N.supportsAdoptedStyleSheets) {
    try {
        document.adoptedStyleSheets.push(), document.adoptedStyleSheets.splice(), it = (e, t)=>{
            e.adoptedStyleSheets.push(...t);
        }, st = (e, t)=>{
            for (const o of t){
                const t = e.adoptedStyleSheets.indexOf(o);
                -1 !== t && e.adoptedStyleSheets.splice(t, 1);
            }
        };
    } catch (e) {}
    N.setDefaultStrategy(Je);
} else N.setDefaultStrategy(ot);
function rt(e) {
    const t = class extends e {
        constructor(){
            super(), Qe.forCustomElement(this);
        }
        $emit(e, t, o) {
            return this.$fastController.emit(e, t, o);
        }
        connectedCallback() {
            this.$fastController.connect();
        }
        disconnectedCallback() {
            this.$fastController.disconnect();
        }
        attributeChangedCallback(e, t, o) {
            this.$fastController.onAttributeChangedCallback(e, t, o);
        }
    };
    return We.registerBaseType(t), t;
}
const nt = Object.assign(rt(HTMLElement), {
    from: function(e) {
        return rt(e);
    },
    define: function(e, t) {
        return s(e) ? We.compose(e, t).define().type : We.compose(this, e).define().type;
    },
    compose: function(e, t) {
        return s(e) ? We.compose(e, t) : We.compose(this, e);
    }
});
class at extends nt {
    constructor(){
        super(...arguments), this.hidden = !0;
    }
    hiddenChanged(e, t) {
        e !== t && this.$emit("hiddenchanged", this.hidden);
    }
}
e([
    ze({
        mode: "boolean"
    })
], at.prototype, "hidden", void 0);
const lt = Object.freeze({
    prefix: "fabric",
    shadowRootMode: "open",
    registry: customElements
}), dt = "ArrowDown", ct = "ArrowUp", ht = "Enter", ut = "Escape", pt = "Home", ft = "Tab";
let gt = 0;
function vt(e = "") {
    return `${e}${gt++}`;
}
function mt(e) {
    return e ? "string" == typeof e ? new ye(e) : "inline" in e ? e.inline() : e : ye.empty;
}
function bt(e) {
    return Se`
        <slot name="end" ${Be("end")}>${mt(e.end)}</slot>
    `.inline();
}
function wt(e) {
    return Se`
        <slot name="start" ${Be("start")}>${mt(e.start)}</slot>
    `.inline();
}
function yt(e) {
    return `:host([hidden]){display:none}:host{display:${e}}`;
}
function xt(e) {
    const t = e.parentElement;
    if (t) return t;
    {
        const t = e.getRootNode();
        if (t.host instanceof HTMLElement) return t.host;
    }
    return null;
}
class kt {
    constructor(e){
        this.value = e, this.notifier = C.getNotifier(this), this.dependencies = new Set, this.binding = C.binding(e, this), this.binding.setMode(!1);
    }
    static getOrCreate(e) {
        let t = kt.cache.get(e);
        return t || (t = new kt(e), kt.cache.set(e, t), t);
    }
    evaluate(e, t) {
        return this.binding.observe((o)=>{
            if (this.dependencies.add(o), t === o) {
                if (e.parent) return e.parent.getTokenValue(o);
                throw new Error("DesignTokenNode has encountered a circular token reference. Avoid this by setting the token value for an ancestor node.");
            }
            return e.getTokenValue(o);
        });
    }
    handleChange() {
        this.notifier.notify(void 0);
    }
}
kt.cache = new WeakMap;
class St {
    constructor(e, t, o, i){
        this.token = e, this.evaluator = t, this.node = o, this.subscriber = i, this.value = t.evaluate(o, e), this.subscriber && C.getNotifier(this.evaluator).subscribe(this.subscriber);
    }
    dispose() {
        this.subscriber && C.getNotifier(this.evaluator).unsubscribe(this.subscriber);
    }
    update() {
        return this.value = this.evaluator.evaluate(this.node, this.token), this;
    }
}
class Ct {
    constructor(e, t, o, i){
        this.target = e, this.type = t, this.token = o, this.value = i;
    }
    notify() {
        C.getNotifier(this.token).notify(this);
    }
}
class Bt {
    constructor(){
        this._parent = null, this._children = new Set, this._values = new Map, this._derived = new Map, this.dependencyGraph = new Map;
    }
    static isDerivedTokenValue(e) {
        return "function" == typeof e;
    }
    static isDerivedFor(e, t) {
        return e._derived.has(t);
    }
    static collectDerivedContext(e) {
        const t = new Map;
        if (null === e.parent) return t;
        let o = Bt.getAssignedTokensForNode(e), i = e.parent;
        do {
            const e = Bt.getAssignedTokensForNode(i);
            for(let s = 0, r = e.length; s < r; s++){
                const r = e[s];
                !o.includes(r) && Bt.isDerivedFor(i, r) && t.set(r, i._derived.get(r));
            }
            o = Array.from(new Set(o.concat(e))), i = i.parent;
        }while (null !== i);
        return t;
    }
    static getLocalTokenValue(e, t) {
        return Bt.isAssigned(e, t) ? Bt.isDerivedFor(e, t) ? e._derived.get(t).value : e._values.get(t) : void 0;
    }
    static getOrCreateDependencyGraph(e, t) {
        let o = e.dependencyGraph.get(t);
        return o || (o = new Set, e.dependencyGraph.set(t, o), o);
    }
    static notify() {
        const e = this._notifications;
        this._notifications = [];
        for (const t of e)t.notify();
    }
    static queueNotification(...e) {
        this._notifications.push(...e);
    }
    static getAssignedTokensForNode(e) {
        return Array.from(e._values.keys());
    }
    static composeAssignedTokensForNode(e) {
        const t = new Set(Bt.getAssignedTokensForNode(e));
        let o = e.parent;
        for(; null !== o;){
            const e = Bt.getAssignedTokensForNode(o);
            for (const o of e)t.add(o);
            o = o.parent;
        }
        return Array.from(t);
    }
    static isAssigned(e, t) {
        return e._values.has(t);
    }
    get parent() {
        return this._parent;
    }
    get children() {
        return Array.from(this._children);
    }
    appendChild(e) {
        var t, o;
        let i = null;
        null !== e.parent && (i = Bt.composeAssignedTokensForNode(e.parent), e.parent._children.delete(e));
        const s = Bt.composeAssignedTokensForNode(this), r = Bt.collectDerivedContext(this);
        e._parent = this, this._children.add(e);
        for (const o of s){
            let s = 0;
            if (null !== i) {
                const e = i.indexOf(o);
                -1 !== e && (s = 1, i.splice(e, 1));
            }
            e.dispatch(new Ct(this, s, o, null === (t = r.get(o)) || void 0 === t ? void 0 : t.evaluator.value));
        }
        if (null !== i && i.length > 0) for (const t of i)e.dispatch(new Ct(this, 2, t, null === (o = r.get(t)) || void 0 === o ? void 0 : o.evaluator.value));
        Bt.notify();
    }
    removeChild(e) {
        if (e.parent === this) {
            const t = Bt.composeAssignedTokensForNode(this);
            e._parent = null, this._children.delete(e);
            for (const o of t)e.dispatch(new Ct(this, 2, o));
            Bt.notify();
        }
    }
    dispose() {
        this.parent && (this.parent._children.delete(this), this._parent = null);
        for (const [, e] of this._derived)e.dispose();
    }
    setTokenValue(e, t) {
        const o = Bt.isAssigned(this, e) || Bt.isDerivedFor(this, e) ? 1 : 0, i = Bt.getLocalTokenValue(this, e);
        this._values.set(e, t), Bt.isDerivedFor(this, e) && this.tearDownDerivedTokenValue(e);
        const s = Bt.isDerivedTokenValue(t), r = Bt.collectDerivedContext(this);
        let n;
        if (s) n = this.setupDerivedTokenValue(e, t, !0).value;
        else n = t;
        i !== n && Bt.queueNotification(new Ct(this, o, e, t)), this.dispatch(new Ct(this, o, e, t)), r.forEach((e, t)=>{
            if (!Bt.isDerivedFor(this, t)) Bt.getLocalTokenValue(this, t) !== (e = this.setupDerivedTokenValue(t, e.evaluator.value)).value && Bt.queueNotification(new Ct(this, 1, t, e.evaluator.value)), this.dispatch(new Ct(this, 0, t, e.evaluator.value));
        }), Bt.notify();
    }
    getTokenValue(e) {
        let t, o = this;
        for(; null !== o;){
            if (Bt.isDerivedFor(o, e)) {
                t = o._derived.get(e).value;
                break;
            }
            if (Bt.isAssigned(o, e)) {
                t = o._values.get(e);
                break;
            }
            o = o._parent;
        }
        if (void 0 !== t) return t;
        throw new Error(`No value set for token ${e} in node tree.`);
    }
    deleteTokenValue(e) {
        if (Bt.isAssigned(this, e)) {
            const t = Bt.getLocalTokenValue(this, e);
            let o;
            this._values.delete(e), this.tearDownDerivedTokenValue(e);
            try {
                o = this.getTokenValue(e);
            } catch (e) {
                o = void 0;
            }
            Bt.queueNotification(new Ct(this, 2, e)), t !== o && this.dispatch(new Ct(this, 2, e)), Bt.notify();
        }
    }
    dispatch(e) {
        var t, o, i;
        if (this !== e.target) {
            const { token: s } = e, r = Bt.isAssigned(this, s), n = r && (null === (t = this._derived.get(s)) || void 0 === t ? void 0 : t.evaluator.dependencies.has(s));
            if (r && !n) return;
            2 === e.type && !r && Bt.isDerivedFor(this, s) && (this.tearDownDerivedTokenValue(s), Bt.queueNotification(new Ct(this, 2, s))), n && (e = new Ct(this, 1, s, null === (o = this._derived.get(s)) || void 0 === o ? void 0 : o.evaluator.value));
            const { value: a } = e;
            if (a && Bt.isDerivedTokenValue(a)) {
                const t = kt.getOrCreate(a).dependencies;
                let o = !1;
                for (const e of t)if (Bt.isAssigned(this, e)) {
                    o = !0;
                    break;
                }
                if (o) {
                    const t = null === (i = this._derived.get(s)) || void 0 === i ? void 0 : i.value, o = this.setupDerivedTokenValue(s, a);
                    if (t !== o.value) {
                        const i = new Ct(this, void 0 === t ? 0 : 1, s, o.evaluator.value);
                        Bt.queueNotification(i), e = i;
                    }
                }
            }
        }
        this.collectLocalChangeRecords(e).forEach((e)=>{
            Bt.queueNotification(e), this.dispatch(e);
        }), this.notifyChildren(e);
    }
    collectLocalChangeRecords(e) {
        const t = new Map;
        for (const o of Bt.getOrCreateDependencyGraph(this, e.token))o.value !== o.update().value && t.set(o.token, new Ct(this, 1, o.token, o.evaluator.value));
        return t;
    }
    notifyChildren(...e) {
        if (this.children.length) for(let t = 0, o = this.children.length; t < o; t++)for(let o = 0; o < e.length; o++)this.children[t].dispatch(e[o]);
    }
    tearDownDerivedTokenValue(e) {
        if (Bt.isDerivedFor(this, e)) {
            const t = this._derived.get(e);
            t.dispose(), this._derived.delete(e), t.evaluator.dependencies.forEach((e)=>{
                Bt.getOrCreateDependencyGraph(this, e).delete(t);
            });
        }
    }
    setupDerivedTokenValue(e, t, o = !1) {
        const i = new St(e, kt.getOrCreate(t), this, o ? {
            handleChange: ()=>{
                if (i.value !== i.update().value) {
                    const e = new Ct(this, 1, i.token, i.evaluator.value);
                    Bt.queueNotification(e), this.dispatch(e), Bt.notify();
                }
            }
        } : void 0);
        return this._derived.set(e, i), i.evaluator.dependencies.forEach((t)=>{
            t !== e && Bt.getOrCreateDependencyGraph(this, t).add(i);
        }), i;
    }
}
Bt._notifications = [];
class Pt {
    setProperty(e, t) {
        y.enqueue(()=>this.target.setProperty(e, t));
    }
    removeProperty(e) {
        y.enqueue(()=>this.target.removeProperty(e));
    }
}
class Et extends Pt {
    constructor(){
        super();
        const e = new CSSStyleSheet;
        this.target = e.cssRules[e.insertRule(":root{}")].style, document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            e
        ];
    }
}
class At extends Pt {
    constructor(){
        super(), this.style = document.createElement("style"), document.head.appendChild(this.style);
        const { sheet: e } = this.style;
        if (e) {
            const t = e.insertRule(":root{}", e.cssRules.length);
            this.target = e.cssRules[t].style;
        }
    }
}
class Tt {
    constructor(e){
        this.store = new Map, this.target = null;
        const t = e.$fastController;
        this.style = document.createElement("style"), t.addStyles(this.style), C.getNotifier(t).subscribe(this, "isConnected"), this.handleChange(t, "isConnected");
    }
    targetChanged() {
        if (null !== this.target) for (const [e, t] of this.store.entries())this.target.setProperty(e, t);
    }
    setProperty(e, t) {
        this.store.set(e, t), y.enqueue(()=>{
            null !== this.target && this.target.setProperty(e, t);
        });
    }
    removeProperty(e) {
        this.store.delete(e), y.enqueue(()=>{
            null !== this.target && this.target.removeProperty(e);
        });
    }
    handleChange(e, t) {
        const { sheet: o } = this.style;
        if (o) {
            const e = o.insertRule(":host{}", o.cssRules.length);
            this.target = o.cssRules[e].style;
        } else this.target = null;
    }
}
e([
    B
], Tt.prototype, "target", void 0);
class $t {
    setProperty(e, t) {
        $t.properties[e] = t;
        for (const o of $t.roots.values())o.setProperty(e, t);
    }
    removeProperty(e) {
        delete $t.properties[e];
        for (const t of $t.roots.values())t.removeProperty(e);
    }
    static registerRoot(e) {
        const { roots: t } = $t;
        if (!t.has(e)) {
            t.add(e);
            for(const t in $t.properties)e.setProperty(t, $t.properties[t]);
        }
    }
    static unregisterRoot(e) {
        const { roots: t } = $t;
        if (t.has(e)) {
            t.delete(e);
            for(const t in $t.properties)e.removeProperty(t);
        }
    }
}
$t.roots = new Set, $t.properties = {};
const It = new WeakMap, Ft = N.supportsAdoptedStyleSheets ? class extends Pt {
    constructor(e){
        super();
        const t = new CSSStyleSheet;
        this.target = t.cssRules[t.insertRule(":host{}")].style, e.$fastController.addStyles(new N([
            t
        ]));
    }
} : Tt, Lt = Object.freeze({
    getOrCreate (e) {
        if (It.has(e)) return It.get(e);
        let t;
        return t = e instanceof Document ? N.supportsAdoptedStyleSheets ? new Et : new At : new Ft(e), It.set(e, t), t;
    }
});
class Mt {
    constructor(e){
        this.subscriberNotifier = {
            handleChange: (e, t)=>{
                const o = {
                    target: t.target === Rt.defaultNode ? "default" : t.target.target,
                    token: this
                };
                this.subscribers.notify(o);
            }
        }, this.name = e.name, C.getNotifier(this).subscribe(this.subscriberNotifier);
    }
    get $value() {
        return this.default;
    }
    get default() {
        return Rt.defaultNode.getTokenValue(this);
    }
    get subscribers() {
        return this._subscribers || (this._subscribers = new x(this)), this._subscribers;
    }
    static isCSSDesignTokenConfiguration(e) {
        return "string" == typeof e.cssCustomPropertyName;
    }
    static create(e) {
        return "string" == typeof e ? new Nt({
            name: e,
            cssCustomPropertyName: e
        }) : Mt.isCSSDesignTokenConfiguration(e) ? new Nt(e) : new Mt(e);
    }
    static withStrategy(e) {
        Rt.withStrategy(e);
    }
    static registerDefaultStyleTarget(e = document) {
        (e instanceof nt || e instanceof Document) && (e = Lt.getOrCreate(e)), $t.registerRoot(e);
    }
    static unregisterDefaultStyleTarget(e = document) {
        (e instanceof nt || e instanceof Document) && (e = Lt.getOrCreate(e)), $t.unregisterRoot(e);
    }
    getValueFor(e) {
        return Rt.getOrCreate(e).getTokenValue(this);
    }
    setValueFor(e, t) {
        Rt.getOrCreate(e).setTokenValue(this, this.normalizeValue(t));
    }
    deleteValueFor(e) {
        return Rt.getOrCreate(e).deleteTokenValue(this), this;
    }
    withDefault(e) {
        return Rt.defaultNode.setTokenValue(this, this.normalizeValue(e)), this;
    }
    subscribe(e) {
        this.subscribers.subscribe(e);
    }
    unsubscribe(e) {
        this.subscribers.unsubscribe(e);
    }
    alias(e) {
        return (t)=>t(e);
    }
    normalizeValue(e) {
        return e instanceof Mt && (e = this.alias(e)), e;
    }
}
let Nt = class extends Mt {
    constructor(e){
        super(e), this.cssReflector = {
            handleChange: (e, t)=>{
                const o = t.target === Rt.defaultNode ? Rt.rootStyleSheetTarget : t.target instanceof Rt ? Lt.getOrCreate(t.target.target) : null;
                o && (2 === t.type ? o.removeProperty(this.cssCustomProperty) : o.setProperty(this.cssCustomProperty, this.resolveCSSValue(t.target.getTokenValue(this))));
            }
        }, this.cssCustomProperty = `--${e.cssCustomPropertyName}`, this.cssVar = `var(${this.cssCustomProperty})`, C.getNotifier(this).subscribe(this.cssReflector);
    }
    createCSS() {
        return this.cssVar;
    }
    createHTML() {
        return this.cssVar;
    }
    resolveCSSValue(e) {
        return e && "function" == typeof e.createCSS ? e.createCSS() : e;
    }
};
var Ot;
Nt = e([
    function(e) {
        V.define(e);
    },
    function(e) {
        te.define(e, Ot);
    }
], Nt);
const Vt = {
    contains: function(e, t) {
        let o = t;
        for(; null !== o;){
            if (o === e) return !0;
            o = xt(o);
        }
        return !1;
    },
    parent (e) {
        let t = xt(e);
        for(; null !== t;){
            if (t instanceof nt) return t;
            t = xt(t);
        }
        return null;
    }
};
class Rt extends Bt {
    constructor(e){
        super(), this.target = e, this.setTokenValue = this.lazyAttachToDefault(super.setTokenValue), this.getTokenValue = this.lazyAttachToDefault(super.getTokenValue), this.deleteTokenValue = this.lazyAttachToDefault(super.deleteTokenValue);
    }
    static get strategy() {
        return void 0 === this._strategy && Rt.withStrategy(Vt), this._strategy;
    }
    connectedCallback(e) {
        let t = Rt.findParent(e.source);
        if (null === t && (t = Rt.defaultNode), t !== this.parent) {
            const o = [];
            for (const i of t.children)i instanceof Rt && Rt.strategy.contains(e.source, i.target) && o.push(i);
            t.appendChild(this);
            for (const e of o)this.appendChild(e);
        }
    }
    disconnectedCallback(e) {
        Rt.cache.delete(this.target), this.dispose();
    }
    static getOrCreate(e) {
        let t = Rt.cache.get(e);
        return t || (t = new Rt(e), Rt.cache.set(e, t), e.$fastController.addBehavior(Rt.strategy), e.$fastController.addBehavior(t), t);
    }
    static withStrategy(e) {
        this._strategy = e;
    }
    static findParent(e) {
        let t = Rt.strategy.parent(e);
        for(; null !== t;){
            const e = Rt.cache.get(t);
            if (e) return e;
            t = Rt.strategy.parent(t);
        }
        return null;
    }
    lazyAttachToDefault(e) {
        return (...t)=>(null === this.parent && Rt.defaultNode.appendChild(this), e.apply(this, t));
    }
}
Rt.defaultNode = new Bt, Rt.rootStyleSheetTarget = new $t, Rt.cache = new WeakMap;
const { create: Dt } = Mt;
Dt("borderRadiusNone");
const zt = Dt("borderRadiusSmall"), Ht = Dt("borderRadiusMedium");
Dt("borderRadiusLarge"), Dt("borderRadiusXLarge"), Dt("borderRadiusCircular"), Dt("fontSizeBase100");
const _t = Dt("fontSizeBase200"), jt = Dt("fontSizeBase300"), Gt = Dt("fontSizeBase400"), Wt = Dt("fontSizeBase500");
Dt("fontSizeBase600"), Dt("fontSizeHero700"), Dt("fontSizeHero800"), Dt("fontSizeHero900"), Dt("fontSizeHero1000"), Dt("lineHeightBase100");
const qt = Dt("lineHeightBase200"), Kt = Dt("lineHeightBase300"), Ut = Dt("lineHeightBase400");
Dt("lineHeightBase500"), Dt("lineHeightBase600"), Dt("lineHeightHero700"), Dt("lineHeightHero800"), Dt("lineHeightHero900"), Dt("lineHeightHero1000");
const Xt = Dt("fontFamilyBase");
Dt("fontFamilyMonospace"), Dt("fontFamilyNumeric");
const Yt = Dt("fontWeightRegular");
Dt("fontWeightMedium");
const Qt = Dt("fontWeightSemibold");
Dt("fontWeightBold"), Dt("strokeWidthThin");
const Zt = Dt("strokeWidthThick");
Dt("strokeWidthThicker"), Dt("strokeWidthThickest"), Dt("spacingHorizontalNone"), Dt("spacingHorizontalXXS"), Dt("spacingHorizontalXS"), Dt("spacingHorizontalSNudge");
const Jt = Dt("spacingHorizontalS");
Dt("spacingHorizontalMNudge");
const eo = Dt("spacingHorizontalM"), to = Dt("spacingHorizontalL");
Dt("spacingHorizontalXL");
const oo = Dt("spacingHorizontalXXL"), io = Dt("spacingHorizontalXXXL");
Dt("spacingVerticalNone");
const so = Dt("spacingVerticalXXS"), ro = Dt("spacingVerticalXS");
Dt("spacingVerticalSNudge"), Dt("spacingVerticalS"), Dt("spacingVerticalMNudge"), Dt("spacingVerticalM");
const no = Dt("spacingVerticalL");
Dt("spacingVerticalXL");
const ao = Dt("spacingVerticalXXL");
Dt("spacingVerticalXXXL"), Dt("durationUltraFast"), Dt("durationFaster"), Dt("durationFast"), Dt("durationNormal"), Dt("durationSlow"), Dt("durationSlower"), Dt("durationUltraSlow"), Dt("curveAccelerateMax"), Dt("curveAccelerateMid"), Dt("curveAccelerateMin"), Dt("curveDecelerateMax"), Dt("curveDecelerateMid"), Dt("curveDecelerateMin"), Dt("curveEasyEaseMax"), Dt("curveEasyEase"), Dt("curveLinear");
const lo = Dt("colorNeutralForeground1");
Dt("colorNeutralForeground1Hover"), Dt("colorNeutralForeground1Pressed"), Dt("colorNeutralForeground1Selected"), Dt("colorNeutralForeground2"), Dt("colorNeutralForeground2Hover"), Dt("colorNeutralForeground2Pressed"), Dt("colorNeutralForeground2Selected"), Dt("colorNeutralForeground2BrandHover"), Dt("colorNeutralForeground2BrandPressed"), Dt("colorNeutralForeground2BrandSelected");
const co = Dt("colorNeutralForeground3");
Dt("colorNeutralForeground3Hover"), Dt("colorNeutralForeground3Pressed"), Dt("colorNeutralForeground3Selected"), Dt("colorNeutralForeground3BrandHover"), Dt("colorNeutralForeground3BrandPressed"), Dt("colorNeutralForeground3BrandSelected"), Dt("colorNeutralForeground4"), Dt("colorNeutralForegroundDisabled"), Dt("colorNeutralForegroundInvertedDisabled"), Dt("colorBrandForegroundLink"), Dt("colorBrandForegroundLinkHover"), Dt("colorBrandForegroundLinkPressed"), Dt("colorBrandForegroundLinkSelected"), Dt("colorNeutralForeground2Link"), Dt("colorNeutralForeground2LinkHover"), Dt("colorNeutralForeground2LinkPressed"), Dt("colorNeutralForeground2LinkSelected"), Dt("colorCompoundBrandForeground1"), Dt("colorCompoundBrandForeground1Hover"), Dt("colorCompoundBrandForeground1Pressed"), Dt("colorBrandForeground1");
const ho = Dt("colorBrandForeground2");
Dt("colorNeutralForeground1Static"), Dt("colorNeutralForegroundStaticInverted"), Dt("colorNeutralForegroundInverted"), Dt("colorNeutralForegroundInvertedHover"), Dt("colorNeutralForegroundInvertedPressed"), Dt("colorNeutralForegroundInvertedSelected"), Dt("colorNeutralForegroundInverted2");
const uo = Dt("colorNeutralForegroundOnBrand");
Dt("colorNeutralForegroundInvertedLink"), Dt("colorNeutralForegroundInvertedLinkHover"), Dt("colorNeutralForegroundInvertedLinkPressed"), Dt("colorNeutralForegroundInvertedLinkSelected"), Dt("colorBrandForegroundInverted"), Dt("colorBrandForegroundInvertedHover"), Dt("colorBrandForegroundInvertedPressed"), Dt("colorBrandForegroundOnLight"), Dt("colorBrandForegroundOnLightHover"), Dt("colorBrandForegroundOnLightPressed"), Dt("colorBrandForegroundOnLightSelected");
const po = Dt("colorNeutralBackground1");
Dt("colorNeutralBackground1Hover"), Dt("colorNeutralBackground1Pressed"), Dt("colorNeutralBackground1Selected");
const fo = Dt("colorNeutralBackground2");
Dt("colorNeutralBackground2Hover"), Dt("colorNeutralBackground2Pressed"), Dt("colorNeutralBackground2Selected");
const go = Dt("colorNeutralBackground3");
Dt("colorNeutralBackground3Hover"), Dt("colorNeutralBackground3Pressed"), Dt("colorNeutralBackground3Selected"), Dt("colorNeutralBackground4"), Dt("colorNeutralBackground4Hover"), Dt("colorNeutralBackground4Pressed"), Dt("colorNeutralBackground4Selected"), Dt("colorNeutralBackground5"), Dt("colorNeutralBackground5Hover"), Dt("colorNeutralBackground5Pressed"), Dt("colorNeutralBackground5Selected"), Dt("colorNeutralBackground6"), Dt("colorNeutralBackgroundInverted"), Dt("colorNeutralBackgroundStatic"), Dt("colorSubtleBackground"), Dt("colorSubtleBackgroundHover"), Dt("colorSubtleBackgroundPressed"), Dt("colorSubtleBackgroundSelected"), Dt("colorSubtleBackgroundLightAlphaHover"), Dt("colorSubtleBackgroundLightAlphaPressed"), Dt("colorSubtleBackgroundLightAlphaSelected"), Dt("colorSubtleBackgroundInverted"), Dt("colorSubtleBackgroundInvertedHover"), Dt("colorSubtleBackgroundInvertedPressed"), Dt("colorSubtleBackgroundInvertedSelected"), Dt("colorTransparentBackground"), Dt("colorTransparentBackgroundHover"), Dt("colorTransparentBackgroundPressed"), Dt("colorTransparentBackgroundSelected"), Dt("colorNeutralBackgroundDisabled"), Dt("colorNeutralBackgroundInvertedDisabled"), Dt("colorNeutralStencil1"), Dt("colorNeutralStencil2"), Dt("colorNeutralStencil1Alpha"), Dt("colorNeutralStencil2Alpha"), Dt("colorBackgroundOverlay"), Dt("colorScrollbarOverlay");
const vo = Dt("colorBrandBackground");
Dt("colorBrandBackgroundHover"), Dt("colorBrandBackgroundPressed"), Dt("colorBrandBackgroundSelected"), Dt("colorCompoundBrandBackground"), Dt("colorCompoundBrandBackgroundHover"), Dt("colorCompoundBrandBackgroundPressed"), Dt("colorBrandBackgroundStatic"), Dt("colorBrandBackground2"), Dt("colorBrandBackgroundInverted"), Dt("colorBrandBackgroundInvertedHover"), Dt("colorBrandBackgroundInvertedPressed"), Dt("colorBrandBackgroundInvertedSelected"), Dt("colorNeutralStrokeAccessible"), Dt("colorNeutralStrokeAccessibleHover"), Dt("colorNeutralStrokeAccessiblePressed"), Dt("colorNeutralStrokeAccessibleSelected");
const mo = Dt("colorNeutralStroke1");
Dt("colorNeutralStroke1Hover"), Dt("colorNeutralStroke1Pressed"), Dt("colorNeutralStroke1Selected"), Dt("colorNeutralStroke2"), Dt("colorNeutralStroke3"), Dt("colorNeutralStrokeOnBrand"), Dt("colorNeutralStrokeOnBrand2"), Dt("colorNeutralStrokeOnBrand2Hover"), Dt("colorNeutralStrokeOnBrand2Pressed"), Dt("colorNeutralStrokeOnBrand2Selected"), Dt("colorBrandStroke1"), Dt("colorBrandStroke2"), Dt("colorCompoundBrandStroke"), Dt("colorCompoundBrandStrokeHover"), Dt("colorCompoundBrandStrokePressed"), Dt("colorNeutralStrokeDisabled"), Dt("colorNeutralStrokeInvertedDisabled");
const bo = Dt("colorTransparentStroke"), wo = Dt("colorTransparentStrokeInteractive");
Dt("colorTransparentStrokeDisabled"), Dt("colorStrokeFocus1");
const yo = Dt("colorStrokeFocus2");
Dt("colorNeutralShadowAmbient"), Dt("colorNeutralShadowKey"), Dt("colorNeutralShadowAmbientLighter"), Dt("colorNeutralShadowKeyLighter"), Dt("colorNeutralShadowAmbientDarker"), Dt("colorNeutralShadowKeyDarker"), Dt("colorBrandShadowAmbient"), Dt("colorBrandShadowKey"), Dt("colorPaletteRedBackground1"), Dt("colorPaletteRedBackground2"), Dt("colorPaletteRedBackground3"), Dt("colorPaletteRedForeground1"), Dt("colorPaletteRedForeground2");
const xo = Dt("colorPaletteRedForeground3");
Dt("colorPaletteRedBorderActive"), Dt("colorPaletteRedBorder1"), Dt("colorPaletteRedBorder2"), Dt("colorPaletteGreenBackground1"), Dt("colorPaletteGreenBackground2"), Dt("colorPaletteGreenBackground3"), Dt("colorPaletteGreenForeground1"), Dt("colorPaletteGreenForeground2"), Dt("colorPaletteGreenForeground3"), Dt("colorPaletteGreenBorderActive"), Dt("colorPaletteGreenBorder1"), Dt("colorPaletteGreenBorder2"), Dt("colorPaletteDarkOrangeBackground1"), Dt("colorPaletteDarkOrangeBackground2"), Dt("colorPaletteDarkOrangeBackground3"), Dt("colorPaletteDarkOrangeForeground1"), Dt("colorPaletteDarkOrangeForeground2"), Dt("colorPaletteDarkOrangeForeground3"), Dt("colorPaletteDarkOrangeBorderActive"), Dt("colorPaletteDarkOrangeBorder1"), Dt("colorPaletteDarkOrangeBorder2"), Dt("colorPaletteYellowBackground1"), Dt("colorPaletteYellowBackground2"), Dt("colorPaletteYellowBackground3"), Dt("colorPaletteYellowForeground1"), Dt("colorPaletteYellowForeground2"), Dt("colorPaletteYellowForeground3"), Dt("colorPaletteYellowBorderActive"), Dt("colorPaletteYellowBorder1"), Dt("colorPaletteYellowBorder2"), Dt("colorPaletteBerryBackground1"), Dt("colorPaletteBerryBackground2"), Dt("colorPaletteBerryBackground3"), Dt("colorPaletteBerryForeground1"), Dt("colorPaletteBerryForeground2"), Dt("colorPaletteBerryForeground3"), Dt("colorPaletteBerryBorderActive"), Dt("colorPaletteBerryBorder1"), Dt("colorPaletteBerryBorder2"), Dt("colorPaletteLightGreenBackground1"), Dt("colorPaletteLightGreenBackground2"), Dt("colorPaletteLightGreenBackground3"), Dt("colorPaletteLightGreenForeground1"), Dt("colorPaletteLightGreenForeground2"), Dt("colorPaletteLightGreenForeground3"), Dt("colorPaletteLightGreenBorderActive"), Dt("colorPaletteLightGreenBorder1"), Dt("colorPaletteLightGreenBorder2"), Dt("colorPaletteMarigoldBackground1"), Dt("colorPaletteMarigoldBackground2"), Dt("colorPaletteMarigoldBackground3"), Dt("colorPaletteMarigoldForeground1"), Dt("colorPaletteMarigoldForeground2"), Dt("colorPaletteMarigoldForeground3"), Dt("colorPaletteMarigoldBorderActive"), Dt("colorPaletteMarigoldBorder1"), Dt("colorPaletteMarigoldBorder2"), Dt("colorPaletteDarkRedBackground2"), Dt("colorPaletteDarkRedForeground2"), Dt("colorPaletteDarkRedBorderActive"), Dt("colorPaletteCranberryBackground2"), Dt("colorPaletteCranberryForeground2"), Dt("colorPaletteCranberryBorderActive"), Dt("colorPalettePumpkinBackground2"), Dt("colorPalettePumpkinForeground2"), Dt("colorPalettePumpkinBorderActive"), Dt("colorPalettePeachBackground2"), Dt("colorPalettePeachForeground2"), Dt("colorPalettePeachBorderActive"), Dt("colorPaletteGoldBackground2"), Dt("colorPaletteGoldForeground2"), Dt("colorPaletteGoldBorderActive"), Dt("colorPaletteBrassBackground2"), Dt("colorPaletteBrassForeground2"), Dt("colorPaletteBrassBorderActive"), Dt("colorPaletteBrownBackground2"), Dt("colorPaletteBrownForeground2"), Dt("colorPaletteBrownBorderActive"), Dt("colorPaletteForestBackground2"), Dt("colorPaletteForestForeground2"), Dt("colorPaletteForestBorderActive"), Dt("colorPaletteSeafoamBackground2"), Dt("colorPaletteSeafoamForeground2"), Dt("colorPaletteSeafoamBorderActive"), Dt("colorPaletteDarkGreenBackground2"), Dt("colorPaletteDarkGreenForeground2"), Dt("colorPaletteDarkGreenBorderActive"), Dt("colorPaletteLightTealBackground2"), Dt("colorPaletteLightTealForeground2"), Dt("colorPaletteLightTealBorderActive"), Dt("colorPaletteTealBackground2"), Dt("colorPaletteTealForeground2"), Dt("colorPaletteTealBorderActive"), Dt("colorPaletteSteelBackground2"), Dt("colorPaletteSteelForeground2"), Dt("colorPaletteSteelBorderActive"), Dt("colorPaletteBlueBackground2"), Dt("colorPaletteBlueForeground2"), Dt("colorPaletteBlueBorderActive"), Dt("colorPaletteRoyalBlueBackground2"), Dt("colorPaletteRoyalBlueForeground2"), Dt("colorPaletteRoyalBlueBorderActive"), Dt("colorPaletteCornflowerBackground2"), Dt("colorPaletteCornflowerForeground2"), Dt("colorPaletteCornflowerBorderActive"), Dt("colorPaletteNavyBackground2"), Dt("colorPaletteNavyForeground2"), Dt("colorPaletteNavyBorderActive"), Dt("colorPaletteLavenderBackground2"), Dt("colorPaletteLavenderForeground2"), Dt("colorPaletteLavenderBorderActive"), Dt("colorPalettePurpleBackground2"), Dt("colorPalettePurpleForeground2"), Dt("colorPalettePurpleBorderActive"), Dt("colorPaletteGrapeBackground2"), Dt("colorPaletteGrapeForeground2"), Dt("colorPaletteGrapeBorderActive"), Dt("colorPaletteLilacBackground2"), Dt("colorPaletteLilacForeground2"), Dt("colorPaletteLilacBorderActive"), Dt("colorPalettePinkBackground2"), Dt("colorPalettePinkForeground2"), Dt("colorPalettePinkBorderActive"), Dt("colorPaletteMagentaBackground2"), Dt("colorPaletteMagentaForeground2"), Dt("colorPaletteMagentaBorderActive"), Dt("colorPalettePlumBackground2"), Dt("colorPalettePlumForeground2"), Dt("colorPalettePlumBorderActive"), Dt("colorPaletteBeigeBackground2"), Dt("colorPaletteBeigeForeground2"), Dt("colorPaletteBeigeBorderActive"), Dt("colorPaletteMinkBackground2"), Dt("colorPaletteMinkForeground2"), Dt("colorPaletteMinkBorderActive"), Dt("colorPalettePlatinumBackground2"), Dt("colorPalettePlatinumForeground2"), Dt("colorPalettePlatinumBorderActive"), Dt("colorPaletteAnchorBackground2"), Dt("colorPaletteAnchorForeground2"), Dt("colorPaletteAnchorBorderActive"), Dt("colorPaletteRedForegroundInverted"), Dt("colorPaletteGreenForegroundInverted"), Dt("colorPaletteYellowForegroundInverted"), Dt("shadow2");
const ko = Dt("shadow4"), So = Dt("shadow8"), Co = Dt("shadow16");
Dt("shadow28"), Dt("shadow64"), Dt("shadow2Brand"), Dt("shadow4Brand"), Dt("shadow8Brand"), Dt("shadow16Brand"), Dt("shadow28Brand"), Dt("shadow64Brand");
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/ var Bo = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])"
].join(","), Po = "undefined" == typeof Element, Eo = Po ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ao = !Po && Element.prototype.getRootNode ? function(e) {
    var t;
    return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e);
} : function(e) {
    return null == e ? void 0 : e.ownerDocument;
}, To = function e(t, o) {
    var i;
    void 0 === o && (o = !0);
    var s = null == t || null === (i = t.getAttribute) || void 0 === i ? void 0 : i.call(t, "inert");
    return "" === s || "true" === s || o && t && e(t.parentNode);
}, $o = function(e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
        var t, o = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
        return "" === o || "true" === o;
    }(e)) && !function(e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    }(e) ? 0 : e.tabIndex;
}, Io = function(e) {
    return "INPUT" === e.tagName;
}, Fo = function(e) {
    return function(e) {
        return Io(e) && "radio" === e.type;
    }(e) && !function(e) {
        if (!e.name) return !0;
        var t, o = e.form || Ao(e), i = function(e) {
            return o.querySelectorAll('input[type="radio"][name="' + e + '"]');
        };
        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = i(window.CSS.escape(e.name));
        else try {
            t = i(e.name);
        } catch (e) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
        }
        var s = function(e, t) {
            for(var o = 0; o < e.length; o++)if (e[o].checked && e[o].form === t) return e[o];
        }(t, e.form);
        return !s || s === e;
    }(e);
}, Lo = function(e) {
    var t = e.getBoundingClientRect(), o = t.width, i = t.height;
    return 0 === o && 0 === i;
}, Mo = function(e, t) {
    var o = t.displayCheck, i = t.getShadowRoot;
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    var s = Eo.call(e, "details>summary:first-of-type") ? e.parentElement : e;
    if (Eo.call(s, "details:not([open]) *")) return !0;
    if (o && "full" !== o && "legacy-full" !== o) {
        if ("non-zero-area" === o) return Lo(e);
    } else {
        if ("function" == typeof i) {
            for(var r = e; e;){
                var n = e.parentElement, a = Ao(e);
                if (n && !n.shadowRoot && !0 === i(n)) return Lo(e);
                e = e.assignedSlot ? e.assignedSlot : n || a === e.ownerDocument ? n : a.host;
            }
            e = r;
        }
        if (function(e) {
            var t, o, i, s, r = e && Ao(e), n = null === (t = r) || void 0 === t ? void 0 : t.host, a = !1;
            if (r && r !== e) for(a = !!(null !== (o = n) && void 0 !== o && null !== (i = o.ownerDocument) && void 0 !== i && i.contains(n) || null != e && null !== (s = e.ownerDocument) && void 0 !== s && s.contains(e)); !a && n;){
                var l, d, c;
                a = !(null === (d = n = null === (l = r = Ao(n)) || void 0 === l ? void 0 : l.host) || void 0 === d || null === (c = d.ownerDocument) || void 0 === c || !c.contains(n));
            }
            return a;
        }(e)) return !e.getClientRects().length;
        if ("legacy-full" !== o) return !0;
    }
    return !1;
}, No = function(e, t) {
    return !(t.disabled || To(t) || function(e) {
        return Io(e) && "hidden" === e.type;
    }(t) || Mo(t, e) || function(e) {
        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(e) {
            return "SUMMARY" === e.tagName;
        });
    }(t) || function(e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for(var t = e.parentElement; t;){
            if ("FIELDSET" === t.tagName && t.disabled) {
                for(var o = 0; o < t.children.length; o++){
                    var i = t.children.item(o);
                    if ("LEGEND" === i.tagName) return !!Eo.call(t, "fieldset[disabled] *") || !i.contains(e);
                }
                return !0;
            }
            t = t.parentElement;
        }
        return !1;
    }(t));
}, Oo = function(e, t) {
    if (t = t || {}, !e) throw new Error("No node provided");
    return !1 !== Eo.call(e, Bo) && function(e, t) {
        return !(Fo(t) || $o(t) < 0 || !No(e, t));
    }(t, e);
};
const Vo = [
    "start",
    "end"
], Ro = [
    "top",
    "right",
    "bottom",
    "left"
].reduce((e, t)=>e.concat(t, t + "-" + Vo[0], t + "-" + Vo[1]), []), Do = Math.min, zo = Math.max, Ho = Math.round, _o = Math.floor, jo = (e)=>({
        x: e,
        y: e
    }), Go = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}, Wo = {
    start: "end",
    end: "start"
};
function qo(e, t, o) {
    return zo(e, Do(t, o));
}
function Ko(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function Uo(e) {
    return e.split("-")[0];
}
function Xo(e) {
    return e.split("-")[1];
}
function Yo(e) {
    return "y" === e ? "height" : "width";
}
function Qo(e) {
    return [
        "top",
        "bottom"
    ].includes(Uo(e)) ? "y" : "x";
}
function Zo(e) {
    return "x" === Qo(e) ? "y" : "x";
}
function Jo(e) {
    return e.replace(/left|right|bottom|top/g, (e)=>Go[e]);
}
function ei(e) {
    return "number" != typeof e ? function(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        };
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    };
}
function ti(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    };
}
function oi(e, t, o) {
    let { reference: i, floating: s } = e;
    const r = Qo(t), n = Zo(t), a = Yo(n), l = Uo(t), d = "y" === r, c = i.x + i.width / 2 - s.width / 2, h = i.y + i.height / 2 - s.height / 2, u = i[a] / 2 - s[a] / 2;
    let p;
    switch(l){
        case "top":
            p = {
                x: c,
                y: i.y - s.height
            };
            break;
        case "bottom":
            p = {
                x: c,
                y: i.y + i.height
            };
            break;
        case "right":
            p = {
                x: i.x + i.width,
                y: h
            };
            break;
        case "left":
            p = {
                x: i.x - s.width,
                y: h
            };
            break;
        default:
            p = {
                x: i.x,
                y: i.y
            };
    }
    switch(Xo(t)){
        case "start":
            p[n] -= u * (o && d ? -1 : 1);
            break;
        case "end":
            p[n] += u * (o && d ? -1 : 1);
    }
    return p;
}
function ii(e, t, o) {
    return (e ? [
        ...o.filter((t)=>Xo(t) === e),
        ...o.filter((t)=>Xo(t) !== e)
    ] : o.filter((e)=>Uo(e) === e)).filter((o)=>!e || Xo(o) === e || !!t && function(e) {
            return e.replace(/start|end/g, (e)=>Wo[e]);
        }(o) !== o);
}
const si = function(e) {
    return void 0 === e && (e = 0), {
        name: "offset",
        options: e,
        async fn (t) {
            var o, i;
            const { x: s, y: r, placement: n, middlewareData: a } = t, l = await async function(e, t) {
                const { placement: o, platform: i, elements: s } = e, r = await (null == i.isRTL ? void 0 : i.isRTL(s.floating)), n = Uo(o), a = Xo(o), l = "y" === Qo(o), d = [
                    "left",
                    "top"
                ].includes(n) ? -1 : 1, c = r && l ? -1 : 1, h = Ko(t, e);
                let { mainAxis: u, crossAxis: p, alignmentAxis: f } = "number" == typeof h ? {
                    mainAxis: h,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...h
                };
                return a && "number" == typeof f && (p = "end" === a ? -1 * f : f), l ? {
                    x: p * c,
                    y: u * d
                } : {
                    x: u * d,
                    y: p * c
                };
            }(t, e);
            return n === (null == (o = a.offset) ? void 0 : o.placement) && null != (i = a.arrow) && i.alignmentOffset ? {} : {
                x: s + l.x,
                y: r + l.y,
                data: {
                    ...l,
                    placement: n
                }
            };
        }
    };
};
function ri(e) {
    return li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ni(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function ai(e) {
    var t;
    return null == (t = (li(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function li(e) {
    return e instanceof Node || e instanceof ni(e).Node;
}
function di(e) {
    return e instanceof Element || e instanceof ni(e).Element;
}
function ci(e) {
    return e instanceof HTMLElement || e instanceof ni(e).HTMLElement;
}
function hi(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof ni(e).ShadowRoot);
}
function ui(e) {
    const { overflow: t, overflowX: o, overflowY: i, display: s } = mi(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && ![
        "inline",
        "contents"
    ].includes(s);
}
function pi(e) {
    return [
        "table",
        "td",
        "th"
    ].includes(ri(e));
}
function fi(e) {
    const t = gi(), o = mi(e);
    return "none" !== o.transform || "none" !== o.perspective || !!o.containerType && "normal" !== o.containerType || !t && !!o.backdropFilter && "none" !== o.backdropFilter || !t && !!o.filter && "none" !== o.filter || [
        "transform",
        "perspective",
        "filter"
    ].some((e)=>(o.willChange || "").includes(e)) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some((e)=>(o.contain || "").includes(e));
}
function gi() {
    return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function vi(e) {
    return [
        "html",
        "body",
        "#document"
    ].includes(ri(e));
}
function mi(e) {
    return ni(e).getComputedStyle(e);
}
function bi(e) {
    return di(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    };
}
function wi(e) {
    if ("html" === ri(e)) return e;
    const t = e.assignedSlot || e.parentNode || hi(e) && e.host || ai(e);
    return hi(t) ? t.host : t;
}
function yi(e) {
    const t = wi(e);
    return vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ci(t) && ui(t) ? t : yi(t);
}
function xi(e, t, o) {
    var i;
    void 0 === t && (t = []), void 0 === o && (o = !0);
    const s = yi(e), r = s === (null == (i = e.ownerDocument) ? void 0 : i.body), n = ni(s);
    return r ? t.concat(n, n.visualViewport || [], ui(s) ? s : [], n.frameElement && o ? xi(n.frameElement) : []) : t.concat(s, xi(s, [], o));
}
function ki(e) {
    const t = mi(e);
    let o = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
    const s = ci(e), r = s ? e.offsetWidth : o, n = s ? e.offsetHeight : i, a = Ho(o) !== r || Ho(i) !== n;
    return a && (o = r, i = n), {
        width: o,
        height: i,
        $: a
    };
}
function Si(e) {
    return di(e) ? e : e.contextElement;
}
function Ci(e) {
    const t = Si(e);
    if (!ci(t)) return jo(1);
    const o = t.getBoundingClientRect(), { width: i, height: s, $: r } = ki(t);
    let n = (r ? Ho(o.width) : o.width) / i, a = (r ? Ho(o.height) : o.height) / s;
    return n && Number.isFinite(n) || (n = 1), a && Number.isFinite(a) || (a = 1), {
        x: n,
        y: a
    };
}
const Bi = jo(0);
function Pi(e) {
    const t = ni(e);
    return gi() && t.visualViewport ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    } : Bi;
}
function Ei(e, t, o, i) {
    void 0 === t && (t = !1), void 0 === o && (o = !1);
    const s = e.getBoundingClientRect(), r = Si(e);
    let n = jo(1);
    t && (i ? di(i) && (n = Ci(i)) : n = Ci(e));
    const a = function(e, t, o) {
        return void 0 === t && (t = !1), !(!o || t && o !== ni(e)) && t;
    }(r, o, i) ? Pi(r) : jo(0);
    let l = (s.left + a.x) / n.x, d = (s.top + a.y) / n.y, c = s.width / n.x, h = s.height / n.y;
    if (r) {
        const e = ni(r), t = i && di(i) ? ni(i) : i;
        let o = e.frameElement;
        for(; o && i && t !== e;){
            const e = Ci(o), t = o.getBoundingClientRect(), i = mi(o), s = t.left + (o.clientLeft + parseFloat(i.paddingLeft)) * e.x, r = t.top + (o.clientTop + parseFloat(i.paddingTop)) * e.y;
            l *= e.x, d *= e.y, c *= e.x, h *= e.y, l += s, d += r, o = ni(o).frameElement;
        }
    }
    return ti({
        width: c,
        height: h,
        x: l,
        y: d
    });
}
function Ai(e) {
    return Ei(ai(e)).left + bi(e).scrollLeft;
}
function Ti(e, t, o) {
    let i;
    if ("viewport" === t) i = function(e, t) {
        const o = ni(e), i = ai(e), s = o.visualViewport;
        let r = i.clientWidth, n = i.clientHeight, a = 0, l = 0;
        if (s) {
            r = s.width, n = s.height;
            const e = gi();
            (!e || e && "fixed" === t) && (a = s.offsetLeft, l = s.offsetTop);
        }
        return {
            width: r,
            height: n,
            x: a,
            y: l
        };
    }(e, o);
    else if ("document" === t) i = function(e) {
        const t = ai(e), o = bi(e), i = e.ownerDocument.body, s = zo(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), r = zo(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
        let n = -o.scrollLeft + Ai(e);
        const a = -o.scrollTop;
        return "rtl" === mi(i).direction && (n += zo(t.clientWidth, i.clientWidth) - s), {
            width: s,
            height: r,
            x: n,
            y: a
        };
    }(ai(e));
    else if (di(t)) i = function(e, t) {
        const o = Ei(e, !0, "fixed" === t), i = o.top + e.clientTop, s = o.left + e.clientLeft, r = ci(e) ? Ci(e) : jo(1);
        return {
            width: e.clientWidth * r.x,
            height: e.clientHeight * r.y,
            x: s * r.x,
            y: i * r.y
        };
    }(t, o);
    else {
        const o = Pi(e);
        i = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        };
    }
    return ti(i);
}
function $i(e, t) {
    const o = wi(e);
    return !(o === t || !di(o) || vi(o)) && ("fixed" === mi(o).position || $i(o, t));
}
function Ii(e, t, o) {
    const i = ci(t), s = ai(t), r = "fixed" === o, n = Ei(e, !0, r, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = jo(0);
    if (i || !i && !r) {
        if (("body" !== ri(t) || ui(s)) && (a = bi(t)), i) {
            const e = Ei(t, !0, r, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
        } else s && (l.x = Ai(s));
    }
    return {
        x: n.left + a.scrollLeft - l.x,
        y: n.top + a.scrollTop - l.y,
        width: n.width,
        height: n.height
    };
}
function Fi(e, t) {
    return ci(e) && "fixed" !== mi(e).position ? t ? t(e) : e.offsetParent : null;
}
function Li(e, t) {
    const o = ni(e);
    if (!ci(e)) return o;
    let i = Fi(e, t);
    for(; i && pi(i) && "static" === mi(i).position;)i = Fi(i, t);
    return i && ("html" === ri(i) || "body" === ri(i) && "static" === mi(i).position && !fi(i)) ? o : i || function(e) {
        let t = wi(e);
        for(; ci(t) && !vi(t);){
            if (fi(t)) return t;
            t = wi(t);
        }
        return null;
    }(e) || o;
}
const Mi = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let { rect: t, offsetParent: o, strategy: i } = e;
        const s = ci(o), r = ai(o);
        if (o === r) return t;
        let n = {
            scrollLeft: 0,
            scrollTop: 0
        }, a = jo(1);
        const l = jo(0);
        if ((s || !s && "fixed" !== i) && (("body" !== ri(o) || ui(r)) && (n = bi(o)), ci(o))) {
            const e = Ei(o);
            a = Ci(o), l.x = e.x + o.clientLeft, l.y = e.y + o.clientTop;
        }
        return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - n.scrollLeft * a.x + l.x,
            y: t.y * a.y - n.scrollTop * a.y + l.y
        };
    },
    getDocumentElement: ai,
    getClippingRect: function(e) {
        let { element: t, boundary: o, rootBoundary: i, strategy: s } = e;
        const r = [
            ..."clippingAncestors" === o ? function(e, t) {
                const o = t.get(e);
                if (o) return o;
                let i = xi(e, [], !1).filter((e)=>di(e) && "body" !== ri(e)), s = null;
                const r = "fixed" === mi(e).position;
                let n = r ? wi(e) : e;
                for(; di(n) && !vi(n);){
                    const t = mi(n), o = fi(n);
                    o || "fixed" !== t.position || (s = null), (r ? !o && !s : !o && "static" === t.position && s && [
                        "absolute",
                        "fixed"
                    ].includes(s.position) || ui(n) && !o && $i(e, n)) ? i = i.filter((e)=>e !== n) : s = t, n = wi(n);
                }
                return t.set(e, i), i;
            }(t, this._c) : [].concat(o),
            i
        ], n = r[0], a = r.reduce((e, o)=>{
            const i = Ti(t, o, s);
            return e.top = zo(i.top, e.top), e.right = Do(i.right, e.right), e.bottom = Do(i.bottom, e.bottom), e.left = zo(i.left, e.left), e;
        }, Ti(t, n, s));
        return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
        };
    },
    getOffsetParent: Li,
    getElementRects: async function(e) {
        let { reference: t, floating: o, strategy: i } = e;
        const s = this.getOffsetParent || Li, r = this.getDimensions;
        return {
            reference: Ii(t, await s(o), i),
            floating: {
                x: 0,
                y: 0,
                ...await r(o)
            }
        };
    },
    getClientRects: function(e) {
        return Array.from(e.getClientRects());
    },
    getDimensions: function(e) {
        const { width: t, height: o } = ki(e);
        return {
            width: t,
            height: o
        };
    },
    getScale: Ci,
    isElement: di,
    isRTL: function(e) {
        return "rtl" === mi(e).direction;
    }
};
function Ni(e, t, o, i) {
    void 0 === i && (i = {});
    const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: n = "function" == typeof ResizeObserver, layoutShift: a = "function" == typeof IntersectionObserver, animationFrame: l = !1 } = i, d = Si(e), c = s || r ? [
        ...d ? xi(d) : [],
        ...xi(t)
    ] : [];
    c.forEach((e)=>{
        s && e.addEventListener("scroll", o, {
            passive: !0
        }), r && e.addEventListener("resize", o);
    });
    const h = d && a ? function(e, t) {
        let o, i = null;
        const s = ai(e);
        function r() {
            clearTimeout(o), i && i.disconnect(), i = null;
        }
        return function n(a, l) {
            void 0 === a && (a = !1), void 0 === l && (l = 1), r();
            const { left: d, top: c, width: h, height: u } = e.getBoundingClientRect();
            if (a || t(), !h || !u) return;
            const p = {
                rootMargin: -_o(c) + "px " + -_o(s.clientWidth - (d + h)) + "px " + -_o(s.clientHeight - (c + u)) + "px " + -_o(d) + "px",
                threshold: zo(0, Do(1, l)) || 1
            };
            let f = !0;
            function g(e) {
                const t = e[0].intersectionRatio;
                if (t !== l) {
                    if (!f) return n();
                    t ? n(!1, t) : o = setTimeout(()=>{
                        n(!1, 1e-7);
                    }, 100);
                }
                f = !1;
            }
            try {
                i = new IntersectionObserver(g, {
                    ...p,
                    root: s.ownerDocument
                });
            } catch (e) {
                i = new IntersectionObserver(g, p);
            }
            i.observe(e);
        }(!0), r;
    }(d, o) : null;
    let u, p = -1, f = null;
    n && (f = new ResizeObserver((e)=>{
        let [i] = e;
        i && i.target === d && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(()=>{
            f && f.observe(t);
        })), o();
    }), d && !l && f.observe(d), f.observe(t));
    let g = l ? Ei(e) : null;
    return l && function t() {
        const i = Ei(e);
        !g || i.x === g.x && i.y === g.y && i.width === g.width && i.height === g.height || o();
        g = i, u = requestAnimationFrame(t);
    }(), o(), ()=>{
        c.forEach((e)=>{
            s && e.removeEventListener("scroll", o), r && e.removeEventListener("resize", o);
        }), h && h(), f && f.disconnect(), f = null, l && cancelAnimationFrame(u);
    };
}
const Oi = function(e) {
    return void 0 === e && (e = {}), {
        name: "autoPlacement",
        options: e,
        async fn (t) {
            var o, i, s;
            const { rects: r, middlewareData: n, placement: a, platform: l, elements: d } = t, { crossAxis: c = !1, alignment: h, allowedPlacements: u = Ro, autoAlignment: p = !0, ...f } = Ko(e, t), g = void 0 !== h || u === Ro ? ii(h || null, p, u) : u, v = await async function(e, t) {
                var o;
                void 0 === t && (t = {});
                const { x: i, y: s, platform: r, rects: n, elements: a, strategy: l } = e, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: u = !1, padding: p = 0 } = Ko(t, e), f = ei(p), g = a[u ? "floating" === h ? "reference" : "floating" : h], v = ti(await r.getClippingRect({
                    element: null == (o = await (null == r.isElement ? void 0 : r.isElement(g))) || o ? g : g.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(a.floating)),
                    boundary: d,
                    rootBoundary: c,
                    strategy: l
                })), m = "floating" === h ? {
                    ...n.floating,
                    x: i,
                    y: s
                } : n.reference, b = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(a.floating)), w = await (null == r.isElement ? void 0 : r.isElement(b)) && await (null == r.getScale ? void 0 : r.getScale(b)) || {
                    x: 1,
                    y: 1
                }, y = ti(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: m,
                    offsetParent: b,
                    strategy: l
                }) : m);
                return {
                    top: (v.top - y.top + f.top) / w.y,
                    bottom: (y.bottom - v.bottom + f.bottom) / w.y,
                    left: (v.left - y.left + f.left) / w.x,
                    right: (y.right - v.right + f.right) / w.x
                };
            }(t, f), m = (null == (o = n.autoPlacement) ? void 0 : o.index) || 0, b = g[m];
            if (null == b) return {};
            const w = function(e, t, o) {
                void 0 === o && (o = !1);
                const i = Xo(e), s = Zo(e), r = Yo(s);
                let n = "x" === s ? i === (o ? "end" : "start") ? "right" : "left" : "start" === i ? "bottom" : "top";
                return t.reference[r] > t.floating[r] && (n = Jo(n)), [
                    n,
                    Jo(n)
                ];
            }(b, r, await (null == l.isRTL ? void 0 : l.isRTL(d.floating)));
            if (a !== b) return {
                reset: {
                    placement: g[0]
                }
            };
            const y = [
                v[Uo(b)],
                v[w[0]],
                v[w[1]]
            ], x = [
                ...(null == (i = n.autoPlacement) ? void 0 : i.overflows) || [],
                {
                    placement: b,
                    overflows: y
                }
            ], k = g[m + 1];
            if (k) return {
                data: {
                    index: m + 1,
                    overflows: x
                },
                reset: {
                    placement: k
                }
            };
            const S = x.map((e)=>{
                const t = Xo(e.placement);
                return [
                    e.placement,
                    t && c ? e.overflows.slice(0, 2).reduce((e, t)=>e + t, 0) : e.overflows[0],
                    e.overflows
                ];
            }).sort((e, t)=>e[1] - t[1]), C = (null == (s = S.filter((e)=>e[2].slice(0, Xo(e[0]) ? 2 : 3).every((e)=>e <= 0))[0]) ? void 0 : s[0]) || S[0][0];
            return C !== a ? {
                data: {
                    index: m + 1,
                    overflows: x
                },
                reset: {
                    placement: C
                }
            } : {};
        }
    };
}, Vi = (e)=>({
        name: "arrow",
        options: e,
        async fn (t) {
            const { x: o, y: i, placement: s, rects: r, platform: n, elements: a, middlewareData: l } = t, { element: d, padding: c = 0 } = Ko(e, t) || {};
            if (null == d) return {};
            const h = ei(c), u = {
                x: o,
                y: i
            }, p = Zo(s), f = Yo(p), g = await n.getDimensions(d), v = "y" === p, m = v ? "top" : "left", b = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", y = r.reference[f] + r.reference[p] - u[p] - r.floating[f], x = u[p] - r.reference[p], k = await (null == n.getOffsetParent ? void 0 : n.getOffsetParent(d));
            let S = k ? k[w] : 0;
            S && await (null == n.isElement ? void 0 : n.isElement(k)) || (S = a.floating[w] || r.floating[f]);
            const C = y / 2 - x / 2, B = S / 2 - g[f] / 2 - 1, P = Do(h[m], B), E = Do(h[b], B), A = P, T = S - g[f] - E, $ = S / 2 - g[f] / 2 + C, I = qo(A, $, T), F = !l.arrow && null != Xo(s) && $ != I && r.reference[f] / 2 - ($ < A ? P : E) - g[f] / 2 < 0, L = F ? $ < A ? $ - A : $ - T : 0;
            return {
                [p]: u[p] + L,
                data: {
                    [p]: I,
                    centerOffset: $ - I - L,
                    ...F && {
                        alignmentOffset: L
                    }
                },
                reset: F
            };
        }
    }), Ri = (e, t, o)=>{
    const i = new Map, s = {
        platform: Mi,
        ...o
    }, r = {
        ...s.platform,
        _c: i
    };
    return (async (e, t, o)=>{
        const { placement: i = "bottom", strategy: s = "absolute", middleware: r = [], platform: n } = o, a = r.filter(Boolean), l = await (null == n.isRTL ? void 0 : n.isRTL(t));
        let d = await n.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }), { x: c, y: h } = oi(d, i, l), u = i, p = {}, f = 0;
        for(let o = 0; o < a.length; o++){
            const { name: r, fn: g } = a[o], { x: v, y: m, data: b, reset: w } = await g({
                x: c,
                y: h,
                initialPlacement: i,
                placement: u,
                strategy: s,
                middlewareData: p,
                rects: d,
                platform: n,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            c = null != v ? v : c, h = null != m ? m : h, p = {
                ...p,
                [r]: {
                    ...p[r],
                    ...b
                }
            }, w && f <= 50 && (f++, "object" == typeof w && (w.placement && (u = w.placement), w.rects && (d = !0 === w.rects ? await n.getElementRects({
                reference: e,
                floating: t,
                strategy: s
            }) : w.rects), { x: c, y: h } = oi(d, u, l)), o = -1);
        }
        return {
            x: c,
            y: h,
            placement: u,
            strategy: s,
            middlewareData: p
        };
    })(e, t, {
        ...s,
        platform: r
    });
}, Di = G`
  ${yt("block")}

  :host {
    display: block;
    position: relative;
  }
  :host([hidden]) {
    display: none;
  }
  :host([data-flexposition="2"]) {
    order: 2;
  }
  :host(:focus-visible)::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-color: ${bo};
    outline: ${Zt} solid ${bo};
    box-shadow: ${ko}, 0 0 0 2px ${yo};
  }
`;
const zi = Se`
    <template
      slot="multi-view"
      role="tabpanel"
      ?hidden="${(e)=>e.hidden}"
      tabindex="${(e)=>e.hidden ? "-1" : "0"}"
      role="region"
    >
      <div class="multi-view" part="multi-view">
        ${wt({})}
        <slot></slot>
        ${bt({})}
      </div>
    </template>
  `, Hi = at.compose({
    name: `${lt.prefix}-multi-view`,
    template: zi,
    styles: Di,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
class _i extends nt {
}
const ji = G`
  :host {
    position: relative;
  }
  :host([aria-expanded="true"])::before {
    content: "";
    z-index: 3;
    position: absolute;
    left: 0;
    height: 32px;
    width: 3px;
    background: var(--colorBrandBackground);
  }

  :host(:focus-visible)::after {
    content: "";
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: var(--borderRadiusSmall);
    outline: none;
    box-shadow: inset 0 0 0 1px var(--colorStrokeFocus2);
  }
`;
const Gi = Se`
    <template slot="controller" tabindex="-1" role="tab">
      <fluent-button icon-only shape="square" tabindex="-1">
        <slot></slot>
      </fluent-button>
    </template>
  `, Wi = _i.compose({
    name: `${lt.prefix}-multi-view-controller`,
    template: Gi,
    styles: ji
});
class qi extends nt {
    constructor(){
        super(...arguments), this.multiViews = [], this.controllers = [], this.openedMultiViews = [], this.previouslyOpenedMultiView = null, this.activeid = "", this.prevActiveControllerIndex = 0, this.activeControllerIndex = 0, this.controllerIds = [], this.multiViewsIds = [], this.openMultiView = (e)=>{
            e.hidden && (this.closeAllMultiViews(), e.hidden = !1, this.manageOpenedMultiViews(e));
        }, this.manageOpenedMultiViews = (e, t)=>{
            this.addMultiViewToOpenedMultiViews(e), this.openedMultiViews.length >= 2 && this.limitNumberOfOpenMultiViews(), y.enqueue(()=>e.focus()), this.setComponent();
        }, this.manageOpeningSecondMultiView = (e)=>{
            e.setAttribute("data-flexposition", "2"), this.openedMultiViews.length >= 2 && this.limitNumberOfOpenMultiViews();
            const t = this.multiViews[this.activeControllerIndex];
            t.hidden && (this.addMultiViewToOpenedMultiViews(t), this.previouslyOpenedMultiView && this.previouslyOpenedMultiView.removeAttribute("data-flexposition"), t.setAttribute("data-flexposition", "2"));
        }, this.openSecondMultiView = (e)=>{
            e.hidden && (this.manageOpeningSecondMultiView(e), e.hidden = !1, y.enqueue(()=>e.focus()), this.previouslyOpenedMultiView = e);
        }, this.closeMultiView = (e)=>{
            e.hidden || (this.manageClosedMultiViews(e), e.hidden = !0);
        }, this.manageClosedMultiViews = (e)=>{
            e.hasAttribute("data-flexposition") && e.removeAttribute("data-flexposition"), this.openedMultiViews = this.openedMultiViews.filter((t)=>t !== e);
            const t = this.multiViews.indexOf(e);
            this.controllers[t].focus(), this.activeController = this.controllers[t], this.removeMultiViewFromOpenedMultiViews(e);
        }, this.closeAllMultiViews = ()=>{
            this.openedMultiViews.forEach((e)=>{
                const t = e;
                this.closeMultiView(t);
            });
        }, this.toggleMultiView = (e)=>{
            e.hidden ? this.openMultiView(e) : this.closeMultiView(e);
        }, this.removeMultiViewFromOpenedMultiViews = (e)=>{
            const t = this.openedMultiViews.indexOf(e);
            t > -1 && this.openedMultiViews.splice(t, 1);
        }, this.addMultiViewToOpenedMultiViews = (e)=>{
            this.openedMultiViews.includes(e) || (this.openedMultiViews = [
                ...this.openedMultiViews,
                e
            ]);
        }, this.change = ()=>{
            this.$emit("change", this.openedMultiViews);
        }, this.isDisabledElement = (e)=>"true" === e.getAttribute("aria-disabled"), this.isHiddenElement = (e)=>"true" === e.getAttribute("aria-hidden"), this.isFocusableElement = (e)=>!this.isDisabledElement(e) && !this.isHiddenElement(e) && null !== e.offsetParent, this.setMultiViews = ()=>{
            this.multiViews.forEach((e, t)=>{
                if (e instanceof at) {
                    const o = this.controllerIds[t], i = this.multiViewsIds[t];
                    this.setAttributes(e, {
                        id: i,
                        "aria-labelledby": o
                    }), e.hidden ? this.removeMultiViewFromOpenedMultiViews(e) : this.addMultiViewToOpenedMultiViews(e);
                }
            });
        }, this.unsetActiveToggleButton = ()=>{
            this.activeControllerIndex = 0, this.activeController = void 0, this.setControllers;
        }, this.handleControllerClick = (e)=>{
            const t = e.currentTarget;
            if (1 !== t.nodeType || !this.isFocusableElement(t)) return;
            this.prevActiveControllerIndex = this.activeControllerIndex, this.activeControllerIndex = this.controllers.indexOf(t);
            const o = this.multiViews[this.activeControllerIndex];
            e.ctrlKey ? this.openSecondMultiView(o) : this.toggleMultiView(o);
        }, this.handleControllerKeyDown = (e)=>{
            const t = this.multiViews[this.activeControllerIndex], o = e.currentTarget;
            switch(e.key){
                case ct:
                    e.preventDefault(), this.adjustBackward(e);
                    break;
                case ft:
                    if (e.shiftKey) e.preventDefault(), this.controllersContainer.focus();
                    else this.controllers[0].focus();
                    break;
                case dt:
                    e.preventDefault(), this.adjustForward(e);
                    break;
                case pt:
                    e.preventDefault(), this.adjust(-this.activeControllerIndex);
                    break;
                case "End":
                    e.preventDefault(), this.adjust(this.controllers.length - this.activeControllerIndex - 1);
                    break;
                case ht:
                case " ":
                    e.ctrlKey ? (e.preventDefault(), this.openSecondMultiView(t)) : (e.preventDefault(), this.toggleMultiView(t));
                    break;
                case ut:
                    e.preventDefault(), o.blur();
            }
        }, this.handleMultiViewKeyDown = (e)=>{
            const t = e.currentTarget;
            if (e.key === ut) e.preventDefault(), this.closeMultiView(t);
        }, this.handleToggleButtonContainerKeyDown = (e)=>{
            const t = this.controllers[0];
            if (e.key === ft) this.unsetActiveToggleButton(), t.tabIndex = 0;
        }, this.adjustForward = (e)=>{
            const t = this.controllers;
            let o = 0;
            for(o = this.activeController ? t.indexOf(this.activeController) + 1 : 1, o === t.length && (o = 0); o < t.length && t.length > 1;){
                if (this.isFocusableElement(t[o])) {
                    this.moveToToggleButtonByIndex(t, o);
                    break;
                }
                if (this.activeController && o === t.indexOf(this.activeController)) break;
                o + 1 >= t.length ? o = 0 : o += 1;
            }
        }, this.adjustBackward = (e)=>{
            const t = this.controllers;
            let o = 0;
            for(o = this.activeController ? t.indexOf(this.activeController) - 1 : 0, o = o < 0 ? t.length - 1 : o; o >= 0 && t.length > 1;){
                if (this.isFocusableElement(t[o])) {
                    this.moveToToggleButtonByIndex(t, o);
                    break;
                }
                o - 1 < 0 ? o = t.length - 1 : o -= 1;
            }
        }, this.moveToToggleButtonByIndex = (e, t)=>{
            const o = e[t];
            this.activeController = o, this.activeController.tabIndex = 0, this.prevActiveControllerIndex = this.activeControllerIndex, this.controllers[this.prevActiveControllerIndex].tabIndex = -1, this.activeControllerIndex = t, o.focus(), this.setComponent();
        };
    }
    connectedCallback() {
        super.connectedCallback(), this.initialize();
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.removeEventListeners();
    }
    initialize() {
        this.controllerIds = this.getControllerIds(), this.multiViewsIds = this.getMultiViewIds(), this.activeControllerIndex = this.getActiveIndex(), y.enqueue(()=>this.setControllers()), y.enqueue(()=>this.setMultiViews()), y.enqueue(()=>this.addEventListeners());
    }
    limitNumberOfOpenMultiViews() {
        const e = this.openedMultiViews.shift();
        e && (e.removeAttribute("data-flexposition"), e.hidden = !0);
    }
    activeidChanged(e, t) {
        this.$fastController.isConnected && this.controllers.length <= this.multiViews.length && (this.prevActiveControllerIndex = this.controllers.findIndex((t)=>t.id === e), this.activeControllerIndex = this.controllers.findIndex((e)=>e.id === t), this.controllers[this.activeControllerIndex].tabIndex = 0, this.controllers[this.prevActiveControllerIndex].tabIndex = -1, this.setControllers(), this.setMultiViews());
    }
    controllersChanged() {
        this.isValidMultiViewState() && (this.controllerIds = this.getControllerIds(), this.multiViewsIds = this.getMultiViewIds(), this.setControllers(), this.setMultiViews());
    }
    multiViewsChanged() {
        this.isValidMultiViewState() && (this.controllerIds = this.getControllerIds(), this.multiViewsIds = this.getMultiViewIds(), this.setControllers(), this.setMultiViews());
    }
    openedMultiViewsChanged() {
        this.controllers.forEach((e, t)=>{
            const o = this.multiViews[t];
            this.openedMultiViews.includes(o) ? e.setAttribute("aria-expanded", "true") : e.setAttribute("aria-expanded", "false");
        });
    }
    isValidMultiViewState() {
        return this.$fastController.isConnected && this.controllers.length <= this.multiViews.length;
    }
    getActiveIndex() {
        if (void 0 !== this.activeid) {
            let e = this.controllerIds.indexOf(this.activeid);
            for(; -1 !== e;){
                const t = document.getElementById(this.controllerIds[e]);
                if (t && "true" !== t.getAttribute("aria-hidden")) return e;
                e = this.controllerIds.indexOf(this.activeid, e + 1);
            }
        }
        for(let e = 0; e < this.controllerIds.length; e++){
            const t = document.getElementById(this.controllerIds[e]);
            if (t && "true" !== t.getAttribute("aria-hidden")) return e;
        }
        return 0;
    }
    setControllers() {
        this.activeController = this.controllers[this.activeControllerIndex], this.activeController.tabIndex = 0, this.multiViews.forEach((e, t)=>{
            e.hidden ? this.controllers[t].ariaSelected = "false" : this.controllers[t].ariaSelected = "true";
        }), this.controllers.forEach((e, t)=>{
            if (!(e instanceof HTMLElement)) return;
            const o = this.activeControllerIndex === t && this.isFocusableElement(e), i = this.controllerIds[t], s = this.multiViewsIds[t];
            this.setAttributes(e, {
                id: i,
                "aria-controls": s
            }), o && (this.activeController = e, this.activeid = i);
        });
    }
    getControllerIds() {
        return this.controllers.map((e)=>{
            var t;
            return null !== (t = e.getAttribute("id")) && void 0 !== t ? t : `controller-${vt()}`;
        });
    }
    getMultiViewIds() {
        return this.multiViews.map((e)=>{
            var t;
            return null !== (t = e.getAttribute("id")) && void 0 !== t ? t : `multiView-${vt()}`;
        });
    }
    setComponent() {
        this.activeControllerIndex !== this.prevActiveControllerIndex && (this.activeid = this.controllerIds[this.activeControllerIndex], this.change());
    }
    handleControllerBlur(e) {
        e.currentTarget.tabIndex = -1;
    }
    adjust(e) {
        const t = this.controllers.filter((e)=>!this.isDisabledElement(e));
        if (this.activeController) {
            const o = t.indexOf(this.activeController), i = function(e, t, o) {
                return Math.min(Math.max(o, e), t);
            }(0, t.length - 1, o + e), s = this.controllers.indexOf(t[i]);
            s > -1 && this.moveToToggleButtonByIndex(this.controllers, s);
        }
    }
    setAttributes(e, t) {
        Object.entries(t).forEach(([t, o])=>{
            e.setAttribute(t, o);
        });
    }
    addEventListeners() {
        this.controllersContainer && this.controllersContainer.addEventListener("keydown", this.handleToggleButtonContainerKeyDown), this.controllers.forEach((e)=>{
            e.addEventListener("click", this.handleControllerClick), e.addEventListener("keydown", this.handleControllerKeyDown), e.addEventListener("blur", this.handleControllerBlur);
        }), this.multiViews.forEach((e)=>{
            e.addEventListener("keydown", (e)=>this.handleMultiViewKeyDown(e));
        });
    }
    removeEventListeners() {
        this.controllers.forEach((e)=>{
            e.removeEventListener("click", this.handleControllerClick), e.removeEventListener("keydown", this.handleControllerKeyDown), e.removeEventListener("blur", this.handleControllerBlur);
        }), this.multiViews.forEach((e)=>{
            e.removeEventListener("keydown", (e)=>this.handleMultiViewKeyDown(e));
        });
    }
}
e([
    B
], qi.prototype, "multiViews", void 0), e([
    B
], qi.prototype, "controllers", void 0), e([
    B
], qi.prototype, "controllersContainer", void 0), e([
    B
], qi.prototype, "openedMultiViews", void 0);
const Ki = G`
  ${yt("flex")}
  :host {
    flex-direction: column;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    height: 100%;
  }
  .root {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .views {
    display: flex;
  }
  .controllers {
    display: flex;
    flex-direction: column;
    background: var(--colorNeutralBackground1);
    position: relative;
  }

  .controllers:focus-visible::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-color: ${bo};
    outline: ${Zt} solid ${bo};
    box-shadow: ${ko}, 0 0 0 2px ${yo};
  }
`;
const Ui = Se`
    <template>
      <div class="root">
        <div class="views" part="views">
          <slot name="multi-view" ${Fe("multiViews")}></slot>
        </div>
        ${wt({})}
        <div
          class="controllers"
          part="controllers"
          role="tablist"
          aria-label="${(e)=>e.ariaLabel}"
          tabindex="${(e)=>e.hidden ? "-1" : "0"}"
          ${Be("controllersContainer")}
        >
          <slot name="controller" ${Fe("controllers")}></slot>
        </div>
        ${bt({})}
      </div>
    </template>
  `, Xi = qi.compose({
    name: `${lt.prefix}-multi-view-group`,
    template: Ui,
    styles: Ki,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
const Yi = {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left"
}, Qi = {
    aboveEnd: "above-end",
    aboveCenter: "above-center",
    aboveStart: "above-start",
    endBottom: "end-bottom",
    endMiddle: "end-middle",
    endTop: "end-top",
    belowEnd: "below-end",
    belowCenter: "below-center",
    belowStart: "below-start",
    startBottom: "start-bottom",
    startTop: "start-top",
    startMiddle: "start-middle"
}, Zi = Object.values(Qi), Ji = {
    auto: "auto",
    flip: "flip",
    none: "none"
}, es = {
    hide: "hidePopover",
    show: "showPopover",
    toggle: "togglePopover",
    mouseEnter: "mouseEnterPopover",
    mouseLeave: "mouseLeavePopover"
};
class ts {
    constructor(e){
        this.rootMargin = 15, this.overflowBoundaryReference = null, this._position = Qi.aboveEnd, this._openPositions = [], this.checkPosition = (e)=>{
            var t, o, i;
            const s = null === (t = this.popoverReference) || void 0 === t ? void 0 : t.getBoundingClientRect(), r = null === (o = this.anchorReference) || void 0 === o ? void 0 : o.getBoundingClientRect();
            if (s && r) {
                let t = r.top, o = window.innerHeight - r.bottom, n = r.left, a = window.innerWidth - r.right;
                const l = null === (i = this.overflowBoundaryReference) || void 0 === i ? void 0 : i.getBoundingClientRect();
                l && (t = r.top - l.top, o = l.bottom - r.bottom, n = r.left - l.left, a = l.right - r.right);
                const d = s.height + this.rootMargin < t, c = s.height + this.rootMargin < o, h = s.width + this.rootMargin < n, u = s.width + this.rootMargin < a, p = (s.width - r.width) / 2 + this.rootMargin < n && (s.width - r.width) / 2 + this.rootMargin < a, f = s.width + this.rootMargin < n + r.width, g = s.width + r.width + this.rootMargin < a && a > 0, v = (s.height - r.height + this.rootMargin) / 2 < t && (s.height - r.height + this.rootMargin) / 2 < o, m = s.height - r.height + this.rootMargin < t, b = t > 0;
                switch(e){
                    case Qi.aboveEnd:
                        if (d && f) return !0;
                        break;
                    case Qi.aboveCenter:
                        if (d && p) return !0;
                        break;
                    case Qi.aboveStart:
                        if (d && g) return !0;
                        break;
                    case Qi.belowCenter:
                        if (c && p) return !0;
                        break;
                    case Qi.belowStart:
                        if (c && g) return !0;
                        break;
                    case Qi.belowEnd:
                        if (c && f) return !0;
                        break;
                    case Qi.startMiddle:
                        if (v && h) return !0;
                        break;
                    case Qi.startBottom:
                        if (h && m) return !0;
                        break;
                    case Qi.startTop:
                        if (b && h) return !0;
                        break;
                    case Qi.endMiddle:
                        if (v && u) return !0;
                        break;
                    case Qi.endBottom:
                        if (u && m) return !0;
                        break;
                    case Qi.endTop:
                        if (b && u) return !0;
                }
            }
            return !1;
        }, this.getOpenPositions = ()=>(this._openPositions = [], this._openPositions = Zi.filter((e)=>this.checkPosition(e)), this._openPositions), this.oppositePosition = (e)=>{
            switch(e){
                case Yi.top:
                    if (this.position === Qi.aboveStart) return [
                        Qi.belowStart
                    ];
                    if (this.position === Qi.aboveCenter) return [
                        Qi.belowCenter
                    ];
                    if (this.position === Qi.aboveEnd) return [
                        Qi.belowEnd
                    ];
                case Yi.right:
                    if (this.position === Qi.endBottom) return [
                        Qi.startBottom
                    ];
                    if (this.position === Qi.endMiddle) return [
                        Qi.startMiddle
                    ];
                    if (this.position === Qi.endTop) return [
                        Qi.startTop
                    ];
                case Yi.bottom:
                    if (this.position === Qi.belowStart) return [
                        Qi.aboveStart
                    ];
                    if (this.position === Qi.belowCenter) return [
                        Qi.aboveCenter
                    ];
                    if (this.position === Qi.belowEnd) return [
                        Qi.aboveEnd
                    ];
                case Yi.left:
                    if (this.position === Qi.startTop) return [
                        Qi.endTop
                    ];
                    if (this.position === Qi.startMiddle) return [
                        Qi.endMiddle
                    ];
                    if (this.position === Qi.startBottom) return [
                        Qi.endBottom
                    ];
            }
            return [
                this.position
            ];
        }, this.getOpenPositionsFromEdge = (e)=>"auto" === this.repositionMode ? Zi.filter((e)=>this.checkPosition(e)) : e ? this.oppositePosition(e) : [
                this.position
            ], this.findOpenPositionsFromCollision = (e)=>{
            const t = e.boundingClientRect, o = e.rootBounds;
            let i;
            return o && (t.bottom > o.bottom && (i = Yi.bottom), t.top < o.top && (i = Yi.top), t.left < o.left && (i = Yi.left), t.right > o.right && (i = Yi.right)), this.getOpenPositionsFromEdge(i);
        };
        const { repositionMode: t, popoverReference: o, anchorReference: i, overflowBoundaryReference: s } = e;
        this._repositionMode = t, this.popoverReference = o, this.anchorReference = i, s && (this.overflowBoundaryReference = s);
    }
    set repositionMode(e) {
        this._repositionMode = e;
    }
    get repositionMode() {
        return this._repositionMode;
    }
    set position(e) {
        this._position = e;
    }
    get position() {
        return this._position;
    }
    get openPositions() {
        return this.getOpenPositions();
    }
}
class os extends nt {
    constructor(){
        super(...arguments), this.ariaLabel = null, this.beak = !1, this.clickable = !0, this.size = "medium", this.mode = "manual", this.position = Qi.belowCenter, this.repositionMode = Ji.flip, this.openPositions = [], this.open = !1, this.registerOverflowBoundary = ()=>{
            this.overflowBoundarySelector && (this.overflowBoundaryRef = document.querySelector(this.overflowBoundarySelector));
        }, this.hidePopover = ()=>{
            this.open = !1, this.emitHideEvent();
        }, this.showPopover = ()=>{
            this.open = !0, this.emitShowEvent();
        }, this.togglePopover = ()=>{
            this.open = !this.open, this.emitToggleEvent();
        }, this.emitHideEvent = ()=>{
            var e;
            null === (e = this.popoverReference) || void 0 === e || e.dispatchEvent(new CustomEvent(es.hide, {
                detail: {
                    target: this,
                    open: this.open,
                    newState: "closed"
                }
            }));
        }, this.emitShowEvent = ()=>{
            var e;
            null === (e = this.popoverReference) || void 0 === e || e.dispatchEvent(new CustomEvent(es.show, {
                detail: {
                    target: this,
                    open: this.open,
                    newState: "open"
                }
            }));
        }, this.emitMouseEnterEvent = ()=>{
            this.dispatchEvent(new CustomEvent(es.mouseEnter, {
                bubbles: !0,
                detail: {
                    target: this,
                    open: this.open,
                    newState: "open"
                }
            }));
        }, this.emitMouseLeaveEvent = ()=>{
            this.dispatchEvent(new CustomEvent(es.mouseLeave, {
                bubbles: !0,
                detail: {
                    target: this,
                    open: this.open,
                    newState: "closed"
                }
            }));
        }, this.addMouseOverEventListeners = ()=>{
            var e, t;
            null === (e = this.popoverReference) || void 0 === e || e.addEventListener("mouseenter", this.emitMouseEnterEvent), null === (t = this.popoverReference) || void 0 === t || t.addEventListener("mouseleave", this.emitMouseLeaveEvent);
        }, this.removeMouseOverEventListeners = ()=>{
            var e, t;
            null === (e = this.popoverReference) || void 0 === e || e.removeEventListener("mouseenter", this.emitMouseEnterEvent), null === (t = this.popoverReference) || void 0 === t || t.removeEventListener("mouseleave", this.emitMouseLeaveEvent);
        }, this.updatePopoverPosition = ()=>{
            this.observePopoverOverflow();
        }, this.handleWindowChanges = function(e, t) {
            let o;
            return function(...i) {
                const s = this;
                clearTimeout(o), o = window.setTimeout(()=>e.apply(s, i), t);
            };
        }(()=>this.updatePopoverPosition(), 50), this.handleWindowClick = (e)=>{
            var t;
            this.anchorReferences && (null === (t = this.anchorReferences[0]) || void 0 === t ? void 0 : t.contains(e.target)) || this.open && this.hidePopover();
        }, this.createOverflowHandler = ()=>{
            const e = {
                root: document
            };
            this.overflowBoundaryRef && (e.root = this.overflowBoundaryRef), this.intersectionObserver = new IntersectionObserver(this.handleOverflow, e);
        }, this.handleOverflow = (e)=>{
            e.forEach((e)=>{
                var t, o;
                e.intersectionRatio < 1 && this.positioning ? (this.openPositions = this.positioning.findOpenPositionsFromCollision(e), (null === (t = this.openPositions) || void 0 === t ? void 0 : t.length) > 0 && this.repositionPopover(this.openPositions)) : (null === (o = this.openPositions) || void 0 === o ? void 0 : o.length) > 0 && this.releasePositions();
            });
        }, this.repositionPopover = (e)=>{
            this.position = e[0], this.positioning && (this.positioning.position = this.position);
        };
    }
    anchorReferencesChanged() {
        this.initializeTargetId(), this.addAnchorEventListeners();
    }
    repositionModeChanged() {
        this.positioning && (this.positioning.repositionMode = this.repositionMode);
    }
    openChanged() {
        var e, t, o, i;
        if (this.popoverReference) {
            if (this.originalPopoverPosition || (this.originalPopoverPosition = this.position), this.open) {
                if (null === (e = this.popoverReference) || void 0 === e || e.classList.add("popover-open"), this.addActiveHandlers(), this.positioning && !(null === (t = this.positioning) || void 0 === t ? void 0 : t.checkPosition(this.position))) {
                    const e = null === (o = this.positioning) || void 0 === o ? void 0 : o.getOpenPositions();
                    this.position = e[0];
                }
            } else null === (i = this.popoverReference) || void 0 === i || i.classList.remove("popover-open"), this.position = this.originalPopoverPosition, this.removeEventListeners();
        }
    }
    addActiveHandlers() {
        this.addRepositioningHandlers(), this.addOverlayEventListeners(), this.addMouseOverEventListeners(), this.createPositioningManager();
    }
    initializeTargetId() {
        if (!this.targetId) {
            const e = vt("popover-target-");
            this.targetId = e;
        }
    }
    overflowBoundaryRefChanged() {
        this.addOverflowBoundaryEventListeners();
    }
    emitToggleEvent() {
        var e;
        null === (e = this.popoverReference) || void 0 === e || e.dispatchEvent(new CustomEvent(es.toggle, {
            detail: {
                target: this,
                open: this.open,
                newState: this.open ? "open" : "closed"
            }
        }));
    }
    addAnchorEventListeners() {
        this.anchorReferences && this.anchorReferences.length && this.clickable && this.anchorReferences[0].addEventListener("click", this.togglePopover);
    }
    addOverflowBoundaryEventListeners() {
        this.overflowBoundaryRef && this.overflowBoundaryRef.addEventListener("scroll", this.handleWindowChanges);
    }
    addWindowEventListeners() {
        window.addEventListener("resize", this.handleWindowChanges), window.addEventListener("scroll", this.handleWindowChanges);
    }
    removeWindowEventListeners() {
        window.removeEventListener("resize", this.handleWindowChanges), window.removeEventListener("scroll", this.handleWindowChanges);
    }
    addOverlayEventListeners() {
        this.overflowBoundaryRef && "auto" === this.mode ? this.overflowBoundaryRef.addEventListener("click", this.handleWindowClick) : "auto" === this.mode && document.addEventListener("click", this.handleWindowClick);
    }
    removeOverlayEventListeners() {
        this.overflowBoundaryRef && "auto" === this.mode ? this.overflowBoundaryRef.removeEventListener("click", this.handleWindowClick) : "auto" === this.mode && document.removeEventListener("click", this.handleWindowClick);
    }
    addRepositioningHandlers() {
        "none" !== this.repositionMode && (this.registerOverflowBoundary(), this.createOverflowHandler(), this.addWindowEventListeners());
    }
    createPositioningManager() {
        var e;
        this.popoverReference && "none" !== this.repositionMode && (this.positioning = new ts({
            repositionMode: this.repositionMode,
            popoverReference: this.popoverReference,
            anchorReference: null === (e = this.anchorReferences) || void 0 === e ? void 0 : e[0],
            overflowBoundaryReference: this.overflowBoundaryRef
        }));
    }
    removeEventListeners() {
        var e;
        this.popoverReference && (this.removeWindowEventListeners(), this.removeOverlayEventListeners(), this.removeMouseOverEventListeners(), null === (e = this.intersectionObserver) || void 0 === e || e.unobserve(this.popoverReference));
    }
    releasePositions() {
        if (this.openPositions = [], this.positioning) for(const e in Zi){
            const t = Zi[e];
            this.positioning.checkPosition(t) && (this.openPositions.push(t), t === this.originalPopoverPosition && (this.position = this.originalPopoverPosition));
        }
    }
    observePopoverOverflow() {
        var e, t;
        null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), this.popoverReference && (null === (t = this.intersectionObserver) || void 0 === t || t.observe(this.popoverReference));
    }
    connectedCallback() {
        var e;
        super.connectedCallback(), this.open && (null === (e = this.popoverReference) || void 0 === e || e.classList.add("popover-open"));
    }
}
e([
    ze({
        attribute: "aria-label"
    })
], os.prototype, "ariaLabel", void 0), e([
    ze({
        mode: "boolean"
    })
], os.prototype, "beak", void 0), e([
    ze({
        mode: "boolean",
        attribute: "clickable"
    })
], os.prototype, "clickable", void 0), e([
    ze
], os.prototype, "size", void 0), e([
    ze
], os.prototype, "mode", void 0), e([
    ze
], os.prototype, "position", void 0), e([
    ze({
        attribute: "target-id"
    })
], os.prototype, "targetId", void 0), e([
    B
], os.prototype, "anchorReferences", void 0), e([
    ze({
        attribute: "reposition-mode"
    })
], os.prototype, "repositionMode", void 0), e([
    B
], os.prototype, "openPositions", void 0), e([
    ze({
        mode: "boolean"
    })
], os.prototype, "open", void 0), e([
    B
], os.prototype, "popoverReference", void 0), e([
    B
], os.prototype, "overflowBoundaryRef", void 0), e([
    ze({
        attribute: "overflow-boundary-selector"
    })
], os.prototype, "overflowBoundarySelector", void 0);
const is = G`
  :host([mode="auto"]) .popover-overlay {
    position: fixed;
    inset: 0;
    z-index: 0;
    display: none;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
  }

  :host([mode="auto"]) .popover-overlay.overlay-open {
    display: block;
  }

  .popover-container {
    position: relative;
    width: fit-content;
  }

  .popover {
    font-family: ${Xt};
    background-color: ${po};
    border-radius: ${Ht};
    border: 1px solid ${wo};
    box-shadow: ${So};

    visibility: hidden;
    opacity: 0;
    z-index: 0;
    position: absolute;
    inset: 0;

    margin: 0;
    min-width: 50px;
    min-height: 68px;
    max-width: 260px;

    width: max-content;
    height: max-content;
    padding: 16px;
  }

  .popover.popover-open {
    visibility: visible;
    display: block;
    opacity: 1;
    z-index: 1000;
  }

  :host([size="small"]) .popover {
    padding: 12px;
    max-width: 214px;
  }

  :host([size="large"]) .popover {
    padding: 20px;
    max-width: 317px;
  }

  .beak {
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${po};
    z-index: 1;
  }

  :host([beak]) .beak-shadow::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 8px solid rgba(0, 0, 0, 0.14);
    filter: blur(8px);
    z-index: 0;
  }

  :host([position="above-start"]) .popover {
    left: 0%;
    top: 0%;
    transform: translate(0%, -90%);
  }
  :host([position="above-start"]) .popover.popover-open {
    transform: translate(0%, -100%);
  }

  :host([position="above-start"][beak]) .popover.popover-open {
    /* popover  */
    top: -12px; /* offset popover from anchor  */
  }

  :host([position="above-start"][beak]) .beak-shadow:after {
    /* beak drop shadow */
    left: 16px;
    top: -8px; /* offset dropshadow from anchor  */
    transform: rotate(180deg);
    filter: blur(4px);
  }

  :host([position="above-start"][beak]) .beak {
    /* beak  */
    left: 16px;
    top: 100%;
    transform: rotate(180deg);
  }

  :host([position="above-center"]) .popover {
    left: 50%;
    top: 0%;
    transform: translate(-50%, -90%);
  }
  :host([position="above-center"]) .popover.popover-open {
    transform: translate(-50%, -100%);
  }

  :host([position="above-center"][beak]) .popover.popover-open {
    transform: translate(-50%, -100%);
    top: -12px;
  }

  :host([position="above-center"][beak]) .beak-shadow:after {
    left: calc(50% - 8px);
    top: -8px;
    transform: rotate(180deg);
  }

  :host([position="above-center"][beak]) .beak {
    left: calc(50% - 8px);
    top: 100%;
    transform: rotate(180deg);
  }

  :host([position="above-end"]) .popover {
    left: 100%;
    top: 0%;
    transform: translate(-100%, -90%);
  }
  :host([position="above-end"]) .popover.popover-open {
    transform: translate(-100%, -100%);
  }

  :host([position="above-end"][beak]) .popover.popover-open {
    transform: translate(-100%, -100%);
    top: -12px;
  }

  :host([position="above-end"][beak]) .beak-shadow:after {
    right: 16px;
    top: -8px;
    transform: rotate(180deg);
  }

  :host([position="above-end"][beak]) .beak {
    right: 16px;
    top: 100%;
    transform: rotate(180deg);
  }

  :host([position="end-top"]) .popover {
    left: 100%;
    top: 0%;
    transform: translate(-10%, 0%);
  }
  :host([position="end-top"]) .popover.popover-open {
    transform: translate(0%, 0%);
  }
  :host([position="end-top"][beak]) .popover.popover-open {
    left: calc(100% + 12px);
  }

  :host([position="end-top"][beak]) .beak-shadow:after {
    left: calc(100% - 1px);
    top: 18px;
    transform: rotate(270deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.07);
    filter: blur(2px);
  }

  :host([position="end-top"][beak]) .beak {
    left: -12px;
    top: 16px;
    transform: rotate(270deg);
  }

  :host([position="end-middle"]) .popover {
    left: 100%;
    top: 50%;
    transform: translate(-10%, -50%);
  }
  :host([position="end-middle"]) .popover.popover-open {
    transform: translate(0%, -50%);
  }

  :host([position="end-middle"][beak]) .popover.popover-open {
    left: calc(100% + 12px);
  }

  :host([position="end-middle"][beak]) .beak-shadow:after {
    left: calc(100% - 1px);
    top: calc(50% - 2px);
    transform: rotate(270deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.11);
    filter: blur(2px);
  }

  :host([position="end-middle"][beak]) .beak {
    left: -12px;
    top: calc(50% - 4px);
    transform: rotate(270deg);
  }

  :host([position="end-bottom"]) .popover {
    left: 100%;
    top: unset;
    bottom: 0%;
    transform: translate(-10%, 0%);
  }
  :host([position="end-bottom"]) .popover.popover-open {
    transform: translate(0%, 0%);
  }

  :host([position="end-bottom"][beak]) .popover.popover-open {
    left: calc(100% + 12px);
  }

  :host([position="end-bottom"][beak]) .beak-shadow:after {
    left: calc(100% - 1px);
    top: unset;
    bottom: 17px;
    transform: rotate(270deg);
    filter: blur(3px);
  }

  :host([position="end-bottom"][beak]) .beak {
    left: -12px;
    top: unset;
    bottom: 16px;
    transform: rotate(270deg);
  }

  :host([position="below-start"]) .popover {
    left: 0%;
    top: 100%;
    transform: translate(0%, -10%);
  }
  :host([position="below-start"]) .popover.popover-open {
    transform: translate(0%, 0%);
  }

  :host([position="below-start"][beak]) .popover.popover-open {
    top: calc(100% + 12px);
  }

  :host([position="below-start"][beak]) .beak-shadow:after {
    left: 16px;
    top: unset;
    bottom: -12px;
    transform: rotate(0deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.07);
    filter: blur(2px);
  }

  :host([position="below-start"][beak]) .beak {
    left: 16px;
    top: -8px;
    transform: rotate(0deg);
  }

  :host([position="below-center"]) .popover {
    left: 50%;
    top: 100%;
    transform: translate(-50%, -10%);
  }
  :host([position="below-center"]) .popover.popover-open {
    transform: translate(-50%, 0%);
  }

  :host([position="below-center"][beak]) .popover.popover-open {
    top: calc(100% + 8px);
  }

  :host([position="below-center"][beak]) .beak-shadow:after {
    left: calc(50% - 8px);
    top: unset;
    bottom: -8px;
    transform: rotate(0deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.07);
    filter: blur(2px);
  }

  :host([position="below-center"][beak]) .beak {
    left: calc(50% - 8px);
    top: -8px;
    transform: rotate(0deg);
  }

  :host([position="below-end"]) .popover {
    left: 100%;
    top: 100%;
    transform: translate(-100%, -10%);
  }
  :host([position="below-end"]) .popover.popover-open {
    transform: translate(-100%, 0%);
  }

  :host([position="below-end"][beak]) .popover.popover-open {
    top: calc(100% + 12px);
  }

  :host([position="below-end"][beak]) .beak-shadow:after {
    right: 16px;
    top: unset;
    bottom: -12px;
    transform: rotate(0deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.07);
    filter: blur(2px);
  }

  :host([position="below-end"][beak]) .beak {
    right: 16px;
    top: -8px;
    transform: rotate(0deg);
  }

  :host([position="start-top"]) .popover {
    left: 0%;
    top: 0%;
    transform: translate(-90%, 0%);
  }
  :host([position="start-top"]) .popover.popover-open {
    transform: translate(-100%, 0%);
  }

  :host([position="start-top"][beak]) .popover.popover-open {
    left: -12px;
  }

  :host([position="start-top"][beak]) .beak-shadow:after {
    left: -15px;
    top: 18px;
    transform: rotate(90deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.07);
    filter: blur(2px);
  }

  :host([position="start-top"][beak]) .beak {
    right: -12px;
    top: 16px;
    transform: rotate(90deg);
  }

  :host([position="start-middle"]) .popover {
    left: 0%;
    top: 50%;
    transform: translate(-90%, -50%);
  }
  :host([position="start-middle"]) .popover.popover-open {
    transform: translate(-100%, -50%);
  }

  :host([position="start-middle"][beak]) .popover.popover-open {
    left: -12px;
  }

  :host([position="start-middle"][beak]) .beak-shadow:after {
    left: -15px;
    top: calc(50% - 2px);
    transform: rotate(90deg);
    border-bottom: 8px solid rgba(0, 0, 0, 0.11);
    filter: blur(2px);
  }

  :host([position="start-middle"][beak]) .beak {
    right: -12px;
    top: calc(50% - 4px);
    transform: rotate(90deg);
  }

  :host([position="start-bottom"]) .popover {
    left: 0%;
    top: unset;
    bottom: 0%;
    transform: translate(-90%, 0%);
  }
  :host([position="start-bottom"]) .popover.popover-open {
    transform: translate(-100%, 0%);
  }

  :host([position="start-bottom"][beak]) .popover.popover-open {
    left: -12px;
  }

  :host([position="start-bottom"][beak]) .beak-shadow:after {
    left: -15px;
    top: unset;
    bottom: 17px;
    transform: rotate(90deg);
    filter: blur(3px);
  }

  :host([position="start-bottom"][beak]) .beak {
    right: -12px;
    top: unset;
    bottom: 16px;
    transform: rotate(90deg);
  }

  @starting-style {
    .popover.popover-open {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;
const ss = function(e = {}) {
    return Se`
    ${wt(e)}
    <div class="popover-container" role="dialog">
      <slot name="popover-trigger" ${Fe("anchorReferences")}></slot>
      <div
        aria-label="${(e)=>e.ariaLabel}"
        class="popover"
        part="popover"
        id="${(e)=>e.targetId}"
        ${Be("popoverReference")}
      >
        <slot name="popover-content"></slot>
        ${Ae((e)=>e.beak && e.open, Se`
            <div part="beak" class="beak"></div>
          `)}
      </div>
      ${Ae((e)=>e.beak && e.open, Se`
          <div part="beak-shadow" class="beak-shadow"></div>
        `)}
    </div>
    ${bt(e)}
  `;
}(), rs = os.compose({
    name: `${lt.prefix}-popover`,
    template: ss,
    styles: is,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
}), ns = {
    incomplete: "incomplete",
    complete: "complete",
    error: "error"
};
class as extends nt {
    constructor(){
        super(...arguments), this.active = !1, this.disabled = !1, this.state = ns.incomplete, this.index = 0, this.details = "", this.title = "";
    }
    stateChanged(e, t) {
        e !== t && this.emitChange();
    }
    activeChanged(e, t) {
        e !== t && this.emitChange();
    }
    toggleActive() {
        this.active = !this.active;
    }
    setComplete() {
        this.state = ns.complete;
    }
    setIncomplete() {
        this.state = ns.incomplete;
    }
    setError() {
        this.state = ns.error;
    }
    emitChange() {
        this.$emit("stepchange", {
            id: this.id,
            state: this.state,
            active: this.active,
            index: this.index
        });
    }
}
e([
    ze({
        mode: "boolean"
    })
], as.prototype, "ordered", void 0), e([
    ze({
        mode: "boolean",
        attribute: "hide-connector"
    })
], as.prototype, "hideConnector", void 0), e([
    ze({
        mode: "boolean"
    })
], as.prototype, "active", void 0), e([
    ze({
        mode: "boolean"
    })
], as.prototype, "disabled", void 0), e([
    ze({
        attribute: "aria-describedby"
    })
], as.prototype, "ariaDescribedby", void 0), e([
    ze({
        attribute: "aria-labelledby"
    })
], as.prototype, "ariaLabelledby", void 0), e([
    ze
], as.prototype, "state", void 0), e([
    B
], as.prototype, "index", void 0), e([
    B
], as.prototype, "details", void 0), e([
    B
], as.prototype, "title", void 0);
const ls = G`
  ${yt("block")}

  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: ${Xt};
    position: relative;
    align-items: flex-start;
    column-gap: ${eo};
    flex-shrink: 0;
    flex-grow: 1;
  }

  :host([hide-connector]) .state-connector,
  .summary,
  .title,
  .details {
    display: none;
  }

  :host(.overflow) {
    flex-shrink: 0;
    flex-grow: 0;
    width: 36px;
  }

  :host(.first) {
    padding-left: ${oo};
  }

  :host(.first) .state-connector {
    left: 28px;
  }

  :host(.last) {
    padding-right: ${oo};
  }

  .state-indicator {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    box-sizing: border-box;
  }

  .icon {
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-weight: var(--fontWeightRegular);
    line-height: var(--lineHeightBase100);
    font-size: var(--fontSizeBase200);
    border-radius: var(--borderRadiusCircular);
    border: 2px solid var(--colorNeutralForeground2);
    background: var(--colorNeutralBackground4);
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .order {
    font-size: var(--fontSizeBase200);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase200);
    margin-bottom: 1px;
  }

  .state-connector {
    position: absolute;
    top: 12px;
    left: 4px;
    height: 2px;
    width: 100%;
    background: var(--colorNeutralForegroundDisabled);
  }

  .title {
    font-weight: ${Yt};
    font-size: ${jt};
    line-height: ${Kt};
  }

  .details {
    font-weight: ${Yt};
    font-size: ${_t};
    line-height: ${qt};
  }

  .icon svg {
    color: ${uo};
    fill: ${uo};
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    vertical-align: middle;
  }

  :host([hide-connector]) {
    width: fit-content;
    flex-grow: 0;
    min-width: unset;
  }

  :host([aria-current="step"]) .title {
    font-weight: ${Qt};
  }

  :host([state="complete"]) .icon,
  :host([state="complete"]) .state-connector,
  :host([state="complete"].first) .state-connector,
  :host([active]) .icon {
    background: ${ho};
    border-color: ${ho};
    color: ${uo};
  }

  :host([state="complete"]) .icon svg {
    margin-top: 2px;
  }

  :host([state="error"]) .icon {
    background: ${xo};
    border-color: ${xo};
  }

  @media (min-width: 480px) {
    :host(.overflow),
    :host,
    :host(.first) {
      display: flex;
      align-items: flex-start;
      width: fit-content;
      height: fit-content;
      max-width: 268px;
      padding: 0 0 ${no} 0;
      column-gap: ${eo};
      flex-grow: 0;
    }
    :host(.first) .state-connector,
    .state-connector {
      position: absolute;
      width: 2px;
      left: 11px;
      height: 100%;
      background: var(--colorNeutralForegroundDisabled);
      min-height: 22px;
    }
  }

  @media (min-width: 1023px) {
    :host {
      flex-direction: row;
    }
    .state-connector {
      left: 11px;
    }
    :host([aria-current="step"]) .details,
    .title {
      display: block;
    }
    .order {
      display: none;
    }
    .summary {
      display: flex;
      flex-direction: column;
      width: fit-content;
      min-width: 174px;
      gap: ${so};
    }
  }
`, ds = Se`
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.86 3.66a.5.5 0 0 1-.02.7l-7.93 7.48a.6.6 0 0 1-.84-.02L2.4 9.1a.5.5 0 0 1 .72-.7l2.4 2.44 7.65-7.2a.5.5 0 0 1 .7.02Z"
      fill="currentColor"
    ></path>
  </svg>
`, cs = Se`
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="12"
    height="12"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.4 2.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"
      fill="currentColor"
    ></path>
  </svg>
`;
function hs() {
    return Se`
    <template
      class="step"
      state="${(e)=>e.state}"
      ?hide-connector="${(e)=>e.hideConnector}"
      ?active="${(e)=>e.active}"
      ?disabled="${(e)=>e.disabled}"
      ?ordered="${(e)=>e.ordered}"
      aria-label="${(e)=>e.ariaLabel}"
      aria-describedby="${(e)=>e.ariaDescribedby}"
      aria-labelledby="${(e)=>e.ariaLabelledby}"
      aria-current="${(e)=>e.active ? "step" : null}"
      aria-completed="${(e)=>"complete" == e.state ? "true" : "false"}"
    >
      <slot name="start"></slot>
      <div class="state-indicator">
        <div class="icon" part="icon">
          ${(e)=>"incomplete" === e.state ? Se`
                  <slot name="incomplete">
                    <span class="order" part="order">
                      ${(e)=>e.ordered ? e.index + 1 : ""}
                    </span>
                  </slot>
                ` : ""}
          ${(e)=>"complete" === e.state ? Se`
                  <slot name="complete">${ds}</slot>
                ` : ""}
          ${(e)=>"error" === e.state ? Se`
                  <slot name="error">${cs}</slot>
                ` : ""}
        </div>
      </div>
      <div class="summary" part="summary">
        <div class="title" part="title">
          <slot name="title">${(e)=>e.title}</slot>
        </div>
        <div class="details" part="details">
          <slot name="details">${(e)=>e.details}</slot>
        </div>
      </div>

      <div part="state-connector" class="state-connector"></div>
      <slot name="end"></slot>
    </template>
  `;
}
const us = hs(), ps = as.compose({
    name: `${lt.prefix}-step`,
    template: us,
    styles: ls,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
class fs extends nt {
    constructor(){
        super(...arguments), this.ordered = !1, this.currentIndex = 0, this.steps = [], this.slottedsteps = [], this.stepIds = [], this.setSteps = ()=>{
            this.slottedsteps.forEach((e, t)=>{
                var o, i, s, r, n, a;
                if ("step" === e.slot) {
                    const l = e, d = this.currentIndex === t && this.isFocusableElement(l), c = this.stepIds[t];
                    l.setAttribute("id", c), l.setAttribute("role", "listitem"), l.active = d, l.index = t, this.steps.length > 0 && (l.title = null !== (i = null === (o = this.steps[t]) || void 0 === o ? void 0 : o.title) && void 0 !== i ? i : void 0, l.details = null !== (r = null === (s = this.steps[t]) || void 0 === s ? void 0 : s.details) && void 0 !== r ? r : void 0, l.state = null !== (a = null === (n = this.steps[t]) || void 0 === n ? void 0 : n.state) && void 0 !== a ? a : ns.incomplete, this.ordered && (l.ordered = !0)), d && (this.activestep = l, this.activeid = c, this.currentIndex = t), t === this.slottedsteps.length - 1 && (l.hideConnector = !0), this.slottedsteps.length >= 7 && (l.classList.add("overflow"), t === this.slottedsteps.length - 1 && l.classList.add("last"), 0 === t && l.classList.add("first"));
                }
            }), this.slottedsteps.every((e)=>"complete" === e.state) && this.emitComplete(), this.slottedsteps.length >= 7 && this.setAttribute("class", "overflow"), this.emitChange();
        }, this.isDisabledElement = (e)=>"true" === e.getAttribute("aria-disabled"), this.isHiddenElement = (e)=>e.hasAttribute("hidden"), this.isFocusableElement = (e)=>!this.isDisabledElement(e) && !this.isHiddenElement(e), this.emitChange = ()=>{
            this.$emit("stepperchange", {
                steps: this.steps,
                currentIndex: this.currentIndex,
                prevActiveStepIndex: this.prevActiveStepIndex
            });
        }, this.emitComplete = ()=>{
            this.dispatchEvent(new CustomEvent("steppercomplete", {
                bubbles: !0,
                detail: {
                    steps: this.steps
                }
            }));
        };
    }
    show() {
        this.hidden = !1;
    }
    hide() {
        this.hidden = !0;
    }
    activeidChanged(e, t) {
        this.$fastController.isConnected && this.setSteps();
    }
    slottedstepsChanged() {
        this.$fastController.isConnected && (this.stepIds = this.getStepIds(), this.setSteps());
    }
    stepsChanged(e, t) {
        this.$fastController.isConnected && e !== t && t.length > 0 && (this.stepIds = this.getStepIds(), this.setSteps());
    }
    currentIndexChanged(e, t) {
        e !== t && y.enqueue(()=>{
            this.prevActiveStepIndex = e, this.setComponent();
        });
    }
    setComponent() {
        y.enqueue(()=>{
            this.stepIds = this.getStepIds(), this.setSteps();
        });
    }
    getStepIds() {
        return this.slottedsteps.map((e)=>{
            var t;
            return null !== (t = e.getAttribute("id")) && void 0 !== t ? t : `fabric-step-${parseInt(vt())}`;
        });
    }
    handleStepStateChange(e) {
        const t = e.detail.index, o = e.detail.state;
        e.detail.active && (this.currentIndex = t), this.steps = this.steps.map((e, i)=>i === t ? {
                ...e,
                state: o
            } : e);
    }
    addListeners() {
        this.slottedsteps.forEach((e)=>{
            e.addEventListener("stepchange", (e)=>this.handleStepStateChange(e));
        });
    }
    removeListeners() {
        this.slottedsteps.forEach((e)=>{
            e.removeEventListener("stepchange", (e)=>this.handleStepStateChange(e));
        });
    }
    connectedCallback() {
        super.connectedCallback(), this.stepIds = this.getStepIds(), y.enqueue(()=>{
            this.setComponent(), this.addListeners();
        });
    }
    disconnectedCallback() {
        super.connectedCallback(), this.removeListeners();
    }
}
e([
    ze({
        mode: "boolean"
    })
], fs.prototype, "ordered", void 0), e([
    ze({
        attribute: "current-index",
        converter: Re
    })
], fs.prototype, "currentIndex", void 0), e([
    ze({
        attribute: "aria-labelledby"
    })
], fs.prototype, "ariaLabelledby", void 0), e([
    ze({
        attribute: "aria-describedby"
    })
], fs.prototype, "ariaDescribedby", void 0), e([
    B
], fs.prototype, "activeid", void 0), e([
    B
], fs.prototype, "steps", void 0), e([
    B
], fs.prototype, "slottedsteps", void 0);
const gs = G`
  ${yt("block")}

  :host {
    background-color: ${go};
    box-sizing: border-box;
    padding: ${ao} ${oo};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9;
  }

  .list {
    display: flex;
    flex-direction: row;
  }

  :host(.overflow) .list {
    justify-content: flex-start;
    align-items: unset;
    overflow-x: auto;
    overflow-y: hidden;
    padding: ${ao} 0;
  }

  @media (min-width: 480px) {
    :host(.overflow),
    :host {
      padding: ${ao} ${oo};
      position: relative;
      height: 100%;
      max-width: 70px;
    }
    .list {
      flex-direction: column;
      max-width: 480px;
    }
    :host(.overflow) .list {
      width: fit-content;
      justify-content: unset;
      align-items: center;
      overflow-x: unset;
      overflow-y: unset;
      width: 24px;
      padding: 0;
    }
  }

  @media (min-width: 1023px) {
    :host(.overflow),
    :host {
      max-width: 268px;
      width: 268px;
      padding: ${ao} ${io}
        ${ao} ${oo};
    }
    :host(.overflow) .list {
      width: fit-content;
    }
  }
`;
const vs = Se`
    <template
      ?hidden="${(e)=>e.hidden}"
      ?ordered="${(e)=>e.ordered}"
      current-index="${(e)=>e.currentIndex}"
      aria-labelledby="${(e)=>e.ariaLabelledby}"
      aria-describedby="${(e)=>e.ariaDescribedby}"
      aria-label="${(e)=>e.ariaLabel}"
    >
      <slot name="start"></slot>
      <div class="list" part="list" role="list">
        <slot name="step" ${Fe("slottedsteps")}></slot>
      </div>
      <slot name="end"></slot>
    </template>
  `, ms = fs.compose({
    name: `${lt.prefix}-stepper`,
    template: vs,
    styles: gs,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
}), bs = [
    "base",
    "embed",
    "form",
    "frame",
    "iframe",
    "link",
    "meta",
    "object",
    "script",
    "style"
], ws = [
    "data",
    "formaction",
    "onclick",
    "onerror",
    "onload",
    "onmouseover",
    "src"
];
function ys(e) {
    const t = (new DOMParser).parseFromString(e, "image/svg+xml");
    if (!t.documentElement || "parsererror" === t.documentElement.nodeName) {
        const e = t.documentElement ? t.documentElement.textContent : "";
        return console.error("SVG parsing error", e), "";
    }
    return function(e, t, o) {
        var i;
        const s = Array.from(e.querySelectorAll("*"));
        for (const e of s){
            const s = e.tagName.toLowerCase();
            if (t.includes(s)) console.warn(`Custom SVG Sanitizer: Found and removed blocked tag: <${s}>`), null === (i = e.parentNode) || void 0 === i || i.removeChild(e);
            else for (const t of e.getAttributeNames())(o.includes(t.toLowerCase()) || /^on[a-z]+/.test(t.toLowerCase())) && (console.warn(`Custom SVG Sanitizer: Found and removed blocked attribute: ${t} from <${e.tagName.toLowerCase()}>`), e.removeAttribute(t));
        }
    }(t, bs, ws), (new XMLSerializer).serializeToString(t.documentElement);
}
class xs {
    static async loadIconOrSprite(e, t) {
        try {
            let o = await this.fetchAndCacheSVG(e);
            return o.includes("<symbol") ? this.getIconFromSprite(o, t) : o;
        } catch (t) {
            throw console.error(`Failed to load SVG from path ${e}:`, t), t;
        }
    }
    static async fetchAndCacheSVG(e) {
        if (!this.cache.has(e)) try {
            const t = fetch(e).then((e)=>{
                if (!e.ok) throw new Error(`Network error: ${e.status} ${e.statusText}`);
                return e.text();
            }).then((e)=>{
                if (!/<svg[\s\S]+<\/svg>/.test(e)) throw new Error("Invalid SVG format");
                return ys(e);
            });
            return this.cache.set(e, t), await t;
        } catch (t) {
            throw console.error(`Failed to fetch and cache SVG from path ${e}:`, t), t;
        }
        return await this.cache.get(e);
    }
    static getIconFromSprite(e, t) {
        const o = (new DOMParser).parseFromString(e, "image/svg+xml").querySelector(`symbol[id="${t}"]`);
        if (!o) return console.error(`Icon with ID ${t} not found in sprite.`), "";
        const i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg");
        return s.setAttribute("xmlns", i), s.setAttributeNS(null, "viewBox", o.getAttribute("viewBox") || ""), s.innerHTML = o.innerHTML, s.outerHTML;
    }
    static async getPreparedSVG(e, t) {
        try {
            const o = await this.loadIconOrSprite(e, t), i = this.parseSVG(o), s = i.querySelector("symbol");
            return s ? this.getSVGDetailsFromSymbol(s) : this.getSVGDetailsFromSVGElement(i);
        } catch (t) {
            throw console.error(`Failed to prepare SVG from path ${e}:`, t), t;
        }
    }
    static parseSVG(e) {
        return (new DOMParser).parseFromString(e, "image/svg+xml");
    }
    static getSVGDetailsFromSymbol(e) {
        const t = e.getAttribute("viewBox"), o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        for(o.setAttribute("viewBox", t || ""), o.setAttribute("xmlns", "http://www.w3.org/2000/svg"); e.firstChild;)o.appendChild(e.firstChild);
        const i = e.getAttribute("width") || void 0, s = e.getAttribute("height") || void 0;
        return {
            content: o.outerHTML,
            width: i,
            height: s
        };
    }
    static getSVGDetailsFromSVGElement(e) {
        const t = e.querySelector("svg");
        let o, i;
        return t && (o = t.getAttribute("width") || void 0, i = t.getAttribute("height") || void 0), {
            content: (null == t ? void 0 : t.outerHTML) || "",
            width: o,
            height: i
        };
    }
}
xs.cache = new Map;
const ks = null;
class Ss extends nt {
    constructor(){
        super(...arguments), this.isLoading = !0, this.isError = !1, this.name = "", this.size = "", this.path = "", this.ariaHidden = "true", this.ariaLabel = "", this.focusable = "false", this.role = ks, this.renderResolver = null, this.renderPromise = new Promise((e)=>{
            this.renderResolver = e;
        });
    }
    nameChanged() {
        this.checkAndResolveRenderPromise();
    }
    sizeChanged() {
        this.checkAndResolveRenderPromise();
    }
    pathChanged() {
        this.checkAndResolveRenderPromise();
    }
    connectedCallback() {
        super.connectedCallback(), this.renderPromise.then(()=>this.renderIcon());
    }
    checkAndResolveRenderPromise() {
        this.renderResolver && this.path && (!this.name || this.name && "" !== this.name) && (this.renderResolver(), this.renderResolver = null);
    }
    renderIcon() {
        this.isLoading = !0, xs.getPreparedSVG(this.path, this.name).then(({ content: e, width: t, height: o })=>{
            this.isLoading = !1, this.shadowRoot.innerHTML = e, this.updateComputedStylesheet(t, o);
            const i = this.shadowRoot.querySelector("svg");
            i && this.updateSvgAttributes(i);
        }).catch((e)=>{
            this.isLoading = !1, this.isError = !0, console.error(`Failed to load icon: ${this.path}`, e), this.renderErrorIcon();
        });
    }
    renderErrorIcon() {
        const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        e.setAttribute("width", "20"), e.setAttribute("height", "20"), e.setAttribute("viewBox", "0 0 20 20");
        const t = document.createElementNS("http://www.w3.org/2000/svg", "line");
        t.setAttribute("x1", "0"), t.setAttribute("y1", "0"), t.setAttribute("x2", "20"), t.setAttribute("y2", "20"), t.setAttribute("stroke", "red"), t.setAttribute("stroke-width", "2");
        const o = document.createElementNS("http://www.w3.org/2000/svg", "line");
        o.setAttribute("x1", "20"), o.setAttribute("y1", "0"), o.setAttribute("x2", "0"), o.setAttribute("y2", "20"), o.setAttribute("stroke", "red"), o.setAttribute("stroke-width", "2"), e.appendChild(t), e.appendChild(o), this.shadowRoot.innerHTML = "", this.shadowRoot.appendChild(e);
    }
    updateComputedStylesheet(e, t) {
        if (this.size) {
            const e = [
                "12",
                "16",
                "20",
                "24",
                "28",
                "32",
                "48"
            ].includes(this.size) ? this.size : "20";
            this.computedStylesheet = G`
        :host {
          --icon-height: ${e}px;
          --icon-width: ${e}px;
        }
      `;
        } else e && t && (this.computedStylesheet = G`
        :host {
          --icon-height: ${t}px;
          --icon-width: ${e}px;
        }
      `);
        this.computedStylesheet && this.$fastController.addStyles(this.computedStylesheet);
    }
    updateSvgAttributes(e) {
        void 0 !== this.name ? e.setAttribute("name", this.name) : e.removeAttribute("name"), void 0 !== this.size ? e.setAttribute("size", this.size) : e.removeAttribute("size"), this.ariaLabel ? e.setAttribute("aria-label", this.ariaLabel) : e.removeAttribute("aria-label"), e.setAttribute("aria-hidden", this.ariaHidden), e.setAttribute("focusable", this.focusable || "false"), this.role ? e.setAttribute("role", this.role) : e.removeAttribute("role");
    }
}
e([
    B,
    ze
], Ss.prototype, "name", void 0), e([
    B,
    ze
], Ss.prototype, "size", void 0), e([
    B,
    ze
], Ss.prototype, "path", void 0), e([
    ze({
        attribute: "aria-hidden"
    })
], Ss.prototype, "ariaHidden", void 0), e([
    ze({
        attribute: "aria-label"
    })
], Ss.prototype, "ariaLabel", void 0), e([
    ze
], Ss.prototype, "focusable", void 0), e([
    ze
], Ss.prototype, "role", void 0);
const Cs = G`
  ${yt("inline-flex")}

  :host,
  :host svg {
    height: var(--icon-height, 20px);
    width: var(--icon-width, 20px);
  }

  :host svg:not([role="img"]) {
    fill: currentcolor;
  }
`, Bs = Se`
  <template></template>
`, Ps = Ss.compose({
    name: `${lt.prefix}-svg-icon`,
    template: Bs,
    styles: Cs,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
class Es extends nt {
    constructor(){
        super(...arguments), this.target = "", this.disableTrapFocus = !1, this.isTrappingFocus = !1, this.trapFocus = !1, this.cleanAutoUpdate = null, this.show = ()=>{
            this.updatePosition(), this.cleanAutoUpdate = Ni(this.targetEl, this.currentEl, this.updatePosition), this.open = !0, this.trapFocus = !0, this.updateTrapFocus(!0);
        }, this.hide = (e = !1)=>{
            var t;
            this.open = !1, null === (t = this.currentEl) || void 0 === t || t.setAttribute("hidden", ""), e && this.$emit("dismiss");
        }, this.renderResolver = null, this.renderPromise = new Promise((e)=>{
            this.renderResolver = e;
        }), this.setElements = ()=>{
            var e;
            this.targetEl = document.getElementById(this.target), this.currentEl = this, this.arrowEl = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.getElementById("arrow");
        }, this.updatePosition = ()=>{
            this.setElements();
            const e = this.placement ? {
                placement: this.placement,
                middleware: [
                    si(10),
                    Vi({
                        element: this.arrowEl,
                        padding: 4
                    })
                ]
            } : {
                middleware: [
                    Oi({
                        autoAlignment: !0
                    }),
                    si(10),
                    Vi({
                        element: this.arrowEl,
                        padding: 4
                    })
                ]
            };
            this.targetEl && this.currentEl && Ri(this.targetEl, this.currentEl, e).then(({ x: e, y: t, placement: o, middlewareData: i })=>{
                var s;
                if (!(this.currentEl instanceof HTMLElement)) return;
                Object.assign(this.currentEl.style, {
                    left: `${e}px`,
                    top: `${t}px`
                });
                const { x: r, y: n } = null !== (s = i.arrow) && void 0 !== s ? s : {}, a = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                }[o.split("-")[0]];
                Object.assign(this.arrowEl.style, {
                    left: null != r ? `${r}px` : "",
                    top: null != n ? `${n}px` : "",
                    right: "",
                    bottom: "",
                    [a]: "-8px"
                });
            });
        }, this.handleDocumentKeydown = (e)=>{
            if (!e.defaultPrevented && this.open) switch(e.key){
                case ft:
                    this.handleTabKeyDown(e);
                    break;
                case ut:
                    this.hide(!0);
                    break;
                default:
                    return !0;
            }
        }, this.handleTabKeyDown = (e)=>{
            if (!this.trapFocus || !this.open) return;
            const t = this.getTabQueueBounds();
            if (1 === t.length) return t[0].focus(), void e.preventDefault();
            e.shiftKey && e.target === t[0] ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || e.target !== t[t.length - 1] || (t[0].focus(), e.preventDefault());
        }, this.getTabQueueBounds = ()=>Es.reduceTabbableItems([], this), this.updateTrapFocus = (e)=>{
            const t = void 0 === e ? this.shouldTrapFocus() : e;
            t && !this.isTrappingFocus ? (this.isTrappingFocus = !0, document.addEventListener("focusin", this.handleDocumentFocus), y.enqueue(()=>{
                this.shouldForceFocus(document.activeElement) && this.focusFirstElement();
            })) : !t && this.isTrappingFocus && (this.isTrappingFocus = !1, document.removeEventListener("focusin", this.handleDocumentFocus));
        }, this.handleDocumentFocus = (e)=>{
            !e.defaultPrevented && this.shouldForceFocus(e.target) && (this.focusFirstElement(), e.preventDefault());
        }, this.focusFirstElement = ()=>{
            const e = this.getTabQueueBounds(), t = document.getElementsByTagName("fabric-teaching-bubble");
            let o = 0;
            Array.from(t).forEach((e)=>{
                !0 === e.hasAttribute("open") && o++;
            }), o > 1 || (e.length > 0 ? e[0].focus() : this.currentEl instanceof HTMLElement && this.currentEl.focus());
        }, this.shouldForceFocus = (e)=>this.isTrappingFocus && !this.contains(e), this.shouldTrapFocus = ()=>this.trapFocus && this.open;
    }
    connectedCallback() {
        super.connectedCallback(), this.renderPromise.then(()=>{
            this.setElements(), this.initializePosition(), document.addEventListener("keydown", this.handleDocumentKeydown), y.enqueue(()=>{
                this.updateTrapFocus(), this.disableTrapFocusHandler();
            });
        }), this.renderResolver();
    }
    disconnectedCallback() {
        super.disconnectedCallback(), document.removeEventListener("keydown", this.handleDocumentKeydown), document.removeEventListener("focusin", this.handleDocumentFocus), this.updateTrapFocus(!1), this.cleanAutoUpdate && this.cleanAutoUpdate(), this.targetEl = null, this.currentEl = null, this.arrowEl = null;
    }
    openChanged() {
        this.initializePosition(), y.enqueue(()=>{
            this.updateTrapFocus(), this.disableTrapFocusHandler();
        }), this.$emit("openchange", this.open);
    }
    static reduceTabbableItems(e, t) {
        return "-1" === t.getAttribute("tabindex") ? e : Oo(t) || Es.isFocusableFastElement(t) && Es.hasTabbableShadow(t) ? (e.push(t), e) : Array.from(t.children).reduce((e, t)=>Es.reduceTabbableItems(e, t), e);
    }
    static isFocusableFastElement(e) {
        var t, o;
        return !!(null === (o = null === (t = e.$fastController) || void 0 === t ? void 0 : t.definition.shadowOptions) || void 0 === o ? void 0 : o.delegatesFocus);
    }
    static hasTabbableShadow(e) {
        var t, o;
        return Array.from(null !== (o = null === (t = e.shadowRoot) || void 0 === t ? void 0 : t.querySelectorAll("*")) && void 0 !== o ? o : []).some((e)=>Oo(e));
    }
    disableTrapFocusHandler() {
        this.disableTrapFocus ? this.trapFocus = !1 : this.trapFocus = !0;
    }
    initializePosition() {
        this.open && this.targetEl && this.currentEl && this.arrowEl && this.show(), this.open || this.hide();
    }
}
e([
    ze({
        mode: "fromView"
    })
], Es.prototype, "target", void 0), e([
    ze({
        mode: "fromView"
    })
], Es.prototype, "placement", void 0), e([
    ze({
        mode: "boolean"
    })
], Es.prototype, "open", void 0), e([
    ze({
        mode: "boolean",
        attribute: "disable-trap-focus"
    })
], Es.prototype, "disableTrapFocus", void 0), e([
    ze({
        mode: "fromView"
    })
], Es.prototype, "size", void 0), e([
    B
], Es.prototype, "targetEl", void 0), e([
    B
], Es.prototype, "currentEl", void 0), e([
    B
], Es.prototype, "arrowEl", void 0), e([
    B
], Es.prototype, "isTrappingFocus", void 0), e([
    B
], Es.prototype, "trapFocus", void 0), e([
    B
], Es.prototype, "cleanAutoUpdate", void 0);
const As = G`
  :host {
    position: absolute;
    border: 1px solid ${vo};
    border-radius: ${Ht};
    background-color: ${vo};
    color: ${po};
    padding: ${to};
    box-shadow: ${Co};
    max-width: 288px;
  }

  ::slotted(*) {
    font-family: ${Xt};
    font-size: unset;
    font-weight: ${Yt};
    line-height: ${Kt};
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  :host([size="small"]) ::slotted(*) {
    font-size: ${_t};
  }

  :host([size="medium"]) ::slotted(*) {
    font-size: ${jt};
  }

  :host([size="large"]) ::slotted(*) {
    font-size: ${Gt};
  }

  :host[hidden] {
    ${yt("none")}
  }

  slot[name="close"]::slotted(*) {
    position: absolute;
    top: 0;
    right: 0;
  }

  .content {
    position: relative;
  }

  .heading {
    margin-bottom: ${Jt};
  }

  .footer {
  }

  .arrow {
    position: absolute;
    background: ${vo};
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    border-radius: ${zt};
  }

  slot[name="image"]::slotted(*) {
    display: block;
    margin-bottom: ${eo};
    width: 100%;
    height: 100%;
  }

  slot[name="heading"]::slotted(*) {
    font-weight: ${Qt};
    line-height: ${Ut};
  }

  :host([size="small"]) slot[name="heading"]::slotted(*) {
    font-size: ${jt};
  }

  :host([size="medium"]) slot[name="heading"]::slotted(*) {
    font-size: ${Gt};
  }

  :host([size="large"]) slot[name="heading"]::slotted(*) {
    font-size: ${Wt};
  }

  slot[name="footer"]::slotted(*) {
    line-height: ${qt};
    margin-top: ${eo};
    padding-top: ${eo};
  }
`;
const Ts = Se`
    <template
      size="${(e)=>e.size}"
      target="${(e)=>e.target}"
      ?hidden="${(e)=>!e.open}"
      placement="${(e)=>e.placement}"
      role="dialog"
      ?disable-trap-focus="${(e)=>e.disableTrapFocus}"
    >
      <div class="image" part="image">
        <slot name="image"></slot>
      </div>
      <div class="content" part="content">
        <div class="close" part="close"><slot name="close"></slot></div>
        <div class="heading" part="heading">
          <slot name="heading"></slot>
        </div>
        <slot></slot>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <div id="arrow" class="arrow" part="arrow"></div>
    </template>
  `, $s = Es.compose({
    name: `${lt.prefix}-teaching-bubble`,
    template: Ts,
    styles: As,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
}), Is = {
    small: "small",
    medium: "medium",
    large: "large"
}, Fs = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    topStart: "top-start",
    topEnd: "top-end",
    bottomStart: "bottom-start",
    bottomEnd: "bottom-end",
    leftStart: "left-start",
    leftEnd: "left-end",
    rightStart: "right-start",
    rightEnd: "right-end"
};
class Ls extends as {
    keydownHandler(e) {
        if (e.key === ht) this.disabled ? (e.preventDefault(), e.stopImmediatePropagation()) : (this.active, this.active);
    }
}
const Ms = G`
  ${ls}
  :host(:hover) {
    cursor: pointer;
  }
  :host([disabled]) {
    cursor: not-allowed;
  }
`, Ns = hs(), Os = Ls.compose({
    name: `${lt.prefix}-wizard-step`,
    template: Ns,
    styles: Ms,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
class Vs extends nt {
    constructor(){
        super(...arguments), this.ordered = !1, this.disableOnComplete = !1, this.currentIndex = 0, this.slottedsteps = [], this.slottedbuttons = [], this.slottedpanels = [], this.stepIds = [], this.panelIds = [], this.next = ()=>{
            this.currentIndex = this.slottedsteps.indexOf(this.activestep), this.focusNextStep(!0);
        }, this.previous = ()=>{
            this.currentIndex = this.slottedsteps.indexOf(this.activestep), this.focusPreviousStep(!0);
        }, this.focusNextStep = (e = !1)=>{
            const t = this.slottedsteps;
            let o = 0;
            for(o = this.currentIndex + 1; o < t.length && t.length > 1 && t[o].disabled;)o += 1;
            for(o === t.length && (o = 0); o < t.length && t.length > 1;){
                if (this.isFocusableElement(t[o]) && !this.isDisabledElement(t[o])) {
                    this.moveToStepByIndex(o);
                    break;
                }
                if (this.activestep && o === t.indexOf(this.activestep)) break;
                o + 1 >= t.length ? o = 0 : o += 1;
            }
            e && !this.isDisabledElement(t[o]) && this.setActiveStep(this.slottedsteps[o]);
        }, this.focusPreviousStep = (e = !1)=>{
            const t = this.slottedsteps;
            let o = 0;
            for(o = this.currentIndex - 1, o = o < 0 ? t.length - 1 : o; o < t.length && t.length > 1 && t[o].disabled;)o -= 1;
            for(; o >= 0 && t.length > 1;){
                if (this.isFocusableElement(t[o]) && !this.isDisabledElement(t[o])) {
                    this.moveToStepByIndex(o);
                    break;
                }
                o - 1 < 0 ? o = t.length - 1 : o -= 1;
            }
            e && !this.isDisabledElement(t[o]) && this.setActiveStep(this.slottedsteps[o]);
        }, this.moveToStepByIndex = (e)=>{
            const t = this.slottedsteps[e];
            this.currentIndex = e, t.focus(), this.setComponent();
        }, this.handleStepContainerKeydown = (e)=>{
            var t;
            const o = null !== (t = this.slottedsteps.findIndex((e)=>e.active)) && void 0 !== t ? t : 0;
            switch(e.key){
                case ht:
                    e.preventDefault(), document.activeElement === this && -1 !== o && (this.currentIndex = o, this.slottedsteps[o].focus());
                    break;
                case ft:
                    e.stopPropagation(), e.preventDefault(), this.slottedbuttons[0].focus(), this.slottedsteps[o].tabIndex = -1;
            }
        }, this.handleStepKeyDown = (e)=>{
            switch(e.key){
                case ft:
                    if (e.stopPropagation(), e.preventDefault(), e.shiftKey) this.stepcontainer.focus();
                    else {
                        const e = this.slottedsteps.findIndex((e)=>e.active);
                        this.slottedsteps[e].tabIndex = -1, this.slottedbuttons[0].focus();
                    }
                    break;
                case ut:
                    e.preventDefault(), this.stepcontainer.focus();
                    break;
                case ht:
                    e.preventDefault(), this.handleStepSelect(e);
                    break;
                case ct:
                    e.preventDefault(), this.focusPreviousStep();
                    break;
                case dt:
                    e.preventDefault(), this.focusNextStep();
                    break;
                case pt:
                    e.preventDefault(), this.moveToStepByIndex(-this.currentIndex);
                    break;
                case "End":
                    e.preventDefault(), this.moveToStepByIndex(this.slottedsteps.length - this.currentIndex - 1);
            }
        }, this.setSteps = ()=>{
            -1 === this.currentIndex ? this.getActiveIndex() : this.currentIndex, this.slottedsteps.forEach((e, t)=>{
                if ("step" === e.slot) {
                    const o = e, i = this.currentIndex === t && this.isFocusableElement(o), s = this.stepIds[t];
                    o.setAttribute("id", s), o.setAttribute("tabindex", i ? "0" : "-1"), o.setAttribute("role", "tab"), o.active = i, o.index = t, this.ordered && (o.ordered = !0), i && (this.activestep = o, this.activeid = s, this.currentIndex = t), t === this.slottedsteps.length - 1 && (o.hideConnector = !0), this.slottedsteps.length >= 7 && o.classList.add("overflow");
                }
            }), this.slottedsteps.every((e)=>"complete" === e.state) && this.emitComplete(), this.slottedsteps.length >= 7 && this.setAttribute("class", "overflow"), this.setPanels();
        }, this.setPanels = ()=>{
            this.slottedpanels.forEach((e, t)=>{
                if ("panel" === e.slot) {
                    const o = e, i = this.stepIds[t], s = this.panelIds[t];
                    o.setAttribute("id", s), o.setAttribute("aria-labelledby", i), o.setAttribute("role", "tabpanel"), o.index = t;
                    const r = this.currentIndex === t && this.isFocusableElement(o);
                    o.active = r, this.currentIndex !== t ? o.hide() : o.show();
                }
            }), this.emitChange();
        }, this.isDisabledElement = (e)=>"true" === e.getAttribute("aria-disabled"), this.isHiddenElement = (e)=>e.hasAttribute("hidden"), this.isFocusableElement = (e)=>!this.isDisabledElement(e) && !this.isHiddenElement(e), this.handleStepSelect = (e)=>{
            const t = e.currentTarget;
            t.disabled || this.setActiveStep(t);
        }, this.emitChange = ()=>{
            this.$emit("wizardchange", {
                currentIndex: this.currentIndex,
                activeid: this.activeid
            });
        }, this.emitComplete = ()=>{
            this.dispatchEvent(new CustomEvent("wizardcomplete", {
                bubbles: !0
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback(), y.enqueue(()=>{
            this.stepIds = this.getStepIds(), this.panelIds = this.getPanelIds(), this.currentIndex = this.getActiveIndex(), this.addListeners();
        });
    }
    disconnectedCallback() {
        super.connectedCallback(), this.removeListeners();
    }
    activeidChanged(e, t) {
        this.$fastController.isConnected && (this.prevActiveStepIndex = this.slottedsteps.findIndex((t)=>t.id === e), this.setSteps());
    }
    slottedpanelsChanged() {
        this.$fastController.isConnected && (this.panelIds = this.getPanelIds(), this.setSteps());
    }
    slottedstepsChanged() {
        this.$fastController.isConnected && (this.stepIds = this.getStepIds(), this.setSteps());
    }
    currentIndexChanged(e, t) {
        e !== t && y.enqueue(()=>{
            this.prevActiveStepIndex = e, this.stepIds = this.getStepIds(), this.panelIds = this.getPanelIds(), this.setComponent();
        });
    }
    show() {
        this.hidden = !1;
    }
    hide() {
        this.hidden = !0;
    }
    enableStep(e) {
        this.currentIndex >= 0 && this.slottedsteps.length > 0 && (this.slottedsteps[null != e ? e : this.currentIndex].disabled = !1);
    }
    disableStep(e) {
        this.currentIndex >= 0 && this.slottedsteps.length > 0 && (this.slottedsteps[null != e ? e : this.currentIndex].disabled = !0);
    }
    errorStep(e) {
        this.currentIndex >= 0 && this.slottedsteps.length > 0 && (this.slottedsteps[null != e ? e : this.currentIndex].state = ns.error);
    }
    completeStep(e) {
        this.currentIndex >= 0 && this.slottedsteps.length > 0 && (this.slottedsteps[null != e ? e : this.currentIndex].state = ns.complete, this.disableOnComplete && this.disableStep(e));
    }
    incompleteStep(e) {
        this.currentIndex >= 0 && this.slottedsteps.length > 0 && (this.slottedsteps[null != e ? e : this.currentIndex].state = ns.incomplete);
    }
    getStepStatus() {
        const e = [];
        return this.slottedsteps.length > 0 && this.slottedsteps.forEach((t, o)=>{
            e.push({
                id: t.id,
                state: t.state,
                index: o,
                active: t.active
            });
        }), e;
    }
    reset() {
        this.slottedsteps.length > 0 && (this.slottedsteps.forEach((e, t)=>{
            e.state = ns.incomplete;
        }), this.stepIds = this.getStepIds(), this.panelIds = this.getPanelIds(), this.currentIndex = 0, this.activeid = void 0, this.prevActiveStepIndex = -1);
    }
    setActiveStep(e) {
        var t;
        const o = e.index;
        null !== (t = e.disabled) && void 0 !== t && t || (e.active = !0, this.activestep = e, this.activeid = this.stepIds[o], this.currentIndex = o, this.setComponent());
    }
    addListeners() {
        this.slottedsteps.forEach((e)=>{
            e.addEventListener("stepchange", (e)=>this.handleWizardStepStateChange(e));
        }), this.slottedsteps.forEach((e)=>{
            e.addEventListener("click", (e)=>this.handleStepSelect(e));
        }), this.slottedsteps.forEach((e)=>{
            e.addEventListener("keydown", (e)=>this.handleStepKeyDown(e));
        }), this.slottedpanels.forEach((e)=>{
            e.addEventListener("panelchange", (e)=>this.handlePanelStateChange(e));
        });
    }
    removeListeners() {
        this.slottedsteps.forEach((e)=>{
            e.removeEventListener("stepchange", (e)=>this.handleWizardStepStateChange(e));
        }), this.slottedsteps.forEach((e)=>{
            e.removeEventListener("click", (e)=>this.handleStepSelect(e));
        }), this.slottedsteps.forEach((e)=>{
            e.removeEventListener("keydown", (e)=>this.handleStepKeyDown(e));
        }), this.slottedpanels.forEach((e)=>{
            e.removeEventListener("panelchange", (e)=>this.handlePanelStateChange(e));
        });
    }
    setComponent() {
        this.currentIndex && this.currentIndex !== this.prevActiveStepIndex && y.enqueue(()=>{
            this.stepIds = this.getStepIds(), this.panelIds = this.getPanelIds();
        });
    }
    getActiveIndex() {
        var e;
        const t = null !== (e = this.activeid) && void 0 !== e ? e : "";
        return void 0 !== t ? -1 === this.stepIds.indexOf(t) ? 0 : this.stepIds.indexOf(t) : 0;
    }
    getStepIds() {
        return this.slottedsteps.map((e)=>{
            var t;
            return null !== (t = e.getAttribute("id")) && void 0 !== t ? t : `fabric-wizard-step-${parseInt(vt())}`;
        });
    }
    getPanelIds() {
        return this.slottedpanels.map((e)=>{
            var t;
            return null !== (t = e.getAttribute("id")) && void 0 !== t ? t : `fabric-wizard-panel-${parseInt(vt())}`;
        });
    }
    handleWizardStepStateChange(e) {
        const t = e.detail.index;
        e.detail.active && (this.currentIndex = t), this.slottedpanels[t].state = e.detail.state, this.setSteps();
    }
    handlePanelStateChange(e) {
        const t = e.detail.index;
        e.detail.active && (this.currentIndex = t), this.slottedsteps[t].state = e.detail.state, this.setSteps();
    }
}
e([
    ze({
        mode: "boolean"
    })
], Vs.prototype, "ordered", void 0), e([
    ze({
        mode: "boolean",
        attribute: "disable-on-complete"
    })
], Vs.prototype, "disableOnComplete", void 0), e([
    ze({
        attribute: "current-index",
        converter: Re
    })
], Vs.prototype, "currentIndex", void 0), e([
    ze({
        attribute: "aria-labelledby"
    })
], Vs.prototype, "ariaLabelledby", void 0), e([
    ze({
        attribute: "aria-describedby"
    })
], Vs.prototype, "ariaDescribedby", void 0), e([
    B
], Vs.prototype, "stepcontainer", void 0), e([
    B
], Vs.prototype, "panelcontainer", void 0), e([
    B
], Vs.prototype, "slottedsteps", void 0), e([
    B
], Vs.prototype, "slottedbuttons", void 0), e([
    B
], Vs.prototype, "slottedpanels", void 0), e([
    B
], Vs.prototype, "activeid", void 0);
const Rs = G`
  ${yt("block")}

  :host {
    height: 100%;
    width: 100%;
    padding-top: 70px;
  }

  :host(.overflow) .steps {
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    padding: ${ao} ${oo};
  }

  .steps {
    background-color: ${go};
    box-sizing: border-box;
    padding: ${ao} ${oo};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9;
    display: flex;
    flex-direction: row;
  }

  .wizard {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    color: ${co};
  }

  .panels-container {
    background: ${fo};
  }

  .button-container {
    display: flex;
    gap: ${eo};
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    padding: ${ao} ${oo} 0;
  }

  @media (min-width: 480px) {
    :host {
      padding-top: 0;
    }
    .panels-container {
      width: 100%;
    }
    .wizard {
      flex-direction: row;
    }
    :host(.overflow) .steps,
    .steps {
      padding: ${ao} ${oo};
      position: relative;
      max-width: 70px;
    }
    .steps {
      flex-direction: column;
    }
    :host(.overflow) .steps {
      width: fit-content;
      justify-content: flex-start;
      align-items: center;
      overflow-x: unset;
      overflow-y: unset;
      width: 24px;
    }
  }

  @media (min-width: 1023px) {
    :host(.overflow) .steps,
    .steps {
      max-width: 268px;
      width: 268px;
      padding: ${ao} ${io}
        ${ao} ${oo};
    }
    :host(.overflow) .steps {
      width: fit-content;
    }
  }
`;
const Ds = Se`
    <template
      ?hidden="${(e)=>e.hidden}"
      ?ordered="${(e)=>e.ordered}"
      current-index="${(e)=>e.currentIndex}"
      aria-hidden="${(e)=>e.hidden ? "true" : "false"}"
    >
      <div class="wizard" part="wizard">
        ${wt({})}
        <div
          role="tablist"
          class="steps"
          part="steps"
          tabindex="0"
          @keydown="${(e, t)=>e.handleStepContainerKeydown(t.event)}"
          ${Be("stepcontainer")}
        >
          <slot name="step" ${Fe("slottedsteps")}></slot>
        </div>
        <div
          class="panels-container"
          part="panels-container"
          ${Be("panelcontainer")}
        >
          <div class="toolbar" part="toolbar">
            <div class="title" part="title"><slot name="title"></slot></div>
            <div class="button-container" part="button-container">
              <slot name="button" ${Fe("slottedbuttons")}></slot>
            </div>
          </div>
          <div class="panels" part="panels">
            <slot name="panel" ${Fe("slottedpanels")}></slot>
          </div>
          ${bt({})}
        </div>
      </div>
    </template>
  `, zs = Vs.compose({
    name: `${lt.prefix}-wizard`,
    template: Ds,
    styles: Rs,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});
class Hs extends nt {
    constructor(){
        super(...arguments), this.hidden = !0, this.state = ns.incomplete, this.active = !1;
    }
    stateChanged(e, t) {
        e !== t && this.emitChange();
    }
    activeChanged(e, t) {
        e !== t && (t ? this.show() : this.hide(), this.emitChange());
    }
    hiddenChanged(e, t) {
        e !== t && this.emitChange();
    }
    show() {
        this.hidden = !1;
    }
    hide() {
        this.hidden = !0;
    }
    emitChange() {
        this.$emit("panelchange", {
            id: this.id,
            state: this.state,
            active: this.active,
            index: this.index
        });
    }
}
e([
    B
], Hs.prototype, "index", void 0), e([
    ze({
        mode: "boolean"
    })
], Hs.prototype, "hidden", void 0), e([
    ze
], Hs.prototype, "state", void 0), e([
    ze({
        mode: "boolean"
    })
], Hs.prototype, "active", void 0);
const _s = G`
  ${yt("block")}
  :host {
    height: 100%;
    background: ${fo};
  }

  :host([active]) {
    display: block;
  }

  .content {
    padding: ${ao} ${oo} 0;
  }

  .title {
    padding: 0 ${oo} ${ro};
    color: ${lo};
  }
  .footer {
    padding: ${no} ${oo};
    border-top: 1px solid ${mo};
  }
`;
const js = Se`
    <template
      aria-hidden="${(e)=>e.hidden}"
      state="${(e)=>e.state}"
      ?active="${(e)=>e.active}"
    >
      <slot name="start"></slot>
      <div class="title" part="title">
        <slot name="title"></slot>
      </div>
      <div class="content" part="content"><slot></slot></div>
      <div class="footer" part="footer"><slot name="footer"></slot></div>
      <slot name="end"></slot>
    </template>
  `, Gs = Hs.compose({
    name: `${lt.prefix}-wizard-panel`,
    template: js,
    styles: _s,
    shadowOptions: {
        mode: lt.shadowRootMode
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire251c")

//# sourceMappingURL=index.0641b553.js.map
