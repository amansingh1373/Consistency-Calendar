const InputText = ({label,id}) => {
    return ( 
        <div className="input-container">
            <label for={id} className="input-label">{label}</label>
            <input type="text" className="input-text" id={id} placeholder={label} />
        </div>
    );
}

export default InputText;