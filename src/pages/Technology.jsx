import React,{useState} from 'react'
import WebsiteData from '../data/WebsiteData'

export default function Technology() {
  const websiteImages = WebsiteData.technology;
  const [selectedValue, setSelectedValue] = useState(1);

  const handleRadioChange = (event) => {
    const intValue = parseInt(event.target.value)
    setSelectedValue(intValue);
  };

  return (
    <div className="technology-container">
      <div className="technology-container-helper">
        <h1><span>03</span> Space Launch 101</h1>
        <div className="technology-grid">
          <div className="technology-radios">
            <label>
              <input
                type="radio"
                name="radio"
                value="1"
                checked={selectedValue === "1"}
                onChange={handleRadioChange}
                className='radio-button-please-work'
              />
              <div className="radio-number">1</div>
              {selectedValue == "1" && <span className='radio-line'>1</span>}
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="2"
                checked={selectedValue === "2"}
                onChange={handleRadioChange}
                className='radio-button-please-work'
              />
              <div className="radio-number">2</div>
              {selectedValue == "2" && <span className='radio-line'>2</span>}
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="3"
                checked={selectedValue === "3"}
                onChange={handleRadioChange}
                className='radio-button-please-work'
              />
              <div className="radio-number">3</div>
              {selectedValue == "3" && <span className='radio-line'>3</span>}
            </label>
          </div>
          <div className="technology-content">
            <h2>The terminology...</h2>
            {websiteImages.map(technology => {
              const id = parseInt(technology.id); 
              return (
                <div key={technology.id} className={selectedValue === id ? technology.id : "hidden"} >
                  <h3>{technology.name}</h3>
                  <p>{technology.description}</p>
                </div>
              );
            })}
          </div>
          <div className="technology-image">
            {websiteImages.map(image => {
              const id = parseInt(image.id); 
              return (
                <img
                  src={image.images.portrait}
                  alt=""
                  key={image.id}
                  className={selectedValue === id ? image.id : "hidden"} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
