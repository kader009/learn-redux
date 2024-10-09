import { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Images = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.slice(0, 10).map((photo: Photo) => (
          <img
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-2xl mb-2">{selectedPhoto.title}</h2>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded"
              onClick={() => setSelectedPhoto(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
