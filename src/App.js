import './App.css';
import React, { useEffect, useState } from 'react';
import Scanner from './Scanner';
import productDetails from './database/barcode.json';

import classNames from 'classnames';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { HiAnnotation } from 'react-icons/hi';
import styles from './Notify.module.css';
const notify = (message) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? 'top-0' : '-top-96',
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiAnnotation />
        </div>
        <div className={styles.contentWrapper}>
          <h1>{message}</h1>
          <p>Please scan the other barcode to list details</p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: 'unique-notification', position: 'top-right', duration: 600 }
  );
const App = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [array, setArray] = useState([]);
  const [scannedCode, setScannedCode] = useState('');

  const uniqueArray = [...new Set(array)];

  const handleStartButtonClick = () => {
    setShowScanner(true);
  };
  const displayProduct = productDetails.filter((val) =>
    uniqueArray.includes(val.barcode)
  );
  useEffect(() => {
    displayProduct.forEach((item) => {
      if (item.barcode !== scannedCode) {
        return notify('Product not found');
      }
    });
  }, [scannedCode]);
  useEffect(() => {
    displayProduct.forEach((item) => {
      if (uniqueArray.includes(item.barcode)) {
        notify('Product already listed');
      }
    });
  }, [uniqueArray]);

  return (
    <>
      <Toaster />
      <div className='h-screen w-full bg-white relative flex '>
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

        <div className='w-full h-full flex flex-col  bg-gray-100 '>
          <main className='max-w-full h-full flex flex-col md:flex-row lg:flex-row relative overflow-hidden mt-14 m-7'>
            <div className='rounded-lg flex-shrink-0 flex-grow  p-2 justify-center items-center  w-80 lg:w-10'>
              {showScanner ? (
                <Scanner
                  setArray={setArray}
                  array={array}
                  setScannedCode={setScannedCode}
                />
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
              <section className='container px-4 mx-auto '>
                <div className='flex flex-col overflow-y-auto overflow-hidden'>
                  <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 '>
                      <div className='border border-gray-200 md:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200 '>
                          <thead className='bg-gray-50 '>
                            <tr>
                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                              >
                                Product Details
                              </th>
                              <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                              >
                                <div className='flex items-center gap-x-3'>
                                  <button className='flex items-center gap-x-2'>
                                    $<span>Price</span>
                                  </button>
                                </div>
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                              >
                                Count
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                              >
                                Rating
                              </th>

                              <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                              >
                                Categories
                              </th>
                            </tr>
                          </thead>
                          <tbody className='bg-white divide-y divide-gray-200 '>
                            {displayProduct?.map((product) => (
                              <tr key={product.id}>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                  <div className='flex items-center gap-x-2'>
                                    <img
                                      className='object-cover w-8 h-8 rounded-full'
                                      src={product?.image}
                                      alt=''
                                    />
                                    <div>
                                      <h2 className='text-sm font-medium text-gray-800  '>
                                        {product?.title}
                                      </h2>
                                      <p className='text-xs font-normal text-gray-600'>
                                        {product?.barcode}
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                  <div className='inline-flex items-center gap-x-3'>
                                    <span>$ {product?.price}</span>
                                  </div>
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                  {product?.rating?.count}
                                </td>

                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                  <div
                                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                      product?.rating?.rate < 3
                                        ? 'text-red-500 bg-red-100/60'
                                        : 'text-emerald-500 bg-emerald-100/60'
                                    }`}
                                  >
                                    <h2 className='text-sm font-normal'>
                                      {product?.rating?.rate}
                                    </h2>
                                  </div>
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
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
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
