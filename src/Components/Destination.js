import React from 'react'
import '../Components/Destination.css'
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/5.jpg'
import Mountain4 from '../assets/8.jpg'
import DestinationData from './DestinationData'
function Destination() {
  return (
    <div className="destination">
    <h1>Popular Destinations</h1>
    <p>Tours give you the opprtunity to see a lot,within a time frame.</p>
    <DestinationData className="first-des" heading="Taal Volcano, Batangas" text="Taal Volcano is a renowned active volcano situated in Batangas province, Philippines. Known as the island within a lake, on an island,it's a captivating geological wonder. Despite its picturesque beauty, Taal has a history of violent eruptions, posing significant risks to nearby communities. As one of the world's smallest active volcanoes and a part of the Pacific Ring of Fire, it continues to be closely monitored by scientists for potential hazards." img1={Mountain1} img2={Mountain2}/>
    <DestinationData className="first-des-reverse" heading="Mt. Daguldul, Batangas" text="Mt. Daguldul in Batangas is a hiker's paradise offering a unique blend of mountain and coastal landscapes. Its summit rewards climbers with breathtaking panoramic views of the Batangas coastline, while the trail itself winds through lush woodlands and rocky terrains. Accessible to both beginners and experienced hikers, this mountain is a must-visit for those seeking an adventure that combines the thrill of climbing with the relaxation of beach life." img1={Mountain3} img2={Mountain4}/>
   </div>
  )
}

export default Destination