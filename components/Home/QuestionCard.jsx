import React from "react";

const QuestionCard = ({index, question, answer, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleFAQ = () => {
    setOpenIndex(isOpen ? -1 : index);
  };


  return (
    <div className="mb-4" key={question}>
      <div
        onClick={toggleFAQ}
        className="flex cursor-pointer items-center justify-between rounded-lg p-8"
      >
        <h2 className="text-base md:text-xl font-semibold">{question}</h2>
        <span className={`transform text-4xl transition-transform`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 md:text-base text-sm rounded-lg bg-white px-8 py-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;