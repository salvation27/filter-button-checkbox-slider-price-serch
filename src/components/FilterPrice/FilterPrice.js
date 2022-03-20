import React from "react";
import Slider from "@mui/material/Slider";
const FilterPrice = ({value,changePrice}) => {
  return (
    <div>
      <Slider
      value={value}
      onChange={changePrice}
      min={1000}
      max={5000}
     valueLabelDisplay="on" />
    </div>
  );
};

export default FilterPrice;
