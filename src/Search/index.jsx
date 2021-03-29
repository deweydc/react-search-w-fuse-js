import style from './search.module.css';

// 

const SearchBar = ({ onChange, placeholder }) => {
    return (
        <div className={style.Search}>
            <span className={style.SearchSpan}>
                {/* <FaSearch /> */}
            </span>
            <input
                className={style.SearchInput}
                type="text"
                onChange={onChange}
                //pass onChange from App.js
                placeholder={placeholder}
            //pass placeholder passed from App.js 
            />
        </div>
    );
};

export default SearchBar;