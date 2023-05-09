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
      {<div id='scanner' style={{ width: '20%', height: '20%' }}></div>}
      {code?.map((c, i) => (
        <p key={i}>Code: {c}</p>
      ))}
    </>
  );
};

export default Scanner;
