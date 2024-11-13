'use client';

import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { TransformWrapper } from 'react-zoom-pan-pinch';

import { Button } from '@/components/ui/button';
import { CustomizeFormWrapper } from '@/features/customize-shirt/components/customize-form-wrapper';
import { PreviewControl } from '@/features/customize-shirt/components/preview-control';
import { useTabs } from '@/stores/tab-store';

const CustomizeShirt = () => {
  const { nextTab } = useTabs();
  const screenshotRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const captureScreenshot = () => {
    if (screenshotRef.current)
      html2canvas(screenshotRef.current, {
        useCORS: true,
        backgroundColor: null,
        width: 400,
        height: 500,
        windowHeight: 700,
        windowWidth: 700,
        scale: 0.5,
      }).then((canvas) => {
        const image = canvas.toDataURL('image/png'); // Base64 image
        console.log(image);
      });
  };

  return (
    <div className="flex size-full flex-col lg:flex-row">
      <div className="flex-1 bg-secondary">
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          centerOnInit
          maxScale={4}
        >
          <PreviewControl screenshotRef={screenshotRef} />
        </TransformWrapper>
      </div>
      <div className="relative h-full flex-1">
        <div className="w-full p-10 lg:max-h-[calc(100%-64px)] lg:overflow-y-auto">
          <CustomizeFormWrapper />
        </div>
        <div className="fixed inset-x-0 bottom-0 flex h-16 items-center bg-primary lg:absolute">
          <Button variant="outline" className="ml-auto mr-8" onClick={nextTab}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeShirt;
