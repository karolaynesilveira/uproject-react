import React from 'react';
import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        newestOnTop
      />
    </React.Fragment>
  );
}

export default App;
