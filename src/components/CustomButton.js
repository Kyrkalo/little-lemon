import { Link } from "react-router-dom"

export default function CustomButton(props) {
    return (
        <Link 
            id={props.id} 
            class={props.class}
            to={props.to}>
            {props.text}
        </Link>
    );
}