export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  next_auth: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null;
          expires_at: number | null;
          id: string;
          id_token: string | null;
          oauth_token: string | null;
          oauth_token_secret: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token: string | null;
          refresh_token_expires_in: number | null;
          scope: string | null;
          session_state: string | null;
          token_type: string | null;
          type: string;
          userId: string | null;
        };
        Insert: {
          access_token?: string | null;
          expires_at?: number | null;
          id?: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token?: string | null;
          refresh_token_expires_in?: number | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type: string;
          userId?: string | null;
        };
        Update: {
          access_token?: string | null;
          expires_at?: number | null;
          id?: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider?: string;
          providerAccountId?: string;
          refresh_token?: string | null;
          refresh_token_expires_in?: number | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type?: string;
          userId?: string | null;
        };
      };
      sessions: {
        Row: {
          expires: string;
          id: string;
          sessionToken: string;
          userId: string | null;
        };
        Insert: {
          expires: string;
          id?: string;
          sessionToken: string;
          userId?: string | null;
        };
        Update: {
          expires?: string;
          id?: string;
          sessionToken?: string;
          userId?: string | null;
        };
      };
      users: {
        Row: {
          email: string | null;
          emailVerified: string | null;
          id: string;
          image: string | null;
          isAdmin: boolean | null;
          name: string | null;
        };
        Insert: {
          email?: string | null;
          emailVerified?: string | null;
          id?: string;
          image?: string | null;
          isAdmin?: boolean | null;
          name?: string | null;
        };
        Update: {
          email?: string | null;
          emailVerified?: string | null;
          id?: string;
          image?: string | null;
          isAdmin?: boolean | null;
          name?: string | null;
        };
      };
      verification_tokens: {
        Row: {
          expires: string;
          identifier: string | null;
          token: string;
        };
        Insert: {
          expires: string;
          identifier?: string | null;
          token: string;
        };
        Update: {
          expires?: string;
          identifier?: string | null;
          token?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      uid: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      feedbacks: {
        Row: {
          createdAt: string;
          emojiCode: string | null;
          emojiName: string | null;
          id: string;
          message: string | null;
          updatedAt: string;
          user: string | null;
        };
        Insert: {
          createdAt?: string;
          emojiCode?: string | null;
          emojiName?: string | null;
          id?: string;
          message?: string | null;
          updatedAt?: string;
          user?: string | null;
        };
        Update: {
          createdAt?: string;
          emojiCode?: string | null;
          emojiName?: string | null;
          id?: string;
          message?: string | null;
          updatedAt?: string;
          user?: string | null;
        };
      };
      users: {
        Row: {
          email: string | null;
          id: string;
          image: string | null;
          isAdmin: boolean | null;
          name: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          image?: string | null;
          isAdmin?: boolean | null;
          name?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          image?: string | null;
          isAdmin?: boolean | null;
          name?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
