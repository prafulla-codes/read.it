import styled from 'styled-components';
import COLORS from '../../Constants/Colors';
import SIZES from '../../Constants/Sizes';
import FONTS from '../../Constants/Fonts';
const NavbarStyle = styled.div`
width:100%;
font-family:${FONTS.oregano};
height:${SIZES.navbar.height}rem;
color:${COLORS.primaryText};
padding:${SIZES.navbar.padding}rem;
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