import HabitList from "./HabitList";

const Header = () => <div><h1 style={{textAlign:"center"}}>Consistency Calendar</h1></div>
const App = () => {
    return ( 
        <div className="app-container">
            <Header />
            <HabitList></HabitList>
        </div>
    );
}
 
export default App;