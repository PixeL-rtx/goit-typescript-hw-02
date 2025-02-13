export interface PhotoUrl {
  regular: string;
  small: string;
}

export interface Photo {
  id: string;
  alt_description: string;
  urls: PhotoUrl;
}

export interface fetchGalleryRes {
  total: number;
  total_pages: number;
  results: Photo[];
}
