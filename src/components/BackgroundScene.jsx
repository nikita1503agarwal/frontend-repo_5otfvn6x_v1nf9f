import React from 'react';
import Spline from '@splinetool/react-spline';

const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" aria-hidden>
      {/* 3D Scene (Hero cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gradient overlay (does not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.6)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.22) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundScene;
