import { useState } from 'react';

export default function CareerGeminiChat() {
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
			const res = await fetch('/api/career-gemini', {
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
			setError('Something went wrong talking to Gemini.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="gemini">
			<div className="gemini-header">
				<h3>Ask My Career Gemini</h3>
				<p>Ask about my projects, skills, or experience.</p>
			</div>

			<div className="gemini-chat">
				{history.length === 0 && (
					<div className="gemini-empty">
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
						<div className="msg-label">{m.role === 'user' ? 'You' : 'Gemini'}</div>
						<div className="msg-body">{m.content}</div>
					</div>
				))}

				{loading && <div className="msg msg-model">Gemini is thinking…</div>}
			</div>

			{error && <div className="gemini-error">{error}</div>}

			<form className="gemini-form" onSubmit={sendMessage}>
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