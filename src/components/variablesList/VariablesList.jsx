import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectSearchResults } from "../../store/search/searchSlice"
import s from './variablesList.module.css'
import arrowRight from "../../assets/arrow-right.svg";
import { Preloader } from './../preloader/preloader';


const VariablesList = () => {
    const { searchResults, status} = useSelector(selectSearchResults)

    const list = searchResults.length > 0 && searchResults.map((el, index) => {
        return el.Results.map((value, index) => {
            return value.Value ? <li key={index}><span>{value.Variable}</span>: {value.Value}</li> : null
        })
    })

    if(status === 'pending') {
        return <Preloader/>
    }

    return (
        <div className="container">   
            {list &&
                <div className={s.results}>
                    <h3>Search results:</h3>
                    <div className={s.link}>
                        <Link to='/variables'>See all features</Link>
                        <img
                            style={{ marginLeft: "8px" }}
                            src={arrowRight}
                            alt="arrowRight"
                        />
                    </div>
                </div>
            }
            <ul>{list}</ul>
        </div>
    )
}
export default VariablesList