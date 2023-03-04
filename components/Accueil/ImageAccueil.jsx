import Gallerie from './Gallerie';
import images from '../../models/imageCategories';

export default function ImageGallery() {
  return (
    <>
      <Gallerie images={images} priority={true} />
    </>
  );
}
