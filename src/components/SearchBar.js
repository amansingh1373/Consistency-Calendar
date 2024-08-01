const SearchBar = ({id}) => {
    return (
        <div className="search-wrapper">
            <input type="text" name="searchInput" id={id} className="search-input" />
            <button className="search-button">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    );
}

export default SearchBar;