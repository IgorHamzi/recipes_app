import { createContext } from 'react';

const FamilyContext = createContext({
  user: {
    mail: '',
    senha: '',
  },
});

export default FamilyContext;
