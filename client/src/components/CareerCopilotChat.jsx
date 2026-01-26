import { useState } from 'react';

export default function CareerCopilotChat() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    setError('');

    const trimmed = input.trim();
    if (!trimmed) return;

    const newHistory = [...history, { role: 'user', content: trimmed }];
    setHistory(newHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/career-copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history: newHistory }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Request failed');
      }

      const data = await res.json();
      setHistory([...newHistory, { role: 'model', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setError('Something went wrong talking to the Career Copilot.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="copilot">
      <div className="copilot-header">
        <h3>Ask My Career Copilot</h3>
        <p>Ask about my projects, skills, or experience.</p>
      </div>

      <div className="copilot-chat">
        {history.length === 0 && (
          <div className="copilot-empty">
            Try questions like:
            <ul>
              <li>What kind of projects do you enjoy most?</li>
              <li>What are your strongest skills?</li>
              <li>Tell me about a project you are proud of.</li>
            </ul>
          </div>
        )}

        {history.map((m, i) => (
          <div key={i} className={`msg msg-${m.role}`}>
            <div className="msg-label">{m.role === 'user' ? 'You' : 'Copilot'}</div>
            <div className="msg-body">{m.content}</div>
          </div>
        ))}

        {loading && <div className="msg msg-model">Copilot is thinking…</div>}
      </div>

      {error && <div className="copilot-error">{error}</div>}

      <form className="copilot-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about my work..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
