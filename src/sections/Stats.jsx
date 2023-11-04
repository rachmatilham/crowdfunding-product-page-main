/* eslint-disable react/prop-types */
export default function Stats({ pledges, backers }) {
  return (
    <div className="stats mt-[25px] mx-auto px-[23px] md:p-0 w-full max-w-[730px] text-center rounded-[10px] border border-solid border-[#7a7a7a/0.2] bg-white">
      <ul className="md:w-[94%] md:flex md:justify-between md:text-left">
        <li className="pt-[30px] md:ml-12 md:pt-12 pb-[18px] list-none relative md:block md:w-[228px]">
          <h2 className="total-pledge text-[2em] text-black font-bold">
            ${pledges.toLocaleString()}
          </h2>
          <p className="mt-[9px] text-[0.93em] font-normal text-darkGray md:mt-[5px]">
            of $100,000 backed
          </p>
        </li>
        <li className="pt-[30px] md:ml-12 md:pt-12 pb-[18px] list-none relative md:block md:w-[228px] stats-li-before">
          <h2 className="total-backer text-[2em] text-black font-bold">
            {backers.toLocaleString()}
          </h2>
          <p className="mt-[9px] text-[0.93em] font-normal text-darkGray md:mt-[5px]">
            total backers
          </p>
        </li>
        <li className="pt-[30px] md:ml-12 md:pt-12 pb-[18px] list-none relative md:block md:w-[228px] stats-li-before">
          <h2 className="text-[2em] text-black font-bold">56</h2>
          <p className="mt-[9px] text-[0.93em] font-normal text-darkGray md:mt-[5px]">
            days left
          </p>
        </li>
      </ul>
      <div className="progress-container md:px-12">
        <div className="progress-bar mt-4 mb-[38px] w-full h-3 rounded-md bg-[#7a7a7a] bg-opacity-20 md:mb-12">
          <div className="progress-full w-[78%] h-full rounded-md bg-moderateCyan"></div>
        </div>
      </div>
    </div>
  );
}
