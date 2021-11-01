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
var isVisible = function (el) {
    var rectInView = el.getBoundingClientRect();
    // this decides how much of the element should be visible
    var leniency = window.innerHeight * 0.5;
    return (rectInView.top + leniency >= 0 &&
        rectInView.bottom - leniency <= window.innerHeight);
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
    var children = _a.children, navContainerRef = _a.navContainerRef, _b = _a.scrollThrottle, scrollThrottle = _b === void 0 ? 300 : _b;
    var scrollContainerRef = React.useRef(null);
    var _c = React.useState(), navContainerItems = _c[0], setNavContainerItems = _c[1];
    // To get the nav container items depending on whether the parent ref for the nav container is passed or not
    React.useEffect(function () {
        var _a;
        if (navContainerRef) {
            setNavContainerItems((_a = navContainerRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[data-to-scrollspy-id]"));
        }
        else {
            setNavContainerItems(document.querySelectorAll("[data-to-scrollspy-id]"));
        }
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
            var child = scrollParentContainer.children.item(i);
            if (!child)
                return "continue";
            var useChild = child;
            // check if the element is in the viewport
            if (isVisible(useChild)) {
                // if so, get its ID
                var changeHighlightedItemId_1 = useChild.id;
                // now loop over each element in the nav Container
                navContainerItems.forEach(function (el) {
                    // remove the "active" class from all of them
                    el.classList.remove("active-scroll-spy");
                    var attrId = el.getAttribute("data-to-scrollspy-id");
                    // and see if its ID matches the ID we got from the viewport
                    if (attrId === changeHighlightedItemId_1) {
                        el.classList.add("active-scroll-spy");
                        window.history.pushState({}, "", "#" + changeHighlightedItemId_1);
                    }
                });
            }
        };
        for (var i = 0; i < scrollParentContainer.children.length; i++) {
            _loop_1(i);
        }
    };
    window.addEventListener("scroll", throttle(checkAndUpdateActiveScrollSpy, scrollThrottle));
    return React__namespace.createElement("div", { ref: scrollContainerRef }, children);
};

exports["default"] = ScrollSpy;
//# sourceMappingURL=index.js.map
