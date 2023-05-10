import React from 'react';

const Table = ({ displayProduct }) => {
  return (
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
                        {product.category}
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
  );
};

export default Table;
