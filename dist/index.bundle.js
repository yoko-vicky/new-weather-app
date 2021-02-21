/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/scripts/modules/search.js\");\n\n\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/location.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/location.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst accessToken = \"pk.eyJ1IjoieW9jb29ubyIsImEiOiJjazhtYXVrcGgwbHNjM2VwaDFvdjZncmZnIn0.8qVE_QjxtBJmTEAhwkBbIg\";\n\nconst location = async location => {\n  const response = await fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(location, \".json?access_token=\").concat(accessToken));\n\n  if (response.ok) {\n    const data = await response.json();\n    return data;\n  }\n\n  throw new Error('Unalble to fetch the location data');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (location);\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/modules/location.js?");

/***/ }),

/***/ "./src/scripts/modules/photo.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/photo.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst photo = async keyword => {\n  keyword = keyword.toLowerCase();\n  const response = await fetch(\"https://api.pexels.com/v1/search?per_page=1&query=\".concat(keyword), {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n      Authorization: \"563492ad6f91700001000001eb17e163552e4974a5470de95bb4a996\"\n    }\n  });\n  const data = await response.json();\n  return data.photos[0];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (photo);\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/modules/photo.js?");

/***/ }),

/***/ "./src/scripts/modules/render.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/render.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst renderWeather = (placeName, weatherData) => {\n  document.getElementById('loading').classList.remove('play');\n  const container = document.getElementById('result');\n  const kToC = 273.15;\n  const temp = Math.round(weatherData.main.temp - kToC);\n  const {\n    humidity\n  } = weatherData.main;\n  const weather = weatherData.weather[0].main;\n  const {\n    description\n  } = weatherData.weather[0];\n  const {\n    icon\n  } = weatherData.weather[0];\n  const iconImgSrc = \"http://openweathermap.org/img/wn/\".concat(icon, \"@2x.png\");\n  container.innerHTML = \"\\n  <div class=\\\"weather__place\\\">\".concat(placeName, \"</div>\\n  <div class=\\\"weather__title\\\">It's \").concat(description, \"</div>\\n  <img src=\\\"\").concat(iconImgSrc, \"\\\" alt=\\\"\").concat(weather, \"\\\" class=\\\"weather__image\\\">\\n  <p class=\\\"weather__text\\\">It is currently <span>\").concat(temp, \"</span>&#8451;. Humidity is <span>\").concat(humidity, \"</span>%.</p>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderWeather);\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/modules/render.js?");

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./src/scripts/modules/location.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/scripts/modules/weather.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/scripts/modules/render.js\");\n/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo */ \"./src/scripts/modules/photo.js\");\n\n\n\n\n\nconst renderError = error => {\n  const errorContainer = document.getElementById('error-msg');\n  errorContainer.textContent = error;\n};\n\nconst displayBackgroundImage = async keyword => {\n  const data = await (0,_photo__WEBPACK_IMPORTED_MODULE_3__.default)(keyword); // const body = document.querySelector('body');\n\n  console.log(data);\n};\n\nconst search = () => {\n  document.getElementById('search-form').addEventListener('submit', async e => {\n    e.preventDefault();\n    document.getElementById('loading').classList.add('play');\n    const inputQuery = e.target.elements.locName.value.toLowerCase().trim().replace(' ', '');\n\n    try {\n      const locData = await (0,_location__WEBPACK_IMPORTED_MODULE_0__.default)(inputQuery); // eslint-disable-next-line max-len\n\n      const weatherData = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.default)(locData.features[0].center[1], locData.features[0].center[0]);\n      (0,_render__WEBPACK_IMPORTED_MODULE_2__.default)(locData.features[0].place_name, weatherData);\n      document.querySelector('.weather').classList.add('open');\n      displayBackgroundImage(weatherData.weather[0].main);\n    } catch (error) {\n      renderError(error);\n    }\n\n    e.target.elements.locName.value = '';\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/modules/search.js?");

/***/ }),

/***/ "./src/scripts/modules/weather.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/weather.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst appId = \"e59acf44e4a058aded4a5d6e10b4b052\";\n\nconst weather = async (latitude, longtitude) => {\n  const response = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longtitude, \"&appid=\").concat(appId));\n\n  if (response.ok) {\n    const data = await response.json();\n    return data;\n  }\n\n  throw new Error('Unable to fetch the weather data');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n//# sourceURL=webpack://new-weather-app/./src/scripts/modules/weather.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #202020;\\n  transition: all 0.4s;\\n}\\na:hover {\\n  opacity: 0.8;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  appearance: none;\\n}\\n\\nselect {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  appearance: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n.container {\\n  width: 94%;\\n  max-width: 120rem;\\n  margin: 4rem auto;\\n  text-align: center;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  line-height: 1.5;\\n  font-size: 1.5rem;\\n  letter-spacing: 0.2px;\\n  color: #202020;\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n.main-heading {\\n  font-size: 4.6rem;\\n  margin: 0 auto 2rem;\\n}\\n\\n.footer {\\n  font-size: 80%;\\n  color: #777;\\n}\\n.footer a {\\n  color: #01d1b2;\\n}\\n\\n.search {\\n  max-width: 60rem;\\n  margin: 0 auto 3rem;\\n  background: #f6f6f6;\\n  padding: 3rem;\\n  border-radius: 3px;\\n}\\n.search__comment {\\n  margin: 0 auto 2rem;\\n}\\n.search__input {\\n  display: block;\\n  background: #fff;\\n  font-family: inherit;\\n  font-weight: bold;\\n  font-size: 2rem;\\n  padding: 1rem;\\n  width: 100%;\\n  border-radius: 3px;\\n  margin: 0 auto 2rem;\\n}\\n.search__btn {\\n  display: block;\\n  background: #202020;\\n  color: #fff;\\n  width: 100%;\\n  padding: 1rem;\\n  border-radius: 3px;\\n  font-family: inherit;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  letter-spacing: 1px;\\n  cursor: pointer;\\n  border: 2px solid transparent;\\n  transition: all 0.4s;\\n}\\n.search__btn:hover {\\n  border-color: #202020;\\n  color: #202020;\\n  background: #fff;\\n}\\n\\n.weather {\\n  display: none;\\n  max-width: 60rem;\\n  margin: 0 auto 3rem;\\n  padding: 3rem;\\n  background: #ffe089;\\n  border-radius: 3px;\\n  position: relative;\\n}\\n.weather.open {\\n  display: block;\\n}\\n.weather__place {\\n  font-weight: bold;\\n  font-size: 1.6rem;\\n  margin: 0 auto 1rem;\\n}\\n.weather__title {\\n  font-weight: bold;\\n  font-size: 3rem;\\n}\\n.weather__image {\\n  margin: 0 auto 1rem;\\n}\\n.weather__text span {\\n  font-size: 150%;\\n  font-weight: bold;\\n}\\n\\n.loading {\\n  display: none;\\n  position: relative;\\n  width: 80px;\\n  height: 80px;\\n}\\n.loading.play {\\n  display: inline-block;\\n}\\n.loading div {\\n  display: inline-block;\\n  position: absolute;\\n  left: 8px;\\n  width: 16px;\\n  background: #fff;\\n  animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\\n}\\n.loading div:nth-child(1) {\\n  left: 8px;\\n  animation-delay: -0.24s;\\n}\\n.loading div:nth-child(2) {\\n  left: 32px;\\n  animation-delay: -0.12s;\\n}\\n.loading div:nth-child(3) {\\n  left: 56px;\\n  animation-delay: 0s;\\n}\\n\\n@keyframes loading {\\n  0% {\\n    top: 8px;\\n    height: 64px;\\n  }\\n  50%, 100% {\\n    top: 24px;\\n    height: 32px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-weather-app/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://new-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://new-weather-app/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;