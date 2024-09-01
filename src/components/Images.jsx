import { useState } from "react";
import { ImCross } from "react-icons/im";

function images ({images}){

    const [lightBox , setLightBox] = useState(false)
    const [srcOfLightbox , setSrcOfLightbox] = useState('')

    const handlesImageClicked = (nameOfImage) => {
          setSrcOfLightbox(nameOfImage)
          setLightBox(true)
          window.scrollTo({top:0, left:0,behavior:"instant"});
    }

    return(
        <>
         <div className={lightBox ? "Lightbox-On" : "Lightbox"}>
              <img src={srcOfLightbox}/>
               <button className="close-lightbox" onClick={() => setLightBox(false)}><ImCross /></button>
         </div>

         <div className="main-container">
          {images.map((image) => (
            <div className="image-card" key={image.id}>
              <img id= {image.id} src={`${image.nameOfImage}`} onClick={() => handlesImageClicked(image.nameOfImage)}/>
            </div>
          ))}
        </div>
        </>
    )
}

export default images;