import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { NotFound } from './pages/not-found/NotFound';
import { SharedLayout } from './pages/sharedLayout/SharedLayout';
import { Variables } from './components/variables/Variables';
import { VariableItem } from './components/variableItem/VariableItem';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index="/search" element={<HomePage />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/variables/:id" element={<VariableItem />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
