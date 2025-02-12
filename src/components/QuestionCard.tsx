import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types/quiz';
import { ANSWER_OPTIONS } from '../types/constant';

type QuestionCardProps = {
  question: Question;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  totalQuestions: number;
  currentQuestion: number;
};

function QuestionCard({
  question,
  onAnswerSelect,
  selectedAnswer,
  totalQuestions,
  currentQuestion,
}: QuestionCardProps) {
  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null) {
      return 'hover:bg-slate-300 hover:text-gray-900';
    }
    if (index === question.correctAnswer) {
      return 'bg-green-200 border-green-500 text-gray-900';
    }
    if (selectedAnswer === index) {
      return 'bg-red-200 border-red-500 text-gray-900';
    }
    return 'opacity-50';
  };

  return (
    <div className="p-0 sm:p-8">
      <h2 className="font-medium mb-2 underline">
        שאלה {currentQuestion + 1} מתוך {totalQuestions}
      </h2>
      <p className="text-2xl font-semibold mb-4 text-center">
        {' '}
        {question.question}
      </p>
      <div className="grid grid-cols-1 gap-4 mt-4 p-4 ">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              return selectedAnswer === null && onAnswerSelect(index);
            }}
            className={`w-full text-right p-4 rounded-lg border hover:cursor-pointer ${getButtonClass(
              index
            )} transition-all duration-300`}
          >
            <div className="flex items-center justify-between gap-2">
              <span>
                <span className="font-extrabold ml-2">
                  {ANSWER_OPTIONS[index as keyof typeof ANSWER_OPTIONS]}.
                </span>
                {option}
              </span>
              {selectedAnswer !== null && index === question.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
