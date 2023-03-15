import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Men  from "./components/Men"
import Women from "./components/Women";
import Kids from "./components/Kids";
//import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/men">
          <Men />

        </Route>
        <Route path="/women">
          <Women />

        </Route>
        <Route path="/kids">
          <Kids />

        {/* </Route>
        <Route path="/login">
          <Login /> */}

        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
