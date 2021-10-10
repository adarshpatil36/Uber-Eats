import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { ACTION_TYPE } from "../actions/ActionTypes";
import OrderRow from "./OrderRow";
import NavBar from "./NavBar";
import { ENV } from "../config";

const OrderItem = ({
  restDishes,
  selectedRestaurant,
  clearRestaurantData,
  userData,
}) => {
  const [address, setaddress] = useState("");
  const [selectedAddress, setselectedAddress] = useState("");
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

  const placeOrder = () => {
    console.log("selectedDishes", selectedDishes);
    //   const orderData  = {
    //     "restid": selectedRestaurant.id,
    //     "deliveryAddress": "Lasyusha99",
    //     "userid":"Adaarsh253",
    //     "totalAmount": "8999999",
    //     "OrderTime": "989898999",
    //     "orderItems":[{"dishId":"434","quantity":23},{"dishId":"788","quantity":2}],
    //     "quantity":2
    // }

    //   "orderItems":[{"dishId":"434","quantity":23},{"dishId":"788","quantity":2}],
    // axios.post('http://localhost:8080/order',selectedDishes)
    clearRestaurantData();

    history.push({ pathname: "/dashboard", state: "orderPlaced" });
  };

  return (
    <>
      <NavBar />
      <div className="OrderItem">
        <div class="cart_section">
          <div class="container-fluid">
            <OrderRow
              quantityCount={quantityCount}
              selectedRestaurant={selectedRestaurant}
              selectedDishes={selectedDishes}
              totalAmount={totalAmount}
              placeOrder={placeOrder}
              address={address}
              setselectedAddress={setselectedAddress}
              selectedAddress={selectedAddress}
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
