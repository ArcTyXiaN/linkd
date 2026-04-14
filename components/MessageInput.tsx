"use client";

import { useState } from "react";

interface Props {
  onMessageSent: () => void;
}

export default function MessageInput({ onMessageSent }: Props) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  function detectType(value: string): "text" | "link" {
    try {
      new URL(value);
      return "link";
    } catch {
      return "text";
    }
  }

  async function handleSend() {
    if (!text.trim()) return;

    setLoading(true);
    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.trim(),
          type: detectType(text.trim()),
        }),
      });
      setText("");
      onMessageSent();
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSend();
    }
  }

  return (
    <div style={styles.wrapper}>
      <textarea
        style={styles.input}
        placeholder="Type a message or paste a link..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={3}
      />
      <button
        style={{
          ...styles.button,
          opacity: loading || !text.trim() ? 0.5 : 1,
        }}
        onClick={handleSend}
        disabled={loading || !text.trim()}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "16px",
    borderTop: "1px solid #e0e0e0",
    backgroundColor: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #d0d0d0",
    resize: "none",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
};