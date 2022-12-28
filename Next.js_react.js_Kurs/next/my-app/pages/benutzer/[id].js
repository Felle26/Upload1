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
//SSG + ISR
export async function getStaticProps() {
    const antwort = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await antwort.json();
    return {
        props:{
            users
      }
    }
}
//SSR
// export async function getServerSideProps() {
//   const antwort = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await antwort.json();
//     const ids = users.map((user) => user.id);

//     const paths = ids.map(id => {
//         return{params:{id: id.toString()}}
//     })
//   return {
    
//   };
// }
