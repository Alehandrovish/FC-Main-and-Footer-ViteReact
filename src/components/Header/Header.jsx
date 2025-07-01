import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        <header>
          <h1>Movie Info</h1>
          <nav>
            <ul className="movieList">
              {movies.map((movie) => {
                return (
                  <li className="movieListItem" key={movie.id}>
                    {movie.title}
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
