export const scrollToQuote = () => {
  document.getElementById("quote")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
