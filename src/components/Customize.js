import react from "react";

import PizzaBase from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import BaseCheese from "../assets/BaseCheese.png";
export default function Customize({ ingredients, setIngredients }) {
  const onChange = (event, name) => {
    // console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    // localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <img
            src={Olive}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={BaseCheese}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Pineapple}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Mushroom}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Basil}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Tomato}
            alt="Pizza base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img src={PizzaBase} alt="Pizza base" height="100%" width="100%" />
        </div>
      </div>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
