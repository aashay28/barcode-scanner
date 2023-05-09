import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader } from '@zxing/library';

const BarcodeScanner = () => {
  const [result, setResult] = useState('');

  const reader = new BrowserMultiFormatReader();

  useEffect(() => {
    reader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
      setResult(result.getText());
    });
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        id='video'
        width={640}
        height={480}
        screenshotFormat='image/jpeg'
        videoConstraints={{
          facingMode: 'environment',
        }}
      />
      <div>{result}</div>
    </div>
  );
};

export default BarcodeScanner;
