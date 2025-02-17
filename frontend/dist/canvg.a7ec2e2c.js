// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3IlGP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6f45661df2902a172e7e468ca7ec2e2c"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
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
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"0m6YS":[function(require,module,exports) {
var process = require("process");
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var _startsWithInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/starts-with');
var _parseFloat = require('@babel/runtime-corejs3/core-js-stable/parse-float');
var _mapInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/map');
var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var _Object$defineProperties = require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
var _Object$getOwnPropertyDescriptors = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
var _forEachInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
var _Object$getOwnPropertyDescriptor = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Object$getOwnPropertySymbols = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
var _Object$keys = require('@babel/runtime-corejs3/core-js-stable/object/keys');
var _regeneratorRuntime = require('@babel/runtime-corejs3/regenerator');
var _asyncToGenerator = require('@babel/runtime-corejs3/helpers/asyncToGenerator');
var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _classCallCheck = require('@babel/runtime-corejs3/helpers/classCallCheck');
var _createClass = require('@babel/runtime-corejs3/helpers/createClass');
var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _reduceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/reduce');
var _Date$now = require('@babel/runtime-corejs3/core-js-stable/date/now');
var _everyInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/every');
var _Promise = require('@babel/runtime-corejs3/core-js-stable/promise');
var _bindInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/bind');
var requestAnimationFrame = require('raf');
var _trimInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/trim');
var RGBColor = require('rgbcolor');
var _Reflect$construct = require('@babel/runtime-corejs3/core-js-stable/reflect/construct');
var _inherits = require('@babel/runtime-corejs3/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime-corejs3/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime-corejs3/helpers/getPrototypeOf');
var _toConsumableArray = require('@babel/runtime-corejs3/helpers/toConsumableArray');
var _someInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/some');
var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/includes');
var _Array$from = require('@babel/runtime-corejs3/core-js-stable/array/from');
var _reverseInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/reverse');
var _indexOfInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/index-of');
var _get = require('@babel/runtime-corejs3/helpers/get');
var _fillInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/fill');
var svgPathdata = require('svg-pathdata');
var _Reflect$deleteProperty = require('@babel/runtime-corejs3/core-js-stable/reflect/delete-property');
var _assertThisInitialized = require('@babel/runtime-corejs3/helpers/assertThisInitialized');
var _valuesInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/values');
var _parseInt = require('@babel/runtime-corejs3/core-js-stable/parse-int');
var _getIterator = require('@babel/runtime-corejs3/core-js/get-iterator');
var _Array$isArray = require('@babel/runtime-corejs3/core-js-stable/array/is-array');
var _getIteratorMethod = require('@babel/runtime-corejs3/core-js/get-iterator-method');
var _Symbol = require('@babel/runtime-corejs3/core-js-stable/symbol');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/slice');
var _Map = require('@babel/runtime-corejs3/core-js-stable/map');
var _Reflect$apply = require('@babel/runtime-corejs3/core-js-stable/reflect/apply');
var _Reflect$getPrototypeOf = require('@babel/runtime-corejs3/core-js-stable/reflect/get-prototype-of');
var stackblurCanvas = require('stackblur-canvas');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var _startsWithInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_startsWithInstanceProperty);
var _parseFloat__default = /*#__PURE__*/ _interopDefaultLegacy(_parseFloat);
var _mapInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_mapInstanceProperty);
var _slicedToArray__default = /*#__PURE__*/ _interopDefaultLegacy(_slicedToArray);
var _Object$defineProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$defineProperty);
var _Object$defineProperties__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$defineProperties);
var _Object$getOwnPropertyDescriptors__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$getOwnPropertyDescriptors);
var _forEachInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_forEachInstanceProperty);
var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
var _filterInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_filterInstanceProperty);
var _Object$getOwnPropertySymbols__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$getOwnPropertySymbols);
var _Object$keys__default = /*#__PURE__*/ _interopDefaultLegacy(_Object$keys);
var _regeneratorRuntime__default = /*#__PURE__*/ _interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/ _interopDefaultLegacy(_asyncToGenerator);
var _defineProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_defineProperty);
var _classCallCheck__default = /*#__PURE__*/ _interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/ _interopDefaultLegacy(_createClass);
var _concatInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_concatInstanceProperty);
var _reduceInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_reduceInstanceProperty);
var _Date$now__default = /*#__PURE__*/ _interopDefaultLegacy(_Date$now);
var _everyInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_everyInstanceProperty);
var _Promise__default = /*#__PURE__*/ _interopDefaultLegacy(_Promise);
var _bindInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_bindInstanceProperty);
var requestAnimationFrame__default = /*#__PURE__*/ _interopDefaultLegacy(requestAnimationFrame);
var _trimInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_trimInstanceProperty);
var RGBColor__default = /*#__PURE__*/ _interopDefaultLegacy(RGBColor);
var _Reflect$construct__default = /*#__PURE__*/ _interopDefaultLegacy(_Reflect$construct);
var _inherits__default = /*#__PURE__*/ _interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/ _interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/ _interopDefaultLegacy(_getPrototypeOf);
var _toConsumableArray__default = /*#__PURE__*/ _interopDefaultLegacy(_toConsumableArray);
var _someInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_someInstanceProperty);
var _includesInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_includesInstanceProperty);
var _Array$from__default = /*#__PURE__*/ _interopDefaultLegacy(_Array$from);
var _reverseInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_reverseInstanceProperty);
var _indexOfInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_indexOfInstanceProperty);
var _get__default = /*#__PURE__*/ _interopDefaultLegacy(_get);
var _fillInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_fillInstanceProperty);
var _Reflect$deleteProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_Reflect$deleteProperty);
var _assertThisInitialized__default = /*#__PURE__*/ _interopDefaultLegacy(_assertThisInitialized);
var _valuesInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_valuesInstanceProperty);
var _parseInt__default = /*#__PURE__*/ _interopDefaultLegacy(_parseInt);
var _getIterator__default = /*#__PURE__*/ _interopDefaultLegacy(_getIterator);
var _Array$isArray__default = /*#__PURE__*/ _interopDefaultLegacy(_Array$isArray);
var _getIteratorMethod__default = /*#__PURE__*/ _interopDefaultLegacy(_getIteratorMethod);
var _Symbol__default = /*#__PURE__*/ _interopDefaultLegacy(_Symbol);
var _sliceInstanceProperty__default = /*#__PURE__*/ _interopDefaultLegacy(_sliceInstanceProperty);
var _Map__default = /*#__PURE__*/ _interopDefaultLegacy(_Map);
var _Reflect$apply__default = /*#__PURE__*/ _interopDefaultLegacy(_Reflect$apply);
var _Reflect$getPrototypeOf__default = /*#__PURE__*/ _interopDefaultLegacy(_Reflect$getPrototypeOf);
/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 */ function compressSpaces(str) {
    return str.replace(/(?!\u3000)\s+/gm, ' ');
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 */ function trimLeft(str) {
    return str.replace(/^[\n \t]+/, '');
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 */ function trimRight(str) {
    return str.replace(/[\n \t]+$/, '');
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 */ function toNumbers(str) {
    var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
    return _mapInstanceProperty__default['default'](matches).call(matches, _parseFloat__default['default']);
} // Microsoft Edge fix
var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 */ function normalizeAttributeName(name) {
    if (allUppercase.test(name)) return name.toLowerCase();
    return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 */ function parseExternalUrl(url) {
    //                                   single quotes [2]
    //                                   v           double quotes [3]
    //                                   v           v        no quotes [4]
    //                                   v           v        v
    var urlMatch = url.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
    return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 */ function normalizeColor(color) {
    if (!_startsWithInstanceProperty__default['default'](color).call(color, 'rgb')) return color;
    var rgbParts = 3;
    var normalizedColor = color.replace(/\d+(\.\d+)?/g, function(num, isFloat) {
        return (rgbParts--) && isFloat ? String(Math.round(_parseFloat__default['default'](num))) : num;
    });
    return normalizedColor;
}
// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s\+>~\.\[:]+)/g;
var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
var elementRegex = /([^\s\+>~\.\[:]+)/g;
function findSelectorMatch(selector, regex) {
    var matches = selector.match(regex);
    if (!matches) return [
        selector,
        0
    ];
    return [
        selector.replace(regex, ' '),
        matches.length
    ];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 */ function getSelectorSpecificity(selector) {
    var specificity = [
        0,
        0,
        0
    ];
    var currentSelector = selector.replace(/:not\(([^\)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
    var delta = 0;
    var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);
    var _findSelectorMatch2 = _slicedToArray__default['default'](_findSelectorMatch, 2);
    currentSelector = _findSelectorMatch2[0];
    delta = _findSelectorMatch2[1];
    specificity[1] += delta;
    var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);
    var _findSelectorMatch4 = _slicedToArray__default['default'](_findSelectorMatch3, 2);
    currentSelector = _findSelectorMatch4[0];
    delta = _findSelectorMatch4[1];
    specificity[0] += delta;
    var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);
    var _findSelectorMatch6 = _slicedToArray__default['default'](_findSelectorMatch5, 2);
    currentSelector = _findSelectorMatch6[0];
    delta = _findSelectorMatch6[1];
    specificity[1] += delta;
    var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);
    var _findSelectorMatch8 = _slicedToArray__default['default'](_findSelectorMatch7, 2);
    currentSelector = _findSelectorMatch8[0];
    delta = _findSelectorMatch8[1];
    specificity[2] += delta;
    var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
    var _findSelectorMatch10 = _slicedToArray__default['default'](_findSelectorMatch9, 2);
    currentSelector = _findSelectorMatch10[0];
    delta = _findSelectorMatch10[1];
    specificity[1] += delta;
    var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);
    var _findSelectorMatch12 = _slicedToArray__default['default'](_findSelectorMatch11, 2);
    currentSelector = _findSelectorMatch12[0];
    delta = _findSelectorMatch12[1];
    specificity[1] += delta;
    currentSelector = currentSelector.replace(/[\*\s\+>~]/g, ' ').replace(/[#\.]/g, ' ');
    var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);
    var _findSelectorMatch14 = _slicedToArray__default['default'](_findSelectorMatch13, 2);
    currentSelector = _findSelectorMatch14[0];
    delta = _findSelectorMatch14[1];
    // lgtm [js/useless-assignment-to-local]
    specificity[2] += delta;
    return specificity.join('');
}
var PSEUDO_ZERO = 0.00000001;
/**
 * Vector magnitude.
 */ function vectorMagnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 */ function vectorsRatio(u, v) {
    return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 */ function vectorsAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
    return t * t * t;
}
function CB2(t) {
    return 3 * t * t * (1 - t);
}
function CB3(t) {
    return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
    return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
    return t * t;
}
function QB2(t) {
    return 2 * t * (1 - t);
}
function QB3(t) {
    return (1 - t) * (1 - t);
}
var Property = /*#__PURE__*/ function() {
    function Property1(document, name, value) {
        _classCallCheck__default['default'](this, Property1);
        this.document = document;
        this.name = name;
        this.value = value;
        this.isNormalizedColor = false;
    }
    _createClass__default['default'](Property1, [
        {
            key: "split",
            value: function split() {
                var _context, _context2;
                var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
                var document = this.document, name = this.name;
                return _mapInstanceProperty__default['default'](_context = _trimInstanceProperty__default['default'](_context2 = compressSpaces(this.getString())).call(_context2).split(separator)).call(_context, function(value) {
                    return new Property1(document, name, value);
                });
            }
        },
        {
            key: "hasValue",
            value: function hasValue(zeroIsValue) {
                var value = this.value;
                return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
            }
        },
        {
            key: "isString",
            value: function isString(regexp) {
                var value = this.value;
                var result = typeof value === 'string';
                if (!result || !regexp) return result;
                return regexp.test(value);
            }
        },
        {
            key: "isUrlDefinition",
            value: function isUrlDefinition() {
                return this.isString(/^url\(/);
            }
        },
        {
            key: "isPixels",
            value: function isPixels() {
                if (!this.hasValue()) return false;
                var asString = this.getString();
                return false;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
                return this;
            }
        },
        {
            key: "getValue",
            value: function getValue(def) {
                if (typeof def === 'undefined' || this.hasValue()) return this.value;
                return def;
            }
        },
        {
            key: "getNumber",
            value: function getNumber(def) {
                if (!this.hasValue()) {
                    if (typeof def === 'undefined') return 0;
                    return _parseFloat__default['default'](def);
                }
                var value = this.value;
                var n = _parseFloat__default['default'](value);
                if (this.isString(/%$/)) n = n / 100;
                return n;
            }
        },
        {
            key: "getString",
            value: function getString(def) {
                if (typeof def === 'undefined' || this.hasValue()) return typeof this.value === 'undefined' ? '' : String(this.value);
                return String(def);
            }
        },
        {
            key: "getColor",
            value: function getColor(def) {
                var color = this.getString(def);
                if (this.isNormalizedColor) return color;
                this.isNormalizedColor = true;
                color = normalizeColor(color);
                this.value = color;
                return color;
            }
        },
        {
            key: "getDpi",
            value: function getDpi() {
                return 96; // TODO: compute?
            }
        },
        {
            key: "getRem",
            value: function getRem() {
                return this.document.rootEmSize;
            }
        },
        {
            key: "getEm",
            value: function getEm() {
                return this.document.emSize;
            }
        },
        {
            key: "getUnits",
            value: function getUnits() {
                return this.getString().replace(/[0-9\.\-]/g, '');
            }
        },
        {
            key: "getPixels",
            value: function getPixels(axisOrIsFontSize) {
                var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!this.hasValue()) return 0;
                var _ref = typeof axisOrIsFontSize === 'boolean' ? [
                    undefined,
                    axisOrIsFontSize
                ] : [
                    axisOrIsFontSize
                ], _ref2 = _slicedToArray__default['default'](_ref, 2), axis = _ref2[0], isFontSize = _ref2[1];
                var viewPort = this.document.screen.viewPort;
                switch(true){
                    case this.isString(/vmin$/):
                        return this.getNumber() / 100 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));
                    case this.isString(/vmax$/):
                        return this.getNumber() / 100 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));
                    case this.isString(/vw$/):
                        return this.getNumber() / 100 * viewPort.computeSize('x');
                    case this.isString(/vh$/):
                        return this.getNumber() / 100 * viewPort.computeSize('y');
                    case this.isString(/rem$/):
                        return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                        return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                        return this.getNumber() * this.getEm() / 2;
                    case this.isString(/px$/):
                        return this.getNumber();
                    case this.isString(/pt$/):
                        return this.getNumber() * this.getDpi() * (1 / 72);
                    case this.isString(/pc$/):
                        return this.getNumber() * 15;
                    case this.isString(/cm$/):
                        return this.getNumber() * this.getDpi() / 2.54;
                    case this.isString(/mm$/):
                        return this.getNumber() * this.getDpi() / 25.4;
                    case this.isString(/in$/):
                        return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && isFontSize:
                        return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                        return this.getNumber() * viewPort.computeSize(axis);
                    default:
                        var n = this.getNumber();
                        if (processPercent && n < 1) return n * viewPort.computeSize(axis);
                        return n;
                }
            }
        },
        {
            key: "getMilliseconds",
            value: function getMilliseconds() {
                if (!this.hasValue()) return 0;
                if (this.isString(/ms$/)) return this.getNumber();
                return this.getNumber() * 1000;
            }
        },
        {
            key: "getRadians",
            value: function getRadians() {
                if (!this.hasValue()) return 0;
                return this.getNumber() * (Math.PI / 180);
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                var asString = this.getString();
                var name = asString.match(/#([^\)'"]+)/);
                if (name) name = name[1];
                if (!name) name = asString;
                return this.document.definitions[name];
            }
        },
        {
            key: "getFillStyleDefinition",
            value: function getFillStyleDefinition(element, opacity) {
                var def = this.getDefinition();
                if (!def) return null;
                 // gradient
                if (typeof def.createGradient === 'function') return def.createGradient(this.document.ctx, element, opacity);
                 // pattern
                if (typeof def.createPattern === 'function') {
                    if (def.getHrefAttribute().hasValue()) {
                        var patternTransform = def.getAttribute('patternTransform');
                        def = def.getHrefAttribute().getDefinition();
                        if (patternTransform.hasValue()) def.getAttribute('patternTransform', true).setValue(patternTransform.value);
                    }
                    return def.createPattern(this.document.ctx, element, opacity);
                }
                return null;
            }
        },
        {
            key: "getTextBaseline",
            value: function getTextBaseline() {
                if (!this.hasValue()) return null;
                return Property1.textBaselineMapping[this.getString()];
            }
        },
        {
            key: "addOpacity",
            value: function addOpacity(opacity) {
                var value = this.getColor();
                var len = value.length;
                var commas = 0; // Simulate old RGBColor version, which can't parse rgba.
                for(var i = 0; i < len; i++){
                    if (value[i] === ',') commas++;
                    if (commas === 3) break;
                }
                if (opacity.hasValue() && this.isString() && commas !== 3) {
                    var color = new RGBColor__default['default'](value);
                    if (color.ok) {
                        color.alpha = opacity.getNumber();
                        value = color.toRGBA();
                    }
                }
                return new Property1(this.document, this.name, value);
            }
        }
    ], [
        {
            key: "empty",
            value: function empty(document) {
                return new Property1(document, 'EMPTY', '');
            }
        }
    ]);
    return Property1;
}();
Property.textBaselineMapping = {
    'baseline': 'alphabetic',
    'before-edge': 'top',
    'text-before-edge': 'top',
    'middle': 'middle',
    'central': 'middle',
    'after-edge': 'bottom',
    'text-after-edge': 'bottom',
    'ideographic': 'ideographic',
    'alphabetic': 'alphabetic',
    'hanging': 'hanging',
    'mathematical': 'alphabetic'
};
var ViewPort = /*#__PURE__*/ function() {
    function ViewPort1() {
        _classCallCheck__default['default'](this, ViewPort1);
        this.viewPorts = [];
    }
    _createClass__default['default'](ViewPort1, [
        {
            key: "clear",
            value: function clear() {
                this.viewPorts = [];
            }
        },
        {
            key: "setCurrent",
            value: function setCurrent(width, height) {
                this.viewPorts.push({
                    width: width,
                    height: height
                });
            }
        },
        {
            key: "removeCurrent",
            value: function removeCurrent() {
                this.viewPorts.pop();
            }
        },
        {
            key: "getCurrent",
            value: function getCurrent() {
                var viewPorts = this.viewPorts;
                return viewPorts[viewPorts.length - 1];
            }
        },
        {
            key: "computeSize",
            value: function computeSize(d) {
                if (typeof d === 'number') return d;
                if (d === 'x') return this.width;
                if (d === 'y') return this.height;
                return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
            }
        },
        {
            key: "width",
            get: function get() {
                return this.getCurrent().width;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.getCurrent().height;
            }
        }
    ]);
    return ViewPort1;
}();
var Point = /*#__PURE__*/ function() {
    function Point1(x, y) {
        _classCallCheck__default['default'](this, Point1);
        this.x = x;
        this.y = y;
    }
    _createClass__default['default'](Point1, [
        {
            key: "angleTo",
            value: function angleTo(point) {
                return Math.atan2(point.y - this.y, point.x - this.x);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var x = this.x, y = this.y;
                var xp = x * transform[0] + y * transform[2] + transform[4];
                var yp = x * transform[1] + y * transform[3] + transform[5];
                this.x = xp;
                this.y = yp;
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(point) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var _toNumbers = toNumbers(point), _toNumbers2 = _slicedToArray__default['default'](_toNumbers, 2), _toNumbers2$ = _toNumbers2[0], x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$, _toNumbers2$2 = _toNumbers2[1], y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;
                return new Point1(x, y);
            }
        },
        {
            key: "parseScale",
            value: function parseScale(scale) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var _toNumbers3 = toNumbers(scale), _toNumbers4 = _slicedToArray__default['default'](_toNumbers3, 2), _toNumbers4$ = _toNumbers4[0], x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$, _toNumbers4$2 = _toNumbers4[1], y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;
                return new Point1(x, y);
            }
        },
        {
            key: "parsePath",
            value: function parsePath(path) {
                var points = toNumbers(path);
                var len = points.length;
                var pathPoints = [];
                for(var i = 0; i < len; i += 2)pathPoints.push(new Point1(points[i], points[i + 1]));
                return pathPoints;
            }
        }
    ]);
    return Point1;
}();
var Mouse = /*#__PURE__*/ function() {
    function Mouse1(screen) {
        var _context, _context2;
        _classCallCheck__default['default'](this, Mouse1);
        this.screen = screen;
        this.working = false;
        this.events = [];
        this.eventElements = [];
        this.onClick = _bindInstanceProperty__default['default'](_context = this.onClick).call(_context, this);
        this.onMouseMove = _bindInstanceProperty__default['default'](_context2 = this.onMouseMove).call(_context2, this);
    }
    _createClass__default['default'](Mouse1, [
        {
            key: "isWorking",
            value: function isWorking() {
                return this.working;
            }
        },
        {
            key: "start",
            value: function start() {
                if (this.working) return;
                var screen = this.screen, onClick = this.onClick, onMouseMove = this.onMouseMove;
                var canvas = screen.ctx.canvas;
                canvas.onclick = onClick;
                canvas.onmousemove = onMouseMove;
                this.working = true;
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (!this.working) return;
                var canvas = this.screen.ctx.canvas;
                this.working = false;
                canvas.onclick = null;
                canvas.onmousemove = null;
            }
        },
        {
            key: "hasEvents",
            value: function hasEvents() {
                return this.working && this.events.length > 0;
            }
        },
        {
            key: "runEvents",
            value: function runEvents() {
                if (!this.working) return;
                var document = this.screen, events = this.events, eventElements = this.eventElements;
                var style = document.ctx.canvas.style;
                if (style) style.cursor = '';
                _forEachInstanceProperty__default['default'](events).call(events, function(_ref, i) {
                    var run = _ref.run;
                    var element = eventElements[i];
                    while(element){
                        run(element);
                        element = element.parent;
                    }
                }); // done running, clear
                this.events = [];
                this.eventElements = [];
            }
        },
        {
            key: "checkPath",
            value: function checkPath(element, ctx) {
                if (!this.working || !ctx) return;
                var events = this.events, eventElements = this.eventElements;
                _forEachInstanceProperty__default['default'](events).call(events, function(_ref2, i) {
                    var x = _ref2.x, y = _ref2.y;
                    if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "checkBoundingBox",
            value: function checkBoundingBox(element, boundingBox) {
                if (!this.working || !boundingBox) return;
                var events = this.events, eventElements = this.eventElements;
                _forEachInstanceProperty__default['default'](events).call(events, function(_ref3, i) {
                    var x = _ref3.x, y = _ref3.y;
                    if (!eventElements[i] && boundingBox.isPointInBox(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "mapXY",
            value: function mapXY(x, y) {
                var _this$screen = this.screen, window = _this$screen.window, ctx = _this$screen.ctx;
                var point = new Point(x, y);
                var element = ctx.canvas;
                while(element){
                    point.x -= element.offsetLeft;
                    point.y -= element.offsetTop;
                    element = element.offsetParent;
                }
                if (window.scrollX) point.x += window.scrollX;
                if (window.scrollY) point.y += window.scrollY;
                return point;
            }
        },
        {
            key: "onClick",
            value: function onClick(evt) {
                var _this$mapXY = this.mapXY((evt || event).clientX, (evt || event).clientY), x = _this$mapXY.x, y = _this$mapXY.y;
                this.events.push({
                    type: 'onclick',
                    x: x,
                    y: y,
                    run: function run(event) {
                        if (event.onClick) event.onClick();
                    }
                });
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(evt) {
                var _this$mapXY2 = this.mapXY((evt || event).clientX, (evt || event).clientY), x = _this$mapXY2.x, y = _this$mapXY2.y;
                this.events.push({
                    type: 'onmousemove',
                    x: x,
                    y: y,
                    run: function run(event) {
                        if (event.onMouseMove) event.onMouseMove();
                    }
                });
            }
        }
    ]);
    return Mouse1;
}();
var defaultWindow = typeof window !== 'undefined' ? window : null;
var defaultFetch = typeof fetch !== 'undefined' ? _bindInstanceProperty__default['default'](fetch).call(fetch, void 0) : null;
var Screen1 = /*#__PURE__*/ function() {
    function Screen2(ctx) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        }, _ref$fetch = _ref.fetch, fetch = _ref$fetch === void 0 ? defaultFetch : _ref$fetch, _ref$window = _ref.window, window = _ref$window === void 0 ? defaultWindow : _ref$window;
        _classCallCheck__default['default'](this, Screen2);
        this.ctx = ctx;
        this.FRAMERATE = 30;
        this.MAX_VIRTUAL_PIXELS = 30000;
        this.CLIENT_WIDTH = 800;
        this.CLIENT_HEIGHT = 600;
        this.viewPort = new ViewPort();
        this.mouse = new Mouse(this);
        this.animations = [];
        this.waits = [];
        this.frameDuration = 0;
        this.isReadyLock = false;
        this.isFirstRender = true;
        this.intervalId = null;
        this.window = window;
        this.fetch = fetch;
    }
    _createClass__default['default'](Screen2, [
        {
            key: "wait",
            value: function wait(checker) {
                this.waits.push(checker);
            }
        },
        {
            key: "ready",
            value: function ready() {
                if (!this.readyPromise) return _Promise__default['default'].resolve();
                return this.readyPromise;
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                var _context;
                if (this.isReadyLock) return true;
                var isReadyLock = _everyInstanceProperty__default['default'](_context = this.waits).call(_context, function(_) {
                    return _();
                });
                if (isReadyLock) {
                    this.waits = [];
                    if (this.resolveReady) this.resolveReady();
                }
                this.isReadyLock = isReadyLock;
                return isReadyLock;
            }
        },
        {
            key: "setDefaults",
            value: function setDefaults(ctx) {
                // initial values and defaults
                ctx.strokeStyle = 'rgba(0,0,0,0)';
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                ctx.miterLimit = 4;
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(_ref2) {
                var document = _ref2.document, ctx = _ref2.ctx, aspectRatio = _ref2.aspectRatio, width = _ref2.width, desiredWidth = _ref2.desiredWidth, height = _ref2.height, desiredHeight = _ref2.desiredHeight, _ref2$minX = _ref2.minX, minX = _ref2$minX === void 0 ? 0 : _ref2$minX, _ref2$minY = _ref2.minY, minY = _ref2$minY === void 0 ? 0 : _ref2$minY, refX = _ref2.refX, refY = _ref2.refY, _ref2$clip = _ref2.clip, clip = _ref2$clip === void 0 ? false : _ref2$clip, _ref2$clipX = _ref2.clipX, clipX = _ref2$clipX === void 0 ? 0 : _ref2$clipX, _ref2$clipY = _ref2.clipY, clipY = _ref2$clipY === void 0 ? 0 : _ref2$clipY;
                // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
                var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer
                var _cleanAspectRatio$spl = cleanAspectRatio.split(' '), _cleanAspectRatio$spl2 = _slicedToArray__default['default'](_cleanAspectRatio$spl, 2), aspectRatioAlign = _cleanAspectRatio$spl2[0], aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];
                var align = aspectRatioAlign || 'xMidYMid';
                var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale
                var scaleX = width / desiredWidth;
                var scaleY = height / desiredHeight;
                var scaleMin = Math.min(scaleX, scaleY);
                var scaleMax = Math.max(scaleX, scaleY);
                var finalDesiredWidth = desiredWidth;
                var finalDesiredHeight = desiredHeight;
                if (meetOrSlice === 'meet') {
                    finalDesiredWidth *= scaleMin;
                    finalDesiredHeight *= scaleMin;
                }
                if (meetOrSlice === 'slice') {
                    finalDesiredWidth *= scaleMax;
                    finalDesiredHeight *= scaleMax;
                }
                var refXProp = new Property(document, 'refX', refX);
                var refYProp = new Property(document, 'refY', refY);
                var hasRefs = refXProp.hasValue() && refYProp.hasValue();
                if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
                if (clip) {
                    var scaledClipX = scaleMin * clipX;
                    var scaledClipY = scaleMin * clipY;
                    ctx.beginPath();
                    ctx.moveTo(scaledClipX, scaledClipY);
                    ctx.lineTo(width, scaledClipY);
                    ctx.lineTo(width, height);
                    ctx.lineTo(scaledClipX, height);
                    ctx.closePath();
                    ctx.clip();
                }
                if (!hasRefs) {
                    var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
                    var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
                    var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
                    var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;
                    if (/^xMid/.test(align) && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
                    if (/YMid$/.test(align) && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2 - finalDesiredHeight / 2);
                    if (/^xMax/.test(align) && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
                    if (/YMax$/.test(align) && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
                } // scale
                switch(true){
                    case align === 'none':
                        ctx.scale(scaleX, scaleY);
                        break;
                    case meetOrSlice === 'meet':
                        ctx.scale(scaleMin, scaleMin);
                        break;
                    case meetOrSlice === 'slice':
                        ctx.scale(scaleMax, scaleMax);
                        break;
                } // translate
                ctx.translate(-minX, -minY);
            }
        },
        {
            key: "start",
            value: function start(element) {
                var _this = this;
                var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                }, _ref3$enableRedraw = _ref3.enableRedraw, enableRedraw = _ref3$enableRedraw === void 0 ? false : _ref3$enableRedraw, _ref3$ignoreMouse = _ref3.ignoreMouse, ignoreMouse = _ref3$ignoreMouse === void 0 ? false : _ref3$ignoreMouse, _ref3$ignoreAnimation = _ref3.ignoreAnimation, ignoreAnimation = _ref3$ignoreAnimation === void 0 ? false : _ref3$ignoreAnimation, _ref3$ignoreDimension = _ref3.ignoreDimensions, ignoreDimensions = _ref3$ignoreDimension === void 0 ? false : _ref3$ignoreDimension, _ref3$ignoreClear = _ref3.ignoreClear, ignoreClear = _ref3$ignoreClear === void 0 ? false : _ref3$ignoreClear, forceRedraw = _ref3.forceRedraw, scaleWidth = _ref3.scaleWidth, scaleHeight = _ref3.scaleHeight, offsetX = _ref3.offsetX, offsetY = _ref3.offsetY;
                var FRAMERATE = this.FRAMERATE, mouse = this.mouse;
                var frameDuration = 1000 / FRAMERATE;
                this.frameDuration = frameDuration;
                this.readyPromise = new _Promise__default['default'](function(resolve) {
                    _this.resolveReady = resolve;
                });
                if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                if (!enableRedraw) return;
                var now = _Date$now__default['default']();
                var then = now;
                var delta = 0;
                var tick = function tick1() {
                    now = _Date$now__default['default']();
                    delta = now - then;
                    if (delta >= frameDuration) {
                        then = now - delta % frameDuration;
                        if (_this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                            _this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                            mouse.runEvents();
                        }
                    }
                    _this.intervalId = requestAnimationFrame__default['default'](tick1);
                };
                if (!ignoreMouse) mouse.start();
                this.intervalId = requestAnimationFrame__default['default'](tick);
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.intervalId) {
                    requestAnimationFrame__default['default'].cancel(this.intervalId);
                    this.intervalId = null;
                }
                this.mouse.stop();
            }
        },
        {
            key: "shouldUpdate",
            value: function shouldUpdate(ignoreAnimation, forceRedraw) {
                // need update from animations?
                if (!ignoreAnimation) {
                    var _context2;
                    var frameDuration = this.frameDuration;
                    var shouldUpdate = _reduceInstanceProperty__default['default'](_context2 = this.animations).call(_context2, function(shouldUpdate1, animation) {
                        return animation.update(frameDuration) || shouldUpdate1;
                    }, false);
                    if (shouldUpdate) return true;
                } // need update from redraw?
                if (typeof forceRedraw === 'function' && forceRedraw()) return true;
                if (!this.isReadyLock && this.isReady()) return true;
                 // need update from mouse events?
                if (this.mouse.hasEvents()) return true;
                return false;
            }
        },
        {
            key: "render",
            value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
                var CLIENT_WIDTH = this.CLIENT_WIDTH, CLIENT_HEIGHT = this.CLIENT_HEIGHT, viewPort = this.viewPort, ctx = this.ctx, isFirstRender = this.isFirstRender;
                var canvas = ctx.canvas;
                viewPort.clear();
                if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height);
                else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
                var widthStyle = element.getStyle('width');
                var heightStyle = element.getStyle('height');
                if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
                    // set canvas size
                    if (widthStyle.hasValue()) {
                        canvas.width = widthStyle.getPixels('x');
                        if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
                    }
                    if (heightStyle.hasValue()) {
                        canvas.height = heightStyle.getPixels('y');
                        if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
                    }
                }
                var cWidth = canvas.clientWidth || canvas.width;
                var cHeight = canvas.clientHeight || canvas.height;
                if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
                    cWidth = widthStyle.getPixels('x');
                    cHeight = heightStyle.getPixels('y');
                }
                viewPort.setCurrent(cWidth, cHeight);
                if (typeof offsetX === 'number') element.getAttribute('x', true).setValue(offsetX);
                if (typeof offsetY === 'number') element.getAttribute('y', true).setValue(offsetY);
                if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
                    var _context3, _context4;
                    var viewBox = toNumbers(element.getAttribute('viewBox').getString());
                    var xRatio = 0;
                    var yRatio = 0;
                    if (typeof scaleWidth === 'number') {
                        var _widthStyle = element.getStyle('width');
                        if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels('x') / scaleWidth;
                        else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
                    }
                    if (typeof scaleHeight === 'number') {
                        var _heightStyle = element.getStyle('height');
                        if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels('y') / scaleHeight;
                        else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
                    }
                    if (!xRatio) xRatio = yRatio;
                    if (!yRatio) yRatio = xRatio;
                    element.getAttribute('width', true).setValue(scaleWidth);
                    element.getAttribute('height', true).setValue(scaleHeight);
                    var transformStyle = element.getStyle('transform', true, true);
                    transformStyle.setValue(_concatInstanceProperty__default['default'](_context3 = _concatInstanceProperty__default['default'](_context4 = "".concat(transformStyle.getString(), " scale(")).call(_context4, 1 / xRatio, ", ")).call(_context3, 1 / yRatio, ")"));
                } // clear and render
                if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
                element.render(ctx);
                if (isFirstRender) this.isFirstRender = false;
            }
        }
    ]);
    return Screen2;
}();
Screen1.defaultWindow = defaultWindow;
Screen1.defaultFetch = defaultFetch;
var defaultFetch$1 = Screen1.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;
var Parser = /*#__PURE__*/ function() {
    function Parser1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, _ref$fetch = _ref.fetch, fetch = _ref$fetch === void 0 ? defaultFetch$1 : _ref$fetch, _ref$DOMParser = _ref.DOMParser, DOMParser1 = _ref$DOMParser === void 0 ? DefaultDOMParser : _ref$DOMParser;
        _classCallCheck__default['default'](this, Parser1);
        this.fetch = fetch;
        this.DOMParser = DOMParser1;
    }
    _createClass__default['default'](Parser1, [
        {
            key: "parse",
            value: function() {
                var _parse = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee(resource) {
                    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (!/^</.test(resource)) {
                                    _context.next = 2;
                                    break;
                                }
                                return _context.abrupt("return", this.parseFromString(resource));
                            case 2:
                                return _context.abrupt("return", this.load(resource));
                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function parse(_x) {
                    return _parse.apply(this, arguments);
                }
                return parse;
            }()
        },
        {
            key: "parseFromString",
            value: function parseFromString(xml) {
                var parser = new this.DOMParser();
                try {
                    return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
                } catch (err) {
                    return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
                }
            }
        },
        {
            key: "checkDocument",
            value: function checkDocument(document) {
                var parserError = document.getElementsByTagName('parsererror')[0];
                if (parserError) throw new Error(parserError.textContent);
                return document;
            }
        },
        {
            key: "load",
            value: function() {
                var _load = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee2(url) {
                    var response, xml;
                    return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.fetch(url);
                            case 2:
                                response = _context2.sent;
                                _context2.next = 5;
                                return response.text();
                            case 5:
                                xml = _context2.sent;
                                return _context2.abrupt("return", this.parseFromString(xml));
                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function load(_x2) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }
    ]);
    return Parser1;
}();
var Translate = /*#__PURE__*/ function() {
    function Translate1(_, point) {
        _classCallCheck__default['default'](this, Translate1);
        this.type = 'translate';
        this.point = null;
        this.point = Point.parse(point);
    }
    _createClass__default['default'](Translate1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this$point = this.point, x = _this$point.x, y = _this$point.y;
                ctx.translate(x || 0, y || 0);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this$point2 = this.point, x = _this$point2.x, y = _this$point2.y;
                ctx.translate(-1 * x || 0, -1 * y || 0);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this$point3 = this.point, x = _this$point3.x, y = _this$point3.y;
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    x || 0,
                    y || 0
                ]);
            }
        }
    ]);
    return Translate1;
}();
var Rotate = /*#__PURE__*/ function() {
    function Rotate1(document, rotate, transformOrigin) {
        _classCallCheck__default['default'](this, Rotate1);
        this.type = 'rotate';
        this.angle = null;
        this.originX = null;
        this.originY = null;
        this.cx = 0;
        this.cy = 0;
        var numbers = toNumbers(rotate);
        this.angle = new Property(document, 'angle', numbers[0]);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
        this.cx = numbers[1] || 0;
        this.cy = numbers[2] || 0;
    }
    _createClass__default['default'](Rotate1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var cx = this.cx, cy = this.cy, originX = this.originX, originY = this.originY, angle = this.angle;
                var x = cx + originX.getPixels('x');
                var y = cy + originY.getPixels('y');
                ctx.translate(x, y);
                ctx.rotate(angle.getRadians());
                ctx.translate(-x, -y);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var cx = this.cx, cy = this.cy, angle = this.angle;
                ctx.translate(cx, cy);
                ctx.rotate(-1 * angle.getRadians());
                ctx.translate(-cx, -cy);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var cx = this.cx, cy = this.cy, angle = this.angle;
                var rad = angle.getRadians();
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    cx || 0,
                    cy || 0
                ]);
                point.applyTransform([
                    Math.cos(rad),
                    Math.sin(rad),
                    -Math.sin(rad),
                    Math.cos(rad),
                    0,
                    0
                ]);
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    -cx || 0,
                    -cy || 0
                ]);
            }
        }
    ]);
    return Rotate1;
}();
var Scale = /*#__PURE__*/ function() {
    function Scale1(_, scale) {
        _classCallCheck__default['default'](this, Scale1);
        this.type = 'scale';
        this.scale = null;
        var scaleSize = Point.parseScale(scale); // Workaround for node-canvas
        if (scaleSize.x === 0 || scaleSize.y === 0) {
            scaleSize.x = PSEUDO_ZERO;
            scaleSize.y = PSEUDO_ZERO;
        }
        this.scale = scaleSize;
    }
    _createClass__default['default'](Scale1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this$scale = this.scale, x = _this$scale.x, y = _this$scale.y;
                ctx.scale(x, y || x);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this$scale2 = this.scale, x = _this$scale2.x, y = _this$scale2.y;
                ctx.scale(1 / x, 1 / y || x);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this$scale3 = this.scale, x = _this$scale3.x, y = _this$scale3.y;
                point.applyTransform([
                    x || 0,
                    0,
                    0,
                    y || 0,
                    0,
                    0
                ]);
            }
        }
    ]);
    return Scale1;
}();
var Matrix = /*#__PURE__*/ function() {
    function Matrix1(_, matrix) {
        _classCallCheck__default['default'](this, Matrix1);
        this.type = 'matrix';
        this.matrix = [];
        this.matrix = toNumbers(matrix);
    }
    _createClass__default['default'](Matrix1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var matrix = this.matrix;
                ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var matrix = this.matrix;
                var a = matrix[0];
                var b = matrix[2];
                var c = matrix[4];
                var d = matrix[1];
                var e = matrix[3];
                var f = matrix[5];
                var g = 0;
                var h = 0;
                var i = 1;
                var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
                ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                point.applyTransform(this.matrix);
            }
        }
    ]);
    return Matrix1;
}();
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var Skew1 = /*#__PURE__*/ function(_Matrix) {
    _inherits__default['default'](Skew2, _Matrix);
    var _super = _createSuper(Skew2);
    function Skew2(document, skew) {
        var _this;
        _classCallCheck__default['default'](this, Skew2);
        _this = _super.call(this, document, skew);
        _this.type = 'skew';
        _this.angle = null;
        _this.angle = new Property(document, 'angle', skew);
        return _this;
    }
    return Skew2;
}(Matrix);
function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SkewX1 = /*#__PURE__*/ function(_Skew) {
    _inherits__default['default'](SkewX2, _Skew);
    var _super = _createSuper$1(SkewX2);
    function SkewX2(document, skew) {
        var _this;
        _classCallCheck__default['default'](this, SkewX2);
        _this = _super.call(this, document, skew);
        _this.type = 'skewX';
        _this.matrix = [
            1,
            0,
            Math.tan(_this.angle.getRadians()),
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewX2;
}(Skew1);
function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SkewY1 = /*#__PURE__*/ function(_Skew) {
    _inherits__default['default'](SkewY2, _Skew);
    var _super = _createSuper$2(SkewY2);
    function SkewY2(document, skew) {
        var _this;
        _classCallCheck__default['default'](this, SkewY2);
        _this = _super.call(this, document, skew);
        _this.type = 'skewY';
        _this.matrix = [
            1,
            Math.tan(_this.angle.getRadians()),
            0,
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewY2;
}(Skew1);
function parseTransforms(transform) {
    var _context;
    return _trimInstanceProperty__default['default'](_context = compressSpaces(transform)).call(_context).replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
    var _transform$split = transform.split('('), _transform$split2 = _slicedToArray__default['default'](_transform$split, 2), type = _transform$split2[0], value = _transform$split2[1];
    return [
        _trimInstanceProperty__default['default'](type).call(type),
        _trimInstanceProperty__default['default'](value).call(value).replace(')', '')
    ];
}
var Transform = /*#__PURE__*/ function() {
    function Transform1(document, transform, transformOrigin) {
        var _this = this;
        _classCallCheck__default['default'](this, Transform1);
        this.document = document;
        this.transforms = [];
        var data = parseTransforms(transform);
        _forEachInstanceProperty__default['default'](data).call(data, function(transform1) {
            if (transform1 === 'none') return;
            var _parseTransform = parseTransform(transform1), _parseTransform2 = _slicedToArray__default['default'](_parseTransform, 2), type = _parseTransform2[0], value = _parseTransform2[1];
            var TransformType = Transform1.transformTypes[type];
            if (typeof TransformType !== 'undefined') _this.transforms.push(new TransformType(_this.document, value, transformOrigin));
        });
    }
    _createClass__default['default'](Transform1, [
        {
            key: "apply",
            value: function apply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].apply(ctx);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = len - 1; i >= 0; i--)transforms[i].unapply(ctx);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].applyToPoint(point);
            }
        }
    ], [
        {
            key: "fromElement",
            value: function fromElement(document, element) {
                var transformStyle = element.getStyle('transform', false, true);
                var _element$getStyle$spl = element.getStyle('transform-origin', false, true).split(), _element$getStyle$spl2 = _slicedToArray__default['default'](_element$getStyle$spl, 2), transformOriginXProperty = _element$getStyle$spl2[0], _element$getStyle$spl3 = _element$getStyle$spl2[1], transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;
                var transformOrigin = [
                    transformOriginXProperty,
                    transformOriginYProperty
                ];
                if (transformStyle.hasValue()) return new Transform1(document, transformStyle.getString(), transformOrigin);
                return null;
            }
        }
    ]);
    return Transform1;
}();
Transform.transformTypes = {
    translate: Translate,
    rotate: Rotate,
    scale: Scale,
    matrix: Matrix,
    skewX: SkewX1,
    skewY: SkewY1
};
var Element1 = /*#__PURE__*/ function() {
    function Element2(document, node) {
        var _context, _this = this, _context4;
        var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        _classCallCheck__default['default'](this, Element2);
        this.document = document;
        this.node = node;
        this.captureTextNodes = captureTextNodes;
        this.attributes = {
        };
        this.styles = {
        };
        this.stylesSpecificity = {
        };
        this.animationFrozen = false;
        this.animationFrozenValue = '';
        this.parent = null;
        this.children = [];
        if (!node || node.nodeType !== 1) // ELEMENT_NODE
        return;
         // add attributes
        _forEachInstanceProperty__default['default'](_context = _Array$from__default['default'](node.attributes)).call(_context, function(attribute) {
            var nodeName = normalizeAttributeName(attribute.nodeName);
            _this.attributes[nodeName] = new Property(document, nodeName, attribute.value);
        });
        this.addStylesFromStyleDefinition(); // add inline styles
        if (this.getAttribute('style').hasValue()) {
            var _context2;
            var styles = _mapInstanceProperty__default['default'](_context2 = this.getAttribute('style').getString().split(';')).call(_context2, function(_) {
                return _trimInstanceProperty__default['default'](_).call(_);
            });
            _forEachInstanceProperty__default['default'](styles).call(styles, function(style) {
                var _context3;
                if (!style) return;
                var _style$split$map = _mapInstanceProperty__default['default'](_context3 = style.split(':')).call(_context3, function(_) {
                    return _trimInstanceProperty__default['default'](_).call(_);
                }), _style$split$map2 = _slicedToArray__default['default'](_style$split$map, 2), name = _style$split$map2[0], value = _style$split$map2[1];
                _this.styles[name] = new Property(document, name, value);
            });
        }
        var definitions = document.definitions;
        var id = this.getAttribute('id'); // add id
        if (id.hasValue()) {
            if (!definitions[id.getValue()]) definitions[id.getValue()] = this;
        }
        _forEachInstanceProperty__default['default'](_context4 = _Array$from__default['default'](node.childNodes)).call(_context4, function(childNode) {
            if (childNode.nodeType === 1) _this.addChild(childNode); // ELEMENT_NODE
            else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
                var textNode = document.createTextNode(childNode);
                if (textNode.getText().length > 0) _this.addChild(textNode); // TEXT_NODE
            }
        });
    }
    _createClass__default['default'](Element2, [
        {
            key: "getAttribute",
            value: function getAttribute(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var attr = this.attributes[name];
                if (!attr && createIfNotExists) {
                    var _attr = new Property(this.document, name, '');
                    this.attributes[name] = _attr;
                    return _attr;
                }
                return attr || Property.empty(this.document);
            }
        },
        {
            key: "getHrefAttribute",
            value: function getHrefAttribute() {
                for(var key in this.attributes){
                    if (key === 'href' || /:href$/.test(key)) return this.attributes[key];
                }
                return Property.empty(this.document);
            }
        },
        {
            key: "getStyle",
            value: function getStyle(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var style = this.styles[name];
                if (style) return style;
                var attr = this.getAttribute(name);
                if (attr && attr.hasValue()) {
                    this.styles[name] = attr; // move up to me to cache
                    return attr;
                }
                if (!skipAncestors) {
                    var parent = this.parent;
                    if (parent) {
                        var parentStyle = parent.getStyle(name);
                        if (parentStyle && parentStyle.hasValue()) return parentStyle;
                    }
                }
                if (createIfNotExists) {
                    var _style = new Property(this.document, name, '');
                    this.styles[name] = _style;
                    return _style;
                }
                return style || Property.empty(this.document);
            }
        },
        {
            key: "render",
            value: function render(ctx) {
                // don't render display=none
                // don't render visibility=hidden
                if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') return;
                ctx.save();
                if (this.getStyle('mask').hasValue()) {
                    // mask
                    var mask = this.getStyle('mask').getDefinition();
                    if (mask) {
                        this.applyEffects(ctx);
                        mask.apply(ctx, this);
                    }
                } else if (this.getStyle('filter').getValue('none') !== 'none') {
                    // filter
                    var filter = this.getStyle('filter').getDefinition();
                    if (filter) {
                        this.applyEffects(ctx);
                        filter.apply(ctx, this);
                    }
                } else {
                    this.setContext(ctx);
                    this.renderChildren(ctx);
                    this.clearContext(ctx);
                }
                ctx.restore();
            }
        },
        {
            key: "setContext",
            value: function setContext(_) {
            }
        },
        {
            key: "applyEffects",
            value: function applyEffects(ctx) {
                // transform
                var transform = Transform.fromElement(this.document, this);
                if (transform) transform.apply(ctx);
                 // clip
                var clipPathStyleProp = this.getStyle('clip-path', false, true);
                if (clipPathStyleProp.hasValue()) {
                    var clip = clipPathStyleProp.getDefinition();
                    if (clip) clip.apply(ctx);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(_) {
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _context5;
                _forEachInstanceProperty__default['default'](_context5 = this.children).call(_context5, function(child) {
                    child.render(ctx);
                });
            }
        },
        {
            key: "addChild",
            value: function addChild(childNode) {
                var _context6;
                var child = childNode instanceof Element2 ? childNode : this.document.createElement(childNode);
                child.parent = this;
                if (!_includesInstanceProperty__default['default'](_context6 = Element2.ignoreChildTypes).call(_context6, child.type)) this.children.push(child);
            }
        },
        {
            key: "matchesSelector",
            value: function matchesSelector(selector) {
                var _context7;
                var node = this.node;
                if (typeof node.matches === 'function') return node.matches(selector);
                var styleClasses = node.getAttribute('class');
                if (!styleClasses || styleClasses === '') return false;
                return _someInstanceProperty__default['default'](_context7 = styleClasses.split(' ')).call(_context7, function(styleClass) {
                    if (".".concat(styleClass) === selector) return true;
                });
            }
        },
        {
            key: "addStylesFromStyleDefinition",
            value: function addStylesFromStyleDefinition() {
                var _this$document = this.document, styles = _this$document.styles, stylesSpecificity = _this$document.stylesSpecificity;
                for(var selector in styles)if (selector[0] !== '@' && this.matchesSelector(selector)) {
                    var style = styles[selector];
                    var specificity = stylesSpecificity[selector];
                    if (style) for(var name in style){
                        var existingSpecificity = this.stylesSpecificity[name];
                        if (typeof existingSpecificity === 'undefined') existingSpecificity = '000';
                        if (specificity >= existingSpecificity) {
                            this.styles[name] = style[name];
                            this.stylesSpecificity[name] = specificity;
                        }
                    }
                }
            }
        },
        {
            key: "removeStyles",
            value: function removeStyles(element, ignoreStyles) {
                var toRestore = _reduceInstanceProperty__default['default'](ignoreStyles).call(ignoreStyles, function(toRestore1, name) {
                    var _context8;
                    var styleProp = element.getStyle(name);
                    if (!styleProp.hasValue()) return toRestore1;
                    var value = styleProp.getString();
                    styleProp.setValue('');
                    return _concatInstanceProperty__default['default'](_context8 = []).call(_context8, _toConsumableArray__default['default'](toRestore1), [
                        [
                            name,
                            value
                        ]
                    ]);
                }, []);
                return toRestore;
            }
        },
        {
            key: "restoreStyles",
            value: function restoreStyles(element, styles) {
                _forEachInstanceProperty__default['default'](styles).call(styles, function(_ref) {
                    var _ref2 = _slicedToArray__default['default'](_ref, 2), name = _ref2[0], value = _ref2[1];
                    element.getStyle(name, true).setValue(value);
                });
            }
        }
    ]);
    return Element2;
}();
Element1.ignoreChildTypes = [
    'title'
];
function _createSuper$3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var UnknownElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](UnknownElement2, _Element);
    var _super = _createSuper$3(UnknownElement2);
    function UnknownElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, UnknownElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        return _this;
    }
    return UnknownElement2;
}(Element1);
function wrapFontFamily(fontFamily) {
    var trimmed = _trimInstanceProperty__default['default'](fontFamily).call(fontFamily);
    return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}
function prepareFontFamily(fontFamily) {
    var _context;
    return typeof process === 'undefined' ? fontFamily : _mapInstanceProperty__default['default'](_context = _trimInstanceProperty__default['default'](fontFamily).call(fontFamily).split(',')).call(_context, wrapFontFamily).join(',');
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 */ function prepareFontStyle(fontStyle) {
    if (!fontStyle) return '';
    var targetFontStyle = _trimInstanceProperty__default['default'](fontStyle).call(fontStyle).toLowerCase();
    switch(targetFontStyle){
        case 'normal':
        case 'italic':
        case 'oblique':
        case 'inherit':
        case 'initial':
        case 'unset':
            return targetFontStyle;
        default:
            if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
            return '';
    }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 */ function prepareFontWeight(fontWeight) {
    if (!fontWeight) return '';
    var targetFontWeight = _trimInstanceProperty__default['default'](fontWeight).call(fontWeight).toLowerCase();
    switch(targetFontWeight){
        case 'normal':
        case 'bold':
        case 'lighter':
        case 'bolder':
        case 'inherit':
        case 'initial':
        case 'unset':
            return targetFontWeight;
        default:
            if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
            return '';
    }
}
var Font = /*#__PURE__*/ function() {
    function Font1(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        _classCallCheck__default['default'](this, Font1);
        var inheritFont = inherit ? typeof inherit === 'string' ? Font1.parse(inherit) : inherit : {
        };
        this.fontFamily = fontFamily || inheritFont.fontFamily;
        this.fontSize = fontSize || inheritFont.fontSize;
        this.fontStyle = fontStyle || inheritFont.fontStyle;
        this.fontWeight = fontWeight || inheritFont.fontWeight;
        this.fontVariant = fontVariant || inheritFont.fontVariant;
    }
    _createClass__default['default'](Font1, [
        {
            key: "toString",
            value: function toString() {
                var _context2;
                return _trimInstanceProperty__default['default'](_context2 = [
                    prepareFontStyle(this.fontStyle),
                    this.fontVariant,
                    prepareFontWeight(this.fontWeight),
                    this.fontSize,
                    prepareFontFamily(this.fontFamily)
                ].join(' ')).call(_context2);
            }
        }
    ], [
        {
            key: "parse",
            value: function parse() {
                var _context3;
                var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var inherit = arguments.length > 1 ? arguments[1] : undefined;
                var fontStyle = '';
                var fontVariant = '';
                var fontWeight = '';
                var fontSize = '';
                var fontFamily = '';
                var parts = _trimInstanceProperty__default['default'](_context3 = compressSpaces(font)).call(_context3).split(' ');
                var set = {
                    fontSize: false,
                    fontStyle: false,
                    fontWeight: false,
                    fontVariant: false
                };
                _forEachInstanceProperty__default['default'](parts).call(parts, function(part) {
                    var _context4, _context5, _context6;
                    if (part !== 'inherit') fontFamily += part;
                });
                return new Font1(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
            }
        }
    ]);
    return Font1;
}();
Font.styles = 'normal|italic|oblique|inherit';
Font.variants = 'normal|small-caps|inherit';
Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';
var BoundingBox = /*#__PURE__*/ function() {
    function BoundingBox1() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
        _classCallCheck__default['default'](this, BoundingBox1);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    _createClass__default['default'](BoundingBox1, [
        {
            key: "addPoint",
            value: function addPoint(x, y) {
                if (typeof x !== 'undefined') {
                    if (isNaN(this.x1) || isNaN(this.x2)) {
                        this.x1 = x;
                        this.x2 = x;
                    }
                    if (x < this.x1) this.x1 = x;
                    if (x > this.x2) this.x2 = x;
                }
                if (typeof y !== 'undefined') {
                    if (isNaN(this.y1) || isNaN(this.y2)) {
                        this.y1 = y;
                        this.y2 = y;
                    }
                    if (y < this.y1) this.y1 = y;
                    if (y > this.y2) this.y2 = y;
                }
            }
        },
        {
            key: "addX",
            value: function addX(x) {
                this.addPoint(x, null);
            }
        },
        {
            key: "addY",
            value: function addY(y) {
                this.addPoint(null, y);
            }
        },
        {
            key: "addBoundingBox",
            value: function addBoundingBox(boundingBox) {
                if (!boundingBox) return;
                var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2;
                this.addPoint(x1, y1);
                this.addPoint(x2, y2);
            }
        },
        {
            key: "sumCubic",
            value: function sumCubic(t, p0, p1, p2, p3) {
                return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
            }
        },
        {
            key: "bezierCurveAdd",
            value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
                var b = 6 * p0 - 12 * p1 + 6 * p2;
                var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
                var c = 3 * p1 - 3 * p0;
                if (a === 0) {
                    if (b === 0) return;
                    var t = -c / b;
                    if (0 < t && t < 1) {
                        if (forX) this.addX(this.sumCubic(t, p0, p1, p2, p3));
                        else this.addY(this.sumCubic(t, p0, p1, p2, p3));
                    }
                    return;
                }
                var b2ac = Math.pow(b, 2) - 4 * c * a;
                if (b2ac < 0) return;
                var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                if (0 < t1 && t1 < 1) {
                    if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
                }
                var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                if (0 < t2 && t2 < 1) {
                    if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
                }
            }
        },
        {
            key: "addBezierCurve",
            value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
                this.addPoint(p0x, p0y);
                this.addPoint(p3x, p3y);
                this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
                this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
            }
        },
        {
            key: "addQuadraticCurve",
            value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
                var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
                var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
                this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
            }
        },
        {
            key: "isPointInBox",
            value: function isPointInBox(x, y) {
                var x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
                return x1 <= x && x <= x2 && y1 <= y && y <= y2;
            }
        },
        {
            key: "x",
            get: function get() {
                return this.x1;
            }
        },
        {
            key: "y",
            get: function get() {
                return this.y1;
            }
        },
        {
            key: "width",
            get: function get() {
                return this.x2 - this.x1;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.y2 - this.y1;
            }
        }
    ]);
    return BoundingBox1;
}();
function _createSuper$4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$4() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RenderedElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](RenderedElement2, _Element);
    var _super = _createSuper$4(RenderedElement2);
    function RenderedElement2() {
        var _this;
        _classCallCheck__default['default'](this, RenderedElement2);
        _this = _super.apply(this, arguments);
        _this.modifiedEmSizeStack = false;
        return _this;
    }
    _createClass__default['default'](RenderedElement2, [
        {
            key: "calculateOpacity",
            value: function calculateOpacity() {
                var opacity = 1; // tslint:disable-next-line: no-this-assignment
                var element = this;
                while(element){
                    var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call
                    if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
                    element = element.parent;
                }
                return opacity;
            }
        },
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!fromMeasure) {
                    // causes stack overflow when measuring text with gradients
                    // fill
                    var fillStyleProp = this.getStyle('fill');
                    var fillOpacityStyleProp = this.getStyle('fill-opacity');
                    var strokeStyleProp = this.getStyle('stroke');
                    var strokeOpacityProp = this.getStyle('stroke-opacity');
                    if (fillStyleProp.isUrlDefinition()) {
                        var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
                        if (fillStyle) ctx.fillStyle = fillStyle;
                    } else if (fillStyleProp.hasValue()) {
                        if (fillStyleProp.getString() === 'currentColor') fillStyleProp.setValue(this.getStyle('color').getColor());
                        var _fillStyle = fillStyleProp.getColor();
                        if (_fillStyle !== 'inherit') ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
                    }
                    if (fillOpacityStyleProp.hasValue()) {
                        var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
                        ctx.fillStyle = _fillStyle2;
                    } // stroke
                    if (strokeStyleProp.isUrlDefinition()) {
                        var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
                        if (strokeStyle) ctx.strokeStyle = strokeStyle;
                    } else if (strokeStyleProp.hasValue()) {
                        if (strokeStyleProp.getString() === 'currentColor') strokeStyleProp.setValue(this.getStyle('color').getColor());
                        var _strokeStyle = strokeStyleProp.getString();
                        if (_strokeStyle !== 'inherit') ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
                    }
                    if (strokeOpacityProp.hasValue()) {
                        var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
                        ctx.strokeStyle = _strokeStyle2;
                    }
                    var strokeWidthStyleProp = this.getStyle('stroke-width');
                    if (strokeWidthStyleProp.hasValue()) {
                        var newLineWidth = strokeWidthStyleProp.getPixels();
                        ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
                    }
                    var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
                    var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
                    var strokeMiterlimitProp = this.getStyle('stroke-miterlimit');
                    var pointOrderStyleProp = this.getStyle('paint-order');
                    var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
                    var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');
                    if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
                    if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
                    if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
                    if (pointOrderStyleProp.hasValue()) // ?
                    ctx.paintOrder = pointOrderStyleProp.getValue();
                    if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
                        var gaps = toNumbers(strokeDasharrayStyleProp.getString());
                        if (typeof ctx.setLineDash !== 'undefined') ctx.setLineDash(gaps);
                        else if (typeof ctx.webkitLineDash !== 'undefined') ctx.webkitLineDash = gaps;
                        else if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) ctx.mozDash = gaps;
                        var offset = strokeDashoffsetProp.getPixels();
                        if (typeof ctx.lineDashOffset !== 'undefined') ctx.lineDashOffset = offset;
                        else if (typeof ctx.webkitLineDashOffset !== 'undefined') ctx.webkitLineDashOffset = offset;
                        else if (typeof ctx.mozDashOffset !== 'undefined') ctx.mozDashOffset = offset;
                    }
                } // font
                this.modifiedEmSizeStack = false;
                if (typeof ctx.font !== 'undefined') {
                    var fontStyleProp = this.getStyle('font');
                    var fontStyleStyleProp = this.getStyle('font-style');
                    var fontVariantStyleProp = this.getStyle('font-variant');
                    var fontWeightStyleProp = this.getStyle('font-weight');
                    var fontSizeStyleProp = this.getStyle('font-size');
                    var fontFamilyStyleProp = this.getStyle('font-family');
                    var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
                    fontStyleStyleProp.setValue(font.fontStyle);
                    fontVariantStyleProp.setValue(font.fontVariant);
                    fontWeightStyleProp.setValue(font.fontWeight);
                    fontSizeStyleProp.setValue(font.fontSize);
                    fontFamilyStyleProp.setValue(font.fontFamily);
                    ctx.font = font.toString();
                    if (fontSizeStyleProp.isPixels()) {
                        this.document.emSize = fontSizeStyleProp.getPixels();
                        this.modifiedEmSizeStack = true;
                    }
                }
                if (!fromMeasure) {
                    // effects
                    this.applyEffects(ctx); // opacity
                    ctx.globalAlpha = this.calculateOpacity();
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                _get__default['default'](_getPrototypeOf__default['default'](RenderedElement2.prototype), "clearContext", this).call(this, ctx);
                if (this.modifiedEmSizeStack) this.document.popEmSize();
            }
        }
    ]);
    return RenderedElement2;
}(Element1);
function _createSuper$5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$5() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](TextElement2, _RenderedElement);
    var _super = _createSuper$5(TextElement2);
    function TextElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, TextElement2);
        _this = _super.call(this, document, node, (this instanceof TextElement2 ? this.constructor : void 0) === TextElement2 ? true : captureTextNodes);
        _this.type = 'text';
        _this.x = 0;
        _this.y = 0;
        _this.measureCache = -1;
        return _this;
    }
    _createClass__default['default'](TextElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                _get__default['default'](_getPrototypeOf__default['default'](TextElement2.prototype), "setContext", this).call(this, ctx, fromMeasure);
                var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();
                if (textBaseline) ctx.textBaseline = textBaseline;
            }
        },
        {
            key: "initializeCoordinates",
            value: function initializeCoordinates(ctx) {
                this.x = this.getAttribute('x').getPixels('x');
                this.y = this.getAttribute('y').getPixels('y');
                var dxAttr = this.getAttribute('dx');
                var dyAttr = this.getAttribute('dy');
                if (dxAttr.hasValue()) this.x += dxAttr.getPixels('x');
                if (dyAttr.hasValue()) this.y += dyAttr.getPixels('y');
                this.x += this.getAnchorDelta(ctx, this, 0);
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var _context, _this2 = this;
                if (this.type !== 'text') return this.getTElementBoundingBox(ctx);
                this.initializeCoordinates(ctx);
                var boundingBox = null;
                _forEachInstanceProperty__default['default'](_context = this.children).call(_context, function(_, i) {
                    var childBoundingBox = _this2.getChildBoundingBox(ctx, _this2, _this2, i);
                    if (!boundingBox) boundingBox = childBoundingBox;
                    else boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "getFontSize",
            value: function getFontSize() {
                var document = this.document, parent = this.parent;
                var inheritFontSize = Font.parse(document.ctx.font).fontSize;
                var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
                return fontSize;
            }
        },
        {
            key: "getTElementBoundingBox",
            value: function getTElementBoundingBox(ctx) {
                var fontSize = this.getFontSize();
                return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
            }
        },
        {
            key: "getGlyph",
            value: function getGlyph(font, text, i) {
                var char = text[i];
                var glyph = null;
                if (font.isArabic) {
                    var len = text.length;
                    var prevChar = text[i - 1];
                    var nextChar = text[i + 1];
                    var arabicForm = 'isolated';
                    if ((i === 0 || prevChar === ' ') && i < len - 2 && nextChar !== ' ') arabicForm = 'terminal';
                    if (i > 0 && prevChar !== ' ' && i < len - 2 && nextChar !== ' ') arabicForm = 'medial';
                    if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) arabicForm = 'initial';
                    if (typeof font.glyphs[char] !== 'undefined') {
                        glyph = font.glyphs[char][arabicForm];
                        if (!glyph && font.glyphs[char].type === 'glyph') glyph = font.glyphs[char];
                    }
                } else glyph = font.glyphs[char];
                if (!glyph) glyph = font.missingGlyph;
                return glyph;
            }
        },
        {
            key: "getText",
            value: function getText() {
                return '';
            }
        },
        {
            key: "getTextFromNode",
            value: function getTextFromNode(node) {
                var textNode = node || this.node;
                var childNodes = _Array$from__default['default'](textNode.parentNode.childNodes);
                var index = _indexOfInstanceProperty__default['default'](childNodes).call(childNodes, textNode);
                var lastIndex = childNodes.length - 1;
                var text = compressSpaces(textNode.value || textNode.text || textNode.textContent || '');
                if (index === 0) text = trimLeft(text);
                if (index === lastIndex) text = trimRight(text);
                return text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _context2, _this3 = this;
                if (this.type !== 'text') {
                    this.renderTElementChildren(ctx);
                    return;
                }
                this.initializeCoordinates(ctx);
                _forEachInstanceProperty__default['default'](_context2 = this.children).call(_context2, function(_, i) {
                    _this3.renderChild(ctx, _this3, _this3, i);
                });
                var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.
                if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
            }
        },
        {
            key: "renderTElementChildren",
            value: function renderTElementChildren(ctx) {
                var document = this.document, parent = this.parent;
                var renderText = this.getText();
                var customFont = parent.getStyle('font-family').getDefinition();
                if (customFont) {
                    var _context3;
                    var unitsPerEm = customFont.fontFace.unitsPerEm;
                    var ctxFont = Font.parse(document.ctx.font);
                    var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
                    var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
                    var scale = fontSize / unitsPerEm;
                    var text = customFont.isRTL ? _reverseInstanceProperty__default['default'](_context3 = renderText.split('')).call(_context3).join('') : renderText;
                    var dx = toNumbers(parent.getAttribute('dx').getString());
                    var len = text.length;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        ctx.translate(this.x, this.y);
                        ctx.scale(scale, -scale);
                        var lw = ctx.lineWidth;
                        ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
                        if (fontStyle === 'italic') ctx.transform(1, 0, 0.4, 1, 0, 0);
                        glyph.render(ctx);
                        if (fontStyle === 'italic') ctx.transform(1, 0, -0.4, 1, 0, 0);
                        ctx.lineWidth = lw;
                        ctx.scale(1 / scale, -1 / scale);
                        ctx.translate(-this.x, -this.y);
                        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
                        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) this.x += dx[i];
                    }
                    return;
                }
                var x = this.x, y = this.y;
                if (ctx.paintOrder === 'stroke') {
                    if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
                    if (ctx.fillStyle) ctx.fillText(renderText, x, y);
                } else {
                    if (ctx.fillStyle) ctx.fillText(renderText, x, y);
                    if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
                }
            }
        },
        {
            key: "getAnchorDelta",
            value: function getAnchorDelta(ctx, parent, startI) {
                var textAnchor = this.getStyle('text-anchor').getString('start');
                if (textAnchor !== 'start') {
                    var children = parent.children;
                    var len = children.length;
                    var child = null;
                    var width = 0;
                    for(var i = startI; i < len; i++){
                        child = children[i];
                        if (i > startI && child.getAttribute('x').hasValue() || child.getAttribute('text-anchor').hasValue()) break; // new group
                        width += child.measureTextRecursive(ctx);
                    }
                    return -1 * (textAnchor === 'end' ? width : width / 2);
                }
                return 0;
            }
        },
        {
            key: "adjustChildCoordinates",
            value: function adjustChildCoordinates(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (typeof child.measureText !== 'function') return child;
                ctx.save();
                child.setContext(ctx, true);
                var xAttr = child.getAttribute('x');
                var yAttr = child.getAttribute('y');
                var dxAttr = child.getAttribute('dx');
                var dyAttr = child.getAttribute('dy');
                var textAnchor = child.getAttribute('text-anchor').getString('start');
                if (i === 0 && child.type !== 'textNode') {
                    if (!xAttr.hasValue()) xAttr.setValue(textParent.getAttribute('x').getValue('0'));
                    if (!yAttr.hasValue()) yAttr.setValue(textParent.getAttribute('y').getValue('0'));
                    if (!dxAttr.hasValue()) dxAttr.setValue(textParent.getAttribute('dx').getValue('0'));
                    if (!dyAttr.hasValue()) dyAttr.setValue(textParent.getAttribute('dy').getValue('0'));
                }
                if (xAttr.hasValue()) {
                    child.x = xAttr.getPixels('x') + textParent.getAnchorDelta(ctx, parent, i);
                    if (textAnchor !== 'start') {
                        var width = child.measureTextRecursive(ctx);
                        child.x += -1 * (textAnchor === 'end' ? width : width / 2);
                    }
                    if (dxAttr.hasValue()) child.x += dxAttr.getPixels('x');
                } else {
                    if (textAnchor !== 'start') {
                        var _width = child.measureTextRecursive(ctx);
                        textParent.x += -1 * (textAnchor === 'end' ? _width : _width / 2);
                    }
                    if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels('x');
                    child.x = textParent.x;
                }
                textParent.x = child.x + child.measureText(ctx);
                if (yAttr.hasValue()) {
                    child.y = yAttr.getPixels('y');
                    if (dyAttr.hasValue()) child.y += dyAttr.getPixels('y');
                } else {
                    if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels('y');
                    child.y = textParent.y;
                }
                textParent.y = child.y;
                child.clearContext(ctx);
                ctx.restore();
                return child;
            }
        },
        {
            key: "getChildBoundingBox",
            value: function getChildBoundingBox(ctx, textParent, parent, i) {
                var _context4;
                var child = this.adjustChildCoordinates(ctx, textParent, parent, i); // not a text node?
                if (typeof child.getBoundingBox !== 'function') return null;
                var boundingBox = child.getBoundingBox(ctx);
                if (!boundingBox) return null;
                _forEachInstanceProperty__default['default'](_context4 = child.children).call(_context4, function(_, i1) {
                    var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i1);
                    boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "renderChild",
            value: function renderChild(ctx, textParent, parent, i) {
                var _context5;
                var child = this.adjustChildCoordinates(ctx, textParent, parent, i);
                child.render(ctx);
                _forEachInstanceProperty__default['default'](_context5 = child.children).call(_context5, function(_, i1) {
                    textParent.renderChild(ctx, textParent, child, i1);
                });
            }
        },
        {
            key: "measureTextRecursive",
            value: function measureTextRecursive(ctx) {
                var _context6;
                var width = _reduceInstanceProperty__default['default'](_context6 = this.children).call(_context6, function(width1, child) {
                    return width1 + child.measureTextRecursive(ctx);
                }, this.measureText(ctx));
                return width;
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx) {
                var measureCache = this.measureCache;
                if (~measureCache) return measureCache;
                var renderText = this.getText();
                var measure = this.measureTargetText(ctx, renderText);
                this.measureCache = measure;
                return measure;
            }
        },
        {
            key: "measureTargetText",
            value: function measureTargetText(ctx, targetText) {
                if (!targetText.length) return 0;
                var parent = this.parent;
                var customFont = parent.getStyle('font-family').getDefinition();
                if (customFont) {
                    var _context7;
                    var fontSize = this.getFontSize();
                    var text = customFont.isRTL ? _reverseInstanceProperty__default['default'](_context7 = targetText.split('')).call(_context7).join('') : targetText;
                    var dx = toNumbers(parent.getAttribute('dx').getString());
                    var len = text.length;
                    var _measure = 0;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) _measure += dx[i];
                    }
                    return _measure;
                }
                if (!ctx.measureText) return targetText.length * 10;
                ctx.save();
                this.setContext(ctx, true);
                var _ctx$measureText = ctx.measureText(targetText), measure = _ctx$measureText.width;
                this.clearContext(ctx);
                ctx.restore();
                return measure;
            }
        }
    ]);
    return TextElement2;
}(RenderedElement1);
function _createSuper$6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$6() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TSpanElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default['default'](TSpanElement2, _TextElement);
    var _super = _createSuper$6(TSpanElement2);
    function TSpanElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, TSpanElement2);
        _this = _super.call(this, document, node, (this instanceof TSpanElement2 ? this.constructor : void 0) === TSpanElement2 ? true : captureTextNodes);
        _this.type = 'tspan'; // if this node has children, then they own the text
        _this.text = _this.children.length > 0 ? '' : _this.getTextFromNode();
        return _this;
    }
    _createClass__default['default'](TSpanElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        }
    ]);
    return TSpanElement2;
}(TextElement1);
function _createSuper$7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$7() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextNode1 = /*#__PURE__*/ function(_TSpanElement) {
    _inherits__default['default'](TextNode2, _TSpanElement);
    var _super = _createSuper$7(TextNode2);
    function TextNode2() {
        var _this;
        _classCallCheck__default['default'](this, TextNode2);
        _this = _super.apply(this, arguments);
        _this.type = 'textNode';
        return _this;
    }
    return TextNode2;
}(TSpanElement1);
function _createSuper$8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$8() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PathParser1 = /*#__PURE__*/ function(_SVGPathData) {
    _inherits__default['default'](PathParser2, _SVGPathData);
    var _super = _createSuper$8(PathParser2);
    function PathParser2(path) {
        var _this;
        _classCallCheck__default['default'](this, PathParser2);
        _this = _super.call(this, path.replace(/[+-.]\s+/g, '-').replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''));
        _this.control = null;
        _this.start = null;
        _this.current = null;
        _this.command = null;
        _this.commands = _this.commands;
        _this.i = -1;
        _this.previousCommand = null;
        _this.points = [];
        _this.angles = [];
        return _this;
    }
    _createClass__default['default'](PathParser2, [
        {
            key: "reset",
            value: function reset() {
                this.i = -1;
                this.command = null;
                this.previousCommand = null;
                this.start = new Point(0, 0);
                this.control = new Point(0, 0);
                this.current = new Point(0, 0);
                this.points = [];
                this.angles = [];
            }
        },
        {
            key: "isEnd",
            value: function isEnd() {
                var i = this.i, commands = this.commands;
                return i >= commands.length - 1;
            }
        },
        {
            key: "next",
            value: function next() {
                var command = this.commands[++this.i];
                this.previousCommand = this.command;
                this.command = command;
                return command;
            }
        },
        {
            key: "getPoint",
            value: function getPoint() {
                var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
                var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
                var point = new Point(this.command[xProp], this.command[yProp]);
                return this.makeAbsolute(point);
            }
        },
        {
            key: "getAsControlPoint",
            value: function getAsControlPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.control = point;
                return point;
            }
        },
        {
            key: "getAsCurrentPoint",
            value: function getAsCurrentPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.current = point;
                return point;
            }
        },
        {
            key: "getReflectedControlPoint",
            value: function getReflectedControlPoint() {
                var previousCommand = this.previousCommand.type;
                if (previousCommand !== svgPathdata.SVGPathData.CURVE_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_CURVE_TO && previousCommand !== svgPathdata.SVGPathData.QUAD_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_QUAD_TO) return this.current;
                 // reflect point
                var _this$current = this.current, cx = _this$current.x, cy = _this$current.y, _this$control = this.control, ox = _this$control.x, oy = _this$control.y;
                var point = new Point(2 * cx - ox, 2 * cy - oy);
                return point;
            }
        },
        {
            key: "makeAbsolute",
            value: function makeAbsolute(point) {
                if (this.command.relative) {
                    var _this$current2 = this.current, x = _this$current2.x, y = _this$current2.y;
                    point.x += x;
                    point.y += y;
                }
                return point;
            }
        },
        {
            key: "addMarker",
            value: function addMarker(point, from, priorTo) {
                var points = this.points, angles = this.angles; // if the last angle isn't filled in because we didn't have this point yet ...
                if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
                this.addMarkerAngle(point, from ? from.angleTo(point) : null);
            }
        },
        {
            key: "addMarkerAngle",
            value: function addMarkerAngle(point, angle) {
                this.points.push(point);
                this.angles.push(angle);
            }
        },
        {
            key: "getMarkerPoints",
            value: function getMarkerPoints() {
                return this.points;
            }
        },
        {
            key: "getMarkerAngles",
            value: function getMarkerAngles() {
                var angles = this.angles;
                var len = angles.length;
                for(var i = 0; i < len; i++)if (!angles[i]) {
                    for(var j = i + 1; j < len; j++)if (angles[j]) {
                        angles[i] = angles[j];
                        break;
                    }
                }
                return angles;
            }
        }
    ]);
    return PathParser2;
}(svgPathdata.SVGPathData);
function _createSuper$9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$9() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PathElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](PathElement2, _RenderedElement);
    var _super = _createSuper$9(PathElement2);
    function PathElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, PathElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'path';
        _this.pathParser = null;
        _this.pathParser = new PathParser1(_this.getAttribute('d').getString());
        return _this;
    }
    _createClass__default['default'](PathElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var pathParser = this.pathParser;
                var boundingBox = new BoundingBox();
                pathParser.reset();
                if (ctx) ctx.beginPath();
                while(!pathParser.isEnd())switch(pathParser.next().type){
                    case PathParser1.MOVE_TO:
                        this.pathM(ctx, boundingBox);
                        break;
                    case PathParser1.LINE_TO:
                        this.pathL(ctx, boundingBox);
                        break;
                    case PathParser1.HORIZ_LINE_TO:
                        this.pathH(ctx, boundingBox);
                        break;
                    case PathParser1.VERT_LINE_TO:
                        this.pathV(ctx, boundingBox);
                        break;
                    case PathParser1.CURVE_TO:
                        this.pathC(ctx, boundingBox);
                        break;
                    case PathParser1.SMOOTH_CURVE_TO:
                        this.pathS(ctx, boundingBox);
                        break;
                    case PathParser1.QUAD_TO:
                        this.pathQ(ctx, boundingBox);
                        break;
                    case PathParser1.SMOOTH_QUAD_TO:
                        this.pathT(ctx, boundingBox);
                        break;
                    case PathParser1.ARC:
                        this.pathA(ctx, boundingBox);
                        break;
                    case PathParser1.CLOSE_PATH:
                        this.pathZ(ctx, boundingBox);
                        break;
                }
                return boundingBox;
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(_) {
                return this.path();
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var pathParser = this.pathParser;
                var points = pathParser.getMarkerPoints();
                var angles = pathParser.getMarkerAngles();
                var markers = _mapInstanceProperty__default['default'](points).call(points, function(point, i) {
                    return [
                        point,
                        angles[i]
                    ];
                });
                return markers;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.path(ctx);
                this.document.screen.mouse.checkPath(this, ctx);
                var fillRuleStyleProp = this.getStyle('fill-rule');
                if (ctx.fillStyle !== '') {
                    if (fillRuleStyleProp.getString('inherit') !== 'inherit') _fillInstanceProperty__default['default'](ctx).call(ctx, fillRuleStyleProp.getString());
                    else _fillInstanceProperty__default['default'](ctx).call(ctx);
                }
                if (ctx.strokeStyle !== '') ctx.stroke();
                var markers = this.getMarkers();
                if (markers) {
                    var markersLastIndex = markers.length - 1;
                    var markerStartStyleProp = this.getStyle('marker-start');
                    var markerMidStyleProp = this.getStyle('marker-mid');
                    var markerEndStyleProp = this.getStyle('marker-end');
                    if (markerStartStyleProp.isUrlDefinition()) {
                        var marker = markerStartStyleProp.getDefinition();
                        var _markers$ = _slicedToArray__default['default'](markers[0], 2), point = _markers$[0], angle = _markers$[1];
                        marker.render(ctx, point, angle);
                    }
                    if (markerMidStyleProp.isUrlDefinition()) {
                        var _marker = markerMidStyleProp.getDefinition();
                        for(var i = 1; i < markersLastIndex; i++){
                            var _markers$i = _slicedToArray__default['default'](markers[i], 2), _point = _markers$i[0], _angle = _markers$i[1];
                            _marker.render(ctx, _point, _angle);
                        }
                    }
                    if (markerEndStyleProp.isUrlDefinition()) {
                        var _marker2 = markerEndStyleProp.getDefinition();
                        var _markers$markersLastI = _slicedToArray__default['default'](markers[markersLastIndex], 2), _point2 = _markers$markersLastI[0], _angle2 = _markers$markersLastI[1];
                        _marker2.render(ctx, _point2, _angle2);
                    }
                }
            }
        },
        {
            key: "pathM",
            value: function pathM(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathM = PathElement2.pathM(pathParser), point = _PathElement$pathM.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.moveTo(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathL = PathElement2.pathL(pathParser), current = _PathElement$pathL.current, point = _PathElement$pathL.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathH",
            value: function pathH(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathH = PathElement2.pathH(pathParser), current = _PathElement$pathH.current, point = _PathElement$pathH.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathV",
            value: function pathV(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathV = PathElement2.pathV(pathParser), current = _PathElement$pathV.current, point = _PathElement$pathV.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathC",
            value: function pathC(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathC = PathElement2.pathC(pathParser), current = _PathElement$pathC.current, point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathS = PathElement2.pathS(pathParser), current = _PathElement$pathS.current, point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathQ",
            value: function pathQ(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathQ = PathElement2.pathQ(pathParser), current = _PathElement$pathQ.current, controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathT = PathElement2.pathT(pathParser), current = _PathElement$pathT.current, controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathA",
            value: function pathA(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement$pathA = PathElement2.pathA(pathParser), currentPoint = _PathElement$pathA.currentPoint, rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad; // for markers
                var dir = 1 - sweepFlag ? 1 : -1;
                var ah = a1 + dir * (ad / 2);
                var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
                pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
                boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better
                if (ctx && !isNaN(a1) && !isNaN(ad)) {
                    var r = rX > rY ? rX : rY;
                    var sx = rX > rY ? 1 : rX / rY;
                    var sy = rX > rY ? rY / rX : 1;
                    ctx.translate(centp.x, centp.y);
                    ctx.rotate(xAxisRotation);
                    ctx.scale(sx, sy);
                    ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
                    ctx.scale(1 / sx, 1 / sy);
                    ctx.rotate(-xAxisRotation);
                    ctx.translate(-centp.x, -centp.y);
                }
            }
        },
        {
            key: "pathZ",
            value: function pathZ(ctx, boundingBox) {
                PathElement2.pathZ(this.pathParser);
                if (ctx) // only close path if it is not a straight line
                {
                    if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
                }
            }
        }
    ], [
        {
            key: "pathM",
            value: function pathM(pathParser) {
                var point = pathParser.getAsCurrentPoint();
                pathParser.start = pathParser.current;
                return {
                    point: point
                };
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getPoint('x1', 'y1');
                var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getReflectedControlPoint();
                var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getReflectedControlPoint();
                pathParser.control = controlPoint;
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var rX = command.rX, rY = command.rY, xRot = command.xRot, lArcFlag = command.lArcFlag, sweepFlag = command.sweepFlag;
                var xAxisRotation = xRot * (Math.PI / 180);
                var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                // x1', y1'
                var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2); // adjust radii
                var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
                if (l > 1) {
                    rX *= Math.sqrt(l);
                    rY *= Math.sqrt(l);
                } // cx', cy'
                var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
                if (isNaN(s)) s = 0;
                var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy
                var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle
                var a1 = vectorsAngle([
                    1,
                    0
                ], [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ]); // θ1
                // angle delta
                var u = [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ];
                var v = [
                    (-currp.x - cpp.x) / rX,
                    (-currp.y - cpp.y) / rY
                ];
                var ad = vectorsAngle(u, v); // Δθ
                if (vectorsRatio(u, v) <= -1) ad = Math.PI;
                if (vectorsRatio(u, v) >= 1) ad = 0;
                return {
                    currentPoint: currentPoint,
                    rX: rX,
                    rY: rY,
                    sweepFlag: sweepFlag,
                    xAxisRotation: xAxisRotation,
                    centp: centp,
                    a1: a1,
                    ad: ad
                };
            }
        },
        {
            key: "pathZ",
            value: function pathZ(pathParser) {
                pathParser.current = pathParser.start;
            }
        }
    ]);
    return PathElement2;
}(RenderedElement1);
function _createSuper$a(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$a() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SVGElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](SVGElement2, _RenderedElement);
    var _super = _createSuper$a(SVGElement2);
    function SVGElement2() {
        var _this;
        _classCallCheck__default['default'](this, SVGElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'svg';
        _this.root = false;
        return _this;
    }
    _createClass__default['default'](SVGElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var document = this.document;
                var screen = document.screen, window = document.window;
                var canvas = ctx.canvas;
                screen.setDefaults(ctx);
                if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
                    ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
                    var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);
                    if (fontSizeProp.hasValue()) {
                        document.rootEmSize = fontSizeProp.getPixels('y');
                        document.emSize = document.rootEmSize;
                    }
                } // create new view port
                if (!this.getAttribute('x').hasValue()) this.getAttribute('x', true).setValue(0);
                if (!this.getAttribute('y').hasValue()) this.getAttribute('y', true).setValue(0);
                var _screen$viewPort = screen.viewPort, width = _screen$viewPort.width, height = _screen$viewPort.height;
                if (!this.getStyle('width').hasValue()) this.getStyle('width', true).setValue('100%');
                if (!this.getStyle('height').hasValue()) this.getStyle('height', true).setValue('100%');
                if (!this.getStyle('color').hasValue()) this.getStyle('color', true).setValue('black');
                var refXAttr = this.getAttribute('refX');
                var refYAttr = this.getAttribute('refY');
                var viewBoxAttr = this.getAttribute('viewBox');
                var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
                var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
                var minX = 0;
                var minY = 0;
                var clipX = 0;
                var clipY = 0;
                if (viewBox) {
                    minX = viewBox[0];
                    minY = viewBox[1];
                }
                if (!this.root) {
                    width = this.getStyle('width').getPixels('x');
                    height = this.getStyle('height').getPixels('y');
                    if (this.type === 'marker') {
                        clipX = minX;
                        clipY = minY;
                        minX = 0;
                        minY = 0;
                    }
                }
                screen.viewPort.setCurrent(width, height);
                if (this.node && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) this.getStyle('transform-origin', true, true).setValue('50% 50%');
                _get__default['default'](_getPrototypeOf__default['default'](SVGElement2.prototype), "setContext", this).call(this, ctx);
                ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));
                if (viewBox) {
                    width = viewBox[2];
                    height = viewBox[3];
                }
                document.setViewBox({
                    ctx: ctx,
                    aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                    width: screen.viewPort.width,
                    desiredWidth: width,
                    height: screen.viewPort.height,
                    desiredHeight: height,
                    minX: minX,
                    minY: minY,
                    refX: refXAttr.getValue(),
                    refY: refYAttr.getValue(),
                    clip: clip,
                    clipX: clipX,
                    clipY: clipY
                });
                if (viewBox) {
                    screen.viewPort.removeCurrent();
                    screen.viewPort.setCurrent(width, height);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                _get__default['default'](_getPrototypeOf__default['default'](SVGElement2.prototype), "clearContext", this).call(this, ctx);
                this.document.screen.viewPort.removeCurrent();
            }
        },
        {
            key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var widthAttr = this.getAttribute('width', true);
                var heightAttr = this.getAttribute('height', true);
                var viewBoxAttr = this.getAttribute('viewBox');
                var styleAttr = this.getAttribute('style');
                var originWidth = widthAttr.getNumber(0);
                var originHeight = heightAttr.getNumber(0);
                if (preserveAspectRatio) {
                    if (typeof preserveAspectRatio === 'string') this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
                    else {
                        var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');
                        if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
                    }
                }
                widthAttr.setValue(width);
                heightAttr.setValue(height);
                if (!viewBoxAttr.hasValue()) {
                    var _context;
                    viewBoxAttr.setValue(_concatInstanceProperty__default['default'](_context = "0 0 ".concat(originWidth || width, " ")).call(_context, originHeight || height));
                }
                if (styleAttr.hasValue()) {
                    var widthStyle = this.getStyle('width');
                    var heightStyle = this.getStyle('height');
                    if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
                    if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
                }
            }
        }
    ]);
    return SVGElement2;
}(RenderedElement1);
function _createSuper$b(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$b() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RectElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](RectElement2, _PathElement);
    var _super = _createSuper$b(RectElement2);
    function RectElement2() {
        var _this;
        _classCallCheck__default['default'](this, RectElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'rect';
        return _this;
    }
    _createClass__default['default'](RectElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width', false, true).getPixels('x');
                var height = this.getStyle('height', false, true).getPixels('y');
                var rxAttr = this.getAttribute('rx');
                var ryAttr = this.getAttribute('ry');
                var rx = rxAttr.getPixels('x');
                var ry = ryAttr.getPixels('y');
                if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
                if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
                rx = Math.min(rx, width / 2);
                ry = Math.min(ry, height / 2);
                if (ctx) {
                    var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                    ctx.beginPath(); // always start the path so we don't fill prior paths
                    if (height > 0 && width > 0) {
                        ctx.moveTo(x + rx, y);
                        ctx.lineTo(x + width - rx, y);
                        ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                        ctx.lineTo(x + width, y + height - ry);
                        ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                        ctx.lineTo(x + rx, y + height);
                        ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                        ctx.lineTo(x, y + ry);
                        ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                        ctx.closePath();
                    }
                }
                return new BoundingBox(x, y, x + width, y + height);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return RectElement2;
}(PathElement1);
function _createSuper$c(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$c() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var CircleElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](CircleElement2, _PathElement);
    var _super = _createSuper$c(CircleElement2);
    function CircleElement2() {
        var _this;
        _classCallCheck__default['default'](this, CircleElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'circle';
        return _this;
    }
    _createClass__default['default'](CircleElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var cx = this.getAttribute('cx').getPixels('x');
                var cy = this.getAttribute('cy').getPixels('y');
                var r = this.getAttribute('r').getPixels();
                if (ctx && r > 0) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
                    ctx.closePath();
                }
                return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return CircleElement2;
}(PathElement1);
function _createSuper$d(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$d() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var EllipseElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](EllipseElement2, _PathElement);
    var _super = _createSuper$d(EllipseElement2);
    function EllipseElement2() {
        var _this;
        _classCallCheck__default['default'](this, EllipseElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'ellipse';
        return _this;
    }
    _createClass__default['default'](EllipseElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                var rx = this.getAttribute('rx').getPixels('x');
                var ry = this.getAttribute('ry').getPixels('y');
                var cx = this.getAttribute('cx').getPixels('x');
                var cy = this.getAttribute('cy').getPixels('y');
                if (ctx && rx > 0 && ry > 0) {
                    ctx.beginPath();
                    ctx.moveTo(cx + rx, cy);
                    ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
                    ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
                    ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
                    ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
                    ctx.closePath();
                }
                return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return EllipseElement2;
}(PathElement1);
function _createSuper$e(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$e() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var LineElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](LineElement2, _PathElement);
    var _super = _createSuper$e(LineElement2);
    function LineElement2() {
        var _this;
        _classCallCheck__default['default'](this, LineElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'line';
        return _this;
    }
    _createClass__default['default'](LineElement2, [
        {
            key: "getPoints",
            value: function getPoints() {
                return [
                    new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')),
                    new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))
                ];
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var _this$getPoints = this.getPoints(), _this$getPoints2 = _slicedToArray__default['default'](_this$getPoints, 2), _this$getPoints2$ = _this$getPoints2[0], x0 = _this$getPoints2$.x, y0 = _this$getPoints2$.y, _this$getPoints2$2 = _this$getPoints2[1], x1 = _this$getPoints2$2.x, y1 = _this$getPoints2$2.y;
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(x1, y1);
                }
                return new BoundingBox(x0, y0, x1, y1);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var _this$getPoints3 = this.getPoints(), _this$getPoints4 = _slicedToArray__default['default'](_this$getPoints3, 2), p0 = _this$getPoints4[0], p1 = _this$getPoints4[1];
                var a = p0.angleTo(p1);
                return [
                    [
                        p0,
                        a
                    ],
                    [
                        p1,
                        a
                    ]
                ];
            }
        }
    ]);
    return LineElement2;
}(PathElement1);
function _createSuper$f(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$f() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PolylineElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](PolylineElement2, _PathElement);
    var _super = _createSuper$f(PolylineElement2);
    function PolylineElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, PolylineElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'polyline';
        _this.points = [];
        _this.points = Point.parsePath(_this.getAttribute('points').getString());
        return _this;
    }
    _createClass__default['default'](PolylineElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var points = this.points;
                var _points = _slicedToArray__default['default'](points, 1), _points$ = _points[0], x0 = _points$.x, y0 = _points$.y;
                var boundingBox = new BoundingBox(x0, y0);
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                }
                _forEachInstanceProperty__default['default'](points).call(points, function(_ref) {
                    var x = _ref.x, y = _ref.y;
                    boundingBox.addPoint(x, y);
                    if (ctx) ctx.lineTo(x, y);
                });
                return boundingBox;
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var points = this.points;
                var lastIndex = points.length - 1;
                var markers = [];
                _forEachInstanceProperty__default['default'](points).call(points, function(point, i) {
                    if (i === lastIndex) return;
                    markers.push([
                        point,
                        point.angleTo(points[i + 1])
                    ]);
                });
                if (markers.length > 0) markers.push([
                    points[points.length - 1],
                    markers[markers.length - 1][1]
                ]);
                return markers;
            }
        }
    ]);
    return PolylineElement2;
}(PathElement1);
function _createSuper$g(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$g() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PolygonElement1 = /*#__PURE__*/ function(_PolylineElement) {
    _inherits__default['default'](PolygonElement2, _PolylineElement);
    var _super = _createSuper$g(PolygonElement2);
    function PolygonElement2() {
        var _this;
        _classCallCheck__default['default'](this, PolygonElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'polygon';
        return _this;
    }
    _createClass__default['default'](PolygonElement2, [
        {
            key: "path",
            value: function path(ctx) {
                var boundingBox = _get__default['default'](_getPrototypeOf__default['default'](PolygonElement2.prototype), "path", this).call(this, ctx);
                var _this$points = _slicedToArray__default['default'](this.points, 1), _this$points$ = _this$points[0], x = _this$points$.x, y = _this$points$.y;
                if (ctx) {
                    ctx.lineTo(x, y);
                    ctx.closePath();
                }
                return boundingBox;
            }
        }
    ]);
    return PolygonElement2;
}(PolylineElement1);
function _createSuper$h(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$h() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var PatternElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](PatternElement2, _Element);
    var _super = _createSuper$h(PatternElement2);
    function PatternElement2() {
        var _this;
        _classCallCheck__default['default'](this, PatternElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'pattern';
        return _this;
    }
    _createClass__default['default'](PatternElement2, [
        {
            key: "createPattern",
            value: function createPattern(ctx, _, parentOpacityProp) {
                var width = this.getStyle('width').getPixels('x', true);
                var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element
                var patternSvg = new SVGElement1(this.document, null);
                patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
                patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
                patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
                patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
                patternSvg.children = this.children;
                var patternCanvas = this.document.createCanvas(width, height);
                var patternCtx = patternCanvas.getContext('2d');
                var xAttr = this.getAttribute('x');
                var yAttr = this.getAttribute('y');
                if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
                if (parentOpacityProp.hasValue()) this.styles['fill-opacity'] = parentOpacityProp;
                else _Reflect$deleteProperty__default['default'](this.styles, 'fill-opacity');
                 // render 3x3 grid so when we transform there's no white space on edges
                for(var x = -1; x <= 1; x++)for(var y = -1; y <= 1; y++){
                    patternCtx.save();
                    patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
                    patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
                    patternSvg.render(patternCtx);
                    patternCtx.restore();
                }
                var pattern = ctx.createPattern(patternCanvas, 'repeat');
                return pattern;
            }
        }
    ]);
    return PatternElement2;
}(Element1);
function _createSuper$i(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$i() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MarkerElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](MarkerElement2, _Element);
    var _super = _createSuper$i(MarkerElement2);
    function MarkerElement2() {
        var _this;
        _classCallCheck__default['default'](this, MarkerElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'marker';
        return _this;
    }
    _createClass__default['default'](MarkerElement2, [
        {
            key: "render",
            value: function render(ctx, point, angle) {
                if (!point) return;
                var x = point.x, y = point.y;
                var orient = this.getAttribute('orient').getValue('auto');
                var markerUnits = this.getAttribute('markerUnits').getValue('strokeWidth');
                ctx.translate(x, y);
                if (orient === 'auto') ctx.rotate(angle);
                if (markerUnits === 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
                ctx.save(); // render me using a temporary svg element
                var markerSvg = new SVGElement1(this.document, null);
                markerSvg.type = this.type;
                markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
                markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
                markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
                markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
                markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
                markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
                markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
                markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
                markerSvg.children = this.children;
                markerSvg.render(ctx);
                ctx.restore();
                if (markerUnits === 'strokeWidth') ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
                if (orient === 'auto') ctx.rotate(-angle);
                ctx.translate(-x, -y);
            }
        }
    ]);
    return MarkerElement2;
}(Element1);
function _createSuper$j(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$j() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var DefsElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](DefsElement2, _Element);
    var _super = _createSuper$j(DefsElement2);
    function DefsElement2() {
        var _this;
        _classCallCheck__default['default'](this, DefsElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'defs';
        return _this;
    }
    _createClass__default['default'](DefsElement2, [
        {
            key: "render",
            value: function render() {
            }
        }
    ]);
    return DefsElement2;
}(Element1);
function _createSuper$k(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$k() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](GElement2, _RenderedElement);
    var _super = _createSuper$k(GElement2);
    function GElement2() {
        var _this;
        _classCallCheck__default['default'](this, GElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'g';
        return _this;
    }
    _createClass__default['default'](GElement2, [
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var _context;
                var boundingBox = new BoundingBox();
                _forEachInstanceProperty__default['default'](_context = this.children).call(_context, function(child) {
                    boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                });
                return boundingBox;
            }
        }
    ]);
    return GElement2;
}(RenderedElement1);
function _createSuper$l(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$l() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GradientElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](GradientElement2, _Element);
    var _super = _createSuper$l(GradientElement2);
    function GradientElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, GradientElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.attributesToInherit = [
            'gradientUnits'
        ];
        _this.stops = [];
        var _assertThisInitialize = _assertThisInitialized__default['default'](_this), stops = _assertThisInitialize.stops, children = _assertThisInitialize.children;
        _forEachInstanceProperty__default['default'](children).call(children, function(child) {
            if (child.type === 'stop') stops.push(child);
        });
        return _this;
    }
    _createClass__default['default'](GradientElement2, [
        {
            key: "getGradientUnits",
            value: function getGradientUnits() {
                return this.getAttribute('gradientUnits').getString('objectBoundingBox');
            }
        },
        {
            key: "createGradient",
            value: function createGradient(ctx, element, parentOpacityProp) {
                var _this2 = this;
                // tslint:disable-next-line: no-this-assignment
                var stopsContainer = this;
                if (this.getHrefAttribute().hasValue()) {
                    stopsContainer = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(stopsContainer);
                }
                var _stopsContainer = stopsContainer, stops = _stopsContainer.stops;
                var gradient = this.getGradient(ctx, element);
                if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
                _forEachInstanceProperty__default['default'](stops).call(stops, function(stop) {
                    gradient.addColorStop(stop.offset, _this2.addParentOpacity(parentOpacityProp, stop.color));
                });
                if (this.getAttribute('gradientTransform').hasValue()) {
                    // render as transformed pattern on temporary canvas
                    var document = this.document;
                    var _document$screen = document.screen, MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS, viewPort = _document$screen.viewPort;
                    var _viewPort$viewPorts = _slicedToArray__default['default'](viewPort.viewPorts, 1), rootView = _viewPort$viewPorts[0];
                    var rect = new RectElement1(document, null);
                    rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
                    rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
                    var group = new GElement1(document, null);
                    group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
                    group.children = [
                        rect
                    ];
                    var patternSvg = new SVGElement1(document, null);
                    patternSvg.attributes.x = new Property(document, 'x', 0);
                    patternSvg.attributes.y = new Property(document, 'y', 0);
                    patternSvg.attributes.width = new Property(document, 'width', rootView.width);
                    patternSvg.attributes.height = new Property(document, 'height', rootView.height);
                    patternSvg.children = [
                        group
                    ];
                    var patternCanvas = document.createCanvas(rootView.width, rootView.height);
                    var patternCtx = patternCanvas.getContext('2d');
                    patternCtx.fillStyle = gradient;
                    patternSvg.render(patternCtx);
                    return patternCtx.createPattern(patternCanvas, 'no-repeat');
                }
                return gradient;
            }
        },
        {
            key: "inheritStopContainer",
            value: function inheritStopContainer(stopsContainer) {
                var _context, _this3 = this;
                _forEachInstanceProperty__default['default'](_context = this.attributesToInherit).call(_context, function(attributeToInherit) {
                    if (!_this3.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) _this3.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
                });
            }
        },
        {
            key: "addParentOpacity",
            value: function addParentOpacity(parentOpacityProp, color) {
                if (parentOpacityProp.hasValue()) {
                    var colorProp = new Property(this.document, 'color', color);
                    return colorProp.addOpacity(parentOpacityProp).getColor();
                }
                return color;
            }
        }
    ]);
    return GradientElement2;
}(Element1);
function _createSuper$m(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$m() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var LinearGradientElement1 = /*#__PURE__*/ function(_GradientElement) {
    _inherits__default['default'](LinearGradientElement2, _GradientElement);
    var _super = _createSuper$m(LinearGradientElement2);
    function LinearGradientElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, LinearGradientElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'linearGradient';
        _this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
        return _this;
    }
    _createClass__default['default'](LinearGradientElement2, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
                var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
                    this.getAttribute('x1', true).setValue(0);
                    this.getAttribute('y1', true).setValue(0);
                    this.getAttribute('x2', true).setValue(1);
                    this.getAttribute('y2', true).setValue(0);
                }
                var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
                var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
                var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
                var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');
                if (x1 === x2 && y1 === y2) return null;
                return ctx.createLinearGradient(x1, y1, x2, y2);
            }
        }
    ]);
    return LinearGradientElement2;
}(GradientElement1);
function _createSuper$n(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$n() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var RadialGradientElement1 = /*#__PURE__*/ function(_GradientElement) {
    _inherits__default['default'](RadialGradientElement2, _GradientElement);
    var _super = _createSuper$n(RadialGradientElement2);
    function RadialGradientElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, RadialGradientElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'radialGradient';
        _this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
        return _this;
    }
    _createClass__default['default'](RadialGradientElement2, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
                var boundingBox = element.getBoundingBox(ctx);
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute('cx').hasValue()) this.getAttribute('cx', true).setValue('50%');
                if (!this.getAttribute('cy').hasValue()) this.getAttribute('cy', true).setValue('50%');
                if (!this.getAttribute('r').hasValue()) this.getAttribute('r', true).setValue('50%');
                var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
                var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
                var fx = cx;
                var fy = cy;
                if (this.getAttribute('fx').hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
                if (this.getAttribute('fy').hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
                var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
                var fr = this.getAttribute('fr').getPixels();
                return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
            }
        }
    ]);
    return RadialGradientElement2;
}(GradientElement1);
function _createSuper$o(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$o() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var StopElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](StopElement2, _Element);
    var _super = _createSuper$o(StopElement2);
    function StopElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, StopElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'stop';
        var offset = Math.max(0, Math.min(1, _this.getAttribute('offset').getNumber()));
        var stopOpacity = _this.getStyle('stop-opacity');
        var stopColor = _this.getStyle('stop-color', true);
        if (stopColor.getString() === '') stopColor.setValue('#000');
        if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
        _this.offset = offset;
        _this.color = stopColor.getColor();
        return _this;
    }
    return StopElement2;
}(Element1);
function _createSuper$p(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$p() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](AnimateElement2, _Element);
    var _super = _createSuper$p(AnimateElement2);
    function AnimateElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, AnimateElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'animate';
        _this.duration = 0;
        _this.initialValue = null;
        _this.initialUnits = '';
        _this.removed = false;
        _this.frozen = false;
        document.screen.animations.push(_assertThisInitialized__default['default'](_this));
        _this.begin = _this.getAttribute('begin').getMilliseconds();
        _this.maxDuration = _this.begin + _this.getAttribute('dur').getMilliseconds();
        _this.from = _this.getAttribute('from');
        _this.to = _this.getAttribute('to');
        _this.values = _this.getAttribute('values');
        if (_valuesInstanceProperty__default['default'](_this).hasValue()) _valuesInstanceProperty__default['default'](_this).setValue(_valuesInstanceProperty__default['default'](_this).getString().split(';'));
        return _this;
    }
    _createClass__default['default'](AnimateElement2, [
        {
            key: "getProperty",
            value: function getProperty() {
                var attributeType = this.getAttribute('attributeType').getString();
                var attributeName = this.getAttribute('attributeName').getString();
                if (attributeType === 'CSS') return this.parent.getStyle(attributeName, true);
                return this.parent.getAttribute(attributeName, true);
            }
        },
        {
            key: "calcValue",
            value: function calcValue() {
                var _context;
                var initialUnits = this.initialUnits;
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to; // tween value linearly
                var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
                if (initialUnits === '%') newValue *= 100; // numValue() returns 0-1 whereas properties are 0-100
                return _concatInstanceProperty__default['default'](_context = "".concat(newValue)).call(_context, initialUnits);
            }
        },
        {
            key: "update",
            value: function update(delta) {
                var parent = this.parent;
                var prop = this.getProperty(); // set initial value
                if (!this.initialValue) {
                    this.initialValue = prop.getString();
                    this.initialUnits = prop.getUnits();
                } // if we're past the end time
                if (this.duration > this.maxDuration) {
                    var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations
                    if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') this.duration = 0;
                    else if (fill === 'freeze' && !this.frozen) {
                        this.frozen = true;
                        parent.animationFrozen = true;
                        parent.animationFrozenValue = prop.getString();
                    } else if (fill === 'remove' && !this.removed) {
                        this.removed = true;
                        prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                        return true;
                    }
                    return false;
                }
                this.duration += delta; // if we're past the begin time
                var updated = false;
                if (this.begin < this.duration) {
                    var newValue = this.calcValue(); // tween
                    var typeAttr = this.getAttribute('type');
                    if (typeAttr.hasValue()) {
                        var _context2;
                        // for transform, etc.
                        var type = typeAttr.getString();
                        newValue = _concatInstanceProperty__default['default'](_context2 = "".concat(type, "(")).call(_context2, newValue, ")");
                    }
                    prop.setValue(newValue);
                    updated = true;
                }
                return updated;
            }
        },
        {
            key: "getProgress",
            value: function getProgress() {
                var document = this.document, values = _valuesInstanceProperty__default['default'](this);
                var result = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (values.hasValue()) {
                    var p = result.progress * (values.getValue().length - 1);
                    var lb = Math.floor(p);
                    var ub = Math.ceil(p);
                    result.from = new Property(document, 'from', _parseFloat__default['default'](values.getValue()[lb]));
                    result.to = new Property(document, 'to', _parseFloat__default['default'](values.getValue()[ub]));
                    result.progress = (p - lb) / (ub - lb);
                } else {
                    result.from = this.from;
                    result.to = this.to;
                }
                return result;
            }
        }
    ]);
    return AnimateElement2;
}(Element1);
function _createSuper$q(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$q() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateColorElement1 = /*#__PURE__*/ function(_AnimateElement) {
    _inherits__default['default'](AnimateColorElement2, _AnimateElement);
    var _super = _createSuper$q(AnimateColorElement2);
    function AnimateColorElement2() {
        var _this;
        _classCallCheck__default['default'](this, AnimateColorElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'animateColor';
        return _this;
    }
    _createClass__default['default'](AnimateColorElement2, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to;
                var colorFrom = new RGBColor__default['default'](from.getColor());
                var colorTo = new RGBColor__default['default'](to.getColor());
                if (colorFrom.ok && colorTo.ok) {
                    var _context, _context2;
                    // tween color linearly
                    var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
                    var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
                    var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha
                    return _concatInstanceProperty__default['default'](_context = _concatInstanceProperty__default['default'](_context2 = "rgb(".concat(_parseInt__default['default'](r, 10), ", ")).call(_context2, _parseInt__default['default'](g, 10), ", ")).call(_context, _parseInt__default['default'](b, 10), ")");
                }
                return this.getAttribute('from').getColor();
            }
        }
    ]);
    return AnimateColorElement2;
}(AnimateElement1);
function _createSuper$r(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$r() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AnimateTransformElement1 = /*#__PURE__*/ function(_AnimateElement) {
    _inherits__default['default'](AnimateTransformElement2, _AnimateElement);
    var _super = _createSuper$r(AnimateTransformElement2);
    function AnimateTransformElement2() {
        var _this;
        _classCallCheck__default['default'](this, AnimateTransformElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'animateTransform';
        return _this;
    }
    _createClass__default['default'](AnimateTransformElement2, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to; // tween value linearly
                var transformFrom = toNumbers(from.getString());
                var transformTo = toNumbers(to.getString());
                var newValue = _mapInstanceProperty__default['default'](transformFrom).call(transformFrom, function(from1, i) {
                    var to1 = transformTo[i];
                    return from1 + (to1 - from1) * progress;
                }).join(' ');
                return newValue;
            }
        }
    ]);
    return AnimateTransformElement2;
}(AnimateElement1);
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof _Symbol__default['default'] === "undefined" || _getIteratorMethod__default['default'](o) == null) {
        if (_Array$isArray__default['default'](o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = _getIterator__default['default'](o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    var _context;
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = _sliceInstanceProperty__default['default'](_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return _Array$from__default['default'](o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createSuper$s(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$s() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FontElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FontElement2, _Element);
    var _super = _createSuper$s(FontElement2);
    function FontElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, FontElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'font';
        _this.glyphs = {
        };
        _this.horizAdvX = _this.getAttribute('horiz-adv-x').getNumber();
        var definitions = document.definitions;
        var _assertThisInitialize = _assertThisInitialized__default['default'](_this), children = _assertThisInitialize.children;
        var _iterator = _createForOfIteratorHelper(children), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var child = _step.value;
                switch(child.type){
                    case 'font-face':
                        _this.fontFace = child;
                        var fontFamilyStyle = child.getStyle('font-family');
                        if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = _assertThisInitialized__default['default'](_this);
                        break;
                    case 'missing-glyph':
                        _this.missingGlyph = child;
                        break;
                    case 'glyph':
                        var glyph = child;
                        if (glyph.arabicForm) {
                            _this.isRTL = true;
                            _this.isArabic = true;
                            if (typeof _this.glyphs[glyph.unicode] === 'undefined') _this.glyphs[glyph.unicode] = {
                            };
                            _this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                        } else _this.glyphs[glyph.unicode] = glyph;
                        break;
                    default:
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return _this;
    }
    _createClass__default['default'](FontElement2, [
        {
            key: "render",
            value: function render() {
            }
        }
    ]);
    return FontElement2;
}(Element1);
function _createSuper$t(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$t() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FontFaceElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FontFaceElement2, _Element);
    var _super = _createSuper$t(FontFaceElement2);
    function FontFaceElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, FontFaceElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'font-face';
        _this.ascent = _this.getAttribute('ascent').getNumber();
        _this.descent = _this.getAttribute('descent').getNumber();
        _this.unitsPerEm = _this.getAttribute('units-per-em').getNumber();
        return _this;
    }
    return FontFaceElement2;
}(Element1);
function _createSuper$u(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$u() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MissingGlyphElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](MissingGlyphElement2, _PathElement);
    var _super = _createSuper$u(MissingGlyphElement2);
    function MissingGlyphElement2() {
        var _this;
        _classCallCheck__default['default'](this, MissingGlyphElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'missing-glyph';
        _this.horizAdvX = 0;
        return _this;
    }
    return MissingGlyphElement2;
}(PathElement1);
function _createSuper$v(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$v() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var GlyphElement1 = /*#__PURE__*/ function(_PathElement) {
    _inherits__default['default'](GlyphElement2, _PathElement);
    var _super = _createSuper$v(GlyphElement2);
    function GlyphElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, GlyphElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'glyph';
        _this.horizAdvX = _this.getAttribute('horiz-adv-x').getNumber();
        _this.unicode = _this.getAttribute('unicode').getString();
        _this.arabicForm = _this.getAttribute('arabic-form').getString();
        return _this;
    }
    return GlyphElement2;
}(PathElement1);
function _createSuper$w(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$w();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$w() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TRefElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default['default'](TRefElement2, _TextElement);
    var _super = _createSuper$w(TRefElement2);
    function TRefElement2() {
        var _this;
        _classCallCheck__default['default'](this, TRefElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'tref';
        return _this;
    }
    _createClass__default['default'](TRefElement2, [
        {
            key: "getText",
            value: function getText() {
                var element = this.getHrefAttribute().getDefinition();
                if (element) {
                    var firstChild = element.children[0];
                    if (firstChild) return firstChild.getText();
                }
                return '';
            }
        }
    ]);
    return TRefElement2;
}(TextElement1);
function _createSuper$x(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$x();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$x() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var AElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default['default'](AElement2, _TextElement);
    var _super = _createSuper$x(AElement2);
    function AElement2(document, node, captureTextNodes) {
        var _context;
        var _this;
        _classCallCheck__default['default'](this, AElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'a';
        var childNodes = node.childNodes;
        var firstChild = childNodes[0];
        var hasText = childNodes.length > 0 && _everyInstanceProperty__default['default'](_context = _Array$from__default['default'](childNodes)).call(_context, function(node1) {
            return node1.nodeType === 3;
        });
        _this.hasText = hasText;
        _this.text = hasText ? _this.getTextFromNode(firstChild) : '';
        return _this;
    }
    _createClass__default['default'](AElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                if (this.hasText) {
                    // render as text element
                    _get__default['default'](_getPrototypeOf__default['default'](AElement2.prototype), "renderChildren", this).call(this, ctx);
                    var document = this.document, x = this.x, y = this.y;
                    var mouse = document.screen.mouse;
                    var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.
                    if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
                } else if (this.children.length > 0) {
                    // render as temporary group
                    var g = new GElement1(this.document, null);
                    g.children = this.children;
                    g.parent = this;
                    g.render(ctx);
                }
            }
        },
        {
            key: "onClick",
            value: function onClick() {
                var window = this.document.window;
                if (window) window.open(this.getHrefAttribute().getString());
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove() {
                var ctx = this.document.ctx;
                ctx.canvas.style.cursor = 'pointer';
            }
        }
    ]);
    return AElement2;
}(TextElement1);
function _createForOfIteratorHelper$1(o, allowArrayLike) {
    var it;
    if (typeof _Symbol__default['default'] === "undefined" || _getIteratorMethod__default['default'](o) == null) {
        if (_Array$isArray__default['default'](o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = _getIterator__default['default'](o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$1(o, minLen) {
    var _context5;
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = _sliceInstanceProperty__default['default'](_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return _Array$from__default['default'](o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = _Object$keys__default['default'](object);
    if (_Object$getOwnPropertySymbols__default['default']) {
        var symbols = _Object$getOwnPropertySymbols__default['default'](object);
        if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function(sym) {
            return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) {
            var _context3;
            _forEachInstanceProperty__default['default'](_context3 = ownKeys(Object(source), true)).call(_context3, function(key) {
                _defineProperty__default['default'](target, key, source[key]);
            });
        } else if (_Object$getOwnPropertyDescriptors__default['default']) _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source));
        else {
            var _context4;
            _forEachInstanceProperty__default['default'](_context4 = ownKeys(Object(source))).call(_context4, function(key) {
                _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key));
            });
        }
    }
    return target;
}
function _createSuper$y(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$y();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$y() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TextPathElement1 = /*#__PURE__*/ function(_TextElement) {
    _inherits__default['default'](TextPathElement2, _TextElement);
    var _super = _createSuper$y(TextPathElement2);
    function TextPathElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, TextPathElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'textPath';
        _this.textWidth = 0;
        _this.textHeight = 0;
        _this.pathLength = -1;
        _this.glyphInfo = null;
        _this.letterSpacingCache = [];
        _this.measuresCache = new _Map__default['default']([
            [
                '',
                0
            ]
        ]);
        var pathElement = _this.getHrefAttribute().getDefinition();
        _this.text = _this.getTextFromNode();
        _this.dataArray = _this.parsePathData(pathElement);
        return _this;
    }
    _createClass__default['default'](TextPathElement2, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var dataArray = this.dataArray;
                if (ctx) ctx.beginPath();
                _forEachInstanceProperty__default['default'](dataArray).call(dataArray, function(_ref) {
                    var type = _ref.type, points = _ref.points;
                    switch(type){
                        case PathParser1.LINE_TO:
                            if (ctx) ctx.lineTo(points[0], points[1]);
                            break;
                        case PathParser1.MOVE_TO:
                            if (ctx) ctx.moveTo(points[0], points[1]);
                            break;
                        case PathParser1.CURVE_TO:
                            if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                            break;
                        case PathParser1.QUAD_TO:
                            if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                            break;
                        case PathParser1.ARC:
                            var _points = _slicedToArray__default['default'](points, 8), cx = _points[0], cy = _points[1], rx = _points[2], ry = _points[3], theta = _points[4], dTheta = _points[5], psi = _points[6], fs = _points[7];
                            var r = rx > ry ? rx : ry;
                            var scaleX = rx > ry ? 1 : rx / ry;
                            var scaleY = rx > ry ? ry / rx : 1;
                            if (ctx) {
                                ctx.translate(cx, cy);
                                ctx.rotate(psi);
                                ctx.scale(scaleX, scaleY);
                                ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                                ctx.scale(1 / scaleX, 1 / scaleY);
                                ctx.rotate(-psi);
                                ctx.translate(-cx, -cy);
                            }
                            break;
                        case PathParser1.CLOSE_PATH:
                            if (ctx) ctx.closePath();
                            break;
                    }
                });
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.setTextData(ctx);
                ctx.save();
                var textDecoration = this.parent.getStyle('text-decoration').getString();
                var fontSize = this.getFontSize();
                var glyphInfo = this.glyphInfo;
                var fill = ctx.fillStyle;
                if (textDecoration === 'underline') ctx.beginPath();
                _forEachInstanceProperty__default['default'](glyphInfo).call(glyphInfo, function(glyph, i) {
                    var p0 = glyph.p0, p1 = glyph.p1, rotation = glyph.rotation, partialText = glyph.text;
                    ctx.save();
                    ctx.translate(p0.x, p0.y);
                    ctx.rotate(rotation);
                    if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
                    if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
                    ctx.restore();
                    if (textDecoration === 'underline') {
                        if (i === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
                        ctx.lineTo(p1.x, p1.y + fontSize / 5);
                    } //// To assist with debugging visually, uncomment following
                //
                // ctx.beginPath();
                // if (i % 2)
                // 	ctx.strokeStyle = 'red';
                // else
                // 	ctx.strokeStyle = 'green';
                // ctx.moveTo(p0.x, p0.y);
                // ctx.lineTo(p1.x, p1.y);
                // ctx.stroke();
                // ctx.closePath();
                });
                if (textDecoration === 'underline') {
                    ctx.lineWidth = fontSize / 20;
                    ctx.strokeStyle = fill;
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.restore();
            }
        },
        {
            key: "getLetterSpacingAt",
            value: function getLetterSpacingAt() {
                var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return this.letterSpacingCache[idx] || 0;
            }
        },
        {
            key: "findSegmentToFitChar",
            value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
                var offset = inputOffset;
                var glyphWidth = this.measureText(ctx, c);
                if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
                if (charI > -1) offset += this.getLetterSpacingAt(charI);
                var splineStep = this.textHeight / 20;
                var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
                var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
                var segment = {
                    p0: p0,
                    p1: p1
                };
                var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
                if (dy) {
                    var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
                    var dyY = Math.cos(-rotation) * dy;
                    segment.p0 = _objectSpread(_objectSpread({
                    }, p0), {
                    }, {
                        x: p0.x + dyX,
                        y: p0.y + dyY
                    });
                    segment.p1 = _objectSpread(_objectSpread({
                    }, p1), {
                    }, {
                        x: p1.x + dyX,
                        y: p1.y + dyY
                    });
                }
                offset += glyphWidth;
                return {
                    offset: offset,
                    segment: segment,
                    rotation: rotation
                };
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx, text) {
                var measuresCache = this.measuresCache;
                var targetText = text || this.getText();
                if (measuresCache.has(targetText)) return measuresCache.get(targetText);
                var measure = this.measureTargetText(ctx, targetText);
                measuresCache.set(targetText, measure);
                return measure;
            }
        },
        {
            key: "setTextData",
            value: function setTextData(ctx) {
                var _context, _this2 = this;
                if (this.glyphInfo) return;
                var renderText = this.getText();
                var chars = renderText.split('');
                var spacesNumber = renderText.split(' ').length - 1;
                var dx = _mapInstanceProperty__default['default'](_context = this.parent.getAttribute('dx').split()).call(_context, function(_) {
                    return _.getPixels('x');
                });
                var dy = this.parent.getAttribute('dy').getPixels('y');
                var anchor = this.parent.getStyle('text-anchor').getString('start');
                var thisSpacing = this.getStyle('letter-spacing');
                var parentSpacing = this.parent.getStyle('letter-spacing');
                var letterSpacing = 0;
                if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') letterSpacing = parentSpacing.getPixels();
                else if (thisSpacing.hasValue()) {
                    if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') letterSpacing = thisSpacing.getPixels();
                } // fill letter-spacing cache
                var letterSpacingCache = [];
                var textLen = renderText.length;
                this.letterSpacingCache = letterSpacingCache;
                for(var i = 0; i < textLen; i++)letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
                var dxSum = _reduceInstanceProperty__default['default'](letterSpacingCache).call(letterSpacingCache, function(acc, cur, i1) {
                    return i1 === 0 ? 0 : acc + cur || 0;
                }, 0);
                var textWidth = this.measureText(ctx);
                var textFullWidth = Math.max(textWidth + dxSum, 0);
                this.textWidth = textWidth;
                this.textHeight = this.getFontSize();
                this.glyphInfo = [];
                var fullPathWidth = this.getPathLength();
                var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
                var offset = 0;
                if (anchor === 'middle' || anchor === 'center') offset = -textFullWidth / 2;
                if (anchor === 'end' || anchor === 'right') offset = -textFullWidth;
                offset += startOffset;
                _forEachInstanceProperty__default['default'](chars).call(chars, function(char, i1) {
                    // Find such segment what distance between p0 and p1 is approx. width of glyph
                    var _this2$findSegmentToF = _this2.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i1), nextOffset = _this2$findSegmentToF.offset, segment = _this2$findSegmentToF.segment, rotation = _this2$findSegmentToF.rotation;
                    offset = nextOffset;
                    if (!segment.p0 || !segment.p1) return;
                     // const width = this.getLineLength(
                    // 	segment.p0.x,
                    // 	segment.p0.y,
                    // 	segment.p1.x,
                    // 	segment.p1.y
                    // );
                    // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
                    // Can foresee having a rough pair table built in that the developer can override as needed.
                    // Or use "dx" attribute of the <text> node as a naive replacement
                    // const kern = 0;
                    // placeholder for future implementation
                    // const midpoint = this.getPointOnLine(
                    // 	kern + width / 2.0,
                    // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
                    // );
                    _this2.glyphInfo.push({
                        // transposeX: midpoint.x,
                        // transposeY: midpoint.y,
                        text: chars[i1],
                        p0: segment.p0,
                        p1: segment.p1,
                        rotation: rotation
                    });
                });
            }
        },
        {
            key: "parsePathData",
            value: function parsePathData(path) {
                this.pathLength = -1; // reset path length
                if (!path) return [];
                var pathCommands = [];
                var pathParser = path.pathParser;
                pathParser.reset(); // convert l, H, h, V, and v to L
                while(!pathParser.isEnd()){
                    var current = pathParser.current;
                    var startX = current ? current.x : 0;
                    var startY = current ? current.y : 0;
                    var command = pathParser.next();
                    var nextCommandType = command.type;
                    var points = [];
                    switch(command.type){
                        case PathParser1.MOVE_TO:
                            this.pathM(pathParser, points);
                            break;
                        case PathParser1.LINE_TO:
                            nextCommandType = this.pathL(pathParser, points);
                            break;
                        case PathParser1.HORIZ_LINE_TO:
                            nextCommandType = this.pathH(pathParser, points);
                            break;
                        case PathParser1.VERT_LINE_TO:
                            nextCommandType = this.pathV(pathParser, points);
                            break;
                        case PathParser1.CURVE_TO:
                            this.pathC(pathParser, points);
                            break;
                        case PathParser1.SMOOTH_CURVE_TO:
                            nextCommandType = this.pathS(pathParser, points);
                            break;
                        case PathParser1.QUAD_TO:
                            this.pathQ(pathParser, points);
                            break;
                        case PathParser1.SMOOTH_QUAD_TO:
                            nextCommandType = this.pathT(pathParser, points);
                            break;
                        case PathParser1.ARC:
                            points = this.pathA(pathParser);
                            break;
                        case PathParser1.CLOSE_PATH:
                            PathElement1.pathZ(pathParser);
                            break;
                    }
                    if (command.type !== PathParser1.CLOSE_PATH) pathCommands.push({
                        type: nextCommandType,
                        points: points,
                        start: {
                            x: startX,
                            y: startY
                        },
                        pathLength: this.calcLength(startX, startY, nextCommandType, points)
                    });
                    else pathCommands.push({
                        type: PathParser1.CLOSE_PATH,
                        points: [],
                        pathLength: 0
                    });
                }
                return pathCommands;
            }
        },
        {
            key: "pathM",
            value: function pathM(pathParser, points) {
                var _PathElement$pathM$po = PathElement1.pathM(pathParser).point, x = _PathElement$pathM$po.x, y = _PathElement$pathM$po.y;
                points.push(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser, points) {
                var _PathElement$pathL$po = PathElement1.pathL(pathParser).point, x = _PathElement$pathL$po.x, y = _PathElement$pathL$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser, points) {
                var _PathElement$pathH$po = PathElement1.pathH(pathParser).point, x = _PathElement$pathH$po.x, y = _PathElement$pathH$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser, points) {
                var _PathElement$pathV$po = PathElement1.pathV(pathParser).point, x = _PathElement$pathV$po.x, y = _PathElement$pathV$po.y;
                points.push(x, y);
                return PathParser1.LINE_TO;
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser, points) {
                var _PathElement$pathC = PathElement1.pathC(pathParser), point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser, points) {
                var _PathElement$pathS = PathElement1.pathS(pathParser), point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser1.CURVE_TO;
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser, points) {
                var _PathElement$pathQ = PathElement1.pathQ(pathParser), controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser, points) {
                var _PathElement$pathT = PathElement1.pathT(pathParser), controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser1.QUAD_TO;
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var _PathElement$pathA = PathElement1.pathA(pathParser), rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad;
                if (sweepFlag === 0 && ad > 0) ad = ad - 2 * Math.PI;
                if (sweepFlag === 1 && ad < 0) ad = ad + 2 * Math.PI;
                return [
                    centp.x,
                    centp.y,
                    rX,
                    rY,
                    a1,
                    ad,
                    xAxisRotation,
                    sweepFlag
                ];
            }
        },
        {
            key: "calcLength",
            value: function calcLength(x, y, commandType, points) {
                var len = 0;
                var p1 = null;
                var p2 = null;
                var t = 0;
                switch(commandType){
                    case PathParser1.LINE_TO:
                        return this.getLineLength(x, y, points[0], points[1]);
                    case PathParser1.CURVE_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0;
                        p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser1.QUAD_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0;
                        p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser1.ARC:
                        // Approximates by breaking curve into line segments
                        len = 0;
                        var start = points[4]; // 4 = theta
                        var dTheta = points[5]; // 5 = dTheta
                        var end = points[4] + dTheta;
                        var inc = Math.PI / 180; // 1 degree resolution
                        if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                         // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                        p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                        if (dTheta < 0) // clockwise
                        for(t = start - inc; t > end; t -= inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        else // counter-clockwise
                        for(t = start + inc; t < end; t += inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        return len;
                }
                return 0;
            }
        },
        {
            key: "getPointOnLine",
            value: function getPointOnLine(dist, P1x, P1y, P2x, P2y) {
                var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : P1x;
                var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : P1y;
                var m = (P2y - P1y) / (P2x - P1x + PSEUDO_ZERO);
                var run = Math.sqrt(dist * dist / (1 + m * m));
                if (P2x < P1x) run *= -1;
                var rise = m * run;
                var pt = null;
                if (P2x === P1x) // vertical line
                pt = {
                    x: fromX,
                    y: fromY + rise
                };
                else if ((fromY - P1y) / (fromX - P1x + PSEUDO_ZERO) === m) pt = {
                    x: fromX + run,
                    y: fromY + rise
                };
                else {
                    var ix = 0;
                    var iy = 0;
                    var len = this.getLineLength(P1x, P1y, P2x, P2y);
                    if (len < PSEUDO_ZERO) return null;
                    var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
                    u = u / (len * len);
                    ix = P1x + u * (P2x - P1x);
                    iy = P1y + u * (P2y - P1y);
                    var pRise = this.getLineLength(fromX, fromY, ix, iy);
                    var pRun = Math.sqrt(dist * dist - pRise * pRise);
                    run = Math.sqrt(pRun * pRun / (1 + m * m));
                    if (P2x < P1x) run *= -1;
                    rise = m * run;
                    pt = {
                        x: ix + run,
                        y: iy + rise
                    };
                }
                return pt;
            }
        },
        {
            key: "getPointOnPath",
            value: function getPointOnPath(distance) {
                var fullLen = this.getPathLength();
                var cumulativePathLength = 0;
                var p = null;
                if (distance < -0.00005 || distance - 0.00005 > fullLen) return null;
                var dataArray = this.dataArray;
                var _iterator = _createForOfIteratorHelper$1(dataArray), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var command = _step.value;
                        if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
                            cumulativePathLength += command.pathLength;
                            continue;
                        }
                        var delta = distance - cumulativePathLength;
                        var currentT = 0;
                        switch(command.type){
                            case PathParser1.LINE_TO:
                                p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                                break;
                            case PathParser1.ARC:
                                var start = command.points[4]; // 4 = theta
                                var dTheta = command.points[5]; // 5 = dTheta
                                var end = command.points[4] + dTheta;
                                currentT = start + delta / command.pathLength * dTheta;
                                if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
                                p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                                break;
                            case PathParser1.CURVE_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                                break;
                            case PathParser1.QUAD_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                                break;
                            default:
                        }
                        if (p) return p;
                        break;
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                return null;
            }
        },
        {
            key: "getLineLength",
            value: function getLineLength(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
        },
        {
            key: "getPathLength",
            value: function getPathLength() {
                if (this.pathLength === -1) {
                    var _context2;
                    this.pathLength = _reduceInstanceProperty__default['default'](_context2 = this.dataArray).call(_context2, function(length, command) {
                        return command.pathLength > 0 ? length + command.pathLength : length;
                    }, 0);
                }
                return this.pathLength;
            }
        },
        {
            key: "getPointOnCubicBezier",
            value: function getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
                var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
                var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnQuadraticBezier",
            value: function getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
                var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
                var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnEllipticalArc",
            value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
                var cosPsi = Math.cos(psi);
                var sinPsi = Math.sin(psi);
                var pt = {
                    x: rx * Math.cos(theta),
                    y: ry * Math.sin(theta)
                };
                return {
                    x: cx + (pt.x * cosPsi - pt.y * sinPsi),
                    y: cy + (pt.x * sinPsi + pt.y * cosPsi)
                };
            }
        },
        {
            key: "buildEquidistantCache",
            value: function buildEquidistantCache(inputStep, inputPrecision) {
                var fullLen = this.getPathLength();
                var precision = inputPrecision || 0.25; // accuracy vs performance
                var step = inputStep || fullLen / 100;
                if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
                    // Prepare cache
                    this.equidistantCache = {
                        step: step,
                        precision: precision,
                        points: []
                    }; // Calculate points
                    var s = 0;
                    for(var l = 0; l <= fullLen; l += precision){
                        var p0 = this.getPointOnPath(l);
                        var p1 = this.getPointOnPath(l + precision);
                        if (!p0 || !p1) continue;
                        s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
                        if (s >= step) {
                            this.equidistantCache.points.push({
                                x: p0.x,
                                y: p0.y,
                                distance: l
                            });
                            s -= step;
                        }
                    }
                }
            }
        },
        {
            key: "getEquidistantPointOnPath",
            value: function getEquidistantPointOnPath(targetDistance, step, precision) {
                this.buildEquidistantCache(step, precision);
                if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) return null;
                var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
                return this.equidistantCache.points[idx] || null;
            }
        }
    ]);
    return TextPathElement2;
}(TextElement1);
function _createSuper$z(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$z();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$z() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var ImageElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](ImageElement2, _RenderedElement);
    var _super = _createSuper$z(ImageElement2);
    function ImageElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, ImageElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'image';
        _this.loaded = false;
        var href = _this.getHrefAttribute().getString();
        if (!href) return _possibleConstructorReturn__default['default'](_this);
        var isSvg = /\.svg$/.test(href);
        document.images.push(_assertThisInitialized__default['default'](_this));
        if (!isSvg) _this.loadImage(href);
        else _this.loadSvg(href);
        _this.isSvg = isSvg;
        return _this;
    }
    _createClass__default['default'](ImageElement2, [
        {
            key: "loadImage",
            value: function() {
                var _loadImage = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee(href) {
                    var image;
                    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.document.createImage(href);
                            case 3:
                                image = _context.sent;
                                this.image = image;
                                _context.next = 10;
                                break;
                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);
                                // tslint:disable-next-line: no-console
                                console.error("Error while loading image \"".concat(href, "\":"), _context.t0);
                            case 10:
                                this.loaded = true;
                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            7
                        ]
                    ]);
                }));
                function loadImage(_x) {
                    return _loadImage.apply(this, arguments);
                }
                return loadImage;
            }()
        },
        {
            key: "loadSvg",
            value: function() {
                var _loadSvg = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee2(href) {
                    var response, svg;
                    return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return this.document.fetch(href);
                            case 3:
                                response = _context2.sent;
                                _context2.next = 6;
                                return response.text();
                            case 6:
                                svg = _context2.sent;
                                this.image = svg;
                                _context2.next = 13;
                                break;
                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2["catch"](0);
                                // tslint:disable-next-line: no-console
                                console.error("Error while loading image \"".concat(href, "\":"), _context2.t0);
                            case 13:
                                this.loaded = true;
                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this, [
                        [
                            0,
                            10
                        ]
                    ]);
                }));
                function loadSvg(_x2) {
                    return _loadSvg.apply(this, arguments);
                }
                return loadSvg;
            }()
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var document = this.document, image = this.image, loaded = this.loaded;
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                if (!loaded || !image || !width || !height) return;
                ctx.save();
                if (this.isSvg) document.canvg.forkString(ctx, this.image, {
                    ignoreMouse: true,
                    ignoreAnimation: true,
                    ignoreDimensions: true,
                    ignoreClear: true,
                    offsetX: x,
                    offsetY: y,
                    scaleWidth: width,
                    scaleHeight: height
                }).render();
                else {
                    var _image = this.image;
                    ctx.translate(x, y);
                    document.setViewBox({
                        ctx: ctx,
                        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                        width: width,
                        desiredWidth: _image.width,
                        height: height,
                        desiredHeight: _image.height
                    });
                    if (this.loaded) {
                        if (typeof _image.complete === 'undefined' || _image.complete) ctx.drawImage(_image, 0, 0);
                    }
                }
                ctx.restore();
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox() {
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                return new BoundingBox(x, y, x + width, y + height);
            }
        }
    ]);
    return ImageElement2;
}(RenderedElement1);
function _createSuper$A(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$A();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$A() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var SymbolElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](SymbolElement2, _RenderedElement);
    var _super = _createSuper$A(SymbolElement2);
    function SymbolElement2() {
        var _this;
        _classCallCheck__default['default'](this, SymbolElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'symbol';
        return _this;
    }
    _createClass__default['default'](SymbolElement2, [
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return SymbolElement2;
}(RenderedElement1);
var SVGFontLoader = /*#__PURE__*/ function() {
    function SVGFontLoader1(document) {
        _classCallCheck__default['default'](this, SVGFontLoader1);
        this.document = document;
        this.loaded = false;
        document.fonts.push(this);
    }
    _createClass__default['default'](SVGFontLoader1, [
        {
            key: "load",
            value: function() {
                var _load = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee(fontFamily, url) {
                    var _context, document, svgDocument, fonts;
                    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.prev = 0;
                                document = this.document;
                                _context2.next = 4;
                                return document.canvg.parser.load(url);
                            case 4:
                                svgDocument = _context2.sent;
                                fonts = svgDocument.getElementsByTagName('font');
                                _forEachInstanceProperty__default['default'](_context = _Array$from__default['default'](fonts)).call(_context, function(fontNode) {
                                    var font = document.createElement(fontNode);
                                    document.definitions[fontFamily] = font;
                                });
                                _context2.next = 12;
                                break;
                            case 9:
                                _context2.prev = 9;
                                _context2.t0 = _context2["catch"](0);
                                // tslint:disable-next-line: no-console
                                console.error("Error while loading font \"".concat(url, "\":"), _context2.t0);
                            case 12:
                                this.loaded = true;
                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            9
                        ]
                    ]);
                }));
                function load(_x, _x2) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }
    ]);
    return SVGFontLoader1;
}();
function _createSuper$B(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$B();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$B() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var StyleElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](StyleElement2, _Element);
    var _super = _createSuper$B(StyleElement2);
    function StyleElement2(document, node, captureTextNodes) {
        var _context;
        var _this;
        _classCallCheck__default['default'](this, StyleElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'style';
        var css = compressSpaces(_mapInstanceProperty__default['default'](_context = _Array$from__default['default'](node.childNodes)).call(_context, function(_) {
            return _.data;
        }).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '').replace(/@import.*;/g, '')// remove imports
        );
        var cssDefs = css.split('}');
        _forEachInstanceProperty__default['default'](cssDefs).call(cssDefs, function(_) {
            var def = _trimInstanceProperty__default['default'](_).call(_);
            if (!def) return;
            var cssParts = def.split('{');
            var cssClasses = cssParts[0].split(',');
            var cssProps = cssParts[1].split(';');
            _forEachInstanceProperty__default['default'](cssClasses).call(cssClasses, function(_1) {
                var cssClass = _trimInstanceProperty__default['default'](_1).call(_1);
                if (!cssClass) return;
                var props = document.styles[cssClass] || {
                };
                _forEachInstanceProperty__default['default'](cssProps).call(cssProps, function(cssProp) {
                    var _context2, _context3;
                    var prop = _indexOfInstanceProperty__default['default'](cssProp).call(cssProp, ':');
                    var name = _trimInstanceProperty__default['default'](_context2 = cssProp.substr(0, prop)).call(_context2);
                    var value = _trimInstanceProperty__default['default'](_context3 = cssProp.substr(prop + 1, cssProp.length - prop)).call(_context3);
                    if (name && value) props[name] = new Property(document, name, value);
                });
                document.styles[cssClass] = props;
                document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                if (cssClass === '@font-face') {
                    //  && !nodeEnv
                    var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
                    var srcs = props.src.getString().split(',');
                    _forEachInstanceProperty__default['default'](srcs).call(srcs, function(src) {
                        if (_indexOfInstanceProperty__default['default'](src).call(src, 'format("svg")') > 0) {
                            var url = parseExternalUrl(src);
                            if (url) new SVGFontLoader(document).load(fontFamily, url);
                        }
                    });
                }
            });
        });
        return _this;
    }
    return StyleElement2;
}(Element1);
StyleElement1.parseExternalUrl = parseExternalUrl;
function _createSuper$C(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$C();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$C() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var UseElement1 = /*#__PURE__*/ function(_RenderedElement) {
    _inherits__default['default'](UseElement2, _RenderedElement);
    var _super = _createSuper$C(UseElement2);
    function UseElement2() {
        var _this;
        _classCallCheck__default['default'](this, UseElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'use';
        return _this;
    }
    _createClass__default['default'](UseElement2, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                _get__default['default'](_getPrototypeOf__default['default'](UseElement2.prototype), "setContext", this).call(this, ctx);
                var xAttr = this.getAttribute('x');
                var yAttr = this.getAttribute('y');
                if (xAttr.hasValue()) ctx.translate(xAttr.getPixels('x'), 0);
                if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels('y'));
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var element = this.element;
                if (element) element.path(ctx);
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var document = this.document, element = this.element;
                if (element) {
                    var tempSvg = element;
                    if (element.type === 'symbol') {
                        // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                        tempSvg = new SVGElement1(document, null);
                        tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
                        tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
                        tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
                        tempSvg.children = element.children; // element is still the parent of the children
                        element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
                    }
                    if (tempSvg.type === 'svg') {
                        var widthStyle = this.getStyle('width', false, true);
                        var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me
                        if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
                        if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
                    }
                    var oldParent = tempSvg.parent;
                    tempSvg.parent = this;
                    tempSvg.render(ctx);
                    tempSvg.parent = oldParent;
                }
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var element = this.element;
                if (element) return element.getBoundingBox(ctx);
                return null;
            }
        },
        {
            key: "elementTransform",
            value: function elementTransform() {
                var document = this.document, element = this.element;
                return Transform.fromElement(document, element);
            }
        },
        {
            key: "element",
            get: function get() {
                if (!this._element) this._element = this.getHrefAttribute().getDefinition();
                return this._element;
            }
        }
    ]);
    return UseElement2;
}(RenderedElement1);
function _createSuper$D(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$D();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$D() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function imGet(img, x, y, width, _, rgba) {
    return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _, rgba, val) {
    img[y * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i, v) {
    var mi = matrix[i];
    return mi * v;
}
function c(a, m1, m2, m3) {
    return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
var FeColorMatrixElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FeColorMatrixElement2, _Element);
    var _super = _createSuper$D(FeColorMatrixElement2);
    function FeColorMatrixElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, FeColorMatrixElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'feColorMatrix';
        var matrix = toNumbers(_this.getAttribute('values').getString());
        switch(_this.getAttribute('type').getString('matrix')){
            // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
            case 'saturate':
                var s = matrix[0];
                matrix = [
                    0.213 + 0.787 * s,
                    0.715 - 0.715 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 + 0.285 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 - 0.715 * s,
                    0.072 + 0.928 * s,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case 'hueRotate':
                var a = matrix[0] * Math.PI / 180;
                matrix = [
                    c(a, 0.213, 0.787, -0.213),
                    c(a, 0.715, -0.715, -0.715),
                    c(a, 0.072, -0.072, 0.928),
                    0,
                    0,
                    c(a, 0.213, -0.213, 0.143),
                    c(a, 0.715, 0.285, 0.14),
                    c(a, 0.072, -0.072, -0.283),
                    0,
                    0,
                    c(a, 0.213, -0.213, -0.787),
                    c(a, 0.715, -0.715, 0.715),
                    c(a, 0.072, 0.928, 0.072),
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case 'luminanceToAlpha':
                matrix = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0.2125,
                    0.7154,
                    0.0721,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
        }
        _this.matrix = matrix;
        _this.includeOpacity = _this.getAttribute('includeOpacity').hasValue();
        return _this;
    }
    _createClass__default['default'](FeColorMatrixElement2, [
        {
            key: "apply",
            value: function apply(ctx, _, __, width, height) {
                // assuming x==0 && y==0 for now
                var includeOpacity = this.includeOpacity, matrix = this.matrix;
                var srcData = ctx.getImageData(0, 0, width, height);
                for(var y = 0; y < height; y++)for(var x = 0; x < width; x++){
                    var r = imGet(srcData.data, x, y, width, height, 0);
                    var g = imGet(srcData.data, x, y, width, height, 1);
                    var b = imGet(srcData.data, x, y, width, height, 2);
                    var a = imGet(srcData.data, x, y, width, height, 3);
                    var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
                    var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
                    var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
                    var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
                    if (includeOpacity) {
                        nr = ng = nb = 0;
                        na *= a / 255;
                    }
                    imSet(srcData.data, x, y, width, height, 0, nr);
                    imSet(srcData.data, x, y, width, height, 1, ng);
                    imSet(srcData.data, x, y, width, height, 2, nb);
                    imSet(srcData.data, x, y, width, height, 3, na);
                }
                ctx.clearRect(0, 0, width, height);
                ctx.putImageData(srcData, 0, 0);
            }
        }
    ]);
    return FeColorMatrixElement2;
}(Element1);
function _createSuper$E(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$E();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$E() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var MaskElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](MaskElement2, _Element);
    var _super = _createSuper$E(MaskElement2);
    function MaskElement2() {
        var _this;
        _classCallCheck__default['default'](this, MaskElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'mask';
        return _this;
    }
    _createClass__default['default'](MaskElement2, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                var document = this.document; // render as temp svg
                var x = this.getAttribute('x').getPixels('x');
                var y = this.getAttribute('y').getPixels('y');
                var width = this.getStyle('width').getPixels('x');
                var height = this.getStyle('height').getPixels('y');
                if (!width && !height) {
                    var _context;
                    var boundingBox = new BoundingBox();
                    _forEachInstanceProperty__default['default'](_context = this.children).call(_context, function(child) {
                        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                    });
                    x = Math.floor(boundingBox.x1);
                    y = Math.floor(boundingBox.y1);
                    width = Math.floor(boundingBox.width);
                    height = Math.floor(boundingBox.height);
                }
                var ignoredStyles = this.removeStyles(element, MaskElement2.ignoreStyles);
                var maskCanvas = document.createCanvas(x + width, y + height);
                var maskCtx = maskCanvas.getContext('2d');
                document.screen.setDefaults(maskCtx);
                this.renderChildren(maskCtx); // convert mask to alpha with a fake node
                // TODO: refactor out apply from feColorMatrix
                new FeColorMatrixElement1(document, {
                    nodeType: 1,
                    childNodes: [],
                    attributes: [
                        {
                            nodeName: 'type',
                            value: 'luminanceToAlpha'
                        },
                        {
                            nodeName: 'includeOpacity',
                            value: 'true'
                        }
                    ]
                }).apply(maskCtx, 0, 0, x + width, y + height);
                var tmpCanvas = document.createCanvas(x + width, y + height);
                var tmpCtx = tmpCanvas.getContext('2d');
                document.screen.setDefaults(tmpCtx);
                element.render(tmpCtx);
                tmpCtx.globalCompositeOperation = 'destination-in';
                tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
                tmpCtx.fillRect(0, 0, x + width, y + height);
                ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
                ctx.fillRect(0, 0, x + width, y + height); // reassign mask
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return MaskElement2;
}(Element1);
MaskElement1.ignoreStyles = [
    'mask',
    'transform',
    'clip-path'
];
function _createSuper$F(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$F();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$F() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var noop = function noop1() {
};
var ClipPathElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](ClipPathElement2, _Element);
    var _super = _createSuper$F(ClipPathElement2);
    function ClipPathElement2() {
        var _this;
        _classCallCheck__default['default'](this, ClipPathElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'clipPath';
        return _this;
    }
    _createClass__default['default'](ClipPathElement2, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _context;
                var document = this.document;
                var contextProto = _Reflect$getPrototypeOf__default['default'](ctx);
                var beginPath = ctx.beginPath, closePath = ctx.closePath;
                if (contextProto) {
                    contextProto.beginPath = noop;
                    contextProto.closePath = noop;
                }
                _Reflect$apply__default['default'](beginPath, ctx, []);
                _forEachInstanceProperty__default['default'](_context = this.children).call(_context, function(child) {
                    if (typeof child.path === 'undefined') return;
                    var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />
                    if (!transform) transform = Transform.fromElement(document, child);
                    if (transform) transform.apply(ctx);
                    child.path(ctx);
                    if (contextProto) contextProto.closePath = closePath;
                    if (transform) transform.unapply(ctx);
                });
                _Reflect$apply__default['default'](closePath, ctx, []);
                ctx.clip();
                if (contextProto) {
                    contextProto.beginPath = beginPath;
                    contextProto.closePath = closePath;
                }
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return ClipPathElement2;
}(Element1);
function _createSuper$G(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$G();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$G() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FilterElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FilterElement2, _Element);
    var _super = _createSuper$G(FilterElement2);
    function FilterElement2() {
        var _this;
        _classCallCheck__default['default'](this, FilterElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'filter';
        return _this;
    }
    _createClass__default['default'](FilterElement2, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                // render as temp svg
                var document = this.document, children = this.children;
                var boundingBox = element.getBoundingBox(ctx);
                if (!boundingBox) return;
                var px = 0;
                var py = 0;
                _forEachInstanceProperty__default['default'](children).call(children, function(child) {
                    var efd = child.extraFilterDistance || 0;
                    px = Math.max(px, efd);
                    py = Math.max(py, efd);
                });
                var width = Math.floor(boundingBox.width);
                var height = Math.floor(boundingBox.height);
                var tmpCanvasWidth = width + 2 * px;
                var tmpCanvasHeight = height + 2 * py;
                if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
                var x = Math.floor(boundingBox.x);
                var y = Math.floor(boundingBox.y);
                var ignoredStyles = this.removeStyles(element, FilterElement2.ignoreStyles);
                var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
                var tmpCtx = tmpCanvas.getContext('2d');
                document.screen.setDefaults(tmpCtx);
                tmpCtx.translate(-x + px, -y + py);
                element.render(tmpCtx); // apply filters
                _forEachInstanceProperty__default['default'](children).call(children, function(child) {
                    if (typeof child.apply === 'function') child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
                }); // render on me
                ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {
            }
        }
    ]);
    return FilterElement2;
}(Element1);
FilterElement1.ignoreStyles = [
    'filter',
    'transform',
    'clip-path'
];
function _createSuper$H(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$H();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$H() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeDropShadowElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FeDropShadowElement2, _Element);
    var _super = _createSuper$H(FeDropShadowElement2);
    function FeDropShadowElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, FeDropShadowElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'feDropShadow';
        _this.addStylesFromStyleDefinition();
        return _this;
    }
    _createClass__default['default'](FeDropShadowElement2, [
        {
            key: "apply",
            value: function apply(_, __, ___, ____, _____) {
            }
        }
    ]);
    return FeDropShadowElement2;
}(Element1);
function _createSuper$I(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$I();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$I() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeMorphologyElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FeMorphologyElement2, _Element);
    var _super = _createSuper$I(FeMorphologyElement2);
    function FeMorphologyElement2() {
        var _this;
        _classCallCheck__default['default'](this, FeMorphologyElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'feMorphology';
        return _this;
    }
    _createClass__default['default'](FeMorphologyElement2, [
        {
            key: "apply",
            value: function apply(_, __, ___, ____, _____) {
            }
        }
    ]);
    return FeMorphologyElement2;
}(Element1);
function _createSuper$J(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$J();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$J() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeCompositeElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FeCompositeElement2, _Element);
    var _super = _createSuper$J(FeCompositeElement2);
    function FeCompositeElement2() {
        var _this;
        _classCallCheck__default['default'](this, FeCompositeElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'feComposite';
        return _this;
    }
    _createClass__default['default'](FeCompositeElement2, [
        {
            key: "apply",
            value: function apply(_, __, ___, ____, _____) {
            }
        }
    ]);
    return FeCompositeElement2;
}(Element1);
function _createSuper$K(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$K();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$K() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var FeGaussianBlurElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](FeGaussianBlurElement2, _Element);
    var _super = _createSuper$K(FeGaussianBlurElement2);
    function FeGaussianBlurElement2(document, node, captureTextNodes) {
        var _this;
        _classCallCheck__default['default'](this, FeGaussianBlurElement2);
        _this = _super.call(this, document, node, captureTextNodes);
        _this.type = 'feGaussianBlur';
        _this.blurRadius = Math.floor(_this.getAttribute('stdDeviation').getNumber());
        _this.extraFilterDistance = _this.blurRadius;
        return _this;
    }
    _createClass__default['default'](FeGaussianBlurElement2, [
        {
            key: "apply",
            value: function apply(ctx, x, y, width, height) {
                var document = this.document, blurRadius = this.blurRadius;
                var body = document.window ? document.window.document.body : null;
                var canvas = ctx.canvas; // StackBlur requires canvas be on document
                canvas.id = document.getUniqueId();
                if (body) {
                    canvas.style.display = 'none';
                    body.appendChild(canvas);
                }
                stackblurCanvas.canvasRGBA(canvas, x, y, width, height, blurRadius);
                if (body) body.removeChild(canvas);
            }
        }
    ]);
    return FeGaussianBlurElement2;
}(Element1);
function _createSuper$L(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$L();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$L() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var TitleElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](TitleElement2, _Element);
    var _super = _createSuper$L(TitleElement2);
    function TitleElement2() {
        var _this;
        _classCallCheck__default['default'](this, TitleElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'title';
        return _this;
    }
    return TitleElement2;
}(Element1);
function _createSuper$M(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$M();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf__default['default'](Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf__default['default'](this).constructor;
            result = _Reflect$construct__default['default'](Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn__default['default'](this, result);
    };
}
function _isNativeReflectConstruct$M() {
    if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
    if (_Reflect$construct__default['default'].sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
var DescElement1 = /*#__PURE__*/ function(_Element) {
    _inherits__default['default'](DescElement2, _Element);
    var _super = _createSuper$M(DescElement2);
    function DescElement2() {
        var _this;
        _classCallCheck__default['default'](this, DescElement2);
        _this = _super.apply(this, arguments);
        _this.type = 'desc';
        return _this;
    }
    return DescElement2;
}(Element1);
var elementTypes = {
    'svg': SVGElement1,
    'rect': RectElement1,
    'circle': CircleElement1,
    'ellipse': EllipseElement1,
    'line': LineElement1,
    'polyline': PolylineElement1,
    'polygon': PolygonElement1,
    'path': PathElement1,
    'pattern': PatternElement1,
    'marker': MarkerElement1,
    'defs': DefsElement1,
    'linearGradient': LinearGradientElement1,
    'radialGradient': RadialGradientElement1,
    'stop': StopElement1,
    'animate': AnimateElement1,
    'animateColor': AnimateColorElement1,
    'animateTransform': AnimateTransformElement1,
    'font': FontElement1,
    'font-face': FontFaceElement1,
    'missing-glyph': MissingGlyphElement1,
    'glyph': GlyphElement1,
    'text': TextElement1,
    'tspan': TSpanElement1,
    'tref': TRefElement1,
    'a': AElement1,
    'textPath': TextPathElement1,
    'image': ImageElement1,
    'g': GElement1,
    'symbol': SymbolElement1,
    'style': StyleElement1,
    'use': UseElement1,
    'mask': MaskElement1,
    'clipPath': ClipPathElement1,
    'filter': FilterElement1,
    'feDropShadow': FeDropShadowElement1,
    'feMorphology': FeMorphologyElement1,
    'feComposite': FeCompositeElement1,
    'feColorMatrix': FeColorMatrixElement1,
    'feGaussianBlur': FeGaussianBlurElement1,
    'title': TitleElement1,
    'desc': DescElement1
};
function ownKeys$1(object, enumerableOnly) {
    var keys = _Object$keys__default['default'](object);
    if (_Object$getOwnPropertySymbols__default['default']) {
        var symbols = _Object$getOwnPropertySymbols__default['default'](object);
        if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function(sym) {
            return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) {
            var _context5;
            _forEachInstanceProperty__default['default'](_context5 = ownKeys$1(Object(source), true)).call(_context5, function(key) {
                _defineProperty__default['default'](target, key, source[key]);
            });
        } else if (_Object$getOwnPropertyDescriptors__default['default']) _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source));
        else {
            var _context6;
            _forEachInstanceProperty__default['default'](_context6 = ownKeys$1(Object(source))).call(_context6, function(key) {
                _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key));
            });
        }
    }
    return target;
}
function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function createImage(_x) {
    return _createImage.apply(this, arguments);
}
function _createImage() {
    _createImage = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee(src) {
        var anonymousCrossOrigin, image, _args = arguments;
        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context7) {
            while(true)switch(_context7.prev = _context7.next){
                case 0:
                    anonymousCrossOrigin = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                    image = document.createElement('img');
                    if (anonymousCrossOrigin) image.crossOrigin = 'Anonymous';
                    return _context7.abrupt("return", new _Promise__default['default'](function(resolve, reject) {
                        image.onload = function() {
                            resolve(image);
                        };
                        image.onerror = function() {
                            reject();
                        };
                        image.src = src;
                    }));
                case 4:
                case "end":
                    return _context7.stop();
            }
        }, _callee);
    }));
    return _createImage.apply(this, arguments);
}
var Document1 = /*#__PURE__*/ function() {
    function Document2(canvg) {
        var _context, _context2;
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        }, _ref$rootEmSize = _ref.rootEmSize, rootEmSize = _ref$rootEmSize === void 0 ? 12 : _ref$rootEmSize, _ref$emSize = _ref.emSize, emSize = _ref$emSize === void 0 ? 12 : _ref$emSize, _ref$createCanvas = _ref.createCanvas, createCanvas1 = _ref$createCanvas === void 0 ? Document2.createCanvas : _ref$createCanvas, _ref$createImage = _ref.createImage, createImage1 = _ref$createImage === void 0 ? Document2.createImage : _ref$createImage, anonymousCrossOrigin = _ref.anonymousCrossOrigin;
        _classCallCheck__default['default'](this, Document2);
        this.canvg = canvg;
        this.definitions = {
        };
        this.styles = {
        };
        this.stylesSpecificity = {
        };
        this.images = [];
        this.fonts = [];
        this.emSizeStack = [];
        this.uniqueId = 0;
        this.screen = canvg.screen;
        this.rootEmSize = rootEmSize;
        this.emSize = emSize;
        this.createCanvas = createCanvas1;
        this.createImage = this.bindCreateImage(createImage1, anonymousCrossOrigin);
        this.screen.wait(_bindInstanceProperty__default['default'](_context = this.isImagesLoaded).call(_context, this));
        this.screen.wait(_bindInstanceProperty__default['default'](_context2 = this.isFontsLoaded).call(_context2, this));
    }
    _createClass__default['default'](Document2, [
        {
            key: "bindCreateImage",
            value: function bindCreateImage(createImage1, anonymousCrossOrigin) {
                if (typeof anonymousCrossOrigin === 'boolean') return function(source, forceAnonymousCrossOrigin) {
                    return createImage1(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
                };
                return createImage1;
            }
        },
        {
            key: "popEmSize",
            value: function popEmSize() {
                var emSizeStack = this.emSizeStack;
                emSizeStack.pop();
            }
        },
        {
            key: "getUniqueId",
            value: function getUniqueId() {
                return "canvg".concat(++this.uniqueId);
            }
        },
        {
            key: "isImagesLoaded",
            value: function isImagesLoaded() {
                var _context3;
                return _everyInstanceProperty__default['default'](_context3 = this.images).call(_context3, function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "isFontsLoaded",
            value: function isFontsLoaded() {
                var _context4;
                return _everyInstanceProperty__default['default'](_context4 = this.fonts).call(_context4, function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "createDocumentElement",
            value: function createDocumentElement(document) {
                var documentElement = this.createElement(document.documentElement);
                documentElement.root = true;
                documentElement.addStylesFromStyleDefinition();
                this.documentElement = documentElement;
                return documentElement;
            }
        },
        {
            key: "createElement",
            value: function createElement(node) {
                var elementType = node.nodeName.replace(/^[^:]+:/, '');
                var ElementType = Document2.elementTypes[elementType];
                if (typeof ElementType !== 'undefined') return new ElementType(this, node);
                return new UnknownElement1(this, node);
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(node) {
                return new TextNode1(this, node);
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(config) {
                this.screen.setViewBox(_objectSpread$1({
                    document: this
                }, config));
            }
        },
        {
            key: "window",
            get: function get() {
                return this.screen.window;
            }
        },
        {
            key: "fetch",
            get: function get() {
                return this.screen.fetch;
            }
        },
        {
            key: "ctx",
            get: function get() {
                return this.screen.ctx;
            }
        },
        {
            key: "emSize",
            get: function get() {
                var emSizeStack = this.emSizeStack;
                return emSizeStack[emSizeStack.length - 1];
            },
            set: function set(value) {
                var emSizeStack = this.emSizeStack;
                emSizeStack.push(value);
            }
        }
    ]);
    return Document2;
}();
Document1.createCanvas = createCanvas;
Document1.createImage = createImage;
Document1.elementTypes = elementTypes;
function ownKeys$2(object, enumerableOnly) {
    var keys = _Object$keys__default['default'](object);
    if (_Object$getOwnPropertySymbols__default['default']) {
        var symbols = _Object$getOwnPropertySymbols__default['default'](object);
        if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function(sym) {
            return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) {
            var _context3;
            _forEachInstanceProperty__default['default'](_context3 = ownKeys$2(Object(source), true)).call(_context3, function(key) {
                _defineProperty__default['default'](target, key, source[key]);
            });
        } else if (_Object$getOwnPropertyDescriptors__default['default']) _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source));
        else {
            var _context4;
            _forEachInstanceProperty__default['default'](_context4 = ownKeys$2(Object(source))).call(_context4, function(key) {
                _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key));
            });
        }
    }
    return target;
}
/**
 * SVG renderer on canvas.
 */ var Canvg = /*#__PURE__*/ function() {
    /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */ function Canvg1(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        };
        _classCallCheck__default['default'](this, Canvg1);
        this.parser = new Parser(options);
        this.screen = new Screen1(ctx, options);
        this.options = options;
        var document = new Document1(this, options);
        var documentElement = document.createDocumentElement(svg);
        this.document = document;
        this.documentElement = documentElement;
    }
    /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   */ _createClass__default['default'](Canvg1, [
        {
            key: "fork",
            /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string or URL.
     * @param options - Rendering options.
     */ value: function fork(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                return Canvg1.from(ctx, svg, _objectSpread$2(_objectSpread$2({
                }, this.options), options));
            }
        },
        {
            key: "forkString",
            value: function forkString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                return Canvg1.fromString(ctx, svg, _objectSpread$2(_objectSpread$2({
                }, this.options), options));
            }
        },
        {
            key: "ready",
            value: function ready() {
                return this.screen.ready();
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                return this.screen.isReady();
            }
        },
        {
            key: "render",
            value: function() {
                var _render = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee() {
                    var options, _args = arguments;
                    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                                };
                                this.start(_objectSpread$2({
                                    enableRedraw: true,
                                    ignoreAnimation: true,
                                    ignoreMouse: true
                                }, options));
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                this.stop();
                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function render() {
                    return _render.apply(this, arguments);
                }
                return render;
            }()
        },
        {
            key: "start",
            value: function start() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                var documentElement = this.documentElement, screen = this.screen, baseOptions = this.options;
                screen.start(documentElement, _objectSpread$2(_objectSpread$2({
                    enableRedraw: true
                }, baseOptions), options));
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.screen.stop();
            }
        },
        {
            key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                this.documentElement.resize(width, height, preserveAspectRatio);
            }
        }
    ], [
        {
            key: "from",
            value: function() {
                var _from = _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee2(ctx, svg) {
                    var options, parser, svgDocument, _args2 = arguments;
                    return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {
                                };
                                parser = new Parser(options);
                                _context2.next = 4;
                                return parser.parse(svg);
                            case 4:
                                svgDocument = _context2.sent;
                                return _context2.abrupt("return", new Canvg1(ctx, svgDocument, options));
                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2);
                }));
                function from(_x, _x2) {
                    return _from.apply(this, arguments);
                }
                return from;
            }()
        },
        {
            key: "fromString",
            value: function fromString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                var parser = new Parser(options);
                var svgDocument = parser.parseFromString(svg);
                return new Canvg1(ctx, svgDocument, options);
            }
        }
    ]);
    return Canvg1;
}();
/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 */ function offscreen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    }, DOMParserFallback = _ref.DOMParser;
    var preset = {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParserFallback,
        createCanvas: function createCanvas1(width, height) {
            return new OffscreenCanvas(width, height);
        },
        createImage: function createImage1(url) {
            return _asyncToGenerator__default['default'](/*#__PURE__*/ _regeneratorRuntime__default['default'].mark(function _callee() {
                var response, blob, img;
                return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            _context.next = 2;
                            return fetch(url);
                        case 2:
                            response = _context.sent;
                            _context.next = 5;
                            return response.blob();
                        case 5:
                            blob = _context.sent;
                            _context.next = 8;
                            return createImageBitmap(blob);
                        case 8:
                            img = _context.sent;
                            return _context.abrupt("return", img);
                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }))();
        }
    };
    if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') _Reflect$deleteProperty__default['default'](preset, 'DOMParser');
    return preset;
}
/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 */ function node(_ref) {
    var DOMParser1 = _ref.DOMParser, canvas = _ref.canvas, fetch = _ref.fetch;
    return {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParser1,
        fetch: fetch,
        createCanvas: canvas.createCanvas,
        createImage: canvas.loadImage
    };
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    offscreen: offscreen,
    node: node
});
exports.AElement = AElement1;
exports.AnimateColorElement = AnimateColorElement1;
exports.AnimateElement = AnimateElement1;
exports.AnimateTransformElement = AnimateTransformElement1;
exports.BoundingBox = BoundingBox;
exports.CB1 = CB1;
exports.CB2 = CB2;
exports.CB3 = CB3;
exports.CB4 = CB4;
exports.Canvg = Canvg;
exports.CircleElement = CircleElement1;
exports.ClipPathElement = ClipPathElement1;
exports.DefsElement = DefsElement1;
exports.DescElement = DescElement1;
exports.Document = Document1;
exports.Element = Element1;
exports.EllipseElement = EllipseElement1;
exports.FeColorMatrixElement = FeColorMatrixElement1;
exports.FeCompositeElement = FeCompositeElement1;
exports.FeDropShadowElement = FeDropShadowElement1;
exports.FeGaussianBlurElement = FeGaussianBlurElement1;
exports.FeMorphologyElement = FeMorphologyElement1;
exports.FilterElement = FilterElement1;
exports.Font = Font;
exports.FontElement = FontElement1;
exports.FontFaceElement = FontFaceElement1;
exports.GElement = GElement1;
exports.GlyphElement = GlyphElement1;
exports.GradientElement = GradientElement1;
exports.ImageElement = ImageElement1;
exports.LineElement = LineElement1;
exports.LinearGradientElement = LinearGradientElement1;
exports.MarkerElement = MarkerElement1;
exports.MaskElement = MaskElement1;
exports.Matrix = Matrix;
exports.MissingGlyphElement = MissingGlyphElement1;
exports.Mouse = Mouse;
exports.PSEUDO_ZERO = PSEUDO_ZERO;
exports.Parser = Parser;
exports.PathElement = PathElement1;
exports.PathParser = PathParser1;
exports.PatternElement = PatternElement1;
exports.Point = Point;
exports.PolygonElement = PolygonElement1;
exports.PolylineElement = PolylineElement1;
exports.Property = Property;
exports.QB1 = QB1;
exports.QB2 = QB2;
exports.QB3 = QB3;
exports.RadialGradientElement = RadialGradientElement1;
exports.RectElement = RectElement1;
exports.RenderedElement = RenderedElement1;
exports.Rotate = Rotate;
exports.SVGElement = SVGElement1;
exports.SVGFontLoader = SVGFontLoader;
exports.Scale = Scale;
exports.Screen = Screen1;
exports.Skew = Skew1;
exports.SkewX = SkewX1;
exports.SkewY = SkewY1;
exports.StopElement = StopElement1;
exports.StyleElement = StyleElement1;
exports.SymbolElement = SymbolElement1;
exports.TRefElement = TRefElement1;
exports.TSpanElement = TSpanElement1;
exports.TextElement = TextElement1;
exports.TextPathElement = TextPathElement1;
exports.TitleElement = TitleElement1;
exports.Transform = Transform;
exports.Translate = Translate;
exports.UnknownElement = UnknownElement1;
exports.UseElement = UseElement1;
exports.ViewPort = ViewPort;
exports.compressSpaces = compressSpaces;
exports.default = Canvg;
exports.getSelectorSpecificity = getSelectorSpecificity;
exports.normalizeAttributeName = normalizeAttributeName;
exports.normalizeColor = normalizeColor;
exports.parseExternalUrl = parseExternalUrl;
exports.presets = index;
exports.toNumbers = toNumbers;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.vectorMagnitude = vectorMagnitude;
exports.vectorsAngle = vectorsAngle;
exports.vectorsRatio = vectorsRatio;

},{"process":"7AgFc","@babel/runtime-corejs3/core-js-stable/instance/starts-with":"NnnKD","@babel/runtime-corejs3/core-js-stable/parse-float":"8eMbg","@babel/runtime-corejs3/core-js-stable/instance/map":"6MVuv","@babel/runtime-corejs3/helpers/slicedToArray":"5dKU6","@babel/runtime-corejs3/core-js-stable/object/define-property":"11K6d","@babel/runtime-corejs3/core-js-stable/object/define-properties":"5yCYu","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":"28eLo","@babel/runtime-corejs3/core-js-stable/instance/for-each":"4sxB8","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":"7b37P","@babel/runtime-corejs3/core-js-stable/instance/filter":"3e5uU","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":"6Uxje","@babel/runtime-corejs3/core-js-stable/object/keys":"PRMSr","@babel/runtime-corejs3/regenerator":"5xkLF","@babel/runtime-corejs3/helpers/asyncToGenerator":"298Pj","@babel/runtime-corejs3/helpers/defineProperty":"46EI2","@babel/runtime-corejs3/helpers/classCallCheck":"3ehl2","@babel/runtime-corejs3/helpers/createClass":"4Q0Vu","@babel/runtime-corejs3/core-js-stable/instance/concat":"2Hqk2","@babel/runtime-corejs3/core-js-stable/instance/reduce":"62wH2","@babel/runtime-corejs3/core-js-stable/date/now":"3OVb5","@babel/runtime-corejs3/core-js-stable/instance/every":"xL010","@babel/runtime-corejs3/core-js-stable/promise":"1CVwa","@babel/runtime-corejs3/core-js-stable/instance/bind":"2lqfw","raf":"5SXY1","@babel/runtime-corejs3/core-js-stable/instance/trim":"1UES6","rgbcolor":"6hDU8","@babel/runtime-corejs3/core-js-stable/reflect/construct":"JzzXv","@babel/runtime-corejs3/helpers/inherits":"5jDJL","@babel/runtime-corejs3/helpers/possibleConstructorReturn":"1cOL5","@babel/runtime-corejs3/helpers/getPrototypeOf":"515w8","@babel/runtime-corejs3/helpers/toConsumableArray":"1TX2B","@babel/runtime-corejs3/core-js-stable/instance/some":"41roQ","@babel/runtime-corejs3/core-js-stable/instance/includes":"5OeIL","@babel/runtime-corejs3/core-js-stable/array/from":"3W7oB","@babel/runtime-corejs3/core-js-stable/instance/reverse":"3vnrL","@babel/runtime-corejs3/core-js-stable/instance/index-of":"2NuTQ","@babel/runtime-corejs3/helpers/get":"1RfLx","@babel/runtime-corejs3/core-js-stable/instance/fill":"jdeDf","svg-pathdata":"78iiq","@babel/runtime-corejs3/core-js-stable/reflect/delete-property":"4iPAO","@babel/runtime-corejs3/helpers/assertThisInitialized":"5wDds","@babel/runtime-corejs3/core-js-stable/instance/values":"3V3bv","@babel/runtime-corejs3/core-js-stable/parse-int":"E519t","@babel/runtime-corejs3/core-js/get-iterator":"67aJf","@babel/runtime-corejs3/core-js-stable/array/is-array":"2crzI","@babel/runtime-corejs3/core-js/get-iterator-method":"gT3qb","@babel/runtime-corejs3/core-js-stable/symbol":"2iSvv","@babel/runtime-corejs3/core-js-stable/instance/slice":"2f3Tp","@babel/runtime-corejs3/core-js-stable/map":"6YetN","@babel/runtime-corejs3/core-js-stable/reflect/apply":"0128s","@babel/runtime-corejs3/core-js-stable/reflect/get-prototype-of":"2y1mt","stackblur-canvas":"1a5hN"}],"NnnKD":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/starts-with");

},{"core-js-pure/stable/instance/starts-with":"77zcf"}],"77zcf":[function(require,module,exports) {
var parent = require('../../es/instance/starts-with');
module.exports = parent;

},{"../../es/instance/starts-with":"7vuRL"}],"7vuRL":[function(require,module,exports) {
var startsWith = require('../string/virtual/starts-with');
var StringPrototype = String.prototype;
module.exports = function(it) {
    var own = it.startsWith;
    return typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.startsWith ? startsWith : own;
};

},{"../string/virtual/starts-with":"41U9w"}],"41U9w":[function(require,module,exports) {
require('../../../modules/es.string.starts-with');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('String').startsWith;

},{"../../../modules/es.string.starts-with":"4n4QT","../../../internals/entry-virtual":"6ydnH"}],"4n4QT":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString/* , position = 0 */ ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

},{"../internals/export":"NKIvz","../internals/object-get-own-property-descriptor":"5gttT","../internals/to-length":"6shBe","../internals/not-a-regexp":"4XEFt","../internals/require-object-coercible":"1pbMr","../internals/correct-is-regexp-logic":"4PQp5","../internals/is-pure":"1T5Ge"}],"NKIvz":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var isForced = require('../internals/is-forced');
var path = require('../internals/path');
var bind = require('../internals/function-bind-context');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wrapConstructor = function(NativeConstructor) {
    var Wrapper = function(a, b, c) {
        if (this instanceof NativeConstructor) {
            switch(arguments.length){
                case 0:
                    return new NativeConstructor();
                case 1:
                    return new NativeConstructor(a);
                case 2:
                    return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
        }
        return NativeConstructor.apply(this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
};
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;
    var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {
    }).prototype;
    var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {
    });
    var targetPrototype = target.prototype;
    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
    for(key in source){
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contains in native
        USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE) {
            if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(nativeSource, key);
                nativeProperty = descriptor && descriptor.value;
            } else nativeProperty = nativeSource[key];
        }
        // export native or implementation
        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;
        // bind timers to global for call from export context
        if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
        else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
        else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
        else resultProperty = sourceProperty;
        // add a flag to not completely full polyfills
        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(resultProperty, 'sham', true);
        target[key] = resultProperty;
        if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
            if (!has(path, VIRTUAL_PROTOTYPE)) createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {
            });
            // export virtual prototype methods
            path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
            // export real prototype methods
            if (options.real && targetPrototype && !targetPrototype[key]) createNonEnumerableProperty(targetPrototype, key, sourceProperty);
        }
    }
};

},{"../internals/global":"2aTzo","../internals/object-get-own-property-descriptor":"5gttT","../internals/is-forced":"Ned2W","../internals/path":"2dOsY","../internals/function-bind-context":"3PeOr","../internals/create-non-enumerable-property":"2B6U4","../internals/has":"4S28p"}],"2aTzo":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"5gttT":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"6RgTN","../internals/object-property-is-enumerable":"42sWK","../internals/create-property-descriptor":"7aAHy","../internals/to-indexed-object":"3n8cy","../internals/to-primitive":"13ho6","../internals/has":"4S28p","../internals/ie8-dom-define":"4r3wA"}],"6RgTN":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"4Nuec"}],"4Nuec":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"42sWK":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"7aAHy":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"3n8cy":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"7ndQF","../internals/require-object-coercible":"1pbMr"}],"7ndQF":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var split = ''.split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"4Nuec","../internals/classof-raw":"2kpqo"}],"2kpqo":[function(require,module,exports) {
var toString = {
}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"1pbMr":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{}],"13ho6":[function(require,module,exports) {
var isObject = require('../internals/is-object');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"4KnRg"}],"4KnRg":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"4S28p":[function(require,module,exports) {
var toObject = require('../internals/to-object');
var hasOwnProperty = {
}.hasOwnProperty;
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
};

},{"../internals/to-object":"3Dh0Q"}],"3Dh0Q":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"1pbMr"}],"4r3wA":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"6RgTN","../internals/fails":"4Nuec","../internals/document-create-element":"1iHSM"}],"1iHSM":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"2aTzo","../internals/is-object":"4KnRg"}],"Ned2W":[function(require,module,exports) {
var fails = require('../internals/fails');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"4Nuec"}],"2dOsY":[function(require,module,exports) {
module.exports = {
};

},{}],"3PeOr":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
// optional / simple context binding
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 0:
            return function() {
                return fn.call(that);
            };
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/a-function":"77Pld"}],"77Pld":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != 'function') throw TypeError(String(it) + ' is not a function');
    return it;
};

},{}],"2B6U4":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"6RgTN","../internals/object-define-property":"2eM6x","../internals/create-property-descriptor":"7aAHy"}],"2eM6x":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"6RgTN","../internals/ie8-dom-define":"4r3wA","../internals/an-object":"6Rjti","../internals/to-primitive":"13ho6"}],"6Rjti":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(String(it) + ' is not an object');
    return it;
};

},{"../internals/is-object":"4KnRg"}],"6shBe":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"6awi3"}],"6awi3":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"4XEFt":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');
module.exports = function(it) {
    if (isRegExp(it)) throw TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"../internals/is-regexp":"6RqUN"}],"6RqUN":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"4KnRg","../internals/classof-raw":"2kpqo","../internals/well-known-symbol":"2sBVK"}],"2sBVK":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol1 = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol1 : Symbol1 && Symbol1.withoutSetter || uid;
module.exports = function(name) {
    if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        if (NATIVE_SYMBOL && has(Symbol1, name)) WellKnownSymbolsStore[name] = Symbol1[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"2aTzo","../internals/shared":"7CUkh","../internals/has":"4S28p","../internals/uid":"5gPJ1","../internals/native-symbol":"rwjHE","../internals/use-symbol-as-uid":"5SAWJ"}],"7CUkh":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.15.2',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"1T5Ge","../internals/shared-store":"5tQOW"}],"1T5Ge":[function(require,module,exports) {
module.exports = true;

},{}],"5tQOW":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"2aTzo","../internals/set-global":"2LXWm"}],"2LXWm":[function(require,module,exports) {
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
module.exports = function(key, value) {
    try {
        createNonEnumerableProperty(global, key, value);
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"2aTzo","../internals/create-non-enumerable-property":"2B6U4"}],"5gPJ1":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();
module.exports = function(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + ((++id) + postfix).toString(36);
};

},{}],"rwjHE":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"PnPmv","../internals/fails":"4Nuec"}],"PnPmv":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
    }
}
module.exports = version && +version;

},{"../internals/global":"2aTzo","../internals/engine-user-agent":"3Nheh"}],"3Nheh":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"4h7wt"}],"4h7wt":[function(require,module,exports) {
var path = require('../internals/path');
var global = require('../internals/global');
var aFunction = function(variable) {
    return typeof variable == 'function' ? variable : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"2dOsY","../internals/global":"2aTzo"}],"5SAWJ":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"rwjHE"}],"4PQp5":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        '/./'[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
        } catch (error2) {
        }
    }
    return false;
};

},{"../internals/well-known-symbol":"2sBVK"}],"6ydnH":[function(require,module,exports) {
var path = require('../internals/path');
module.exports = function(CONSTRUCTOR) {
    return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":"2dOsY"}],"8eMbg":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/parse-float");

},{"core-js-pure/stable/parse-float":"3dAQz"}],"3dAQz":[function(require,module,exports) {
var parent = require('../es/parse-float');
module.exports = parent;

},{"../es/parse-float":"6g88Q"}],"6g88Q":[function(require,module,exports) {
require('../modules/es.parse-float');
var path = require('../internals/path');
module.exports = path.parseFloat;

},{"../modules/es.parse-float":"6xEw8","../internals/path":"2dOsY"}],"6xEw8":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloatImplementation = require('../internals/number-parse-float');
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({
    global: true,
    forced: parseFloat != parseFloatImplementation
}, {
    parseFloat: parseFloatImplementation
});

},{"../internals/export":"NKIvz","../internals/number-parse-float":"3RQh2"}],"3RQh2":[function(require,module,exports) {
var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
    var trimmedString = trim(String(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0.0 : result;
} : $parseFloat;

},{"../internals/global":"2aTzo","../internals/string-trim":"6S5Ri","../internals/whitespaces":"3LNWY"}],"6S5Ri":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function(TYPE) {
    return function($this) {
        var string = String(requireObjectCoercible($this));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"../internals/require-object-coercible":"1pbMr","../internals/whitespaces":"3LNWY"}],"3LNWY":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";

},{}],"6MVuv":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/map");

},{"core-js-pure/stable/instance/map":"4QqfI"}],"4QqfI":[function(require,module,exports) {
var parent = require('../../es/instance/map');
module.exports = parent;

},{"../../es/instance/map":"2Zw1z"}],"2Zw1z":[function(require,module,exports) {
var map = require('../array/virtual/map');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.map;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.map ? map : own;
};

},{"../array/virtual/map":"152Q1"}],"152Q1":[function(require,module,exports) {
require('../../../modules/es.array.map');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').map;

},{"../../../modules/es.array.map":"7tfqT","../../../internals/entry-virtual":"6ydnH"}],"7tfqT":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn/* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-iteration":"OHQch","../internals/array-method-has-species-support":"6iXiv"}],"OHQch":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');
var push = [].push;
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push.call(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push.call(target, value); // filterOut
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod(7)
};

},{"../internals/function-bind-context":"3PeOr","../internals/indexed-object":"7ndQF","../internals/to-object":"3Dh0Q","../internals/to-length":"6shBe","../internals/array-species-create":"7tS6e"}],"7tS6e":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"4KnRg","../internals/is-array":"1x6Hk","../internals/well-known-symbol":"2sBVK"}],"1x6Hk":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
    return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"2kpqo"}],"6iXiv":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {
        };
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"../internals/fails":"4Nuec","../internals/well-known-symbol":"2sBVK","../internals/engine-v8-version":"PnPmv"}],"5dKU6":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayWithHoles.js":"7Baxa","./iterableToArrayLimit.js":"6E0yw","./unsupportedIterableToArray.js":"40cVE","./nonIterableRest.js":"1xy7n"}],"7Baxa":[function(require,module,exports) {
var _Array$isArray = require("@babel/runtime-corejs3/core-js/array/is-array");
function _arrayWithHoles(arr) {
    if (_Array$isArray(arr)) return arr;
}
module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/array/is-array":"47vbc"}],"47vbc":[function(require,module,exports) {
module.exports = require("core-js-pure/features/array/is-array");

},{"core-js-pure/features/array/is-array":"47Vid"}],"47Vid":[function(require,module,exports) {
var parent = require('../../es/array/is-array');
module.exports = parent;

},{"../../es/array/is-array":"1DTmt"}],"1DTmt":[function(require,module,exports) {
require('../../modules/es.array.is-array');
var path = require('../../internals/path');
module.exports = path.Array.isArray;

},{"../../modules/es.array.is-array":"4ipQi","../../internals/path":"2dOsY"}],"4ipQi":[function(require,module,exports) {
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({
    target: 'Array',
    stat: true
}, {
    isArray: isArray
});

},{"../internals/export":"NKIvz","../internals/is-array":"1x6Hk"}],"6E0yw":[function(require,module,exports) {
var _Symbol = require("@babel/runtime-corejs3/core-js/symbol");
var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof _Symbol !== "undefined" && _getIteratorMethod(arr) || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/symbol":"LVzc2","@babel/runtime-corejs3/core-js/get-iterator-method":"gT3qb"}],"LVzc2":[function(require,module,exports) {
module.exports = require("core-js-pure/features/symbol");

},{"core-js-pure/features/symbol":"4dPyg"}],"4dPyg":[function(require,module,exports) {
var parent = require('../../es/symbol');
require('../../modules/esnext.symbol.async-dispose');
require('../../modules/esnext.symbol.dispose');
require('../../modules/esnext.symbol.matcher');
require('../../modules/esnext.symbol.metadata');
require('../../modules/esnext.symbol.observable');
// TODO: Remove from `core-js@4`
require('../../modules/esnext.symbol.pattern-match');
// TODO: Remove from `core-js@4`
require('../../modules/esnext.symbol.replace-all');
module.exports = parent;

},{"../../es/symbol":"6MJeV","../../modules/esnext.symbol.async-dispose":"6FwNR","../../modules/esnext.symbol.dispose":"1U6Tl","../../modules/esnext.symbol.matcher":"6SofM","../../modules/esnext.symbol.metadata":"2tJTh","../../modules/esnext.symbol.observable":"5886B","../../modules/esnext.symbol.pattern-match":"6IBbv","../../modules/esnext.symbol.replace-all":"4Klyo"}],"6MJeV":[function(require,module,exports) {
require('../../modules/es.array.concat');
require('../../modules/es.object.to-string');
require('../../modules/es.symbol');
require('../../modules/es.symbol.async-iterator');
require('../../modules/es.symbol.description');
require('../../modules/es.symbol.has-instance');
require('../../modules/es.symbol.is-concat-spreadable');
require('../../modules/es.symbol.iterator');
require('../../modules/es.symbol.match');
require('../../modules/es.symbol.match-all');
require('../../modules/es.symbol.replace');
require('../../modules/es.symbol.search');
require('../../modules/es.symbol.species');
require('../../modules/es.symbol.split');
require('../../modules/es.symbol.to-primitive');
require('../../modules/es.symbol.to-string-tag');
require('../../modules/es.symbol.unscopables');
require('../../modules/es.json.to-string-tag');
require('../../modules/es.math.to-string-tag');
require('../../modules/es.reflect.to-string-tag');
var path = require('../../internals/path');
module.exports = path.Symbol;

},{"../../modules/es.array.concat":"5F39O","../../modules/es.object.to-string":"5JeFv","../../modules/es.symbol":"29Uso","../../modules/es.symbol.async-iterator":"5g5xP","../../modules/es.symbol.description":"bFbFd","../../modules/es.symbol.has-instance":"6uBux","../../modules/es.symbol.is-concat-spreadable":"8UzUr","../../modules/es.symbol.iterator":"6bWOk","../../modules/es.symbol.match":"3CnJL","../../modules/es.symbol.match-all":"4tTHl","../../modules/es.symbol.replace":"4FKjd","../../modules/es.symbol.search":"2VCsV","../../modules/es.symbol.species":"3HjJv","../../modules/es.symbol.split":"46g7J","../../modules/es.symbol.to-primitive":"4qk2z","../../modules/es.symbol.to-string-tag":"6AZ4x","../../modules/es.symbol.unscopables":"4ftz5","../../modules/es.json.to-string-tag":"4L79z","../../modules/es.math.to-string-tag":"1sNdM","../../modules/es.reflect.to-string-tag":"1H9N0","../../internals/path":"2dOsY"}],"5F39O":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 9007199254740991;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for(i = -1, length = arguments.length; i < length; i++){
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
            } else {
                if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

},{"../internals/export":"NKIvz","../internals/fails":"4Nuec","../internals/is-array":"1x6Hk","../internals/is-object":"4KnRg","../internals/to-object":"3Dh0Q","../internals/to-length":"6shBe","../internals/create-property":"5jDyB","../internals/array-species-create":"7tS6e","../internals/array-method-has-species-support":"6iXiv","../internals/well-known-symbol":"2sBVK","../internals/engine-v8-version":"PnPmv"}],"5jDyB":[function(require,module,exports) {
'use strict';
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = function(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"../internals/to-primitive":"13ho6","../internals/object-define-property":"2eM6x","../internals/create-property-descriptor":"7aAHy"}],"5JeFv":[function(require,module,exports) {

},{}],"29Uso":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var fails = require('../internals/fails');
var has = require('../internals/has');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var toObject = require('../internals/to-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function() {
    return nativeObjectCreate(nativeDefineProperty({
    }, 'a', {
        get: function() {
            return nativeDefineProperty(this, 'a', {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
} : nativeDefineProperty;
var wrap = function(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
    setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
    });
    if (!DESCRIPTORS) symbol.description = description;
    return symbol;
};
var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    return Object(it) instanceof $Symbol;
};
var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);
    if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {
            }));
            O[HIDDEN][key] = true;
        } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, {
                enumerable: createPropertyDescriptor(0, false)
            });
        }
        return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function(key) {
        if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
};
var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) descriptor.enumerable = true;
    return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) result.push(AllSymbols[key]);
    });
    return result;
};
// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol1() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
        });
        return wrap(tag, description);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return getInternalState(this).tag;
    });
    redefine($Symbol, 'withoutSetter', function(description) {
        return wrap(uid(description), description);
    });
    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
    };
    if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
            configurable: true,
            get: function description() {
                return getInternalState(this).description;
            }
        });
        if (!IS_PURE) redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
            unsafe: true
        });
    }
}
$({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
}, {
    Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function(name) {
    defineWellKnownSymbol(name);
});
$({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function(key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function() {
        USE_SETTER = true;
    },
    useSimple: function() {
        USE_SETTER = false;
    }
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS
}, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({
    target: 'Object',
    stat: true,
    forced: fails(function() {
        getOwnPropertySymbolsModule.f(1);
    })
}, {
    getOwnPropertySymbols: function getOwnPropertySymbols1(it) {
        return getOwnPropertySymbolsModule.f(toObject(it));
    }
});
// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
        var symbol = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        return $stringify([
            symbol
        ]) != '[null]' || $stringify({
            a: symbol
        }) != '{}' || $stringify(Object(symbol)) != '{}';
    });
    $({
        target: 'JSON',
        stat: true,
        forced: FORCED_JSON_STRINGIFY
    }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
            var args = [
                it
            ];
            var index = 1;
            var $replacer;
            while(arguments.length > index)args.push(arguments[index++]);
            $replacer = replacer;
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
            if (!isArray(replacer)) replacer = function(key, value) {
                if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return $stringify.apply(null, args);
        }
    });
}
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

},{"../internals/export":"NKIvz","../internals/global":"2aTzo","../internals/get-built-in":"4h7wt","../internals/is-pure":"1T5Ge","../internals/descriptors":"6RgTN","../internals/native-symbol":"rwjHE","../internals/use-symbol-as-uid":"5SAWJ","../internals/fails":"4Nuec","../internals/has":"4S28p","../internals/is-array":"1x6Hk","../internals/is-object":"4KnRg","../internals/an-object":"6Rjti","../internals/to-object":"3Dh0Q","../internals/to-indexed-object":"3n8cy","../internals/to-primitive":"13ho6","../internals/create-property-descriptor":"7aAHy","../internals/object-create":"20Ou3","../internals/object-keys":"7db8z","../internals/object-get-own-property-names":"4ZA1Y","../internals/object-get-own-property-names-external":"1ADOM","../internals/object-get-own-property-symbols":"6G05J","../internals/object-get-own-property-descriptor":"5gttT","../internals/object-define-property":"2eM6x","../internals/object-property-is-enumerable":"42sWK","../internals/create-non-enumerable-property":"2B6U4","../internals/redefine":"5em6q","../internals/shared":"7CUkh","../internals/shared-key":"kBY2S","../internals/hidden-keys":"4M1Wn","../internals/uid":"5gPJ1","../internals/well-known-symbol":"2sBVK","../internals/well-known-symbol-wrapped":"4hRdO","../internals/define-well-known-symbol":"7DQwv","../internals/set-to-string-tag":"4vw0U","../internals/internal-state":"3CN5Q","../internals/array-iteration":"OHQch"}],"20Ou3":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        /* global ActiveXObject -- old IE */ activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"6Rjti","../internals/object-define-properties":"3ocBN","../internals/enum-bug-keys":"65Dl6","../internals/hidden-keys":"4M1Wn","../internals/html":"788G9","../internals/document-create-element":"1iHSM","../internals/shared-key":"kBY2S"}],"3ocBN":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], Properties[key]);
    return O;
};

},{"../internals/descriptors":"6RgTN","../internals/object-define-property":"2eM6x","../internals/an-object":"6Rjti","../internals/object-keys":"7db8z"}],"7db8z":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"52yLx","../internals/enum-bug-keys":"65Dl6"}],"52yLx":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
    return result;
};

},{"../internals/has":"4S28p","../internals/to-indexed-object":"3n8cy","../internals/array-includes":"63rQL","../internals/hidden-keys":"4M1Wn"}],"63rQL":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"3n8cy","../internals/to-length":"6shBe","../internals/to-absolute-index":"69Ghy"}],"69Ghy":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"6awi3"}],"4M1Wn":[function(require,module,exports) {
module.exports = {
};

},{}],"65Dl6":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"788G9":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"4h7wt"}],"kBY2S":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"7CUkh","../internals/uid":"5gPJ1"}],"4ZA1Y":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"52yLx","../internals/enum-bug-keys":"65Dl6"}],"1ADOM":[function(require,module,exports) {
/* eslint-disable es/no-object-getownpropertynames -- safe */ var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var toString = {
}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return $getOwnPropertyNames(it);
    } catch (error) {
        return windowNames.slice();
    }
};
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/to-indexed-object":"3n8cy","../internals/object-get-own-property-names":"4ZA1Y"}],"6G05J":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"5em6q":[function(require,module,exports) {
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
module.exports = function(target, key, value, options) {
    if (options && options.enumerable) target[key] = value;
    else createNonEnumerableProperty(target, key, value);
};

},{"../internals/create-non-enumerable-property":"2B6U4"}],"4hRdO":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":"2sBVK"}],"7DQwv":[function(require,module,exports) {
var path = require('../internals/path');
var has = require('../internals/has');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;
module.exports = function(NAME) {
    var Symbol1 = path.Symbol || (path.Symbol = {
    });
    if (!has(Symbol1, NAME)) defineProperty(Symbol1, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
    });
};

},{"../internals/path":"2dOsY","../internals/has":"4S28p","../internals/well-known-symbol-wrapped":"4hRdO","../internals/object-define-property":"2eM6x"}],"4vw0U":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineProperty = require('../internals/object-define-property').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var toString = require('../internals/object-to-string');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(it, TAG, STATIC, SET_METHOD) {
    if (it) {
        var target = STATIC ? it : it.prototype;
        if (!has(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
            configurable: true,
            value: TAG
        });
        if (SET_METHOD && !TO_STRING_TAG_SUPPORT) createNonEnumerableProperty(target, 'toString', toString);
    }
};

},{"../internals/to-string-tag-support":"lyhnB","../internals/object-define-property":"2eM6x","../internals/create-non-enumerable-property":"2B6U4","../internals/has":"4S28p","../internals/object-to-string":"29JvK","../internals/well-known-symbol":"2sBVK"}],"lyhnB":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {
};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"2sBVK"}],"29JvK":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({
}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"lyhnB","../internals/classof":"7eLNZ"}],"7eLNZ":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {
    }
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"lyhnB","../internals/classof-raw":"2kpqo","../internals/well-known-symbol":"2sBVK"}],"3CN5Q":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap1 = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap1());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function(it, metadata) {
        if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset.call(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget.call(store, it) || {
        };
    };
    has = function(it) {
        return wmhas.call(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return objectHas(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return objectHas(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"65A5J","../internals/global":"2aTzo","../internals/is-object":"4KnRg","../internals/create-non-enumerable-property":"2B6U4","../internals/has":"4S28p","../internals/shared-store":"5tQOW","../internals/shared-key":"kBY2S","../internals/hidden-keys":"4M1Wn"}],"65A5J":[function(require,module,exports) {
var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');
var WeakMap1 = global.WeakMap;
module.exports = typeof WeakMap1 === 'function' && /native code/.test(inspectSource(WeakMap1));

},{"../internals/global":"2aTzo","../internals/inspect-source":"5QDr6"}],"5QDr6":[function(require,module,exports) {
var store = require('../internals/shared-store');
var functionToString = Function.toString;
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') store.inspectSource = function(it) {
    return functionToString.call(it);
};
module.exports = store.inspectSource;

},{"../internals/shared-store":"5tQOW"}],"5g5xP":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

},{"../internals/define-well-known-symbol":"7DQwv"}],"bFbFd":[function(require,module,exports) {

},{}],"6uBux":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

},{"../internals/define-well-known-symbol":"7DQwv"}],"8UzUr":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

},{"../internals/define-well-known-symbol":"7DQwv"}],"6bWOk":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/define-well-known-symbol":"7DQwv"}],"3CnJL":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4tTHl":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4FKjd":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

},{"../internals/define-well-known-symbol":"7DQwv"}],"2VCsV":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

},{"../internals/define-well-known-symbol":"7DQwv"}],"3HjJv":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

},{"../internals/define-well-known-symbol":"7DQwv"}],"46g7J":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4qk2z":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

},{"../internals/define-well-known-symbol":"7DQwv"}],"6AZ4x":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4ftz5":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4L79z":[function(require,module,exports) {
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');
// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);

},{"../internals/global":"2aTzo","../internals/set-to-string-tag":"4vw0U"}],"1sNdM":[function(require,module,exports) {

},{}],"1H9N0":[function(require,module,exports) {

},{}],"6FwNR":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');

},{"../internals/define-well-known-symbol":"7DQwv"}],"1U6Tl":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');

},{"../internals/define-well-known-symbol":"7DQwv"}],"6SofM":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');

},{"../internals/define-well-known-symbol":"7DQwv"}],"2tJTh":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');

},{"../internals/define-well-known-symbol":"7DQwv"}],"5886B":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');

},{"../internals/define-well-known-symbol":"7DQwv"}],"6IBbv":[function(require,module,exports) {
// TODO: remove from `core-js@4`
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');

},{"../internals/define-well-known-symbol":"7DQwv"}],"4Klyo":[function(require,module,exports) {
// TODO: remove from `core-js@4`
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
defineWellKnownSymbol('replaceAll');

},{"../internals/define-well-known-symbol":"7DQwv"}],"gT3qb":[function(require,module,exports) {
module.exports = require("core-js-pure/features/get-iterator-method");

},{"core-js-pure/features/get-iterator-method":"4j097"}],"4j097":[function(require,module,exports) {
require('../modules/web.dom-collections.iterator');
require('../modules/es.string.iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
module.exports = getIteratorMethod;

},{"../modules/web.dom-collections.iterator":"1fKmg","../modules/es.string.iterator":"7eAah","../internals/get-iterator-method":"6V8vX"}],"1fKmg":[function(require,module,exports) {
require('./es.array.iterator');
var DOMIterables = require('../internals/dom-iterables');
var global = require('../internals/global');
var classof = require('../internals/classof');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
for(var COLLECTION_NAME in DOMIterables){
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    Iterators[COLLECTION_NAME] = Iterators.Array;
}

},{"./es.array.iterator":"4ZiVp","../internals/dom-iterables":"5U4vs","../internals/global":"2aTzo","../internals/classof":"7eLNZ","../internals/create-non-enumerable-property":"2B6U4","../internals/iterators":"3v7cp","../internals/well-known-symbol":"2sBVK"}],"4ZiVp":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"3n8cy","../internals/add-to-unscopables":"uq3hi","../internals/iterators":"3v7cp","../internals/internal-state":"3CN5Q","../internals/define-iterator":"7kqzH"}],"uq3hi":[function(require,module,exports) {
module.exports = function() {
};

},{}],"3v7cp":[function(require,module,exports) {
module.exports = {
};

},{}],"7kqzH":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
            return nativeIterator.call(this);
        };
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
    Iterators[NAME] = defaultIterator;
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
        else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    return methods;
};

},{"../internals/export":"NKIvz","../internals/create-iterator-constructor":"1ep16","../internals/object-get-prototype-of":"3pO6k","../internals/object-set-prototype-of":"2dGvk","../internals/set-to-string-tag":"4vw0U","../internals/create-non-enumerable-property":"2B6U4","../internals/redefine":"5em6q","../internals/well-known-symbol":"2sBVK","../internals/is-pure":"1T5Ge","../internals/iterators":"3v7cp","../internals/iterators-core":"3clis"}],"1ep16":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"../internals/iterators-core":"3clis","../internals/object-create":"20Ou3","../internals/create-property-descriptor":"7aAHy","../internals/set-to-string-tag":"4vw0U","../internals/iterators":"3v7cp"}],"3clis":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var returnThis = function() {
    return this;
};
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function() {
    var test = {
    };
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {
};
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"4Nuec","../internals/object-get-prototype-of":"3pO6k","../internals/create-non-enumerable-property":"2B6U4","../internals/has":"4S28p","../internals/well-known-symbol":"2sBVK","../internals/is-pure":"1T5Ge"}],"3pO6k":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"4S28p","../internals/to-object":"3Dh0Q","../internals/shared-key":"kBY2S","../internals/correct-prototype-getter":"3oPuB"}],"3oPuB":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    function F() {
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"4Nuec"}],"2dGvk":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {
} ? (function() {
    var CORRECT_SETTER = false;
    var test = {
    };
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
    };
})() : undefined);

},{"../internals/an-object":"6Rjti","../internals/a-possible-prototype":"71nNO"}],"71nNO":[function(require,module,exports) {
var isObject = require('../internals/is-object');
module.exports = function(it) {
    if (!isObject(it) && it !== null) throw TypeError("Can't set " + String(it) + ' as a prototype');
    return it;
};

},{"../internals/is-object":"4KnRg"}],"5U4vs":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"7eAah":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});

},{"../internals/string-multibyte":"6EwOw","../internals/internal-state":"3CN5Q","../internals/define-iterator":"7kqzH"}],"6EwOw":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"../internals/to-integer":"6awi3","../internals/require-object-coercible":"1pbMr"}],"6V8vX":[function(require,module,exports) {
var classof = require('../internals/classof');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

},{"../internals/classof":"7eLNZ","../internals/iterators":"3v7cp","../internals/well-known-symbol":"2sBVK"}],"40cVE":[function(require,module,exports) {
var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js/instance/slice");
var _Array$from = require("@babel/runtime-corejs3/core-js/array/from");
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
    var _context;
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return _Array$from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/instance/slice":"6VaBm","@babel/runtime-corejs3/core-js/array/from":"4VG1v","./arrayLikeToArray.js":"1nT8V"}],"6VaBm":[function(require,module,exports) {
module.exports = require("core-js-pure/features/instance/slice");

},{"core-js-pure/features/instance/slice":"3YV46"}],"3YV46":[function(require,module,exports) {
var parent = require('../../es/instance/slice');
module.exports = parent;

},{"../../es/instance/slice":"1SGIR"}],"1SGIR":[function(require,module,exports) {
var slice = require('../array/virtual/slice');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.slice;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.slice ? slice : own;
};

},{"../array/virtual/slice":"4mI2k"}],"4mI2k":[function(require,module,exports) {
require('../../../modules/es.array.slice');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').slice;

},{"../../../modules/es.array.slice":"7zK1k","../../../internals/entry-virtual":"6ydnH"}],"7zK1k":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;
// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) Constructor = undefined;
            else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === Array || Constructor === undefined) return nativeSlice.call(O, k, fin);
        }
        result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
        for(n = 0; k < fin; k++, n++)if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
    }
});

},{"../internals/export":"NKIvz","../internals/is-object":"4KnRg","../internals/is-array":"1x6Hk","../internals/to-absolute-index":"69Ghy","../internals/to-length":"6shBe","../internals/to-indexed-object":"3n8cy","../internals/create-property":"5jDyB","../internals/well-known-symbol":"2sBVK","../internals/array-method-has-species-support":"6iXiv"}],"4VG1v":[function(require,module,exports) {
module.exports = require("core-js-pure/features/array/from");

},{"core-js-pure/features/array/from":"14kRd"}],"14kRd":[function(require,module,exports) {
var parent = require('../../es/array/from');
module.exports = parent;

},{"../../es/array/from":"5SSqk"}],"5SSqk":[function(require,module,exports) {
require('../../modules/es.string.iterator');
require('../../modules/es.array.from');
var path = require('../../internals/path');
module.exports = path.Array.from;

},{"../../modules/es.string.iterator":"7eAah","../../modules/es.array.from":"40AOy","../../internals/path":"2dOsY"}],"40AOy":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"../internals/export":"NKIvz","../internals/array-from":"28lbz","../internals/check-correctness-of-iteration":"2S0Vc"}],"28lbz":[function(require,module,exports) {
'use strict';
var bind = require('../internals/function-bind-context');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var getIteratorMethod = require('../internals/get-iterator-method');
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike/* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();
        for(; !(step = next.call(iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = toLength(O.length);
        result = new C(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"../internals/function-bind-context":"3PeOr","../internals/to-object":"3Dh0Q","../internals/call-with-safe-iteration-closing":"23PiA","../internals/is-array-iterator-method":"EPP77","../internals/to-length":"6shBe","../internals/create-property":"5jDyB","../internals/get-iterator-method":"6V8vX"}],"23PiA":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator);
        throw error;
    }
};

},{"../internals/an-object":"6Rjti","../internals/iterator-close":"7MTax"}],"7MTax":[function(require,module,exports) {
var anObject = require('../internals/an-object');
module.exports = function(iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) return anObject(returnMethod.call(iterator)).value;
};

},{"../internals/an-object":"6Rjti"}],"EPP77":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"2sBVK","../internals/iterators":"3v7cp"}],"2S0Vc":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {
}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {
        };
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"2sBVK"}],"1nT8V":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"1xy7n":[function(require,module,exports) {
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"11K6d":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/define-property");

},{"core-js-pure/stable/object/define-property":"6sBPM"}],"6sBPM":[function(require,module,exports) {
var parent = require('../../es/object/define-property');
module.exports = parent;

},{"../../es/object/define-property":"6OGqV"}],"6OGqV":[function(require,module,exports) {
require('../../modules/es.object.define-property');
var path = require('../../internals/path');
var Object1 = path.Object;
var defineProperty = module.exports = function defineProperty1(it, key, desc) {
    return Object1.defineProperty(it, key, desc);
};
if (Object1.defineProperty.sham) defineProperty.sham = true;

},{"../../modules/es.object.define-property":"4A3gM","../../internals/path":"2dOsY"}],"4A3gM":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var objectDefinePropertyModile = require('../internals/object-define-property');
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({
    target: 'Object',
    stat: true,
    forced: !DESCRIPTORS,
    sham: !DESCRIPTORS
}, {
    defineProperty: objectDefinePropertyModile.f
});

},{"../internals/export":"NKIvz","../internals/descriptors":"6RgTN","../internals/object-define-property":"2eM6x"}],"5yCYu":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/define-properties");

},{"core-js-pure/stable/object/define-properties":"1XEhN"}],"1XEhN":[function(require,module,exports) {
var parent = require('../../es/object/define-properties');
module.exports = parent;

},{"../../es/object/define-properties":"5CMjM"}],"5CMjM":[function(require,module,exports) {
require('../../modules/es.object.define-properties');
var path = require('../../internals/path');
var Object1 = path.Object;
var defineProperties = module.exports = function defineProperties1(T, D) {
    return Object1.defineProperties(T, D);
};
if (Object1.defineProperties.sham) defineProperties.sham = true;

},{"../../modules/es.object.define-properties":"6RtuF","../../internals/path":"2dOsY"}],"6RtuF":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var defineProperties = require('../internals/object-define-properties');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({
    target: 'Object',
    stat: true,
    forced: !DESCRIPTORS,
    sham: !DESCRIPTORS
}, {
    defineProperties: defineProperties
});

},{"../internals/export":"NKIvz","../internals/descriptors":"6RgTN","../internals/object-define-properties":"3ocBN"}],"28eLo":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/get-own-property-descriptors");

},{"core-js-pure/stable/object/get-own-property-descriptors":"3MJNw"}],"3MJNw":[function(require,module,exports) {
var parent = require('../../es/object/get-own-property-descriptors');
module.exports = parent;

},{"../../es/object/get-own-property-descriptors":"24gFn"}],"24gFn":[function(require,module,exports) {
require('../../modules/es.object.get-own-property-descriptors');
var path = require('../../internals/path');
module.exports = path.Object.getOwnPropertyDescriptors;

},{"../../modules/es.object.get-own-property-descriptors":"1nNO6","../../internals/path":"2dOsY"}],"1nNO6":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var ownKeys = require('../internals/own-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var createProperty = require('../internals/create-property');
// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIndexedObject(object);
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var keys = ownKeys(O);
        var result = {
        };
        var index = 0;
        var key, descriptor;
        while(keys.length > index){
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
        }
        return result;
    }
});

},{"../internals/export":"NKIvz","../internals/descriptors":"6RgTN","../internals/own-keys":"4yySa","../internals/to-indexed-object":"3n8cy","../internals/object-get-own-property-descriptor":"5gttT","../internals/create-property":"5jDyB"}],"4yySa":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"4h7wt","../internals/object-get-own-property-names":"4ZA1Y","../internals/object-get-own-property-symbols":"6G05J","../internals/an-object":"6Rjti"}],"4sxB8":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/for-each");

},{"core-js-pure/stable/instance/for-each":"7knIv"}],"7knIv":[function(require,module,exports) {
require('../../modules/web.dom-collections.iterator');
var forEach = require('../array/virtual/for-each');
var classof = require('../../internals/classof');
var ArrayPrototype = Array.prototype;
var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
};
module.exports = function(it) {
    var own = it.forEach;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.forEach || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};

},{"../../modules/web.dom-collections.iterator":"1fKmg","../array/virtual/for-each":"EMOVm","../../internals/classof":"7eLNZ"}],"EMOVm":[function(require,module,exports) {
var parent = require('../../../es/array/virtual/for-each');
module.exports = parent;

},{"../../../es/array/virtual/for-each":"7mgaD"}],"7mgaD":[function(require,module,exports) {
require('../../../modules/es.array.for-each');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').forEach;

},{"../../../modules/es.array.for-each":"O0Kvd","../../../internals/entry-virtual":"6ydnH"}],"O0Kvd":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');
// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach
}, {
    forEach: forEach
});

},{"../internals/export":"NKIvz","../internals/array-for-each":"69jjg"}],"69jjg":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('forEach');
// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn/* , thisArg */ ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":"OHQch","../internals/array-method-is-strict":"Uuy0R"}],"Uuy0R":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function() {
            throw 1;
        }, 1);
    });
};

},{"../internals/fails":"4Nuec"}],"7b37P":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/get-own-property-descriptor");

},{"core-js-pure/stable/object/get-own-property-descriptor":"58CnH"}],"58CnH":[function(require,module,exports) {
var parent = require('../../es/object/get-own-property-descriptor');
module.exports = parent;

},{"../../es/object/get-own-property-descriptor":"2AAiy"}],"2AAiy":[function(require,module,exports) {
require('../../modules/es.object.get-own-property-descriptor');
var path = require('../../internals/path');
var Object1 = path.Object;
var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor1(it, key) {
    return Object1.getOwnPropertyDescriptor(it, key);
};
if (Object1.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;

},{"../../modules/es.object.get-own-property-descriptor":"3suTq","../../internals/path":"2dOsY"}],"3suTq":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toIndexedObject = require('../internals/to-indexed-object');
var nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var DESCRIPTORS = require('../internals/descriptors');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeGetOwnPropertyDescriptor(1);
});
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({
    target: 'Object',
    stat: true,
    forced: FORCED,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
    }
});

},{"../internals/export":"NKIvz","../internals/fails":"4Nuec","../internals/to-indexed-object":"3n8cy","../internals/object-get-own-property-descriptor":"5gttT","../internals/descriptors":"6RgTN"}],"3e5uU":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/filter");

},{"core-js-pure/stable/instance/filter":"5liFu"}],"5liFu":[function(require,module,exports) {
var parent = require('../../es/instance/filter');
module.exports = parent;

},{"../../es/instance/filter":"6Pd2d"}],"6Pd2d":[function(require,module,exports) {
var filter = require('../array/virtual/filter');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.filter;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.filter ? filter : own;
};

},{"../array/virtual/filter":"A1H9w"}],"A1H9w":[function(require,module,exports) {
require('../../../modules/es.array.filter');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').filter;

},{"../../../modules/es.array.filter":"1cmgD","../../../internals/entry-virtual":"6ydnH"}],"1cmgD":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    filter: function filter(callbackfn/* , thisArg */ ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-iteration":"OHQch","../internals/array-method-has-species-support":"6iXiv"}],"6Uxje":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/get-own-property-symbols");

},{"core-js-pure/stable/object/get-own-property-symbols":"7FcXp"}],"7FcXp":[function(require,module,exports) {
var parent = require('../../es/object/get-own-property-symbols');
module.exports = parent;

},{"../../es/object/get-own-property-symbols":"2zq75"}],"2zq75":[function(require,module,exports) {
require('../../modules/es.symbol');
var path = require('../../internals/path');
module.exports = path.Object.getOwnPropertySymbols;

},{"../../modules/es.symbol":"29Uso","../../internals/path":"2dOsY"}],"PRMSr":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/object/keys");

},{"core-js-pure/stable/object/keys":"3kabc"}],"3kabc":[function(require,module,exports) {
var parent = require('../../es/object/keys');
module.exports = parent;

},{"../../es/object/keys":"4ALf0"}],"4ALf0":[function(require,module,exports) {
require('../../modules/es.object.keys');
var path = require('../../internals/path');
module.exports = path.Object.keys;

},{"../../modules/es.object.keys":"6u4zf","../../internals/path":"2dOsY"}],"6u4zf":[function(require,module,exports) {
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var nativeKeys = require('../internals/object-keys');
var fails = require('../internals/fails');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeKeys(1);
});
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    keys: function keys(it) {
        return nativeKeys(toObject(it));
    }
});

},{"../internals/export":"NKIvz","../internals/to-object":"3Dh0Q","../internals/object-keys":"7db8z","../internals/fails":"4Nuec"}],"5xkLF":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"62Qib"}],"62Qib":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value1) {
                    invoke("next", value1, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key1 = keys.pop();
                if (key1 in object) {
                    next.value = key1;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next1() {
                    while((++i) < iterable.length)if (hasOwn.call(iterable, i)) {
                        next1.value = iterable[i];
                        next1.done = false;
                        return next1;
                    }
                    next1.value = undefined;
                    next1.done = true;
                    return next1;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"298Pj":[function(require,module,exports) {
var _Promise = require("@babel/runtime-corejs3/core-js/promise");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else _Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new _Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/promise":"1ZSGR"}],"1ZSGR":[function(require,module,exports) {
module.exports = require("core-js-pure/features/promise");

},{"core-js-pure/features/promise":"6Hj7T"}],"6Hj7T":[function(require,module,exports) {
var parent = require('../../es/promise');
require('../../modules/esnext.aggregate-error');
// TODO: Remove from `core-js@4`
require('../../modules/esnext.promise.all-settled');
require('../../modules/esnext.promise.try');
require('../../modules/esnext.promise.any');
module.exports = parent;

},{"../../es/promise":"5KlRn","../../modules/esnext.aggregate-error":"2vIHe","../../modules/esnext.promise.all-settled":"4fNf2","../../modules/esnext.promise.try":"2EqFD","../../modules/esnext.promise.any":"24VfB"}],"5KlRn":[function(require,module,exports) {
require('../../modules/es.aggregate-error');
require('../../modules/es.object.to-string');
require('../../modules/es.promise');
require('../../modules/es.promise.all-settled');
require('../../modules/es.promise.any');
require('../../modules/es.promise.finally');
require('../../modules/es.string.iterator');
require('../../modules/web.dom-collections.iterator');
var path = require('../../internals/path');
module.exports = path.Promise;

},{"../../modules/es.aggregate-error":"5tWEI","../../modules/es.object.to-string":"5JeFv","../../modules/es.promise":"2uaNP","../../modules/es.promise.all-settled":"7tigk","../../modules/es.promise.any":"7y1Vi","../../modules/es.promise.finally":"3tdxG","../../modules/es.string.iterator":"7eAah","../../modules/web.dom-collections.iterator":"1fKmg","../../internals/path":"2dOsY"}],"5tWEI":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var create = require('../internals/object-create');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var iterate = require('../internals/iterate');
var $AggregateError = function AggregateError(errors, message) {
    var that = this;
    if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
    if (setPrototypeOf) // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
    if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
    var errorsArray = [];
    iterate(errors, errorsArray.push, {
        that: errorsArray
    });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
};
$AggregateError.prototype = create(Error.prototype, {
    constructor: createPropertyDescriptor(5, $AggregateError),
    message: createPropertyDescriptor(5, ''),
    name: createPropertyDescriptor(5, 'AggregateError')
});
// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({
    global: true
}, {
    AggregateError: $AggregateError
});

},{"../internals/export":"NKIvz","../internals/object-get-prototype-of":"3pO6k","../internals/object-set-prototype-of":"2dGvk","../internals/object-create":"20Ou3","../internals/create-non-enumerable-property":"2B6U4","../internals/create-property-descriptor":"7aAHy","../internals/iterate":"459Pc"}],"459Pc":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = toLength(iterable.length); length > index; index++){
                result = callFn(iterable[index]);
                if (result && result instanceof Result) return result;
            }
            return new Result(false);
        }
        iterator = iterFn.call(iterable);
    }
    next = iterator.next;
    while(!(step = next.call(iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator);
            throw error;
        }
        if (typeof result == 'object' && result && result instanceof Result) return result;
    }
    return new Result(false);
};

},{"../internals/an-object":"6Rjti","../internals/is-array-iterator-method":"EPP77","../internals/to-length":"6shBe","../internals/function-bind-context":"3PeOr","../internals/get-iterator-method":"6V8vX","../internals/iterator-close":"7MTax"}],"2uaNP":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var NativePromise = require('../internals/native-promise-constructor');
var redefine = require('../internals/redefine');
var redefineAll = require('../internals/redefine-all');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var isObject = require('../internals/is-object');
var aFunction = require('../internals/a-function');
var anInstance = require('../internals/an-instance');
var inspectSource = require('../internals/inspect-source');
var iterate = require('../internals/iterate');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var promiseResolve = require('../internals/promise-resolve');
var hostReportErrors = require('../internals/host-report-errors');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var InternalStateModule = require('../internals/internal-state');
var isForced = require('../internals/is-forced');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError1 = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED = isForced(PROMISE, function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#finally in the pure version for preventing prototype pollution
    if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor(function(resolve) {
        resolve(1);
    });
    var FakePromise = function(exec) {
        exec(function() {
        }, function() {
        });
    };
    var constructor = promise.constructor = {
    };
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
    PromiseConstructor.all(iterable)['catch'](function() {
    });
});
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function() {
        var value = state.value;
        var ok = state.state == FULFILLED;
        var index = 0;
        // variable length - can't use forEach
        while(chain.length > index){
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                        state.rejection = HANDLED;
                    }
                    if (handler === true) result = value;
                    else {
                        if (domain) domain.enter();
                        result = handler(value); // can throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(TypeError1('Promise-chain cycle'));
                    else if (then = isThenable(result)) then.call(result, resolve, reject);
                    else resolve(result);
                } else reject(value);
            } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
            }
        }
        state.reactions = [];
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit('unhandledRejection', value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
    task.call(global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit('rejectionHandled', promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw TypeError1("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise1(executor) {
        anInstance(this, PromiseConstructor, PROMISE);
        aFunction(executor);
        Internal.call(this);
        var state = getInternalState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromiseConstructorPrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise2(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
        },
        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        'catch': function(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!SUBCLASSING) {
            // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
            redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function(resolve, reject) {
                    nativeThen.call(that, resolve, reject);
                }).then(onFulfilled, onRejected);
            // https://github.com/zloirock/core-js/issues/640
            }, {
                unsafe: true
            });
            // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
            redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
                unsafe: true
            });
        }
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
}
$({
    global: true,
    wrap: true,
    forced: FORCED
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = getBuiltIn(PROMISE);
// statics
$({
    target: PROMISE,
    stat: true,
    forced: FORCED
}, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        capability.reject.call(undefined, r);
        return capability.promise;
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: IS_PURE || FORCED
}, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
        return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
    }
});
$({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                $promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    (--remaining) || resolve(values);
                }, reject);
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function(promise) {
                $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"NKIvz","../internals/is-pure":"1T5Ge","../internals/global":"2aTzo","../internals/get-built-in":"4h7wt","../internals/native-promise-constructor":"22VVo","../internals/redefine":"5em6q","../internals/redefine-all":"HviGA","../internals/object-set-prototype-of":"2dGvk","../internals/set-to-string-tag":"4vw0U","../internals/set-species":"5Xgqk","../internals/is-object":"4KnRg","../internals/a-function":"77Pld","../internals/an-instance":"4pauM","../internals/inspect-source":"5QDr6","../internals/iterate":"459Pc","../internals/check-correctness-of-iteration":"2S0Vc","../internals/species-constructor":"1LqUj","../internals/task":"2lSnu","../internals/microtask":"1NN6i","../internals/promise-resolve":"10x5P","../internals/host-report-errors":"FGsov","../internals/new-promise-capability":"76IJ9","../internals/perform":"lrquh","../internals/internal-state":"3CN5Q","../internals/is-forced":"Ned2W","../internals/well-known-symbol":"2sBVK","../internals/engine-is-browser":"6lxgl","../internals/engine-is-node":"4WlPz","../internals/engine-v8-version":"PnPmv"}],"22VVo":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global.Promise;

},{"../internals/global":"2aTzo"}],"HviGA":[function(require,module,exports) {
var redefine = require('../internals/redefine');
module.exports = function(target, src, options) {
    for(var key in src)if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
    return target;
};

},{"../internals/redefine":"5em6q"}],"5Xgqk":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"../internals/get-built-in":"4h7wt","../internals/object-define-property":"2eM6x","../internals/well-known-symbol":"2sBVK","../internals/descriptors":"6RgTN"}],"4pauM":[function(require,module,exports) {
module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    return it;
};

},{}],"1LqUj":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

},{"../internals/an-object":"6Rjti","../internals/a-function":"77Pld","../internals/well-known-symbol":"2sBVK"}],"2lSnu":[function(require,module,exports) {
var global = require('../internals/global');
var fails = require('../internals/fails');
var bind = require('../internals/function-bind-context');
var html = require('../internals/html');
var createElement = require('../internals/document-create-element');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel1 = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(id + '', location.protocol + '//' + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel1 && !IS_IOS) {
        channel = new MessageChannel1();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"2aTzo","../internals/fails":"4Nuec","../internals/function-bind-context":"3PeOr","../internals/html":"788G9","../internals/document-create-element":"1iHSM","../internals/engine-is-ios":"6p6bm","../internals/engine-is-node":"4WlPz"}],"6p6bm":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"3Nheh"}],"4WlPz":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
var global = require('../internals/global');
module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"2kpqo","../internals/global":"2aTzo"}],"1NN6i":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var macrotask = require('../internals/task').set;
var IS_IOS = require('../internals/engine-is-ios');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');
var MutationObserver1 = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise1 = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!queueMicrotask) {
    flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(head){
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (error) {
                if (head) notify();
                else last = undefined;
                throw error;
            }
        }
        last = undefined;
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver1 && document) {
        toggle = true;
        node = document.createTextNode('');
        new MutationObserver1(flush).observe(node, {
            characterData: true
        });
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise1 && Promise1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise1.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise1;
        then = promise.then;
        notify = function() {
            then.call(promise, flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function() {
        process.nextTick(flush);
    };
    else notify = function() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
    };
}
module.exports = queueMicrotask || function(fn) {
    var task = {
        fn: fn,
        next: undefined
    };
    if (last) last.next = task;
    if (!head) {
        head = task;
        notify();
    }
    last = task;
};

},{"../internals/global":"2aTzo","../internals/object-get-own-property-descriptor":"5gttT","../internals/task":"2lSnu","../internals/engine-is-ios":"6p6bm","../internals/engine-is-webos-webkit":"3xQsA","../internals/engine-is-node":"4WlPz"}],"3xQsA":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":"3Nheh"}],"10x5P":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"../internals/an-object":"6Rjti","../internals/is-object":"4KnRg","../internals/new-promise-capability":"76IJ9"}],"76IJ9":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"../internals/a-function":"77Pld"}],"FGsov":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = function(a, b) {
    var console = global.console;
    if (console && console.error) arguments.length === 1 ? console.error(a) : console.error(a, b);
};

},{"../internals/global":"2aTzo"}],"lrquh":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"6lxgl":[function(require,module,exports) {
module.exports = typeof window == 'object';

},{}],"7tigk":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({
    target: 'Promise',
    stat: true
}, {
    allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'fulfilled',
                        value: value
                    };
                    (--remaining) || resolve(values);
                }, function(error) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'rejected',
                        reason: error
                    };
                    (--remaining) || resolve(values);
                });
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"NKIvz","../internals/a-function":"77Pld","../internals/new-promise-capability":"76IJ9","../internals/perform":"lrquh","../internals/iterate":"459Pc"}],"7y1Vi":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var getBuiltIn = require('../internals/get-built-in');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_ANY_ERROR = 'No one promise resolved';
// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({
    target: 'Promise',
    stat: true
}, {
    any: function any(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aFunction(C.resolve);
            var errors = [];
            var counter = 0;
            var remaining = 1;
            var alreadyResolved = false;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyRejected = false;
                errors.push(undefined);
                remaining++;
                promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyResolved = true;
                    resolve(value);
                }, function(error) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyRejected = true;
                    errors[index] = error;
                    (--remaining) || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
                });
            });
            (--remaining) || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"NKIvz","../internals/a-function":"77Pld","../internals/get-built-in":"4h7wt","../internals/new-promise-capability":"76IJ9","../internals/perform":"lrquh","../internals/iterate":"459Pc"}],"3tdxG":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var NativePromise = require('../internals/native-promise-constructor');
var fails = require('../internals/fails');
var getBuiltIn = require('../internals/get-built-in');
var speciesConstructor = require('../internals/species-constructor');
var promiseResolve = require('../internals/promise-resolve');
var redefine = require('../internals/redefine');
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function() {
    NativePromise.prototype['finally'].call({
        then: function() {
        }
    }, function() {
    });
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
}, {
    'finally': function(onFinally) {
        var C = speciesConstructor(this, getBuiltIn('Promise'));
        var isFunction = typeof onFinally == 'function';
        return this.then(isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && typeof NativePromise == 'function') {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromise.prototype['finally'] !== method) redefine(NativePromise.prototype, 'finally', method, {
        unsafe: true
    });
}

},{"../internals/export":"NKIvz","../internals/is-pure":"1T5Ge","../internals/native-promise-constructor":"22VVo","../internals/fails":"4Nuec","../internals/get-built-in":"4h7wt","../internals/species-constructor":"1LqUj","../internals/promise-resolve":"10x5P","../internals/redefine":"5em6q"}],"2vIHe":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
require('./es.aggregate-error');

},{"./es.aggregate-error":"5tWEI"}],"4fNf2":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
require('./es.promise.all-settled.js');

},{"./es.promise.all-settled.js":"7tigk"}],"2EqFD":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({
    target: 'Promise',
    stat: true
}, {
    'try': function(callbackfn) {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        var result = perform(callbackfn);
        (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
        return promiseCapability.promise;
    }
});

},{"../internals/export":"NKIvz","../internals/new-promise-capability":"76IJ9","../internals/perform":"lrquh"}],"24VfB":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
require('./es.promise.any');

},{"./es.promise.any":"7y1Vi"}],"46EI2":[function(require,module,exports) {
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
function _defineProperty(obj, key, value) {
    if (key in obj) _Object$defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/object/define-property":"700d5"}],"700d5":[function(require,module,exports) {
module.exports = require("core-js-pure/features/object/define-property");

},{"core-js-pure/features/object/define-property":"4k9RZ"}],"4k9RZ":[function(require,module,exports) {
var parent = require('../../es/object/define-property');
module.exports = parent;

},{"../../es/object/define-property":"6OGqV"}],"3ehl2":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"4Q0Vu":[function(require,module,exports) {
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/object/define-property":"700d5"}],"2Hqk2":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/concat");

},{"core-js-pure/stable/instance/concat":"4FkZc"}],"4FkZc":[function(require,module,exports) {
var parent = require('../../es/instance/concat');
module.exports = parent;

},{"../../es/instance/concat":"22KJp"}],"22KJp":[function(require,module,exports) {
var concat = require('../array/virtual/concat');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.concat;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.concat ? concat : own;
};

},{"../array/virtual/concat":"3BvFv"}],"3BvFv":[function(require,module,exports) {
require('../../../modules/es.array.concat');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').concat;

},{"../../../modules/es.array.concat":"5F39O","../../../internals/entry-virtual":"6ydnH"}],"62wH2":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/reduce");

},{"core-js-pure/stable/instance/reduce":"5CXoK"}],"5CXoK":[function(require,module,exports) {
var parent = require('../../es/instance/reduce');
module.exports = parent;

},{"../../es/instance/reduce":"4NHxH"}],"4NHxH":[function(require,module,exports) {
var reduce = require('../array/virtual/reduce');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.reduce;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.reduce ? reduce : own;
};

},{"../array/virtual/reduce":"393TG"}],"393TG":[function(require,module,exports) {
require('../../../modules/es.array.reduce');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').reduce;

},{"../../../modules/es.array.reduce":"65jAG","../../../internals/entry-virtual":"6ydnH"}],"65jAG":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD || CHROME_BUG
}, {
    reduce: function reduce(callbackfn/* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-reduce":"2nbDi","../internals/array-method-is-strict":"Uuy0R","../internals/engine-v8-version":"PnPmv","../internals/engine-is-node":"4WlPz"}],"2nbDi":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = toLength(O.length);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw TypeError('Reduce of empty array with no initial value');
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"../internals/a-function":"77Pld","../internals/to-object":"3Dh0Q","../internals/indexed-object":"7ndQF","../internals/to-length":"6shBe"}],"3OVb5":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/date/now");

},{"core-js-pure/stable/date/now":"4Q30m"}],"4Q30m":[function(require,module,exports) {
var parent = require('../../es/date/now');
module.exports = parent;

},{"../../es/date/now":"y9qao"}],"y9qao":[function(require,module,exports) {
require('../../modules/es.date.now');
var path = require('../../internals/path');
module.exports = path.Date.now;

},{"../../modules/es.date.now":"pbfiU","../../internals/path":"2dOsY"}],"pbfiU":[function(require,module,exports) {
var $ = require('../internals/export');
// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({
    target: 'Date',
    stat: true
}, {
    now: function now() {
        return new Date().getTime();
    }
});

},{"../internals/export":"NKIvz"}],"xL010":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/every");

},{"core-js-pure/stable/instance/every":"2v6PP"}],"2v6PP":[function(require,module,exports) {
var parent = require('../../es/instance/every');
module.exports = parent;

},{"../../es/instance/every":"1BVqK"}],"1BVqK":[function(require,module,exports) {
var every = require('../array/virtual/every');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.every;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.every ? every : own;
};

},{"../array/virtual/every":"2LHoq"}],"2LHoq":[function(require,module,exports) {
require('../../../modules/es.array.every');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').every;

},{"../../../modules/es.array.every":"5oR5C","../../../internals/entry-virtual":"6ydnH"}],"5oR5C":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $every = require('../internals/array-iteration').every;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('every');
// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    every: function every(callbackfn/* , thisArg */ ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-iteration":"OHQch","../internals/array-method-is-strict":"Uuy0R"}],"1CVwa":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/promise");

},{"core-js-pure/stable/promise":"gh2lK"}],"gh2lK":[function(require,module,exports) {
var parent = require('../../es/promise');
module.exports = parent;

},{"../../es/promise":"5KlRn"}],"2lqfw":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/bind");

},{"core-js-pure/stable/instance/bind":"4eM9Y"}],"4eM9Y":[function(require,module,exports) {
var parent = require('../../es/instance/bind');
module.exports = parent;

},{"../../es/instance/bind":"1x7JD"}],"1x7JD":[function(require,module,exports) {
var bind = require('../function/virtual/bind');
var FunctionPrototype = Function.prototype;
module.exports = function(it) {
    var own = it.bind;
    return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind : own;
};

},{"../function/virtual/bind":"5i8c4"}],"5i8c4":[function(require,module,exports) {
require('../../../modules/es.function.bind');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Function').bind;

},{"../../../modules/es.function.bind":"3OfKn","../../../internals/entry-virtual":"6ydnH"}],"3OfKn":[function(require,module,exports) {
var $ = require('../internals/export');
var bind = require('../internals/function-bind');
// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({
    target: 'Function',
    proto: true
}, {
    bind: bind
});

},{"../internals/export":"NKIvz","../internals/function-bind":"45r3x"}],"45r3x":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var isObject = require('../internals/is-object');
var slice = [].slice;
var factories = {
};
var construct = function(C, argsLength, args) {
    if (!(argsLength in factories)) {
        for(var list = [], i = 0; i < argsLength; i++)list[i] = 'a[' + i + ']';
        // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
        factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    }
    return factories[argsLength](C, args);
};
// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that/* , ...args */ ) {
    var fn = aFunction(this);
    var partArgs = slice.call(arguments, 1);
    var boundFunction = function bound() {
        var args = partArgs.concat(slice.call(arguments));
        return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
};

},{"../internals/a-function":"77Pld","../internals/is-object":"4KnRg"}],"5SXY1":[function(require,module,exports) {
var global = arguments[3];
var now = require('performance-now'), root = typeof window === 'undefined' ? global : window, vendors = [
    'moz',
    'webkit'
], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i1 = 0; i1 < cp.length; i1++){
                    if (!cp[i1].cancelled) try {
                        cp[i1].callback(last);
                    } catch (e) {
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i1 = 0; i1 < queue.length; i1++)if (queue[i1].handle === handle) queue[i1].cancelled = true;
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) object = root;
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};

},{"performance-now":"3LCsj"}],"3LCsj":[function(require,module,exports) {
var process = require("process");
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1000000;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1000000000 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1000000000;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{"process":"7AgFc"}],"1UES6":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/trim");

},{"core-js-pure/stable/instance/trim":"5iJsX"}],"5iJsX":[function(require,module,exports) {
var parent = require('../../es/instance/trim');
module.exports = parent;

},{"../../es/instance/trim":"3n0hL"}],"3n0hL":[function(require,module,exports) {
var trim = require('../string/virtual/trim');
var StringPrototype = String.prototype;
module.exports = function(it) {
    var own = it.trim;
    return typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.trim ? trim : own;
};

},{"../string/virtual/trim":"233Fq"}],"233Fq":[function(require,module,exports) {
require('../../../modules/es.string.trim');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('String').trim;

},{"../../../modules/es.string.trim":"7GlB0","../../../internals/entry-virtual":"6ydnH"}],"7GlB0":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"../internals/export":"NKIvz","../internals/string-trim":"6S5Ri","../internals/string-trim-forced":"7KH45"}],"7KH45":[function(require,module,exports) {
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');
var non = '\u200B\u0085\u180E';
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"../internals/fails":"4Nuec","../internals/whitespaces":"3LNWY"}],"6hDU8":[function(require,module,exports) {
/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/ module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1;
    // strip any leading #
    if (color_string.charAt(0) == '#') color_string = color_string.substr(1, 6);
    color_string = color_string.replace(/ /g, '');
    color_string = color_string.toLowerCase();
    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors
    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [
                'rgba(123, 234, 45, 0.8)',
                'rgba(255,234,245,1.0)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                'rgb(123, 234, 45)',
                'rgb(255,234,245)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [
                '#00ff00',
                '336699'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [
                '#fb0',
                'f0f'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];
    // search through the definitions to find a match
    for(var i = 0; i < color_defs.length; i++){
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) this.alpha = channels[3];
            this.ok = true;
        }
    }
    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
    // some getters
    this.toRGB = function() {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };
    this.toRGBA = function() {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    };
    this.toHex = function() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    };
    // help
    this.getHelpXML = function() {
        var examples = new Array();
        // add regexps
        for(var i1 = 0; i1 < color_defs.length; i1++){
            var example = color_defs[i1].example;
            for(var j = 0; j < example.length; j++)examples[examples.length] = example[j];
        }
        // add type-in colors
        for(var sc in simple_colors)examples[examples.length] = sc;
        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for(var i1 = 0; i1 < examples.length; i1++)try {
            var list_item = document.createElement('li');
            var list_color = new RGBColor(examples[i1]);
            var example_div = document.createElement('div');
            example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
            example_div.appendChild(document.createTextNode('test'));
            var list_item_value = document.createTextNode(' ' + examples[i1] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
            list_item.appendChild(example_div);
            list_item.appendChild(list_item_value);
            xml.appendChild(list_item);
        } catch (e) {
        }
        return xml;
    };
};

},{}],"JzzXv":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/reflect/construct");

},{"core-js-pure/stable/reflect/construct":"4Uh8B"}],"4Uh8B":[function(require,module,exports) {
var parent = require('../../es/reflect/construct');
module.exports = parent;

},{"../../es/reflect/construct":"4fIyw"}],"4fIyw":[function(require,module,exports) {
require('../../modules/es.reflect.construct');
var path = require('../../internals/path');
module.exports = path.Reflect.construct;

},{"../../modules/es.reflect.construct":"4HGba","../../internals/path":"2dOsY"}],"4HGba":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var bind = require('../internals/function-bind');
var fails = require('../internals/fails');
var nativeConstruct = getBuiltIn('Reflect', 'construct');
// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function() {
    function F() {
    }
    return !(nativeConstruct(function() {
    }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
    nativeConstruct(function() {
    });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
    target: 'Reflect',
    stat: true,
    forced: FORCED,
    sham: FORCED
}, {
    construct: function construct(Target, args/* , newTarget */ ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch(args.length){
                case 0:
                    return new Target();
                case 1:
                    return new Target(args[0]);
                case 2:
                    return new Target(args[0], args[1]);
                case 3:
                    return new Target(args[0], args[1], args[2]);
                case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [
                null
            ];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
    }
});

},{"../internals/export":"NKIvz","../internals/get-built-in":"4h7wt","../internals/a-function":"77Pld","../internals/an-object":"6Rjti","../internals/is-object":"4KnRg","../internals/object-create":"20Ou3","../internals/function-bind":"45r3x","../internals/fails":"4Nuec"}],"5jDJL":[function(require,module,exports) {
var _Object$create = require("@babel/runtime-corejs3/core-js/object/create");
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = _Object$create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/object/create":"21qoZ","./setPrototypeOf.js":"3Uzvx"}],"21qoZ":[function(require,module,exports) {
module.exports = require("core-js-pure/features/object/create");

},{"core-js-pure/features/object/create":"2DPOa"}],"2DPOa":[function(require,module,exports) {
var parent = require('../../es/object/create');
module.exports = parent;

},{"../../es/object/create":"6LVsS"}],"6LVsS":[function(require,module,exports) {
require('../../modules/es.object.create');
var path = require('../../internals/path');
var Object1 = path.Object;
module.exports = function create(P, D) {
    return Object1.create(P, D);
};

},{"../../modules/es.object.create":"O3DNF","../../internals/path":"2dOsY"}],"O3DNF":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var create = require('../internals/object-create');
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    create: create
});

},{"../internals/export":"NKIvz","../internals/descriptors":"6RgTN","../internals/object-create":"20Ou3"}],"3Uzvx":[function(require,module,exports) {
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js/object/set-prototype-of");
function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/object/set-prototype-of":"2ejy6"}],"2ejy6":[function(require,module,exports) {
module.exports = require("core-js-pure/features/object/set-prototype-of");

},{"core-js-pure/features/object/set-prototype-of":"1q4C3"}],"1q4C3":[function(require,module,exports) {
var parent = require('../../es/object/set-prototype-of');
module.exports = parent;

},{"../../es/object/set-prototype-of":"1ktoj"}],"1ktoj":[function(require,module,exports) {
require('../../modules/es.object.set-prototype-of');
var path = require('../../internals/path');
module.exports = path.Object.setPrototypeOf;

},{"../../modules/es.object.set-prototype-of":"7lGfm","../../internals/path":"2dOsY"}],"7lGfm":[function(require,module,exports) {
var $ = require('../internals/export');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({
    target: 'Object',
    stat: true
}, {
    setPrototypeOf: setPrototypeOf
});

},{"../internals/export":"NKIvz","../internals/object-set-prototype-of":"2dGvk"}],"1cOL5":[function(require,module,exports) {
var _typeof = require("@babel/runtime-corejs3/helpers/typeof")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/helpers/typeof":"4cqkF","./assertThisInitialized.js":"5wDds"}],"4cqkF":[function(require,module,exports) {
var _Symbol = require("@babel/runtime-corejs3/core-js/symbol");
var _Symbol$iterator = require("@babel/runtime-corejs3/core-js/symbol/iterator");
function _typeof(obj) {
    if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
        module.exports = _typeof = function _typeof1(obj1) {
            return typeof obj1;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
        module.exports = _typeof = function _typeof1(obj1) {
            return obj1 && typeof _Symbol === "function" && obj1.constructor === _Symbol && obj1 !== _Symbol.prototype ? "symbol" : typeof obj1;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _typeof(obj);
}
module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/symbol":"LVzc2","@babel/runtime-corejs3/core-js/symbol/iterator":"3P4Yc"}],"3P4Yc":[function(require,module,exports) {
module.exports = require("core-js-pure/features/symbol/iterator");

},{"core-js-pure/features/symbol/iterator":"4o5KW"}],"4o5KW":[function(require,module,exports) {
var parent = require('../../es/symbol/iterator');
module.exports = parent;

},{"../../es/symbol/iterator":"45ggE"}],"45ggE":[function(require,module,exports) {
require('../../modules/es.symbol.iterator');
require('../../modules/es.string.iterator');
require('../../modules/web.dom-collections.iterator');
var WrappedWellKnownSymbolModule = require('../../internals/well-known-symbol-wrapped');
module.exports = WrappedWellKnownSymbolModule.f('iterator');

},{"../../modules/es.symbol.iterator":"6bWOk","../../modules/es.string.iterator":"7eAah","../../modules/web.dom-collections.iterator":"1fKmg","../../internals/well-known-symbol-wrapped":"4hRdO"}],"5wDds":[function(require,module,exports) {
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"515w8":[function(require,module,exports) {
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js/object/set-prototype-of");
var _Object$getPrototypeOf = require("@babel/runtime-corejs3/core-js/object/get-prototype-of");
function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || _Object$getPrototypeOf(o1);
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/object/set-prototype-of":"2ejy6","@babel/runtime-corejs3/core-js/object/get-prototype-of":"5M8rn"}],"5M8rn":[function(require,module,exports) {
module.exports = require("core-js-pure/features/object/get-prototype-of");

},{"core-js-pure/features/object/get-prototype-of":"65Csg"}],"65Csg":[function(require,module,exports) {
var parent = require('../../es/object/get-prototype-of');
module.exports = parent;

},{"../../es/object/get-prototype-of":"45n55"}],"45n55":[function(require,module,exports) {
require('../../modules/es.object.get-prototype-of');
var path = require('../../internals/path');
module.exports = path.Object.getPrototypeOf;

},{"../../modules/es.object.get-prototype-of":"563rm","../../internals/path":"2dOsY"}],"563rm":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeGetPrototypeOf(1);
});
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(it) {
        return nativeGetPrototypeOf(toObject(it));
    }
});

},{"../internals/export":"NKIvz","../internals/fails":"4Nuec","../internals/to-object":"3Dh0Q","../internals/object-get-prototype-of":"3pO6k","../internals/correct-prototype-getter":"3oPuB"}],"1TX2B":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./arrayWithoutHoles.js":"4v7Ue","./iterableToArray.js":"6rNjn","./unsupportedIterableToArray.js":"40cVE","./nonIterableSpread.js":"6HTFW"}],"4v7Ue":[function(require,module,exports) {
var _Array$isArray = require("@babel/runtime-corejs3/core-js/array/is-array");
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
    if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/array/is-array":"47vbc","./arrayLikeToArray.js":"1nT8V"}],"6rNjn":[function(require,module,exports) {
var _Symbol = require("@babel/runtime-corejs3/core-js/symbol");
var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");
var _Array$from = require("@babel/runtime-corejs3/core-js/array/from");
function _iterableToArray(iter) {
    if (typeof _Symbol !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
}
module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/symbol":"LVzc2","@babel/runtime-corejs3/core-js/get-iterator-method":"gT3qb","@babel/runtime-corejs3/core-js/array/from":"4VG1v"}],"6HTFW":[function(require,module,exports) {
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"41roQ":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/some");

},{"core-js-pure/stable/instance/some":"56GfQ"}],"56GfQ":[function(require,module,exports) {
var parent = require('../../es/instance/some');
module.exports = parent;

},{"../../es/instance/some":"10uYl"}],"10uYl":[function(require,module,exports) {
var some = require('../array/virtual/some');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.some;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.some ? some : own;
};

},{"../array/virtual/some":"75phP"}],"75phP":[function(require,module,exports) {
require('../../../modules/es.array.some');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').some;

},{"../../../modules/es.array.some":"23OKA","../../../internals/entry-virtual":"6ydnH"}],"23OKA":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('some');
// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    some: function some(callbackfn/* , thisArg */ ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-iteration":"OHQch","../internals/array-method-is-strict":"Uuy0R"}],"5OeIL":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/includes");

},{"core-js-pure/stable/instance/includes":"3ApBN"}],"3ApBN":[function(require,module,exports) {
var parent = require('../../es/instance/includes');
module.exports = parent;

},{"../../es/instance/includes":"72i97"}],"72i97":[function(require,module,exports) {
var arrayIncludes = require('../array/virtual/includes');
var stringIncludes = require('../string/virtual/includes');
var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;
module.exports = function(it) {
    var own = it.includes;
    if (it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.includes) return arrayIncludes;
    if (typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.includes) return stringIncludes;
    return own;
};

},{"../array/virtual/includes":"d9b5l","../string/virtual/includes":"5GwwS"}],"d9b5l":[function(require,module,exports) {
require('../../../modules/es.array.includes');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').includes;

},{"../../../modules/es.array.includes":"1eKzI","../../../internals/entry-virtual":"6ydnH"}],"1eKzI":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: 'Array',
    proto: true
}, {
    includes: function includes(el/* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"NKIvz","../internals/array-includes":"63rQL","../internals/add-to-unscopables":"uq3hi"}],"5GwwS":[function(require,module,exports) {
require('../../../modules/es.string.includes');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('String').includes;

},{"../../../modules/es.string.includes":"2UnM7","../../../internals/entry-virtual":"6ydnH"}],"2UnM7":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
}, {
    includes: function includes(searchString/* , position = 0 */ ) {
        return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/not-a-regexp":"4XEFt","../internals/require-object-coercible":"1pbMr","../internals/correct-is-regexp-logic":"4PQp5"}],"3W7oB":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/array/from");

},{"core-js-pure/stable/array/from":"7bdm8"}],"7bdm8":[function(require,module,exports) {
var parent = require('../../es/array/from');
module.exports = parent;

},{"../../es/array/from":"5SSqk"}],"3vnrL":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/reverse");

},{"core-js-pure/stable/instance/reverse":"4ls6N"}],"4ls6N":[function(require,module,exports) {
var parent = require('../../es/instance/reverse');
module.exports = parent;

},{"../../es/instance/reverse":"4n4xX"}],"4n4xX":[function(require,module,exports) {
var reverse = require('../array/virtual/reverse');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.reverse;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.reverse ? reverse : own;
};

},{"../array/virtual/reverse":"ioWM2"}],"ioWM2":[function(require,module,exports) {
require('../../../modules/es.array.reverse');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').reverse;

},{"../../../modules/es.array.reverse":"6pOiZ","../../../internals/entry-virtual":"6ydnH"}],"6pOiZ":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var nativeReverse = [].reverse;
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse.call(this);
    }
});

},{"../internals/export":"NKIvz","../internals/is-array":"1x6Hk"}],"2NuTQ":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/index-of");

},{"core-js-pure/stable/instance/index-of":"2qygj"}],"2qygj":[function(require,module,exports) {
var parent = require('../../es/instance/index-of');
module.exports = parent;

},{"../../es/instance/index-of":"5gOGI"}],"5gOGI":[function(require,module,exports) {
var indexOf = require('../array/virtual/index-of');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.indexOf;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.indexOf ? indexOf : own;
};

},{"../array/virtual/index-of":"4tpH1"}],"4tpH1":[function(require,module,exports) {
require('../../../modules/es.array.index-of');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').indexOf;

},{"../../../modules/es.array.index-of":"6gTJ6","../../../internals/entry-virtual":"6ydnH"}],"6gTJ6":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require('../internals/export');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [
    1
].indexOf(1, -0.0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD
}, {
    indexOf: function indexOf(searchElement/* , fromIndex = 0 */ ) {
        return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"NKIvz","../internals/array-includes":"63rQL","../internals/array-method-is-strict":"Uuy0R"}],"1RfLx":[function(require,module,exports) {
var _Reflect$get = require("@babel/runtime-corejs3/core-js/reflect/get");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor");
var superPropBase = require("./superPropBase.js");
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && _Reflect$get) {
        module.exports = _get = _Reflect$get;
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
        module.exports = _get = function _get1(target1, property1, receiver1) {
            var base = superPropBase(target1, property1);
            if (!base) return;
            var desc = _Object$getOwnPropertyDescriptor(base, property1);
            if (desc.get) return desc.get.call(receiver1);
            return desc.value;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _get(target, property, receiver || target);
}
module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"@babel/runtime-corejs3/core-js/reflect/get":"1T06n","@babel/runtime-corejs3/core-js/object/get-own-property-descriptor":"4vLy7","./superPropBase.js":"2PK7X"}],"1T06n":[function(require,module,exports) {
module.exports = require("core-js-pure/features/reflect/get");

},{"core-js-pure/features/reflect/get":"3skUH"}],"3skUH":[function(require,module,exports) {
var parent = require('../../es/reflect/get');
module.exports = parent;

},{"../../es/reflect/get":"1eKC0"}],"1eKC0":[function(require,module,exports) {
require('../../modules/es.reflect.get');
var path = require('../../internals/path');
module.exports = path.Reflect.get;

},{"../../modules/es.reflect.get":"53ilF","../../internals/path":"2dOsY"}],"53ilF":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var has = require('../internals/has');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey/* , receiver */ ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject(target) === receiver) return target[propertyKey];
    if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
    if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}
$({
    target: 'Reflect',
    stat: true
}, {
    get: get
});

},{"../internals/export":"NKIvz","../internals/is-object":"4KnRg","../internals/an-object":"6Rjti","../internals/has":"4S28p","../internals/object-get-own-property-descriptor":"5gttT","../internals/object-get-prototype-of":"3pO6k"}],"4vLy7":[function(require,module,exports) {
module.exports = require("core-js-pure/features/object/get-own-property-descriptor");

},{"core-js-pure/features/object/get-own-property-descriptor":"5DXSG"}],"5DXSG":[function(require,module,exports) {
var parent = require('../../es/object/get-own-property-descriptor');
module.exports = parent;

},{"../../es/object/get-own-property-descriptor":"2AAiy"}],"2PK7X":[function(require,module,exports) {
var getPrototypeOf = require("./getPrototypeOf.js");
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./getPrototypeOf.js":"515w8"}],"jdeDf":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/fill");

},{"core-js-pure/stable/instance/fill":"5N7RU"}],"5N7RU":[function(require,module,exports) {
var parent = require('../../es/instance/fill');
module.exports = parent;

},{"../../es/instance/fill":"2W2sB"}],"2W2sB":[function(require,module,exports) {
var fill = require('../array/virtual/fill');
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.fill;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.fill ? fill : own;
};

},{"../array/virtual/fill":"t0Xzh"}],"t0Xzh":[function(require,module,exports) {
require('../../../modules/es.array.fill');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').fill;

},{"../../../modules/es.array.fill":"1qSDH","../../../internals/entry-virtual":"6ydnH"}],"1qSDH":[function(require,module,exports) {
var $ = require('../internals/export');
var fill = require('../internals/array-fill');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({
    target: 'Array',
    proto: true
}, {
    fill: fill
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

},{"../internals/export":"NKIvz","../internals/array-fill":"1WsqH","../internals/add-to-unscopables":"uq3hi"}],"1WsqH":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value/* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"../internals/to-object":"3Dh0Q","../internals/to-absolute-index":"69Ghy","../internals/to-length":"6shBe"}],"78iiq":[function(require,module,exports) {
(function(t, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], r) : r((t = t || self).svgpathdata = {
    });
})(this, function(t) {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var r = function(t1, e) {
        return (r = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t2, r1) {
            t2.__proto__ = r1;
        } || function(t2, r1) {
            for(var e1 in r1)r1.hasOwnProperty(e1) && (t2[e1] = r1[e1]);
        })(t1, e);
    };
    function e(t1, e1) {
        function a() {
            this.constructor = t1;
        }
        r(t1, e1), t1.prototype = null === e1 ? Object.create(e1) : (a.prototype = e1.prototype, new a);
    }
    function a(t1) {
        var r1 = "";
        Array.isArray(t1) || (t1 = [
            t1
        ]);
        for(var e1 = 0; e1 < t1.length; e1++){
            var a1 = t1[e1];
            if (a1.type === _.CLOSE_PATH) r1 += "z";
            else if (a1.type === _.HORIZ_LINE_TO) r1 += (a1.relative ? "h" : "H") + a1.x;
            else if (a1.type === _.VERT_LINE_TO) r1 += (a1.relative ? "v" : "V") + a1.y;
            else if (a1.type === _.MOVE_TO) r1 += (a1.relative ? "m" : "M") + a1.x + " " + a1.y;
            else if (a1.type === _.LINE_TO) r1 += (a1.relative ? "l" : "L") + a1.x + " " + a1.y;
            else if (a1.type === _.CURVE_TO) r1 += (a1.relative ? "c" : "C") + a1.x1 + " " + a1.y1 + " " + a1.x2 + " " + a1.y2 + " " + a1.x + " " + a1.y;
            else if (a1.type === _.SMOOTH_CURVE_TO) r1 += (a1.relative ? "s" : "S") + a1.x2 + " " + a1.y2 + " " + a1.x + " " + a1.y;
            else if (a1.type === _.QUAD_TO) r1 += (a1.relative ? "q" : "Q") + a1.x1 + " " + a1.y1 + " " + a1.x + " " + a1.y;
            else if (a1.type === _.SMOOTH_QUAD_TO) r1 += (a1.relative ? "t" : "T") + a1.x + " " + a1.y;
            else {
                if (a1.type !== _.ARC) throw new Error('Unexpected command type "' + a1.type + '" at index ' + e1 + ".");
                r1 += (a1.relative ? "a" : "A") + a1.rX + " " + a1.rY + " " + a1.xRot + " " + +a1.lArcFlag + " " + +a1.sweepFlag + " " + a1.x + " " + a1.y;
            }
        }
        return r1;
    }
    function i(t1, r1) {
        var e1 = t1[0], a2 = t1[1];
        return [
            e1 * Math.cos(r1) - a2 * Math.sin(r1),
            e1 * Math.sin(r1) + a2 * Math.cos(r1)
        ];
    }
    function n() {
        for(var t1 = [], r1 = 0; r1 < arguments.length; r1++)t1[r1] = arguments[r1];
        for(var e1 = 0; e1 < t1.length; e1++)if ("number" != typeof t1[e1]) throw new Error("assertNumbers arguments[" + e1 + "] is not a number. " + typeof t1[e1] + " == typeof " + t1[e1]);
        return true;
    }
    var o1 = Math.PI;
    function s(t1, r1, e1) {
        t1.lArcFlag = 0 === t1.lArcFlag ? 0 : 1, t1.sweepFlag = 0 === t1.sweepFlag ? 0 : 1;
        var a2 = t1.rX, n1 = t1.rY, s1 = t1.x, u = t1.y;
        a2 = Math.abs(t1.rX), n1 = Math.abs(t1.rY);
        var h = i([
            (r1 - s1) / 2,
            (e1 - u) / 2
        ], -t1.xRot / 180 * o1), c = h[0], m = h[1], y = Math.pow(c, 2) / Math.pow(a2, 2) + Math.pow(m, 2) / Math.pow(n1, 2);
        1 < y && (a2 *= Math.sqrt(y), n1 *= Math.sqrt(y)), t1.rX = a2, t1.rY = n1;
        var p = Math.pow(a2, 2) * Math.pow(m, 2) + Math.pow(n1, 2) * Math.pow(c, 2), T = (t1.lArcFlag !== t1.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a2, 2) * Math.pow(n1, 2) - p) / p)), f = a2 * m / n1 * T, O = -n1 * c / a2 * T, v = i([
            f,
            O
        ], t1.xRot / 180 * o1);
        t1.cX = v[0] + (r1 + s1) / 2, t1.cY = v[1] + (e1 + u) / 2, t1.phi1 = Math.atan2((m - O) / n1, (c - f) / a2), t1.phi2 = Math.atan2((-m - O) / n1, (-c - f) / a2), 0 === t1.sweepFlag && t1.phi2 > t1.phi1 && (t1.phi2 -= 2 * o1), 1 === t1.sweepFlag && t1.phi2 < t1.phi1 && (t1.phi2 += 2 * o1), t1.phi1 *= 180 / o1, t1.phi2 *= 180 / o1;
    }
    function u(t1, r1, e1) {
        n(t1, r1, e1);
        var a2 = t1 * t1 + r1 * r1 - e1 * e1;
        if (0 > a2) return [];
        if (0 === a2) return [
            [
                t1 * e1 / (t1 * t1 + r1 * r1),
                r1 * e1 / (t1 * t1 + r1 * r1)
            ]
        ];
        var i1 = Math.sqrt(a2);
        return [
            [
                (t1 * e1 + r1 * i1) / (t1 * t1 + r1 * r1),
                (r1 * e1 - t1 * i1) / (t1 * t1 + r1 * r1)
            ],
            [
                (t1 * e1 - r1 * i1) / (t1 * t1 + r1 * r1),
                (r1 * e1 + t1 * i1) / (t1 * t1 + r1 * r1)
            ]
        ];
    }
    var h = Math.PI / 180;
    function c(t1, r1, e1) {
        return (1 - e1) * t1 + e1 * r1;
    }
    function m(t1, r1, e1, a2) {
        return t1 + Math.cos(a2 / 180 * o1) * r1 + Math.sin(a2 / 180 * o1) * e1;
    }
    function y(t1, r1, e1, a2) {
        var i1 = r1 - t1, n1 = e1 - r1, o1 = 3 * i1 + 3 * (a2 - e1) - 6 * n1, s1 = 6 * (n1 - i1), u1 = 3 * i1;
        return Math.abs(o1) < 0.000001 ? [
            -u1 / s1
        ] : (function(t2, r2, e2) {
            (void 0) === e2 && (e2 = 0.000001);
            var a3 = t2 * t2 / 4 - r2;
            if (a3 < -e2) return [];
            if (a3 <= e2) return [
                -t2 / 2
            ];
            var i2 = Math.sqrt(a3);
            return [
                -t2 / 2 - i2,
                -t2 / 2 + i2
            ];
        })(s1 / o1, u1 / o1, 0.000001);
    }
    function p(t1, r1, e1, a2, i1) {
        var n1 = 1 - i1;
        return t1 * (n1 * n1 * n1) + r1 * (3 * n1 * n1 * i1) + e1 * (3 * n1 * i1 * i1) + a2 * (i1 * i1 * i1);
    }
    (function(t1) {
        function r1() {
            return o3(function(t2, r2, e1) {
                return t2.relative && ((void 0) !== t2.x1 && (t2.x1 += r2), (void 0) !== t2.y1 && (t2.y1 += e1), (void 0) !== t2.x2 && (t2.x2 += r2), (void 0) !== t2.y2 && (t2.y2 += e1), (void 0) !== t2.x && (t2.x += r2), (void 0) !== t2.y && (t2.y += e1), t2.relative = false), t2;
            });
        }
        function e1() {
            var t2 = NaN, r2 = NaN, e2 = NaN, a2 = NaN;
            return o3(function(i1, n1, o2) {
                return i1.type & _.SMOOTH_CURVE_TO && (i1.type = _.CURVE_TO, t2 = isNaN(t2) ? n1 : t2, r2 = isNaN(r2) ? o2 : r2, i1.x1 = i1.relative ? n1 - t2 : 2 * n1 - t2, i1.y1 = i1.relative ? o2 - r2 : 2 * o2 - r2), i1.type & _.CURVE_TO ? (t2 = i1.relative ? n1 + i1.x2 : i1.x2, r2 = i1.relative ? o2 + i1.y2 : i1.y2) : (t2 = NaN, r2 = NaN), i1.type & _.SMOOTH_QUAD_TO && (i1.type = _.QUAD_TO, e2 = isNaN(e2) ? n1 : e2, a2 = isNaN(a2) ? o2 : a2, i1.x1 = i1.relative ? n1 - e2 : 2 * n1 - e2, i1.y1 = i1.relative ? o2 - a2 : 2 * o2 - a2), i1.type & _.QUAD_TO ? (e2 = i1.relative ? n1 + i1.x1 : i1.x1, a2 = i1.relative ? o2 + i1.y1 : i1.y1) : (e2 = NaN, a2 = NaN), i1;
            });
        }
        function a2() {
            var t2 = NaN, r2 = NaN;
            return o3(function(e2, a3, i1) {
                if (e2.type & _.SMOOTH_QUAD_TO && (e2.type = _.QUAD_TO, t2 = isNaN(t2) ? a3 : t2, r2 = isNaN(r2) ? i1 : r2, e2.x1 = e2.relative ? a3 - t2 : 2 * a3 - t2, e2.y1 = e2.relative ? i1 - r2 : 2 * i1 - r2), e2.type & _.QUAD_TO) {
                    t2 = e2.relative ? a3 + e2.x1 : e2.x1, r2 = e2.relative ? i1 + e2.y1 : e2.y1;
                    var n1 = e2.x1, o2 = e2.y1;
                    e2.type = _.CURVE_TO, e2.x1 = ((e2.relative ? 0 : a3) + 2 * n1) / 3, e2.y1 = ((e2.relative ? 0 : i1) + 2 * o2) / 3, e2.x2 = (e2.x + 2 * n1) / 3, e2.y2 = (e2.y + 2 * o2) / 3;
                } else t2 = NaN, r2 = NaN;
                return e2;
            });
        }
        function o3(t2) {
            var r2 = 0, e2 = 0, a3 = NaN, i1 = NaN;
            return function(n2) {
                if (isNaN(a3) && !(n2.type & _.MOVE_TO)) throw new Error("path must start with moveto");
                var o4 = t2(n2, r2, e2, a3, i1);
                return n2.type & _.CLOSE_PATH && (r2 = a3, e2 = i1), (void 0) !== n2.x && (r2 = n2.relative ? r2 + n2.x : n2.x), (void 0) !== n2.y && (e2 = n2.relative ? e2 + n2.y : n2.y), n2.type & _.MOVE_TO && (a3 = r2, i1 = e2), o4;
            };
        }
        function T(t2, r2, e2, a3, i1, s1) {
            return n(t2, r2, e2, a3, i1, s1), o3(function(n2, o4, u1, h1) {
                var c1 = n2.x1, m1 = n2.x2, y1 = n2.relative && !isNaN(h1), p1 = (void 0) !== n2.x ? n2.x : y1 ? 0 : o4, T1 = (void 0) !== n2.y ? n2.y : y1 ? 0 : u1;
                function f(t3) {
                    return t3 * t3;
                }
                n2.type & _.HORIZ_LINE_TO && 0 !== r2 && (n2.type = _.LINE_TO, n2.y = n2.relative ? 0 : u1), n2.type & _.VERT_LINE_TO && 0 !== e2 && (n2.type = _.LINE_TO, n2.x = n2.relative ? 0 : o4), (void 0) !== n2.x && (n2.x = n2.x * t2 + T1 * e2 + (y1 ? 0 : i1)), (void 0) !== n2.y && (n2.y = p1 * r2 + n2.y * a3 + (y1 ? 0 : s1)), (void 0) !== n2.x1 && (n2.x1 = n2.x1 * t2 + n2.y1 * e2 + (y1 ? 0 : i1)), (void 0) !== n2.y1 && (n2.y1 = c1 * r2 + n2.y1 * a3 + (y1 ? 0 : s1)), (void 0) !== n2.x2 && (n2.x2 = n2.x2 * t2 + n2.y2 * e2 + (y1 ? 0 : i1)), (void 0) !== n2.y2 && (n2.y2 = m1 * r2 + n2.y2 * a3 + (y1 ? 0 : s1));
                var O = t2 * a3 - r2 * e2;
                if ((void 0) !== n2.xRot && (1 !== t2 || 0 !== r2 || 0 !== e2 || 1 !== a3)) {
                    if (0 === O) delete n2.rX, delete n2.rY, delete n2.xRot, delete n2.lArcFlag, delete n2.sweepFlag, n2.type = _.LINE_TO;
                    else {
                        var v = n2.xRot * Math.PI / 180, l = Math.sin(v), N = Math.cos(v), d = 1 / f(n2.rX), x = 1 / f(n2.rY), A = f(N) * d + f(l) * x, E = 2 * l * N * (d - x), C = f(l) * d + f(N) * x, M = A * a3 * a3 - E * r2 * a3 + C * r2 * r2, R = E * (t2 * a3 + r2 * e2) - 2 * (A * e2 * a3 + C * t2 * r2), S = A * e2 * e2 - E * t2 * e2 + C * t2 * t2, g = (Math.atan2(R, M - S) + Math.PI) % Math.PI / 2, I = Math.sin(g), V = Math.cos(g);
                        n2.rX = Math.abs(O) / Math.sqrt(M * f(V) + R * I * V + S * f(I)), n2.rY = Math.abs(O) / Math.sqrt(M * f(I) - R * I * V + S * f(V)), n2.xRot = 180 * g / Math.PI;
                    }
                }
                return (void 0) !== n2.sweepFlag && 0 > O && (n2.sweepFlag = +!n2.sweepFlag), n2;
            });
        }
        function f() {
            return function(t2) {
                var r2 = {
                };
                for(var e2 in t2)r2[e2] = t2[e2];
                return r2;
            };
        }
        t1.ROUND = function(t2) {
            function r2(r3) {
                return Math.round(r3 * t2) / t2;
            }
            return (void 0) === t2 && (t2 = 10000000000000), n(t2), function(t3) {
                return (void 0) !== t3.x1 && (t3.x1 = r2(t3.x1)), (void 0) !== t3.y1 && (t3.y1 = r2(t3.y1)), (void 0) !== t3.x2 && (t3.x2 = r2(t3.x2)), (void 0) !== t3.y2 && (t3.y2 = r2(t3.y2)), (void 0) !== t3.x && (t3.x = r2(t3.x)), (void 0) !== t3.y && (t3.y = r2(t3.y)), (void 0) !== t3.rX && (t3.rX = r2(t3.rX)), (void 0) !== t3.rY && (t3.rY = r2(t3.rY)), t3;
            };
        }, t1.TO_ABS = r1, t1.TO_REL = function() {
            return o3(function(t2, r2, e2) {
                return t2.relative || ((void 0) !== t2.x1 && (t2.x1 -= r2), (void 0) !== t2.y1 && (t2.y1 -= e2), (void 0) !== t2.x2 && (t2.x2 -= r2), (void 0) !== t2.y2 && (t2.y2 -= e2), (void 0) !== t2.x && (t2.x -= r2), (void 0) !== t2.y && (t2.y -= e2), t2.relative = true), t2;
            });
        }, t1.NORMALIZE_HVZ = function(t2, r2, e2) {
            return (void 0) === t2 && (t2 = true), (void 0) === r2 && (r2 = true), (void 0) === e2 && (e2 = true), o3(function(a3, i1, n2, o4, s1) {
                if (isNaN(o4) && !(a3.type & _.MOVE_TO)) throw new Error("path must start with moveto");
                return r2 && a3.type & _.HORIZ_LINE_TO && (a3.type = _.LINE_TO, a3.y = a3.relative ? 0 : n2), e2 && a3.type & _.VERT_LINE_TO && (a3.type = _.LINE_TO, a3.x = a3.relative ? 0 : i1), t2 && a3.type & _.CLOSE_PATH && (a3.type = _.LINE_TO, a3.x = a3.relative ? o4 - i1 : o4, a3.y = a3.relative ? s1 - n2 : s1), a3.type & _.ARC && (0 === a3.rX || 0 === a3.rY) && (a3.type = _.LINE_TO, delete a3.rX, delete a3.rY, delete a3.xRot, delete a3.lArcFlag, delete a3.sweepFlag), a3;
            });
        }, t1.NORMALIZE_ST = e1, t1.QT_TO_C = a2, t1.INFO = o3, t1.SANITIZE = function(t2) {
            (void 0) === t2 && (t2 = 0), n(t2);
            var r2 = NaN, e2 = NaN, a3 = NaN, i1 = NaN;
            return o3(function(n2, o4, s1, u1, h1) {
                var c1 = Math.abs, m1 = false, y1 = 0, p1 = 0;
                if (n2.type & _.SMOOTH_CURVE_TO && (y1 = isNaN(r2) ? 0 : o4 - r2, p1 = isNaN(e2) ? 0 : s1 - e2), n2.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r2 = n2.relative ? o4 + n2.x2 : n2.x2, e2 = n2.relative ? s1 + n2.y2 : n2.y2) : (r2 = NaN, e2 = NaN), n2.type & _.SMOOTH_QUAD_TO ? (a3 = isNaN(a3) ? o4 : 2 * o4 - a3, i1 = isNaN(i1) ? s1 : 2 * s1 - i1) : n2.type & _.QUAD_TO ? (a3 = n2.relative ? o4 + n2.x1 : n2.x1, i1 = n2.relative ? s1 + n2.y1 : n2.y2) : (a3 = NaN, i1 = NaN), n2.type & _.LINE_COMMANDS || n2.type & _.ARC && (0 === n2.rX || 0 === n2.rY || !n2.lArcFlag) || n2.type & _.CURVE_TO || n2.type & _.SMOOTH_CURVE_TO || n2.type & _.QUAD_TO || n2.type & _.SMOOTH_QUAD_TO) {
                    var T1 = (void 0) === n2.x ? 0 : n2.relative ? n2.x : n2.x - o4, f1 = (void 0) === n2.y ? 0 : n2.relative ? n2.y : n2.y - s1;
                    y1 = isNaN(a3) ? (void 0) === n2.x1 ? y1 : n2.relative ? n2.x : n2.x1 - o4 : a3 - o4, p1 = isNaN(i1) ? (void 0) === n2.y1 ? p1 : n2.relative ? n2.y : n2.y1 - s1 : i1 - s1;
                    var O = (void 0) === n2.x2 ? 0 : n2.relative ? n2.x : n2.x2 - o4, v = (void 0) === n2.y2 ? 0 : n2.relative ? n2.y : n2.y2 - s1;
                    c1(T1) <= t2 && c1(f1) <= t2 && c1(y1) <= t2 && c1(p1) <= t2 && c1(O) <= t2 && c1(v) <= t2 && (m1 = true);
                }
                return n2.type & _.CLOSE_PATH && c1(o4 - u1) <= t2 && c1(s1 - h1) <= t2 && (m1 = true), m1 ? [] : n2;
            });
        }, t1.MATRIX = T, t1.ROTATE = function(t2, r2, e2) {
            (void 0) === r2 && (r2 = 0), (void 0) === e2 && (e2 = 0), n(t2, r2, e2);
            var a3 = Math.sin(t2), i1 = Math.cos(t2);
            return T(i1, a3, -a3, i1, r2 - r2 * i1 + e2 * a3, e2 - r2 * a3 - e2 * i1);
        }, t1.TRANSLATE = function(t2, r2) {
            return (void 0) === r2 && (r2 = 0), n(t2, r2), T(1, 0, 0, 1, t2, r2);
        }, t1.SCALE = function(t2, r2) {
            return (void 0) === r2 && (r2 = t2), n(t2, r2), T(t2, 0, 0, r2, 0, 0);
        }, t1.SKEW_X = function(t2) {
            return n(t2), T(1, 0, Math.atan(t2), 1, 0, 0);
        }, t1.SKEW_Y = function(t2) {
            return n(t2), T(1, Math.atan(t2), 0, 1, 0, 0);
        }, t1.X_AXIS_SYMMETRY = function(t2) {
            return (void 0) === t2 && (t2 = 0), n(t2), T(-1, 0, 0, 1, t2, 0);
        }, t1.Y_AXIS_SYMMETRY = function(t2) {
            return (void 0) === t2 && (t2 = 0), n(t2), T(1, 0, 0, -1, 0, t2);
        }, t1.A_TO_C = function() {
            return o3(function(t2, r2, e2) {
                return _.ARC === t2.type ? (function(t3, r3, e3) {
                    var a3, n2, o4, u1;
                    t3.cX || s(t3, r3, e3);
                    for(var m1 = Math.min(t3.phi1, t3.phi2), y1 = Math.max(t3.phi1, t3.phi2) - m1, p1 = Math.ceil(y1 / 90), T2 = new Array(p1), f2 = r3, O = e3, v = 0; v < p1; v++){
                        var l = c(t3.phi1, t3.phi2, v / p1), N = c(t3.phi1, t3.phi2, (v + 1) / p1), d = N - l, x = 4 / 3 * Math.tan(d * h / 4), A = [
                            Math.cos(l * h) - x * Math.sin(l * h),
                            Math.sin(l * h) + x * Math.cos(l * h)
                        ], E = A[0], C = A[1], M = [
                            Math.cos(N * h),
                            Math.sin(N * h)
                        ], R = M[0], S = M[1], g = [
                            R + x * Math.sin(N * h),
                            S - x * Math.cos(N * h)
                        ], I = g[0], V = g[1];
                        T2[v] = {
                            relative: t3.relative,
                            type: _.CURVE_TO
                        };
                        var D = function(r4, e4) {
                            var a4 = i([
                                r4 * t3.rX,
                                e4 * t3.rY
                            ], t3.xRot), n3 = a4[0], o5 = a4[1];
                            return [
                                t3.cX + n3,
                                t3.cY + o5
                            ];
                        };
                        a3 = D(E, C), T2[v].x1 = a3[0], T2[v].y1 = a3[1], n2 = D(I, V), T2[v].x2 = n2[0], T2[v].y2 = n2[1], o4 = D(R, S), T2[v].x = o4[0], T2[v].y = o4[1], t3.relative && (T2[v].x1 -= f2, T2[v].y1 -= O, T2[v].x2 -= f2, T2[v].y2 -= O, T2[v].x -= f2, T2[v].y -= O), f2 = (u1 = [
                            T2[v].x,
                            T2[v].y
                        ])[0], O = u1[1];
                    }
                    return T2;
                })(t2, t2.relative ? 0 : r2, t2.relative ? 0 : e2) : t2;
            });
        }, t1.ANNOTATE_ARCS = function() {
            return o3(function(t2, r2, e2) {
                return t2.relative && (r2 = 0, e2 = 0), _.ARC === t2.type && s(t2, r2, e2), t2;
            });
        }, t1.CLONE = f, t1.CALCULATE_BOUNDS = function() {
            var t2 = function(t3) {
                var r2 = {
                };
                for(var e2 in t3)r2[e2] = t3[e2];
                return r2;
            }, i1 = r1(), n2 = a2(), h1 = e1(), c1 = o3(function(r2, e2, a3) {
                var o4 = h1(n2(i1(t2(r2))));
                function T2(t3) {
                    t3 > c1.maxX && (c1.maxX = t3), t3 < c1.minX && (c1.minX = t3);
                }
                function f2(t3) {
                    t3 > c1.maxY && (c1.maxY = t3), t3 < c1.minY && (c1.minY = t3);
                }
                if (o4.type & _.DRAWING_COMMANDS && (T2(e2), f2(a3)), o4.type & _.HORIZ_LINE_TO && T2(o4.x), o4.type & _.VERT_LINE_TO && f2(o4.y), o4.type & _.LINE_TO && (T2(o4.x), f2(o4.y)), o4.type & _.CURVE_TO) {
                    T2(o4.x), f2(o4.y);
                    for(var O = 0, v = y(e2, o4.x1, o4.x2, o4.x); O < v.length; O++)0 < (H = v[O]) && 1 > H && T2(p(e2, o4.x1, o4.x2, o4.x, H));
                    for(var l = 0, N = y(a3, o4.y1, o4.y2, o4.y); l < N.length; l++)0 < (H = N[l]) && 1 > H && f2(p(a3, o4.y1, o4.y2, o4.y, H));
                }
                if (o4.type & _.ARC) {
                    T2(o4.x), f2(o4.y), s(o4, e2, a3);
                    for(var d = o4.xRot / 180 * Math.PI, x = Math.cos(d) * o4.rX, A = Math.sin(d) * o4.rX, E = -Math.sin(d) * o4.rY, C = Math.cos(d) * o4.rY, M = o4.phi1 < o4.phi2 ? [
                        o4.phi1,
                        o4.phi2
                    ] : -180 > o4.phi2 ? [
                        o4.phi2 + 360,
                        o4.phi1 + 360
                    ] : [
                        o4.phi2,
                        o4.phi1
                    ], R = M[0], S = M[1], g = function(t3) {
                        var r3 = t3[0], e3 = t3[1], a4 = 180 * Math.atan2(e3, r3) / Math.PI;
                        return a4 < R ? a4 + 360 : a4;
                    }, I = 0, V = u(E, -x, 0).map(g); I < V.length; I++)(H = V[I]) > R && H < S && T2(m(o4.cX, x, E, H));
                    for(var D = 0, L = u(C, -A, 0).map(g); D < L.length; D++){
                        var H;
                        (H = L[D]) > R && H < S && f2(m(o4.cY, A, C, H));
                    }
                }
                return r2;
            });
            return c1.minX = 1 / 0, c1.maxX = -1 / 0, c1.minY = 1 / 0, c1.maxY = -1 / 0, c1;
        };
    })(t.SVGPathDataTransformer || (t.SVGPathDataTransformer = {
    }));
    var T2, f2 = function() {
        function r1() {
        }
        return r1.prototype.round = function(r2) {
            return this.transform(t.SVGPathDataTransformer.ROUND(r2));
        }, r1.prototype.toAbs = function() {
            return this.transform(t.SVGPathDataTransformer.TO_ABS());
        }, r1.prototype.toRel = function() {
            return this.transform(t.SVGPathDataTransformer.TO_REL());
        }, r1.prototype.normalizeHVZ = function(r2, e1, a2) {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_HVZ(r2, e1, a2));
        }, r1.prototype.normalizeST = function() {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_ST());
        }, r1.prototype.qtToC = function() {
            return this.transform(t.SVGPathDataTransformer.QT_TO_C());
        }, r1.prototype.aToC = function() {
            return this.transform(t.SVGPathDataTransformer.A_TO_C());
        }, r1.prototype.sanitize = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SANITIZE(r2));
        }, r1.prototype.translate = function(r2, e1) {
            return this.transform(t.SVGPathDataTransformer.TRANSLATE(r2, e1));
        }, r1.prototype.scale = function(r2, e1) {
            return this.transform(t.SVGPathDataTransformer.SCALE(r2, e1));
        }, r1.prototype.rotate = function(r2, e1, a2) {
            return this.transform(t.SVGPathDataTransformer.ROTATE(r2, e1, a2));
        }, r1.prototype.matrix = function(r2, e1, a2, i1, n2, o3) {
            return this.transform(t.SVGPathDataTransformer.MATRIX(r2, e1, a2, i1, n2, o3));
        }, r1.prototype.skewX = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SKEW_X(r2));
        }, r1.prototype.skewY = function(r2) {
            return this.transform(t.SVGPathDataTransformer.SKEW_Y(r2));
        }, r1.prototype.xSymmetry = function(r2) {
            return this.transform(t.SVGPathDataTransformer.X_AXIS_SYMMETRY(r2));
        }, r1.prototype.ySymmetry = function(r2) {
            return this.transform(t.SVGPathDataTransformer.Y_AXIS_SYMMETRY(r2));
        }, r1.prototype.annotateArcs = function() {
            return this.transform(t.SVGPathDataTransformer.ANNOTATE_ARCS());
        }, r1;
    }(), O = function(t1) {
        return " " === t1 || "\t" === t1 || "\r" === t1 || "\n" === t1;
    }, v = function(t1) {
        return "0".charCodeAt(0) <= t1.charCodeAt(0) && t1.charCodeAt(0) <= "9".charCodeAt(0);
    }, l = function(t1) {
        function r1() {
            var r2 = t1.call(this) || this;
            return r2.curNumber = "", r2.curCommandType = -1, r2.curCommandRelative = false, r2.canParseCommandOrComma = true, r2.curNumberHasExp = false, r2.curNumberHasExpDigits = false, r2.curNumberHasDecimal = false, r2.curArgs = [], r2;
        }
        return e(r1, t1), r1.prototype.finish = function(t2) {
            if ((void 0) === t2 && (t2 = []), this.parse(" ", t2), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
            return t2;
        }, r1.prototype.parse = function(t2, r2) {
            var e1 = this;
            (void 0) === r2 && (r2 = []);
            for(var a2 = function(t3) {
                r2.push(t3), e1.curArgs.length = 0, e1.canParseCommandOrComma = true;
            }, i1 = 0; i1 < t2.length; i1++){
                var n2 = t2[i1], o3 = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s1 = v(n2) && ("0" === this.curNumber && "0" === n2 || o3);
                if (!v(n2) || s1) {
                    if ("e" !== n2 && "E" !== n2) {
                        if ("-" !== n2 && "+" !== n2 || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                            if ("." !== n2 || this.curNumberHasExp || this.curNumberHasDecimal || o3) {
                                if (this.curNumber && -1 !== this.curCommandType) {
                                    var u1 = Number(this.curNumber);
                                    if (isNaN(u1)) throw new SyntaxError("Invalid number ending at " + i1);
                                    if (this.curCommandType === _.ARC) {
                                        if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                            if (0 > u1) throw new SyntaxError('Expected positive number, got "' + u1 + '" at index "' + i1 + '"');
                                        } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i1 + '"');
                                    }
                                    this.curArgs.push(u1), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? a2({
                                        type: _.HORIZ_LINE_TO,
                                        relative: this.curCommandRelative,
                                        x: u1
                                    }) : _.VERT_LINE_TO === this.curCommandType ? a2({
                                        type: _.VERT_LINE_TO,
                                        relative: this.curCommandRelative,
                                        y: u1
                                    }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (a2({
                                        type: this.curCommandType,
                                        relative: this.curCommandRelative,
                                        x: this.curArgs[0],
                                        y: this.curArgs[1]
                                    }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? a2({
                                        type: _.CURVE_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x2: this.curArgs[2],
                                        y2: this.curArgs[3],
                                        x: this.curArgs[4],
                                        y: this.curArgs[5]
                                    }) : this.curCommandType === _.SMOOTH_CURVE_TO ? a2({
                                        type: _.SMOOTH_CURVE_TO,
                                        relative: this.curCommandRelative,
                                        x2: this.curArgs[0],
                                        y2: this.curArgs[1],
                                        x: this.curArgs[2],
                                        y: this.curArgs[3]
                                    }) : this.curCommandType === _.QUAD_TO ? a2({
                                        type: _.QUAD_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x: this.curArgs[2],
                                        y: this.curArgs[3]
                                    }) : this.curCommandType === _.ARC && a2({
                                        type: _.ARC,
                                        relative: this.curCommandRelative,
                                        rX: this.curArgs[0],
                                        rY: this.curArgs[1],
                                        xRot: this.curArgs[2],
                                        lArcFlag: this.curArgs[3],
                                        sweepFlag: this.curArgs[4],
                                        x: this.curArgs[5],
                                        y: this.curArgs[6]
                                    })), this.curNumber = "", this.curNumberHasExpDigits = false, this.curNumberHasExp = false, this.curNumberHasDecimal = false, this.canParseCommandOrComma = true;
                                }
                                if (!O(n2)) {
                                    if ("," === n2 && this.canParseCommandOrComma) this.canParseCommandOrComma = false;
                                    else if ("+" !== n2 && "-" !== n2 && "." !== n2) {
                                        if (s1) this.curNumber = n2, this.curNumberHasDecimal = false;
                                        else {
                                            if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i1 + ".");
                                            if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + i1 + ". Command cannot follow comma");
                                            if (this.canParseCommandOrComma = false, "z" !== n2 && "Z" !== n2) {
                                                if ("h" === n2 || "H" === n2) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n2;
                                                else if ("v" === n2 || "V" === n2) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n2;
                                                else if ("m" === n2 || "M" === n2) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n2;
                                                else if ("l" === n2 || "L" === n2) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n2;
                                                else if ("c" === n2 || "C" === n2) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n2;
                                                else if ("s" === n2 || "S" === n2) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n2;
                                                else if ("q" === n2 || "Q" === n2) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n2;
                                                else if ("t" === n2 || "T" === n2) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n2;
                                                else {
                                                    if ("a" !== n2 && "A" !== n2) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + i1 + ".");
                                                    this.curCommandType = _.ARC, this.curCommandRelative = "a" === n2;
                                                }
                                            } else r2.push({
                                                type: _.CLOSE_PATH
                                            }), this.canParseCommandOrComma = true, this.curCommandType = -1;
                                        }
                                    } else this.curNumber = n2, this.curNumberHasDecimal = "." === n2;
                                }
                            } else this.curNumber += n2, this.curNumberHasDecimal = true;
                        } else this.curNumber += n2;
                    } else this.curNumber += n2, this.curNumberHasExp = true;
                } else this.curNumber += n2, this.curNumberHasExpDigits = this.curNumberHasExp;
            }
            return r2;
        }, r1.prototype.transform = function(t2) {
            return Object.create(this, {
                parse: {
                    value: function(r2, e1) {
                        (void 0) === e1 && (e1 = []);
                        for(var a2 = 0, i1 = Object.getPrototypeOf(this).parse.call(this, r2); a2 < i1.length; a2++){
                            var n3 = i1[a2], o4 = t2(n3);
                            Array.isArray(o4) ? e1.push.apply(e1, o4) : e1.push(o4);
                        }
                        return e1;
                    }
                }
            });
        }, r1;
    }(f2), _ = function(r1) {
        function i1(t1) {
            var e1 = r1.call(this) || this;
            return e1.commands = "string" == typeof t1 ? i1.parse(t1) : t1, e1;
        }
        return e(i1, r1), i1.prototype.encode = function() {
            return i1.encode(this.commands);
        }, i1.prototype.getBounds = function() {
            var r2 = t.SVGPathDataTransformer.CALCULATE_BOUNDS();
            return this.transform(r2), r2;
        }, i1.prototype.transform = function(t1) {
            for(var r2 = [], e1 = 0, a2 = this.commands; e1 < a2.length; e1++){
                var i2 = t1(a2[e1]);
                Array.isArray(i2) ? r2.push.apply(r2, i2) : r2.push(i2);
            }
            return this.commands = r2, this;
        }, i1.encode = function(t1) {
            return a(t1);
        }, i1.parse = function(t1) {
            var r2 = new l, e1 = [];
            return r2.parse(t1, e1), r2.finish(e1), e1;
        }, i1.CLOSE_PATH = 1, i1.MOVE_TO = 2, i1.HORIZ_LINE_TO = 4, i1.VERT_LINE_TO = 8, i1.LINE_TO = 16, i1.CURVE_TO = 32, i1.SMOOTH_CURVE_TO = 64, i1.QUAD_TO = 128, i1.SMOOTH_QUAD_TO = 256, i1.ARC = 512, i1.LINE_COMMANDS = i1.LINE_TO | i1.HORIZ_LINE_TO | i1.VERT_LINE_TO, i1.DRAWING_COMMANDS = i1.HORIZ_LINE_TO | i1.VERT_LINE_TO | i1.LINE_TO | i1.CURVE_TO | i1.SMOOTH_CURVE_TO | i1.QUAD_TO | i1.SMOOTH_QUAD_TO | i1.ARC, i1;
    }(f2), N = ((T2 = {
    })[_.MOVE_TO] = 2, T2[_.LINE_TO] = 2, T2[_.HORIZ_LINE_TO] = 1, T2[_.VERT_LINE_TO] = 1, T2[_.CLOSE_PATH] = 0, T2[_.QUAD_TO] = 4, T2[_.SMOOTH_QUAD_TO] = 2, T2[_.CURVE_TO] = 6, T2[_.SMOOTH_CURVE_TO] = 4, T2[_.ARC] = 7, T2);
    t.COMMAND_ARG_COUNTS = N, t.SVGPathData = _, t.SVGPathDataParser = l, t.encodeSVGPath = a, Object.defineProperty(t, "__esModule", {
        value: true
    });
});

},{}],"4iPAO":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/reflect/delete-property");

},{"core-js-pure/stable/reflect/delete-property":"Zy6wR"}],"Zy6wR":[function(require,module,exports) {
var parent = require('../../es/reflect/delete-property');
module.exports = parent;

},{"../../es/reflect/delete-property":"2ngKL"}],"2ngKL":[function(require,module,exports) {
require('../../modules/es.reflect.delete-property');
var path = require('../../internals/path');
module.exports = path.Reflect.deleteProperty;

},{"../../modules/es.reflect.delete-property":"7hmmb","../../internals/path":"2dOsY"}],"7hmmb":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({
    target: 'Reflect',
    stat: true
}, {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
});

},{"../internals/export":"NKIvz","../internals/an-object":"6Rjti","../internals/object-get-own-property-descriptor":"5gttT"}],"3V3bv":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/values");

},{"core-js-pure/stable/instance/values":"1jXxR"}],"1jXxR":[function(require,module,exports) {
require('../../modules/web.dom-collections.iterator');
var values = require('../array/virtual/values');
var classof = require('../../internals/classof');
var ArrayPrototype = Array.prototype;
var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
};
module.exports = function(it) {
    var own = it.values;
    return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.values || DOMIterables.hasOwnProperty(classof(it)) ? values : own;
};

},{"../../modules/web.dom-collections.iterator":"1fKmg","../array/virtual/values":"3uJH1","../../internals/classof":"7eLNZ"}],"3uJH1":[function(require,module,exports) {
var parent = require('../../../es/array/virtual/values');
module.exports = parent;

},{"../../../es/array/virtual/values":"4WPF4"}],"4WPF4":[function(require,module,exports) {
require('../../../modules/es.array.iterator');
var entryVirtual = require('../../../internals/entry-virtual');
module.exports = entryVirtual('Array').values;

},{"../../../modules/es.array.iterator":"4ZiVp","../../../internals/entry-virtual":"6ydnH"}],"E519t":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/parse-int");

},{"core-js-pure/stable/parse-int":"5rUro"}],"5rUro":[function(require,module,exports) {
var parent = require('../es/parse-int');
module.exports = parent;

},{"../es/parse-int":"1BfXW"}],"1BfXW":[function(require,module,exports) {
require('../modules/es.parse-int');
var path = require('../internals/path');
module.exports = path.parseInt;

},{"../modules/es.parse-int":"mHYY9","../internals/path":"2dOsY"}],"mHYY9":[function(require,module,exports) {
var $ = require('../internals/export');
var parseIntImplementation = require('../internals/number-parse-int');
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({
    global: true,
    forced: parseInt != parseIntImplementation
}, {
    parseInt: parseIntImplementation
});

},{"../internals/export":"NKIvz","../internals/number-parse-int":"7n8VD"}],"7n8VD":[function(require,module,exports) {
var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
    var S = trim(String(string));
    return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

},{"../internals/global":"2aTzo","../internals/string-trim":"6S5Ri","../internals/whitespaces":"3LNWY"}],"67aJf":[function(require,module,exports) {
module.exports = require("core-js-pure/features/get-iterator");

},{"core-js-pure/features/get-iterator":"21pWj"}],"21pWj":[function(require,module,exports) {
require('../modules/web.dom-collections.iterator');
require('../modules/es.string.iterator');
var getIterator = require('../internals/get-iterator');
module.exports = getIterator;

},{"../modules/web.dom-collections.iterator":"1fKmg","../modules/es.string.iterator":"7eAah","../internals/get-iterator":"6FhJy"}],"6FhJy":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var getIteratorMethod = require('../internals/get-iterator-method');
module.exports = function(it) {
    var iteratorMethod = getIteratorMethod(it);
    if (typeof iteratorMethod != 'function') throw TypeError(String(it) + ' is not iterable');
    return anObject(iteratorMethod.call(it));
};

},{"../internals/an-object":"6Rjti","../internals/get-iterator-method":"6V8vX"}],"2crzI":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/array/is-array");

},{"core-js-pure/stable/array/is-array":"5rjKM"}],"5rjKM":[function(require,module,exports) {
var parent = require('../../es/array/is-array');
module.exports = parent;

},{"../../es/array/is-array":"1DTmt"}],"2iSvv":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/symbol");

},{"core-js-pure/stable/symbol":"7xyw6"}],"7xyw6":[function(require,module,exports) {
var parent = require('../../es/symbol');
module.exports = parent;

},{"../../es/symbol":"6MJeV"}],"2f3Tp":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/slice");

},{"core-js-pure/stable/instance/slice":"7qVNa"}],"7qVNa":[function(require,module,exports) {
var parent = require('../../es/instance/slice');
module.exports = parent;

},{"../../es/instance/slice":"1SGIR"}],"6YetN":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/map");

},{"core-js-pure/stable/map":"76nVl"}],"76nVl":[function(require,module,exports) {
var parent = require('../../es/map');
module.exports = parent;

},{"../../es/map":"5FQtE"}],"5FQtE":[function(require,module,exports) {
require('../../modules/es.map');
require('../../modules/es.object.to-string');
require('../../modules/es.string.iterator');
require('../../modules/web.dom-collections.iterator');
var path = require('../../internals/path');
module.exports = path.Map;

},{"../../modules/es.map":"2zsPq","../../modules/es.object.to-string":"5JeFv","../../modules/es.string.iterator":"7eAah","../../modules/web.dom-collections.iterator":"1fKmg","../../internals/path":"2dOsY"}],"2zsPq":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function(init) {
    return function Map1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"1NUum","../internals/collection-strong":"1FZ6e"}],"1NUum":[function(require,module,exports) {
'use strict';
var $ = require('./export');
var global = require('../internals/global');
var InternalMetadataModule = require('../internals/internal-metadata');
var fails = require('../internals/fails');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isObject = require('../internals/is-object');
var setToStringTag = require('../internals/set-to-string-tag');
var defineProperty = require('../internals/object-define-property').f;
var forEach = require('../internals/array-iteration').forEach;
var DESCRIPTORS = require('../internals/descriptors');
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var exported = {
    };
    var Constructor;
    if (!DESCRIPTORS || typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
    }))) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.REQUIRED = true;
    } else {
        Constructor = wrapper(function(target, iterable) {
            setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
                type: CONSTRUCTOR_NAME,
                collection: new NativeConstructor()
            });
            if (iterable != undefined) iterate(iterable, target[ADDER], {
                that: target,
                AS_ENTRIES: IS_MAP
            });
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        forEach([
            'add',
            'clear',
            'delete',
            'forEach',
            'get',
            'has',
            'set',
            'keys',
            'values',
            'entries'
        ], function(KEY) {
            var IS_ADDER = KEY == 'add' || KEY == 'set';
            if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) createNonEnumerableProperty(Constructor.prototype, KEY, function(a, b) {
                var collection = getInternalState(this).collection;
                if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
                var result = collection[KEY](a === 0 ? 0 : a, b);
                return IS_ADDER ? this : result;
            });
        });
        IS_WEAK || defineProperty(Constructor.prototype, 'size', {
            configurable: true,
            get: function() {
                return getInternalState(this).collection.size;
            }
        });
    }
    setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
    exported[CONSTRUCTOR_NAME] = Constructor;
    $({
        global: true,
        forced: true
    }, exported);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

},{"./export":"NKIvz","../internals/global":"2aTzo","../internals/internal-metadata":"2gEcj","../internals/fails":"4Nuec","../internals/create-non-enumerable-property":"2B6U4","../internals/iterate":"459Pc","../internals/an-instance":"4pauM","../internals/is-object":"4KnRg","../internals/set-to-string-tag":"4vw0U","../internals/object-define-property":"2eM6x","../internals/array-iteration":"OHQch","../internals/descriptors":"6RgTN","../internals/internal-state":"3CN5Q"}],"2gEcj":[function(require,module,exports) {
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var defineProperty = require('../internals/object-define-property').f;
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');
var METADATA = uid('meta');
var id = 0;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function() {
    return true;
};
var setMetadata = function(it) {
    defineProperty(it, METADATA, {
        value: {
            objectID: 'O' + id++,
            weakData: {
            }
        }
    });
};
var fastKey = function(it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
    // return object ID
    }
    return it[METADATA].objectID;
};
var getWeakData = function(it, create) {
    if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
    // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
    return it;
};
var meta = module.exports = {
    REQUIRED: false,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

},{"../internals/hidden-keys":"4M1Wn","../internals/is-object":"4KnRg","../internals/has":"4S28p","../internals/object-define-property":"2eM6x","../internals/uid":"5gPJ1","../internals/freezing":"HfbhD"}],"HfbhD":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({
    }));
});

},{"../internals/fails":"4Nuec"}],"1FZ6e":[function(require,module,exports) {
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var redefineAll = require('../internals/redefine-all');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/define-iterator');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            // change existing entry
            if (entry) entry.value = value;
            else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index];
            // frozen object case
            for(entry = state.first; entry; entry = entry.next){
                if (entry.key == key) return entry;
            }
        };
        redefineAll(C.prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while(entry){
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (DESCRIPTORS) state.size--;
                    else that.size--;
                }
                return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn/* , that = undefined */ ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while(entry = entry ? entry.next : state.first){
                    boundFunction(entry.value, entry.key, this);
                    // revert to the last existing entry
                    while(entry && entry.removed)entry = entry.previous;
                }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        redefineAll(C.prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return C;
    },
    setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            // revert to the last existing entry
            while(entry && entry.removed)entry = entry.previous;
            // get next entry
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                // or finish the iteration
                state.target = undefined;
                return {
                    value: undefined,
                    done: true
                };
            }
            // return step by kind
            if (kind == 'keys') return {
                value: entry.key,
                done: false
            };
            if (kind == 'values') return {
                value: entry.value,
                done: false
            };
            return {
                value: [
                    entry.key,
                    entry.value
                ],
                done: false
            };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME);
    }
};

},{"../internals/object-define-property":"2eM6x","../internals/object-create":"20Ou3","../internals/redefine-all":"HviGA","../internals/function-bind-context":"3PeOr","../internals/an-instance":"4pauM","../internals/iterate":"459Pc","../internals/define-iterator":"7kqzH","../internals/set-species":"5Xgqk","../internals/descriptors":"6RgTN","../internals/internal-metadata":"2gEcj","../internals/internal-state":"3CN5Q"}],"0128s":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/reflect/apply");

},{"core-js-pure/stable/reflect/apply":"1tWKg"}],"1tWKg":[function(require,module,exports) {
var parent = require('../../es/reflect/apply');
module.exports = parent;

},{"../../es/reflect/apply":"4HLZK"}],"4HLZK":[function(require,module,exports) {
require('../../modules/es.reflect.apply');
var path = require('../../internals/path');
module.exports = path.Reflect.apply;

},{"../../modules/es.reflect.apply":"L5Pz0","../../internals/path":"2dOsY"}],"L5Pz0":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var nativeApply = getBuiltIn('Reflect', 'apply');
var functionApply = Function.apply;
// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
    nativeApply(function() {
    });
});
// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
}, {
    apply: function apply(target, thisArgument, argumentsList) {
        aFunction(target);
        anObject(argumentsList);
        return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
    }
});

},{"../internals/export":"NKIvz","../internals/get-built-in":"4h7wt","../internals/a-function":"77Pld","../internals/an-object":"6Rjti","../internals/fails":"4Nuec"}],"2y1mt":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/reflect/get-prototype-of");

},{"core-js-pure/stable/reflect/get-prototype-of":"7yABP"}],"7yABP":[function(require,module,exports) {
var parent = require('../../es/reflect/get-prototype-of');
module.exports = parent;

},{"../../es/reflect/get-prototype-of":"6ACdF"}],"6ACdF":[function(require,module,exports) {
require('../../modules/es.reflect.get-prototype-of');
var path = require('../../internals/path');
module.exports = path.Reflect.getPrototypeOf;

},{"../../modules/es.reflect.get-prototype-of":"4uDr8","../../internals/path":"2dOsY"}],"4uDr8":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var objectGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
    }
});

},{"../internals/export":"NKIvz","../internals/an-object":"6Rjti","../internals/object-get-prototype-of":"3pO6k","../internals/correct-prototype-getter":"3oPuB"}],"1a5hN":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.StackBlur = {
    }));
})(this, function(exports) {
    'use strict';
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj1) {
            return typeof obj1;
        };
        else _typeof = function(obj1) {
            return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
        };
        return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    /* eslint-disable no-bitwise -- used for calculations */ /* eslint-disable unicorn/prefer-query-selector -- aiming at
    backward-compatibility */ /**
  * StackBlur - a fast almost Gaussian Blur For Canvas
  *
  * In case you find this class useful - especially in commercial projects -
  * I am not totally unhappy for a small donation to my PayPal account
  * mario@quasimondo.de
  *
  * Or support me on flattr:
  * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
  *
  * @module StackBlur
  * @author Mario Klingemann
  * Contact: mario@quasimondo.com
  * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
  * Twitter: @quasimondo
  *
  * @copyright (c) 2010 Mario Klingemann
  *
  * Permission is hereby granted, free of charge, to any person
  * obtaining a copy of this software and associated documentation
  * files (the "Software"), to deal in the Software without
  * restriction, including without limitation the rights to use,
  * copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the
  * Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  * OTHER DEALINGS IN THE SOFTWARE.
  */ var mulTable = [
        512,
        512,
        456,
        512,
        328,
        456,
        335,
        512,
        405,
        328,
        271,
        456,
        388,
        335,
        292,
        512,
        454,
        405,
        364,
        328,
        298,
        271,
        496,
        456,
        420,
        388,
        360,
        335,
        312,
        292,
        273,
        512,
        482,
        454,
        428,
        405,
        383,
        364,
        345,
        328,
        312,
        298,
        284,
        271,
        259,
        496,
        475,
        456,
        437,
        420,
        404,
        388,
        374,
        360,
        347,
        335,
        323,
        312,
        302,
        292,
        282,
        273,
        265,
        512,
        497,
        482,
        468,
        454,
        441,
        428,
        417,
        405,
        394,
        383,
        373,
        364,
        354,
        345,
        337,
        328,
        320,
        312,
        305,
        298,
        291,
        284,
        278,
        271,
        265,
        259,
        507,
        496,
        485,
        475,
        465,
        456,
        446,
        437,
        428,
        420,
        412,
        404,
        396,
        388,
        381,
        374,
        367,
        360,
        354,
        347,
        341,
        335,
        329,
        323,
        318,
        312,
        307,
        302,
        297,
        292,
        287,
        282,
        278,
        273,
        269,
        265,
        261,
        512,
        505,
        497,
        489,
        482,
        475,
        468,
        461,
        454,
        447,
        441,
        435,
        428,
        422,
        417,
        411,
        405,
        399,
        394,
        389,
        383,
        378,
        373,
        368,
        364,
        359,
        354,
        350,
        345,
        341,
        337,
        332,
        328,
        324,
        320,
        316,
        312,
        309,
        305,
        301,
        298,
        294,
        291,
        287,
        284,
        281,
        278,
        274,
        271,
        268,
        265,
        262,
        259,
        257,
        507,
        501,
        496,
        491,
        485,
        480,
        475,
        470,
        465,
        460,
        456,
        451,
        446,
        442,
        437,
        433,
        428,
        424,
        420,
        416,
        412,
        408,
        404,
        400,
        396,
        392,
        388,
        385,
        381,
        377,
        374,
        370,
        367,
        363,
        360,
        357,
        354,
        350,
        347,
        344,
        341,
        338,
        335,
        332,
        329,
        326,
        323,
        320,
        318,
        315,
        312,
        310,
        307,
        304,
        302,
        299,
        297,
        294,
        292,
        289,
        287,
        285,
        282,
        280,
        278,
        275,
        273,
        271,
        269,
        267,
        265,
        263,
        261,
        259
    ];
    var shgTable = [
        9,
        11,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        15,
        15,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
    ];
    /**
   * @param {string|HTMLImageElement} img
   * @param {string|HTMLCanvasElement} canvas
   * @param {Float} radius
   * @param {boolean} blurAlphaChannel
   * @param {boolean} useOffset
   * @param {boolean} skipStyles
   * @returns {undefined}
   */ function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
        if (typeof img === 'string') img = document.getElementById(img);
        if (!img || !('naturalWidth' in img)) return;
        var dimensionType = useOffset ? 'offset' : 'natural';
        var w = img[dimensionType + 'Width'];
        var h = img[dimensionType + 'Height'];
        if (typeof canvas === 'string') canvas = document.getElementById(canvas);
        if (!canvas || !('getContext' in canvas)) return;
        if (!skipStyles) {
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
        }
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
        if (isNaN(radius) || radius < 1) return;
        if (blurAlphaChannel) processCanvasRGBA(canvas, 0, 0, w, h, radius);
        else processCanvasRGB(canvas, 0, 0, w, h, radius);
    }
    /**
   * @param {string|HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @throws {Error|TypeError}
   * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
   */ function getImageDataFromCanvas(canvas, topX, topY, width, height) {
        if (typeof canvas === 'string') canvas = document.getElementById(canvas);
        if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var context = canvas.getContext('2d');
        try {
            return context.getImageData(topX, topY, width, height);
        } catch (e) {
            throw new Error('unable to access image data: ' + e);
        }
    }
    /**
   * @param {HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {undefined}
   */ function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
    }
    /**
   * @param {ImageData} imageData
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {ImageData}
   */ function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;
        for(var i = 1; i < div; i++){
            stack = stack.next = new BlurStack();
            if (i === radiusPlus1) stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null, stackOut = null, yw = 0, yi = 0;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];
        for(var y = 0; y < height; y++){
            stack = stackStart;
            var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
            for(var _i = 0; _i < radiusPlus1; _i++){
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }
            var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
            for(var _i2 = 1; _i2 < radiusPlus1; _i2++){
                var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
                var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
                var rbs = radiusPlus1 - _i2;
                rSum += (stack.r = r) * rbs;
                gSum += (stack.g = g) * rbs;
                bSum += (stack.b = b) * rbs;
                aSum += (stack.a = a) * rbs;
                rInSum += r;
                gInSum += g;
                bInSum += b;
                aInSum += a;
                stack = stack.next;
            }
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var x = 0; x < width; x++){
                var paInitial = aSum * mulSum >> shgSum;
                pixels[yi + 3] = paInitial;
                if (paInitial !== 0) {
                    var _a2 = 255 / paInitial;
                    pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
                    pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
                    pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
                } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
                rSum -= rOutSum;
                gSum -= gOutSum;
                bSum -= bOutSum;
                aSum -= aOutSum;
                rOutSum -= stackIn.r;
                gOutSum -= stackIn.g;
                bOutSum -= stackIn.b;
                aOutSum -= stackIn.a;
                var _p = x + radius + 1;
                _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
                rInSum += stackIn.r = pixels[_p];
                gInSum += stackIn.g = pixels[_p + 1];
                bInSum += stackIn.b = pixels[_p + 2];
                aInSum += stackIn.a = pixels[_p + 3];
                rSum += rInSum;
                gSum += gInSum;
                bSum += bInSum;
                aSum += aInSum;
                stackIn = stackIn.next;
                var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
                rOutSum += _r;
                gOutSum += _g;
                bOutSum += _b;
                aOutSum += _a;
                rInSum -= _r;
                gInSum -= _g;
                bInSum -= _b;
                aInSum -= _a;
                stackOut = stackOut.next;
                yi += 4;
            }
            yw += width;
        }
        for(var _x = 0; _x < width; _x++){
            yi = _x << 2;
            var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
            stack = stackStart;
            for(var _i3 = 0; _i3 < radiusPlus1; _i3++){
                stack.r = _pr;
                stack.g = _pg;
                stack.b = _pb;
                stack.a = _pa;
                stack = stack.next;
            }
            var yp = width;
            var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
            for(var _i4 = 1; _i4 <= radius; _i4++){
                yi = yp + _x << 2;
                var _rbs = radiusPlus1 - _i4;
                _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
                _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
                _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
                _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
                _rInSum += _pr;
                _gInSum += _pg;
                _bInSum += _pb;
                _aInSum += _pa;
                stack = stack.next;
                if (_i4 < heightMinus1) yp += width;
            }
            yi = _x;
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var _y = 0; _y < height; _y++){
                var _p2 = yi << 2;
                pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;
                if (_pa > 0) {
                    _pa = 255 / _pa;
                    pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
                    pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
                    pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
                } else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
                _rSum -= _rOutSum;
                _gSum -= _gOutSum;
                _bSum -= _bOutSum;
                _aSum -= _aOutSum;
                _rOutSum -= stackIn.r;
                _gOutSum -= stackIn.g;
                _bOutSum -= stackIn.b;
                _aOutSum -= stackIn.a;
                _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
                _rSum += _rInSum += stackIn.r = pixels[_p2];
                _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
                _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
                _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
                stackIn = stackIn.next;
                _rOutSum += _pr = stackOut.r;
                _gOutSum += _pg = stackOut.g;
                _bOutSum += _pb = stackOut.b;
                _aOutSum += _pa = stackOut.a;
                _rInSum -= _pr;
                _gInSum -= _pg;
                _bInSum -= _pb;
                _aInSum -= _pa;
                stackOut = stackOut.next;
                yi += width;
            }
        }
        return imageData;
    }
    /**
   * @param {HTMLCanvasElement} canvas
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {undefined}
   */ function processCanvasRGB(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
    }
    /**
   * @param {ImageData} imageData
   * @param {Integer} topX
   * @param {Integer} topY
   * @param {Integer} width
   * @param {Integer} height
   * @param {Float} radius
   * @returns {ImageData}
   */ function processImageDataRGB(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;
        for(var i = 1; i < div; i++){
            stack = stack.next = new BlurStack();
            if (i === radiusPlus1) stackEnd = stack;
        }
        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];
        var p, rbs;
        var yw = 0, yi = 0;
        for(var y = 0; y < height; y++){
            var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb;
            stack = stackStart;
            for(var _i5 = 0; _i5 < radiusPlus1; _i5++){
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack = stack.next;
            }
            var rInSum = 0, gInSum = 0, bInSum = 0;
            for(var _i6 = 1; _i6 < radiusPlus1; _i6++){
                p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
                rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
                gSum += (stack.g = pg = pixels[p + 1]) * rbs;
                bSum += (stack.b = pb = pixels[p + 2]) * rbs;
                rInSum += pr;
                gInSum += pg;
                bInSum += pb;
                stack = stack.next;
            }
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var x = 0; x < width; x++){
                pixels[yi] = rSum * mulSum >> shgSum;
                pixels[yi + 1] = gSum * mulSum >> shgSum;
                pixels[yi + 2] = bSum * mulSum >> shgSum;
                rSum -= rOutSum;
                gSum -= gOutSum;
                bSum -= bOutSum;
                rOutSum -= stackIn.r;
                gOutSum -= stackIn.g;
                bOutSum -= stackIn.b;
                p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
                rInSum += stackIn.r = pixels[p];
                gInSum += stackIn.g = pixels[p + 1];
                bInSum += stackIn.b = pixels[p + 2];
                rSum += rInSum;
                gSum += gInSum;
                bSum += bInSum;
                stackIn = stackIn.next;
                rOutSum += pr = stackOut.r;
                gOutSum += pg = stackOut.g;
                bOutSum += pb = stackOut.b;
                rInSum -= pr;
                gInSum -= pg;
                bInSum -= pb;
                stackOut = stackOut.next;
                yi += 4;
            }
            yw += width;
        }
        for(var _x2 = 0; _x2 < width; _x2++){
            yi = _x2 << 2;
            var _pr2 = pixels[yi], _pg2 = pixels[yi + 1], _pb2 = pixels[yi + 2], _rOutSum2 = radiusPlus1 * _pr2, _gOutSum2 = radiusPlus1 * _pg2, _bOutSum2 = radiusPlus1 * _pb2, _rSum2 = sumFactor * _pr2, _gSum2 = sumFactor * _pg2, _bSum2 = sumFactor * _pb2;
            stack = stackStart;
            for(var _i7 = 0; _i7 < radiusPlus1; _i7++){
                stack.r = _pr2;
                stack.g = _pg2;
                stack.b = _pb2;
                stack = stack.next;
            }
            var _rInSum2 = 0, _gInSum2 = 0, _bInSum2 = 0;
            for(var _i8 = 1, yp = width; _i8 <= radius; _i8++){
                yi = yp + _x2 << 2;
                _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
                _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
                _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
                _rInSum2 += _pr2;
                _gInSum2 += _pg2;
                _bInSum2 += _pb2;
                stack = stack.next;
                if (_i8 < heightMinus1) yp += width;
            }
            yi = _x2;
            stackIn = stackStart;
            stackOut = stackEnd;
            for(var _y2 = 0; _y2 < height; _y2++){
                p = yi << 2;
                pixels[p] = _rSum2 * mulSum >> shgSum;
                pixels[p + 1] = _gSum2 * mulSum >> shgSum;
                pixels[p + 2] = _bSum2 * mulSum >> shgSum;
                _rSum2 -= _rOutSum2;
                _gSum2 -= _gOutSum2;
                _bSum2 -= _bOutSum2;
                _rOutSum2 -= stackIn.r;
                _gOutSum2 -= stackIn.g;
                _bOutSum2 -= stackIn.b;
                p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
                _rSum2 += _rInSum2 += stackIn.r = pixels[p];
                _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
                _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
                stackIn = stackIn.next;
                _rOutSum2 += _pr2 = stackOut.r;
                _gOutSum2 += _pg2 = stackOut.g;
                _bOutSum2 += _pb2 = stackOut.b;
                _rInSum2 -= _pr2;
                _gInSum2 -= _pg2;
                _bInSum2 -= _pb2;
                stackOut = stackOut.next;
                yi += width;
            }
        }
        return imageData;
    }
    /**
   *
   */ var BlurStack = /**
   * Set properties.
   */ function BlurStack1() {
        _classCallCheck(this, BlurStack1);
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
    };
    exports.BlurStack = BlurStack;
    exports.canvasRGB = processCanvasRGB;
    exports.canvasRGBA = processCanvasRGBA;
    exports.image = processImage;
    exports.imageDataRGB = processImageDataRGB;
    exports.imageDataRGBA = processImageDataRGBA;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}]},["3IlGP"], null, "parcelRequire0de8")

//# sourceMappingURL=canvg.a7ec2e2c.js.map
