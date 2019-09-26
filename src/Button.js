import React from "react";

import "./Button.css";

export default function Button() {
  return (
    <button class="push--flat" onClick={() => this.props.onClick}></button>
  );
}
