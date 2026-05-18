import { useEffect, useRef } from "react";
interface Props {
  callback: () => void;
}
const useInfiniteScroll = ({ callback }: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = (node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });
    if (node) {
      observerRef.current.observe(node);
    }
  };
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);
  return lastElementRef;
};
export default useInfiniteScroll;
