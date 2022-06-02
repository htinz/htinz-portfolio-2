import React from "react";
import Typed from "react-typed";


const LowerNavbar = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>"Technology Quotes to Inspire and Motivate"</h1>
                <Typed
                className="typeme-text"
                strings={[
                    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
                    "Let’s go invent tomorrow instead of worrying about what happened yesterday. – Steve Jobs",
                    "Innovation is the outcome of a habit, not a random act. – Sukant Ratnakar",
                    "Technology should improve your life… not become your life. – Billy Cox",
                    "It’s not that we use technology, we live technology. – Godfrey Reggio",
                    "Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road. – Stewart Brand",
                    "Technology is best when it brings people together. – Matt Mullenweg",
                    "Technology is a useful servant but a dangerous master. – Christian Lous Lange",
                    "The real problem is not whether machines think but whether men do. – B.F. Skinner"
                ]}
                typeSpeed={90}
                backSpeed={10}
                loop
                />
            </div>
        </div>
    )
}

export default LowerNavbar;