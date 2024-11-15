import IntroSection from './IntroSection';
import MainSection from './MainSection';
import Testimonials from './Testimonials';

export default function Home() {
    return(
        <div>
            <MainSection></MainSection>
            <Testimonials></Testimonials>
            <IntroSection></IntroSection>
        </div>
    );
}