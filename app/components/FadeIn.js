'use client';
import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} {...props}>
      {children}
    </section>
  );
}
