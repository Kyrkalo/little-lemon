import CustomeArticle from "./CustomArticle";
import CustomButton from "./CustomButton";

export default function CustomeSection(props = []){
    return(        
        <section>
            <div class="section-header">
                <h1>Specials</h1>
                <CustomButton id="online-menu" class="button-yel" text="Online menu">

                </CustomButton>
            </div>
            <div class="article">                
                {props?.articles?.map((item, index) => (
                    <CustomeArticle
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        text={item.text}>
                    </CustomeArticle>
                            ))}
            </div>
        </section>
    );
}