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
            width: 420,
            height: 420,
            // aspectRatio: 16 / 9,
            facingMode: 'environment',
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
      setArray((prevState) => [...prevState, data.codeResult.code]);
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return <div id='scanner' className='scanner'></div>;
};

export default Scanner;
