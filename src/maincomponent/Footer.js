import React from "react";
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <section id="footer">
      <MDBFooter className="text-white text-center text-lg-left primary-color">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Term of Use</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px" }}
              />

              <p>
                The Terms of Use is published in compliance of, and is governed
                by the provisions of Indian laws, including but limited to the
                Indian Contract Act, 1872 (“Contract Act”)
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Our Policies</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px" }}
              />

              <p>
                you agree to be bound by the terms described herein and all the
                terms incorporated by reference. If you do not agree to all of
                these terms, do not use the website.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="/home">
                  <i className="fa fa-angle-double-right"></i> Home
                </a>
              </p>
              <p>
                <a href="/about">
                  <i className="fa fa-angle-double-right"></i> About
                </a>
              </p>
              <p>
                <a href="/allproduct">
                  <i className="fa fa-angle-double-right"></i> Products
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-home mr-3" /> Pune, Maharashtra, India
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> medicals@store.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="text-center p-3 sec-color">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="home">
            QuickPharma.com
          </a>
        </div>
      </MDBFooter>
    </section>
  );
};
export default Footer;
