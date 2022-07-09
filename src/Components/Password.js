import React,{useState} from "react";
import Navbar from './Navbar'

const Password = () => {
  const [pass, setpass] = useState("")
  const [sSymbol, setsSymbol] = useState("")
  const [sNumber, setsNumber] = useState("")
  const [uName, setuName] = useState("")
  const [len, setlen] = useState('')
  const [conPress, setconPress] = useState('')
  
  const sSymbolChange =(e)=>{
    setsSymbol(e.target.value)
  }
  const sNumberChange =(e)=>{
    setsNumber(e.target.value)
  }
  const uNameChange =(e)=>{
    setuName(e.target.value)
  }
  const passChange =(e)=>{
    setpass(e.target.value)
  }
  const lenChange=(e)=>{
    setlen(e.target.value)
  }

  const generatePassPlz=()=>{

    if(sSymbol==='' || sNumber==="" || uName==="" || len==='')
    {
      setpass('')
      alert("All inputs must be required")
    }
    else if(isNaN(len)){
      setpass('')
      alert("Length must be in Number Formate")
      
    }
    else{

      let length = len,
        charset = uName + sSymbol + sNumber,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    setpass(retVal)
    setconPress('Continue to generate more Passwords Examples*')
    // setsSymbol("")
    // setuName('')
    // setsNumber('')
    // setlen('')

    }
  }
  const copyTo=()=>{
    if(pass==="" || pass===null)
    {}
    else{
    navigator.clipboard.writeText(pass).then(()=>{
      alert("Copied to Clipboard")
    })}
  }

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="formInputs">
          <div className="mx-2">
            <label htmlFor="spacialSymbol" className="my-1">
              <p>*</p>Enter Symbol:
            </label>
            <input
              value={sSymbol}
              onChange={sSymbolChange}
              className="form-control symbolInputBox"
              id="spacialSymbol"
              type="textbox"
              placeholder="Enter favourite symbol"
            />
          </div>
          <div className="mx-2">
            <label htmlFor="numberBox" className="my-1">
            <p>*</p>Enter Number:
            </label>
            <input
              value={sNumber}
              onChange={sNumberChange}
              className="form-control symbolInputBox"
              id="numberBox"
              type="textbox"
              placeholder="Enter favourite Number"
            />
          </div>
        </div>
        <div className="userName my-3">
          <div className="mx-2">
            <label htmlFor="userNameBox" className="my-1">
            <p>*</p>Enter String:
            </label>
            <input
              value={uName}
              onChange={uNameChange}
              className="form-control userNameInputBox"
              id="userNameBox"
              type="textbox"
              placeholder="Enter Anything to put in your Password"
            />
          </div>
          <div className="mx-2">
            <label htmlFor="lengthBox" className="my-1">
            <p>*</p>Enter length:
            </label>
            <input
              value={len}
              onChange={lenChange}
              className="form-control userNameInputBox"
              id="lengthBox"
              type="textbox"
              placeholder="Enter Length here"
            />
          </div>
        </div>
        <div className="passwordIs my-3">
          <div className="mx-2">
            <label htmlFor="passwordBox" className="my-1">
              Your Password is:
            </label>
            <input
              value={pass}
              onChange={passChange}
              className="form-control userPassword"
              id="passwordBox"
              type="textbox"
              placeholder="Your password will be displyed here"
            />
          </div>
          <button className="btn btn-outline-primary PassCopyButton mx-2" onClick={copyTo}>Copy To Clipboard</button>
        </div>
      </div>
      <div className="passGenBtn"><button className="btn btn-primary" onClick={generatePassPlz}>Generate Password</button></div>
      <div className="conPress">{conPress}</div>
    </>
  );
};

export default Password;
