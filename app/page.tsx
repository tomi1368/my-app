import Input from "./components/Input";
import Table from "./components/Table";
import styles from "./page.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <Table data={data}></Table>
    </main>
  );
}
