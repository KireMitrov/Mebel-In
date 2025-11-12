import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function Plakari(){
    const fadeImages = [
        {
        url: 'plakar1.jpg',
        description:"materijal, boja "
      },
      {
        url: 'plakar2.jpg',
        description:"materijal, boja "
      },
      {
        url: 'plakar3.jpg',
        description:"materijal, boja "
      },
      {
        url: 'plakar4.jpg',
        description:"materijal, boja "
      },
      {
        url: 'plakar5.jpg',
        description:"materijal, boja "
        }
      ];
    return(
        <div className="slide-container">
          {/* <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={`images/plakari/${fadeImage.url}`} />
                  <p>{fadeImage.description}</p>
                </div>
              </div>
            ))}
          </Fade> */}
        </div>
      )
}

export default Plakari