import React from "react"; // Import React library
import Card from "react-bootstrap/Card"; // Import Bootstrap Card component
import Button from "react-bootstrap/Button"; // Import Bootstrap Button component
import { CgWebsite } from "react-icons/cg"; // Import website icon from react-icons
import { BsGithub } from "react-icons/bs"; // Import GitHub icon from react-icons

// ProjectCard component that takes props to display project details
const ProjectCard = (props) => {
  return (
    <Card className="project-card-view"> {/* Bootstrap Card with custom class */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" /> {/* Project image */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title> {/* Project title */}
        <Card.Text style={{ textAlign: "justify" }}> {/* Project description */}
          {props.description}
        </Card.Text>

        {/* GitHub/Blog button */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; {/* GitHub icon */}
          {props.isBlog ? "Blog" : "GitHub"} {/* Display 'Blog' if it's a blog, else 'GitHub' */}
        </Button>

        {"\n"}
        {"\n"}

        {/* If the component has a demo link and it's not a blog, render the Demo button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }} // Inline styling for spacing
          >
            <CgWebsite /> &nbsp; {/* Website icon */}
            {"Demo"} {/* Display 'Demo' text */}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard; // Export the component for use in other parts of the app
