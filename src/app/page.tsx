import MagazineContent from "./general/MagazineContent";

import NewsTicker from "./general/NewsTicker";
import MagazineList from "./general/MagazineList";
import PodcastList from "./general/PodcastList";
import AuthorsList from "./general/AuthorsList";
import PageTitle from "./general/PageTitle";


export default function Home() {
  return (
    <div>

      <PageTitle
        srcImage="/pagetitle/Art & Life.svg"
        altImage="ART & LIFE"
      />

      {/* Бегущая строка */}
      <NewsTicker />

      <MagazineContent />

      <MagazineList />

      <PodcastList />

      <AuthorsList />

    </div>
  );
}
