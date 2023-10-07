// import axios from 'axios';

export default function callTestApi() {
  const handleClick = async () => {
    axios
      .get('http://localhost:3003/')
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <button onclick={handleClick}>get data</button> */}
        <button>get data</button>
      </main>
    </div>
  );
}
