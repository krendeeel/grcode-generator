import React from 'react';
import { saveAs } from 'file-saver';
import { ThreeDots } from 'react-loader-spinner';

import { useQrContext } from '../store';

const QrCode = () => {
  const { state: { response, loading, error } } = useQrContext();
  const downloadImage = () => {
    saveAs(response, 'qrCode.png');
  }

  return (
    <div className="qrcode">
      {response ? (
        <>
          <img className="qr-img" src={response} alt="qrCode" />
          <button
            onClick={downloadImage}
          >Скачать</button>
        </>
      ) :
        loading
          ? <ThreeDots /> :
          error ?
            (
              <div>Упс... Что-то пошло не так:(</div>
            )
            : (
              <div>Введите ссылку!</div>
            )
      }

    </div>
  )
}

export default QrCode;