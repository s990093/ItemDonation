// utils/logout.js
import { DJANGO_URL } from "../constant";

const logout = async () => {
  // Optionally, you can make an API call to your Django backend to invalidate the session
  try {
    const response = await fetch(DJANGO_URL("web/api/logout/"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include the token if needed for authorization
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json(); // Parse the JSON response

    if (response.ok) {
      // Successfully logged out
      localStorage.removeItem("token"); // Remove token from localStorage
      localStorage.removeItem("username"); // Remove username from localStorage
      console.log(data.message); // Log the success message

      window.location.reload(); // Reload the page

      window.location.href = "/login"; // Redirect to login page
    } else {
      // Handle error if logout fails
      const data = await response.json();
      console.error(data.error || "Logout failed.");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default logout;
