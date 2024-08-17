/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/profil.png";

const imageAltText = "Teungku Zulkifli";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spline X 3D Model of a Table code",
    description: "This is a 3D model of a table code with Spline",
    url: "https://my.spline.design/apokfixs-c5ed9406bb4a1c6e48db7081da283fc1/",
  },
  {
    title: "My Writing",
    description: "This is my writing blog",
    url: "https://teungku-zulkifli.blogspot.com/",
  },
  {
    title: "Landing Pages",
    description: "This landing page is my website home page",
    url: "https://teungku-zulkifli.github.io",
  },
  {
    title: "KMIPN 2024 competition project ideas",
    description: "about a prototype used in emergencies.",
    url: "https://youtu.be/Ws6-IYS5mIE",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
