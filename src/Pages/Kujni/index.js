import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


function Kujni(){
    const fadeImages = [
        {
        url: 'kujna1.jpg',
        description:"materijal, boja "
      },
      {
        url: 'kujna2.jpg',
        description:"materijal, boja "
      },
      {
        url: 'kujna3.jpg',
        description:"materijal, boja "
      },
      {
        url: 'kujna4.jpg',
        description:"materijal, boja "
      },
      {
        url: 'kujna5.jpg',
        description:"materijal, boja "
        }
      ];

    return(
        <div className="slide-container">
          {/* <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={`images/kujni/${fadeImage.url}`} />
                  <p>{fadeImage.description}</p>
                </div>
              </div>
            ))}
          </Fade> */}
        </div>
    )
}

export default Kujni