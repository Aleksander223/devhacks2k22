import React from "react";

export default function AppCard() {
  return (
    <>
      <div className="bg-base-200 card w-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
}