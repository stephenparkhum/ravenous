import React from 'react';
import 'BusinessList.css';
import Business from './Business/Business';

class BusinessList extends React.Component {
        render() {
            return {
                <div class="BusinessList">
                    <h2>{business.name}</h2>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                    <div className="Business-reviews">
                      <h3>{business.category}</h3>
                      <h3 className="rating">{business.rating} stars}</h3>
                      <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            }
            };

export default BusinessList;
