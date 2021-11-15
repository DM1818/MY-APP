import React from "react";
import './main.css';
import { Dropdown } from "bootstrap";
import { Icon } from "@material-ui/core";

export default function Dashheader ({setshownav,setstatus, setmobiside}) {
    return (
        <div className="header_nav" >
            <div id="web_ham"  className="hamburger"  onClick={()=>setshownav((state)=>!state)}>
            <span className="hn"></span>
            <span className="hn"></span>
            <span className="hn"></span>
            </div>
            <div id="mobi_ham" className="hamburger" onClick={()=>setmobiside(true)} >
            <span className="hn"></span>
            <span className="hn"></span>
            <span className="hn"></span>
            </div>
            <div className="side_right">
                <div className="noti" onClick={()=>setstatus(true)}>
                    <Icon icon="mi:notification" />
                </div>
                <span className="user"><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/254434897_477286063587500_2691167828778918258_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=pQEbHQcRALUAX-fwYiW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d66a0d74ecb5c77251834a0d108584fc&oe=61B41AAB" alt="" /></span>
                <span className="use_name">To Do: Dropdown</span>
            </div>
 
        </div>
    )
}

                /*
                <Dropdown>
                <Dropdown.Toggle  id="dropdown-custom-components">
                <span className="user"><img src="./images/logo.svg" alt="" /></span>
                    <span className="use_name">Jetix warn</span>
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item eventKey="1"><Icon icon="bx:bxs-user" />Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="2"><Icon icon="ic:baseline-log-out" />Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                */