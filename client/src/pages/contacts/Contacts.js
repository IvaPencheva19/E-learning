import "./contacts.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

const Contacts = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [show, setShow] = useState(true);

    const loggedUserNav = () => {
        return (
            <button
                onClick={() => navigate("/home")}
                className="contactNavButton"
            >
                Home
            </button>);
    }

    const guestUserNav = () => {
        return (
            <>
                <button
                    onClick={() => navigate("/login")}
                    className="contactNavButton"
                >
                    Sign in
                </button>

                <button
                    onClick={() => navigate("/register")}
                    className="contactNavButton"
                >
                    Sign up
                </button>
            </>);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setShow((old) => !old);
    }

    return (
        <>
            <div className="frontB"></div>
            <img className="contactImg" src="/img/contactPage.webp" alt="" />

            <div className="welcomeOverlay">
                
                <div className="contactNavigation">
                    {user.email ?
                        loggedUserNav()
                        :
                        guestUserNav()
                    }
                </div>
                
                <div className="contactPageContainer">
                    <div className="titleWelcome">
                        Do not bother to <br></br> contact us
                    </div>

                    <div className="contactFormContainer">
                        {
                            show ?
                                <form onSubmit={submitHandler} className="contactForm" action="">

                                    {user.email ?
                                        <label className="labelForm pad" htmlFor="subject">
                                            We will answer you as soon as possible
                                        </label>
                                        :
                                        (<>
                                            <label className="labelForm" htmlFor="subject">
                                                Enter your e-mail
                                            </label>
                                            <input
                                                className="contactTextArea"
                                                id="subject"
                                                name="subject"
                                                placeholder="email@address.com" />
                                        </>)
                                    }

                                    <textarea
                                        className="contactTextArea"
                                        id="subject"
                                        name="subject"
                                        placeholder="Ask your question here..."
                                    ></textarea>

                                    <input className="contactSubmit" type="submit" value="Send" />
                                </form>
                                :
                                <label className="submissionMessage" htmlFor="subject">
                                    Thanks for your question!<br></br> We will answer with an email in 1 business day!
                                </label>
                        }
                    </div>
                </div>

                <Footer className={"contactsFooter"} />
            </div>
        </>
    );
}

export default Contacts;

