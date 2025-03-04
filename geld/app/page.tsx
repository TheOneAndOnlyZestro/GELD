import AddButton from "./components/AddButton/AddButton";
import ItemCreator from "./components/ItemCreator/ItemCreator";
import Overlay from "./components/ItemCreator/Overlay";
import ItemList from "./components/ItemList";
import ItemListClient from "./components/ItemListClient";
import ItemListClientContainer from "./components/ItemListClientContainer";

export default async function Home() {
  return (
    <main>
      <h1 className="text-center p-5 text-5xl font-bold">
        GELD: Your AI powered financial helper!
      </h1>

      <ItemList />
      <Overlay />
      <ItemCreator />
      <AddButton />
    </main>
  );
}
