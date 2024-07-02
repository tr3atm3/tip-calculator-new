import { useState } from "react";

function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [yours, setYours] = useState(0);
  const [yoursfriend, setYoursFriend] = useState(0);
  const tipBill = (totalBill * yours) / 100 + (totalBill * yoursfriend) / 100;
  const calBill = totalBill + tipBill;
  function handleReset() {
    setTotalBill(0);
    setYours(0);
    setYoursFriend(0);
  }
  return (
    <div>
      <Bill totalBill={totalBill} setTotalBill={setTotalBill} />
      <Service service={yours} setService={setYours}>
        you
      </Service>
      <Service service={yoursfriend} setService={setYoursFriend}>
        your friend
      </Service>
      {totalBill > 0 && (
        <>
          <h3>
            You pay ${calBill} (${totalBill} + ${tipBill} tip)
          </h3>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

function Bill({ setTotalBill, totalBill }) {
  return (
    <div>
      <span>How much was the bill ? </span>
      <input
        type="text"
        value={totalBill}
        onChange={(e) => setTotalBill(Number(e.target.value))}
      />
    </div>
  );
}
function Service({ children, service, setService }) {
  return (
    <div>
      <span>How did {children} like the service?</span>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value={0}>Bad</option>
        <option value={10}>Good</option>
        <option value={20}>Very Good</option>
      </select>
    </div>
  );
}

export default App;
