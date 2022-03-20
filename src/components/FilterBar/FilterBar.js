import React from "react";
import FilterToggle from "../FilterToggle/FilterToggle";
import { categoryList ,ratingList} from '../../constants'
// import axios from "axios";
import CheckboxToggle from "../CheckboxToggle/CheckboxToggle";
import FilterPrice from "../FilterPrice/FilterPrice";
const FilterBar = ({
  selectToggleCat,
  selectedCat,
  selectedRating,
  handleSelectRaitingStar,
  cusines,
  changeChecked,
  selectedPrice,
  changePrice,
  resetFilterStar,
  resetCat,
}) => {

  // получение категории по api

  // const [categoryList, setCategoryList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://622f13593ff58f023c150843.mockapi.io/test/categoryList")
  //     .then((res) => {
  //       const categoryList = res.data;
  //       setCategoryList(categoryList);
  //     });
  // }, [setCategoryList]);


// получение звезд по api

  // const [starList, setStarList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://622f13593ff58f023c150843.mockapi.io/test/starList")
  //     .then((res) => {
  //       const starList = res.data;
  //       setStarList(starList);
  //     });
  // }, [setStarList]);





  return (
    <div className="filter_bar_wrap">
      <div className="filter_bar_categ">
        <h2>Category</h2>
        <button onClick={resetCat}>reset filter</button> <br />
        <FilterToggle
          value={selectedCat}
          selectToggle={selectToggleCat}
          options={categoryList}
        />
      </div>
      {/* { Category } */}
      {/* { Cusines } */}
      <div className="filter_bar_categ">
        <h2>Checbox</h2>
        {
          cusines.map(item=><CheckboxToggle  key={item.id} item={item} changeChecked={changeChecked} />)
        }
       
      </div>
      {/* { PRise Range } */}
      <div className="filter_bar_categ">
        <h2>Price</h2>
      <FilterPrice value={selectedPrice} changePrice={changePrice} />
      </div>
      {/* { StarRating } */}
      <div className="filter_bar_star">
        <h2>Star</h2>
        <button onClick={resetFilterStar}>reset filter</button>
        <FilterToggle
          value={selectedRating}
          selectToggle={handleSelectRaitingStar}
          options={ratingList}
        />
      </div>
    </div>
  );
};

export default FilterBar;
