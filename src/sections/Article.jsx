/* eslint-disable react/prop-types */
import ArticleCard from "../components/ArticleCard";

export default function Article({ setModal, currentStock }) {
  return (
    <article className="mt-[25px] mx-auto py-[37px] px-[23px] md:p-[45px] md:pb-12 w-full max-w-[730px] rounded-[10px] border border-solid border-[#7a7a7a/0.2] bg-white">
      <h3 className="text-black md:pb-[2px] text-[1.17em] font-bold">
        About this project
      </h3>
      <p className="heading mt-6 md:mt-7">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="heading mt-6 md:mt-7">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div className="selector-container pt-[10px] md:pt-[19px]">
        <ArticleCard
          index={1}
          setModal={setModal}
          currentStock={currentStock}
        />
        <ArticleCard
          index={2}
          setModal={setModal}
          currentStock={currentStock}
        />
        <ArticleCard
          index={3}
          setModal={setModal}
          currentStock={currentStock}
        />
      </div>
    </article>
  );
}
