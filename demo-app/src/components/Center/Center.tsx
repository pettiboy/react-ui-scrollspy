import React, { CSSProperties } from "react";

interface CenterProps {
  children: React.ReactNode;
  backgroundColor?: string;
  height?: string;
  id: string;
}

const Center = ({
  children,
  backgroundColor = "rgb(255,255,255)",
  id,
  height = "100vh",
}: CenterProps) => {
  const styles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <div id={id} style={styles}>
      {children}
    </div>
  );
};

export default Center;
