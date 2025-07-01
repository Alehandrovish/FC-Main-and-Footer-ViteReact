import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  inception = {
    title: "Inception / Початок",
    url: "https://upload.wikimedia.org/wikipedia/uk/e/e1/%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg",
    script:
      "Дом Кобб — талановитий крадій, який спеціалізується на витяганні секретів із підсвідомості людей під час сну. Його найнебезпечніше завдання — не викрасти, а внушити ідею, що загрожує йому та його команді.",
    actors: [
      { name: "Leonardo DiCaprio", id: 0 },
      { name: "Joseph Gordon-Levitt", id: 1 },
      { name: "Elliot Page", id: 2 },
      { name: "Tom Hardy", id: 3 },
      { name: "Ken Watanabe", id: 4 },
    ],
    countries: [
      { name: "США", id: 0 },
      { name: "Велика Британія", id: 1 },
    ],
    studios: [
      { name: "Warner Bros. Pictures", id: 0 },
      { name: "Legendary Pictures", id: 1 },
      { name: "Syncopy", id: 2 },
    ],
    genres: [
      { name: "наукова фантастика", id: 0 },
      { name: "трилер", id: 1 },
      { name: "бойовик", id: 2 },
    ],
    year: 2010,
  };

  footerInfo = {
    studioAddress: "t. Some Town, st. Some Street, h. Some House,",
    email: "something@gmail.com",
    tel: "+123456789",
  };

  state = {
    movieNames: [
      { title: "Inception", id: 0 },
      { title: "The Matrix", id: 1 },
      { title: "The Shawshank Redemption", id: 2 },
      { title: "Interstellar", id: 3 },
      { title: "Parasite", id: 4 },
    ],
    inceptionMovie: this.inception,
    footerInfo: this.footerInfo,
  };

  render() {
    return (
      <>
        <Header movies={this.state.movieNames}></Header>
        <Main movieInfo={this.state.inceptionMovie}></Main>
        <Footer footerInfo={this.state.footerInfo}></Footer>
      </>
    );
  }
}

export default App;
