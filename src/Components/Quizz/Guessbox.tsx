import { useState } from 'react';
import style from "./Quizz.module.css";
interface GuessboxProps {
    items: string[];
    dailyItem: string;
  }
const Guessbox: React.FC<GuessboxProps> = ({ items, dailyItem }) => {
    console.log("items: ", items);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    // const [error, setError] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        console.log("input.value: ", input.value);
        setInputValue(input.value);
        
        //? regex
        // if (!/^[^0-9.]*$/.test(input.value)) {
        //     setError('Tu ne peux écrire qu’avec des lettres !');
        // } else {
        //     setError('');
        // }
        // input.value = input.value.replace(/^[^0-9.]*$/g, '');
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("e.currentTarget.value: ", e.currentTarget.value);
        
        // selectedItems.push(e.currentTarget.value);
        setSelectedItems([...selectedItems, inputValue]);
        console.log("selectedItems: ", selectedItems);
        if (e.currentTarget.value === dailyItem) {
            console.log("true ! :-D");
        } else {
            console.log("false :'-(");
        }
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
            {/* {selectedItems.map((item) => (
                <div key={item}>{item}</div>
                ))} */}
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