import "../styles/contact.css";
function Contact() {
  return (
    <div className="ContactWrapper">
      <h2>Contact me</h2>
      <div className="Contact">
      
              📧 <strong>Email:</strong> <a href="mailto:monica.codreanu@gmail.com"><img src="mail.PNG" alt="" /></a><br />
              {/*📞 <strong>Phone:</strong> +46 76 308 3009<br />*/}
              🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/monicacodreanu">linkedin.com/in/monicacodreanu</a>
            
      </div>
    </div>
  );
}

export default Contact;
