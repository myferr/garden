import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { flowerMap } from "@/lib/flowers";
import { useEffect, useState } from "react";

type FlowerProps = {
  user: string;
  message: string;
  flower: string; // this is a keyword like "rose"
};

export function Flower({ user, message, flower }: FlowerProps) {
  const ascii = flowerMap[flower] ?? flower;
  const [isStarred, setIsStarred] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStarred = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/myferr/garden/stargazers`
        );
        if (response.ok) {
          const stargazers = await response.json();
          const starred = stargazers.some(
            (stargazer: { login: string }) => stargazer.login === user
          );
          setIsStarred(starred);
        } else {
          setIsStarred(false);
        }
      } catch (error) {
        console.error("Error checking stargazers:", error);
        setIsStarred(false);
      }
    };

    checkStarred();
  }, [user]);

  if (isStarred === null) {
    return <div>Loading...</div>; // Show a loading state while checking
  }

  return (
    <Card className="w-full max-w-sm p-4">
      <CardContent
        className={`font-mono text-sm whitespace-pre leading-tight ${
          isStarred ? "" : "opacity-50 blur-sm pointer-events-none"
        }`}
      >
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
            <p className="italic text-muted-foreground mt-1 break-words whitespace-pre-wrap">
              “{message}”
            </p>
          )}
        </div>
      </CardContent>
      {!isStarred && (
        <p className="text-center text-red-500 mt-2 z-50">
          This user has not starred the repository. :(
        </p>
      )}
    </Card>
  );
}
