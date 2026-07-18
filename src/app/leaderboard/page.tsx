import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/lib/data";

export const metadata = {
  title: "Leaderboard",
  description: "by josh",
};
async function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        {data.list.map((m) => {
          if (m.isLevel10) {
            return (
              <div className="text-yellow-600 mb-1">
                <h1>Level 10</h1>
                {m.displayName} {m.level}
              </div>
            );
          } else {
            return (
              <div className="border">
               {m.place}: {m.displayName} - Level:{m.level}
              </div>
            );
          }
        })}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default Home;
