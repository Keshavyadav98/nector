import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[linear-gradient(90deg,#8B6BA8_0%,#76539D_25%,#7026A8_50%,#4B197F_70%,#241047_100%)]">
      <img
        src="/homePage.png"
        alt="Homepage"
        className="w-full h-screen object-contain"
      />
    </main>
  );
}
