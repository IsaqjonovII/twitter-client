import Sidebar from "./components/Sidebar";
import { GlobalStyles } from "./styles";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="app__container">
        <Sidebar>
          <Routes>
            {routes.map(({ key, path, Component }) => (
              <Route key={key} path={path} element={<Component />} />
            ))}
          </Routes>
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
