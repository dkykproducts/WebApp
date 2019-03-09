import React from 'react'

const Footer=()=>{
    return(
        <div id = "Footer" className="orange p-2">
        <div className=" container" style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)"}}>
            <div className="about">
                <ul style={{listStyle:"none"}}>
                    <li><b>ABOUT</b></li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Follow Us</li>
                    <li>Stories</li>
                    <li>Press</li>
                </ul>
            </div>

            <div className="help">
                <ul style={{listStyle:"none"}}>
                    <li><b>HELP</b></li>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQs</li>
                    <li>Report</li>
                </ul>
            </div>

            <div className="policy">
                <ul style={{listStyle:"none"}}>
                    <li><b>POLICY</b></li>
                    <li>Return Policy</li>
                    <li>Terms of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
            </div>

            <div className="social">
            <ul style={{listStyle:"none"}}>
                <li><b>SOCIAL</b></li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Google Plus</li>
            </ul>
            </div>

            <div className="address mr-3">
                <ul style={{listStyle:"none"}}>
                    <li><b>ADDRESS</b></li>
                    <li>Manpur Patwatoli</li>
                    <li>PO+PS: Buniyadganj, Gaya</li>
                    <li>Bihar - 823003</li>
                    <li>India</li>
                    <li>+91 9234764938</li>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default Footer;