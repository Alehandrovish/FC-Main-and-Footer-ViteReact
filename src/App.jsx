import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import inception from "./constans/movieInfo";

class App extends React.Component {
  state = {
    movieNames: [
      "Inception",
      "The Matrix",
      "The Shawshank Redemption",
      "Interstellar",
      "Parasite",
    ],
    inceptionMovie: inception,
    footerInfo: {
      studioAddress: "t. Some Town, st. Some Street, h. Some House,",
      email: "something@gmail.com",
      tel: "+123456789",
    },
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
