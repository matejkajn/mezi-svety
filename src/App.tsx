import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import {
  profiles_cz,
  projects_cz,
  profiles_en,
  projects_en,
} from "./data/TextContent";
import { useTranslation } from "react-i18next";

function App() {
  const [language, setLanguage] = useState<"CZ" | "EN">("EN");
  const [t, i18n] = useTranslation("global");

  const toggleLanguage = (): void => {
    setLanguage(language === "CZ" ? "EN" : "CZ");
  };

  return (
    <>
      <header className="w-full bg-black text-white height-[401px] py-2">
        <div className="w-[85%] m-auto">
          <button
            className="absolute top-6 right-7 font-semibold"
            onClick={() => {
              toggleLanguage();
              i18n.changeLanguage(language.toLowerCase());
            }}
          >
            {language}
          </button>
          <h1 className="font-extrabold text-6xl pt-10 pb-2 uppercase mt-6">
            <div className="pb-1">{t("header.title1")}</div>
            <div>{t("header.title2")}</div>
          </h1>

          <div>{t("header.subtitle")}</div>
          <div className="font-semibold py-6">“{t("header.quote")}”</div>
        </div>
      </header>
      <main className="w-[85%] m-auto">
        {language === "EN"
          ? profiles_cz.map((profile) => (
              <ProfileCard key={profile.name} {...profile} />
            ))
          : profiles_en.map((profile) => (
              <ProfileCard key={profile.name} {...profile} />
            ))}
        <hr className="my-4 h-[0.5px] bg-black" />
        {language === "EN"
          ? projects_cz.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))
          : projects_en.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
        <hr className="my-4 h-[0.5px] bg-black" />
      </main>
      <footer className="w-[85%] m-auto">
        <div className="italic py-4">{t("footer.part1")}</div>
        <div className="italic py-4">{t("footer.part2")}</div>
        <div className="text-center text-sm text-gray pt-8 pb-6">
          © Kateřina Hršelová, Jonáš Matějka
        </div>
      </footer>
    </>
  );
}

export default App;
