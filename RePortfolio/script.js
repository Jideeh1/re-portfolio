const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");

// When sidebar is hidden
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    explore: `
      <figure class="infobox">
        <p class="infoname">John Daniel Absalud</p>
        <p class="loc">
          <span class="material-symbols-rounded sysl">
            my_location
          </span>
          <span style="padding-top: 3px;">Antipolo City, Philippines</span>
        </p>
        <p class="desc">I'm 19 years old, a Multimedia artist and a Developer. I have been doing designs for 6 years and programming for a little more than a year.</p>
      </figure>
      <h1 class="maintxt hs">Summary of Qualifications:</h1>
      <ul class="maintxt hsen">
        <li>Proficient in utilizing a wide range of modern technological tools, including Office 365, Microsoft Teams, Zoom, Google Workspace, Slack, Obsidian, and various project management platforms.</li>
        <li>Solid organizational and multi-tasking abilities, capable of managing multiple projects and priorities simultaneously.</li>
        <li>Performs well under tight deadlines and heavy pressure.</li>
        <li>Excellent communication and collaboration skills.</li>
      </ul>
      <h1 class="maintxt hs">How I started:</h1>
      <p class="maintxt hsen">
        I took an interest in programming when I was still little, times when most people still used Note++ to code. But during the time, I was already occupied with the thought of becoming a graphic designer, so I couldn't commit my time on most of my interests including programming.
        <br><br>
        However, as I grew old, I have loved video games again and again to the point that I wanted to start making one. That's when I discovered Ren'py--A modded version of Python specifically for making visual novels. Along with my hobby of making stories, it was the right language to learn. That's when I took an interest again in programming, and started learning web-development, specifically Front-End development to test my skills as a graphic designer.
      </p>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
    experiences: `
      <h1 class="hsen mid">Coming Soon!</h1>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
    projects: `
      <h1 class="hsen mid">I said it's Coming Soon!</h1>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
    about: `
      <h1 class="hsen mid">Do you not listen?</h1>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
    services: `
      <h1 class="hsen mid">This guy...</h1>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
    contact: `
      <h1 class="hsen mid">(┛◉Д◉)┛彡┻━┻</h1>
      <footer>
        <p class="fp">@JIDEEH</p>
        <p class="fp">© 2024 Portfolio. All rights reserved.</p>
        <p class="fp">Hire me maybe?</p>
      </footer>
    `,
  };

  const navLinks = document.querySelectorAll(".spa");
  const contentArea = document.querySelector("#main-content");

  // Function to handle the transition
  const changeContent = (section) => {
    if (sections[section]) {
      contentArea.classList.remove("visible"); // Hide current content
      setTimeout(() => {
        contentArea.innerHTML = sections[section]; // Change content
        contentArea.classList.add("visible"); // Fade in new content
      }, 500); // Wait for fade-out to complete
    }
  };

  // Handle navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const section = event.target.closest("a").dataset.section;
      changeContent(section);
      window.history.pushState({ section }, "", `#${section}`);
    });
  });

  // Handle browser back/forward
  window.addEventListener("popstate", event => {
    const section = location.hash.substring(1);
    changeContent(section || "explore");
  });

  // Initial content load based on URL hash
  const initialSection = location.hash.substring(1) || "explore";
  changeContent(initialSection);
});
