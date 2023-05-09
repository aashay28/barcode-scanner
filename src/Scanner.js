import React, { useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = ({ setArray, array }) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#scanner'),
          constraints: {
            width: { min: 640 },
            height: { min: 420 },
            aspectRatio: { min: 1.77, max: 1.78 },
          },
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
