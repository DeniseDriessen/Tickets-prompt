// Función para registrar un nuevo usuario
window.registerUser = async (email, password, isAdmin = false) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user;

    // Guardar el rol del usuario en Firestore
    await addDoc(collection(db, "users"), {
      uid: currentUser.uid,
      email: currentUser.email,
      role: isAdmin ? "admin" : "user"
    });

    alert("Usuario registrado correctamente.");
    window.location.href = "#dashboard";
  } catch (error) {
    alert(`Error al registrar: ${error.message}`);
  }
};