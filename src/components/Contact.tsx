import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Highlight, themes } from "prism-react-renderer";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<
    "user_name" | "user_email" | "subject" | "message" | null
  >(null);

  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // ✅ Send Email using EmailJS
  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast.success("✅ Email sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send email. Please try again later.");
    }
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);
    return () => clearInterval(blinkInterval);
  }, []);

  const codeSnippet = `
import { useState } from "react";

// ✉️ Contact Form Data Simulation

const [sender, setSender] = "${name}${
    lastUpdatedField === "user_name" ? (cursorBlink ? "|" : " ") : ""
  }";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "user_email" ? (cursorBlink ? "|" : " ") : ""
  }";
const [subject, setSubject] = "${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  }";
const [message, setMessage] = \`
"${message}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }"
\`;

// ✅ Ready to send your message
`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {contactData.description.en}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          {/* Code Snippet Preview */}
          <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:hidden cursor-progress">
            <Highlight code={codeSnippet} language="tsx" theme={themes.nightOwl}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-4xl`} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-6 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setLastUpdatedField("user_name");
              }}
              required
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow "
                  : "bg-[--icewhite] dark-shadow "
              }`}
            />

            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setLastUpdatedField("user_email");
              }}
              required
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow "
                  : "bg-[--icewhite] dark-shadow "
              }`}
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setLastUpdatedField("subject");
              }}
              required
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow "
                  : "bg-[--icewhite] dark-shadow "
              }`}
            />

            <textarea
              rows={contactData.textarea.rows}
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setLastUpdatedField("message");
              }}
              required
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              }`}
            />

            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input type="checkbox" required name="checkbox-label" id="checkbox-label" />
                <span className="checkbox"></span>
              </label>
              <p>{contactData.privacyOptIn.checkbox.en}</p>
            </div>

            <p>{contactData.privacyOptIn.description.en}</p>

            <Button
              value={contactData.button.value.en}
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />

            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full"
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
