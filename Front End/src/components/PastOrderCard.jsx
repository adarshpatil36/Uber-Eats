import React from "react";
import { useHistory } from "react-router";

export default function PastOrderCard({ selectedRestaurant }) {
  return (
    <div class="row">
      {console.log("IN render", selectedRestaurant)}
      <div class="col-lg-10 offset-lg-1">
        <div class="cart_container">
          <div class="cart_title">
            <small> Your past orders </small>
          </div>
          <div class="cart_items">
            <ul class="cart_list">
              <li class="cart_item clearfix">
                <div class="cart_item_image">
                  <img src={selectedRestaurant.restaurantPic} alt="" />
                </div>
                <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                  <div class="cart_item_name cart_info_col">
                    <div class="cart_item_title">Name</div>
                    <div class="cart_item_text">{selectedRestaurant.name}</div>
                  </div>

                  <div class="cart_item_quantity cart_info_col">
                    <div class="cart_item_title">Quantity</div>
                    <div class="cart_item_text">
                      {selectedRestaurant.quantity}
                    </div>
                  </div>
                  <div class="cart_item_price cart_info_col">
                    <div class="cart_item_title">Price</div>
                    <div class="cart_item_text">
                      ${selectedRestaurant.totalAmount}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="order_total">
            <div class="order_total_content text-md-right">
              <div class="order_total_title">Order Total:</div>
              <div class="order_total_amount">
                ${selectedRestaurant.totalAmount}
              </div>
            </div>
          </div>

          <div>
            <div className="cart_item_text">Address</div>
          </div>
          <p>{selectedRestaurant.deliveryAddress}</p>
        </div>
      </div>
    </div>
  );
}
