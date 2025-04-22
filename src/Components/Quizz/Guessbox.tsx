import style from "./Quizz.module.css"
import { useState } from "react";
import { useCombobox } from "downshift";
// import style from "./Quizz.module.css";
interface GuessboxProps {
    items: string[];
    dailyItem: string;
}
const Guessbox: React.FC<GuessboxProps> = ({ items, dailyItem }) => {
  console.log("dailyItem: ", dailyItem);
  
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

    return <section className={style.guessbox}>
      {/* <div> */}
        <input placeholder="Devine le personnage !" {...getInputProps()} />
        <button {...getToggleButtonProps()} >{isOpen ? <>&#8593;</> : <>&#8595;</>}</button>
      {/* </div> */}
      <div>
        <ul {...getMenuProps()}>
            {isOpen && filteredItems.map((item, index) => (
              <li key={item} {...getItemProps({item, index})}>
                    {item}
              </li>
            ))}
        </ul>
      </div>
    </section>
}
export default Guessbox;