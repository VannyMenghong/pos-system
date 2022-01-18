import Home from './Pages/Home/Home';
import Customer from './Pages/Customer/Customer';
import Invoice from './Pages/Invoice/Invoice';
import YC from './Pages/YC Information/YC';
import Order from './Pages/Order Details/Order';
import Onsite from './Pages/Onsite Schedul/Onsite';
import Install from './Pages/Installation Schedul/Install';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Layout /> } >
                <Route index element={ <Home /> } />
                <Route path='Customer' element={ <Customer /> } />
                <Route path='Invoice' element={ <Invoice /> } />
                <Route path='YC' element={ <YC /> } />
                <Route path='Onsite' element={ <Onsite /> } />
                <Route path='Install' element={ <Install /> } />
                <Route path='Order' element={ <Order /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  );  
}

export default App;
