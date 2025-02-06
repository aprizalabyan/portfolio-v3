"use client"

import Spline from '@splinetool/react-spline';
import React, { useEffect, useRef, useState } from 'react';

export default function SplineWidget() {
  const splineInstance = useRef({})

  function onLoadSpline(splineApp: any) {
    splineInstance.current = splineApp
  }

  return (
    <div className="h-96 -mx-6 mt-12 lg:mx-0 lg:mt-0">
      <Spline
        scene="https://prod.spline.design/ltpbbZTW79oVR2mI/scene.splinecode"
        onLoad={onLoadSpline}
      />
    </div>
  )
}