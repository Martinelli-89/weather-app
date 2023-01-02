import closeIcon from "../../Assets/Images/close.svg";
import "./Error.scss";

const Error = ({message, close}) => {

    return (

        <div className="error">
            <img src={closeIcon} alt="close icon" className="error__close" onClick={close}/>
            <p className="error__info">{message}</p>
        </div>

    );

}

export default Error;