import React from 'react';
import '../Footer/footer.css'
import { BsFacebook} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {FiTwitter} from 'react-icons/fi';





function Footer() {
    return (
        <div className="footer-main">
            <div className="inner-footer">
            <   div className="inner-footer2">

                    <hr className="footer-hr" />
                </div>
                <div className="inner-footer1">
                    <div className="footer-inf1">
                        <h4>MENU</h4>
                        <h4>CONTACT</h4>
                        <h4>NEWSLETTER</h4>
                        <h4>BECOME A MEMBER</h4>

                    </div>
                    <div className="footer-inf2">
                        <span className="follow-text">FOLLOW US ON:</span>
                        <div className="react-icons-container" >
                            <BsFacebook className="react-icons" />
                            <GrInstagram className="react-icons" />
                            <FiTwitter className="react-icons" />
                        </div>
                    </div>
                </div>
                <div className="inner-footer2">

                    <hr className="footer-hr" />
                </div>
                <div className="inner-footer3">

                    <div className="company-name">
                        <div className="logo-container">
                            <h1>Millenium<span>Store</span></h1>
                        </div>
                    </div>
                    <div className="company-info">
                        <span>@2021 MilleniumStore. All RIGHT RESERVED</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;