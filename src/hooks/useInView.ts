import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export function useInView(options = { triggerOnce: true, threshold: 0.1 }) {
  return useIntersectionObserver(options);
}
