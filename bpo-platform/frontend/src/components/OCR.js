// frontend/components/OCR.js
import Tesseract from 'react-tesseract';

function OCR() {
  const handleComplete = ({ data }) => {
    console.log(data.text);
  };

  return (
    <Tesseract
      src="path/to/image.png"
      lang="eng"
      onLoadSuccess={() => console.log('Loaded')}
      onLoadError={(error) => console.error(error)}
      onProgress={({ progress }) => console.log(progress)}
      onComplete={handleComplete}
    />
  );
}

export default OCR;