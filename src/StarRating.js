import React from 'react';

function StarRating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const starColor = i <= rating ? 'gold' : 'gray';
        stars.push(
            <svg
                key={i}
                height="25"
                width="23"
                className="star rating"
                data-rating="1"
                fill={starColor}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 23"
            >
                <polygon
                    strokeWidth="0"
                    points="9.9, 1.1, 3.3, 21.1, 19.8, 8.6, 0, 8.6, 16.6, 21.1"
                />
            </svg>
        );
    }

    return <div>{stars}</div>;
}

export default StarRating;
