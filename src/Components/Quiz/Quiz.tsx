import { useEffect } from "react"
import style from "./Quiz.module.css"

const Quiz = () => {
    useEffect(() => {}, [])
    console.log("hello world");
    
    return (
        <section className={style.container}>
        <div className={style.quiz}>Hello World</div>
        </section>
    )
}
export default Quiz