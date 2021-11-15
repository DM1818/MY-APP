import React from 'react';
import './main.css';
import { Link } from '@material-ui/core';


export default function Sidenav ({ setshowdivs, shownav, setsiden }) {

  return (
    <div  className={`left_name web_end ${'show_main'}`}>
     

      <div className="log_img"onClick={()=>setsiden(false)}>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/247915817_1369093420172484_2785154586297093447_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=N-CcIPo7LWAAX_m8xXB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2677d5bc495ce3acce616fe0a974a463&oe=61B2EEEA" alt="" />
      </div>
      <ul>
        <li onClick={() => setshowdivs("first")}>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/247906939_415499123354409_3822149285232094847_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WzOLmZx-HgcAX-BkaJk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=98589acdaf494f4ab33d72b88ac9902c&oe=61B5FEBD" alt="" />
          </span>
          Discover Vendors
        </li>

        <li onClick={() => setshowdivs("second")}>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/255918694_4975534882479923_4206747961782955194_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ORcn3b3rY-YAX-zP1LD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2c9969b4aac1642609808ad86f5c3c21&oe=61B4C2DD" alt="" />
          </span>
          Discover Events
        </li>

        <li onClick={() => setshowdivs("third")}>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/256201623_1092119618259303_2431661013063571870_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=EU0s15KGIEsAX8FBfBV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=10e3bc4a7d4025e1ca26a7d57e4d47ed&oe=61B445F7" alt="" />
          </span>
          My Favorites
        </li>

        <li onClick={() => setshowdivs("fourth")}>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/255572193_1135981430268074_2471313976517839105_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=yReI0tF62p4AX_Tq8fh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0d2dcd57febca6c922f2da834ef0451c&oe=61B4A187" alt="" />
          </span>
          My Profile
        </li>

        <Link to="/Login">
          <li className="mb-4" onClick={() => setshowdivs("fifth")}>
            <span>
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/255754113_634106537952494_9163961654726565985_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=bpPlkLwpga8AX-IZLlw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7b94b7fd4c8080e1f56ce59068d66585&oe=61B48AA0" alt="" />
            </span>
            My Orders
          </li></Link>

        <h6>Support</h6>
        <li>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/254119926_1054307465406301_355045811669101726_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=DRY50Ivg3MoAX8HTu2w&_nc_oc=AQn64t5QVj_lOjVpmjhd8a6B-m8Ku-AcSB4xK4LHj3oyIFVaNIQ87v629DO5jibpPvZj-5bh2NPhNuO77JPXm9m6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=504291a8ed2e5f2d88d2906cf3c15213&oe=61B353BA" alt="" />
          </span>
          Become an Event Creator
        </li>
        <li>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/254119926_1054307465406301_355045811669101726_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=DRY50Ivg3MoAX8HTu2w&_nc_oc=AQn64t5QVj_lOjVpmjhd8a6B-m8Ku-AcSB4xK4LHj3oyIFVaNIQ87v629DO5jibpPvZj-5bh2NPhNuO77JPXm9m6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=504291a8ed2e5f2d88d2906cf3c15213&oe=61B353BA" alt="" />
          </span>
          Become a Vendor
        </li>
        <li>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/255918695_172541278347786_4171633352343391817_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=l85SXjJ0EVYAX9zbG6g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=6d6e5733ac08b5b1cf9e8d1a100f41f2&oe=61B2669C" alt="" />
          </span>
          FAQ
        </li>
        <li>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/255539537_425181015844958_3568087809315715493_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=6-uBwu9zLegAX-tO8-z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=926ecbf29b4ecbb393aabb5467f9061b&oe=61B4796C" alt="" />
          </span>
          Privacy Policy
        </li>
        <li>
          <span>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/256688209_362917325523288_785274347600202279_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=3F9XkhrQS9MAX_a0TYp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2e311b8cebbf45fefbbcfdd27e80349e&oe=61B239AB" alt="" />
          </span>
          Sign Out
        </li>


      </ul>
    </div>
  )
}
