/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var model = void 0;
	/**
	 * 基础类，包含一些公用的方法和属性
	 */

	var Basic = function () {
	  function Basic() {
	    var initData = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Basic);

	    model = this;

	    var mvvmDefault = {
	      el: 'body',
	      data: {
	        //session: SITE.session
	      },
	      components: {
	        //'vue-area': vuearea,
	      }
	    };

	    /**
	     * 扩展 vue 对象 computed 、 components
	     */
	    _.each(initData.vue, function (v, k) {
	      if (_.has(mvvmDefault, k)) {
	        mvvmDefault[k] = _.extend(mvvmDefault[k], v);
	      } else {
	        mvvmDefault[k] = v;
	      }
	    });

	    /**
	     * vue 实例化 子类中也会用到
	     * 子类通过 this.mvvm.$set() 添加vue data 数据
	     * 子类通过 this.register([]) 注册 vue methods
	     */

	    this.mvvm = new Vue(mvvmDefault);

	    window.MVVM = this.mvvm;
	  }

	  /**
	   * 注册某些方法到 vue 上
	   * @param  {string} method 方法名
	   * @return {void}        
	   */


	  Basic.prototype.register = function register(methods) {
	    var _this = this;

	    methods.forEach(function (item) {
	      _this.mvvm[item] = _this[item];
	    });
	  };

	  return Basic;
	}();

	window.Basic = Basic;

/***/ }
/******/ ]);