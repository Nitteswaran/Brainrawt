"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface QuizProps {
  questions: {
    question: string
    options: string[]
    answer: string
  }[]
}

export function Quiz({ questions }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [completed, setCompleted] = useState(false)

  const handleSelect = (option: string) => {
    if (isCorrect !== null) return // already answered
    setSelectedAnswer(option)
    setIsCorrect(option === questions[currentStep].answer)
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    return (
      <div className="border-4 border-black p-8 bg-neo-accent text-white shadow-neo-md text-center rotate-1 relative z-10">
        <h3 className="font-black text-4xl uppercase mb-4">Quiz Completed!</h3>
        <p className="font-bold text-xl mb-6">You&apos;ve solidified your knowledge. +50 XP</p>
        <Badge className="bg-white text-black text-lg px-6 py-2 shadow-neo-sm border-2 border-black inline-block">+50 XP Earned</Badge>
      </div>
    )
  }

  const q = questions[currentStep]

  return (
    <div className="border-4 border-black p-6 md:p-8 bg-white shadow-[8px_8px_0px_0px_#FFD93D] -rotate-1 relative z-10">
      <Badge className="absolute -top-4 -left-4 shadow-neo-sm bg-black text-white px-3 py-1 text-sm border-2 border-white">Question {currentStep + 1}/{questions.length}</Badge>
      
      <h3 className="font-black text-2xl mb-6 mt-2">{q.question}</h3>
      
      <div className="flex flex-col gap-4 mb-8">
        {q.options.map((option, idx) => {
          let stateClass = "bg-white hover:bg-slate-50"
          if (selectedAnswer === option) {
            stateClass = isCorrect ? "bg-green-300 shadow-none translate-x-[2px] translate-y-[2px]" : "bg-red-400 shadow-none translate-x-[2px] translate-y-[2px]"
          } else if (selectedAnswer && option === q.answer) {
             stateClass = "bg-green-300"
          }

          return (
            <button
              key={idx}
              disabled={isCorrect !== null}
              onClick={() => handleSelect(option)}
              className={`border-4 border-black p-4 text-left font-bold text-lg shadow-neo-sm transition-all ${stateClass}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {isCorrect !== null && (
        <div className="flex justify-between items-center border-t-4 border-black pt-6">
          <p className={`font-black uppercase text-xl ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? "Correct! 🔥" : "Incorrect 💀"}
          </p>
          <Button onClick={handleNext} className="shadow-neo-sm">
            {currentStep < questions.length - 1 ? "Next Question →" : "Finish Quiz"}
          </Button>
        </div>
      )}
    </div>
  )
}
