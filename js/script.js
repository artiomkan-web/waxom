 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("// Settings\n\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n}); // Burger\n\nvar burgerMenu = document.querySelector('.header__burger-menu'),\n    navMenu = document.querySelector('.header__menu'),\n    navItem = document.querySelectorAll('.header__list > li > a');\n\nfunction rootMenu() {\n  navMenu.classList.contains('active') ? navMenu.classList.remove('active') : navMenu.classList.add('active');\n}\n\nburgerMenu.addEventListener('click', function (e) {\n  rootMenu();\n});\nnavItem.forEach(function (i) {\n  i.addEventListener('click', function (e) {\n    rootMenu();\n  });\n}); // Startpage \n\nvar startpage = document.querySelector('.startpage'),\n    startpageDot = document.querySelectorAll('.startpage__numbers__num'),\n    startpageDotsWrapper = document.querySelector('.startpage__numbers'),\n    startpageBgLength = 3,\n    startpageIndex = 1;\n\nfunction startpageBgChanger() {\n  if (startpageIndex == startpageBgLength + 1) {\n    startpageIndex = 1;\n    startpage.style.background = \"url(img/background/startpage_bg\".concat(startpageIndex, \".webp) center center / cover\");\n  }\n\n  if (startpageIndex == 0) {\n    startpageIndex = startpageBgLength;\n    startpage.style.background = \"url(img/background/startpage_bg\".concat(startpageIndex, \".webp) center center / cover\");\n  } else {\n    startpage.style.background = \"url(img/background/startpage_bg\".concat(startpageIndex, \".webp) center center / cover\");\n  }\n\n  startpageDot.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  startpageDot[startpageIndex - 1].classList.add('active');\n}\n\nstartpageDotsWrapper.addEventListener('click', function (e) {\n  for (var i = 0; i < startpageDot.length; i++) {\n    if (e.target.classList.contains('startpage__numbers__num') && e.target == startpageDot[i]) {\n      startpageDot.forEach(function (i) {\n        i.classList.remove('active');\n      });\n      startpageDot[i].classList.add('active');\n      startpageIndex = i + 1;\n      startpageBgChanger();\n    }\n  }\n});\nstartpage.addEventListener('click', function (e) {\n  if (e.target.classList.contains('prev')) {\n    startpageIndex--;\n    startpageBgChanger();\n  }\n\n  if (e.target.classList.contains('next')) {\n    startpageIndex++;\n    startpageBgChanger();\n  }\n}); // Projects\n\nvar projects = document.querySelector('.projects__navigation'),\n    projectsItem = document.querySelectorAll('.projects__item'),\n    projectsNav = document.querySelector('.projects__list'),\n    projectsTab = document.querySelectorAll('.projects__list-item'),\n    projectsBtn = document.querySelector('.projects__navigation>button'),\n    projectIndex = 0,\n    projectsTypes = ['all', 'webdesign', 'mobileapp', 'illustration', 'photography'];\n\nfunction hideProjects() {\n  projectsItem.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  projectsTab.forEach(function (i) {\n    i.classList.remove('active');\n  });\n}\n\nfunction projectsChanger(value) {\n  hideProjects();\n\n  if (value > 0) {\n    document.querySelectorAll(\".\".concat(projectsTypes[value])).forEach(function (i) {\n      i.classList.add('active');\n    });\n  } else {\n    projectsItem.forEach(function (i) {\n      i.classList.add('active');\n    });\n  }\n\n  projectsTab[value].classList.add('active');\n}\n\nfunction projectsLimiter() {\n  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var visibleProjects = document.querySelectorAll('.projects__item.active');\n\n  if (visibleProjects.length > value) {\n    for (var i = value; i < visibleProjects.length; i++) {\n      visibleProjects[i].classList.remove('active');\n    }\n\n    projectsBtn.style.display = 'block';\n  } else {\n    projectsBtn.style.display = 'none';\n  }\n}\n\nprojectsNav.addEventListener('click', function (e) {\n  for (var i = 0; i < projectsTab.length; i++) {\n    console.log(e.target.outerText);\n\n    if (e.target == projectsTab[i].querySelector('a')) {\n      projectIndex = i;\n      projectsBtn.innerHTML = 'Load More';\n      projectsBtn.classList.remove('active');\n      projectsChanger(projectIndex);\n      projectsLimiter();\n    }\n  }\n});\nprojectsBtn.addEventListener('click', function (e) {\n  var visibleProjects = document.querySelectorAll('.projects__item.active');\n\n  if (projectsBtn.classList.contains('active')) {\n    projectsLimiter();\n    projectsBtn.innerHTML = 'Load More';\n    projectsBtn.classList.remove('active');\n  } else {\n    projectsChanger(projectIndex);\n    projectsBtn.innerHTML = 'Collapse';\n    projectsBtn.classList.add('active');\n  }\n}); // Posts \n\nvar postsItem = document.querySelectorAll('.posts__elem'),\n    postsPrev = document.querySelector('.posts__prev'),\n    postsNext = document.querySelector('.posts__next'),\n    postsValue = 3,\n    postsIndex = 0;\n\nfunction showPosts() {\n  var startNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n\n  var _loop = function _loop(i) {\n    postsItem[startNumber + i].classList.add('active');\n    var n = 0;\n    setInterval(function () {\n      if (n < 1) {\n        n += 0.1;\n        postsItem[startNumber + i].style.opacity = n;\n      } else {\n        clearInterval;\n      }\n    }, 50);\n  };\n\n  for (var i = 0; i < value; i++) {\n    _loop(i);\n  }\n}\n\nfunction hidePosts() {\n  postsItem.forEach(function (i) {\n    i.classList.remove('active');\n    i.style.opacity = 0;\n  });\n}\n\npostsNext.addEventListener('click', function (e) {\n  postsIndex++;\n\n  if (postsIndex == postsItem.length - postsValue + 1) {\n    postsIndex = 0;\n  }\n\n  hidePosts();\n  showPosts(postsIndex, postsValue);\n});\npostsPrev.addEventListener('click', function (e) {\n  postsIndex--;\n\n  if (postsIndex < 0) {\n    postsIndex = postsItem.length - postsValue;\n  }\n\n  hidePosts();\n  showPosts(postsIndex, postsValue);\n});\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });