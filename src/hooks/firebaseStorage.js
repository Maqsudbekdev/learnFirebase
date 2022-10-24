import React, { useState } from 'react'
import firebase from "../firebase/firebase"
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';

export function useFirebaseStorage() {
    const [progress, setprogress] = useState(0)
    const [ImageUrl, setImageUrl] = useState(null)
    console.log("progress >", progress);
    const Upload = (file) => {
        if (!file) return;
        const Storage = getStorage(firebase)
        const storageref = ref(Storage, `file/${file.name + " " + uuidv4()}`)
        const UploadTask = uploadBytesResumable(storageref, file)
        UploadTask.on("state_changed", async (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            return setprogress(prog)
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(UploadTask.snapshot.ref)
                    .then(async (url) => {
                        return setImageUrl(url)

                    })
            })
    }
    return [Upload, ImageUrl, setImageUrl]

}




