import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

function Loader() {
  return (
    <div className="absolute min-w-full z-50 min-h-svh top-0 flex items-center justify-center">
      <div className="loader">
        <div className="loader__icon">
          <RefreshIcon style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
