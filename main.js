(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'prashantMishra';
    }
    ngOnInit() {
        this.hambergerButton = document.getElementById('hamburger');
        this.navList = document.getElementById('nav-list');
    }
    toggleButton() {
        this.navList.classList.toggle('show');
    }
    hamClicked() {
        this.toggleButton();
    }
    dispalyContactForm() {
        //document.getElementById('contactButton').style.display='none';
        document.getElementById('model').style.display = 'block';
    }
    closeContact() {
        document.getElementById('model').style.display = 'none';
    }
    submitClicked() {
        document.getElementById('model').style.display = 'none';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 131, vars: 0, consts: [[1, "hero"], ["src", "../assets/images/logo.png", "alt", "Prashant Mishra's logo", 1, "logo"], ["id", "nav-list"], ["href", "#aboutme", 1, "navigations"], ["href", "#projects", 1, "navigations"], ["href", "#contacts", 1, "navigations"], ["id", "hamburger", 1, "hamburger", 3, "click"], [1, "fas", "fa-bars"], [1, "hero-area"], [1, "hero-text"], [1, "button"], ["href", "#aboutme"], [1, "socials"], ["href", "https://in.linkedin.com/in/prashant-mishra-a09254151", 1, "social"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#ffffff", "width", "50", "height", "50", "viewBox", "0 0 24 24"], ["d", "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"], ["href", "https://github.com/prashantRmishra/", 1, "social"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["id", "aboutme", 1, "sub-section"], [1, "information"], ["href", "https://drive.google.com/file/d/1F915isYTi4i38EoOEsN0vJ5_EawEkiPv/view?usp=sharing"], [1, "headshot-container"], ["src", "../assets/images/prashant.jpg", "alt", "Prashant Mishra HeadShot", 1, "headshot"], ["id", "projects", 1, "sub-section-alternative"], [1, "project-container"], [1, "project-card"], ["src", "../assets/images/project1.png", "alt", "Project One Image", 1, "project-image"], [1, "subtext"], ["href", "https://github.com/prashantRmishra/bhojpuri-mirror", 1, "project-link"], ["src", "../assets/images/project2.png", "alt", "Project Two Image", 1, "project-image"], ["href", "https://github.com/prashantRmishra/portfolio", 1, "project-link"], ["src", "../assets/images/project3.png", "alt", "Project Three Image", 1, "project-image"], ["href", "https://pasn-f22d7.firebaseapp.com/index.html", 1, "project-link"], ["id", "contacts"], ["id", "contactButton", 3, "click"], ["id", "model", 1, "model"], [1, "model-content"], [1, "model-header"], [1, "close-model", 3, "click"], [1, "model-body"], ["type", "text", "placeholder", "name"], ["type", "text", "placeholder", "email"], ["name", "message", "id", "message", "cols", "3", "rows", "1", "placeholder", "Message ..."], [1, "submitButton", 3, "click"], [1, "model-footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.hamClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Full stack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hello my name is Prashant Mishra. I am a software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ">> resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "BM News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "This is a news web application that I had developed for BhojpuriMirror News Agency. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "View here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "This is the same website that you are checking out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "View here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Project Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "This is a website that I had Developed in Rajasthan Hackathon 5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "View here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "footer", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h2_click_107_listener() { return ctx.dispalyContactForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Let's Talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_113_listener() { return ctx.closeContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Contacs Me !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_121_listener() { return ctx.submitClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%] {\r\n    background-color: #1c1d25;\r\n    \r\n    height: 100vh;\r\n    color: white;\r\n    font-size: 40px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 80px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    list-style-type: none;\r\n    \r\n    width: 500px;\r\n    justify-content: space-around;\r\n    \r\n    font-size: 30px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    \r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\na.navigations[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\na.navigations[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #ef744b;\r\n    visibility: hidden;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\na.navigations[_ngcontent-%COMP%]:hover:before {\r\n    visibility: visible;\r\n    width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    color: #ef744b;\r\n}\r\n\r\n\r\n\r\n.hero-area[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    \r\n    height: 100%;\r\n    \r\n    \r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.hero-text[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n    margin-bottom: 200px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 55px;\r\n    border-radius: 30px;\r\n    text-align: center;\r\n    background-color: coral;\r\n    font-weight: 300;\r\n    font-size: 30px;\r\n    padding-top: 5px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    background-color: #ef744b;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:active {\r\n    background-color: #a9a9a9;\r\n    color: #808080;\r\n}\r\n\r\n.socials[_ngcontent-%COMP%] {\r\n    padding-bottom: 200px;\r\n    \r\n}\r\n\r\n.social[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\r\n    fill: #ef744b;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    margin: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sub-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 80px;\r\n}\r\n\r\n.sub-section-alternative[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    padding: 80px;\r\n}\r\n\r\n.headshot[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    height: 350px;\r\n    border-radius: 175px;\r\n    box-shadow: 5px 5px 20px rgb(194, 191, 191);\r\n}\r\n\r\n.headshot-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    color: black;\r\n}\r\n\r\n.information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #ef744b;\r\n}\r\n\r\n.project-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 500px;\r\n    box-shadow: 5px 5px 20px rgb(194, 191, 191);\r\n    margin: 10px;\r\n}\r\n\r\n.project-image[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 125px;\r\n    margin-top: 25px;\r\n\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.project-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.project-link[_ngcontent-%COMP%]:hover {\r\n    color: #ef744b;\r\n}\r\n\r\n.hamburger[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.hamburger[_ngcontent-%COMP%]:focus {\r\n    outline: 0;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n    .hamburger[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: 0;\r\n        background-color: transparent;\r\n        color: white;\r\n        font-size: 30px;\r\n        margin: 20px;\r\n        align-self: flex-end;\r\n    }\r\n    ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n        margin: 0px;\r\n        background-color: #2c2e3b;\r\n    }\r\n    ul.show[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        background-color: #2c2e3b;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n    .project-container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n\r\n\r\n#contacts[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    color: #ef744b;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.model[_ngcontent-%COMP%]{\r\n    display: none;\r\n    z-index: 1;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(0,0,0,0.4);\r\n    border-radius: 10px;\r\n}\r\n\r\n.model-content[_ngcontent-%COMP%]{\r\n    border: solid 1px black;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: auto;\r\n    width: 80%;\r\n    box-shadow: 5px 5px 20px rgb(194, 191, 191);\r\n    background-color: #fefefe;\r\n    \r\n    \r\n    animation: animationtop;\r\n    animation-duration: 0.4s;\r\n\r\n}\r\n\r\n\r\n\r\n@keyframes animationtop{\r\nfrom {top: -300px;opacity: 0;}\r\nto{top:0;opacity: 1;}\r\n}\r\n\r\n.model-header[_ngcontent-%COMP%]{\r\n    background-color:coral;\r\n    \r\n    padding: 2px 16px;\r\n    color: white;\r\n    \r\n}\r\n\r\n.model-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n\r\n.model-body[_ngcontent-%COMP%]{\r\n    padding: 2px 16px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.model[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    outline: none;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n\r\n\r\n.model-footer[_ngcontent-%COMP%]{\r\n    background-color: coral;\r\n    padding: 2px 16px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.model-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]:hover{\r\n    fill: black;\r\n}\r\n\r\n.close-model[_ngcontent-%COMP%]:hover{\r\n    color: #2c2e3b;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-model[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus{\r\n    border-bottom: solid 1px #ef744b;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:focus{\r\n    border-bottom: solid 1px #ef744b;\r\n}\r\n\r\n.submitButton[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 30px;\r\n    border-radius: 75px;\r\n    background-color:coral;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n    margin: 10px;\r\n    color: white;\r\n  \r\n}\r\n\r\n.submitButton[_ngcontent-%COMP%]:hover{\r\n    background-color: #ef744b;\r\n    cursor: pointer;\r\n}\r\n\r\n.submitButton[_ngcontent-%COMP%]:active{\r\n    background-color:#a9a9a9;\r\n    color: #808080;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwwREFBMEQ7SUFDMUQsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBR0EsMkNBQTJDOztBQUUzQztJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0EsMERBQTBEOztBQUUxRDtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0M7dUNBQ21DO0lBQ25DLFlBQVk7SUFDWixpREFBaUQ7SUFDakQsbUVBQW1FO0lBQ25FLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FB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QVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0EsdUJBQXVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDI1O1xyXG4gICAgLyogZGFyayBibHVlKi9cclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgLyogdG8gYXZvaWQgLiBBYm91dCBtZSAuUHJvamVjdCAuQ29udGFjdHMgaS5lIHJlbW92ZSBkb3RzKi9cclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLypwcm9wZXJseSBzcGFjZSBhcm91ZCB0aGUgbGkgaW4gdWwqL1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBuYXZpZ2F0aW9ucyB1bmRlcmxpbmUgYW5pbWF0aW9uIGVmZmVjdCAqL1xyXG5cclxuYS5uYXZpZ2F0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmEubmF2aWdhdGlvbnM6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3NDRiO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmEubmF2aWdhdGlvbnM6aG92ZXI6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEgc3Bhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VmNzQ0YjtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQW5pbWF0aW9uIGZpbmlzaCAtLS0tLS0tLS0tLS0tICovXHJcblxyXG4uaGVyby1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBtYWtpbmcgaXQgZmxleGlibGUgdG8gYW55IGRldmljZSB3aW5kb3cqL1xyXG4gICAgLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICAgaXQgd2lsbCBiZSBmbGV4aWJsZSBpbiBjb2x1bW4gLCBpdCBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgZmxleGlibGUgdG8gcm93IGFzIHdlIGhhdmVcclxuICAgIHNwZWNpZmllZCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogaXQgd2lsbCB0YWtlIGhlaWdodCBvZiBpdHMgcGFyZW50IGkuZSBzZWN0aW9uKi9cclxuICAgIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvciBwdXRpaW5nIGl0IGluIGNlbnRyZSBvZiB0aGUgc2VjdGlvbiovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjc0NGI7XHJcbn1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxufVxyXG5cclxuLnNvY2lhbHMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gICAgLyphcyB3ZSBoYXZlIGdpdmVuIG1hcmdpbi1ib3R0b206IDIwMHB4OyB0byBoZXJvLXRleHQqL1xyXG59XHJcblxyXG4uc29jaWFsIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnNvY2lhbCBzdmc6aG92ZXIge1xyXG4gICAgZmlsbDogI2VmNzQ0YjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLyogbG9nbyBhbmltYXRpb24gKi9cclxuXHJcblxyXG4vKiAubG9nbyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBsb2dvIGFuaW1hdGlvbiBmaW5pc2ggKi9cclxuXHJcbi5zdWItc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG59XHJcblxyXG4uc3ViLXNlY3Rpb24tYWx0ZXJuYXRpdmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG59XHJcblxyXG4uaGVhZHNob3Qge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3NXB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYigxOTQsIDE5MSwgMTkxKTtcclxufVxyXG5cclxuLmhlYWRzaG90LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uIHAgYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24gcCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWY3NDRiO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiKDE5NCwgMTkxLCAxOTEpO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWY3NDRiO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oYW1idXJnZXI6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5oYW1idXJnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJlM2I7XHJcbiAgICB9XHJcbiAgICB1bC5zaG93IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmUzYjtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBjb250YWN0IGRpdiBzdGFydCAqL1xyXG4jY29udGFjdHM+aDI+c3Bhbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZWY3NDRiO1xyXG59XHJcbi8qIGNvbnRhY3QgZGl2IGZpbmlzaCAqL1xyXG5cclxuLyogbW9kZWwgcG9wdXAgY3NzICovXHJcbi5tb2RlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm1vZGVsLWNvbnRlbnR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYigxOTQsIDE5MSwgMTkxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAqL1xyXG4gICAgLyogXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb250b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcblxyXG59XHJcbi8qIGFkZGluZyBhbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgYW5pbWF0aW9udG9we1xyXG5mcm9tIHt0b3A6IC0zMDBweDtvcGFjaXR5OiAwO31cclxudG97dG9wOjA7b3BhY2l0eTogMTt9XHJcbn1cclxuLm1vZGVsLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6Y29yYWw7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4ubW9kZWwtaGVhZGVyICBzcGFue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59IFxyXG4ubW9kZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuLm1vZGVsIGlucHV0LHRleHRhcmVhe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcclxuICAgIC5tb2RlbC1ib2R5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbn0gKi9cclxuLm1vZGVsLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1vZGVsLWZvb3RlciA+IGE+c3ZnOmhvdmVye1xyXG4gICAgZmlsbDogYmxhY2s7XHJcbn1cclxuLmNsb3NlLW1vZGVsOmhvdmVye1xyXG4gICAgY29sb3I6ICMyYzJlM2I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsb3NlLW1vZGVse1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZjc0NGI7XHJcbn1cclxudGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmNzQ0YjtcclxufVxyXG4uc3VibWl0QnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Y29yYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG4uc3VibWl0QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNzQ0YjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3VibWl0QnV0dG9uOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2E5YTlhOTtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qIG1vZGVsIHBvcHVwIGZpbmlzaCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\prashant_softwares\portfolioProject\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map