import React, { Component } from "react";
import "./Main.css";

export class Main extends Component {
  getlist(object, field = "name") {
    if (!object || object.length === 0) return "немає даних.";
    return object.map((obj) => obj[field]).join(", ") + ".";
  }
  render() {
    const movieinfo = this.props.movieInfo;

    return (
      <>
        <main className="contentWrapper">
          <section className="movieCard">
            <img
              className="moviePicture"
              src={movieinfo.url}
              alt={"Picture of " + movieinfo.title}
            />
            <section className="movieDescription">
              <h2>{movieinfo.title}</h2>
              <p>{movieinfo.script}</p>
              <h3>Загальні характеристики:</h3>
              <ul>
                <li className="DescriptionItem">
                  Актори: {this.getlist(movieinfo.actors)}
                </li>
                <li className="DescriptionItem">
                  Країна: {this.getlist(movieinfo.countries)}
                </li>
                <li className="DescriptionItem">
                  Студія: {this.getlist(movieinfo.studios)}
                </li>
                <li className="DescriptionItem">
                  {" "}
                  Жанр: {this.getlist(movieinfo.genres)}
                </li>
                <li className="DescriptionItem">Рік: {movieinfo.year} p.</li>
              </ul>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default Main;
