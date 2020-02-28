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
      signedInUsername: null
    };
  }

  componentDidMount() {
    // if (this.state.signedInUsername) {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          console.log(authResult.user);
          console.log(`logged in username: ${authResult.user.displayName}`);
          this.setState({
            ...this.state,
            signedInUsername: authResult.user.displayName
          });
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
    // }
  }

  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
        <br />
        <AddTodo signedInUsername={this.state.signedInUsername} />
        <VisibleTodoList filter={params.filter || "SHOW_ALL"} />
        <Footer />
      </div>
    );
  }
}

export default App;
