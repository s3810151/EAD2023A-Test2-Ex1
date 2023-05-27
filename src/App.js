import './App.css';
import Countries from './Component/Countries';
import Error from './Component/Error';
import Country from './Component/Country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Countries></Countries>}></Route>
        <Route path='/:name' element={<Country/>}></Route>
        <Route path ="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
