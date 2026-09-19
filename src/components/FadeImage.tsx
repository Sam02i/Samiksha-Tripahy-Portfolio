import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type FadeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Classes for the wrapping div (aspect ratio, rounding, sizing). */
  wrapperClassName?: string;
};

// Hardcoded light-grey fallback so the placeholder never depends on a
// theme CSS variable that might not be defined (which could otherwise
// leave the box fully transparent — showing whatever's behind it, black
// included — instead of a visible skeleton).
const SKELETON_COLOR = "#e5e7eb";

/**
 * Drop-in replacement for <img> that shows a soft pulsing skeleton until the
 * image has actually loaded, then cross-fades into view. Use this anywhere
 * a real photo/screenshot is being rendered (portraits, project covers,
 * resume page, carousel cards) — decorative/inline SVG-style sketches don't
 * need it.
 */
export function FadeImage({
  className,
  wrapperClassName,
  onLoad,
  alt,
  ...props
}: FadeImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // If the image is already in the browser cache, it can finish loading
  // before React even attaches the onLoad listener below — which would
  // otherwise leave it stuck at opacity-0 (looking blank/black) forever.
  // Checking `.complete` on mount catches that case.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName ?? ""}`}
      style={{ backgroundColor: SKELETON_COLOR }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: SKELETON_COLOR }}
          aria-hidden="true"
        />
      )}
      <img
        {...props}
        ref={imgRef}
        alt={alt}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={`transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"
          } ${className ?? ""}`}
      />
    </div>
  );
}