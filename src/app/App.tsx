import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';

const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
