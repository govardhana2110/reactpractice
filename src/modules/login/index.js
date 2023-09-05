import React, { useEffect, useMemo, useState } from "react";
import WithData from "../withData";

const Login = () => {
  const [cityState, setCityState] = useState([]);
const arr = [2, 4, 7, 'a', 'd', 5, '+', '+', 9];
  const str1 = 'Covalense is a nice company';
  const str2 = 'Covalense is a great company';
  const str3 = 'jhsyyyuyettttttffffssss';

  const scoreFunction = (array) => {
    const tempArr = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        tempArr.push(array[i]);
      }
      if (array[i] === 'a') {
        tempArr.pop();
      }
      if (array[i] === 'd') {
        let element = tempArr.pop();
        tempArr.push(element);
        tempArr.push(element * 2);
      }
      if (array[i] === '+') {
        let element1 = tempArr.pop();
        let element2 = tempArr.pop();
        tempArr.push(element2);
        tempArr.push(element1);
        tempArr.push(element1 + element2);
      }
    }
    console.log(tempArr.reduce((sum, current) => sum + current, 0));
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    console.log(words1);
    const uniqueWords1 = words1.filter((word) => !words2.includes(word));
    const uniqueWords2 = words2.filter((word) => !words1.includes(word));
    const uniqueWords = [...uniqueWords1, ...uniqueWords2];
    const result = uniqueWords.join(', ');
    console.log(result);
    let substring = [];
    let stringResult = [];
    for (let i = 0; i <= str3.length; i++) {
      if (str3[i] === str3[i - 1]) {
        substring += str3[i];
      } else {
        if (substring.length) {
          if (str3[i - 1] === str3[i - 2]) {
            substring += str3[i - 1];
          }
          stringResult.push([substring]);
          substring = '';
        }
      }
    }
    console.log(stringResult);
  };
  useEffect(() => {
    scoreFunction(arr);
  }, []);
  const arrData = [
    {
      country: "United Kingdom",
      cities: ["Manchester", "London", "Burmingham"],
    },
    {
      country: "Germany",
      cities: ["Hamburg", "Frankfurt", "Berlin"],
    },
    {
      country: "Italy",
      cities: ["Rome", "Milan", "Florence"],
    },
  ];
  const onChangeDropDown = (e) => {
    arrData.map((itm) => {
      if (itm.country === e.target.value) {
        setCityState(itm.cities);
        console.log(itm);
      }
    });
  };
  const useFunctionMemo = useMemo(
    (a, b) => {
      return a + b;
    },
    [cityState]
  );

  return (
    <div>
      {" "}
      <select onChange={(e) => onChangeDropDown(e)}>
        {arrData.map((item, index) => {
          return (
            <option key={index} value={item.country}>
              {item.country}
            </option>
          );
        })}
      </select>
      {cityState &&
        cityState.map((item, index) => {
          return (
            <>
              {" "}
              <label key={index}>{item}</label> <br></br>
            </>
          );
        })}
    </div>
  );
};

export default Login;
