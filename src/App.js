import './App.css';
import React, { useState } from 'react';
import Scanner from './Scanner';
import productDetails from './database/barcode.json';
const App = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [array, setArray] = useState([]);
  const uniqueArray = [...new Set(array)];

  const handleStartButtonClick = () => {
    setShowScanner(true);
  };
  const displayProduct = productDetails.filter((val) =>
    uniqueArray.includes(val.barcode)
  );

  return (
    <>
      <div className='h-screen w-full bg-white relative flex overflow-hidden '>
        <aside className='h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white'>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            S
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            T
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            O
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            R
          </div>
          <div className='h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer'>
            E
          </div>
        </aside>

        <div className='w-full h-full flex flex-col justify-between'>
          {/* <!-- Main --> */}
          <main className='max-w-full h-full flex relative overflow-y-hidden bg-gray-100'>
            {/* <!-- Container --> */}
            <div className='h-full w-full gap-14 p-2 lg:p-16 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max overflow-y-scroll'>
              {/* <!-- Container --> */}

              <div className='w-36 h-36 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow  p-3'>
                {showScanner ? (
                  <Scanner setArray={setArray} array={array} />
                ) : (
                  <section className='max-w-xl mx-auto px-4 sm:px-8 lg:px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                      <div className='w-full bg-gray-900 rounded-lg sahdow-lg p-2 lg:p-12 flex flex-col justify-center items-center'>
                        <div className='mb-8'>
                          <img
                            className='object-center object-cover rounded-full h-36 w-36'
                            src='https://static.vecteezy.com/system/resources/previews/007/399/285/non_2x/barcode-glyph-circle-gradient-background-icon-vector.jpg'
                          />
                        </div>
                        <div className='text-center mb-4'>
                          <p className='text-xl text-white font-bold mb-2'>
                            Barcode Scanner
                          </p>
                          <p className='text-base text-gray-400 font-normal'>
                            Want to scan the product details ?
                          </p>
                        </div>
                        <div
                          onClick={handleStartButtonClick}
                          className='mb-2 border-2 border-green-600 rounded-lg px-2 py-1 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200'
                        >
                          Click here
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>

              <div className='w-62 h-12 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow p-3 max-[375px]:mt-16 md:mt-0 lg:mt-0'>
                {displayProduct?.length !== 0 ? (
                  displayProduct?.map((c, i) => (
                    <div
                      key={i}
                      className='bg-white shadow overflow-hidden sm:rounded-md'
                    >
                      <ul className='divide-y divide-gray-200'>
                        <li>
                          <div className='px-4 py-4 sm:px-6'>
                            <div className='flex items-center justify-between'>
                              <p className='text-sm font-medium text-indigo-600 truncate'>
                                {c?.title}
                              </p>
                              <div className='ml-2 flex-shrink-0 flex'>
                                <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                  {c?.price}
                                </p>
                              </div>
                            </div>
                            <div className='mt-2 sm:flex sm:justify-between'>
                              <div className='sm:flex'>
                                <p className='flex items-center text-sm text-gray-500'>
                                  {c?.barcode}
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
