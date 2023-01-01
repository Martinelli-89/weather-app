import { useState } from "react";
import closeIcon from "../../Assets/Images/close.svg";
import "./Search.scss";

const Search = ({search, close}) => {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    return (

        <div className="search">
            <img src={closeIcon} alt="close icon" className="search__close" onClick={close}/>
            <p className="search__info">Enter location</p>
            <input 
                className="search__input"
                value={city}
                onChange={handleChange}
                placeholder="Enter location..."
            ></input>
            <button className="search__search" onClick={() => search(city)}>Search</button>
        </div>

    );

}

export default Search;

