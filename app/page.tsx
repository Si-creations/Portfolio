import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import Image from "next/image";
import Photo from "@/public/doggo.jpg";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main className="p-4 max-w-7xl mx-auto">
        <Nav />
        <div className="flex flex-col  items-center  min-h-screen lg:flex-row sm:gap-36  justify-between">
          <div>
            <h1 className="text-center my-6 lg:text-left">
              Ahoj, <br></br> vítam ťa v mojom portfóliu.
            </h1>
            <h2 className="text-center text-2xl p-10 lg:text-left sm:pl-0">
              Jeden múdry človek raz povedal:"Lorem ipsum dolor sit amet." Ale
              ja ti teraz poviem radšej niečo o sebe 😃.<br></br>
              Volám sa Silvester a som začinajúci Front-end
              programátor.Momentalne hľadám svoju prvú prácu v IT sektore.
            </h2>
          </div>
          <Image
            width={550}
            height={250}
            src={Photo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl max-w-full"
          />
        </div>
        <Cards />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
