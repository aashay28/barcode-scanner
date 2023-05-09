import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = () => {
  const [code, setCode] = useState([]);

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
      // setCode(data.codeResult.code);
      setCode((oldArray) => [...oldArray, data.codeResult.code]);
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return (
    <>
      {<div id='scanner' style={{ width: '50%', height: '50%' }}></div>}
      {code.length !== 0
        ? code.map((c, i) => <p key={i}>Code: {c}</p>)
        : 'No Barcode to display'}
    </>
  );
};

export default Scanner;
