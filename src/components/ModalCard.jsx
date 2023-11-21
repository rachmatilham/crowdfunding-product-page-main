/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ModalCard({
  id,
  heading,
  main,
  handleProceed,
  currentStock,
  toggle,
  open,
}) {
  const stock = currentStock[id];
  const [inputValue, setInputValue] = useState(heading.price);

  function handleInputClick(e) {
    toggle(id);
    e.currentTarget.firstElementChild.checked = true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleProceed([e.target.inputPledge.value, id]);
  }
  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div
      className={
        "card modal-card " + (id !== 0 && stock == 0 ? "opacity-50" : "")
      }
    >
      <div
        className={
          "card-content-container " + (id == 0 ? " pb-[30px] md:pb-[31px]" : "")
        }
      >
        <div
          className={
            "input-container " + (id == 0 ? "mt-[9px] md:mt-[3px]" : "")
          }
          onClick={handleInputClick}
        >
          <input
            type="radio"
            name="pledge"
            id={`pledge-${id}`}
            aria-label={`Pledge ${id}`}
            className="input-radio"
            disabled={id !== 0 && stock == 0 ? true : false}
          />
          <div className="card-heading md:flex md:justify-between md:items-start">
            <h4 className="input-heading">{heading.title}</h4>
            <p
              className={
                "input-heading-p " + (heading.price == 0 ? "hidden" : "")
              }
            >
              Pledge ${heading.price} or more
            </p>
          </div>
        </div>
        <p
          className={
            "main md:ml-[49px] " + (id == 0 ? "mt-[34px] md:mt-2" : "")
          }
        >
          {main}
        </p>
        <div className={"modal-stock " + (heading.price == 0 ? "hidden" : "")}>
          <h4 className="modal-stock-number quantity font-bold">{stock}</h4>
          <p className="leading-normal">left</p>
        </div>
      </div>

      <div
        className={
          "pledge-container " +
          (open && (stock !== 0 || id === 0) ? "block" : "hidden")
        }
      >
        <div className="pledge">
          <p>Enter your pledge</p>
          <form className="pledge-form" onSubmit={handleSubmit}>
            <div className="pledge-input">
              <span className="text-darkGray">$</span>
              <input
                type="number"
                name="inputPledge"
                className="pledge-input-number"
                min={heading.price}
                placeholder={heading.price}
                onChange={handleInputValue}
                value={inputValue}
              />
            </div>
            <input
              type="submit"
              className="pledge-input-button"
              value="Continue"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
