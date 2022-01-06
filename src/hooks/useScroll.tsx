import React, { RefObject } from "react";
//Check if the element is in view. Distance from the top of the elements should be less than or equal to the window height(which is a constant based on viewport height)
const isInScrollView = (element: HTMLElement | null, offset = 0) => {
  const vpHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    (element && element.getBoundingClientRect().top <= vpHeight - offset) ||
    false
  );
};
//This hook helps to identify whether an HTML Element is in view or not upon scrolling. This information could be useful in animating elements on scrolling in to view.
/**
 *
 * @param ref Parent/container element to check if in view or not
 * @returns an object with inView boolean field indicating element in view/not and a setInView method to set the state.
 */
export const useScroll = (ref: RefObject<HTMLElement>, offset = 0) => {
  const [inView, setInView] = React.useState(false);
  const timerRef = React.useRef(false);
  const handleScroll = () => {
    if (isInScrollView(ref.current, offset)) {
      setInView(true);
      return;
    }
    setInView(false);
  };
  //This will throttle the scroll handler function call. Ensuring its not called on every scroll event.Improves performance.
  const throttle = (callback: () => void, timeInMs: number) => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = true;
    setTimeout(() => {
      callback();
      timerRef.current = false;
    }, timeInMs);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", () => throttle(handleScroll, 250));
    return () =>
      window.removeEventListener("scroll", () => throttle(handleScroll, 250));
  }, []);
  return {
    inView,
    setInView,
  };
};
