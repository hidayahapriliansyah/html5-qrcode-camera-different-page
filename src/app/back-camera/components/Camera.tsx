'use client';

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from 'html5-qrcode';
import Link from "next/link";
import { useEffect } from 'react'

const BackCameraScanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader-back-camera");
    const qrCodeSuccessCallback: QrcodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
      /* handle success */
      console.log(decodedResult, decodedText)
    };
    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
      qrbox: { width: 200, height: 200 },
      disableFlip: false,
    };
    html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback, undefined);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-fit md:my-8 lg:my-16 p-1 bg-red-700 md:scale-125 lg:scale-150">
        <div id="reader-back-camera" className="block w-[300px] mx-auto"></div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/front-camera" className="">Front Camera</Link>
      </div>
    </div>
  )
}

export default BackCameraScanner;