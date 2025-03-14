import React,{useState} from "react";
import Question from "./Question";
import Result from "./Result";

const quizData=[
    {
        question:"What is the Capital of France?",
        options:["paris","London","Delhi","Berlin"],
        answer:"paris",
    },
    {
        question:"Which Language is used for Web Development?",
        options:["python","java","JavaScript","C++"],
        answer:"JavaScript"
    },
    {
        question:"What is 2+2",
        options:["3","4","5","6"],
        answer:"4",
    },
];

export default function QuizApp(){
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [quizEnd,setQuizEnd]=useState(false);

    const handleAnswer=(selectedOption)=>{
        if(selectedOption===quizData[currentQuestion].answer){
            setScore(score+1)
        }

        if(currentQuestion<quizData.length-1){
            setCurrentQuestion(currentQuestion+1)
        }else{
            setQuizEnd(true)
        }
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold mb-5">React Quiz App</h1>
                {quizEnd?(
                        <Result score={score} total={quizData.length}/>
                    ):(
                        <Question  
                            data={quizData[currentQuestion]}
                            onAnswer={handleAnswer}
                        />
                    )
                }
        </div>
    )
}