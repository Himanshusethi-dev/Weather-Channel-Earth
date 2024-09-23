import {useState} from 'react'
import './style.css'
const ToggleTemperature = ({ converter }) => {

    const [isToggled, setIsToggled] = useState(true);
    const handleToggle = () => {
      setIsToggled((prevState) => !prevState);
      converter()
    };
    return (
        <div className='toggleTemperature'>
            <button onClick={handleToggle}>
                {isToggled ? <span>F &deg;</span> :  <span>C &deg;</span> }
            </button>
        </div>
    )
}

export default ToggleTemperature