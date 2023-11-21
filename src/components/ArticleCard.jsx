/* eslint-disable react/prop-types */

export default function ArticleCard({
  id,
  heading,
  main,
  setModal,
  currentStock,
}) {
  const stock = currentStock[id];

  function handleModalButton() {
    if (stock != 0) setModal(true);
    window.innerWidth > 768
      ? window.scrollTo({ top: 150, left: 0, behavior: "smooth" })
      : window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  }

  return (
    <div>
      <div className={"card " + (stock == 0 ? "opacity-50" : "")}>
        <div className="card-heading md:flex md:justify-between md:items-center">
          <h4 className="text-black text-[0.9em] md:text-[1.12em] font-bold leading-normal">
            {heading.title}
          </h4>
          <p className="mt-1 text-moderateCyan font-medium md:pr-0 md:text-[0.95em]">
            Pledge ${heading.price} or more
          </p>
        </div>
        <p className="main mt-[21px] md:mt-[19px] md:text-[1em]">{main}</p>
        <div className="flex-container md:flex md:justify-between md:items-center">
          <div className="stock mt-[23px] flex items-center">
            <h3 className="stock-number mr-2 text-[2em] font-bold md:pb-[2px]">
              {stock}
            </h3>
            <p>left</p>
          </div>
          <button
            className={
              "mt-6 w-[158px] h-12 rounded-3xl text-[0.833rem] " +
              (stock == 0
                ? "bg-darkGray hover:bg-darkGray hover:cursor-not-allowed"
                : "")
            }
            onClick={handleModalButton}
          >
            {stock == 0 ? "Out of Stock" : "Select Reward"}
          </button>
        </div>
      </div>
    </div>
  );
}
