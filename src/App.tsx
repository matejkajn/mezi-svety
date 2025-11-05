import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";

const profiles = [
  {
    image: "mikulas.png",
    name: "Mikuláš Karban",
    description: "",
    phone: "+420 739 030 221",
    content:
      "Mikuláš Karban, student AVU, přistupuje k malbě jako k prostředku přesného záznamu vnitřního prožitku. Ve svých velkoformátových abstraktních plátnech se soustředí na konkrétní pocit, který ztvárňuje jako strukturu – vizuální „mechanismus“, vzniklý z koncentrace a tvarové rozvahy. Vedle malby pracuje i s objektem, kde se jeho přístup proměňuje. Motivy čerpá z dětství, které převádí do symbolických forem s jemnou ironií. V jeho tvorbě se výrazně odráží vztah ke krajině rodného Hořicka i zájem o veřejný prostor jako místo sdílené zkušenosti.",
  },
  {
    image: "sasa.png",
    name: "Alexandra Plíšková",
    description: "",
    phone: "+420 606 110 696",
    content:
      "Alexandra Plíšková představuje malby a kresby, které vznikají z momentálního impulsu, intuitivně a bez racionální konstrukce. Každé dílo pro ni představuje stopu určitého okamžiku, nálady či myšlenky, která se otiskuje do barev a kompozice. Svým výtvarným jazykem zve diváka ke zklidnění a introspekci, k zastavení v přítomném okamžiku a vnímání emocí, které často v běžném životě zanikají.",
  },
  {
    image: "kata.png",
    name: "Kateřina Hršelová",
    description: "kurátorka, grafické řešení",
    phone: "+420 777 717 103",
    content: "",
  },
];

const projects = [
  {
    image: "z_nas.png",
    name: "Z nás 2025",
    description: "akryl na plátně, 228 x 200",
    author: "Mikuláš Karban",
  },
  {
    image: "kde_se_to_bere.png",
    name: "Kde se to bere 2025",
    description: "akryl na plátně, 145 x 84",
    author: "Mikuláš Karban",
  },
  {
    image: "naval.png",
    name: "Nával 2025",
    description: "akryl na plátně, 190 x 120",
    author: "Mikuláš Karban",
  },
  {
    image: "nadeje_profil.png",
    name: "Naděje je přenosná 2024",
    description: "železo, bavlnka, 22 x 6 x 8 cm",
    author: "Mikuláš Karban",
  },
  {
    image: "zustan.png",
    name: "Zůstaň 2025",
    description: "železo, provázky, 71 x 31 x 23 cm",
    author: "Mikuláš Karban",
  },
  {
    image: "sasek.png",
    name: "Šašek 2023",
    description: "olejomalba, 140 x 80",
    author: "Alexandra Plíšková",
  },
  {
    image: "telo.png",
    name: "Tělo 2021",
    description: "olejomalba, 60 x 80",
    author: "Alexandra Plíšková",
  },
  {
    image: "hudba.png",
    name: "Hudba 2021",
    description: "olejomalba, 60 x 90",
    author: "Alexandra Plíšková",
  },
  {
    image: "zdroj_zivota.png",
    name: "Zdroj života 2023",
    description: "olejomalba, 60 x 80",
    author: "Alexandra Plíšková",
  },
  {
    image: "analyza.png",
    name: "Analýza 2022",
    description: "olejomalba, 40 x 50",
    author: "Alexandra Plíšková",
  },
  {
    image: "kolik_svetu_vidis.png",
    name: "Kolik světů vidíš? 2021",
    description: "kresba, 30 x 25",
    author: "Alexandra Plíšková",
  },
  {
    image: "rezonance.png",
    name: "Rezonance 2021",
    description: "kresba, 25 x 25",
    author: "Alexandra Plíšková",
  },
];

function App() {
  return (
    <>
      <header className="w-full bg-black text-white height-[401px] py-2">
        <div className="w-[85%] m-auto">
          <h1 className="font-extrabold text-6xl pt-8 pb-2 uppercase">
            <div>Mezi</div>
            <div>Světy</div>
          </h1>

          <div>Online katalog výstavy</div>
          <div className="font-semibold py-6">
            “Dva mladí výtvarníci. Dvě cesty obrazem. Jedna výstava o tom, co se
            odehrává mezi vnitřním a vnějším světem.”
          </div>
        </div>
      </header>
      <main className="w-[85%] m-auto">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
        <hr className="my-4 h-[0.5px] bg-black" />
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}{" "}
        <hr className="my-4 h-[0.5px] bg-black" />
      </main>
      <footer className="w-[85%] m-auto">
        <div className="italic py-4">
          *Rozměry děl jsou uvedeny v centimetrech.
        </div>
        <div className="italic py-4">
          V případě zájmu o koupi obrazu kontaktujte Alexandru nebo Mikuláše
          (kontakty výše).
        </div>
        <div className="text-center text-sm text-gray pt-8 pb-6">
          © Kateřina Hršelová, Jonáš Matějka
        </div>
      </footer>
    </>
  );
}

export default App;
