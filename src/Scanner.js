import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = () => {
  const [array, setArray] = useState([]);
  const uniqueArray = [...new Set(array)];

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#scanner'),
        },
        decoder: {
          readers: ['ean_reader'],
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      if (!array.includes(data.codeResult.code)) {
        setArray((prevState) => [...prevState, data.codeResult.code]);
      }
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return (
    <div>
      <div className='main' id='scanner'>
        <div class='terminal'>
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
    </div>
  );
};

export default Scanner;
