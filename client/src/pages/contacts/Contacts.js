import "./contacts.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Contacts = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

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
                        <form className="contactForm" action="">



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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;

