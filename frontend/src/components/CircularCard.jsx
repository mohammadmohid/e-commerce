import Image from "next/image";
import Link from "next/link";

export const CircularCard = ({ name, imageSrc, href }) => {
  return (
    <div className="flex flex-col group items-center gap-3">
      <Link href={href || "/"}>
        <div className="relative overflow-hidden mx-auto rounded-[100%] aspect-square border-2 border-brand transition-shadow group-hover:shadow-lg">
          <Image
            src={imageSrc || "/placeholder-img.png"}
            alt={name}
            width={150}
            height={150}
            className="max-w-fit max-h-full object-cover"
            quality={100}
            placeholder="blur"
            blurDataURL="/placeholder-img.png"
          />
        </div>
      </Link>
      <Link href={href || "/"}>
        <h3 className="decoration-2 text-center decoration-brand group-hover:underline cursor-pointer">
          {name}
        </h3>
      </Link>
    </div>
  );
};
