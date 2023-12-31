import { useEffect, useState } from "react";

const useTransitionEnd = (element) => {
  const [transitionEnded, setTransitionEnded] = useState(false);

  const handleTransitionEnd = () => {
    setTransitionEnded(true);
  };

  useEffect(() => {
    const transitionElement = element.current;

    if (transitionElement) {
      transitionElement.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        transitionElement.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      };
    }
  }, [element]);

  return transitionEnded;
};

export default useTransitionEnd;
