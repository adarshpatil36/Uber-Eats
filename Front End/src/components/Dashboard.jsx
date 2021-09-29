import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TopFilter } from "./TopFilter";
import NavBar from "./NavBar";
import DisplayResultCard, { ResultDisplay } from "./DisplayResultCard";
import { FilterCard } from "./FilterCard";
import OfferCard from "./OfferCard";

export const Dashboard = (props) => {
  var data = [
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Dessert_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Mexican_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Burger_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Sushi_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/American_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Essentials_BrowseHome@3x.png",
    "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Chinese_BrowseHome@3x.png",
  ];

  return (
    <div>
      {/* {data.map((item) => {
        return (
          <p>
            <img src={item} alt=""></img>
          </p>
        );
      })} */}
      <NavBar />
      <TopFilter />
      <OfferCard />
      <div className="section">
        <FilterCard></FilterCard>
        <DisplayResultCard></DisplayResultCard>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
