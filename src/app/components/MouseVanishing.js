"use client";

import React, { useState, useEffect } from "react";

const MousePositionUpdater = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      /* 
      ** POSITION RELATIVE TO INITIAL PERSPECTIVEORIGIN
      **
      // Screen center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Cursor position relative to the center screen in %
      const posX = (((clientX - centerX) * 100) / window.innerWidth) * 2;
      const posY = (((clientY - centerY) * 100) / window.innerHeight) * 2;

      // Conf default perspectiveOrigin in %
      // todo: use CSS properties
      const perspectiveOriginX = 50;
      const perspectiveOriginY = 30;

      const mouseX = perspectiveOriginX + posX / 100;
      const mouseY = perspectiveOriginY + posY / 100;

      setMousePosition({ x: mouseX, y: mouseY });
      */

      /*
       ** NO RELATIVE POSITION (center)
       */
      const mouseX = (clientX * 100) / window.innerWidth;
      const mouseY = (clientY * 100) / window.innerHeight;
      
      console.log({ x: mouseX, y: mouseY });

      setMousePosition({ x: mouseX, y: mouseY });

    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{ perspectiveOrigin: `${mousePosition.x}% ${mousePosition.y}%`, transform: `rotateY(40deg)` }}
      className="flex flex-wrap gap-5 bg-amber-200 horizon_dyn">
      <div className="w-48 h-52 stage_down bg-slate-500"></div>
      <div className="w-48 h-52 stage_center bg-red-400"></div>
      <div className="w-48 h-52 stage_down bg-orange-400"></div>
      <div className="w-48 h-52 bg-emerald-700"></div>
      <div className="w-48 h-52 stage_up bg-cyan-400"></div>
      <div className="w-48 h-52 stage_up bg-indigo-700"></div>
      <div className="w-48 h-52 stage_down bg-slate-500"></div>
      <div className="w-48 h-52 stage_center bg-red-400"></div>
      <div className="w-48 h-52 stage_down bg-orange-400"></div>
      <div className="w-48 h-52 stage_background bg-emerald-700"></div>
      <div className="w-48 h-52 stage_up bg-cyan-400"></div>
      <div className="w-48 h-52 stage_up bg-indigo-700"></div>
    </div>
  );
};

export default MousePositionUpdater;
