import React from 'react';
import useData from '../Classes/useData';

class OptionsPassword extends React.Component {
  render() {
    const { options, setOptions } = useData();

    return (
      <div className="password-options-container">
        <label className="check-container">
          Include Uppercase Letters
          <input
            type="checkbox"
            checked={options.includeUppercase}
            onChange={(e) =>
              setOptions({ ...options, includeUppercase: !options.includeUppercase })
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="check-container">
          Include Lowercase Letters
          <input
            type="checkbox"
            checked={options.includeLowerCase}
            onChange={(e) =>
              setOptions({ ...options, includeLowerCase: !options.includeLowerCase })
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="check-container">
          Include Numbers
          <input
            type="checkbox"
            checked={options.includeNumbers}
            onChange={(e) =>
              setOptions({ ...options, includeNumbers: !options.includeNumbers })
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="check-container">
          Include Symbols
          <input
            type="checkbox"
            id="option-symbol"
            checked={options.includeSymbols}
            onChange={(e) =>
              setOptions({ ...options, includeSymbols: !options.includeSymbols })
            }
          />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default OptionsPassword;