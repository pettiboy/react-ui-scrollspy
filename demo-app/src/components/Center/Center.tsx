import React, { CSSProperties } from "react";

interface CenterProps {
  children: React.ReactNode;
  backgroundColor?: string;
  id: string;
}

const Center = ({
  children,
  backgroundColor = "rgb(255,255,255)",
  id,
}: CenterProps) => {
  const styles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: backgroundColor,
  };

  return (
    <div id={id} style={styles}>
      {children}
    </div>
  );
};

export default Center;
