import { useState } from "react";
import "./BannerImage.scss"

export const BannerImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`banner-image-container ${isLoaded ? 'loaded' : 'loading'}`}>
      <img
        className="banner-image__mobile"
        src="./programmer.jpg"
        alt="sameshostee-programmer"
        onLoad={handleImageLoad}
      />
    </div>
  )
}