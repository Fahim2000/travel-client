import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
