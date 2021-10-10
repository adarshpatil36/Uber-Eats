import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OrderRow from "./OrderRow";
import NavBar from "./NavBar";
import { ENV } from "../config";
import PastOrderCard from "./PastOrderCard";
import { useHistory } from "react-router";

const PastOrders = ({ userData }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  let history = useHistory();
  const redirectToDashboard = () => {
    history.push("/dashboard");
  };
  const getOrders = () => {
    console.log(userData);
    fetch(`${ENV.LOCAL_HOST}/order/${userData.id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="postOrder">
        Past Orders
        <button type="button" onClick={redirectToDashboard}>
          Back to home
        </button>
      </div>
      {orders.length > 0 && (
        <div className="OrderItem">
          <div class="cart_section">
            <div class="container-fluid">
              {orders.map((item) => (
                <PastOrderCard selectedRestaurant={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PastOrders.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  userData: state.data.userData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders);
