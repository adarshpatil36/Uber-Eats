import React from "react";
import { useHistory } from "react-router";

export default function Logo() {
  let history = useHistory();

  return (
    <img
      src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
      alt=""
      onClick={() => history.push("/dashboard")}
    ></img>
  );
}
