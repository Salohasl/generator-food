/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles1.scss":
/*!**************************!*\
  !*** ./src/styles1.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/foodArray.ts":
/*!**************************!*\
  !*** ./src/foodArray.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        "id": "1",
        "name": "Вок",
        "src": "/src/images/wok.jpg"
    },
    {
        "id": "2",
        "name": "Плов",
        "src": "/src/images/plov.jpg"
    },
    {
        "id": "3",
        "name": "Гречка",
        "src": "/src/images/gr.jpg"
    },
    {
        "id": "4",
        "name": "Макароны",
        "src": "/src/images/mak.jpg"
    },
    {
        "id": "5",
        "name": "Жаркое",
        "src": "/src/images/jar.jpg"
    },
    {
        "id": "6",
        "name": "Жаренная картошка",
        "src": "/src/images/cart.jpg"
    },
    {
        "id": "7",
        "name": "Пюре",
        "src": "/src/images/pure.jpg"
    },
    {
        "id": "8",
        "name": "Креативчик(что-то новое)",
        "src": "/src/images/hz.jpg"
    },
    {
        "id": "9",
        "name": "Пицца",
        "src": "/src/images/pizza.jpg"
    },
    {
        "id": "10",
        "name": "Шаурма",
        "src": "/src/images/shaur.jpg"
    }
]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodArray */ "./src/foodArray.ts");
/* harmony import */ var _styles1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles1.scss */ "./src/styles1.scss");


/*Выбор данных из массива объектов*/
var textMan = document.querySelector('.text');
var Btn = document.querySelector('button');
var loading = document.getElementById('loading');
Btn.addEventListener('click', function random() {
    loading.style.display = 'block';
    var interval = setInterval(function () {
        //генерация выбора
        var randomArr = _foodArray__WEBPACK_IMPORTED_MODULE_0__["default"][Math.floor(Math.random() * _foodArray__WEBPACK_IMPORTED_MODULE_0__["default"].length)];
        //вывод на экран текста
        textMan.textContent = randomArr.name;
        //Вывод на экран изображения
        var img = document.createElement('img');
        img.src = randomArr.src;
        textMan.append(img);
        //Убираем загрузку
        loading.style.display = 'none';
        //остановка интервала
        clearInterval(interval);
    }, 1000);
    Btn.removeEventListener('click', random);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LjZlNjQ4MmY2YWMwZWYyMGFhNjE3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlO0lBQ1g7UUFDRSxJQUFJLEVBQUMsR0FBRztRQUNSLE1BQU0sRUFBQyxLQUFLO1FBQ1osS0FBSyxFQUFDLHFCQUFxQjtLQUM1QjtJQUNEO1FBQ0UsSUFBSSxFQUFDLEdBQUc7UUFDUixNQUFNLEVBQUMsTUFBTTtRQUNiLEtBQUssRUFBQyxzQkFBc0I7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBQyxHQUFHO1FBQ1IsTUFBTSxFQUFDLFFBQVE7UUFDZixLQUFLLEVBQUMsb0JBQW9CO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsR0FBRztRQUNSLE1BQU0sRUFBQyxVQUFVO1FBQ2pCLEtBQUssRUFBQyxxQkFBcUI7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFBQyxHQUFHO1FBQ1IsTUFBTSxFQUFDLFFBQVE7UUFDZixLQUFLLEVBQUMscUJBQXFCO0tBQzVCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsR0FBRztRQUNSLE1BQU0sRUFBQyxtQkFBbUI7UUFDMUIsS0FBSyxFQUFDLHNCQUFzQjtLQUM3QjtJQUNEO1FBQ0UsSUFBSSxFQUFDLEdBQUc7UUFDUixNQUFNLEVBQUMsTUFBTTtRQUNiLEtBQUssRUFBQyxzQkFBc0I7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBQyxHQUFHO1FBQ1IsTUFBTSxFQUFDLDBCQUEwQjtRQUNqQyxLQUFLLEVBQUMsb0JBQW9CO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsR0FBRztRQUNSLE1BQU0sRUFBQyxPQUFPO1FBQ2QsS0FBSyxFQUFDLHVCQUF1QjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFDLElBQUk7UUFDVCxNQUFNLEVBQUMsUUFBUTtRQUNmLEtBQUssRUFBQyx1QkFBdUI7S0FDOUI7Q0FDSixFQUFDOzs7Ozs7O1VDbkRGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1Y7QUFDeEIsb0NBQW9DO0FBRXBDLElBQU0sT0FBTyxHQUFZLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsSUFBTSxHQUFHLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxJQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU5RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsTUFBTTtJQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFaEMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLGtCQUFrQjtRQUNuQixJQUFJLFNBQVMsR0FBRyxrREFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLGtEQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsRSx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRXJDLDRCQUE0QjtRQUM1QixJQUFNLEdBQUcsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRS9CLHFCQUFxQjtRQUNyQixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1QsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc3R5bGVzMS5zY3NzPzZkYzkiLCJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9mb29kQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICBcImlkXCI6XCIxXCIsXHJcbiAgICAgIFwibmFtZVwiOlwi0JLQvtC6XCIsXHJcbiAgICAgIFwic3JjXCI6XCIvc3JjL2ltYWdlcy93b2suanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjpcIjJcIixcclxuICAgICAgXCJuYW1lXCI6XCLQn9C70L7QslwiLFxyXG4gICAgICBcInNyY1wiOlwiL3NyYy9pbWFnZXMvcGxvdi5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOlwiM1wiLFxyXG4gICAgICBcIm5hbWVcIjpcItCT0YDQtdGH0LrQsFwiLFxyXG4gICAgICBcInNyY1wiOlwiL3NyYy9pbWFnZXMvZ3IuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjpcIjRcIixcclxuICAgICAgXCJuYW1lXCI6XCLQnNCw0LrQsNGA0L7QvdGLXCIsXHJcbiAgICAgIFwic3JjXCI6XCIvc3JjL2ltYWdlcy9tYWsuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjpcIjVcIixcclxuICAgICAgXCJuYW1lXCI6XCLQltCw0YDQutC+0LVcIixcclxuICAgICAgXCJzcmNcIjpcIi9zcmMvaW1hZ2VzL2phci5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOlwiNlwiLFxyXG4gICAgICBcIm5hbWVcIjpcItCW0LDRgNC10L3QvdCw0Y8g0LrQsNGA0YLQvtGI0LrQsFwiLFxyXG4gICAgICBcInNyY1wiOlwiL3NyYy9pbWFnZXMvY2FydC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOlwiN1wiLFxyXG4gICAgICBcIm5hbWVcIjpcItCf0Y7RgNC1XCIsXHJcbiAgICAgIFwic3JjXCI6XCIvc3JjL2ltYWdlcy9wdXJlLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6XCI4XCIsXHJcbiAgICAgIFwibmFtZVwiOlwi0JrRgNC10LDRgtC40LLRh9C40Loo0YfRgtC+LdGC0L4g0L3QvtCy0L7QtSlcIixcclxuICAgICAgXCJzcmNcIjpcIi9zcmMvaW1hZ2VzL2h6LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6XCI5XCIsXHJcbiAgICAgIFwibmFtZVwiOlwi0J/QuNGG0YbQsFwiLFxyXG4gICAgICBcInNyY1wiOlwiL3NyYy9pbWFnZXMvcGl6emEuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjpcIjEwXCIsXHJcbiAgICAgIFwibmFtZVwiOlwi0KjQsNGD0YDQvNCwXCIsXHJcbiAgICAgIFwic3JjXCI6XCIvc3JjL2ltYWdlcy9zaGF1ci5qcGdcIlxyXG4gICAgfSAgICBcclxuXTtcclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhcnJGb29kIGZyb20gJy4vZm9vZEFycmF5JztcclxuaW1wb3J0ICcuL3N0eWxlczEuc2Nzcyc7XHJcbi8q0JLRi9Cx0L7RgCDQtNCw0L3QvdGL0YUg0LjQtyDQvNCw0YHRgdC40LLQsCDQvtCx0YrQtdC60YLQvtCyKi9cclxuXHJcbmNvbnN0IHRleHRNYW46IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG5jb25zdCBCdG46IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5jb25zdCBsb2FkaW5nOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nJyk7XHJcbiAgICBcclxuICBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiByYW5kb20oKXtcclxuICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgLy/Qs9C10L3QtdGA0LDRhtC40Y8g0LLRi9Cx0L7RgNCwXHJcbiAgICAgIGxldCByYW5kb21BcnIgPSBhcnJGb29kW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphcnJGb29kLmxlbmd0aCldO1xyXG5cclxuICAgICAgLy/QstGL0LLQvtC0INC90LAg0Y3QutGA0LDQvSDRgtC10LrRgdGC0LBcclxuICAgICAgdGV4dE1hbi50ZXh0Q29udGVudCA9IHJhbmRvbUFyci5uYW1lO1xyXG5cclxuICAgICAgLy/QktGL0LLQvtC0INC90LAg0Y3QutGA0LDQvSDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbiAgICAgIGNvbnN0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcuc3JjID0gcmFuZG9tQXJyLnNyYztcclxuICAgICAgdGV4dE1hbi5hcHBlbmQoaW1nKTtcclxuXHJcbiAgICAgIC8v0KPQsdC40YDQsNC10Lwg0LfQsNCz0YDRg9C30LrRg1xyXG4gICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAvL9C+0YHRgtCw0L3QvtCy0LrQsCDQuNC90YLQtdGA0LLQsNC70LBcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbSk7XHJcbiAgfSk7ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==