import { FirebaseAppProvider } from 'reactfire';

import MainScreen from "./components/MainScreen";

import firebaseConfig from './common/firebase';

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <MainScreen />
    </FirebaseAppProvider>
  );
}

export default App;
