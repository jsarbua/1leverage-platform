const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 1000;

export async function askClaude(messages, systemPrompt) {
  try {
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

    if (!apiKey) {
      return "API key not configured. Please check your .env.local file.";
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemPrompt,
        messages: messages
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Claude API error:", err);
      return "I'm having trouble connecting right now. Please try again.";
    }

    const data = await response.json();
    return data.content?.[0]?.text || "No response received.";
  } catch (error) {
    console.error("Claude API call failed:", error);
    return "Connection error. Please check your internet and try again.";
  }
}