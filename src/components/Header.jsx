import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
     background: #060606;
     height: 9vh;
`


const Header = () =>{


    const logo = 'https://w1.pngwing.com/pngs/961/944/png-transparent-javascript-logo-codepen-hyperlink-html-black-and-white-line-symmetry-area.png'

    return(
        
        <Container position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={ {width: 40}} />
            </Toolbar>
        </Container>
        
    )
}

export default Header;