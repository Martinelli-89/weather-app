import Search from "../Search/Search";
import "./Modal.scss";

const Modal = ({content, close, searchLocation}) => {

    let render;

    if(content == "search") {
        render = <Search close={close} search={searchLocation}/>
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