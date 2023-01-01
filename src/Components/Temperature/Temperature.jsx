import "./Temperature.scss";

const Temperature = ({isCelsius, celsius, fahrenheit}) => {

    return (

        <section className="temperature">
            <p className="temperature__degrees">{isCelsius? `${celsius} C°` : `${fahrenheit} F°`}</p>
        </section>

    )

}

export default Temperature;