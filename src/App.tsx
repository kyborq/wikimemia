import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Category } from "./components/Category";
import { Flame, History, Trash2, User } from "lucide-react";
import { useAuth } from "./hooks/useAuth";

function App() {
  // useEffect(() => {
  //   authWithGoogle();
  // }, []);

  const user = useAuth();

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Categories}>
        <Category active icon={<Flame />} label="Best" />
        <Category icon={<History />} label="Recent" />
        <Category icon={<Trash2 />} label="Trash" />
        {user && <Category icon={<User />} label={user.displayName!} />}
      </div>
    </div>
  );
}

export default App;
