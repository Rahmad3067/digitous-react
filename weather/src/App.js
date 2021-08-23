import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import "./App.css";



export const FavoritesContext = createContext();

const App = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  return (
    <BrowserRouter>
      <FavoritesContext.Provider value={{ favoriteCities, setFavoriteCities }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
        <Footer />
      </FavoritesContext.Provider>
    </BrowserRouter>
  );
};




export default App;