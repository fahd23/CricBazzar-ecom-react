import "./App.css";
import MockMan from "mockman-js";

function App() {
  return (
    <div className="App">
      <MockMan />
    </div>
  );
}

export default App;

// import "./App.css";
// import axios from "axios";
// import { useEffect } from "react";
// import Mockman from "mockman-js";

// function App() {
//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get("/api/products");
//       console.log(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <Mockman />
//     </div>
//   );
// }

// export default App;
