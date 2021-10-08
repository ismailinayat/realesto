import {useState} from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import './navbar.scss';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="navbar">
            <Container sx={{
                paddingLeft: {
                    md: '36px'
                },
                paddingRight: {
                    md: '36px'
                },

            }}>
                <Grid container   
                
                    alignItems="center"
                    justifyContent="space-between"
                    
                    >

                    <Grid item sx={{
                        fontSize: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#eabd23',
                        marginRight: 'auto',
                        cursor: 'pointer',
                    }} >
                        Realesto
                    </Grid>

                    <Grid item sx={{
                        display: {
                            xs: 'none',
                            md: 'block'

                        },




                    }} className='nav__menu'>
                        <ul className="nav__menu-links">
                            <li className="nav__link">Products</li>
                            <li className="nav__link">About Us</li>
                            <li className="nav__link">Our Team</li>
                            <li className="nav__link">FAQ</li>
                        </ul>
                    </Grid>

                    <Grid item sx={{
                        display: {
                            xs: 'none',
                            md: 'inline-block',
                            marginLeft: 'auto',
                        },


                    }} >
                        <Button variant='contained' sx={{
                            backgroundColor: "#eabd23",
                            color: '#200505ad',
                        }}>Sign In</Button>
                    </Grid>

                    <Grid item>
                        <MenuIcon sx={{
                            height: '2rem',
                            width: '2rem',
                            color: '#ffffffe1',
                            cursor: 'pointer',
                            display: {
                                md: 'none',
                            },
                            
                        }} onClick={() => setMenuOpen(!menuOpen)}></MenuIcon>
                    </Grid>

                    <Paper >

                    </Paper>

                </Grid>
                
            </Container>

            
            {menuOpen && <Paper className="dropdown">

                        <ul className="mobile__menu-links">
                            <li className="mob__link">Products</li>
                            <li className="mob__link">About Us</li>
                            <li className="mob__link">Our Team</li>
                            <li className="mob__link">FAQ</li>
                            <li className="mob__link">Sign In</li>
                        </ul>

                        <Button variant="contained" sx={{
                            padding: '0.7rem 4rem',
                            fontSize: '1rem',
                        }}>Invest Now</Button>
            </Paper>}
            </div>
            
    )
}

export default Navbar