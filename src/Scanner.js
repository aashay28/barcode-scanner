import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';

const Scanner = ({ setArray, array }) => {
  const [cameraWidth, setCameraWidth] = useState('90%');
  const [cameraHeight, setCameraHeight] = useState('60%');
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCameraWidth('100');
      setCameraHeight('50');
    }
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCameraWidth('100');
        setCameraHeight('50');
      } else {
        setCameraWidth('90%');
        setCameraHeight('60%');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#scanner'),
          constraints: {
            width: { min: 120, ideal: 640, max: 1920 },
            height: { min: 50, ideal: 420, max: 1080 },
            aspectRatio: 16 / 9,
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
      if (!array.includes(data.codeResult.code)) {
        setArray((prevState) => [...prevState, data.codeResult.code]);
      }
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return <div id='scanner' className='scanner border border-indigo-600'></div>;
};

export default Scanner;
