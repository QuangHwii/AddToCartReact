import React from "react";

const CartTab = () => {
  return (
    <div>
      <h2 className="p-5 text-white text-2xl"> Shopping cart</h2>
      <div className="p-5">
        {[0, 1, 2, 3, 4, 5].map((item, key) => {
          JSON.stringify(item, key);
        })}
        404
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white uppercase"onClick={alert("Chưa có gì đâu")}>Close</button>
        <button className="bg-amber-600 text-white uppercase">Checkout</button>
      </div>
    </div>
  );
};

export default CartTab
