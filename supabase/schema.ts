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
      favorites: {
        Row: {
          created_at: string | null;
          id: string;
          is_favorite: boolean | null;
          movie: number | null;
          updated_at: string | null;
          user: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          is_favorite?: boolean | null;
          movie?: number | null;
          updated_at?: string | null;
          user?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          is_favorite?: boolean | null;
          movie?: number | null;
          updated_at?: string | null;
          user?: string | null;
        };
      };
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
      movies: {
        Row: {
          adult: boolean | null;
          backdrop_path: string | null;
          genre_ids: number[] | null;
          genres: Json[] | null;
          id: number;
          original_language: string | null;
          original_title: string | null;
          overview: string | null;
          popularity: number | null;
          poster_path: string | null;
          release_date: string | null;
          title: string | null;
          video: boolean | null;
          vote_average: number | null;
          vote_count: number | null;
        };
        Insert: {
          adult?: boolean | null;
          backdrop_path?: string | null;
          genre_ids?: number[] | null;
          genres?: Json[] | null;
          id: number;
          original_language?: string | null;
          original_title?: string | null;
          overview?: string | null;
          popularity?: number | null;
          poster_path?: string | null;
          release_date?: string | null;
          title?: string | null;
          video?: boolean | null;
          vote_average?: number | null;
          vote_count?: number | null;
        };
        Update: {
          adult?: boolean | null;
          backdrop_path?: string | null;
          genre_ids?: number[] | null;
          genres?: Json[] | null;
          id?: number;
          original_language?: string | null;
          original_title?: string | null;
          overview?: string | null;
          popularity?: number | null;
          poster_path?: string | null;
          release_date?: string | null;
          title?: string | null;
          video?: boolean | null;
          vote_average?: number | null;
          vote_count?: number | null;
        };
      };
      users: {
        Row: {
          createdAt: string;
          email: string | null;
          id: string;
          image: string | null;
          isAdmin: boolean | null;
          name: string | null;
        };
        Insert: {
          createdAt?: string;
          email?: string | null;
          id: string;
          image?: string | null;
          isAdmin?: boolean | null;
          name?: string | null;
        };
        Update: {
          createdAt?: string;
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
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
