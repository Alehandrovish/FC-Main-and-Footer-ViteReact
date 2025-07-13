import { Component } from "react";
import "./Header.css";

class Header extends Component {
  movies = this.props.movies;
  render() {
    return (
      <>
        <header>
          <h1>Movie Info</h1>
          <nav>
            <ul className="movieList">
              {this.movies.map((movie) => {
                return (
                  <li className="movieListItem" key={movie}>
                    {movie}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
