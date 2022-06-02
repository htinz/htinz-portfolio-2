import React from "react"

export default function Contact(){
    return (
        <>
            <head>
                <title>create contact form</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <section className="contact">
            <div className="sub-title">
                <h1>contact form</h1>
                <p>lorem ipsum</p>
            </div>
            <div id="contact-container">
                <div className="contact-info">
                    <h4>
                        contact information
                    </h4>
                    <p>Fill up the form and then click "send"</p>
                    <div className="icon-text">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone.png"/>
                        <span>+44-07564035273</span>
                    </div>
                    <div className="icon-text">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-advertising-kiranshastry-lineal-kiranshastry-1.png"/>
                        <span className="contact-email">htinzaw1@gmail.com</span>
                    </div>
                    <div className="icon-text">
                        <img src="https://img.icons8.com/ios-filled/50/000000/address--v1.png"/>
                        <span>9 caspian way, RM19 1LA</span>
                    </div>
                    <div className="social-media">
                        <a href="#" className="icon-circle">
                            <a href="https://www.facebook.com/htin.zaw.12"><img src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png"/></a>
                        </a>
                        <a href="#" className="icon-circle">
                            <a href=""><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>
                        </a>
                        <a href="#" className="icon-circle">
                            <a href="https://www.instagram.com/htinzaw_hz/"><img src="https://img.icons8.com/offices/30/000000/instagram-new.png"/></a>
                        </a>
                        <a href="#" className="icon-circle">
                            <a href="https://www.linkedin.com/in/htin-zaw-7a21721a/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
                        </a>
                    </div>
                </div>
                <form>
                    <div className="col">
                        <div className="form-group">
                            <label>first name</label>
                                <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>last name</label>
                                <input type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>e-mail</label>
                                <input type="email" />
                        </div>
                        <div className="form-group">
                            <label>phone</label>
                                <input type="tel" />
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="form-group">
                            <label>What Type of Website Do You Need?</label>
                            <div id="radio-buttons">
                                <div className="radio-button">
                                    <input type="radio" id="radiopersonal"name="type" value="personal"/>
                                    <label for="radiopersonal">personal</label>
                                </div>
                                <div className="radio-button">
                                    <input type="radio" id="radioecomerce" name="type" value="ecomerce"/>
                                    <label for="radioecomerce">E-comerce</label>
                                </div>
                                <div className="radio-button">
                                    <input type="radio" id="radiolandingpage"name="type" value="landingpage"/>
                                    <label for="radiolandingpage">landing page</label>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col">
                        <div className="form-group">
                            <label>message</label>
                            <textarea>
                                <input type="text"/>
                            </textarea>
                        </div>
                    </div> 
                    <div className="col">
                        <div className="form-group">
                            <button className="send-btn">Send</button>
            
                        </div>
                    </div>
                </form>
            </div>
            </section>
        </>
    )
}