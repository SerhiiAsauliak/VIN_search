import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { VariableItem } from './pages/VariableItem';
import { Variables } from './pages/Variables';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/variables/:id" element={<VariableItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
