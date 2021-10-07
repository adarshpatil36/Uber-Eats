import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OrderRow from "./OrderRow";

export const PastOrders = (props) => {
  return (
    <div>
      Past Orders
      <div className="OrderItem">
        <div class="cart_section">
          <div class="container-fluid">
            <OrderRow
              // quantityCount={quantityCount}
              // selectedRestaurant={selectedRestaurant}
              // selectedDishes={selectedDishes}
              // totalAmount={totalAmount}
              quantityCount={10}
              selectedRestaurant="weww"
              selectedDishes={[]}
              totalAmount="fdsbsb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PastOrders.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders);
