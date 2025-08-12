export default function QuestionsPage({questions, setQuestions, tpage, cpage}) {
    return (
        <div className={'grid grid-cols-4 grid-rows-4 gap-[1vw] w-[70%] min-w-max mx-auto mt-10' + (tpage === cpage ? '' : ' hidden')}>
            {questions.map((question, index) => (
                <div
  className="bg-white relative border-[0.07em] shadow rounded-lg overflow-hidden border-gray-900
             flex flex-col justify-end cursor-pointer text-center aspect-square h-full min-w-[5em]" key={index} onClick={() => setQuestions(prev => {
                    const updatedQuestions = [...prev];
                    updatedQuestions.forEach(enn => {
                        enn.forEach(q => {
                            if (question === q) {
                                q.score = (q.score + 1) % 5; // Increment score, reset if it reaches 4
                            }
                        });
                    })
                    return updatedQuestions;
                })} >
<div className="relative rounded-lg overflow-hidden border-1 border-gray-700 aspect-square">
  {/* Bottom fill bars */}
  <div className="absolute inset-0 z-10 flex flex-col justify-end">
    {[1,2,3,4].map(n =>
      question.score >= n ? <div key={n} className="w-full h-[25%] bg-blue-300" /> : null
    )}
  </div>

  {/* Centered text */}
  <div className="absolute inset-0 z-20 grid place-items-center pointer-events-none">
    <h3 className="font-si text-[clamp(0.1em,1em,2.5vw)] m-1 font-semibold text-center leading-snug">
      {question.question}
    </h3>
  </div>
</div>
</div>
            ))}
        </div>
    );
}