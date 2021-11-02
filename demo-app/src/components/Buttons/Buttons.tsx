import React from "react";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <a
      rel="noreferrer"
      href="https://github.com/pettiboy/react-ui-scrollspy/"
      target="_blank"
    >
      <div className={"button button-size"}>
        <div style={{ marginRight: 10, marginTop: 5 }}>
          <img src="/assets/gh-logo.png" height={30} alt="github-logo" />
        </div>
        <div>View On Github</div>
        <div style={{ marginLeft: 10 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Buttons;
