import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
  },
];

class ResumeGallery extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ResumeGallery ;