import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";
import { useState } from "react";

const Gallery = ({ images }: { images: Array<string> }) => {
  const [toggle, setToggle] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const lightBoxHandler = (state: boolean, newImageIndex: number) => {
    setToggle(state);
    setImageIndex(newImageIndex);
  };

  return (
    <div className="flex-1 flex flex-col gap-8 h-full pt-32">
      <h1 className="text-3xl">Galeria</h1>
      <div className="relative">
        <Image
          src="/backgrounds/chicken.png"
          alt="lz-churrasco-e-eventos-logo"
          fill
          className="fixed h-64 w-64 rounded-full top-20 right-20 opacity-75"
        />
      </div>
      <ul className="mx-auto flex justify-center flex-wrap gap-4 pb-8">
        {images.map((el: string, index) => (
          <li
            key={el}
            className="relative w-40 h-40"
            onClick={() => lightBoxHandler(true, index)}
          >
            <Image
              className="rounded-md cursor-pointer relative w-full h-full transition-all hover:scale-110 hover:brightness-50"
              fill
              sizes="100%"
              alt={"alt"}
              src={`/images/${el}`}
            />
          </li>
        ))}
      </ul>
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={images.map((el, i) => ({
          id: i,
          image: `/images/${el}`,
          description: `Imagem de número ${i}`
        }))}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setImageIndex}
        imageIndex={imageIndex}
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/images");
  const images = await fs.readdir(imageDirectory);

  return {
    props: {
      images
    }
  };
};

export default Gallery;
