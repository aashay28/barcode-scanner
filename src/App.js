import './App.css';
import React, { useState } from 'react';
import Scanner from './Scanner';

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
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            B
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            A
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            R
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            C
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            O
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            D
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            E
          </div>
        </aside>

        <div className='w-full h-full flex flex-col justify-between'>
          <header className='h-16 w-full flex items-center relative justify-end  space-x-10 bg-gray-800 px-12 md:px-6 lg:px-6'>
            <div className='flex flex-shrink-0 items-center space-x-4 text-white'>
              {!showScanner && (
                <button
                  className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-2 rounded-md shadow-md focus:outline-none transform-gpu transition-all duration-300 ease-in-out'
                  onClick={handleStartButtonClick}
                >
                  Start Scanner
                </button>
              )}
            </div>
          </header>

          {/* <!-- Main --> */}
          <main className='max-w-full h-full flex relative overflow-y-hidden bg-gray-100'>
            {/* <!-- Container --> */}
            <div className='h-full w-full p-4 gap-10 lg:p-16 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll'>
              {/* <!-- Container --> */}
              <div className='w-36 h-36 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow  p-3'>
                {showScanner ? (
                  <Scanner setArray={setArray} array={array} />
                ) : (
                  <div className='ml-2 flex-shrink-0 flex'>
                    <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800'>
                      Scan to Start
                    </p>
                  </div>
                )}
              </div>

              <div className='w-62 h-12 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow p-3'>
                {uniqueArray.length !== 0 ? (
                  uniqueArray?.map((c, i) => (
                    <div
                      key={i}
                      className='bg-white shadow overflow-hidden sm:rounded-md'
                    >
                      <ul className='divide-y divide-gray-200'>
                        <li>
                          <div className='px-4 py-4 sm:px-6'>
                            <div className='flex items-center justify-between'>
                              <p className='text-sm font-medium text-indigo-600 truncate'>
                                {c}
                              </p>
                              <div className='ml-2 flex-shrink-0 flex'>
                                <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                  Scanned
                                </p>
                              </div>
                            </div>
                            <div className='mt-2 sm:flex sm:justify-between'>
                              <div className='sm:flex'>
                                <p className='flex items-center text-sm text-gray-500'>
                                  {i}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className='bg-white shadow overflow-hidden sm:rounded-md'>
                    <ul className='divide-y divide-gray-200'>
                      <li>
                        <div className='px-4 py-4 sm:px-6'>
                          <div className='flex items-center justify-between'>
                            <p className='text-sm font-medium text-indigo-600 truncate'>
                              #
                            </p>
                            <div className='ml-2 flex-shrink-0 flex'>
                              <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                                Not Scanned Yet
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
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
