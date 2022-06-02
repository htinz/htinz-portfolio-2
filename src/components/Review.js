import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, img, text} = people[index];
    const [readMore, setReadMore] = useState(false);

    const checkNumber = (number) => {
        if (number > people.length - 1 ) {
            return 0;
        }
        if (number < 0 ) {
            return people.length - 1;
        }
        return number;

    }

    const nextPerson = () => {
        setIndex ((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);

        })
    }

    const prevPerson = () => {
        setIndex ((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);

        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
        
    }


    return (
        <main>
            <section className="ctn">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>
                </div>
                <div className="review">
                    <div className="img-container">
                        <span className="quote-icon">
                            <FaQuoteRight/> 
                        </span>
                        <img src={img} alt={name} className="person-img"/>
                    </div>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="text">{readMore ? text : `${text.substring(0, 100)} ... `}
                    <button className="read-more" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button> 
                    </p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft/>
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight/>
                        </button>
                    </div>
                    <button className="random-btn" onClick={randomPerson}>surprise me</button>
                </div>
        </section>
      </main>






    )
}

export default Review;
