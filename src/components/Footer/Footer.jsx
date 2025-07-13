import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  footerInfo = this.props.footerInfo;
  render() {
    return (
      <>
        <footer>
          <p>{this.footerInfo.studioAddress}</p>
          <p>{this.footerInfo.email}</p>
          <p>{this.footerInfo.tel}</p>
        </footer>
      </>
    );
  }
}

export default Footer;
