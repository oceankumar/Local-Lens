import { useState } from "react";
import FilterChips from "../components/FilterChips";
import HeroBanner from "../components/HeroBanner";
import MovieGrid from "../components/MovieGrid";
import movies from "../data/movies";
import "./MoviesPage.css";

const filters = ["All Languages", "Hindi", "English", "Punjabi", "Malayalam"];

function MoviesPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const featuredMovie = movies.find((movie) => movie.featured) ?? movies[2];

  const filteredMovies =
    activeFilter === "All Languages"
      ? movies
      : movies.filter((movie) => movie.language === activeFilter);

  return (
    <div className="movies-page">
      <HeroBanner movie={featuredMovie} />

      <section className="movies-listing-section">
        <div className="movies-listing-container">
          <div className="movies-listing-header">
            <div>
              <h2 className="movies-section-title">Only in Theatres</h2>
              <p className="movies-section-subtitle">
                Fresh picks for your next big-screen plan.
              </p>
            </div>

            <FilterChips
              filters={filters}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="movies-grid-wrap">
            <MovieGrid movies={filteredMovies} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoviesPage;
