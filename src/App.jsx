import React from "react";

import { InputForm, QrCode } from "./components";
import { QrProvider } from "./store";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <QrProvider>
          <InputForm />
          <QrCode />
        </QrProvider>
      </div>
    </div>
  );
}

export default App;
