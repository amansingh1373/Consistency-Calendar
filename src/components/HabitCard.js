const HabitCard = ({icon,iconName}) => {
    return ( 
        /*this is needed to add margin with the help of padding, we need this because of border-box property */
        <div className="margin-wrapper">
            <div className="habit-card">
                <div className="habit-icon">
                    <span class="material-symbols-outlined">
                        {icon}
                    </span>
                </div>
                <div className="habit-name">{iconName}</div>
            </div>
        </div>
    );
}
 
export default HabitCard;