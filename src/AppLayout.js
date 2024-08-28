import "./AppLayout.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import ApppStore from "./utils/AppStore";

const AppLayout = () => {
  return (
    <Provider store={ApppStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default AppLayout;
