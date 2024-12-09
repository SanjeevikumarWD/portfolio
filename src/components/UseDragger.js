import { useEffect, useRef } from "react";

function useDragger(id, containerId) {
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    const container = document.getElementById(containerId);

    if (!target || !container) {
      console.warn(`Element with id '${id}' or container '${containerId}' not found.`);
      return;
    }

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      // Constrain movement within container bounds
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const maxX = containerRect.width - targetRect.width;
      const maxY = containerRect.height - targetRect.height;

      const constrainedX = Math.min(Math.max(nextX, 0), maxX);
      const constrainedY = Math.min(Math.max(nextY, 0), maxY);

      target.style.top = `${constrainedY}px`;
      target.style.left = `${constrainedX}px`;
    };

    target.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      target.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, [id, containerId]);
}

export default useDragger;
