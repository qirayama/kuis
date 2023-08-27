import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Manage from './Manage';

function App() {
  return (
    <>
      <main>
        <div className="flex justify-between p-4 shadow-xl items-center">
          <span className="font-bold text-9xl">Logo</span>
          <div className="flex font-medium text-lg space-x-8">
            <span>About Me</span>
            <span>Shop</span>
            <Link className="hover:underline" to='/'>Home</Link>
            <Link className="hover:underline" to='/manage'>Manage</Link>
          </div>
        </div>
      </main>

      <div className="p-x-8 p-t-8">
        <div className="alert flex items-center bg-red-500 text-white p-4 rounded relative">
          {/* You can use an SVG or an icon here for the alert */}
          <span className="mr-2">⚠️</span>
          There was an error processing your request
        </div>
      </div>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/manage' Component={Manage} />
      </Routes>
    </>
  );
}

export default App;
