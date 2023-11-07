import { useState } from "react";

import Article from "./sections/Article";
import Header from "./sections/Header";
import Modal from "./sections/Modal";
import Nav from "./sections/Nav";
import Stats from "./sections/Stats";
import { cardData } from "./CardData";

export default function App() {
  const [totalPledge, setTotalPledge] = useState(89914);
  const [totalBacker, setTotalBacker] = useState(5007);
  const [modal, setModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  let stock = cardData.map((card) => card.stock);
  const [currentStock, setCurrentStock] = useState(stock);

  function valueChange([addedPledge, index]) {
    setTotalPledge(totalPledge + Number(addedPledge));
    setTotalBacker(totalBacker + 1);

    let newStock = [...currentStock];
    if (stock[index] > 0) {
      newStock.splice(index, 1, (currentStock[index] -= 1));
      setCurrentStock(newStock);
    }
  }

  return (
    <>
      <div className="hero-img"></div>

      <main className="pt-0 px-[23px] pb-[63px] relative md:px-[165px] md:pb-[95px]">
        <Nav />
        <Header setModal={setModal} />
        <Stats pledges={totalPledge} backers={totalBacker} />
        <Article setModal={setModal} currentStock={currentStock} />

        <div
          className={"overlay " + (modal || modalSuccess ? "block" : "")}
        ></div>

        <Modal
          modal={modal}
          setModal={setModal}
          success={modalSuccess}
          setSuccess={setModalSuccess}
          handlePledgeChange={valueChange}
          currentStock={currentStock}
        />
      </main>

      <footer>
        <div className="attribution text-[11px] text-center">
          <span>Challenge by </span>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className="text-[#3e52a3] underline"
          >
            Frontend Mentor
          </a>
          <span>. Coded by </span>
          <a
            href="https://github.com/rachmatilham"
            className="text-[#3e52a3] underline"
          >
            Rachmat Ilham Maulana
          </a>
          .
        </div>
      </footer>
    </>
  );
}
