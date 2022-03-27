import './App.css';
import { BrowserRouter } from 'react-router-dom';
import myContext from './context';
import MyRoutes from './MyRoutes';


function App() {
  return (
    <myContext.Provider value={ 'oi' }>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </myContext.Provider>
  );
}

export default App;
