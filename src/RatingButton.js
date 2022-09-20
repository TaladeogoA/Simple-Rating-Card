const RatingButton = ({ number, handleRating }) => {
  return (
    <button
      value={number}
      className="bg-mediumGray rounded-[50%] inline-block py-4 px-6 text-lg hover:bg-lightGray focus:bg-orange"
      onClick={() => handleRating(number)}
    >
      {number}
    </button>
  );
};

export default RatingButton;
