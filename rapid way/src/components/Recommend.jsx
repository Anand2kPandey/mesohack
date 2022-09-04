import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/taj_mahal.jpg";
import Destination2 from "../assets/rock_garden.jpg";
import Destination3 from "../assets/red_fort_1.jpg";
import Destination4 from "../assets/meusum.jpg";
import Destination5 from "../assets/hawa_mahal.jpg";
import Destination6 from "../assets/golden_temple.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import "./recom.css"

export default function Recommend() {
  const myfunction=()=>{
    var x=document.getElementById("form");
    if(x.style.display==="none"){
      x.style.display="block";
    }else{
      x.style.display="none";
    }
  }
  const data = [
    {
      image: Destination1,
      title: "Taj Mahal",

    },
    {
      image: Destination2,
      title: "Rock Garden",

    },
    {
      image: Destination3,
      title: "Red fort",

    },
    {
      image: Destination4,
      title: "Meuseum",

    },
    {
      image: Destination5,
      title: "Hawa Mahal",

    },
    {
      image: Destination6,
      title: "Golden Temple",

    },
  ];

  const packages = [
    "The Weekend Break",
    // "The Package Holiday",
    // "The Group Tour",
    // "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2 className="white">Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              
              <form id="form">
                
                 <input type="text" placeholder="Name"></input>
                 <input type="text" placeholder="Email"></input>
                 <label for="file_upload">Upload your image</label><input  required name="file_upload" type="file" accept="image/png,image/jpg"></input>
              </form>
                <button id="btn_book" onClick={()=>{
                   alert("Your ticket has been sent successfully and a QR code has been sent to your Email")
                   
                }}>Book now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}


const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        color:white;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
        color:white;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: white;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
