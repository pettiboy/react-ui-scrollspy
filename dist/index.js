Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// to check if the element is in viewport
var isVisible = function (el, offsetTop, offsetBottom, scrollableComponentRef) {
    var rectInView = el.getBoundingClientRect();
    // this decides how much of the element should be visible
    var leniency = scrollableComponentRef
        ? scrollableComponentRef.offsetHeight * 0.5
        : window.innerHeight * 0.5;
    var useHeight = scrollableComponentRef
        ? scrollableComponentRef.offsetHeight
        : window.innerHeight;
    return (rectInView.top + leniency + offsetTop >= 0 &&
        rectInView.bottom - leniency - offsetBottom <= useHeight);
};

var throttle = function (callback, limit) {
    var tick = false;
    return function () {
        if (!tick) {
            callback();
            tick = true;
            setTimeout(function () {
                tick = false;
            }, limit);
        }
    };
};

var ScrollSpy = function (_a) {
    var _b;
    var children = _a.children, 
    // refs
    navContainerRef = _a.navContainerRef, parentScrollContainerRef = _a.parentScrollContainerRef, 
    // throttle
    _c = _a.scrollThrottle, 
    // throttle
    scrollThrottle = _c === void 0 ? 300 : _c, 
    // callback
    onUpdateCallback = _a.onUpdateCallback, 
    // offsets
    _d = _a.offsetTop, 
    // offsets
    offsetTop = _d === void 0 ? 0 : _d, _e = _a.offsetBottom, offsetBottom = _e === void 0 ? 0 : _e, 
    // customize attributes
    _f = _a.useDataAttribute, 
    // customize attributes
    useDataAttribute = _f === void 0 ? "to-scrollspy-id" : _f, _g = _a.activeClass, activeClass = _g === void 0 ? "active-scroll-spy" : _g;
    var scrollContainerRef = React.useRef(null);
    var _h = React.useState(), navContainerItems = _h[0], setNavContainerItems = _h[1]; // prettier-ignore
    // keeps track of the Id in navcontainer which is active
    // so as to not update classLists unless it has been updated
    var prevIdTracker = React.useRef("");
    // To get the nav container items depending on whether the parent ref for the nav container is passed or not
    React.useEffect(function () {
        var _a;
        navContainerRef
            ? setNavContainerItems((_a = navContainerRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[data-" + useDataAttribute + "]"))
            : setNavContainerItems(document.querySelectorAll("[data-" + useDataAttribute + "]"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navContainerRef]);
    // fire once after nav container items are set
    React.useEffect(function () {
        checkAndUpdateActiveScrollSpy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navContainerItems]);
    var checkAndUpdateActiveScrollSpy = function () {
        var scrollParentContainer = scrollContainerRef.current;
        // if there are no children, return
        if (!(scrollParentContainer && navContainerItems))
            return;
        var _loop_1 = function (i) {
            // get child element
            var useChild = scrollParentContainer.children.item(i);
            var elementIsVisible = parentScrollContainerRef
                ? isVisible(useChild, offsetTop, offsetBottom, parentScrollContainerRef === null || parentScrollContainerRef === void 0 ? void 0 : parentScrollContainerRef.current)
                : isVisible(useChild, offsetTop, offsetBottom);
            // check if the element is in the viewport
            if (elementIsVisible) {
                // if so, get its ID
                var changeHighlightedItemId_1 = useChild.id;
                // if the element was same as the one currently active ignore it
                if (prevIdTracker.current === changeHighlightedItemId_1)
                    return { value: void 0 };
                // now loop over each element in the nav Container
                navContainerItems.forEach(function (el) {
                    var attrId = el.getAttribute("data-" + useDataAttribute);
                    // if the element contains 'active' the class remove it
                    if (el.classList.contains(activeClass)) {
                        el.classList.remove(activeClass);
                    }
                    // check if its ID matches the ID we got from the viewport
                    // also make sure it does not already contain the 'active' class
                    if (attrId === changeHighlightedItemId_1 &&
                        !el.classList.contains(activeClass)) {
                        el.classList.add(activeClass);
                        if (onUpdateCallback) {
                            onUpdateCallback(changeHighlightedItemId_1);
                        }
                        prevIdTracker.current = changeHighlightedItemId_1;
                        window.history.pushState({}, "", "#" + changeHighlightedItemId_1);
                    }
                });
                return "break";
            }
        };
        // loop over all children in scroll container
        for (var i = 0; i < scrollParentContainer.children.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
            if (state_1 === "break")
                break;
        }
    };
    // listen for scroll event
    parentScrollContainerRef
        ? // if ref for scrollable div is provided
            (_b = parentScrollContainerRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("scroll", throttle(checkAndUpdateActiveScrollSpy, scrollThrottle))
        : // else listen for scroll in window
            window.addEventListener("scroll", throttle(checkAndUpdateActiveScrollSpy, scrollThrottle));
    return React__namespace.createElement("div", { ref: scrollContainerRef }, children);
};

exports["default"] = ScrollSpy;
//# sourceMappingURL=index.js.map