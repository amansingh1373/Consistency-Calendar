import HabitCard from "./components/HabitCard";
import AddHabitModal from "./components/AddHabitModal";

const HabitList = () => {
    return ( 
        /*this is needed otherwise HabitCards would take height depending upon the remaning space*/
        <div className="habit-container-wrapper">
            {/* <div className="habit-container">
                <HabitCard icon="add_circle" iconName="Add"/>
                <HabitCard icon="hotel" iconName="Sleep"/>
            </div> */}
            {/* <AddHabitModal /> */}
        </div>
    );
}
 
export default HabitList;