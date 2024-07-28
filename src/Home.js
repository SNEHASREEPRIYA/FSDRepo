import { useContext} from "react";
import SwitchTabs from "./Switch Tabs";
import Welcome from "./Welcome";
import { globalContext } from "./App";

function Home() {

    const {globalIsLogin} = useContext(globalContext);

    return (

            <div>
                {
                    globalIsLogin ?
                        <Welcome/>
                    :
                        <SwitchTabs/>
                }
            </div>
            
    )
}
export default Home;