import { useSelector } from "react-redux"
import { selectSearchResults } from "../store/search/searchSlice"

const VariablesList = () => {
    const { searchResults, status } = useSelector(selectSearchResults)

    const list = searchResults.length > 0 && searchResults.map(el => {
        return el.Results.map(value => {
            return value.Value ? <li>{`${value.Variable}: ${value.Value}`}</li> : null
        })
    })

    return (
        <div className="container">
            <h3>{status === 'fulfilled' ? 'Search results:' : ''}</h3>
            <ul>
                {list}
            </ul>
        </div>
    )
}
export default VariablesList