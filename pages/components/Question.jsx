import React, { useContext, useState } from "react";
import question from "../images/question.png";
import opt1 from "../images/opt1.png";
import opt2 from "../images/opt2.png";
import opt3 from "../images/opt3.png";
import opt4 from "../images/opt4.png";
import Image from "next/image";
import { UserContext } from "../Context";

const Question = () => {

  const [check, setCheck] = useState('');
  const { setColorc, setDone, done, setNotVisited, notVisited, setNot, reviewWithAns, setReviewWithAns, reviewWithout, setReviewWithout, dump, setDump } = useContext(UserContext);

  function getCheckedData(e){
     setCheck(e.target.value);
  }

  function clearResponse(){
     setCheck('');
     setColorc('bg-white');
  }

  function review(){
    if(check != ''){
      setColorc('bg-purple-500')
      setReviewWithAns(reviewWithAns+1);
    }

    else {
      setColorc('bg-yellow-500');
      setReviewWithout(reviewWithout+1)
    }
  }

  function dumpFunc(){
    setColorc('bg-gray-300');
    clearResponse();
    setDump(dump + 1);
  }

  function next(){  
      if(check != ''){
          setColorc('bg-green-500');
          if(done == 10){
            alert("You have to solve only 10 questions");
            setDone(10);       
            setNot(0);     
          }

          else {
            setDone(done + 1);
          }          
          clearResponse();
          if(notVisited == 0){
            setNotVisited(0);
          }
          
          else {
            setNotVisited(notVisited - 1)
          }                   
      }      

      else {
        alert("Please fill an option to continue further")      
      }
  }

  return (
    <>
      <div>
        <div className="flex flex-col ml-2 mt-2">
          <div className="flex justify-between flex-row bg-sky-600 text-white border-gray-400 border h-9 items-center px-2">
            <div className="h-7 font-semibold">Q No:1</div>
            <div>
              View in:{" "}
              <select className="bg-white ml-1 text-black border">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Question  */}
          <div className="flex flex-row justify-evenly mt-3 ml-1 shadow-xl">
            <div className="flex flex-col w-1/2 pr-10">
              <div className="text-blue-600">QUESTION INSTRUCTION</div>
              <div className="flex text-justify">
                You want to hit a small box on the floor with a marbke fired
                from a spring-loaded gun that is mounted on a table. The target
                box is a distance R horizontally from the edge of the table; see
                the figure to the right. You compress the spring a distance d,
                but the center of the marble falls short by a distance r of the
                center of the box. How far should you compress the spring to
                score a direct hit(neglect friction)?
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="text-blue-600">QUESTION</div>
              <div>
                A block of mass m is projected with velocity{" "}
                <span>
                  v<sub>0</sub>
                </span>{" "}
                as shown in the fig. The distance between free ends is{" "}
                <span>
                  l<sub>0</sub>
                </span>
                .Maximum displacement of the block during the motion.
              </div>
              <div>
                <Image src={question} alt="problem-image" />
              </div>

              {/* Options */}

              <div className="mt-5 border-t border-gray-100">
                <div className="flex flex-row py-2">
                  <input type="radio" name="selectOption" onChange={getCheckedData} value="1" checked={check === '1'} />
                  <Image src={opt1} alt="option-1" className="ml-1 w-36" />
                </div>
                <div className="flex py-2 flex-row border-t border-gray-100">
                  <input type="radio" name="selectOption" onChange={getCheckedData} value="2" checked={check === '2'} />
                  <Image src={opt3} alt="option-2" className="ml-1 w-36" />
                </div>
                <div className="flex py-2 flex-row border-t border-gray-100">
                  <input type="radio" name="selectOption" onChange={getCheckedData} value="3" checked={check === '3'} />
                  <Image src={opt2} alt="option-3" className="ml-1 w-36" />
                </div>
                <div className="flex flex-row py-2 border-t border-gray-100">
                  <input type="radio" name="selectOption" onChange={getCheckedData} value="4" checked={check === '4'} />
                  <Image src={opt4} alt="option-4" className="ml-1 w-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row h-16 w-4/5 ml-1 border-b items-center border-gray-300'>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={clearResponse}>CLEAR RESPONSE</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={review}>REVIEW</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={dumpFunc}>DUMP</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm">PREVIOUS</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={next}>NEXT</button>
        </div>

        <div className='flex justify-center items-center text-white bg-gray-500'>
            &copy; Dev Rastogi
        </div>
    </>
  );
};

export default Question;
