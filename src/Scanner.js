import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = () => {
  const [code, setCode] = useState('');
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
      setCode(data.codeResult.code);
      if (!array.includes(data.codeResult.code)) {
        setArray((prevState) => [...prevState, data.codeResult.code]);
      }
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {<div id='scanner' style={{ width: '20%', height: '20%' }}></div>}
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
  );
};

export default Scanner;
