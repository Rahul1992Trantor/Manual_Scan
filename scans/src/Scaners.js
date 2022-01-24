import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const Scaners = () => {
    const [focusindex, setFocusindex] = useState(0)
    const inputref1 = useRef()
    const inputref2 = useRef()
    const inputref3 = useRef()
    useEffect(() => {
        console.log("focus index", focusindex);
        
        if (focusindex === 0) {
            inputref1.current.focus()

        }
        else if (focusindex === 1) {
            inputref2.current.focus()

        }
        else {
            inputref3.current.focus()
        }
    },[focusindex])
    const jump = useRef()
    const handleKeyup = (e) => {
        const maxlength = e.target.getAttribute("maxLength")
        console.log("maxLength is", maxlength);
        const length = e.target.value.length
        console.log("length is", maxlength);
        if (parseInt(maxlength) === parseInt(length)) {
            setFocusindex(focusindex >2 ? 0 : parseInt(focusindex) + 1)
        }
    }


    return (
        <>
     
             
            
         
                    <div className="col-10 offset-1">
                        <div id="autojump" ref={jump} className="row">
                            <div className="col-4">
                                <input type="text" ref={inputref1} onKeyUp={handleKeyup} className="form-control" maxLength="10"  />
                            </div>
                            <div className="col-4">
                                <input type="text" ref={inputref2} onKeyUp={handleKeyup} className="form-control" maxLength="15"  />
                            </div>
                            <div className="col-4">
                                <input type="text" ref={inputref3} className="form-control" onKeyUp={handleKeyup}  maxLength="20" />
                            </div>
                        </div>


            </div>

        
        </>
    )
}

export default Scaners
