import React, { useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = ({ setArray, array }) => {
  useEffect(() => {
    Quagga.init(
      {
        constraints: {
          width: { min: 640 },
          height: { min: 480 },
          facingMode: 'environment',
          aspectRatio: { min: 16, max: 9 },
          // Set landscape mode
          orientation: 'landscape',
        },
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

  return <div id='scanner' className='scanner'></div>;
};

export default Scanner;
