import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
  },
];

class ProjectGallery2 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery2 ;