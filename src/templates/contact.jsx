import React from "react";
import { graphql } from "gatsby";
import { ContactForm, Layout } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact({ data }) {
  const { frontmatter } = data?.markdownRemark;

  return (
    <Layout headerData={{ content: false }}>
      <div className="contact">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.12809096723382!2d-119.59449989645746!3d49.60038015191165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54827bb837480f4b%3A0x93e5ca768aaea7cc!2sPlaylist%20Lavender%20Farm%20and%20Guesthouse!5e1!3m2!1sfr!2sfr!4v1732903310218!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="contact-container"></div>
        <div className="contact-information">
          <div className="contact-infos">
            <h1 className="contact-infos-title">{frontmatter.title}</h1>
            <p className="contact-infos-description">
              {frontmatter.description}
            </p>
            <ul className="contact-infos-infos-list">
              <li>
                <FontAwesomeIcon icon={faPhone} size="lg" />

                {frontmatter.phoneNumber}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                {frontmatter.emailAdress}
              </li>
              {frontmatter.adresses.map((item, key) => (
                <li key={key}>
                  <FontAwesomeIcon icon={faLocationPin} size="lg" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        title
        description
        phoneNumber
        emailAdress
        adresses
      }
    }
  }
`;
