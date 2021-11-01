import React, { CSSProperties } from "react";

interface CenterProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Center = ({
  children,
  backgroundColor = "rgb(255,255,255)",
}: CenterProps) => {
  const styles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: backgroundColor,
  };

  return <div style={styles}>{children}</div>;
};

export default Center;
