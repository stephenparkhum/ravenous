import React from 'react';
import './SearchBar.css';
import App from '../App/App';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li  onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key=
        {sortByOptionValue}>{sortByOption}</li>
    });

    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState(this.sortBy: sortByOption);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();


    }

    render() {
        return (
        <div searchYelp = {this.searchYelp} className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input onChange={this.handleTermChange}placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange}placeholder="Where?" />
          </div>
          <div onClick={this.handleSearch} className="SearchBar-submit">
            <a>Lets Go</a>
          </div>
        </div>
    );


    }
}

export default SearchBar;
