import CareerCopilotChat from './components/CareerCopilotChat.jsx';

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>New Year, New You Portfolio</h1>
        <p>
          Welcome to my developer portfolio. Explore my work, and ask my
          Career Copilot anything about my skills, experience, and projects.
        </p>
      </header>

      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>
            Replace this text with a short introduction about who you are,
            what you like to build, and what you are looking for next.
          </p>
        </section>

        <section className="section">
          <h2>Career Copilot</h2>
          <CareerCopilotChat />
        </section>
      </main>
    </div>
  );
}
