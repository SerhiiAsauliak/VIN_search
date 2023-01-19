import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectSearchResults } from "../store/search/searchSlice"
import arrowRight from "../assets/arrow-right.svg";


const VariablesList = () => {
    const { searchResults, status } = useSelector(selectSearchResults)

    const list = searchResults.length > 0 && searchResults.map(el => {
        return el.Results.map(value => {
            return value.Value ? <li><span>{value.Variable}</span>: {value.Value}</li> : null
        })
    })

    return (
        <div className="container">
            <div className="results-header">
            {status === 'fulfilled' &&
                <>
                    <h3>Search results:</h3>
                    <div>
                        <Link to='/variables'>See all features</Link>
                        <img
                            style={{ marginLeft: "8px" }}
                            src={arrowRight}
                            alt="arrowRight"
                        />
                    </div>
                </>
            }
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}
export default VariablesList