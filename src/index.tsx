import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "view/study/reduex/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(reducers, composeWithDevTools()); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//Provider 태그 용시 하위 태그에 있는 모든 컴포넌트에서 store에 적용을 받을 수 있다 .
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
