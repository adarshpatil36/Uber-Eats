import React from "react";

export default function OrderRow({
  quantityCount,
  selectedRestaurant,
  selectedDishes,
  totalAmount,
  showToast,
}) {
  return (
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="cart_container">
          <div class="cart_title">
            Your Items<small> ({quantityCount} item in your cart) </small>
          </div>
          <div class="cart_items">
            <ul class="cart_list">
              <li class="cart_item clearfix">
                <div class="cart_item_image">
                  <img src={selectedRestaurant.url} alt="" />
                </div>
                <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                  <div class="cart_item_name cart_info_col">
                    <div class="cart_item_title">Name</div>
                    {selectedDishes.map((item) => (
                      <div class="cart_item_text">{item.name}</div>
                    ))}
                  </div>

                  <div class="cart_item_quantity cart_info_col">
                    <div class="cart_item_title">Quantity</div>
                    {selectedDishes.map((item) => (
                      <div class="cart_item_text">{item.quantity}</div>
                    ))}
                  </div>
                  <div class="cart_item_price cart_info_col">
                    <div class="cart_item_title">Price</div>
                    {selectedDishes.map((item) => (
                      <div class="cart_item_text">${item.price}</div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="order_total">
            <div class="order_total_content text-md-right">
              <div class="order_total_title">Order Total:</div>
              <div class="order_total_amount">${totalAmount}</div>
            </div>
          </div>
          <div class="cart_buttons">
            <button
              type="button"
              class="button cart_button_checkout"
              onClick={showToast}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
