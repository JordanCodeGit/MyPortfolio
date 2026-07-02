import Image from "next/image";
import { identity } from "@/lib/content";

/**
 * Jordan's portrait — a transparent cut-out, so it reads as standing in the
 * scene with no frame. `className` controls sizing per layout (the static hero
 * sizes by width; the park hero sizes by height).
 */
export default function HeroPhoto({ className = "" }: { className?: string }) {
  return (
    <Image
      src={identity.photo.src}
      alt={identity.photo.alt}
      width={identity.photo.width}
      height={identity.photo.height}
      priority
      quality={72}
      sizes="(max-width: 768px) 16rem, 40vw"
      className={`figure-graded object-contain ${className}`}
    />
  );
}
