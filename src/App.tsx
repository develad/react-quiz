import { useEffect, useState } from 'react';
import GameOver from './components/GameOver';
import QuestionCard from './components/QuestionCard';
import StartScreen from './components/StartScreen';
import { GameState } from './types/quiz';
import { QUESTIONS } from './data/questions';

import Timer from './components/Timer';
import { INITIAL_TIMER_VALUE } from './types/constant';
import Footer from './components/Footer';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIMER_VALUE);

  useEffect(() => {
    let timer: number;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('end');
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, gameState]);

  const handleStart = () => {
    setGameState('playing');
    setTimeLeft(INITIAL_TIMER_VALUE);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (index: number): void => {
    setSelectedAnswer(index);

    const isCorrect = QUESTIONS[currentQuestion].correctAnswer === index;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState('end');
      }
    }, 1000);
  };

  return (
    <div
      dir="rtl"
      className="bg-slate-500 text-white min-h-screen p-4 grid place-items-center"
    >
      <div className="max-w-3xl w-full bg-slate-800 shadow-md rounded-md mx-auto">
        {gameState === 'start' && <StartScreen onStart={handleStart} />}
        {gameState === 'playing' && (
          <div className="p-4 sm:p-8">
            <Timer timeLeft={timeLeft} />
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              onAnswerSelect={handleAnswerSelect}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
            />
            <div className="mt-3 mb-6 text-center underline">
              ניקוד:{score}/{QUESTIONS.length}
            </div>
          </div>
        )}
        {gameState === 'end' && (
          <GameOver
            onRestart={handleStart}
            score={score}
            totalQuestions={QUESTIONS.length}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
