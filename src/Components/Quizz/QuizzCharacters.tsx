import jsonData from '../../data/characters.json'
import style from "./Quizz.module.css"
import Guessbox from './Guessbox';
const QuizzCharacters = () => {
    console.log("jsonData: ", jsonData);
interface CharacterItem {
    name: string,
    clothingColor: string,
    role: string,
    parutionYear: number,
    gender: string,
    hairColor: string,
    type: string,
    continent: string
}
const items: CharacterItem[] = jsonData;
console.log("items: ", items);
const charactersNames = [...new Set(jsonData.map((character) => (character.name)))] 

    //& Functions to pick the character of the day ============================================
    function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
      }
      function getDailyCharacter(data: CharacterItem[]): CharacterItem {
        const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
        const hash = hashString(today);
        const index = hash % data.length;
        return data[index];
      }
      const dailyCharacter = getDailyCharacter(items);
    //& ===================================================================================
return (
    <>
        <section className={style.character}>
        <h2>Devine les personnages Disney du jour !</h2>

        </section>
        <Guessbox items={charactersNames} dailyItem={dailyCharacter.name} />
    </>
)

}

export default QuizzCharacters;