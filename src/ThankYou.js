import Image from "./images/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="max-w-[50%] mb-8" src={Image} alt="Thank you" />
      <p className="bg-mediumGray text-orange px-3 py-1 rounded-full">
        You selected {rating} out of 5
      </p>
      <h1 className="text-2xl font-700 mt-6 mb-2">Thank you!</h1>

      <p className="text-center font-thin ">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
