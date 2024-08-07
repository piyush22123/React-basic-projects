import { useState } from 'react'
import './App.css'
import QRCode from "react-qr-code"

function App() {

  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerateQRCode = () => {
    setQrCode(input);
  }

  return (
    <>
      <div className="main">
        <h1>QR Code Generator</h1>
        <input onChange={(e) => setInput(e.target.value)} type="text" name='qrCode' placeholder='enter your value here'/>
        {/* // disable button if input is empty */}
        <button disabled={input.trim() === ''} onClick={handleGenerateQRCode}>Generate QR</button>
        <div className='QRCode'>
          <QRCode 
          id="qr-code-value" 
          value={qrCode}
          size={300}
          bgColor="white"
          />
        </div>
      </div>
    </>
  )
}

export default App
