// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import ProductItem from "./components/ProductItem/ProductItem";
// import Home from "./page/Home/Home";
// function App() {
//   const [product, SetProduct] = useState([]);

//   useEffect(() => {
//     const apiUrl =
//       "https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1";
//     axios.get(apiUrl).then((resp) => {
//       const allPersons = resp.data;
//       SetProduct(allPersons);
//     });
//   }, [SetProduct]);

//   return (
//     <div className="App">
//       <Home />
//       { 
//            (product.length < 0) ? console.log('pfuheprf') : product.map(item=><ProductItem key={item.id}  item={item} />)
//            }
//     </div>
//   );
// }

// export default App;