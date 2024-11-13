// import { renderPreview } from "@/utils/customize-shirt"
import { ZoomIn, ZoomOut } from 'lucide-react';
import { RefObject } from 'react';
import { TransformComponent, useControls } from 'react-zoom-pan-pinch';

import wfShirt from '@/assets/images/wf-shirt.png';
import { Button } from '@/components/ui/button';

type PreviewControlProps = {
  screenshotRef: RefObject<HTMLDivElement>;
};

export const PreviewControl = ({ screenshotRef }: PreviewControlProps) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="relative size-full rounded-lg">
      <div className="absolute bottom-4 left-4 z-20 flex items-center justify-center gap-6">
        <ZoomIn className="cursor-pointer" onClick={() => zoomIn()} />
        <ZoomOut className="cursor-pointer" onClick={() => zoomOut()} />
        <Button
          className="cursor-pointer select-none focus:!shadow-none"
          onClick={() => resetTransform()}
        >
          Reset
        </Button>
      </div>
      <TransformComponent>
        <div
          ref={screenshotRef}
          className="relative flex h-[75dvh] w-[calc(100vw-36px)]  items-center justify-center lg:w-[calc(50vw-36px)]"
        >
          {/* {renderPreview()} */}
          <img src={wfShirt.src} alt="fake wire frame shirt" />
        </div>
      </TransformComponent>
    </div>
  );
};
