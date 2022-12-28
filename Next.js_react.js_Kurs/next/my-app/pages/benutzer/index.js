export default function index({users}) {
    return (
      <div>
            <h1>Benutzerliste</h1>
            {users.map((user) => [
                <h2 key={user.username}>{user.username}</h2>
            ])}
      </div>
    );
}
export async function getStaticProps() {
    const antwort = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await antwort.json();
    return {
        props:{
            users
        }
    }
}