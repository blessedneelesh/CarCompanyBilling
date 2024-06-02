import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components";
import Routes from "./routes";
import DataProvider from "./provider/DataProvider";

function App() {
  return (
    <div>
      <DataProvider>
        <Routes />
      </DataProvider>
    </div>
  );
}

export default App;
