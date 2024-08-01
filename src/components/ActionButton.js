const ActionButton = ({content,color}) => {
    return (
        <button className={"action-button "+ color}>{content}</button>
    );
}

export default ActionButton;