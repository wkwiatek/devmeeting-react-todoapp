import React    from "react";
import ReactDOM from "react-dom";
import App      from "./components/App";
import store    from "./store";
import routes   from "./routes";
import { Provider } from "react-redux";

ReactDOM.render(routes, document.getElementById("root"));
