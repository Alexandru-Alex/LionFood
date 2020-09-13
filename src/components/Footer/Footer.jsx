import React, { Component } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
class footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small bg-dark pt-4">
        <div className="container">
          <div className="row">
            {" "}
            <div>
              <h6 className="text-uppercase font-weight-bold">Proiect</h6>
              <hr
                className="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>Aceasta este o aplicatie pentru CV</p>
            </div>
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <MDBBtn color="red" social="fb">
                  <MDBIcon icon="facebook-f" className="pr-1" /> Facebook
                </MDBBtn>
                <MDBBtn color="red" social="tw">
                  <MDBIcon icon="twitter" className="pr-1" /> Twitter
                </MDBBtn>
                <MDBBtn
                  color="orange"
                  social="git"
                  href="https://github.com/Alexandru-Alex?tab=repositories"
                >
                  <MDBIcon icon="github" className="pr-1" /> Github
                </MDBBtn>
                <MDBBtn
                  color="orange"
                  social="in"
                  href="https://www.linkedin.com/in/maftei-alexandru-00a994197/"
                >
                  <MDBIcon icon="linkedin" className="pr-1" /> Linkedin
                </MDBBtn>
                <MDBBtn color="red" social="email">
                  <MDBIcon icon="envelope" className="pr-1" /> Email
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center py-3"
          style={{ color: "orange" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/home"> Maftei Alexandru </a>
        </div>
      </footer>
    );
  }
}

export default footer;
/*
   &copy; {new Date().getFullYear()} Copyright:{" "}
            <a> Maftei Alexandru </a>
*/
