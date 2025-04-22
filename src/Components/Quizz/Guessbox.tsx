import style from "./Quizz.module.css"
import { useState } from "react";
import { useCombobox } from "downshift";
interface GuessboxProps {
    items: string[];
    dailyItem: string;
}
const Guessbox: React.FC<GuessboxProps> = ({ items, dailyItem }) => {
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function getItemsFilter(inputValue: string) {
    const lowerCasedInputValue = inputValue.toLowerCase()
    
    return function itemsFilter(items: string) {
      return (
        !inputValue ||
        items.toLowerCase().includes(lowerCasedInputValue)
      )
    }
  }
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getItemProps,
      } = useCombobox({
        onInputValueChange({inputValue}) {
          setFilteredItems(items.filter(getItemsFilter(inputValue)))
        },
        items: filteredItems,
        onSelectedItemChange({selectedItem}) {
          if (selectedItem && !selectedItems.includes(selectedItem)) {
            setSelectedItems(prev => [...prev, selectedItem]);
          }
        },
        itemToString(item) {
          return item ? item : ''
        },
      })    
    return <section className={style.guessbox}>
        <input placeholder="Devine le personnage !" {...getInputProps()} />
        <button {...getToggleButtonProps()} >{isOpen ? <>&#8593;</> : <>&#8595;</>}</button>
      <div className={style.optionsList}>
        <ul {...getMenuProps()}>
            {isOpen && filteredItems.map((item, index) => (
              <li key={item} {...getItemProps({item, index})}>
                    {item}
              </li>
            ))}
        </ul>
      </div>
      <section className={style.selectedList}>
        <ul>
            {selectedItems.map((item) => (
              <li key={item} className={item === dailyItem ? style.correct : style.incorrect}>{item}</li>
            ))}
        </ul>
      </section>
    </section>
}
export default Guessbox;