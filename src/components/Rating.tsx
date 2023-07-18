import { useState } from 'react';
import starIcon from '../assets/icon-star.svg';
import thankYouIllustration from "../assets/illustration-thank-you.svg";

interface ScoreProps {
    number: number
    score: number
    setScore: (score: number) => void
}

function Score({ number, score, setScore }: ScoreProps) {
    const handleClick = () => {
        setScore(number);
    }

    const state = (number === score) ? "selected" : "";


    return(
        <button className={`score ${state}`} onClick={handleClick}>
            {number}
        </button>
    )
}


interface ScoresProps {
    score: number
    setScore: (score: number) => void
}
function Scores({ score, setScore }: ScoresProps) {
    return(
        <div className="scores">
            <Score number={1} score={score} setScore={setScore}/>
            <Score number={2} score={score} setScore={setScore}/>
            <Score number={3} score={score} setScore={setScore}/>
            <Score number={4} score={score} setScore={setScore}/>
            <Score number={5} score={score} setScore={setScore}/>
        </div>
    )
}


export function Rating() {
    const [score, setScore] = useState(0);
    const [sent, setSent] = useState(false);
    const handleSubmit = () => {
        if (score != 0) setSent(true);
    }

    if (sent) {
        return(
            <div className='card center'>
                <div className='media'>
                    <img src={thankYouIllustration}/>
                </div>
                <div className='chip'>
                    You selected {score} out of 5
                </div>
                <div>
                    <h2>Thank you!</h2>
                </div>
                <div>
                    <p className='center'>
                        We appreaciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                    </p>
                </div>
            </div>
        )
    }

    return(
        <div className="card">
            <div className="favourite">
                <img src={starIcon}/>
            </div>
            <div>
                <h2>How did we do?</h2>
            </div>
            <div>
                <p>Please let us know how we did with your support request. All feedpack is appreaciated to help us improve our offering!</p>
            </div>
            <Scores score={score} setScore={setScore}/>
            <div>
                <button onClick={handleSubmit} className="submit">Submit</button>
            </div>
        </div>
    )
}