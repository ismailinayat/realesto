import './contact.scss';
//const colorDark = "#1f2937"
//const colorPrimary = "#eabd23"
//const colorLight = "rgb(55,65,81)"
// const colorText = 
const Contact = () => {
    return (
        <div className='booking-section'>
            <div className="booking">
                <div className="booking__container">
                    <div className="booking__container-form">

                        <div className="contact__form-heading">
                            <h1>Contact Us With Your Query</h1>
                        </div>

                        <div className="form">
                            <form action="#">

                                <div className="form__group">
                                    <input  className="form__input" type="text" id="name" placeholder="Full Name" required />
                                    <label className="input__label" htmlFor="name">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input  className="form__input" type="email" id="email" placeholder="Email Address" required/>
                                    <label className="input__label" htmlFor="email">Email Address</label>
                                </div>

                                <div className="form__group">
                                    <textarea className="form__input" name="" id="query" cols="30" rows="10" placeholder="Your Message"></textarea>
                                    <label className="input__label" htmlFor="query">Your Message</label>

                                </div>

                                <div className="form__btn-container">
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
