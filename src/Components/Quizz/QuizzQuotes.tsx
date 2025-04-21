import jsonData from '../../data/quotes.json'
import style from "./Quizz.module.css"
import Guessbox from './Guessbox';
const QuizzQuotes = () => {
  interface QuoteItem {
    content: string;
    character: string;
  }
  const items: QuoteItem[] = jsonData.quotesFR;
    //& Functions to pick the song of the day ============================================
      function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
      }
      function getDailyQuote(data: QuoteItem[]): QuoteItem {
        const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
        const hash = hashString(today);
        const index = hash % data.length;
        return data[index];
      }
      const dailyQuote = getDailyQuote(items);
    //& ===================================================================================
    const characters = [...new Set(jsonData.quotesFR.map((quote) => (quote.character)))]
    return ( 
    <>
        <section>
            <h2>De quel personnage est cette citation ?</h2>
            <p className={style.quote}>{dailyQuote.content}</p>
        </section>
        <Guessbox items={characters} dailyItem={dailyQuote.character} />
    </> 
)

}

export default QuizzQuotes;