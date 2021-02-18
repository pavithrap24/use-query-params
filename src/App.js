import "./App.css";
import useQueryParams, { useQueryParam } from "./useQueryParams";

function App() {
  const results = useQueryParams();
  const result = useQueryParam("name");
  console.log("results ", results);
  console.log("result ", result);
  return (
    <div className="App">
      <h1>See browser console</h1>
    </div>
  );
}

export default App;
