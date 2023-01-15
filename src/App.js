import "./index.css";
import SemesterList from "./components/SemesterList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="page-content">
        <SemesterList />
      </div>
    </div>
  );
}

export default App;
