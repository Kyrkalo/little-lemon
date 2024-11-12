export default function Reviewer(props) {
    return (
        <div>
            <h4 className='testimonials-title'>{props.name}</h4>
            <div>
                <img className='testimonails-photo' src={props.photo} alt=""/>
            </div>
            <div>
                <img src={props.stars} alt=""/>
            </div>
            <div className='testimonials-text'>{props.text}</div>
        </div>
    );
}