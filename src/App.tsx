import Sidebar from "./components/Sidebar";
import { GlobalStyles } from "./styles";
import StyledHome from "./pages/Home/style";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <GlobalStyles />
      <StyledHome>
        <Sidebar />
        <div className="feed">
          <Routes>
            {routes.map(({ key, path, Component }) => (
              <Route key={key} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </StyledHome>
    </div>
  );
}

export default App;
