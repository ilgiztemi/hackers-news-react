import { SpinnerInfinity } from "spinners-react";
import React from "react";

const Loading = () => {
  return (
    <div className="spinner">
      <SpinnerInfinity
        size={90}
        thickness={136}
        speed={100}
        color="rgba(57, 73, 172, 1)"
        secondaryColor="rgba(57, 172, 153, 0.79)"
      />
    </div>
  );
};

export default Loading;
