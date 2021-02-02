/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: TYPES, DEFAULT_TYPE, DESTINATION_NAMES, destinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TYPE", function() { return DEFAULT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTINATION_NAMES", function() { return DESTINATION_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
/* harmony import */ var _mock_destination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/destination.js */ "./src/mock/destination.js");


const TYPES = [`Check-in`, `Sightseeing`, `Restaurant`, `Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const DEFAULT_TYPE = `Flight`;
const DESTINATION_NAMES = [`Amsterdam`, `Geneva`, `Chamonix`];
const destinations = DESTINATION_NAMES.map(_mock_destination_js__WEBPACK_IMPORTED_MODULE_0__["generateDestination"]);




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_trip_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/trip-info.js */ "./src/view/trip-info.js");
/* harmony import */ var _view_info_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/info-main.js */ "./src/view/info-main.js");
/* harmony import */ var _view_info_title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/info-title.js */ "./src/view/info-title.js");
/* harmony import */ var _view_info_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/info-date.js */ "./src/view/info-date.js");
/* harmony import */ var _view_info_cost_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/info-cost.js */ "./src/view/info-cost.js");
/* harmony import */ var _view_trip_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/trip-tabs.js */ "./src/view/trip-tabs.js");
/* harmony import */ var _view_trip_filters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/trip-filters.js */ "./src/view/trip-filters.js");
/* harmony import */ var _view_trip_controls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/trip-controls.js */ "./src/view/trip-controls.js");
/* harmony import */ var _view_new_waypoint_btn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/new-waypoint-btn.js */ "./src/view/new-waypoint-btn.js");
/* harmony import */ var _view_trip_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/trip-sort.js */ "./src/view/trip-sort.js");
/* harmony import */ var _view_waypoints_list_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/waypoints-list.js */ "./src/view/waypoints-list.js");
/* harmony import */ var _view_waypoint_edit_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/waypoint-edit.js */ "./src/view/waypoint-edit.js");
/* harmony import */ var _view_trip_waypoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/trip-waypoint.js */ "./src/view/trip-waypoint.js");
/* harmony import */ var _mock_waypoint_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock/waypoint.js */ "./src/mock/waypoint.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./util.js */ "./src/util.js");

















const WAYPOINTS_NUMBER = 15;
const waypoints = Array(WAYPOINTS_NUMBER)
  .fill()
  .map(_mock_waypoint_js__WEBPACK_IMPORTED_MODULE_14__["generateWaypoint"])
  .sort(({date: {start: startA}}, {date: {start: startB}}) => {
    startA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startA);
    startB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startB);
    return startA.diff(startB);
  });

const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

// добавляем кнопку "Новая точка маршрута"

Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderElement"])(tripMainElement, new _view_new_waypoint_btn_js__WEBPACK_IMPORTED_MODULE_9__["default"]().getElement());

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new _view_trip_controls_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderElement"])(tripMainElement, tripControls.getElement());
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderElement"])(tripControls.getElement(), new _view_trip_filters_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement());
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderElement"])(tripControls.getElement(), new _view_trip_tabs_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement());

// добавляем блок "Маршрут и стоимость"

const infoBlock = new _view_trip_info_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderElement"])(tripMainElement, infoBlock.getElement());

// добавляем блок "Сортировка"

const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderTemplate"])(tripWaypointsElement, Object(_view_trip_sort_js__WEBPACK_IMPORTED_MODULE_10__["createSortTemplate"])());

// создаем список точек маршрута
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderTemplate"])(tripWaypointsElement, Object(_view_waypoints_list_js__WEBPACK_IMPORTED_MODULE_11__["createWaypointsListTemplate"])());

// добавляем блок "Добавить точку маршрута"
const waypointsList = tripWaypointsElement.querySelector(`.trip-events__list`);

Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderTemplate"])(waypointsList, Object(_view_waypoint_edit_js__WEBPACK_IMPORTED_MODULE_12__["createWaypointEditorTemplate"])(), _util_js__WEBPACK_IMPORTED_MODULE_15__["RenderPosition"].AFTERBEGIN);

// добавляем блок "Редактировать точку маршрута"
Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderTemplate"])(waypointsList, Object(_view_waypoint_edit_js__WEBPACK_IMPORTED_MODULE_12__["createWaypointEditorTemplate"])(waypoints[0]), _util_js__WEBPACK_IMPORTED_MODULE_15__["RenderPosition"].AFTERBEGIN);

// добавляем 3 блока "Точка маршрута"

waypoints.forEach((waypoint) => {
  Object(_util_js__WEBPACK_IMPORTED_MODULE_15__["renderTemplate"])(waypointsList, Object(_view_trip_waypoint_js__WEBPACK_IMPORTED_MODULE_13__["createWaypointTemplate"])(waypoint));
});


/***/ }),

/***/ "./src/mock/destination.js":
/*!*********************************!*\
  !*** ./src/mock/destination.js ***!
  \*********************************/
/*! exports provided: generateDestination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDestination", function() { return generateDestination; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const SENTENCES_MIN = 1;
const SENTENCES_MAX = 5;
const PHOTOS_MAX = 5;

const DESCRIPTION_TEMPLATE = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDescription = (text) => {
  let sentences = text.split(`.`);
  sentences.pop();
  sentences = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getPartialArray"])(sentences, SENTENCES_MIN, SENTENCES_MAX);
  const description = sentences.join(`. `) + `.`;
  return description;
};

const generatePhotos = (number) => {
  const photos = [];
  const photosNumber = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomValue"])(number);
  for (let i = 0; i < photosNumber; i++) {
    photos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return photos;
};

const generateDestination = (destination) => {
  return {
    name: destination,
    description: generateDescription(DESCRIPTION_TEMPLATE),
    photos: generatePhotos(PHOTOS_MAX)
  };
};




/***/ }),

/***/ "./src/mock/offers.js":
/*!****************************!*\
  !*** ./src/mock/offers.js ***!
  \****************************/
/*! exports provided: getOffers, generateOffersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffers", function() { return getOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOffersNames", function() { return generateOffersNames; });
const OFFERS = {
  'Flight': [
    {
      id: `luggage`,
      name: `Add luggage`,
      price: 30
    },
    {
      id: `comfort`,
      name: `Switch to comfort`,
      price: 80
    },
    {
      id: `meal`,
      name: `Add meal`,
      price: 15
    },
    {
      id: `seats`,
      name: `Choose seats`,
      price: 5
    },
    {
      id: `train`,
      name: `Travel by train`,
      price: 40
    },
  ],
  'Taxi': [
    {
      name: `Order Uber`,
      price: 20
    }
  ],
  'Drive': [
    {
      name: `Rent a car`,
      price: 200
    }
  ],
  'Check-in': [
    {
      name: `Add breakfast`,
      price: 50
    }
  ],
  'Sightseeing': [
    {
      name: `Book tickets`,
      price: 40
    },
    {
      name: `Lunch in city`,
      price: 30
    }
  ]
};

const getOffers = (type) => {
  if (OFFERS[type]) {
    return OFFERS[type];
  }
  return [];
};

const generateOffersNames = (type) => {
  const offers = getOffers(type);
  return offers.map((offer) => offer.name);
};




/***/ }),

/***/ "./src/mock/waypoint.js":
/*!******************************!*\
  !*** ./src/mock/waypoint.js ***!
  \******************************/
/*! exports provided: generateWaypoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateWaypoint", function() { return generateWaypoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _offers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.js */ "./src/mock/offers.js");






const WAYPOINT_PRICE_MIN = 10;
const WAYPOINT_PRICE_MAX = 300;
const TRAVEL_TIME_MAX = 3000;

const generateDate = () => {
  let start = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(-Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValue"])(TRAVEL_TIME_MAX), `minute`);
  let close = start.add(Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValue"])(TRAVEL_TIME_MAX), `minute`);
  start = start.toDate();
  close = close.toDate();
  return {
    start,
    close
  };
};

const generateWaypoint = () => {
  const type = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["TYPES"]);
  const offers = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getPartialArray"])(Object(_offers_js__WEBPACK_IMPORTED_MODULE_3__["generateOffersNames"])(type));
  return {
    type,
    destination: Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["DESTINATION_NAMES"]),
    offers,
    date: generateDate(),
    price: Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValue"])(WAYPOINT_PRICE_MAX, WAYPOINT_PRICE_MIN),
    isFavorites: Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomValue"])(1))
  };
};




/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getRandomValue, getRandomElement, getPartialArray, humanizeDate, renderTemplate, createElement, renderElement, RenderPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomValue", function() { return getRandomValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElement", function() { return getRandomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPartialArray", function() { return getPartialArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeDate", function() { return humanizeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const renderElement = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.BEFOREEND:
      container.prepend(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getRandomValue = (max, min = 0) => {
  let rand = min + Math.random() * ((max + 1) - min);
  return Math.floor(rand);
};

const getRandomElement = (arr) => {
  return arr[getRandomValue(arr.length - 1)];
};

const getPartialArray = (arr, minLength = 0, maxLength = arr.length, isUnique = true) => {
  const array = [];

  if (minLength > maxLength) {
    minLength = maxLength;
  }

  let length = getRandomValue(maxLength, minLength);

  if (!isUnique) {
    for (let i = 0; i < length; i++) {
      array.push(getRandomElement(arr));
    }
  } else {
    arr = Array.from(new Set(arr));

    if (maxLength > arr.length) {
      maxLength = arr.length;
    }

    if (minLength > maxLength) {
      minLength = maxLength;
    }

    length = getRandomValue(maxLength, minLength);
    let randomElement = 0;

    for (let i = 0; i < length; i++) {
      randomElement = getRandomElement(arr);
      if (!array.includes(randomElement)) {
        array.push(randomElement);
        i++;
      }
      i--;
    }
  }

  return array;
};

const humanizeDate = (date, format) => {
  if (date) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
  }
  return ``;
};




/***/ }),

/***/ "./src/view/destination-options.js":
/*!*****************************************!*\
  !*** ./src/view/destination-options.js ***!
  \*****************************************/
/*! exports provided: createDestinationOptionsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDestinationOptionsTemplate", function() { return createDestinationOptionsTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


const createOptionTemplate = (destinationName) => {
  return (`
    <option value="${destinationName}"></option>
  `);
};

const createDestinationOptionsTemplate = () => {
  const options = _const_js__WEBPACK_IMPORTED_MODULE_0__["DESTINATION_NAMES"].map(createOptionTemplate).join(``);
  return (`
    <datalist id="destination-list-1">
      ${options}
    </datalist>
  `);
};




/***/ }),

/***/ "./src/view/info-cost.js":
/*!*******************************!*\
  !*** ./src/view/info-cost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoCost; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _mock_offers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/offers.js */ "./src/mock/offers.js");



const getTripCost = (waypoints) => {
  let cost = 0;

  waypoints.forEach((waypoint) => {
    cost += waypoint.price;
    const offers = Object(_mock_offers_js__WEBPACK_IMPORTED_MODULE_1__["getOffers"])(waypoint.type);
    offers.forEach((offer) => {
      cost += waypoint.offers.includes(offer.name) ? offer.price : 0;
    });
  });

  return cost;
};

const createInfoCostTemplate = (waypoints) => {
  const cost = getTripCost(waypoints);

  return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>`;
};

class InfoCost {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoCostTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/info-date.js":
/*!*******************************!*\
  !*** ./src/view/info-date.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./src/util.js");



const MONTH_LETTERS_NUMBER = 3;
const MONTH_DROP_LETTERS_NUMBER = 4;

const isSameMonth = (start, close) => {
  return start.slice(0, MONTH_LETTERS_NUMBER) === close.slice(0, MONTH_LETTERS_NUMBER) ? true : false;
};

const createInfoDateTemplate = (waypoints) => {
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(waypoints[0].date.start).format(`MMM DD`);
  const closeDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(waypoints[waypoints.length - 1].date.close).format(`MMM DD`);
  const tripDuration = isSameMonth(startDate, closeDate) ? closeDate.slice(MONTH_DROP_LETTERS_NUMBER) : closeDate;

  return `<p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${tripDuration}</p>`;
};

class InfoDate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoDateTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/info-main.js":
/*!*******************************!*\
  !*** ./src/view/info-main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoMain; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createInfoMainTemplate = (waypoints) => {
  return `<div class="trip-info__main"></div>`;
};

class InfoMain {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoMainTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/info-title.js":
/*!********************************!*\
  !*** ./src/view/info-title.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoTitle; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createInfoTitleTemplate = (waypoints) => {
  const route = waypoints.map((waypoint) => waypoint.destination).join(` &mdash; `);

  return `<h1 class="trip-info__title">${route}</h1>`;
};

class InfoTitle {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoTitleTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/new-waypoint-btn.js":
/*!**************************************!*\
  !*** ./src/view/new-waypoint-btn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewWaypointBtn; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createNewWaypointBtnTemplate = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

class NewWaypointBtn {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNewWaypointBtnTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/schedule.js":
/*!******************************!*\
  !*** ./src/view/schedule.js ***!
  \******************************/
/*! exports provided: createScheduleTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScheduleTemplate", function() { return createScheduleTemplate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./src/util.js");



const calculateDuration = (startTime, closeTime) => {
  const start = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime);
  const end = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(closeTime);
  const days = end.diff(start, `day`) % 30 < 10
    ? `0${end.diff(start, `day`) % 30}`
    : end.diff(start, `day`) % 30;
  const hours = end.diff(start, `hour`) % 24 < 10
    ? `0${end.diff(start, `hour`) % 24}`
    : end.diff(start, `hour`) % 24;
  const minutes = end.diff(start, `minute`) % 60 < 10
    ? `0${end.diff(start, `minute`) % 60}`
    : end.diff(start, `minute`) % 60;

  if (Number(days)) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (Number(hours)) {
    return `${hours}H ${minutes}M`;
  } else if (Number(minutes)) {
    return `${minutes}M`;
  }
  return ``;
};

const createScheduleTemplate = (startDate, closeDate) => {
  const startTimeAtribute = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["humanizeDate"])(startDate, `YYYY-MM-DDTHH:mm`);
  const closeTimeAtribute = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["humanizeDate"])(closeDate, `YYYY-MM-DDTHH:mm`);
  const startTime = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["humanizeDate"])(startDate, `HH:mm`);
  const closeTime = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["humanizeDate"])(closeDate, `HH:mm`);
  const duration = calculateDuration(startDate, closeDate);

  return (`
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startTimeAtribute}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${closeTimeAtribute}">${closeTime}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
  `);
};




/***/ }),

/***/ "./src/view/trip-controls.js":
/*!***********************************!*\
  !*** ./src/view/trip-controls.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripControls; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createTripControlsTemplate = () => {
  return `<div class="trip-main__trip-controls  trip-controls"></div>`;
};

class TripControls {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripControlsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-filters.js":
/*!**********************************!*\
  !*** ./src/view/trip-filters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripFilters; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createFiltersTemplate = () => {
  return `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
};

class TripFilters {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-info.js":
/*!*******************************!*\
  !*** ./src/view/trip-info.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBlock; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createInfoBlockTemplate = (waypoints) => {
  return `<section class="trip-main__trip-info  trip-info"></section>`;
};

class InfoBlock {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoBlockTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-sort.js":
/*!*******************************!*\
  !*** ./src/view/trip-sort.js ***!
  \*******************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
const createSortTemplate = () => {
  return (`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>
  `);
};




/***/ }),

/***/ "./src/view/trip-tabs.js":
/*!*******************************!*\
  !*** ./src/view/trip-tabs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripTabs; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


const createTabsSwitcherTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn" href="#">Table</a>
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
    </nav>`;
};

class TripTabs {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTabsSwitcherTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-waypoint.js":
/*!***********************************!*\
  !*** ./src/view/trip-waypoint.js ***!
  \***********************************/
/*! exports provided: createWaypointTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWaypointTemplate", function() { return createWaypointTemplate; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _waypoint_offers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waypoint-offers.js */ "./src/view/waypoint-offers.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./src/view/schedule.js");




const createWaypointTemplate = (waypoint) => {
  const {
    type,
    destination,
    offers,
    date: {
      start: startDate,
      close: closeDate
    },
    price,
    isFavorites
  } = waypoint;

  const dateAtribute = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["humanizeDate"])(startDate, `YYYY-MM-DD`);
  const date = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["humanizeDate"])(startDate, `MMM DD`);
  const favoriteClassName = isFavorites
    ? `event__favorite-btn event__favorite-btn--active`
    : `event__favorite-btn`;
  const offersList = Object(_waypoint_offers_js__WEBPACK_IMPORTED_MODULE_1__["createWaypointOffersTemplate"])(type, offers);
  const shedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["createScheduleTemplate"])(startDate, closeDate);

  return (`
    <div class="event">
      <time class="event__date" datetime="${dateAtribute}">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      ${shedule}
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offersList}
      </ul>
      <button class="${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  `);
};




/***/ }),

/***/ "./src/view/type-list.js":
/*!*******************************!*\
  !*** ./src/view/type-list.js ***!
  \*******************************/
/*! exports provided: createWaypointTypeListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWaypointTypeListTemplate", function() { return createWaypointTypeListTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


const createWaypointTypeItemTemplate = (type, selectedType) => {
  return (`
    <div class="event__type-item">
      <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}"${type === selectedType ? ` checked` : ``}>
      <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
    </div>
  `);
};

const createWaypointTypeListTemplate = (selectedType) => {
  const typeItems = _const_js__WEBPACK_IMPORTED_MODULE_0__["TYPES"].map((type) => createWaypointTypeItemTemplate(type, selectedType)).join(``);

  return (`
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${typeItems}
      </fieldset>
    </div>
  `);
};




/***/ }),

/***/ "./src/view/waypoint-destination.js":
/*!******************************************!*\
  !*** ./src/view/waypoint-destination.js ***!
  \******************************************/
/*! exports provided: createDestinationSectionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDestinationSectionTemplate", function() { return createDestinationSectionTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


const createDestinationSectionTemplate = (destination) => {
  destination = _const_js__WEBPACK_IMPORTED_MODULE_0__["destinations"].find((place) => place.name === destination);
  if (destination) {
    return (`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
      </section>
    `);
  }
  return ``;
};




/***/ }),

/***/ "./src/view/waypoint-edit.js":
/*!***********************************!*\
  !*** ./src/view/waypoint-edit.js ***!
  \***********************************/
/*! exports provided: createWaypointEditorTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWaypointEditorTemplate", function() { return createWaypointEditorTemplate; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var _type_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-list.js */ "./src/view/type-list.js");
/* harmony import */ var _destination_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination-options.js */ "./src/view/destination-options.js");
/* harmony import */ var _waypoint_offers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waypoint-offers.js */ "./src/view/waypoint-offers.js");
/* harmony import */ var _waypoint_destination_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waypoint-destination.js */ "./src/view/waypoint-destination.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./src/const.js");







const createWaypointEditorTemplate = (waypoint = {date: {start: ``, close: ``}}) => {

  const {
    type = _const_js__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TYPE"],
    destination = ``,
    offers = [],
    date: {start: startDate, close: closeDate},
    price = ``
  } = waypoint;
  const typeList = Object(_type_list_js__WEBPACK_IMPORTED_MODULE_1__["createWaypointTypeListTemplate"])(type);
  const optionList = Object(_destination_options_js__WEBPACK_IMPORTED_MODULE_2__["createDestinationOptionsTemplate"])();
  const startTime = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["humanizeDate"])(startDate, `DD/MM/YY HH:mm`);
  const closeTime = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["humanizeDate"])(closeDate, `DD/MM/YY HH:mm`);
  const offersSection = Object(_waypoint_offers_js__WEBPACK_IMPORTED_MODULE_3__["createOffersSectionTemplate"])(type, offers);
  const destinationSection = Object(_waypoint_destination_js__WEBPACK_IMPORTED_MODULE_4__["createDestinationSectionTemplate"])(destination);

  return (`
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${typeList}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${optionList}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${closeTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">

        ${offersSection}

        ${destinationSection}
      </section>
    </form>
  `);
};




/***/ }),

/***/ "./src/view/waypoint-offers.js":
/*!*************************************!*\
  !*** ./src/view/waypoint-offers.js ***!
  \*************************************/
/*! exports provided: createWaypointOffersTemplate, createOffersSectionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWaypointOffersTemplate", function() { return createWaypointOffersTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffersSectionTemplate", function() { return createOffersSectionTemplate; });
/* harmony import */ var _mock_offers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/offers.js */ "./src/mock/offers.js");


const createWaypointOffersTemplate = (type, offersNames) => {
  let offersList = ``;
  const offers = Object(_mock_offers_js__WEBPACK_IMPORTED_MODULE_0__["getOffers"])(type);
  offers.forEach((offer) => {
    if (offersNames.includes(offer.name)) {
      offersList += (`
        <li class="event__offer">
          <span class="event__offer-title">${offer.name}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>
      `);
    }
  });

  return offersList;
};

const createOfferTemplate = (offer, waypointOffers) => {
  return (`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}"${waypointOffers.includes(offer.name) ? ` checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
  `);
};

const createOffersSectionTemplate = (type, waypointOffers) => {
  const offers = Object(_mock_offers_js__WEBPACK_IMPORTED_MODULE_0__["getOffers"])(type);
  const options = offers.map((offer) => createOfferTemplate(offer, waypointOffers)).join(``);

  return (`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${options}
      </div>
    </section>
  `);
};




/***/ }),

/***/ "./src/view/waypoints-list.js":
/*!************************************!*\
  !*** ./src/view/waypoints-list.js ***!
  \************************************/
/*! exports provided: createWaypointsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWaypointsListTemplate", function() { return createWaypointsListTemplate; });
const createWaypointsListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};




/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/util.js ./src/const.js ./src/view/trip-info.js ./src/view/info-main.js ./src/view/info-cost.js ./src/view/info-date.js ./src/view/info-title.js ./src/view/trip-tabs.js ./src/view/trip-filters.js ./src//view/trip-controls.js ./src/view/new-waypoint-btn.js ./src/view/trip-sort.js ./src/view/type-list.js ./src/view/waypoints-list.js ./src/view/destination-options.js ./src/view/waypoint-destination.js ./src/view/waypoint-edit.js ./src/view/schedule.js ./src/view/trip-waypoint.js ./src/mock/waypoint.js ./src/mock/offers.js ./src/mock/destination.js ./src/view/waypoint-offers.js ./src/main.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/util.js */"./src/util.js");
__webpack_require__(/*! ./src/const.js */"./src/const.js");
__webpack_require__(/*! ./src/view/trip-info.js */"./src/view/trip-info.js");
__webpack_require__(/*! ./src/view/info-main.js */"./src/view/info-main.js");
__webpack_require__(/*! ./src/view/info-cost.js */"./src/view/info-cost.js");
__webpack_require__(/*! ./src/view/info-date.js */"./src/view/info-date.js");
__webpack_require__(/*! ./src/view/info-title.js */"./src/view/info-title.js");
__webpack_require__(/*! ./src/view/trip-tabs.js */"./src/view/trip-tabs.js");
__webpack_require__(/*! ./src/view/trip-filters.js */"./src/view/trip-filters.js");
__webpack_require__(/*! ./src//view/trip-controls.js */"./src/view/trip-controls.js");
__webpack_require__(/*! ./src/view/new-waypoint-btn.js */"./src/view/new-waypoint-btn.js");
__webpack_require__(/*! ./src/view/trip-sort.js */"./src/view/trip-sort.js");
__webpack_require__(/*! ./src/view/type-list.js */"./src/view/type-list.js");
__webpack_require__(/*! ./src/view/waypoints-list.js */"./src/view/waypoints-list.js");
__webpack_require__(/*! ./src/view/destination-options.js */"./src/view/destination-options.js");
__webpack_require__(/*! ./src/view/waypoint-destination.js */"./src/view/waypoint-destination.js");
__webpack_require__(/*! ./src/view/waypoint-edit.js */"./src/view/waypoint-edit.js");
__webpack_require__(/*! ./src/view/schedule.js */"./src/view/schedule.js");
__webpack_require__(/*! ./src/view/trip-waypoint.js */"./src/view/trip-waypoint.js");
__webpack_require__(/*! ./src/mock/waypoint.js */"./src/mock/waypoint.js");
__webpack_require__(/*! ./src/mock/offers.js */"./src/mock/offers.js");
__webpack_require__(/*! ./src/mock/destination.js */"./src/mock/destination.js");
__webpack_require__(/*! ./src/view/waypoint-offers.js */"./src/view/waypoint-offers.js");
module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map