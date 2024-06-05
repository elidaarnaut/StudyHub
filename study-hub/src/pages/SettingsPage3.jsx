import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SettingsMenu from "../components/SettingsMenu";
import AccordionContainer from "../components/AccordionContainer";
import ContactForm from "../components/ContactForm";

function SettingsPage3(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div className="next2SideMenuSettings">
                <br />
                <div className="settingsContents">
                    <div className="accSettings">
                        <p className="majorHeading">FAQ</p>
                        <hr />
                        <AccordionContainer></AccordionContainer>
                        
                        <ContactForm></ContactForm>
                    </div>
                </div>
                <hr className="hrSetting"/>
                <SettingsMenu></SettingsMenu>

            </div>

        </div>
    );
}

export default SettingsPage3;