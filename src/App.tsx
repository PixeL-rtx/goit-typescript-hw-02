import { useEffect, useMemo, useRef, useState } from "react";

import "./App.module.css";
import fetchGallery from "./service/api";

import toast, { Toaster } from "react-hot-toast";
import { Photo, fetchGalleryRes } from "./types/interfaces";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [page, setPage] = useState<number>(1);
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [Loading, setLoading] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [queryValue, setQueryValue] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolen>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [altDescription, setAltDescription] = useState<string>("");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!queryValue) return;

    const handleSearch = async () => {
      setLoading(true);

      setError(false);
      try {
        setLoading(true);
        const data: fetchGalleryRes = await fetchGallery(queryValue, page);

        if (!data.results.length) {
          toast.error(`Nothing was found for the word "${queryValue}"`);
        }
        setGallery((prevgallery) => [...prevgallery, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [page, queryValue]);

  useEffect(() => {
    if (page === 1) return;

    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [page, gallery]);

  const handleQuery = (newQuery: string) => {
    setQueryValue(newQuery);
    setGallery([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const isActive = useMemo(() => page === totalPages, [page, totalPages]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const updateModalState = (src: string, alt: string) => {
    setModalImage(src);
    setAltDescription(alt);
  };
  return (
    <div ref={ref}>
      <SearchBar onSubmit={handleQuery} />
      {gallery.length > 0 && (
        <ImageGallery
          gallery={gallery}
          openModal={openModal}
          updateModalState={updateModalState}
        />
      )}
      {Loading && <Loader />}
      {Error && <ErrorMessage />}
      {gallery.length > 0 && !Loading && !Error && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={altDescription}
      />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
