/* eslint-disable react/prop-types */
import ModalCard from "../components/ModalCard";

export default function Modal({
  modal,
  setModal,
  success,
  setSuccess,
  handlePledgeChange,
  currentStock,
}) {
  function handleModalClose() {
    setModal(false);
  }
  function handleProceed(pledgeValue) {
    setModal(false);
    setSuccess(true);
    handlePledgeChange(pledgeValue);
    window.innerWidth > 768
      ? window.scrollTo({ top: 400, left: 0, behavior: "smooth" })
      : window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  }
  function handleSuccess() {
    setModal(false);
    setSuccess(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="modal-container w-full absolute top-0 left-0 px-6 md:px-[165px]">
      <div className={"modal-selection " + (modal ? "block" : "")}>
        <div className="flex-modal flex justify-between items-center md:relative">
          <h3 className="text-[1.17em] md:text-[1.5em] font-bold">
            Back this project
          </h3>
          <img
            src="./images/icon-close-modal.svg"
            alt="Close Modal"
            className="cursor-pointer md:absolute md:-top-[17px] md:-right-[15px]"
            onClick={handleModalClose}
          />
        </div>
        <p className="heading mt-6 md:mt-4 md:pb-[6px]">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <ModalCard
          index={0}
          handleProceed={handleProceed}
          currentStock={currentStock}
        />
        <ModalCard
          index={1}
          handleProceed={handleProceed}
          currentStock={currentStock}
        />
        <ModalCard
          index={2}
          handleProceed={handleProceed}
          currentStock={currentStock}
        />
        <ModalCard
          index={3}
          handleProceed={handleProceed}
          currentStock={currentStock}
        />
      </div>

      <div className={"modal-success " + (success ? "block" : "")}>
        <img
          src="./images/icon-check.svg"
          alt="Check Icon"
          className="mx-auto md:w-[91px] md:h-[91px]"
        />
        <h3 className="font-bold mt-[21px] md:mt-11 text-[1.17em] md:text-[1.51em]">
          Thanks for your support!
        </h3>
        <p className="heading mt-6 md:mt-[15px]">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="mt-[31px] w-[108px] h-12 rounded-3xl text-[0.833em]
           "
          onClick={handleSuccess}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
