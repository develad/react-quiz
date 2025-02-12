import { TimerIcon } from 'lucide-react';

function Timer({ timeLeft }: { timeLeft: number }) {
  return (
    <div className="mx-auto flex items-start justify-center gap-2 text-2xl font-bold mb-8">
      <TimerIcon className="w-6 h-6" />
      <span className="text-lg">{timeLeft} שניות</span>
    </div>
  );
}

export default Timer;
