import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import RatingButton from "./RatingButton";
import ThankYou from "./ThankYou";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [rating, setRating] = useState(0);

  const submitRating = () => {
    setIsSubmitted(true);
    setIsHidden(true);
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="container mx-auto max-w-sm w-4/6 bg-darkBlue text-white p-8 rounded-[2rem]">
      {isHidden ? null : (
        <div>
          <div className="rounded-full bg-mediumGray inline-block p-3 my-1 mb-4">
            <AiFillStar className="text-3xl text-orange" />
          </div>

          <div>
            <h1 className="text-4xl font-700 mb-2">How did we do?</h1>
            <p className="font-thin">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>

          <div className="flex justify-between my-6">
            <RatingButton number="1" handleRating={handleRating} />
            <RatingButton number="2" handleRating={handleRating} />
            <RatingButton number="3" handleRating={handleRating} />
            <RatingButton number="4" handleRating={handleRating} />
            <RatingButton number="5" handleRating={handleRating} />
          </div>

          <button
            className="bg-orange text-white text-xl font-700 rounded-full py-4 px-8 w-full hover:bg-white hover:text-orange"
            onClick={submitRating}
          >
            SUBMIT
          </button>
        </div>
      )}

      {isSubmitted && <ThankYou rating={rating} />}
    </div>
  );
}

export default App;
