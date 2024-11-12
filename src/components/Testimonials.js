import Lena from '../assets/Lena.png';
import Martha from '../assets/Martha.png';
import Sean from '../assets/Sean.png';
import Robert from '../assets/Robert.png';
import stars from '../assets/stars.png';
import Reviewer from './Reviewer';

export default function Testimonials() {
    const reviwers = [
        {
            name: 'Lena',
            photo: Lena,
            stars: stars,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },{
            name: 'Sean',
            photo: Sean,
            stars: stars,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },{
            name: 'Martha',
            photo: Martha,
            stars: stars,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },{
            name: 'Robert',
            photo: Robert,
            stars: stars,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];
    return (
        <div class="main-section testimonials">
            <h2> Testimonials</h2>
            <div class="testimonials-container">
                {
                    reviwers.map(e => (
                        <Reviewer 
                            name={e.name}
                            photo={e.photo}
                            stars={e.stars}
                            text={e.text}>

                        </Reviewer>
                    ))
                }
            </div>
        </div>
    );
}