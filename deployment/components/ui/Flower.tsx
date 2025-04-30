import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { flowerMap } from "@/lib/flowers";

type FlowerProps = {
  user: string;
  message: string;
  flower: string; // this is a keyword like "rose"
};

export function Flower({ user, message, flower }: FlowerProps) {
  const ascii = flowerMap[flower] ?? flower;

  return (
    <Card className="w-full max-w-sm p-4">
      <CardContent className="font-mono text-sm whitespace-pre leading-tight">
        <div>{ascii}</div>
        <div className="mt-4">
          <span className="text-muted-foreground">— </span>
          <Link
            href={`https://github.com/${user}`}
            className="font-semibold hover:underline"
          >
            @{user}
          </Link>
          {message && (
            <p className="italic text-muted-foreground mt-1">“{message}”</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
