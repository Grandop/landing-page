import Image from "next/image";

type Props = {
  alt: string;
  image: any;
}

export const ImageButton = ({ alt, image }: Props) => {
  return(
    <button>
      <Image src={image} alt={alt}/>
    </button>
  );
}