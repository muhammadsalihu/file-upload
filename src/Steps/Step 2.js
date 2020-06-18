import React, { useState } from "react"
import { storage, db } from "../services/firebase"

function App() {
  const [selectedFile, setSelectedFile] = useState([])
  const [uploadProgress, setUploadProgress] = useState("")

  // Mark 1:  Select a file to Upload
  const selectFile = (event) => {
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  // Mark 2: Upload file to firebase storage and database
  const handleUpload = () => {
    const file = selectedFile
    // Create the file metadata
    const metadata = {
      type: file.type,
    }
    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = storage
      .ref()
      .child("files/" + file.name)
      .put(file, metadata)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get the live progress of of file upload process
        var progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        // You can use this value to display live upload progress on the front end using a progress bar
        setUploadProgress(progress)
      },
      // error function ...
      (error) => {
        console.log(error)
      },
      // Upload Successful, now we can get the download URL
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          // Write the download link to the database
          writeFileURL(downloadURL, file.type, file.name)
        })
      }
    )
  }

  return (
    <div className="App">
      <h1>File upload in react</h1>

      <input type="file" name="Upload" onChange={selectFile} />
      <button onClick={handleUpload}>Upload</button>

      <div>
        <label for="file">Uploading progress:</label>
        <progress id="file" value="32" max="100">
          32%
        </progress>
      </div>
    </div>
  )
}

export default App
