import React, { useState, useEffect } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import List from "../../components/List/List";
import SerchBar from "../../components/SerchBar/SerchBar";
import axios from "axios";
import EmptyList from "../../components/EmptyList/EmptyList";
const Home = () => {
  const [selectedCat, setSelectCat] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [inputSearch, setInputSearch] = useState("");
  // остновной массив неизменній
  const [product, setProduct] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [resultFound, setResultFound] = useState(true);
  const [cusines, setCusines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chines",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const resetFilterStar = () => {
    setSelectedRating(null);
  };
  const resetCat = () => {
    setSelectCat(null);
  };

  useEffect(() => {
    axios
      .get("https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1")
      .then((res) => {
        const productList = res.data;
        setProduct(productList);
        setFilterList(productList);
      });
  }, [setProduct]);

  const handelChangeChecked = (id) => {
    const cusinesStateList = cusines;
    const chengeChecedCusines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCusines(chengeChecedCusines);
  };

  const handleSelectCat = (e, value) => (!value ? null : setSelectCat(value));

  const handleSelectRaitingStar = (e, value) =>
    !value ? null : setSelectedRating(value);

  const handelChangedPrice = (e, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = product;
    // raiting filter
    // console.log('updatedList1',updatedList)
    // console.log('selectedCat1',selectedCat)

    // фильтер по кнопкам звезд
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    // фильтер по категориям

    if (selectedCat) {
      updatedList = updatedList.filter((item) => item.category === selectedCat);
    }

    // cusine filter  фильтер по чекбоксам

    const cusineCheced = cusines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cusineCheced.length) {
      updatedList = updatedList.filter((item) =>
        cusineCheced.includes(item.cusines)
      );
    }
    // фильтер по цене

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // фильтер по полю инпут

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }
    setFilterList(updatedList);
    !updatedList.length ? setResultFound(false) : setResultFound(true)
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCat, cusines, selectedPrice, inputSearch]);


  return (
    <div className="home">
      <SerchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_wrap">
        <div className="home_panel_wrap">
          <FilterBar
            changeChecked={handelChangeChecked}
            cusines={cusines}
            selectToggleCat={handleSelectCat}
            selectedCat={selectedCat}
            selectedRating={selectedRating}
            handleSelectRaitingStar={handleSelectRaitingStar}
            selectedPrice={selectedPrice}
            changePrice={handelChangedPrice}
            resetFilterStar={resetFilterStar}
            resetCat={resetCat}
          />
        </div>
        <div className="home_list_wrap">
          {  resultFound ?  filterList.map((item) => <List item={item} key={item.id} /> ) : <EmptyList />}
        </div>
      </div>
    </div>
  );
};

export default Home;
