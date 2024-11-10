import restaurant from '../assets/restaurant.jpg';

export default function MainSection() {
    return(
        <section class="main-section">
            <div class="section-content">
                <h1>
                    Little Lemon
                </h1>
                <h3>
                    Chicago
                </h3>
                <span>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </span>
                <button id="button" class="button-yel">Reserve a Table</button>
            </div>
            <div>
                <img class="face-image" src={restaurant} alt=""/>
            </div>
        </section>
    );
}