import { useState}  from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/nav-logo.png'
import {VscThreeBars} from 'react-icons/vsc'

const Navbar = () => {
  const[menu,setMenu]= useState("home"); 
  const [ShowMenu, setShowMenu] = useState(true)
  const toggleMenu = ()=> {setShowMenu((ShowMenu)=>!ShowMenu)}
  return (

<div className='navbar'>
        <div className="nav-logo">
        <Link style={{textDecoration:'none'}} to='/Home'> <img src={logo} alt="" onClick={()=> {setMenu("Home")}}/>          </Link>
        <Link style={{textDecoration:'none'}} to='/Home'>  <p>Find Your Shoe PH</p>    </Link>

        </div>
        <div className="medianav-right">
        <div className='bars' onClick={toggleMenu} >
        <VscThreeBars/>
        </div>
          <div className="nav-right">
                <ul className='nav-menu' style={{display: ShowMenu? 'inherit': 'none'}}>
                    <li onClick={()=> {setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/Home'>Home</Link>{menu==="home" ?<hr/>:<></>}</li>
                    <li onClick={()=> {setMenu("CopGarden")}}><Link style={{textDecoration:'none'}} to='/CopGarden'>CopGarden</Link>{menu==="CopGarden" ?<hr/>:<></>}</li>
                    <li onClick={()=> {setMenu("ShoeGame")}}><Link style={{textDecoration:'none'}} to='/ShoeGame'>Shoe Game Manila</Link>{menu==="ShoeGame" ?<hr/>:<></>}</li>
                    <li onClick={()=> {setMenu("AfterMarket")}}><Link style={{textDecoration:'none'}} to='/AfterMarket'>After Market</Link>{menu==="AfterMarket" ?<hr/>:<></>}</li>
                    <Link to ='/Bookmark'> <button>Bookmarked</button> </Link>           
                </ul>  
          </div>
         
            </div>
</div>    
)
}
export default Navbar