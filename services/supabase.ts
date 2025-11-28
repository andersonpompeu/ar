import { createClient } from '@supabase/supabase-js';
import { Product } from '../types';

// NOTE: Replace these with your actual Supabase credentials
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isConfigured = SUPABASE_URL.startsWith('http') && SUPABASE_ANON_KEY.length > 20;

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export const fetchProducts = async (): Promise<Product[] | null> => {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Supabase error:', error);
      return null;
    }
    return data as Product[];
  } catch (e) {
    console.error('Connection error:', e);
    return null;
  }
};