import React from "react";
import "../style/Descent.css";

function DescentBackground() {
  return (
    <div className="descent-bg">
      <div data-layer="space" className="descent-space"></div>
      <div data-layer="nebulaA" className="descent-nebula-a"></div>
      <div data-layer="nebulaB" className="descent-nebula-b"></div>
      <div data-layer="starFar" className="descent-star-far"></div>
      <div data-layer="starMid" className="descent-star-mid"></div>
      <div data-layer="starNear" className="descent-star-near"></div>
      <div data-layer="sky" className="descent-sky"></div>
      <div data-layer="mFar" className="descent-mountain-far"></div>
      <div data-layer="mMid" className="descent-mountain-mid"></div>
      <div data-layer="mNear" className="descent-mountain-near"></div>
      <div data-layer="cloud1" className="descent-cloud-1"></div>
      <div data-layer="cloud2" className="descent-cloud-2"></div>
      <div data-layer="cloud3" className="descent-cloud-3"></div>
      <div data-layer="cloud4" className="descent-cloud-4"></div>
      <div data-layer="grain" className="descent-grain"></div>
    </div>
  );
}

export default DescentBackground;