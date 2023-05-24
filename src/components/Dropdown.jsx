import { useState } from "react"
import '../styles/Dropdown.css'

export default function Dropdown(props){
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened(){
        setIsOpened(prevValue => !prevValue)
    }

    const elements = props.elements.map(el => {
        return ( 
        <div className="element" key={el.id}>
            <p className="element-name">{el.name}</p>
        </div>)
    })

    return (
        <div className="dropdown-container">
            <div className="dropdown-title" onClick={toggleIsOpened}>
                <p>{props.title}</p>
                <picture>
                    <source srcSet="/images/icon-arrow-dark.svg" media="(max-width: 950px)" />
                    <img 
                        src={`/images/icon-arrow-light.svg`} //src={`/images/icon-arrow-${isOpened ? "light" : "dark"}.svg`} 
                        className={`dropdown-icon ${isOpened ? "opened" : ""}`} 
                        alt='Arrow icon'
                    >
                    </img>
                </picture>
            </div>
            {isOpened && <div className={`dropdown-content ${props.title.toLowerCase()}`}>
                {elements}
            </div>}
        </div>
    )
}