function Main({nummer, inhalt, karte}) {


  return (
    <main className={karte ? "sub card" : "main card"}>
      <h1>
        {nummer}. {inhalt}
      </h1>
    </main>
  );
}

Main.defaultProps = {
    nummer: "3",
    inhalt: "Elaine"
}

export default Main;