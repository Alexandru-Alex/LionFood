import React from "react";
function Restaurant({ restaurant }) {
  return (
    <li>
      <a
        className="city-tile"
        href={"/oras/" + restaurant.oras + "/" + restaurant.name}
      >
        <figure>
          <picture>
            <div
              className="city-picture b-lazy b-loaded b-loaded"
              style={{
                backgroundImage: restaurant.background,
              }}
            ></div>
          </picture>
          <figcaption className="city-info">
            <span className="city-name">{restaurant.name}</span>
          </figcaption>
        </figure>
      </a>
    </li>
  );
}

export default Restaurant;
