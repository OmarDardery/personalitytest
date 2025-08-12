"use client";

import { useAppContext } from "@/app/appContextProvider";

export default function EnneagramResultsPage() {
    const {enn} = useAppContext();
    const score = enn.map(ennType => {
        const total = ennType.reduce((acc, curr) => acc + curr.score, 0);
        return {
            score: (total / 64).toFixed(2) * 100,
            type: ennType[0].enneagramType,
        }
    });
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Enneagram Results</h1>
            <div className="text-lg mb-2">Your Enneagram scores are as follows:</div>
            <ul className="list-disc pl-5">
                {score.map((item, index) => (
                    <li key={index} className="mb-2">
                        Type {item.type}: {item.score}%
                    </li>
                ))}
            </ul>
        </div>
    );
}