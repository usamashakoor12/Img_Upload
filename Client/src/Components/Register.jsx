import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Register = () => {
  const [fName, setFName] = useState("");
  const [file, setFile] = useState("");

  const history = useNavigate()

  const setData = (e) => {
    const { value } = e.target;

    setFName(value);
  };

  const setImgFile = (e) => {
    setFile(e.target.files[0]);
  };

  //add user data
  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fName);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      " http://localhost:8005/register",
      formData,
      config
    );

    if (res.data.status == 401 || !res.data) {
      console.log("error");
    } else {
      history("/");
    }
  };

  return (
    <div className="container mt-3">
      <h1>Upload your Img Here</h1>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            onChange={setData}
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Your Image</Form.Label>
          <Form.Control
            type="file"
            onChange={setImgFile}
            name="photo"
            placeholder=""
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={addUserData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
