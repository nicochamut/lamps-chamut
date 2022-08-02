export const fadeOut = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "spring", duration: 1.2 } },
  exit: {
    scale: 0.9,
    transition: { duration: 0.3 },
    opacity: 0,
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "30%",
    transition: { duration: 1.1 },
  },
};
