import audi from "../assets/images/Brand Logos/audi.svg";
import chevrolet from "../assets/images/Brand Logos/chevrolet.png";
import gmc from "../assets/images/Brand Logos/gmc.png";
import lexus from "../assets/images/Brand Logos/lexus.png";

const logos = [
  gmc,
  chevrolet,
  audi,
  lexus,
  gmc,
  audi,
  chevrolet,
];

const BrandLogos = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* LOGO WRAPPER */}
        <div
          className="
            flex gap-10 sm:gap-14
            overflow-x-auto
            md:grid md:grid-cols-4 md:gap-10 md:overflow-visible
            lg:flex lg:justify-center lg:gap-20
            scrollbar-hide
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                flex items-center justify-center
              "
            >
              <img
                src={logo}
                alt="Luxury Car Brand"
                className="
                  h-10 sm:h-12 md:h-14 lg:h-16
                  object-contain
                  opacity-70
                  hover:opacity-100
                  transition duration-300
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandLogos;
