import "./contacts.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Contacts = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="frontB"></div>
            <img className="contactImg" src="/img/contactPage.webp" alt="" />

            <div className="welcomeOverlay">

                <div className="contactPageContainer">
                    <div className="titleWelcome">
                        Do not bother to <br></br> contact us
                    </div>

                    <div className="contactFormContainer">
                        <form className="contactForm" action="">

                            <label className="labelForm pad" htmlFor="subject">
                                We will answer you as soon as possible
                            </label>

                            {user.email ?
                                ''
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

{/* <Button
                            variant="outlined"
                            color="secondary"
                            className="button"
                            onClick={() => navigate("/login")}
                        >
                            Sign in
                        </Button>

                        <Button
                            variant="contained"
                            onClick={() => navigate("/register")}
                            color="secondary"
                            className="button"
                        >
                            Sign up
                        </Button> */}