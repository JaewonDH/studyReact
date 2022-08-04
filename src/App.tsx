import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./view/Header";
import Study from "./view/study/Study";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/* 하위에 중첩 라우트가 있을 경우 /props/* *을 추가 해야 한다. */}
          <Route path="/" index={false} element={<Study />}></Route>
          <Route path="/study/*" element={<Study />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
