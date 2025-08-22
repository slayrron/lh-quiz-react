import App from "./App";
import imageTest from "../assets/0.jpg"
import "../styles/image.css"

function Image() {
    return (
        <div>
            <img src={imageTest} className="question-img"></img>
        </div>
    )
}

export default Image;