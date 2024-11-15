import liitle_lemon_footer_logo from '../assets/liitle_lemon_footer_logo.png';

export default function Footer() {
    return (
        <footer>
            <section className="main-section footer-section">
                <div></div>
                <div>
                    <img src={liitle_lemon_footer_logo} alt=''/>
                </div>
                <div>
                    <ul>
                        <li>Contact</li>
                        <li>2800 Flagler St Miami FL, 00000</li>
                        <li>1 800 545 0000</li>
                        <li><a href="mailto:littlelemon@mail.com">littlelemon@mail.com</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}