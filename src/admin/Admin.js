import React from "react";
import "./AdminPage.css";
import { useFirebaseStorage } from "../hooks/firebaseStorage";
import { useFirebaseFirestore } from "../hooks/firebaseFirestore";
import { useState } from "react";

const Admin = () => {
  const [imageFile, setimageFile] = useState([]);
  const [userData, setUserInput, userInput, NewData] =
    useFirebaseFirestore(imageFile);
  console.log(userData);
  const [ImageUrl] = useFirebaseStorage();

  const getFile = (e) => {
    let file = e.target.files[0];
    setimageFile(file);
  };

  return (
    <div action="">
      <div className="admin">
        <div className="left">
          <div className="box">
            {/* <input type="text" placeholder='Title' className='title' /> */}
            <div className="price">
              <div>
                <span className="title">Name</span>
                <input
                  type="text"
                  onChange={(e) =>
                    setUserInput({ ...userInput, productName: e.target.value })
                  }
                />
              </div>
              <div>
                <span className="title">Age</span>
                <input
                  type="number"
                  onChange={(e) =>
                    setUserInput({ ...userInput, productprice: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <div>
                            <textarea name="" id="" cols="90" rows="7" placeholder='Description'></textarea>
                        </div>

                        <div>
                            <textarea name="" id="" cols="90" rows="8" placeholder='Content'></textarea>
                        </div>
                        <select>
                            <option value="all">All products</option>
                            <option value="macbook">macbook</option>
                            <option value="iMac">iMac</option>
                            <option value="iPad">iPad</option>
                        </select> */}

            <div className="btn">
              <button onClick={NewData} className="button">
                New Data
              </button>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="upload">
            <input type="file" onChange={getFile} />
          </div>

          {userData.map((item) => (
            <div
              className="user"
              key={item.id}
              style={{ border: "2px solid #000" }}
            >
              <li>
                <span>{item.productName}</span>
              </li>
              <li>
                <span>{item.productprice}</span>
              </li>
              <li>
                <span>{item.id}</span>
              </li>
              <img
                width="300px"
                height="300px"
                style={{ objectFit: "cover" }}
                src={item.ImgUrl}
                alt=""
              />
            </div>
          ))}

          {/* <div className='sale'>
                        <small>Sale</small>
                        <input type="number" name="" id="" />
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
