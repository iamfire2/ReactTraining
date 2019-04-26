import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "390486224557-853u366v4pao19i98ufoj6cj1mf8q07a.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  componentDidUpdate() {}

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
