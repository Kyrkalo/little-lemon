
export default function CustomeArticle(props) {
    return (
        <article class="item-article">
            <div>
                <img src={props.image}alt=""/>
            </div>
            <div className="title-article">
                <h3>
                    {props.title}
                </h3>
                <span>
                    {props.price}
                </span>
            </div>
            <div className="text-article">
                <p>
                    {props.text}
                </p>
            </div>
        </article>
    );
}