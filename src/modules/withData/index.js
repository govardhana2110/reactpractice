// import axios from "axios";

const WithData = ({OriginalComponent}) => {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(response)
  return  <OriginalComponent value={response}></OriginalComponent>;
};

export default WithData;
