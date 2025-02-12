import { CircleArrowLeft, Computer } from 'lucide-react';

type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-6">ברוכים הבאים לחידון התכנות</h1>
      <Computer className="w-24 h-24 mx-auto mb-6" />
      <p className="mb-8">בחן את הידע שלך בתכנות</p>
      <button
        onClick={onStart}
        className="inline-flex flex-row-reverse items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 group"
      >
        <CircleArrowLeft className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        התחל
      </button>
    </div>
  );
}

export default StartScreen;
