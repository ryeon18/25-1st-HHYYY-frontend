import React, { Component } from 'react';
import './search.scss';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          name="inputSerach"
          className="searchInput"
          type="search"
          placeholder="더 풍성하게 돌아온 NEW 기프트"
        />
        <button className="searchBtn">
          <i className="fas fa-search fa-3x" />
        </button>
      </div>
    );
  }
}

export default Search;
