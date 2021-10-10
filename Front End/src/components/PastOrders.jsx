import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OrderRow from "./OrderRow";
import NavBar from "./NavBar";
import { ENV } from "../config";
import PastOrderCard from "./PastOrderCard";
import { useHistory } from "react-router";

const PastOrders = ({ userData }) => {
  const [orders, setOrders] = useState({});
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
        const result = data.reduce(function (r, a) {
          r[a.orderId] = r[a.orderId] || [];
          r[a.orderId].push(a);
          return r;
        }, Object.create(null));
        setOrders(result);
        console.log(result);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="postOrder">
        <div>Past Orders</div>
        <button type="button" onClick={redirectToDashboard}>
          Back to home
        </button>
      </div>
      {Object.keys(orders).length > 0 && (
        <div className="OrderItem">
          <div className="cart_section">
            <div className="container-fluid">
              {Object.keys(orders).map((item) => (
                <PastOrderCard selectedRestaurant={orders[item]} />
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
