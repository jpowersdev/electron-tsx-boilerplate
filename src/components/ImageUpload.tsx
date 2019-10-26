import React from 'react';
import { ipcRenderer } from 'electron';

const ImageUpload = (props: { src: string; path: string }) => {
  const { src, path } = props;
  const [url, setUrl] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const uploadImage = (path: string) => {
    ipcRenderer.send('request-file-upload', path);
  };

  ipcRenderer.on(`file-upload-response-${encodeURI(path)}`, (event, arg) => {
    setUrl(arg.source_url);
    setLoading(false);
  });

  return (
    <div>
      <img src={src} />
      {url ? (
        <strong>
          Uploaded to:{' '}
          <a target='_blank' href={url}>
            {url}
          </a>
        </strong>
      ) : (
        <button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            uploadImage(path);
          }}
        >
          {loading ? 'Loading...' : 'Upload this Image'}
        </button>
      )}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }
        img {
          width: 80px;
          margin: 2rem 0;
        }
        button {
          height: 20px;
          width: 150px;
        }
      `}</style>
    </div>
  );
};

export default ImageUpload;
