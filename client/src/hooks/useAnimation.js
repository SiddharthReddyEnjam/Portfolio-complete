import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useAnimation = (selector, animationConfig, dependencies = []) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    gsap.fromTo(elements, ...animationConfig);
  }, dependencies);
};
