import styled from 'styled-components';
import COLORS from '../../Constants/Colors';
const NavbarStyle = styled.div`
width:100%;
background:${COLORS.primary}
`

const Navbar = () => {
    return (
        <NavbarStyle>
            <h2> Read.it </h2>
        </NavbarStyle>
    )
}
export default Navbar;