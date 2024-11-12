import restaurant from '../assets/restaurant.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpeg'
import CustomButton from './CustomButton';
import CustomeSection from './CustomSection';
import SectionContent from './SectionContent';

export default function MainSection() {
    const articles = [
        {image: greeksalad, title: "Greek Salad", price: "$12.99", text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,..."},
        {image: bruchetta, title: "Bruchetta", price: "$5.99", text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned,..."},
        {image: lemondessert, title: "Lemon Dessert", price: "$12.99", text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and i,..."}
    ];
    return(
        <div>
            <section className="main-section">
            <div className="section-content">
                <SectionContent 
                    title="Little Lemon"
                    subTitle = "Chicago"
                    text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                ></SectionContent>
                <div className="button-wrap">
                    <CustomButton id="button" class="button-yel" text="Reserve a Table"></CustomButton>
                </div>
            </div>
            <div>
                <img className="face-image" src={restaurant} alt=""/>
            </div>
        </section>
            <CustomeSection articles={articles}>

            </CustomeSection>
        </div>
    );
}