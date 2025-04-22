import { Link } from "react-router-dom"
import { useEffect } from "react"
import style from "./QuizMenu.module.css"

const QuizMenu = () => {
    useEffect(() => {}, [])

    return (
        <>
            <h2>Devine les personnages Disney !</h2>
            <nav className={style.quizznav}> 
                <ul>
                        <Link to="/characters" >
                    <li>
                            Personnages
                    </li>
                        </Link>
                        <Link to="/quotes" >
                    <li>
                            Citations
                    </li>
                        </Link>
                        <Link to="/songs" >
                    <li>
                            Chansons
                    </li>
                        </Link>
                </ul>
            </nav>
        </>
    )
}
export default QuizMenu