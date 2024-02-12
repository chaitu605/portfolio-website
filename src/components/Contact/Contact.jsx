import React from "react";
import { contact } from "../../portfolioDetails";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <section className="section contact center" id="contact">
        <h2 className="section__title">Contact</h2>
        <span type="button" className="btn btn--outline">
          Email: {contact.email}
        </span>
      </section>
    </>
  );
}
