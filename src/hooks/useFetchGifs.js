import { useEffect, useState } from "react";
import { getGrifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getImages = async () => {
    let newImages = await getGrifs(category);
    setImages(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading
  };
};
