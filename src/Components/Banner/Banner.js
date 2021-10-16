import React from "react";
import { Button } from "react-bootstrap";
import Menubar from "../Shared/Menubar/Menubar";
import "./Banner.css";

const Banner = () => {
  return (
    <div>      <div className="banner ">
        <Menubar></Menubar>
        <div className="container">
          <div className="row">
            <div className="col-md-8 hero-writting-part">
              <h1 className="hero-heading">
                Take care of your <br /> Health Now!
              </h1>
              <h3>Sale up to 30% all products</h3>
              <Button className=" m-5 " variant="danger">
                Shop Now
              </Button>
            </div>
            <div className="col-md-4">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
