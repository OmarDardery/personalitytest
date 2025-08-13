"use client";
import { useAppContext } from "@/app/appContextProvider";
import React, {useState, useEffect} from "react";
export default function EnneagramResultsPage() {
    const {enn} = useAppContext();
    const score = enn.map(ennType => {
        const total = ennType.reduce((acc, curr) => acc + curr.score, 0);
        return {
            score: (total / 64).toFixed(2) * 100,
            type: ennType[0].enneagramType,
        }
    });

    const [userId, setUserId] = useState("");
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
            <div>
                <h2>
                    Upload to database
                </h2>
                <input type={"text"} value={userId} onChange={(e) => {setUserId(e.target.value)}} />
                <button className={"nav-btn submit-btn m-5"} onClick={()=>{
                    fetch("/api/hehe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userId: encodeURIComponent(userId),
                            scores: score,
                        }),
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.status){
                            alert("Data uploaded successfully!");
                        }else{
                            alert("Failed to upload data. Please try again.");
                        }
                    })
                    .catch(error => {
                        console.error("Error uploading data:", error);
                    });
                }}>
                <span className={"button_top"}>
                     <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
                    </svg>
                    <span>Upload</span>
                  </span>
                </button>
            </div>
        </div>
    );
}