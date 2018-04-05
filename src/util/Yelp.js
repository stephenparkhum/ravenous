const apiKey = 'gI9py-b_0TmRBCNZgFBUY_E5e3hHhPUg7D9iGbf_TSlSSkEobrjuAY7XTxfMaq5QRYtcphEAI2tT2KPIpnYJ9TZ5ljTeUA9ssPnsthMrFWoSp0qJjiX5s6PmkDnGWnYx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => (
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                ))
            }
        });
    }
};
