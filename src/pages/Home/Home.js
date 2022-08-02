import styled from "styled-components";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

// framer-motion
import { motion } from "framer-motion";
import { fadeOut } from "../../animations/Animations";

const Home = () => {
  return (
    <HomeS
      variants={fadeOut}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
    >
      <ItemListContainer />
    </HomeS>
  );
};

const HomeS = styled(motion.div)``;

export default Home;
