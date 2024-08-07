import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const startUrl = url.slice(0, index);
  const endUrl = url.slice(index);
  const croppedImageUrl = `${startUrl}crop/600/400/${endUrl}`;

  return croppedImageUrl;
};

export default getCroppedImageUrl;
