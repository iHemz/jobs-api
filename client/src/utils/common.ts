const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const startCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export { observer, startCase };
