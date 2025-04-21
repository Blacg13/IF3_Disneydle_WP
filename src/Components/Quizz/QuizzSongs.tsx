import jsonData from '../../data/songs.json'
// import style from "./Quizz.module.css"
const QuizzSongs = () => {
    interface SongItem {
        title: string;
        content: string;
        clip: string;
      }
      const items: SongItem[] = jsonData;
      //& Functions to pick the song of the day ============================================
      function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
      }
      function getDailySong(data: SongItem[]): SongItem {
        const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
        const hash = hashString(today);
        const index = hash % data.length;
        return data[index];
      }
      const dailySong = getDailySong(items);
      console.log(dailySong);
      //& ===================================================================================
      //& Youtube box with clues=============== =============================================


      //& Guessbox ==========================================================================

      
    return ( 
        <>
            <section>
            <h2>Quel est le nom de cette chanson (en anglais) ?</h2>
            <iframe src={"https://www.youtube.com/embed/" + "UEZdKKyG1IM"} height={"80%"} width={"50%"}></iframe>
            </section>
        </> 
    )
}

export default QuizzSongs;