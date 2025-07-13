import { Component } from "react";
import "./Main.css";

class Main extends Component {
  movieinfo = this.props.movieInfo;
  render() {
    return (
      <>
        <main className="contentWrapper">
          <section className="movieCard">
            <img
              className="moviePicture"
              src={this.movieinfo.url}
              alt={"Picture of " + this.movieinfo.title}
            />
            <section className="movieDescription">
              <h2>{this.movieinfo.title}</h2>
              <p>{this.movieinfo.script}</p>
              <h3>Загальні характеристики:</h3>
              <ul>
                <li className="DescriptionItem">
                  Актори: {this.movieinfo.actors.join(", ")}
                </li>
                <li className="DescriptionItem">
                  Країна: {this.movieinfo.countries.join(", ")}
                </li>
                <li className="DescriptionItem">
                  Студія: {this.movieinfo.studios}
                </li>
                <li className="DescriptionItem">
                  Жанр: {this.movieinfo.genres}
                </li>
                <li className="DescriptionItem">
                  Рік: {this.movieinfo.year} p.
                </li>
              </ul>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default Main;
