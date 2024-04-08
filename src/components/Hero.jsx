import { CTAButton } from "./CTAButton";

const floatingIsland1 = new URL(
  "../images/floating-island-1.png",
  import.meta.url
);
const floatingIsland2 = new URL(
  "../images/floating-island-2.png",
  import.meta.url
);
const klarnaLogo = new URL("../images/klarna-logo.png", import.meta.url);

export const Hero = () => (
  <div className="w-full flex flex-row flex-wrap xl:px-8 xl:mt-12 2xl:mt-20 2xl:px-0">
    <div className="grow">
      <h1 className="max-w-[560px] mt-8 font-interextrabold text-center leading-tight tracking-tight text-white text-[3rem] xl:text-[4.5rem] xl:mt-14 xl:text-left 2xl:text-[4.75rem]">
        Tickets selling fast. Split the cost or pay in 30 days.
      </h1>
      <div className="flex flex-col items-center mt-[50px] xl:flex-row xl:mt-12">
        <CTAButton marginX="0" />
        <img
          className="max-w-[80px] mt-5 xl:mt-0 xl:ml-5 xl:max-w-[120px]"
          src={klarnaLogo}
          alt="Klarna Logo"
        />
      </div>
    </div>
    <div className="grow">
      <div className="flex flex-col">
        <img
          className="w-full mt-8 xl:max-w-[520px] xl:mt-0 2xl:max-w-[560px]"
          src={floatingIsland1}
          alt="Floating Festival Island"
        />
        <img
          className="hidden w-full max-w-[308px] xl:block xl:mr-10 xl:mt-9 xl:self-end"
          src={floatingIsland2}
          alt="Floating Festival Island"
        />
      </div>
    </div>
  </div>
);
