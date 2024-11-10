
export default function SectionContent(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <span>{props.text}</span>
        </div>
    );
}