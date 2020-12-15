import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Admin } from "./components/admin/Admin";
import { Products } from "./components/products/products";
import { Home } from "./components/home/home";
import { NoMatch } from "./components/noMatch.tsx/noMatch";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin">admin</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/checkout">checkout</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <Switch>
              <Route exact path="/admin">
                <Admin />
              </Route>

              <Route exact path="/products">
                <Products />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </main>

          <footer></footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
