"use client"

import Spline from '@splinetool/react-spline';
import React, { useEffect, useRef, useState } from 'react';

export default function SplineWidget() {
  const splineInstance = useRef<any>({})
  const [isMobile, setIsMobile] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  async function onLoadSpline(splineApp: any) {
    splineInstance.current = splineApp
    setIsLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  function stop() {
    if (splineInstance.current)
      splineInstance.current.stop()
  }

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
  }, []);

  useEffect(() => {
    if (isMobile && isLoad)
      setTimeout(() => {
        stop()
      }, 1000);
  }, [isMobile, isLoad])

  return (
    <div className="h-96 -mx-6 mt-12 lg:mx-0 lg:mt-0">
      <Spline
        scene="https://prod.spline.design/ltpbbZTW79oVR2mI/scene.splinecode"
        onLoad={onLoadSpline}
      />
    </div>
  )
}