import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    //bem
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed/>

      {/* widget */}
      <Widgets/>
    </div>
  );
}

export default App;
