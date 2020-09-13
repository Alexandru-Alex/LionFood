import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class autentificare extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#333a41", height: 500 }}>
        <MDBContainer>
          <MDBRow
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MDBCol md="6">
              <form>
                <p
                  className="h5 text-center mb-4"
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    paddingTop: 10,
                  }}
                >
                  Autentificare
                </p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    style={{ color: " orange" }}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    style={{ color: " orange" }}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="red">Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <p>Inca este in lucru</p>
      </div>
    );
  }
}

export default autentificare;
