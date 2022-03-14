import React, { useState } from "react";

import { getQrCode } from "../api";
import { useQrContext } from "../store";
import { setError, setLoading, setResponse } from "../store/actions";

const InputForm = () => {

  const { dispatch } = useQrContext();
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#000000');
  const changeColor = e => setColor(e.target.value);
  const changeUrl = e => setUrl(e.target.value);

  const bodyParameters = {
    "colorDark": color,
    "qrCategory": "url",
    "text": url
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await getQrCode(bodyParameters);
      dispatch(setResponse(res.data.url));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form className="form">
      <section>
        <label htmlFor="url">Введите ссылку: </label>
        <input
          required
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={changeUrl}
          id="url"
        />
      </section>
      <section>
        <label htmlFor="color">
          Выберите цвет:
        </label>
        <input
          type="color"
          onChange={changeColor}
          id="color"
        />
      </section>
      <button
        type="submit"
        disabled={!url}
        onClick={handleSubmit}
        className="genbtn"
      >Генерировать</button>
    </form>
  );
}

export default InputForm;