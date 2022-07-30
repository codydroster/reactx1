//import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
  const onClick = () => {

    document.write("2")
    
  }

  const onClick2 = () => {
    document.write("719843")
  }
  
  
  return (
    <header className='header'>
    <h1> {title}</h1>
    <h1><Button color='green' text='2' onClick={onClick}/></h1>
    <h1><Button color='green' text='719843' onClick={onClick2}/></h1>
 
    </header>
  )
}

Header.defaultProps = {
  title: 'What number would you like to see?',
}


//CSS in JS
//const headingStyle = {
//  color: 'red', backgroundColor: 'black'
//}


export default Header