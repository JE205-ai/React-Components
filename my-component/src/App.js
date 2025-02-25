import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      {/* posts and side menu container*/}
      {/* posts container */}
      <div style={{display: "flex", justifyContent: "center"}}>

      <div style={{display: "flex", width: "60%"}}>

      <div style={{ width: "70%" }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
 {/* side menu container */}

    <div style={{width: "30%"}}>
      <SideMenu />
    </div>
      </div>
      {/* posts and side menu container*/}
      {/* posts container */}
      </div>
    
    </div>
  );
}

export default App;
