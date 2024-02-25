import { useNavigate } from "react-router-dom"
import { useState } from "react"

function NavBar () {
    const [navActive, setNavActive] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        setNavActive(!navActive)
    }

    const handleNavigation = (event) => {
        switch (event.target.innerText) {
            case "opiskelu":
                navigate("/opiskelu/")
                break
            case "johdanto":
                navigate("/")
                break
            case "asuminen":
                navigate("/asuminen/")
                break
            case "matkustaminen":
                navigate("/matkustaminen/")
                break
        }
    }

    return (
        <div className="navbar">
            <p id="navigator" onClick={handleClick}>nav</p>
            {navActive &&
            <>
                <p onClick={handleNavigation}>johdanto</p>
                <p onClick={handleNavigation}>opiskelu</p>
                <p onClick={handleNavigation}>asuminen</p>
                <p onClick={handleNavigation}>matkustaminen</p>
            </> 
            }
        </div>
    )
}

export default NavBar