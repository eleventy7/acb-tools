import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';

import { INote } from '../types/note';

type Props = {
  currentData: () => INote[];
  currentPage: number;
  maxPage: number;
  setElement: Dispatch<SetStateAction<Element | null>>;
};

function useNotePagination(
  data: INote[],
  itemsPerPage: number,
  threshold?: number | number[]
): Props {
  const [currentPage, setCurrentPage] = useState(1);
  const [element, setElement] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver>();
  const prevY = useRef(0);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(undefined, end);
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
        }
        prevY.current = y;
      },
      { threshold }
    );
  }, [maxPage, threshold]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver?.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver?.unobserve(currentElement);
      }
    };
  }, [element]);

  return { currentData, currentPage, maxPage, setElement };
}

export default useNotePagination;
