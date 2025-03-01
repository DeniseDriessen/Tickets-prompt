// Manejar el enrutamiento básico
window.addEventListener("hashchange", () => {
  const pages = ["login", "register", "registerAdmin", "dashboard", "adminDashboard", "createTicket", "tickets", "ticketDetail"];
  pages.forEach(page => document.getElementById(page).classList.add("hidden"));
  const currentPage = location.hash.split("/")[0].substring(1);
  document.getElementById(currentPage).classList.remove("hidden");

  if (currentPage === "ticketDetail") {
    const ticketId = location.hash.split("/")[1];
    loadTicketDetail(ticketId);
  }
});