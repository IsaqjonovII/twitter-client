import { Routes, Route } from 'react-router-dom';
import routes from './routes';


function App() {

  return (
    <div>
      <Routes>
        {routes.map(({ key, path, Component }) => <Route key={key} path={path} element={<Component />} />)}
      </Routes>
    </div>
  )
}

export default App
