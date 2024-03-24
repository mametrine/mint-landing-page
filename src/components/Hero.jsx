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
  <div className="flex flex-wrap mt-20">
    <div className="grow">
      <h1 className="max-w-[560px] mt-14 font-interextrabold text-6xl leading-tight tracking-tight text-white">
        Tickets selling fast. Split the cost or pay in 30 days.
      </h1>
      <div className="flex items-center mt-12">
        <div>
          <CTAButton />
        </div>
        <div>
          <img className="max-w-[124px] ml-5" src={klarnaLogo} alt="Klarna Logo" />
        </div>
      </div>
    </div>
    <div className="grow">
      <div className="flex flex-col">
        <img
          className="max-w-[560px]"
          src={floatingIsland1}
          alt="Floating Festival Island"
        />
        <img
          className="max-w-[308px] self-end mr-10 mt-[50px]"
          src={floatingIsland2}
          alt="Floating Festival Island"
        />
      </div>
    </div>
  </div>
);
