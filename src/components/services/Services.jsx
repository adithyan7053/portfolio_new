import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Elevate,</motion.b> Innovate
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Captivate,</motion.b> Succeed.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          Transforming ideas into interactive experiences, I craft sleek and efficient websites that not only captivate users but also ensure seamless functionality. From front-end finesse to back-end robustness, your digital presence is in adept hands.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Designing</h2>
          <p>
          Infusing creativity into pixels, I design visually stunning and user-centric websites that leave a lasting impression. Every layout, color, and element is meticulously chosen to weave a seamless narrative that enhances both aesthetics and usability.
          </p>
          {/* <button>Full Stack Development</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            <br/>
          Behind every great website is a powerful backend, and I specialize in crafting the robust server-side architecture that empowers your digital ambitions. From database design to server logic, I engineer the backbone that ensures your platform runs smoothly and efficiently.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Development</h2>
          <p>
            <br/>
          Bridging the realms of user interface finesse and server-side prowess, I specialize in full-stack development. I sculpt dynamic applications that harmonize client expectations with server capabilities, ensuring a comprehensive and responsive digital solution.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
