import {Link} from "react-router-dom";

export default function Warning({label, text, to}) {
    return (
        <div>
            <div>{label}</div>
            <Link className="underline pl-1 cursor-pointer" to={to}>{text}</Link>
        </div>
    )
}