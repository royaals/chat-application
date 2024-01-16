import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId="1041758741440-bsd23hmvagi5l5hrh5v4re5l1pldo108.apps.googleusercontent.com"

  return (
  <GoogleOAuthProvider clientId={clientId}>
<AccountProvider>
<Messenger/>
</AccountProvider>
 
  </GoogleOAuthProvider>
  );
}

export default App;
