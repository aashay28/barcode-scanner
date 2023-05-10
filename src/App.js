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
      <div className='h-screen w-full bg-white relative flex  overflow-hidden'>
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

        <div className='w-full h-full flex flex-col  bg-gray-100 overflow-hidden '>
          {/* <!-- Main --> */}
          <main className='max-w-full h-full flex flex-col md:flex-row lg:flex-row relative overflow-hidden mt-14'>
            {/* <!-- Container --> */}

            {/* <!-- Container --> */}

            <div className='rounded-lg flex-shrink-0 flex-grow  p-2 justify-center items-center  w-80 lg:w-10'>
              {showScanner ? (
                <Scanner setArray={setArray} array={array} />
              ) : (
                <section className='max-w-xl px-4 lg:px-4 justify-center'>
                  <div className='w-full bg-gray-900 rounded-lg sahdow-lg p-2 lg:p-12 flex flex-col justify-center items-center'>
                    <div className='mb-8'>
                      <img
                        alt=''
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
                </section>
              )}
            </div>

            <div className='w-62 h-12 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow p-3 max-[375px]:mt-16 md:mt-0 lg:mt-0'>
              <section className='container px-4 mx-auto'>
                <div className='flex flex-col'>
                  <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                      <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                          <thead className='bg-gray-50 dark:bg-gray-800'>
                            <tr>
                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                              >
                                Product Details
                              </th>
                              <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                              >
                                <div className='flex items-center gap-x-3'>
                                  <button className='flex items-center gap-x-2'>
                                    $<span>Price</span>
                                  </button>
                                </div>
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                              >
                                Count
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                              >
                                Rating
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
                              >
                                Categories
                              </th>
                            </tr>
                          </thead>
                          <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                            {displayProduct?.map((product) => (
                              <tr key={product.id}>
                                {/* Customer */}
                                <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                  <div className='flex items-center gap-x-2'>
                                    <img
                                      className='object-cover w-8 h-8 rounded-full'
                                      src={product?.image}
                                      alt=''
                                    />
                                    <div>
                                      <h2 className='text-sm font-medium text-gray-800 dark:text-white '>
                                        {product?.title}
                                      </h2>
                                      <p className='text-xs font-normal text-gray-600 dark:text-gray-400'>
                                        {product?.barcode}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                {/* Price */}
                                <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>
                                  <div className='inline-flex items-center gap-x-3'>
                                    <span>$ {product?.price}</span>
                                  </div>
                                </td>
                                {/* Date */}
                                <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                  {product?.rating?.count}
                                </td>
                                {/* Rating */}
                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                  <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800'>
                                    <h2 className='text-sm font-normal'>
                                      {product?.rating?.rate}
                                    </h2>
                                  </div>
                                </td>

                                {/* Purchase */}
                                <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                  {product?.category}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* <div className='w-62 h-12 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow p-3 max-[375px]:mt-16 md:mt-0 lg:mt-0'>
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
              </div> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
