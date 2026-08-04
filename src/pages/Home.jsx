import Hero from "../components/Hero";
import Manifiesto from "../components/Manifiesto";
import CollectionPreview from "../components/CollectionPreview";
import OriginPreview from "../components/OriginPreview";

function Home() {
  return (
    <main>
      <Hero />
      <Manifiesto />
      <CollectionPreview />
      <OriginPreview />
    </main>
  );
}

export default Home;