// import React from "react";
import PropTypes from "prop-types";

const BestRestaurants = ({ food, size, location }) => {
  return (
    <div>
      BestRestaurants Assignment
      <p>
        The Best restaurant in {location} sells {food} , with {size}
      </p>
    </div>
  );
};

export default BestRestaurants;

BestRestaurants.PropTypes = {
  food: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
