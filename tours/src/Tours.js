import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  
  return(
    <section>
      <div className=" text-center">
        <h3 className="text-center d-inline-block p-1 mb-3 myTour" style={{}}>Our Tours</h3>
      </div>
      <div>
        {
          tours.map(tour=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          })
        }
      </div>
    </section>
  )
};

export default Tours;
