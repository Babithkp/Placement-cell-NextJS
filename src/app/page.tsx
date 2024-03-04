
import AvailableJobs from "@/components/home/AvailableJobs";
import Partners from "@/components/home/Partners";
import PlacedStudent from "@/components/home/PlacedStudent";
import Screen from "@/components/home/Screen";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Screen/>
      <Partners />
      <PlacedStudent />
      <AvailableJobs />
    </main>
  );
}
