'use client';

import * as React from 'react';
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface LightboxWrapperProps {
  open: boolean;
  close: () => void;
  index: number;
  slides: SlideImage[];
}

export default function LightboxWrapper({ open, close, index, slides }: LightboxWrapperProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Captions, Thumbnails]}
      carousel={{ padding: 0, spacing: 0, imageFit: "contain" }}
      thumbnails={{ position: "bottom", width: 120, height: 80, border: 1, borderRadius: 4, padding: 4, gap: 16 }}
    />
  );
}
