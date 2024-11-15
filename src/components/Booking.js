import { useState } from "react";
import SectionContent from "./SectionContent";

export default function Booking() {

    const handleSubmit = (e) => {
        e.preventDefault();
        //submit({ date, time, numberOfGuests, occasion });
    };

    // const minimumNumberOfGuests = 1;
    // const maximumNumberOfGuests = 10;
    // const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    // const [time, setTime] = useState(defaultTime);
    // const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
    // const [occasion, setOccasion] = useState(occasions[0]);
    const today = new Date().toISOString().split('T')[0];
    const [booking, setBooking] = useState({name: '', phone:'', date: today});
    const handleName = (e) => setBooking({
        ...booking,
        name: e.target.value
    })
    const handlePhone = (e) => setBooking({
        ...booking,
        phone: e.target.value
    })
    const handleDate = (e) => setBooking({
        ...booking,
        date: e.target.value
    })

    return (
        <>
            <section className="main-section">
                <div className="section-content about">
                    <SectionContent
                        title="Reserve a table"
                        text="For more information please call us to 1-800-545 0000"
                    ></SectionContent>
                </div>
            </section>
            <section>
                <div className="booking-form">
                    <form >
                        <label id='lblName' for='name'>Your name</label>
                        <input id='name' type='text' onChange={handleName}/>
                        <label id='lblPhone' for='phone'>Phone</label>
                        <input id='phone' type='text' onChange={handlePhone}/>
                        <label id='lblDate' for='date'>Date</label>
                        <input id='date' min={today} type='date' value={booking.date} onChange={handleDate}/>
                    </form>
                </div>
            </section>
        </>
    );
}