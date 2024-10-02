import axios from "axios";
import {   Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { Provider } from "react-redux";

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//   console.log(response.data);
// })
// .catch(error =>{
//   console.log(error.message);
// })

// async function loadData (){
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       // console.log(response.data);
//     } catch (error) {
//       console.error(error)
//     }
// }

// const data = loadData();
// console.log(data);

function App() {
  const users = "hello";

  return (
    <>
    <Provider>
    <Router>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </Provider>
      
    </>
  );
}

export default App;
