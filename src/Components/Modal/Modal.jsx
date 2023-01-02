import Search from "../Search/Search";
import Error from "../Error/Error";
import "./Modal.scss";

const Modal = ({content, close, searchLocation, message}) => {

    let render;

    if(content == "search") {
        render = <Search close={close} search={searchLocation}/>
    }

    if(content == "error") {
        render = <Error close={close} message={message}/>
    }

    return (

        <div className="modal">
            <div className="modal__content">
                {render}
            </div>
        </div>

    )

}

export default Modal;