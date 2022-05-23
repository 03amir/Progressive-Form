import React, { useState } from "react";
import "./form.css";

let initialdata = [
  {
    quest: "sdfghjk",
    values: undefined,
  },
  {
    quest: "sdfghjkwsedrftgyhuj",
    values: undefined,
  },
  {
    quest: "sdfghjkserdtfgyhuij",
    values: undefined,
  },
  {
    quest: "sdfghjksedrtfgyhuji",
    values: undefined,
  },
];

function Form() {
  const [qnNumber, setQnNumber] = useState(1);
  const [data,setdata]=useState(initialdata);



  function nextHandlr() {
    const n = qnNumber + 1;
    setQnNumber(n);
  }

  function prevHandlr() {
    const n = qnNumber - 1;
    setQnNumber(n);
  }

  const [number, setNumber] = useState(data[qnNumber].values);

  // const question = [, "ASDFGHJKL", "cfgyunbdfghjmn", "wertyuikjhgf"];

  // let person = {"sdfghjk":40, "cfgyunbdfghjmn":70, "wertyuikjhgf":50, "ASDFGHJKL":100};

  const [formData, setFormData] = useState({});

  function changeHndlr(e) {
    data[qnNumber].values = e.target.value;
    console.log(e.target.value);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="progress">
          <div className="progresss">
            <div className="progres">
              <div
                className="pr"
                style={{
                  width:
                    qnNumber === 1
                      ? "50%"
                      : qnNumber === 2
                      ? "100%"
                      : qnNumber >= 2
                      ? "100"
                      : "0%",
                }}
              ></div>
            </div>
            <h3>IDEALISTIC</h3>
          </div>

          <div className="progresss">
            <div className="progres">
              <div
                className="pr"
                style={{ width: qnNumber === 3 ? "50%" : "0%" }}
              ></div>
            </div>
            <h3>DISILLUSIONED</h3>
          </div>
          <div className="progresss">
            <div className="progres"></div>
            <h3>CYNICAL</h3>
          </div>
          <div className="progresss">
            <div className="progres"></div>
            <h3>HOPEFUL</h3>
          </div>
        </div>

        <div className="questionNumber">
          <h2>{qnNumber}/3</h2>
        </div>

        <div className="question">
          <h2>{data[qnNumber].quest}</h2>
        </div>

        <div className="slider">
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={data[qnNumber].values}
            onChange={(e) => {
              changeHndlr(e);
            }}
          />
        </div>

        <div className="details">
          <h2>AWFUL</h2>
          <h2>NICE</h2>
          <h2>GOOD</h2>
          <h2>BETTER</h2>
          <h2>BEST</h2>
        </div>

        <div className="buttons">
          <button onClick={prevHandlr}>prev</button>

          <button onClick={nextHandlr}>next</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
