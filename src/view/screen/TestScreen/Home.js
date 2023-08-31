import '@pqina/pintura/pintura.css';

import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import './App.css'
import { useState } from 'react';
const editorDefaults = getEditorDefaults({
    imageWriter: {
        // We instruct the editor to post the file object to the server
        store: './upload/',
        // Which fields to post
        dataset: (state) => [['imageFile', state.dest, state.dest.name]],
    },
});

const downloadFile = (file) => {
    console.log(file);
    // Create a hidden link and set the URL using createObjectURL
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = file;
    link.download = file.name;

    // We need to add the link to the DOM for "click()" to work
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait a short moment before clean up
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.parentNode.removeChild(link);
    }, 0);
};

function Home() {
const [file,setFile] =useState('')

    const handleEditorProcess = (imageState) => {
        downloadFile(imageState.dest);
    };
  const   onFileChange = event => {
 
        // Update the state
        console.log(URL.createObjectURL(event.target.files[0]));
       setFile( URL.createObjectURL(event.target.files[0]) );
 
    };
    return (
        <div className="App">
            <input type="file" onChange={onFileChange} />
                   



                    <img src={file} style={{width:100}}/>
           
            <PinturaEditor
                {...editorDefaults}
                src={file}
                frameStyles={{
                    solidSharp: {
                        shape: {
                            frameStyle: 'solid',
                            frameSize: '2.5%',
                        },
                        thumb: '<rect stroke-width="5" x="0" y="0" width="100%" height="100%"/>',
                    },
                    solidRound: {
                        shape: {
                            frameStyle: 'solid',
                            frameSize: '2.5%',
                            frameRound: true,
                        },
                        thumb: '<rect stroke-width="5" x="0" y="0" width="100%" height="100%" rx="12%"/>',
                    },
                    lineSingle: {
                        shape: {
                            frameStyle: 'line',
                            frameInset: '2.5%',
                            frameSize: '.3125%',
                            frameRadius: 0,
                        },
                        thumb: '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>',
                    },
                }}
                onProcess={handleEditorProcess}
            />
        </div>
    );
}

export default Home;