import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";
import './icon.css';
const Icon = ({ ic }) => {
    switch (ic) {
        case "circle":
            return <FaRegCircle className="icon circle" />;
        case "cross":
            return <FaTimes className="icon cross" />;
        default:
            return "";
    }
}

export default Icon;