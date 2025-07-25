export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string; // Local ID for UI
  cortensorSessionId: string | null; // Real ID from Cortensor server
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export class ChatStorage {
  private static readonly SESSIONS_KEY = "chat_sessions";

  static saveSessions(sessions: ChatSession[]): void {
    try {
      const serializedSessions = JSON.stringify(sessions);
      localStorage.setItem(this.SESSIONS_KEY, serializedSessions);
    } catch (error) {
      console.error("Failed to save sessions to local storage:", error);
    }
  }

  static loadSessions(): ChatSession[] {
    try {
      const serializedSessions = localStorage.getItem(this.SESSIONS_KEY);
      if (serializedSessions === null) {
        return [];
      }
      const parsed = JSON.parse(serializedSessions);
      return parsed.map((session: any) => ({
        ...session,
        createdAt: new Date(session.createdAt),
        updatedAt: new Date(session.updatedAt),
        messages: session.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
        }))
      }));
    } catch (error) {
      console.error("Failed to load sessions from local storage:", error);
      return [];
    }
  }
}
