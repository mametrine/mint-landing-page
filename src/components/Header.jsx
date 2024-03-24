const logo = new URL("../images/mint-festival-logo-white.png", import.meta.url);

export const Header = () => (
  <div className="flex mt-20 pb-3 border-solid border-b border-white/30">
    <img className="max-w-[300px]" src={logo} alt="Mint Festival Logo" />
  </div>
);
