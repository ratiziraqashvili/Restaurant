import React from "react";
import "./subscribe.css";
import { images } from "../constants";

export default function Subscribe() {
  return (
    <div className="sub">
      <div className="subscribe">
        <span>Newsletter</span>
        <img src={images.spoon} alt="" />
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
        <div>
          <input placeholder="Email Address" type="text" name="" id="" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
