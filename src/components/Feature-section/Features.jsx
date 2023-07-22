import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Welcome to our online education app, where learning knows no bounds! Unlock your potential and embark on a journey of knowledge and discovery from the comfort of your fingertips. Our app offers a diverse array of courses crafted by experts in various fields, ensuring you receive top-notch education tailored to your interests and goals",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Accessibility lies at the core of our mission. With a user-friendly interface, multilingual support, and offline access to select content, our app breaks barriers to education, enabling learners from all walks of life to embrace learning anytime, anywhere. Moreover, we continuously strive to improve accessibility, ensuring that learners with disabilities have equal access to knowledge and resources.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Genius-Mind, the leading online education platform, is proud to offer a diverse range of high-quality courses designed to empower learners worldwide. Our commitment to excellence is reflected in our state-of-the-art curriculum and cutting-edge learning technologies, ensuring that every user gains invaluable knowledge and skills in their chosen fields.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
