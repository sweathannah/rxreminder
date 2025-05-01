import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
