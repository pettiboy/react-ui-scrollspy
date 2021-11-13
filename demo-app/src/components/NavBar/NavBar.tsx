import React from "react";

interface Props {}

const DummyNav = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-3 position-sticky bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          React ScrollSpy
        </a>

        {/* <!-- toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- links --> */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <a href="/" className="text-decoration-none text-white">
                Demo 1
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="/demo-2" className="text-decoration-none text-white">
                Demo 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DummyNav;
