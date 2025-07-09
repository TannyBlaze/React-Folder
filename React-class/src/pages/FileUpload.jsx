import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const FileUpload = () => {
    let url = "http://localhost:3000/user/upload"
    const [file, setFile] = useState("")
    const [uploadedImage, setUploadedImage] = useState("")
    const uploadFile = (e) => {
        // console.log(e.target.files[0]);
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image)
        reader.onload = () => {
            setFile(reader.result)
        }
    }

    const upload = () => {
        axios.post(url, { file }).then((response) => {
            console.log(response)
            setUploadedImage(response.data.myImage)
        })
    }
    useEffect(() => {
        if (file!=="") {
            axios.post(url, { file: file }).then((response) => {
                setUploadedImage(response.data.myImage)
            })
        }
    })

    return (
        <div>
            <div>
                <input type="file" name="file" onChange={(e) => uploadFile(e)} />
                {/* <button onClick={upload}>Upload</button> */}
            </div>
            <div>
                <img src={uploadedImage} alt="uploaded image" />
            </div>
        </div>
    )
}

export default FileUpload