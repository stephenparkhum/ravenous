import React from 'react';
import SearchBar from './SearchBar.css';

let sortByOption = {
    'Best Match': 'best_match'
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return
        Object.keys(sortByOption).map(sortByOption => {
            let sortByOptionValue = sortByOption[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              SearchBar.renderSortByOptions()
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
          </div>
          <div className="SearchBar-submit">
            <a>Lets Go</a>
          </div>
        </div>


    };
};

export default SearchBar;
