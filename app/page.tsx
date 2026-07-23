import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#01000A]">
      <img
        src="/homePage.png"
        alt="Homepage"
        className="w-full h-screen object-contain"
      />
    </main>
  );
}
