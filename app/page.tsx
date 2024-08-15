import Guest from "@/components/Guest";
import { checkUser } from "@/lib/checkUser";
import AddTransaction from "@/components/AddTransaction";

const HomePage = async () => {

  const user = await checkUser();

  if(!user) return <Guest/>;

  return ( <main>
    <h1>Welcome, {user.name}</h1>
    <AddTransaction/>
  </main> );
}
 
export default HomePage;