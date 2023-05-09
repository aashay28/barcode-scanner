import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
import Webcam from 'react-webcam';

const BarcodeScanner = () => {
  const [code, setCode] = useState(null);
  const webcamRef = React.useRef(null);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: webcamRef.current,
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
        Quagga.onDetected((data) => {
          setCode(data.codeResult.code);
          Quagga.stop();
        });
      }
    );
    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        style={{ width: 640, height: 480 }}
      />
      {code ? <p>Barcode scanned: {code}</p> : ''}
    </div>
  );
};

export default BarcodeScanner;
