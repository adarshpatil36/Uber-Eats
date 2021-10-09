import React from "react";

export default function Logo({ navigateTo }) {
  return (
    <img
      src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
      alt=""
      onClick={navigateTo}
    ></img>
  );
}
