import LightboxComponent, {
  LightboxExternalProps,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";

import LightboxNextImage from "./lightboxNextImage";

/**
 * The purpose of this intermediate component is to load the Lightbox and
 * its CSS dynamically only when the lightbox becomes interactive
 */
export default function Lightbox(
  props: Omit<LightboxExternalProps, "plugins">,
) {
  return (
    <LightboxComponent
      noScroll={{ disabled: true }}
      plugins={[Counter]}
      render={{ slide: LightboxNextImage }}
      styles={{
        root: { direction: "ltr" },
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        toolbar: { right: 0, left: "auto", flexDirection: "row-reverse" },
      }}
      {...props}
    />
  );
}
