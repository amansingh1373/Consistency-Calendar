import SearchBar from "./SearchBar";
import { iconData } from "../data/MaterialIcons-Regular";
import InputText from "./InputText";
import ActionButton from "./ActionButton";

const AddHabitModal = () => {
    return ( 
        <div className="transparent-bg">
            <div className="habit-modal">
                <h1>Add a Habit</h1>
                <div className="habit-form">
                    <div className="input-wrapper">
                        <InputText label="Habit Name" id="habit-name-input" />
                    </div>

                    <div className="habit-icon-select">
                        <label for="search-input" className="input-label">Select Icon for the Habit</label>
                        <SearchBar id="search-input"/>
                        <div className="icons-container">
                            {iconData.map((iconName) => {
                                return (
                                    <span class="icon material-symbols-outlined">{iconName.name }</span>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="action-button-container">
                    <div className="action-button-wrapper">
                        <ActionButton content="cancel" color="gray"/>
                    </div>
                    <div className="action-button-wrapper">
                        <ActionButton content="save" color="blue"/>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default AddHabitModal;