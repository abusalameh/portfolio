/**
 * A tall, Retina-sharp screenshot of a live site that pans inside its frame.
 * Movement is a CSS translate (GPU-composited), so it runs at the display's full
 * frame rate and stays crisp at any size, unlike a screen-recorded video.
 */
export default function Shot({
  name,
  sizes,
  load = true,
  active,
}: {
  /** base name in /media/shots (e.g. "salmasoft") */
  name: string;
  /** CSS sizes hint so the browser picks the 1400w or 2400w file */
  sizes: string;
  /** false keeps the image unrequested until needed */
  load?: boolean;
  /** hero only: whether this slide is the one showing */
  active?: boolean;
}) {
  const base = `/media/shots/${name}`;
  return (
    <div
      className={`scroller${active === undefined ? "" : active ? " on" : ""}`}
      aria-hidden="true"
    >
      {load && (
        // biome-ignore lint/performance/noImgElement: static export, plain img is intended
        <img
          src={`${base}-1400.webp`}
          srcSet={`${base}-1400.webp 1400w, ${base}-2400.webp 2400w`}
          sizes={sizes}
          alt=""
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
