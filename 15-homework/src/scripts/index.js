import "../styles/styles.css";
import Image from "../../src/assets/bg.jpg";

let a = () => {
  let b = 888888;
  return b
};
console.log(a());


const renderHeader = () => {
  const headerLayout = `
  <container>
    <img src="${Image}" />
  </container>
`;
  document.body.innerHTML = headerLayout;

};

console.log(888777);
renderHeader();