import {useState} from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import '../index.css'

const NavContainer = styled.nav`
display:flex;
justify-content:space-between;
color:white;
background-color:var(--dark);

.nav-icon{
font-size:1.5rem;
padding:.5rem;
cursor:pointer;
}

a{
color:white;
}
`

const Nav = () => {
const [inputVisible,setInputVisible] = useState(false)

  return(
    <NavContainer>
      <div className='nav-icon'>
        <i className="bi bi-list"></i>
      </div>
      <Link to="/" className='nav-icon'>UPO</Link>
    <div onClick={()=>setInputVisible(true)} className='nav-icon'>
          <i className="bi bi-search"></i>
    </div>
      {inputVisible && <SearchBar inputVisible={inputVisible} setInputVisible={setInputVisible}/>}
    </NavContainer>
  )}
export default Nav;
