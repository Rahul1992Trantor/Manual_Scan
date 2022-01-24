

import React from 'react'
import BarcodeReader from 'react-barcode-reader'
import { useState } from 'react'

function Barc() {

        const [scanData, setScanData] = useState()

        const handleScan = (data) => {
          setScanData(data)
        }
        
        const handleError = (err) => console.error(err)

    
        return(
          <div>
          <BarcodeReader
       onError={handleError}
       onScan={handleScan}
          />
          </div>
        )
      };
    
    export default Barc;