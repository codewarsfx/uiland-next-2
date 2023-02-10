import { PopContextProvider } from '../context/PopContext';


const withPopContext = Component => ({ ...props }) => (
    <PopContextProvider><Component {...props} /></PopContextProvider>
  );
export default withPopContext;
