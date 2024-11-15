import IntroSection from "./IntroSection";
import SectionContent from "./SectionContent";

export default function About() {
    return (
        <>
            <div>
                <section className="main-section">
                    <div className="section-content about">
                        <SectionContent
                            title="About Us"
                            text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                        ></SectionContent>
                    </div>
                </section>
            </div>
            <IntroSection></IntroSection>
        </>
    );
}