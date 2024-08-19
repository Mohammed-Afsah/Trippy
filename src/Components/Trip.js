import React from 'react'
import TripData from './TripData'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'
function Trip() {
  return (
    <div className='trip'>
     <h1>Recent Trips</h1>
     <p>You can discover unique destinations using Google Maps.</p>
     <div className="tripcard">
        <TripData 
           image={Trip1}
           heading="Trip In Indonesia"
           text="Indonesia, a sprawling archipelago of over 17,000 islands, is a kaleidoscope of experiences waiting to be explored. From the vibrant culture and stunning landscapes to the warm hospitality of its people, a trip to Indonesia promises an unforgettable adventure."
        />
          <TripData 
           image={Trip2}
           heading="Trip In Malaysia"
           text="Malaysia is a tropical paradise with a mix of cultures and stunning landscapes. Explore bustling cities like Kuala Lumpur with its iconic twin towers, relax on beautiful islands like Langkawi, or discover lush rainforests filled with wildlife. You can enjoy delicious food, shop for unique souvenirs, and experience warm Malaysian hospitality. It's a perfect destination for adventure, relaxation, or culture."
        />
          <TripData 
           image={Trip3}
           heading="Trip In France"
          text="France is a magical country with beautiful cities, yummy food, and fancy clothes. You can see the Eiffel Tower, eat delicious croissants, and visit big museums. It's like a storybook with castles and gardens. You'll feel like a princess or prince!"
        />
     </div>
    </div>
  )
}

export default Trip