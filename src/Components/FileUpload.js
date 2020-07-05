import React from "react"

const FileUpload = (params) => {
  // Mark 1:  Select a file to Upload
  const selectFile = () => {
    //todo....
  }
  // Mark 2:  Upload to firebase
  const handleUpload = () => {
    //todo....
  }

  return (
    <div>
      <h1>File upload in react</h1>

      <input type="file" name="Upload" onChange={selectFile} />
      <button onClick={handleUpload}>Upload</button>

      <div
        style={{
          border: "1px solid #ccc",
          width: "30%",
          height: "30vh",
          marginTop: "30px",
        }}
      >
        Media file
      </div>
    </div>
  )
}

export default FileUpload
