import Image from 'next/image';
import { useEffect, useState } from 'react';
import notFound from '/public/nft/notFound.png';

export default function ImageFallback({ src, fallbackSrc, ...rest }) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(notFound);
      }}
    />
  );
}
