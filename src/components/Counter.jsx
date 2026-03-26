import { useEffect, useRef, useState } from "react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  // 👉 format number (3,500)
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const progress = currentTime - startTime;
            const progressPercent = Math.min(progress / duration, 1);

            const value = Math.floor(progressPercent * target);
            setCount(value);

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // 50% visible then start
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration]);

  return <h3 ref={ref}>{formatNumber(count)}+</h3>;
};

export default Counter;