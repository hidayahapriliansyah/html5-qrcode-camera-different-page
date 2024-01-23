'use client';

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from 'html5-qrcode';
import Link from "next/link";
import { useEffect } from 'react'

const FrontCameraScanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader-front-camera");
    const qrCodeSuccessCallback: QrcodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
      /* handle success */
      console.log(decodedResult, decodedText)
    };
    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
      qrbox: { width: 200, height: 200 },
      disableFlip: false,
    };

    console.log('facing mode =>> user bang');
    html5QrCode.start({ facingMode: 'user' }, config, qrCodeSuccessCallback, undefined);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-fit md:my-8 lg:my-16 p-1 bg-red-700 md:scale-125 lg:scale-150">
        <div id="reader-front-camera" className="block w-[300px] mx-auto [transform:rotateY(180deg)]"></div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/back-camera" className="">Back Camera</Link>
      </div>
    </div>
  )
}

export default FrontCameraScanner;