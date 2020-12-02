import React from "react";
import cardone from "./assets/cardone.jpg";
import cardtwo from "./assets/cardtwo.jpg";
import cardthree from "./assets/cardthree.jpg";

const cardData = [
  {
    image: cardone,
    imageAlt: "mountain sunset",
    title: "Scenic Views",
    copy:
      "In sed malesuada felis, eu feugiat sem. Curabitur lorem lorem, cursus a eros in, eleifend tincidunt orci. Fusce magna lacus, suscipit in ante sed, lobortis fringilla tortor.",
    ctaLink: "/views"
  },
  {
    image: cardtwo,
    imageAlt: "green mountains",
    title: "Hiking Trails",
    copy:
      "Duis laoreet, augue id pharetra sodales, ante velit egestas turpis, eu dignissim ipsum purus sed enim. Donec auctor placerat pretium. Fusce molestie imperdiet elit id scelerisque",
    ctaLink: "/hiking"
  },
  {
    image: cardthree,
    imageAlt: "mountain lake",
    title: "Affordable Price",
    copy: "Praesent mattis pharetra enim, nec feugiat erat tempus sit amet.",
    ctaLink: "/pricing"
  }
];

const CardSection = () => (
  <div className="container">
    {cardData.map((card, index) => (
      <div key={card.ctaLink} className={`card card-${index + 1}`}>
        <div className="top">
          <img src={card.image} alt={card.imageAlt} />
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
        </div>
        <a href={card.ctaLink}>Learn More</a>
      </div>
    ))}
  </div>
);

export default CardSection;
