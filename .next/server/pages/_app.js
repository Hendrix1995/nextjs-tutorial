"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Footer.js

function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: "flex",
            justifyContent: "center"
        },
        children: "copyrightⓒ 2022 All rights reserved by Hendrix1995"
    }));
};

;// CONCATENATED MODULE: external "semantic-ui-react"
const external_semantic_ui_react_namespaceObject = require("semantic-ui-react");
;// CONCATENATED MODULE: ./src/components/Gnb.js


function Gnb() {
    const activeItem = "home";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_namespaceObject.Menu, {
        inverted: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.Menu.Item, {
                name: "home",
                active: activeItem === "home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.Menu.Item, {
                name: "messages",
                active: activeItem === "messages"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.Menu.Item, {
                name: "friends",
                active: activeItem === "friends"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Top.js



function Top() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/cat.jpg",
                        alt: "logo",
                        style: {
                            width: "110px",
                            height: "200px",
                            marginRight: "10px",
                            padding: "10px"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_namespaceObject.Header, {
                        as: "h1",
                        children: "Hi!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gnb, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            width: 1000,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Top, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(477));
module.exports = __webpack_exports__;

})();