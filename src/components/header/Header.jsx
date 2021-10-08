//import bg from './AI image.jpg'
import nvidia from './images/brand/nvidia.png'
import rebel from './images/brand/rebel.png'
import combinator from './images/brand/combinator.png'
import launch from './images/brand/launch.png'
import hustleFund from './images/brand/hustleFund.png'
import './header.scss';

function Header() {
    return (
        <div className="header">

            <div className="header__background">
                

            </div>

            <div className="heading">

                <h1 className="heading__primary">

                    Investing in real estate is now easier than buying stocks
                </h1>
                <h3 className="heading__secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </h3>

                <button className="button__primary">
                    Invest Now
                </button>

            
            </div>
            <div className="brands">
                <div className="brands__brand">
                    <img className= "brands__brand-image" src={nvidia} alt="" />
                </div>
                <div className="brands__brand">
                    <img className= "brands__brand-image" src={rebel} alt="" />
                </div>
                <div className="brands__brand">
                    <img className= "brands__brand-image" src={combinator} alt="" />
                </div>
                <div className="brands__brand">
                    <img className= "brands__brand-image" src={launch} alt="" />
                </div>
                <div className="brands__brand">
                    <img className= "brands__brand-image" src={hustleFund} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
