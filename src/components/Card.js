const todoTitle = "Call family";
const desc = "srcindex.js Line 3:8:  reportWebVitals is defined but never used  no-unused-vars";
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
  return <div className="card">
            <h1 className="cardTitle">{ todoTitle }</h1>
            <p className="cardDes">{ desc }</p>
            <p className="careDate">{currentDate +"/"+ currentMonth +"/"+ currentYear}</p>
          </div>
}

export default Card;