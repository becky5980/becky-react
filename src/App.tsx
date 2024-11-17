// 应用入口

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Travel from './pages/Travel';
import Study from './pages/Study';
import routes from './router/routes';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes[0].routes.map((r) => (
          <Route key={r.name} path={r.path} element={r.component()} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
