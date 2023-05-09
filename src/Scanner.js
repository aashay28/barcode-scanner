import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = () => {
  const [code, setCode] = useState('');
  const [array, setArray] = useState([]);
  const addItem = (newItem) => {
    if (!array.includes(newItem)) {
      setArray([...array, newItem]);
    }
  };
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
      addItem(data.codeResult.code);
    });

    // return () => {
    //   Quagga.stop();
    // };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {<div id='scanner' style={{ width: '20%', height: '20%' }}></div>}

      {array?.map((c, i) => (
        <p key={i}>
          Code {i}: {c}
        </p>
      ))}
    </div>
  );
};

export default Scanner;
