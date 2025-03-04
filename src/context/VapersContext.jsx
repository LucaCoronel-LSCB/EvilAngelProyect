import { createContext, useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// Crear el contexto
export const VapersContext = createContext();

// Crear el proveedor del contexto
export const VapersProvider = ({ children }) => {
  const [vapersData, setVapersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVapers = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "vapers"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVapersData(docs);
      } catch (error) {
        console.error("Error obteniendo datos de Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    getVapers();
  }, []);

  return (
    <VapersContext.Provider value={{ vapersData, loading }}>
      {children}
    </VapersContext.Provider>
  );
};
