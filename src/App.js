import "./Style/style.css";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import SearchBar from "./Components/SearchBar";
import PersonCard from "./Components/PersonCard";

function App() {
  let arr = [];
  for (let i = 0; i < 32; i++) arr.push("");
  return (
    <div className="bg-color allWidth">
      <TopBar />
      <SideBar></SideBar>
      <SearchBar />
      <div className="d-flex justify-content-center flex-wrap ml">
        {arr.map(() => (
          <PersonCard className="width" />
        ))}
      </div>
    </div>
  );
}

export default App;
