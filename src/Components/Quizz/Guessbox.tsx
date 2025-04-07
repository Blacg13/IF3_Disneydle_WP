import { useState } from 'react';
import style from "./Quizz.module.css";
interface GuessboxProps {
    items: string[];
    dailyItem: string;
  }
const Guessbox: React.FC<GuessboxProps> = ({ items, dailyItem }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredItem, setFilteredItem] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    // const [error, setError] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        setInputValue(input.value);
        
        //? regex
        // if (!/^[^0-9.]*$/.test(input.value)) {
        //     setError('Tu ne peux écrire qu’avec des lettres !');
        // } else {
        //     setError('');
        // }
        // input.value = input.value.replace(/^[^0-9.]*$/g, '');

        const filtered = items.filter((item) => item.toLowerCase().includes(input.value.toLowerCase()));
        console.log("filtered: ", filtered);
        setFilteredItem(filtered[0]);
        console.log("filteredItem: ", filteredItem);
        
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();        
        setSelectedItems([...new Set([...selectedItems, filteredItem])]);
        console.log("selectedItems: ", selectedItems);
        
    }
    return (
        <>
        <section className={style.guessbox}>
            <form>
                <input type="text" name="guessbox" list="itemsList" onInput={handleInput}/>
                    <datalist id='itemsList'>
                        {items.map((item) => (
                            <option key={item} value={item} />
                        ))}
                    </datalist>
                <button onClick={handleClick}>Valider</button>
                {/* {error && <p className={style.red}>{error}</p>} */}
            </form>
        </section>
        <div>
            <ul>
            {selectedItems.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>
        </div>
        </>
    )
}
export default Guessbox;