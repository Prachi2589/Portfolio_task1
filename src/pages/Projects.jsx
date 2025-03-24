import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Library Management System"
              description="The Library Management System is a MERN stack web application designed to optimize the management of books, patrons, and administrative tasks in a library. It features user roles (Patron, Librarian, Admin) with access management, enabling streamlined CRUD operations on books. Librarians can issue and renew books, while the system efficiently processes book returns, rent, and fine collection. The technology stack includes MongoDB for flexible data storage, Express.js for server-side development, React.js for the user interface, and Node.js for server-side runtime. Redux Toolkit manages application state, while JWT authentication and password encryption ensure security. The UI is enhanced with the Ant Design library, providing customizable and well-designed components."
              ghLink="https://github.com/Prachi2589/Library_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Image-Classification"
              description="The Image Classification Website is an open-source project that aims to provide a user-friendly web-based platform for performing image classification tasks. This website utilizes advanced machine learning techniques to analyze and categorize images based on their content, allowing users to easily classify and organize their image collections. this project , I have classified image using SVM. For data collection we have used a chrome extension called fatkun. We have done data cleaning using Haar cascade.For feature engineering we have used wavelet transform that helps moving window to detect eyes and face .At last, we have built UI."
              ghLink="https://github.com/Prachi2589/Image_Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="School Management system"
              description="The School Management System using the MERN stack to create an efficient web app that fosters communication among administrators, teachers, and students while simplifying school administration tasks. The MERN stack—MongoDB for flexible data storage, Express.js for server-side development, React.js for a dynamic user interface, and Node.js for server-side runtime—provides a robust foundation. I opted for React.js with Material UI for the frontend to ensure a user-friendly experience and utilized Redux for state management. This project addresses the need for seamless attendance tracking, grade management, and task assignments, enhancing overall school management. The choice of this project stems from a desire to contribute to education technology, streamlining processes to make school administration and communication more efficient."
              ghLink="https://github.com/Prachi2589/School_management_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Registration"
              description="A registration form is a document with a set of fields that a person fills out and sends to a business or individual to register for an event, program, membership, list, and so on. Using the online registration form, you may gather contact information and encourage people to interact with you"
              ghLink="https://prachi2589.github.io/js-task9/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Arithmatic calculator"
              description="A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.
                       However, more sophisticated calculators can handle exponential operations, square roots, logarithms, trigonometric functions and hyperbolic functions."
              ghLink="https://arithmatic-calculator.vercel.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="To-Do Web"
              description="Todo Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. The four major tasks that we can perform in a TODO list are"
              ghLink="https://prachi2589.github.io/To-do-list/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects