import './team.scss'
import image1 from './team__images/image 1.png'
import image2 from './team__images/image 2.png'
import image3 from './team__images/image 3.png'
import image4 from './team__images/image 4.png'
//const colorDark = "#1f2937"
//const colorDarkLight = "rgb(55,65,81)"
//const colorPrimary = "#eabd23"
const members = [
    {id:1, name: "Saimon Harmer", position: 'CEO and Founder', image : image1},
    {id:2, name: "Aaron Nunez", position: 'Founder', image : image2},
    {id:3, name: "Jon Doe", position: 'AI Engineer', image : image3},
    {id:4, name: "Tom", position: 'Real Estate Expert', image : image4}
]
const Team = () => {
    return (
        <div className="team">
            
            <div className="team__heading">
                <h1 className="team__heading--primary">Meet Our Team</h1>
                <p className="team__heading--secondary">The most qualified and talented individuals</p>
            </div>

            <div className="team__cards">

                {members.map((member) => {
                    return (
                        <div key={member.id} className="team__cards--card">

                            <div className="img">
                                <img src={member.image} alt="" />
                            </div>

                            <div className="name">
                                <h4>{member.name}</h4>
                            </div>

                            <div className="position">
                                <p>{member.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team
