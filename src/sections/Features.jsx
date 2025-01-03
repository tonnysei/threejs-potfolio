import { TbColorSwatch, TbBolt, TbTools, TbClock } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-black rounded-3xl overflow-hidden">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30 rounded-lg"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our dedicated team works together to meet your project’s timeline,
            delivering exceptional websites tailored to your needs. Our pricing
            is flexible and based on your budget, ensuring high-quality results at
            a price that works for you.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Customizable Feature */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-lg">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <TbColorSwatch size={24} className="text-white" />
            </div>
            <h3 className="mt-6 text-gray-400">Fully Customizable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            Personalize every detail of your site to match your brand’s unique identity, from design to functionality, ensuring it perfectly aligns with your vision..
            </p>
          </div>

          {/* Fast Performance Feature */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-lg">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <TbClock size={24} className="text-white" />
            </div>
            <h3 className="mt-6 text-gray-400">Lightning-Fast Delivery</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            Our efficient, collaborative team delivers high-quality results swiftly, meeting deadlines without compromising on standards.
            </p>
          </div>

          {/* Flexible Pricing Feature (Updated with Money Icon) */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-lg">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <FaMoneyBillWave size={24} className="text-white" />
            </div>
            <h3 className="mt-6 text-gray-400">Affordable & Negotiable Pricing</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            We offer flexible, negotiable pricing tailored to your budget, ensuring you receive exceptional value and high-quality results.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Features;
