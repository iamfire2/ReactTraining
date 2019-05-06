import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value =>
                value.language === "english" ? "Submit" : "Voorleggen"
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
