import "../styles/contact.css";
function Contact() {
  return (
    <div>
      <h2>Contact me</h2>
      <div className="Contact">
        You can contact me on{" "}
        <a href="https://www.linkedin.com/in/monicacodreanu/" target="_blank">
          LinkedIn
        </a>{" "}
        or e-mail:
      </div>
      <div>
        <img src="mail.PNG" alt="" />
      </div>
    </div>
  );
}

export default Contact;
