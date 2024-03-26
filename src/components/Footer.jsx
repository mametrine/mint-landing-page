const meadowFlowers = new URL("../images/meadow-flowers.png", import.meta.url);

export const Footer = () => (
  <div className="hidden xl:block xl:z-10 xl:absolute xl:bottom-0">
    <img className="w-full" src={meadowFlowers} alt="Meadow flowers" />
  </div>
);
