import React,{useState} from 'react'
import WebsiteData from '../data/WebsiteData'

export default function Destination() {
  const websiteImages = WebsiteData.destinations;
  const [selectedValue, setSelectedValue] = useState(1);

  const handleRadioChange = (event) => {
    const intValue = parseInt(event.target.value)
    setSelectedValue(intValue);
  };

  return (
    <div className="destination-container">
      <div className="destination-container-helper">
          <div className="destination-container-image">
            <h1><span>01</span> Pick your destination</h1>
            {websiteImages.map(image => {
              const id = parseInt(image.id); 
              return (
                <img
                  src={image.images.png}
                  alt=""
                  key={image.id}
                  className={selectedValue === id ? image.id : "hidden"} 
                />
              );
            })}
          </div>
          <div className="destination-container-description">
            <div className="destination-radios">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  checked={selectedValue === "1"}
                  onChange={handleRadioChange}
                  className='radio-button-work'
                />
                Moon
                {selectedValue == "1" && <span className='radio-line'></span>}
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  checked={selectedValue === "2"}
                  onChange={handleRadioChange}
                  className='radio-button-work'
                />
                Mars
                {selectedValue == "2" && <span className='radio-line'></span>}
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="3"
                  checked={selectedValue === "3"}
                  onChange={handleRadioChange}
                  className='radio-button-work'
                />
                Europa
                {selectedValue == "3" && <span className='radio-line'></span>}
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="4"
                  checked={selectedValue === "4"}
                  onChange={handleRadioChange}
                  className='radio-button-work'
                />
                Titan
                {selectedValue == "4" && <span className='radio-line'></span>}
              </label>
            </div>
            <div className="destination-content">
              {websiteImages.map(planet => {
                const id = parseInt(planet.id); 
                return (
                  <div key={planet.id} className={selectedValue === id ? planet.id : "hidden"} >
                    <h2>{planet.name}</h2>
                    <h3>{planet.description}</h3>
                    <div className="destination-content-line"></div>
                    <div className="distance-travel-time">
                      <div className="distance-travel-time-div">
                        <p>Avg. distance</p>
                        <span>{planet.distance}</span>
                      </div>
                      <div className="distance-travel-time-div">
                        <p>est. travel time</p>
                        <span>{planet.travel}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  )
}