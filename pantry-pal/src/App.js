import Pages from "./pages/Pages";
import styled from "styled-components";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Category />
      <Search />
      <Pages />
      </BrowserRouter>
    </div>
  );
}
 


export default App;