import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    const footerInfo = this.props.footerInfo;
    return (
      <>
        <footer>
          <p>{footerInfo.studioAddress}</p>
          <p>{footerInfo.email}</p>
          <p>{footerInfo.tel}</p>
        </footer>
      </>
    );
  }
}

export default Footer;
