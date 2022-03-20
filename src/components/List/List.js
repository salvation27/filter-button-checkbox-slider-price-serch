import React from "react";

const List = ({ item }) => {
  return (
    <div className="list_item">
    <div className="list_item_title_wrap">
       <div className="list_item_title"><h2>{item.title}</h2></div>
       <div className="list_item_title"><h2>{item.rating}star</h2></div>
    </div>
      <div className="list_item_price"><h3>{item.price}ua.</h3></div>
      <div className="list_item_categ"><h3>{item.category}</h3></div>
      <div className="list_item_cuisine"><h3>{item.cusines}</h3></div>
    </div>
  );
};

export default List;
