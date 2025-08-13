import {NextResponse} from "next/server";
import prisma from "@/app/lib/prisma";
export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const userId = searchParams.get("userId");

    const data = await prisma.EnneagramData.findMany({
        where: {
            userId: userId,
        },
    });
    return NextResponse.json({
        message: data,
    });
}


export async function POST(request) {
    const data = await request.json();
    const { userId, scores } = data;
    if(await prisma.EnneagramData.findUnique({where : {userId: userId}}) !== null){
        return NextResponse.json({
            status: false,
            message: "Data for this user already exists.",
        });
    }
    const [one, two, three, four, five, six, seven, eight, nine] = scores;
    await prisma.EnneagramData.create({
        data: {
            userId: userId,
            one: one.score,
            two: two.score,
            three: three.score,
            four: four.score,
            five: five.score,
            six: six.score,
            seven: seven.score,
            eight: eight.score,
            nine: nine.score,
        },
    });
    return NextResponse.json({
        status: true,
        message: "Data received successfully",
    });
}