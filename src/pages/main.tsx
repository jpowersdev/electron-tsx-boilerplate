import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';

const MainWindow = () => {
  
  const secondaryWindow = () => {
    ipcRenderer.send('create-secondary-window');
  };

  return (
    <>
      <div>
        <h1>Hello from the Main Process!</h1>
        <button onClick={() => secondaryWindow()}>Open Secondary Window</button>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
          }
          button {
            height: 20px;
            width: 300px;
            margin: 2rem 0;
          }
        `}</style>
      </div>
    </>
  );
};

ReactDOM.render(<MainWindow />, document.getElementById('root'));
