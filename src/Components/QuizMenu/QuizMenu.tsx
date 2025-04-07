import { Link } from "react-router-dom"
import { useEffect } from "react"
import style from "./Quiz.module.css"

const QuizMenu = () => {
    useEffect(() => {}, [])
    console.log("hello world");
    
    return (
        <main>
            <nav className={style.container}> 
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
        </main>
    )
}
export default QuizMenu