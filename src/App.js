import Home from './Pages/Home/Home';
import Customers from './Pages/Customer/Customers';
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
                <Route path='Customers' element={ <Customers /> } />
                <Route path='Invoices' element={ <Invoice /> } />
                <Route path='YC_Information' element={ <YC /> } />
                <Route path='OM_Schedul' element={ <Onsite /> } />
                <Route path='Installation_Schedul' element={ <Install /> } />
                <Route path='Orders' element={ <Order /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  );  
}

export default App;
