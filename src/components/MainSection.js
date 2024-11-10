import restaurant from '../assets/restaurant.jpg';
import CustomButton from './CustomButton';
import SectionContent from './SectionContent';

export default function MainSection() {
    return(
        <section class="main-section">
            <div class="section-content">
                <SectionContent 
                    title="Little Lemon"
                    subTitle = "Chicago"
                    text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                ></SectionContent>
                <div class="button-wrap">
                    <CustomButton id="button" class="button-yel" text="Reserve a Table"></CustomButton>
                </div>
            </div>
            <div>
                <img class="face-image" src={restaurant} alt=""/>
            </div>
        </section>
    );
}