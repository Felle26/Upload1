import styles from "./../../styles/Home.module.css"
export default function contact() {
    return (
      <div className={styles.container}>
        <h1>Kontakt</h1>

        <form>
          <div>
            <label for="name" hidden> Name: </label>
            <input placeholder="Dein Name" id="name" name="name" type="text" required></input>
          </div>
          <div>
            <label for="email" hidden> E-Mail: </label>
            <input placeholder="E-Mail" id="email" name="email" type="email" required></input>
          </div>
          <div>
            <label for="text" hidden>Deine Nachricht: </label>
            <textarea placeholder="Deine Nachricht" type="text" name="text"></textarea>
          </div>
        </form>
      </div>
    );
}