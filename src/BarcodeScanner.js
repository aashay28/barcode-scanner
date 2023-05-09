import React, { useRef, useEffect, useState } from 'react';
import Quagga from 'quagga';
const BarcodeScanner = () => {
  const videoRef = useRef();
  const [output, setOutput] = useState();
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: videoRef.current,
        },
        decoder: {
          readers: ['ean_reader'],
        },
      },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      console.log(data.codeResult.code);
      setOutput(data.codeResult.code);
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
      <br />
      <div>{output ? output : ''}</div>
    </div>
  );
};

export default BarcodeScanner;
