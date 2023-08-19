import Home from './home';
import ManageData from './ManageData';
import { GlobalProvider } from './GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/manage-data' element={<ManageData />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )

}

export default App;