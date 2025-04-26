import "./App.css";
import { StickerList } from "./components/StickerList/StickerList.jsx";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickerList />
      </div>
    );
  }
}

export default App;
