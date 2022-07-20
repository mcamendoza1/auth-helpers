import { getClientWithEnvCheck } from './utils/initSupabase';

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;

export const createSupabaseClient = (url?: string, anonKey?: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    supabaseUrl = url;
    supabaseAnonKey = anonKey;
  }

  return {
    apiInfo: { supabaseUrl, supabaseAnonKey },
    supabaseClient: (function () {
      if (supabaseUrl && supabaseAnonKey) {
        return getClientWithEnvCheck(supabaseUrl, supabaseAnonKey);
      }
    })()
  };
};

/**
 * @deprecated use `createSupabaseClient` method instead
 */
export const skHelper = createSupabaseClient;
