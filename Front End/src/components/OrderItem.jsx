import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { ACTION_TYPE } from "../actions/ActionTypes";
import OrderRow from "./OrderRow";
import NavBar from "./NavBar";
import { ENV } from "../config";
import axios from "axios";

const OrderItem = ({
  restDishes,
  selectedRestaurant,
  clearRestaurantData,
  userData,
}) => {
  const [address, setaddress] = useState("");
  const [selectedAddress, setselectedAddress] = useState({
    type: "Select Address",
  });
  let history = useHistory();

  useEffect(() => {
    fetch(`${ENV.LOCAL_HOST}/address/${userData.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setaddress(data);
      });
  }, []);
  const quantityCount = restDishes.reduce(function (acc = 0, obj) {
    let quan = obj["quantity"] > 0 ? obj["quantity"] : 0;
    return acc + quan;
  }, 0);

  const selectedDishes = restDishes.filter((item) => item.quantity);

  const totalAmount = selectedDishes.reduce(function (acc = 0, obj) {
    let quan = obj["quantity"] > 0 ? obj["quantity"] : 0;
    return acc + quan * obj["price"];
  }, 0);

  const cancelOrder = () => {
    history.push("/dashboard");
  };

  const placeOrder = () => {
    console.log("selectedDishes", selectedDishes);
    const orderItems = selectedDishes.map((item) => ({
      dishId: item.id,
      quantity: item.quantity,
    }));
    const postData = {
      restid: selectedRestaurant.id,
      deliveryAddress: selectedAddress.address,
      userid: userData.id,
      totalAmount: totalAmount,
      OrderTime: new Date(),
      orderItems: orderItems,
    };

    axios
      .post(`${ENV.LOCAL_HOST}/order`, postData)
      .then(() => console.log("Data posted successfully"));
    clearRestaurantData();

    history.push({ pathname: "/dashboard", state: "orderPlaced" });
  };

  return (
    <>
      <NavBar />
      <div className="OrderItem">
        <div className="cart_section">
          <div className="container-fluid">
            <OrderRow
              quantityCount={quantityCount}
              selectedRestaurant={selectedRestaurant}
              selectedDishes={selectedDishes}
              totalAmount={totalAmount}
              placeOrder={placeOrder}
              address={address}
              setselectedAddress={setselectedAddress}
              selectedAddress={selectedAddress}
              cancelOrder={cancelOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
};

OrderItem.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  restDishes: state.selectedRestaurant.dishes || [],
  selectedRestaurant: state.selectedRestaurant || [],
  userData: state.data.userData,
});

const mapDispatchToProps = (dispatch) => ({
  clearRestaurantData: () =>
    dispatch({ type: ACTION_TYPE.CLEAR_RESTAURANT_DATA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
