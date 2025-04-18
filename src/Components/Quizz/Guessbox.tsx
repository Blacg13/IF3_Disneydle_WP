import { useState } from "react";
import { useCombobox } from "downshift";
// import style from "./Quizz.module.css";
interface GuessboxProps {
    items: string[];
    dailyItem: string;
}
const Guessbox: React.FC<GuessboxProps> = ({ items, dailyItem }) => {
    console.log("items: ", items);
    
    function getItemsFilter(inputValue: string) {
        const lowerCasedInputValue = inputValue.toLowerCase()
      
        return function itemsFilter(items: string) {
          return (
            !inputValue ||
            items.toLowerCase().includes(lowerCasedInputValue)
          )
        }
      }
    
    const [filteredItems, setFilteredItems] = useState<string[]>([]);
    
    
    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        // highlightedIndex,
        getItemProps,
        // selectedItem,
      } = useCombobox({
        onInputValueChange({inputValue}) {
          setFilteredItems(items.filter(getItemsFilter(inputValue)))
        },
        items,
        itemToString(item) {
          return item ? item : ''
        },
      })

    return <>
        <label {...getLabelProps()}>
            Devine le personnage à l'origine de cette citation :
        </label>
        <input placeholder="Devine le personnage" {...getInputProps()} />
        <button {...getToggleButtonProps()} >{isOpen ? <>&#8593;</> : <>&#8595;</>}</button>
        <ul {...getMenuProps()}>
            {isOpen && filteredItems.map((item, index) => (
                <li {...getItemProps({item, index})}>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </>



    // const [inputValue, setInputValue] = useState<string>('');
    // const [filteredItem, setFilteredItem] = useState<string>('');
    // const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    // // const [error, setError] = useState<string>('');

    // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const input = e.currentTarget;
    //     setInputValue(input.value);
        
    //     //? regex
    //     // if (!/^[^0-9.]*$/.test(input.value)) {
    //     //     setError('Tu ne peux écrire qu’avec des lettres !');
    //     // } else {
    //     //     setError('');
    //     // }
    //     // input.value = input.value.replace(/^[^0-9.]*$/g, '');

    //     const filtered = items.filter((item) => item.toLowerCase().includes(input.value.toLowerCase()));
    //     console.log("filtered: ", filtered);
    //     setFilteredItem(filtered[0]);
    //     console.log("filteredItem: ", filteredItem);
    // }
    // const preOptionsList = [...items.filter((option) => inputValue.includes(option))]
    // const optionsList = [...preOptionsList.filter((option) => !selectedItems.includes(option))];
    // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();        
    //     setSelectedItems([...new Set([...selectedItems, filteredItem])]);
    //     console.log("selectedItems: ", selectedItems);
        
    // }
    // return (
    //     <>
    //     <section className={style.guessbox}>
    //         <form>
    //             <input type="text" name="guessbox" list="itemsList" onInput={handleInput}/>
    //                 {/* <datalist id='itemsList'>
    //                     {items.filter((item) => !selectedItems.includes(item)).map((item) => (
    //                         <option key={item} value={item} />
    //                     ))}
    //                 </datalist> */}
    //             <button onClick={handleClick}>Valider</button>
    //             <ul>
    //                 {optionsList.map((option) => (
    //                     <li key={option}>{option}</li>))}
    //             </ul>
    //             {/* {error && <p className={style.red}>{error}</p>} */}
    //         </form>
    //     </section>
    //     <div>
    //         <ul>
    //         {selectedItems.map((item) => (
    //             item ? <li className={dailyItem === item ? style.green : style.red} key={item}>{item}</li> : null
    //         ))}
    //         </ul>
    //     </div>
    //     </>
    // )
}
export default Guessbox;