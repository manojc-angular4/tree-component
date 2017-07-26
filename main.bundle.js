webpackJsonp([1,4],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "h1{\n    text-align: center;\n}\n\n.container{\n    left: 20%;\n    width: 30%;\n    margin: auto;\n    margin-top: 50px;\n}\n\ntree-root >>> tree-viewport {\n    overflow: visible;\n}\n\n.node-content-wrapper{\n    position: relative;\n    overflow: visible;\n}\n\n.node-content-wrapper:before {\n    content: \"\";\n    position: absolute; \n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    height: 100%;\n    top: -8px;\n    width: 20px;\n    left: -15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n</h1>\n<br>\n<div class=\"container\">\n    <tree-root [nodes]=\"nodes\" (event)=\"onEvent($event)\">\n        <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\n            <div class=\"tree-node\" [class.tree-node-leaf]=\"node.isLeaf\">\n                <div class=\"node-wrapper\">\n                    <div class=\"node-content-wrapper\" [class.active]=\"node.isFocused\">\n                        <tree-node-expander [node]=\"node\"></tree-node-expander>\n                        <label for=\"id\">{{node.data.name}}</label>\n                        <input #checkbox type=\"checkbox\" [checked]=\"node.data.isChecked\" (change)=\"nodeChecked(node, checkbox.checked)\">\n                    </div>\n                </div>\n                <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n            </div>\n        </ng-template>\n    </tree-root>\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 82;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2/4 Tree Component';
        this.nodes = [];
        this.nodeId = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.createNodes(5);
    };
    AppComponent.prototype.nodeChecked = function (node, isChecked) {
        this.updateChildren(node, isChecked);
        this.updateParent(node.parent);
    };
    AppComponent.prototype.updateChildren = function (node, isChecked) {
        var _this = this;
        node.data.isChecked = isChecked;
        if (node.hasChildren) {
            node.children.forEach(function (child) { return _this.updateChildren(child, isChecked); });
        }
    };
    AppComponent.prototype.updateParent = function (node) {
        if (!node || node.data.virtual) {
            return;
        }
        var isChecked = true;
        if (node.hasChildren) {
            node.children.forEach(function (child) { return isChecked = child.data.isChecked && isChecked; });
        }
        node.data.isChecked = isChecked;
        this.updateParent(node.parent);
    };
    AppComponent.prototype.onEvent = function (event) {
        if (event.node) {
            if (event.node.data) {
                console.log(event.eventName, ' - ', event.node.data.id);
                return;
            }
            console.log(event);
        }
    };
    AppComponent.prototype.createNodes = function (count) {
        var nodes = [];
        this.nodeId = 0;
        for (var index = 0; index < count; index++) {
            var depth = Math.floor(Math.random() * 10);
            while (depth < 2 || depth > 5) {
                depth = Math.floor(Math.random() * 10);
            }
            var node = {
                id: ++this.nodeId,
                name: 'node  ' + this.nodeId
            };
            node = this.addChildren(node, depth);
            nodes.push(node);
        }
        this.nodes = [{
                id: 0,
                name: "Root Element",
                children: nodes
            }];
    };
    AppComponent.prototype.addChildren = function (node, depth) {
        if (depth <= 0) {
            return node;
        }
        node.children = node.children || [];
        var childNode;
        var childCount = Math.floor(Math.random() * 10);
        while (childCount < 6 || childCount > 6) {
            childCount = Math.floor(Math.random() * 10);
        }
        for (var child = 0; child < childCount; child++) {
            childNode = {
                id: ++this.nodeId,
                name: 'node  ' + this.nodeId
            };
            childNode = this.addChildren(childNode, depth - 1);
            node.children.push(childNode);
        }
        return node;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(162)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["a" /* TreeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.bundle.js.map