import React,{useState} from 'react'
import WebsiteData from '../data/WebsiteData'

export default function Crew() {
  const websiteImages = WebsiteData.crew;
  const [selectedValue, setSelectedValue] = useState(1);

  const handleRadioChange = (event) => {
    const intValue = parseInt(event.target.value)
    setSelectedValue(intValue);
  };

  const currentWebsiteImage = websiteImages.map(image => {
    const id = parseInt(image.id); 
    return (
      <img
        src={image.images.png}
        alt=""
        key={image.id}
        className={selectedValue === id ? image.id : "hidden"} 
      />
    );
  })

  const backgroundImageCustom = {backgroundImage: currentWebsiteImage}

  return (
    <div className="crew-container">
      <div className="crew-container-helper">
        <h1><span>02</span> meet your crew</h1>
        <div className="crew-container-grid">
          <div className="crew-container-content">
            {websiteImages.map(person => {
              const id = parseInt(person.id); 
              return (
                <div key={person.id} className={selectedValue === id ? person.id : "hidden"} >
                  <h2>{person.role}</h2>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </div>
              );
            })}
            <div className="crew-container-radios">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  checked={selectedValue === "1"}
                  onChange={handleRadioChange}
                  className='radio-button-please-work'
                />
                <span className='radio-circle'></span>
                {selectedValue == "1" && <span className='radio-line'></span>}
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
                <span className='radio-circle'></span>
                {selectedValue == "2" && <span className='radio-line'></span>}
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
                <span className='radio-circle'></span>
                {selectedValue == "3" && <span className='radio-line'></span>}
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="4"
                  checked={selectedValue === "4"}
                  onChange={handleRadioChange}
                  className='radio-button-please-work'
                />
                <span className='radio-circle'></span>
                {selectedValue == "4" && <span className='radio-line'></span>}
              </label>
            </div>
          </div>
          <div className="crew-container-image" style={{backgroundImage: `url(${currentWebsiteImage[selectedValue - 1].props.src})`}}>
            
          </div>
        </div>
      </div>
    </div>
  )
}
