import React from "react";
import './main.css';
import { Icon } from "@material-ui/core";

export default function EventBox({setshowdivs}) {

    return (
        <div className="featured_box eve_results">
            <div className="event_img">
                <img className="eve" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/254801894_192305489735584_6333986314581733290_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Gy_Tc-pY4SUAX9smUn1&_nc_oc=AQm1aCQxY0sFjM4ZGrTDf95V9qz_Dtu87Taz6TWdkTIHr26lgHk9xAnq6TO2F5X7ByRGXLUBQhr_qFaobVblb3ph&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d6ee0607e1263e8acae86cf13554d26f&oe=61B2E383" alt="" />
                <img className="share" src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Share-512.png" alt="" />
            </div>
            <div className="event_details">
                <h5>Hardcoded Event Card : A tale of lorem ipsum</h5>
                <span className=" d-block locate_ion"><Icon icon="carbon:location-filled" /> San Francisco, California</span>
                <span className=" d-block time_date"><Icon icon="ic:round-access-time-filled" /> 11:30 PM - 5:30 AM</span>
                <span className=" d-block time_date"><Icon icon="uis:calender" />Sun Dec 12 - Mon Dec 12</span>
                <div className="view_eve d-block mt-3" onClick={() => setshowdivs("breif_event")}>
                    <span>View</span>
                </div>
            </div>
        </div>
    )
}