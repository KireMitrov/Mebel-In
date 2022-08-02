import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function TvKomodi(){
    const fadeImages = [
        {
        url: 'tvkomoda1.jpg',
        description:"materijal, boja "
      },
      {
        url: 'tvkomoda2.jpg',
        description:"materijal, boja "
      }
      ];
    return(
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={`images/tv-komodi/${fadeImage.url}`} />
                  <p>{fadeImage.description}</p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
    )
}

export default TvKomodi