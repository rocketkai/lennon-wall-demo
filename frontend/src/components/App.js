import * as firebaseui from "firebaseui";
import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import firebase from "../firebase";
import Footer from "./Footer";

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedInUser: null
    };
  }

  componentDidMount() {
    if (!this.state.signedInUser) {
      const uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: authResult => {
            this.setState({
              ...this.state,
              signedInUser: authResult.user.displayName
            });
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
      };
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }

  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
        <br />
        <div>
          <AddTodo signedInUser={this.state.signedInUser} />
          <VisibleTodoList filter={params.filter || "SHOW_ALL"} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
