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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"rectangle": "rectangle-1SVS6NPqU0yRdzCNeJbvWI",
	"topbar-bg": "topbar-bg-31sIoHSemwpfhBx1nn74Ko",
	"oktopus-logo": "oktopus-logo-23zJkGHTG34LKO6cjlqdBP",
	"pagecenter-1": "pagecenter-1-KPFDPGNNMG_a9VaIDFh3b",
	"text-style-1": "text-style-1-1v8bI924aVg5sUm-VjW8SE",
	"your-website-is-about": "your-website-is-about-2a7L-8UYIzWm8XiklfRAJL",
	"oc_login_inputs": "oc_login_inputs-XOr69NEO-BOnj0HLehxu8",
	"oc_login_socials": "oc_login_socials-3JEchWxSBu36WOOKONtZkv",
	"face_book": "face_book-_RgoGMBv16wZrrUuSiRKH",
	"linked_in": "linked_in-2uZ9fpmnoZRpy1a42uaSK9",
	"oc_login_button": "oc_login_button-2KJ1pkj65vC1cPP7thEd8r",
	"oc_login_button_text": "oc_login_button_text-11zS5wZGpDTwkPQLQ_P0Fb",
	"oc_login_forgot": "oc_login_forgot-1P7IiMPHdmhgvTbTXapD4C",
	"combined-shape": "combined-shape-3zm9vHew9_9v8Djid6LKyu",
	"screen-shot-2017-02-11-at-7-08-42-pm": "screen-shot-2017-02-11-at-7-08-42-pm-2oRdDAFTfoWPfI4-f93GJ5",
	"line": "line-1NEDOOpc80eC_2dp2INbb"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(3);

var _chalk2 = _interopRequireDefault(_chalk);

var _env = __webpack_require__(13);

var _console = __webpack_require__(12);

var _server = __webpack_require__(10);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Host and port -- from the environment


// Import console messages
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library
const HOST = (0, _env.getHost)();

// Extend the server base


/* Local */

// Local environment

const PORT = (0, _env.getPort)();

// Get manifest values
const css = '/assets/css/style.css';
const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the server
_server2.default.then(({ router, app }) => {
  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  app.listen({ host: HOST, port: PORT }, () => {
    (0, _console.logServerStarted)({
      type: 'server-side rendering',
      host: HOST,
      port: PORT,
      chalk: _chalk2.default.bgYellow.black
    });
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(48);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */

const APOLLO = exports.APOLLO = {
  uri: 'https://api.graph.cool/simple/v1/cinomw2r1018601o42x5z69uc'
};

const BUNDLE_ANALYZER = exports.BUNDLE_ANALYZER = {
  openAnalyzer: false
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

__webpack_require__(35);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(49);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(36);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(4);

var _koaSend = __webpack_require__(39);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(37);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(38);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(47);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(51);

var _reactHelmet = __webpack_require__(5);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apollo = __webpack_require__(11);

var _redux = __webpack_require__(14);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(16);

var _ssr2 = _interopRequireDefault(_ssr);

var _app = __webpack_require__(17);

var _app2 = _interopRequireDefault(_app);

var _paths = __webpack_require__(8);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Static file middleware


// App entry point


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Initial view to send back HTML render


/* Local */

// Grab the shared Apollo Client


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Create a new server Apollo client for this request
    const client = (0, _apollo.serverClient)();

    // Create a new Redux store for this request
    const store = (0, _redux2.default)(client);

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: store, client: client },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Full React HTML render
    const html = _server2.default.renderToString(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  You can add your
      // own custom logic here, if you want to redirect to a permanent
      // 404 route or set a different response on `ctx.body`
      ctx.status = routeContext.status;
    }

    // Render the view with our injected React data.  We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    ctx.body = `<!DOCTYPE html>\n${_server2.default.renderToStaticMarkup(_react2.default.createElement(_ssr2.default, {
      html: html,
      head: _reactHelmet2.default.rewind(),
      window: {
        webpackManifest: chunkManifest,
        __STATE__: store.getState()
      },
      css: css,
      scripts: scripts }))}`;
  };
}

// Run the server

exports.default = async function server() {
  return {
    router: new _koaRouter2.default().
    // Set-up a general purpose /ping route to check the server is alive
    get('/ping', async ctx => {
      ctx.body = 'pong';
    })

    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    .get('/favicon.ico', async ctx => {
      ctx.res.statusCode = 204;
    }),
    app: new _koa2.default()

    // Preliminary security for HTTP headers
    .use((0, _koaHelmet2.default)())

    // Error wrapper.  If an error manages to slip through the middleware
    // chain, it will be caught and logged back here
    .use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        // TODO we've used rudimentary console logging here.  In your own
        // app, I'd recommend you implement third-party logging so you can
        // capture errors properly
        console.log('Error', e.message);
        ctx.body = 'There was an error. Please try again later.';
      }
    })

    // It's useful to see how long a request takes to respond.  Add the
    // timing to a HTTP Response header
    .use(async (ctx, next) => {
      const start = _microseconds2.default.now();
      await next();
      const end = _microseconds2.default.parse(_microseconds2.default.since(start));
      const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
      ctx.set('Response-Time', `${total / 1e3}ms`);
    })
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserClient = browserClient;
exports.serverClient = serverClient;

var _reactApollo = __webpack_require__(4);

var _project = __webpack_require__(9);

// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.
// ----------------------
// IMPORTS

// Apollo client library
const networkInterface = (0, _reactApollo.createNetworkInterface)({
  uri: _project.APOLLO.uri
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults


// Custom configuration/settings
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
    networkInterface
  }, opt));
}

// Creates a new browser client
function browserClient() {
  return createClient();
}

// Creates a new server-side client
function serverClient() {
  return createClient({
    ssrMode: true
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(33);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(3);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(34);

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Chalk library, to add colour to our console logs
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);

  const localURL = `http://${opt.host}:${opt.port}`;
  message += `- ${_chalk2.default.bold('Local:           ')} ${localURL}`;

  try {
    const url = `http://${_ip2.default.address()}:${opt.port}`;
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = getHost;
exports.getServerHost = getServerHost;
exports.getBrowserHost = getBrowserHost;
exports.getPort = getPort;
exports.getBrowserPort = getBrowserPort;
exports.getServerPort = getServerPort;
exports.getURL = getURL;
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
const defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
const defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
const isProduction = "development" === 'production';
const isServer = "boolean" !== 'undefined' && true;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return `${isServer ? 'SERVER' : 'BROWSER'}_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get browser stub
function getBrowserStub() {
  return `BROWSER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get server stub
function getServerStub() {
  return `SERVER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[`${getStub()}_HOST`] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[`${getServerStub()}_HOST`] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[`${getBrowserStub()}_HOST`] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  const port = process.env[`${getStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  const port = process.env[`${getBrowserStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  const port = process.env[`${getServerStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  return `http://${getHost()}:${getPort()}`;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS

/* NPM */


exports.default = createNewStore;

var _redux = __webpack_require__(52);

var _reduxThunk = __webpack_require__(53);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(54);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Local */

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// All reducers, in one array
const reducers = [/* TODO add custom reducers */];

// Helper function that 'unwinds' the { reducerKey {state, reducer} } format
// from each imported reducer, and either returns the `reducer` function (if
// true) or the `state`, as an Immutable collection or the default state
function unwind(reducer = true) {
  // Get the combined reducers `reducer` or `state` object
  const r = Object.assign({}, ...[].concat(...reducers.map(arr => Object.keys(arr).map(key => ({
    [key]: arr[key][reducer ? 'reducer' : 'state']
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // We're looking for the state -- so let's map it
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: hasState && (0, _seamlessImmutable2.default)(window.__STATE__[key]) || r[key]
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
let Status = class Status extends _react2.default.PureComponent {

  render() {
    const { code, children } = this.props;
    return _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      } });
  }
};

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

Status.propTypes = {
  code: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
};
Status.defaultProps = {
  children: null
};
let NotFound = exports.NotFound = class NotFound extends _react2.default.PureComponent {

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      Status,
      { code: 404 },
      children
    );
  }
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.

NotFound.propTypes = {
  children: _propTypes2.default.node
};
NotFound.defaultProps = {
  children: null
};
let Redirect = exports.Redirect = class Redirect extends _react2.default.PureComponent {

  render() {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return _react2.default.createElement(
      Status,
      { code: code },
      _react2.default.createElement(_reactRouterDom.Redirect, { to: to, from: from, push: push })
    );
  }
};
Redirect.propTypes = {
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  from: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  permanent: _propTypes2.default.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, html, scripts, window, css }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement('div', {
      id: 'main',
      dangerouslySetInnerHTML: { __html: html } }),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  html: _propTypes2.default.string.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired
};

exports.default = Html;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = __webpack_require__(6);

var _login = __webpack_require__(19);

var _login2 = _interopRequireDefault(_login);

var _MuiThemeProvider = __webpack_require__(43);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(46);

var _theme2 = _interopRequireDefault(_theme);

var _palette = __webpack_require__(45);

var _palette2 = _interopRequireDefault(_palette);

var _colors = __webpack_require__(44);

var _routing = __webpack_require__(15);

var _oktopus = __webpack_require__(22);

var _oktopus2 = _interopRequireDefault(_oktopus);

__webpack_require__(21);

var _styles = __webpack_require__(20);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// CSS


/* Local */

// NotFound 404 handler for unknown routes


// Material Design for React


// Routing
// ----------------------
// IMPORTS

/* NPM */

// React
const Home = () => _react2.default.createElement(
  'div',
  { className: _styles2.default.logo },
  _react2.default.createElement('img', { src: _oktopus2.default, alt: 'Oktopus' })
);

// Create a route that will be displayed when the code isn't found


// Images


// Pages
const WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Unknown route - the 404 handler was triggered!'
  )
);

_palette.light.input.bottomLine = '#FF825C';
_palette.light.input.disabled = '#ff4000';
_palette.light.text.primary = '#FF825C';

const muiTheme = (0, _theme2.default)({
  palette: (0, _palette2.default)({
    primary: _colors.orange,
    accent: _colors.deepOrange,
    error: _colors.red,
    type: 'light'
  })
});

exports.default = () => _react2.default.createElement(
  'div',
  { className: _styles2.default.container },
  _react2.default.createElement(_reactHelmet2.default, {
    title: 'Oktopus',
    meta: [{
      name: 'description',
      content: 'Oktopus front-end'
    }] }),
  _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/page/login' },
        'Login'
      )
    )
  ),
  _react2.default.createElement(
    _MuiThemeProvider2.default,
    { theme: muiTheme },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/page/login', component: _login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: WhenNotFound })
    )
  )
);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(42);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(40);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(41);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _screenShot20170211At70842Pm = __webpack_require__(30);

var _screenShot20170211At70842Pm2 = _interopRequireDefault(_screenShot20170211At70842Pm);

var _screenShot20170211At70842Pm2x = __webpack_require__(31);

var _screenShot20170211At70842Pm2x2 = _interopRequireDefault(_screenShot20170211At70842Pm2x);

var _screenShot20170211At70842Pm3x = __webpack_require__(32);

var _screenShot20170211At70842Pm3x2 = _interopRequireDefault(_screenShot20170211At70842Pm3x);

var _faceBook = __webpack_require__(24);

var _faceBook2 = _interopRequireDefault(_faceBook);

var _linkedIn = __webpack_require__(25);

var _linkedIn2 = _interopRequireDefault(_linkedIn);

var _login = __webpack_require__(26);

var _login2 = _interopRequireDefault(_login);

var _login2x = __webpack_require__(27);

var _login2x2 = _interopRequireDefault(_login2x);

var _login3x = __webpack_require__(28);

var _login3x2 = _interopRequireDefault(_login3x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoginText = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement('img', {
    src: _login2.default,
    srcSet: `${_login2.default} 1x, ${_login2x2.default} 2x, ${_login3x2.default} 3x`,
    className: _styles2.default.oc_login_button_text,
    alt: 'Login'
  })
);

let Box = class Box extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default['combined-shape'] },
      _react2.default.createElement('img', {
        src: _screenShot20170211At70842Pm2.default,
        srcSet: `${_screenShot20170211At70842Pm2.default} 1x, ${_screenShot20170211At70842Pm2x2.default} 2x, ${_screenShot20170211At70842Pm3x2.default} 3x`,
        className: _styles2.default['screen-shot-2017-02-11-at-7-08-42-pm'],
        alt: 'Oktopus'
      }),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.oc_login_inputs },
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Email Field'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Password Field',
          type: 'password'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.oc_login_socials },
        _react2.default.createElement('img', {
          src: _faceBook2.default,
          className: _styles2.default.face_book,
          alt: 'Facebook' }),
        _react2.default.createElement('img', {
          src: _linkedIn2.default,
          className: _styles2.default.linked_in,
          alt: 'Linked In' })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.oc_login_inputs },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              className: _styles2.default.oc_login_button
            },
            _react2.default.createElement(LoginText, null)
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              className: _styles2.default.oc_login_forgot
            },
            'Forgot?'
          )
        )
      )
    );
  }
};


Box.propTypes = {};

exports.default = Box;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _box = __webpack_require__(18);

var _box2 = _interopRequireDefault(_box);

var _oktopusLogo = __webpack_require__(29);

var _oktopusLogo2 = _interopRequireDefault(_oktopusLogo);

var _pagecenter3x = __webpack_require__(23);

var _pagecenter3x2 = _interopRequireDefault(_pagecenter3x);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Login = class Login extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.rectangle },
      _react2.default.createElement(
        'div',
        { className: _styles2.default['topbar-bg'] },
        _react2.default.createElement('img', { src: _oktopusLogo2.default, alt: 'Oktopus', className: _styles2.default['oktopus-logo'] }),
        _react2.default.createElement('img', { src: _pagecenter3x2.default, alt: 'Signup or login', className: _styles2.default['pagecenter-1'] })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default['your-website-is-about'] },
        'Your website is about to be reborn.'
      ),
      _react2.default.createElement(_box2.default, null)
    );
  }
};


Login.propTypes = {
  match: _propTypes2.default.shape({
    params: _propTypes2.default.object
  }).isRequired
};

exports.default = Login;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"container": "container-bu6XUrADKt6uFd1dkTVxB",
	"logo": "logo-3rAg6AIwaAMIhQtHncqlRG"
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/oktopus.9a2840858bb923b6ab1bac036fa9c340.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/1-pagecenter@3x.bfe1bfcd0d6df4c0e4b359bd19fe0225.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/face-book.16a2623d4090227f26e3f60032ae1fc6.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/linked-in.bbb5d934e245bd3fbb247b80ccf85e09.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/login.e11406f2bc4d4dd99162c040f0289585.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/login@2x.7304e75a4e2f244ee1af77afacaab734.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/login@3x.f09969f2bcb3483f075965c5f83be981.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/oktopus-logo.bb9c4302e6bbdcf5cefe103d30462db5.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/screen-shot-2017-02-11-at-7-08-42-pm.2bdb54b436e19b061d22af608b99cd08.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/screen-shot-2017-02-11-at-7-08-42-pm@2x.954b7fb8297a283d68ce89ccfea784e6.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/screen-shot-2017-02-11-at-7-08-42-pm@3x.148c208bd6d8c6a19d9978758ec2cd4d.png";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/palette");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/theme");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map