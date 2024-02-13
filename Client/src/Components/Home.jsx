import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import  moment  from "moment"

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);


  const getUserData = async () => {
    const res = await axios.get("http://localhost:8005/getdata", {
      headers:{
      "Content-Type": "application/json"
      }
    });
    if (res.data.status == 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.userGetData);
    }
  };

  const dltUser = async (id) => {
      const res = await axios.delete(`http://localhost:8005/${id}`, {
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
         console.log("Delete User");
         setShow(true)
      }
  }

  useEffect(() => {
    getUserData();

  }, [dltUser]);

  return (
    <>
    {
      show ?   <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        User Deleted
    </Alert> : ""
    }
      <div className="container mt-2">
        <h1 className="text-center mt-2">Mern Image Upload Project</h1>
        <div className="text-end">
          <Button variant="primary">
            <NavLink
              to={"/register"}
              className="text-decoration-none text-light"
            >
              Add User
            </NavLink>
          </Button>
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-5">
          {data.length > 0
            ? data.map((el, i) => {
                return (
                  <>
                    <Card
                      style={{ width: "22rem", height: "20rem" }}
                      className="mb-3"
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "150px",
                          height:"150px",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        src={`http://localhost:8005/uploads/${el.imgPath}`}
                        alt="userImage"
                        // src="./man.png"
                        className="mt-2"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>Name : {el.fname}</Card.Title>
                        <Card.Text>Date Added : {moment(el.Date).format("L")}</Card.Text>
                        <Button
                          variant="danger"
                          className="col-lg-6 text-center"
                          onClick={() => dltUser(el._id)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })
            : " "}
        </div>
      </div>
    </>
  );
};

export default Home;
