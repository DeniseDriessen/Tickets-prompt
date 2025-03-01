// Función para verificar el rol del usuario
const checkUserRole = async (uid) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  let role = "user";
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === uid) {
      role = doc.data().role;
    }
  });
  return role;
};

// Función para iniciar sesión
window.loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user;

    // Verificar el rol del usuario
    const role = await checkUserRole(currentUser.uid);
    if (role === "admin") {
      window.location.href = "#adminDashboard";
    } else {
      window.location.href = "#dashboard";
    }
  } catch (error) {
    alert(`Error al iniciar sesión: ${error.message}`);
  }
};