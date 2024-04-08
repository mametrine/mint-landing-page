import { requestData, getTable } from "../js/data-service.js";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { ProductTable } from "./ProductTable";

const femaleCrowdMember = new URL(
  "../images/female-crowd-member.jpg",
  import.meta.url
);
const lineUpDj1 = new URL("../images/line-up-dj-1.jpg", import.meta.url);
const lineUpDj2 = new URL("../images/line-up-dj-2.jpg", import.meta.url);

export const ProductInfo = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    let data = {};
    const setupProductState = async () => {
      data = await requestData();
      setTable(getTable(data));
    };
    setupProductState();
  }, []);

  return (
    <div className="w-full mt-[80px] px-0 z-20 relative xl:mt-[380px] xl:px-12">
      <div className="mx-auto max-w-[1000px]">
        <div className="block font-interextrabold text-2xl text-center leading-none text-white mb-5 xl:text-4xl xl:text-left">
          Available Tickets
        </div>
        {table.length > 0 && <ProductTable data={table} />}
        <div className="flex w-full justify-evenly mb-[40px] xl:my-24">
          <img
            className="hidden w-full xl:block xl:max-w-[295px] rounded-[25px]"
            src={lineUpDj1}
            alt=""
          />
          <img
            className="w-full xl:max-w-[295px] rounded-[25px]"
            src={femaleCrowdMember}
            alt=""
          />
          <img
            className="hidden w-full xl:block xl:max-w-[295px] rounded-[25px]"
            src={lineUpDj2}
            alt=""
          />
        </div>
        <div className="w-full font-interextrabold text-[2.3rem] text-black text-center leading-none mb-[40px] uppercase xl:text-[4.375rem] xl:mb-24">
          80% Sold Out
        </div>
        <div className="w-full">
          <CTAButton marginX="auto" />
        </div>
      </div>
    </div>
  );
};
