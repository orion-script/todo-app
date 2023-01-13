if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
export const lightAndDarkMode = (event) => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.querySelector(".btnModeM").classList.remove("hidden");
    document.querySelector(".btnModeS").classList.add("hidden");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.querySelector(".btnModeM").classList.add("hidden");
    document.querySelector(".btnModeS").classList.remove("hidden");
  }
};
