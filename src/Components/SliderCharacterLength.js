import React from 'react';
// import useData from '../Classes/useData';
import useData from '../Classes/useData';

class SliderCharacterLength extends React.Component {
  componentDidMount() {
    for (let e of document.querySelectorAll('input[type="range"]')) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min === '' ? '0' : e.min);
      e.style.setProperty('--max', e.max === '' ? '100' : e.max);
      e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
  }

  render() {
    const { characterLength, setCharacterLength } = useData();

    return (
      <div className="password-character-length-container">
        <div className="password-character-length-header">
          <label htmlFor="passwordLengthSlider">Character Length</label>
          <span className="password-length">{characterLength}</span>
        </div>
        <div className="slider-container">
          <input
            type="range"
            id="passwordLengthSlider"
            name="passwordLength"
            value={characterLength}
            onChange={(e) => setCharacterLength(e.target.value)}
            min="0"
            max="40"
          />
        </div>
      </div>
    );
  }
}

export default SliderCharacterLength;