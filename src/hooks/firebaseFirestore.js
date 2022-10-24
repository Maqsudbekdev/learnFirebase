import React from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  docs,
  doc,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import Firebase from "../firebase/firebase";
import { useFirebaseStorage } from "./firebaseStorage";

export function useFirebaseFirestore(image) {
  const [Upload, ImageUrl] = useFirebaseStorage();
  const [userData, setuserData] = useState([]);
  const [userInput, setUserInput] = useState({
    productName: "",
    productprice: "",
    ImgUrl: "",
  });
  // console.log(userInput);
  const db = getFirestore(Firebase);

  useEffect(
    () => () =>
      onSnapshot(collection(db, "products"), (snapshot) => {
        setuserData(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  console.log(ImageUrl);
  const NewData = () => {
    Upload(image);
  };
  useEffect(() => {
    const UploadServer = async () => {
      const collectionref = collection(db, "products");
      const payload = {
        productName: userInput.productName,
        productprice: userInput.productprice,
        ImgUrl: ImageUrl,
      };

      if (ImageUrl && userInput.productName && userInput.productprice) {
        await addDoc(collectionref, payload);
        setUserInput({
          ...userInput,
          productName: "",
          productprice: "",
          ImgUrl: "",
        });
        window.location.reload();
      }
    };
    UploadServer();
  }, [ImageUrl]);

  return [userData, setUserInput, userInput, NewData];
}
