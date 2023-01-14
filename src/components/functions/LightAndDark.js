const iconRemoveM = () => {
  document.querySelector(".btnModeM").classList.remove("hidden");
};
const iconRemoveS = () => {
  document.querySelector(".btnModeS").classList.remove("hidden");
};
const iconAddM = () => {
  document.querySelector(".btnModeM").classList.add("hidden");
};
const iconAddS = () => {
  document.querySelector(".btnModeS").classList.add("hidden");
};

const body = document.documentElement.classList;

if (localStorage.getItem("theme") === "dark") {
  body.add("dark");
} else {
  body.remove("dark");
}
export const lightAndDarkMode = (event) => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.setItem("theme", "light");
    body.remove("dark");
    iconRemoveM();
    iconAddS();
  } else {
    localStorage.setItem("theme", "dark");
    body.add("dark");
    iconAddM();
    iconRemoveS();
  }
};
