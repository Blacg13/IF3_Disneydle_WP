import { Link } from "react-router-dom"
import { useEffect } from "react"
import style from "./QuizMenu.module.css"

const QuizMenu = () => {
    useEffect(() => {}, [])

    return (
        <>
            <h2 className={style.menuTitle}>Devine les personnages Disney !</h2>
            <nav className={style.quizznav}> 
                <ul>
                    <li>
                        <Link to="/characters" >
                            Personnages
                        </Link>
                    </li>
                    <li>
                        <Link to="/quotes" >
                            Citations
                        </Link>
                    </li>
                    <li>
                        <Link to="/songs" >
                            Chansons
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default QuizMenu