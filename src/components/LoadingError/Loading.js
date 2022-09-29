import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
