import HeroText from "./HeroText";
import HeroPhoto from "./HeroPhoto";

/**
 * Static / mobile hero — stacked split (photo on top, copy below). Used on the
 * reduced-motion and mobile fallback path, where the full-bleed park scene is
 * replaced by a simple readable layout. The desktop park composition lives in
 * HeroProjects.
 */
export default function Hero() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6">
      <div className="grid items-center gap-10 md:grid-cols-[7fr_5fr] md:gap-14">
        <div className="order-2 md:order-1">
          <HeroText align="left" />
        </div>
        <div className="order-1 mx-auto w-full max-w-[15rem] md:order-2 md:max-w-[18rem] md:justify-self-end">
          <HeroPhoto className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
