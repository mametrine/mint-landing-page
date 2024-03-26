const logo = new URL("../images/mint-festival-logo-white.png", import.meta.url);

export const Header = () => (
  <div className="w-full flex justify-center pb-2 mt-6 border-solid border-b border-white/30 xl:justify-start xl:pb-3 xl:mt-20">
    <img className="max-w-[250px] xl:max-w-[300px]" src={logo} alt="Mint Festival Logo" />
  </div>
);
