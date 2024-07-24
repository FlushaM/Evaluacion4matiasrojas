import { addDoc, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Ciclista } from "../Interfaces/interfaces";


//Funcion para registrar cilistas 
export const registrarCiclista = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'ciclistas'), formData);
    console.log('Documento escrito con ID: ', docRef.id);
  } catch (e) {
    console.error('Error al añadir documento: ', e);
    throw e;
  }
};


//Obtenemos los cilcistas 
export const obtenerCiclistas = async () => {
  const querySnapshot = await getDocs(collection(db, "ciclistas"));
  let ciclistas: Ciclista[] = [];
  querySnapshot.forEach((doc) => {
    let ciclista: Ciclista = {
      nombre: doc.data().nombre,
      apellido: doc.data().apellido,
      contraseña: doc.data().contraseña,
      fechaNacimiento: doc.data().fechaNacimiento,
      sexo: doc.data().sexo,
      categoria: doc.data().categoria,
      bicicleta: doc.data().bicicleta,
      opinion: doc.data().opinion,
      key: doc.id
    };
    ciclistas.push(ciclista);
  });
  return ciclistas;
};

export const obtenerCiclista = async (key: string) => {
  const docRef = doc(db, "ciclistas", key);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let ciclista: Ciclista = {
      nombre: docSnap.data().nombre,
      apellido: docSnap.data().apellido,
      contraseña: docSnap.data().contraseña,
      fechaNacimiento: docSnap.data().fechaNacimiento,
      sexo: docSnap.data().sexo,
      categoria: docSnap.data().categoria,
      bicicleta: docSnap.data().bicicleta,
      opinion: docSnap.data().opinion,
      key: docSnap.id
    };
    return ciclista;
  } else {
    return undefined;
  }
};

export const modificarCiclista = async (ciclista: Ciclista) => {
  const ref = doc(collection(db, "ciclistas"), ciclista.key);
  await updateDoc(ref, {
    nombre: ciclista.nombre,
    apellido: ciclista.apellido,
    contraseña: ciclista.contraseña,
    fechaNacimiento: ciclista.fechaNacimiento,
    sexo: ciclista.sexo,
    categoria: ciclista.categoria,
    bicicleta: ciclista.bicicleta,
    opinion: ciclista.opinion
  });
};

export const eliminarCiclista = async (key: string) => {
  const ref = doc(db, "ciclistas", key);
  await deleteDoc(ref);
};

//Funcion creada para el login del usuario desde la base de datos con admin admin
export const getAdminUser = async () => {
  try {
    const docRef = doc(db, 'admin', 'admin');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No se encontró el usuario admin");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el documento:", error);
    throw error;
  }
};

export const registrarUsuario = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'usuarios'), formData);
    console.log('Documento escrito con ID: ', docRef.id);
  } catch (e) {
    console.error('Error al añadir documento: ', e);
    throw e;
  }
};

export const obtenerUsuarios = async () => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  let usuarios: any[] = [];
  querySnapshot.forEach((doc) => {
    let usuario = {
      nombre: doc.data().nombre,
      apellido: doc.data().apellido,
      email: doc.data().email,
      key: doc.id
    };
    usuarios.push(usuario);
  });
  return usuarios;
};

export const modificarUsuario = async (usuario: any) => {
  const ref = doc(collection(db, "usuarios"), usuario.key);
  await updateDoc(ref, {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
  });
};

export const eliminarUsuario = async (key: string) => {
  const ref = doc(db, "usuarios", key);
  await deleteDoc(ref);
};