"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react"; // Import useState and useEffect for fetching data
import { Flower } from "@/components/ui/Flower";

export default function Home() {
  interface GardenData {
    registered: { user: string; message: string; flower: string }[];
  }

  const [gardenData, setGardenData] = useState<GardenData>({ registered: [] }); // Default to empty array
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track errors

  // Fetch garden data when component mounts
  useEffect(() => {
    async function fetchGardenData() {
      try {
        const res = await fetch("https://garden-api-nine.vercel.app/");
        if (!res.ok) throw new Error("Failed to fetch garden data.");
        const data = await res.json();
        setGardenData(data); // Set the full response data
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "An error occurred while fetching data.");
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    }

    fetchGardenData(); // Call the function to fetch data
  }, []); // Empty dependency array means it runs once when the component mounts

  // Access the registered flowers array directly from the fetched data
  const registeredFlowersCount = gardenData.registered.length || 0;

  // Render loading state or error
  if (loading) return <p>🌱 Loading your garden...</p>;
  if (error) return <p>🚫 Error: {error}</p>;

  return (
    <div>
      <div className="font-mono flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-4xl tracking-wider border-b">garden.</h1>
        <p>Register your flower {"<3"}</p>
        <div className="flex space-x-2 mt-3 items-center">
          <Link href={"https://github.com/myferr/garden"}>
            <Button size={"sm"} className="hover:cursor-pointer">
              Plant a flower
            </Button>
          </Link>
          <Link href={"#garden"}>
            <Button
              size={"sm"}
              className="hover:cursor-pointer"
              variant={"secondary"}
            >
              Garden <FaArrowDown className="size-2" />
            </Button>
          </Link>
        </div>
        <p className="mt-3 text-neutral-600 text-sm pointer-events-none">
          {registeredFlowersCount} flower
          {registeredFlowersCount > 1 ? <span>{"s"}</span> : <></>} exist
          {registeredFlowersCount === 1 ? <span>{"s"}</span> : <></>}
          ... {registeredFlowersCount === 0 ? <span>{":("}</span> : <></>}
        </p>
        <Link
          href={"https://github.com/myferr/garden"}
          className="mt-3 text-neutral-500 hover:text-white transition-colors"
        >
          <FaGithub />
        </Link>
      </div>
      {registeredFlowersCount > 0 ? (
        <div>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="border-l-3 pl-3">
                <h1 className="text-2xl font-bold">Beautiful flowers...</h1>
                <Link href={"https://github.com/myferr/garden"}>
                  <Button variant={"secondary"} className="mt-3">
                    Get your own! {"<3"}
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              id="garden"
            >
              {gardenData.registered.map(
                (
                  flower: { user: string; message: string; flower: string },
                  index: number
                ) => (
                  <Flower
                    key={index}
                    user={flower.user}
                    message={flower.message}
                    flower={flower.flower}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="h-32"></div>
    </div>
  );
}
