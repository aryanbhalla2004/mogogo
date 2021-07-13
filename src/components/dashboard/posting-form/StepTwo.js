import { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';

const FormTwo = (props) => {
  const [extraDetailsLength, setExtraDetailsLength] = useState('0');
  const [pointOfInterest, setPointOfInterest] = useState([]);
  const [showAddressList, setShowAddressList] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [crd, setCrd] = useState({
    latitude: '',
    longitude: ''
  });
  const [zoom, setZoom] = useState(12);
 

  const wordCount = (e) => {
    if (e.target.name === 'extra_info' && e.target.value.split(' ').length < 251) {
      props.setInputField(e);
      let words = e.target.value.split(' ').length;
      if(words === 1 && e.target.value.split(' ')[0] === "") {
        setExtraDetailsLength("0");
      } else {
        setExtraDetailsLength(words);
      }    
    }
  }

  const deboundLocation = (e) => {
    props.setInputField(e);
    setShowAddressList(true)
  }

  const success = (pos) => {
    var crd = pos.coords;
    setCrd({latitude: crd.latitude, longitude: crd.longitude});
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true, timeout: 5000, maximumAge: 0});
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log(setCrd.longitude, setCrd.latitude);
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${props.listingType.address}.json?limit=4&proximity=${crd.longitude},${crd.latitude}&access_token=pk.eyJ1Ijoiam9obmF0aGFubml6aW9sIiwiYSI6ImNqcG5oZjR0cDAzMnEzeHBrZGUyYmF2aGcifQ.7vAuGZ0z6CY0kXYDkcaOBg&limit=10`);
      const JSON = await response.json(); 
      setPointOfInterest(JSON.features);
    }
    fetchData();
  }, [props.listingType.address]);


  const locationSelected = async(pos, content) => {
    const address = {
      target: {
        value: `${content}`,
        name: 'address'
      }
    }

    const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=c968fdc13c4c7ad94b64bfc708f5fa16&query=${pos[1]},${pos[0]}`);
    const JSON = await response.json();
    const city = {
      target: {
        value: JSON.data[0],
        name: 'city'
      }
    }

    props.setInputField(address);
    props.setInputField(city);
    setShowAddressList(false);
  }
  
  

  return (
    <>
    <form className="form-holder-one loading-In-Animation">
      <h1>Contact Information</h1>
      <div className="flex-input-2 mt-10">
        <div className="input-fields half-width">
          <label>Phone Number</label>
          <div className="icon-row">
            <i class="fas fa-phone-alt"></i>
            <input placeholder="+1 (204)-232-3423" type="tel" name="number" value={props.listingType.number} onChange={props.setInputField}></input>
          </div>   
        </div>
        <div className="input-fields half-width">
          <label>Email Address</label>
          <div className="icon-row">
            <i class="fas fa-envelope"></i>
            <input placeholder="Example@example.com" type="email" value={props.user.Email} readOnly></input>
          </div>   
        </div>
      </div>
        
      <div className="personal-top-one">
        <label>Extra Notes (Optional)</label>
        <div className="icon-row text-area-desgine">
          <textarea placeholder="Website Developer & Desginer" name="title" wrap="off" rows="10" wrap="hard" name="extra_note" value={props.listingType.extra_info} onChange={wordCount}></textarea>
        </div>
        <div className="word-count">
          <p>{extraDetailsLength}/500 Words</p>
        </div>
      </div>
    </form>
    <form className="form-holder-one loading-In-Animation" autocomplete="off">
      <h1>Location</h1>
      <div className="input-fields mt-10">
        <label>Postal code or street address</label>
        <div className="icon-row">
          <input placeholder="123 321 or Toronto" type="text" name="address" value={props.listingType.address} onChange={deboundLocation}></input>
        </div>   
      </div>
      {pointOfInterest && showAddressList &&
        <div className="point-of-interest-box">
          <ul>
            {
              pointOfInterest.map(location => (
                <li onClick={(e) => locationSelected(location.center, location.place_name)}><i class="bi bi-geo-alt"></i>{location.place_name}</li>
              ))
            }
          </ul>
        </div>
      }
    </form>

    <div className="button-continue-post">
      {props.listingType.number && props.listingType.address ? <button className="button-hover" onClick={(e) => props.continueButton('three')}><i class="fas fa-arrow-right"></i>&nbsp;Continue</button> : <button className="disabled-selected-button "><i class="fas fa-arrow-right"></i>&nbsp;Continue</button>}
    </div>
  </>
  )
}

export default FormTwo;