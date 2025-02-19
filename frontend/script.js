document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const nav = document.querySelector("nav")
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  
    const contactForm = document.getElementById("contact-form")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()
    })
  })
  
  