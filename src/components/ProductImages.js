import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ProductImages = ({ images, width, height }) => {
  // as most products only have one image
  // for convenience, I just get the first image
  const image = images.edges[0].node;
  return (
    <div className="w-full overflow-hidden">
      <Image
        loader={imageLoader}
        src={image.originalSrc}
        alt={image.altText}
        width={width}
        height={height}
        layout={"responsive"}
      />
    </div>
  );
};

export { ProductImages };
