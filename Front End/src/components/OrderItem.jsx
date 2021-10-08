import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ToastCard from "./ToastCard";
import { useHistory } from "react-router";
import { ACTION_TYPE } from "../actions/ActionTypes";
import OrderRow from "./OrderRow";
import NavBar from "./NavBar";

export const OrderItem = ({
  restDishes,
  selectedRestaurant,
  clearRestaurantData,
}) => {
  let history = useHistory();
  const quantityCount = restDishes.reduce(function (acc = 0, obj) {
    let quan = obj["quantity"] > 0 ? obj["quantity"] : 0;
    return acc + quan;
  }, 0);

  const selectedDishes = restDishes.filter((item) => item.quantity);

  const totalAmount = selectedDishes.reduce(function (acc = 0, obj) {
    let quan = obj["quantity"] > 0 ? obj["quantity"] : 0;
    return acc + quan * obj["price"];
  }, 0);

  const showToast = () => {
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
              showToast={showToast}
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
});

const mapDispatchToProps = (dispatch) => ({
  clearRestaurantData: () =>
    dispatch({ type: ACTION_TYPE.CLEAR_RESTAURANT_DATA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
