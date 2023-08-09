import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import privateRoutes, { publicRoutes } from "./routes";
import { useAppSelector } from "./hooks";
import { GlobalStyles } from "./styles";

function App() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <div>
      <GlobalStyles />
      <div className="app__container">
        {token ? (
          <Sidebar>
            <Routes>
              {privateRoutes.map(({ key, path, Component }) => (
                <Route key={key} path={path} element={<Component />} />
              ))}
            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            {publicRoutes.map(({ key, path, Component }) => (
              <Route key={key} path={path} element={<Component />} />
            ))}
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
