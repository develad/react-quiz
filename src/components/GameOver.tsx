import { RefreshCwIcon, Trophy } from 'lucide-react';

type gameOverProps = {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
};

function GameOver({ onRestart, score, totalQuestions }: gameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  return (
    <div className="p-8 text-center">
      <Trophy className="w-16 h-16 text-yellow-500 mx-auto animate-bounce" />
      <h2 className="text-2xl font-bold mb-4">המשחק נגמר!</h2>
      <p className="text-lg">
        תוצאה סופית: {score}/{totalQuestions}
      </p>
      <p className="mt-2">({percentage}% תשובות נכונות)</p>
      <button
        className="mt-6 inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors hover:cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onRestart}
      >
        שחק שוב
        <RefreshCwIcon className="w-5 h-5 mx-2" />
      </button>
    </div>
  );
}

export default GameOver;
