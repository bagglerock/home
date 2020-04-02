import { useScrollThreshold } from "hooks/useScrollThreshold";
import React from "react";

export const Header: React.FC = () => {
  const { isThresholdSet } = useScrollThreshold(10);

  if (!isThresholdSet) {
    return (
      <div
        style={{
          position: "absolute",
          height: "100px",
          zIndex: 10,
          color: "white"
        }}
      >
        Absolute Header
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        height: "100px",
        zIndex: 100,
        backgroundColor: "black",
        width: "100%",
        color: "white"
      }}
    >
      Fixed Header
    </div>
  );
};
