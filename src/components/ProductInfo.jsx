import { CTAButton } from "./CTAButton";

const femaleCrowdMember = new URL(
  "../images/female-crowd-member.jpg",
  import.meta.url
);
const lineUpDj1 = new URL("../images/line-up-dj-1.jpg", import.meta.url);
const lineUpDj2 = new URL("../images/line-up-dj-2.jpg", import.meta.url);

export const ProductInfo = () => (
  <div className="w-full mt-[80px] px-0 z-20 relative xl:mt-[380px] xl:px-12">
    <div className="mx-auto max-w-[1000px]">
      <div className="block font-interextrabold text-2xl text-center leading-none text-white mb-5 xl:text-4xl xl:text-left">
        Available Tickets
      </div>
      <div className="w-auto bg-white mb-5 p-8 rounded-[25px] xl:rounded-[50px] xl:p-12">
        <span className="block text-[18px] font-intersemibold text-[#ff5599] xl:text-[23px]">
          Day
        </span>
        <table className="w-full table-auto mt-4">
          <tbody className="divide-y divide-black/10">
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-auto bg-white mb-5 p-8 rounded-[25px] xl:rounded-[50px] xl:p-12">
        <span className="block text-[18px] font-intersemibold text-[#ff5599] xl:text-[23px]">
          Day
        </span>
        <table className="w-full table-auto mt-4">
          <tbody className="divide-y divide-black/10">
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-auto bg-white mb-5 p-8 rounded-[25px] xl:rounded-[50px] xl:p-12">
        <span className="block text-[18px] font-intersemibold text-[#ff5599] xl:text-[23px]">
          Day
        </span>
        <table className="w-full table-auto mt-4">
          <tbody className="divide-y divide-black/10">
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
            <tr className="text-[18px] xl:text-[23px]">
              <td className="py-0.5">Ticket type</td>
              <td className="py-0.5 text-right">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-around my-[40px] xl:my-24">
        <img
          className="hidden w-full xl:block xl:max-w-[280px] rounded-[25px]"
          src={lineUpDj1}
          alt=""
        />
        <img
          className="w-full xl:max-w-[280px] rounded-[25px]"
          src={femaleCrowdMember}
          alt=""
        />
        <img
          className="hidden w-full xl:block xl:max-w-[280px] rounded-[25px]"
          src={lineUpDj2}
          alt=""
        />
      </div>
      <div className="w-full font-interextrabold text-[2.5rem] text-black text-center leading-none mb-[40px] uppercase xl:text-[4.375rem] xl:mb-24">
        80% Sold Out
      </div>
      <div className="w-full">
        <CTAButton marginX="auto" />
      </div>
    </div>
  </div>
);
