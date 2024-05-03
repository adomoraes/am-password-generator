import React, { useState } from "react";
import Input from "./components/Input";
import CheckboxInput from "./components/CheckboxInput";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy!");
  const [copyClass, setCopyClass] = useState("icon copyToClipboardOff");
  const [customSize, setCustomSize] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  function generate() {
    const length = customSize;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "0123456789";
    const specialCharset = "!@#$%^&*()_-+=<>?";

    charset += includeUppercase ? uppercaseCharset : '';
    charset += includeNumbers ? numberCharset : '';
    charset += includeSpecial ? specialCharset : '';

    var generatedPassword = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }
    setPassword(generatedPassword);
    setCopyClass("icon copyToClipboardOn")
    setCopyText("Copy!");
  }

  function copyToClipboard() {
    if(password){
      window.navigator.clipboard.writeText(password);
      setCopyClass("icon copyToClipboardClicked")
      setCopyText("Copied!!");
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>AM Password Generator</h1>

        <div className="inputContainer">
          <div className="inputCopy">
            <span className="txt">{password}</span>
            <span 
              onClick={copyToClipboard} 
              className={copyClass}
            >
              {copyText}
            </span>
          </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="passwordSize">Password length (4-20) | {customSize}</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>

        <CheckboxInput
          id="uppercase"
          label="Include Uppercase Letters:"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <CheckboxInput
          id="numbers"
          label="Include Numbers:"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <CheckboxInput
          id="special"
          label="Include Special Characters:"
          checked={includeSpecial}
          onChange={(e) => setIncludeSpecial(e.target.checked)}
        />

        <button onClick={generate}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
