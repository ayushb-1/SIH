import { ClockIcon } from '@heroicons/react/24/outline';

const Quiz = () => {
  // Number of total questions
  const totalQuestions = 20;

  // Generate an array of question numbers from 1 to totalQuestions
  const questionNumbers = Array.from({ length: totalQuestions }, (_, index) =>
    (index + 1).toString().padStart(2, '0')
  );
    // Split the questionNumbers into rows with four boxes each
    const rows = [];
    for (let i = 0; i < questionNumbers.length; i += 4) {
      rows.push(questionNumbers.slice(i, i + 4));
    }
  return (
    <div className="flex">
      {/* Quiz Card on the Left */}
      <div className="w-[110vh] ml-8">
        <div className="quiz-card shadow-md p-14">
          <div className="quiz-header flex justify-between items-center">
            <p className="question-number text-sm text-gray-600">1/20</p>
            <div className="timer text-sm text-red-500">
              <ClockIcon />
              <span>00:30</span>
            </div>
          </div>
          <h2 className="question text-lg font-semibold mb-4">What is the capital of France?</h2>
          <ul className="options space-y-2">
            <li className="option flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <input
                type="radio"
                name="answer"
                id="optionA"
                className="text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="optionA">A. London</label>
            </li>
            <li className="option flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <input
                type="radio"
                name="answer"
                id="optionA"
                className="text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="optionA">B. Paris</label>
            </li>
            <li className="option flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <input
                type="radio"
                name="answer"
                id="optionA"
                className="text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="optionA">c. ottawa</label>
            </li>
            <li className="option flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <input
                type="radio"
                name="answer"
                id="optionA"
                className="text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="optionA">A. Belgium</label>
            </li>
          </ul>
        </div>
      </div>

      {/* Question Number Boxes on the Right */}
      <div className="ml-4 space-y-2 cursor-pointer">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-2 ">
            {row.map((questionNumber) => (
              <div 
                key={questionNumber}
                className="question-box p-6 w-18 rounded-md bg-gray-200  hover:bg-gray-300 text-gray-600"
              >
                {questionNumber}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
