import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Index } from './pages/Index';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemDetail/ItemListContainer';
import Error404 from './pages/Error404';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Index/>}/>
        <Route exact path='/inicio' element = {<Index/>}/>
        <Route exact path='/tienda' element = {<ItemListContainer/>}/>
        <Route path='/tienda/:productId' element = {<ItemDetailContainer/>}/>
        <Route path='*' element = {<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
