import './App.css';
import React, { useState } from 'react';
import Scanner from './Scanner';
import Quagga from 'quagga';
const App = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [array, setArray] = useState([]);
  const uniqueArray = [...new Set(array)];
  const handleStartButtonClick = () => {
    setShowScanner(true);
  };

  return (
    <>
      <div className='h-screen w-full bg-white relative flex overflow-hidden '>
        <aside className='h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white'>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            B
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            A
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            R
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            C
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            O
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            D
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white'>
            E
          </div>
        </aside>

        <div className='w-full h-full flex flex-col justify-between'>
          <header className='h-16 w-full flex items-center relative justify-end  space-x-10 bg-gray-800 px-12 md:px-6 lg:px-6'>
            <div className='flex flex-shrink-0 items-center space-x-4 text-white'>
              {!showScanner && (
                <button
                  className='start-camera-btn'
                  onClick={handleStartButtonClick}
                >
                  Start Scanner
                </button>
              )}
            </div>
          </header>

          {/* <!-- Main --> */}
          <main className='max-w-full h-full flex relative overflow-y-hidden'>
            {/* <!-- Container --> */}
            <div className='h-full w-full p-16 gap-10 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll'>
              {/* <!-- Container --> */}
              <div className='w-12 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400'>
                {showScanner && <Scanner setArray={setArray} array={array} />}
              </div>
              <div className='w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 p-5'>
                {uniqueArray.length !== 0 ? (
                  uniqueArray?.map((c, i) => (
                    <pre key={i}>
                      Code {i}: {c}
                    </pre>
                  ))
                ) : (
                  <pre>No Barcode Scanned</pre>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
