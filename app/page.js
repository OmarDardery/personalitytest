import Button from "./components/pagesButton";
export default function Home() {
    let pages = [
        { name: "Enneagram Test", path: "/enneagram/test" },
        { name: "MBTI Test", path: "/mbti/test" },
    ]
  return (
    <div className={"flex flex-col items-center h-100 w-[100%] justify-around gap-3"}>
        {pages.map((page, index) => {
            return (
                <Button key={index}  name={page.name} path={page.path} />
            );
        })}
    </div>
  );
}
