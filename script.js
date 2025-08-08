function showMainContent() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  showSection("about"); // Load default section
}

function showSection(section) {
  const content = {
    about: `
      <div class="about-section">
        <div class="about-left">
          <img src="assets/about_pic.jpg" alt="Hima's profile photo">
        </div>
        <div class="about-right">
          <h2>More About Me</h2>
          <p>
            I'm Hima, a constant learner and data enthusiast with a deep curiosity for how things work. My journey into technology began not in a lab, but with a spark of curiosity that gradually evolved into a purpose-driven passion: solving real-world problems through data.
          </p>
          <p>
            My zeal for continuous learning led me to pursue a Master’s degree in Computer Science at the University of Oklahoma. It’s been a transformative step, one that has expanded my technical foundation while reinforcing my commitment to building meaningful, human-centered solutions.
          </p>
          <p>
            Outside of work, I find joy in exploring new places and cultures, connecting with my spiritual side, and staying active by playing badminton. These passions help me recharge and bring balance to my analytical mindset.
          </p>
        </div>
      </div>
    `,

    experience: `
      <div class="experience-section">
        <h2>Professional Experience</h2>
        <div class="card-container two-rows spaced-cards">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3>Data Analyst – AI & Software Engineering</h3>
                <p>University of Oklahoma</p>
              </div>
              <div class="flip-card-back">
                <p>As the team lead for a research initiative under Professor Mansoor Abdulhak, I co-authored a book on AI-assisted software development. I led data analysis on 2000+ developer interactions using Python and SQL, translating insights into dashboards with Tableau that helped validate hypotheses 25% faster.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3>Software & IT Analyst</h3>
                <p>Deloitte USI</p>
              </div>
              <div class="flip-card-back">
                <p>At Deloitte, I focused on enhancing the walk-up support experience for employees by automating diagnostics across six office hubs. Using Python and Power BI, I streamlined the process of issue detection, reduced downtime, and made tech support smoother and more data-driven.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3>Data Engineer</h3>
                <p>Machint Solutions Pvt. Ltd.</p>
              </div>
              <div class="flip-card-back">
                <p>I worked on a flagship project aimed at digitalizing rural banking infrastructure. We built robust data pipelines using Azure Data Factory, integrated insights into Snowflake and Synapse, and monitored over 15 real-time dashboards to ensure accountability, transparency, and accessibility in underserved areas.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h3>Machine Learning Trainee</h3>
                <p>IIT Kharagpur – E-Cell</p>
              </div>
              <div class="flip-card-back">
                <p>During my time with the Entrepreneurship Cell, I worked on an education-focused ML project to help underserved students. We used TensorFlow and scikit-learn to build models that could predict academic performance based on socioeconomic and demographic indicators, empowering personalized learning support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,

    projects: `
      <div class="projects-section">
        <h2>Projects</h2>
        <p>Here are some of my favorite projects, each one started with a spark of curiosity or a fun idea!</p>

        <div class="project-row">
          <img src="assets/notes1.jpg" alt="Notes App" class="project-thumbnail">
          <div class="project-content">
            <h3>Notes App</h3>
            <p>What started as a fun weekend challenge turned into a clean, minimal notes app. I built it to quickly store ideas, thoughts and tasks without distractions.</p>
            <p><strong>Tech Stack:</strong> Python · Flask · SQL · HTML/CSS</p>
            <a href="https://github.com/HimaDeepikaM/Notes-app" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-row">
          <img src="assets/emotitune.png" alt="EmotiTune" class="project-thumbnail">
          <div class="project-content">
            <h3>EmotiTune</h3>
            <p>EmotiTune reads facial expressions through your webcam and recommends music based on your emotions. Cool and a little creepy!</p>
            <p><strong>Tech Stack:</strong> Python · OpenCV · DeepFace · Tkinter</p>
            <a href="https://github.com/HimaDeepikaM/EmotiTune" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-row">
          <img src="assets/global.png" alt="Global Cost of Living Dashboard" class="project-thumbnail">
          <div class="project-content">
            <h3>Global Cost of Living Dashboard</h3>
            <p>Compares cost of living in cities across the world. Perfect for digital nomads, expats or the curious!</p>
            <p><strong>Tech Stack:</strong> Tableau · Excel · Data Cleaning (Python)</p>
            <a href="https://github.com/HimaDeepikaM/Tableau-Dahboard--Global-cost-of-living-analysis" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-row">
          <img src="assets/sales.png" alt="Adventure Works Analysis" class="project-thumbnail">
          <div class="project-content">
            <h3>Adventure Works Analysis</h3>
            <p>I simulated real-world business scenarios, from customer behavior to product sales, using dashboards and pipelines at scale.</p>
            <p><strong>Tech Stack:</strong> Azure · PySpark · Power BI · Databricks</p>
            <a href="https://github.com/HimaDeepikaM/Adventure-Works" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    `,

    research: `
      <div class="research-section">
        <h2>Research</h2>
        <p>I am currently engaged in volunteer research under the guidance of Dr. Mansoor Abdulhak at the University of Oklahoma, where we study the evolving role of artificial intelligence in software engineering education.</p>
        <p>As a part of this work, I have written a paper titled <em>“Balancing Intelligence and Integrity: Structuring the Integration of AI Tools in Software Engineering,”</em> which explores how generative AI tools like ChatGPT and GitHub Copilot affect student learning, code quality and academic integrity.</p>
        <p>This research aims to develop practical frameworks that promote responsible AI use, emphasizing critical thinking, testing and debugging.</p>
        <p>
          To know more about this research, you can read the paper here:<br>
          <a href="files/Balancing Intelligence and Integrity.pdf" target="_blank" style="color: #963b1e; text-decoration: underline;">
            Balancing Intelligence and Integrity (PDF)
          </a>
        </p>
      </div>
    `,

    contact: `
      <div class="contact-section">
        <h2>Let's Connect</h2>
        <p>You can reach me via email or connect with me on LinkedIn.</p>
        <a href="mailto:himad.mannam@gmail.com">📧 himad.mannam@gmail.com</a><br>
        <a href="https://www.linkedin.com/in/hima-deepika-m" target="_blank">🔗 www.linkedin.com/in/hima-deepika-m</a>
      </div>
    `
  };

  document.getElementById("section-content").innerHTML = content[section];




    // Highlight active tab
  const tabs = document.querySelectorAll(".nav-tabs a");
  tabs.forEach(tab => tab.classList.remove("active"));
  const clickedTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase() === section);
  if (clickedTab) clickedTab.classList.add("active");
}

function goBackToIntro() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("intro").style.display = "flex";
}