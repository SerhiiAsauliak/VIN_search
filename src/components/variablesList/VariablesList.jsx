import { useSelector } from "react-redux"
import { selectSearchResults } from "../../store/search/searchSlice"
import s from './variablesList.module.css'
import arrowRight from "../../assets/arrow-right.svg";
import { Preloader } from './../preloader/preloader';
import { LinkComponent } from "../linkComponent/LinkComponent";


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
                    <LinkComponent 
                        text={'See all features'} 
                        link={'/variables'} 
                        img={arrowRight}
                        arrowDirection={'right'}
                    />
                </div>
            }
            <ul>{list}</ul>
        </div>
    )
}
export default VariablesList