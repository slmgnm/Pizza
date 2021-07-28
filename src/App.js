import Header from "./components/Header";
import Customize from "./components/Customize";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Checkout from './components/Checkout';
function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
const data = localStorage.getItem("ingredients");
if (data){

  setIngredients(JSON.parse(data));
}

  },[]);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize  ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>

          <Route path="/checkout">
            <Checkout ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
