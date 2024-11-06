export default function Home() {
  const fetchdata = async () => {
    const response = await fetch("http://localhost:3939/users");
    const data = await response.json();
    console.log(data);
  };
  fetchdata();

  return <div>Hello tuuguu</div>;
}
