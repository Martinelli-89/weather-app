import "./Switch.scss";

const Switch = ({isCelsius, toggleTemperature}) => {

    return (

        <div className="temperatureOptions">
            <div className={isCelsius? "container" : "x"}>
                <p className={isCelsius? "temperatureOptions__celsius active" : "temperatureOptions__celsius"} onClick={toggleTemperature}>C°</p>
            </div>
            <div className={isCelsius? "x" : "container"}>
                <p className={isCelsius? "temperatureOptions__fahreinheit" : "temperatureOptions__fahreinheit active"} onClick={toggleTemperature}>F°</p>    
            </div>
        </div>

    );

}

export default Switch;