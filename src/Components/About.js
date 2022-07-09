import React from "react";
import Navbar from "./Navbar";
import Feature from "./Feature";
const About = () => {
  return (
    <>
    <div>
    <Navbar />
    <Feature feature_itself="Feature highlights" title="Based on your Requirements" description="It generates password based on user requirement include bellow things . . ." />
    <Feature title="Strong Password" description="It genrates strong password cause it uses special symbols that we have included in the textbox. Also it uses number to create password that we have entered in a inputbox." />
    <Feature title="Not a Lengthy " description="We have a option of the require length input box where we have to put a legth based on our requirement so that the password will not be lengthy and it will generate password based on length that user wants." />
    <Feature title="Not only One" description="It will not generate only one password it can genrate infinite password just we have to press 'Password generate' button continuously based on our requirenment." />
    <Feature title='Copy to Clipboard feature' description='we have copy to clipboard feature to easily copy that password into clipboard and paste anywhere you want.' />
    </div>
  </>
  )
}

export default About;
