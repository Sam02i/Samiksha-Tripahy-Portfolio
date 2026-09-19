import { useState, type ImgHTMLAttributes } from "react";

type FadeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Classes for the wrapping div (aspect ratio, rounding, sizing). */
  wrapperClassName?: string;
};

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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName ?? ""}`}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-muted"
          aria-hidden="true"
        />
      )}
      <img
        {...props}
        alt={alt}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={`transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className ?? ""}`}
      />
    </div>
  );
}
