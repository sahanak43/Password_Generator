import React from 'react';
import OptionsPassword from './OptionsPassword';
// import PasswordStrength from './PasswordStrength';
import SliderCharacterLength from './SliderCharacterLength';
import useData from '../Classes/useData';
import { generate } from 'generate-password-browser';

class PasswordGenerator extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ...useData(),
      }
    }
  generatePassword = () => {
    const { characterLength, setGeneratedPassword, options } = this.state;
    let i = 0;
    for (const option of Object.values(options)) {
      if (option) {
        i++;
        // setPasswordStrength(i);
      }
    }
    try {
      setGeneratedPassword(
        generate({
          length: characterLength,
          uppercase: options.includeUppercase,
          lowercase: options.includeLowerCase,
          numbers: options.includeNumbers,
          symbols: options.includeSymbols,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  render() {
    // const { characterLength, setGeneratedPassword, options } = this.state;
    return (
      <div className="password-generator-container">
        <SliderCharacterLength characterLength={characterLength} />
        <OptionsPassword />
        {/* <PasswordStrength /> */}
        <button className="primary-button" onClick={this.generatePassword}>
          Generate
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default PasswordGenerator;