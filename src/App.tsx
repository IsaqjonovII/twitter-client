import Sidebar from "./components/Sidebar";
import { GlobalStyles } from "./styles";
import { Routes, Route } from "react-router-dom";
import privateRoutes, { publicRoutes } from "./routes";
import { useAppSelector } from "./hooks";

function App() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <GlobalStyles />
      <div className="app__container">
        {user ? (
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
