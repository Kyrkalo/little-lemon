import restaurant22 from '../assets/restaurant22.jpg';

export default function IntroSection() {
    return (
        <section className='intro-section-container'>
            <div>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <div>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
            </div>
            <div>
                <img className='intro-section-image' src={restaurant22} alt=""/>
            </div>
        </section>
    );
}