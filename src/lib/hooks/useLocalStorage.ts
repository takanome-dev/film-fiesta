import { useState, useEffect, useMemo, useCallback } from 'react';

import type { MovieSchema } from '@/schemas/movies';

export const LOCAL_STORAGE_KEYS = {
  RECENT_SEARCHES: 'filmfiesta_keywords',
  RECENT_CHECKED_MOVIES: 'filmfiesta_movies',
} as const;

export type LocalStorageKeys =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

const isMovieSchema = (value: any): value is MovieSchema =>
  typeof value === 'object' && 'id' in value;

export function useMultipleStorages<T, U>(...keys: LocalStorageKeys[]) {
  const [mapItems, setMapItems] = useState(
    new Map<LocalStorageKeys, (T | U)[]>()
  );

  const map = useMemo(() => new Map<LocalStorageKeys, (T | U)[]>(), []);

  keys.forEach((key) => {
    if (typeof window === 'undefined') return;

    map.set(
      key,
      localStorage.getItem(key)
        ? [
            ...new Set(
              JSON.parse(localStorage.getItem(key) as LocalStorageKeys) as (
                | T
                | U
              )[]
            ),
          ]
        : []
    );
  });

  useEffect(() => {
    if (map.size > 0) {
      setMapItems(map);
    }
  }, [map]);

  const setItemToStorage = (key: LocalStorageKeys, value: T | U) => {
    const items = mapItems.get(key) || [];

    if (items.includes(value)) return;

    items.push(value);
    localStorage.setItem(key, JSON.stringify([...new Set(items)]));
    setMapItems((prev) => new Map(prev).set(key, items));
  };

  const getItemsFromStorage = (key: LocalStorageKeys) =>
    [...new Set(mapItems.get(key))] || [];

  const removeItemFromStorage = (key: LocalStorageKeys, value: T | U) => {
    let items = mapItems.get(key) || [];

    items = items.filter((item) => {
      if (isMovieSchema(item) && isMovieSchema(value)) {
        return item.id !== value.id;
      }

      return item !== value;
    });

    localStorage.setItem(key, JSON.stringify(items));
    setMapItems((prev) => new Map(prev).set(key, items));
  };

  const clearStorage = () => {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
    setMapItems(new Map());
  };

  return {
    setItemToStorage,
    getItemsFromStorage,
    removeItemFromStorage,
    clearStorage,
  };
}

export function useSingleStorage<T>(key: LocalStorageKeys) {
  const [items, setItems] = useState<T[]>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
        ? [
            ...new Set(
              JSON.parse(localStorage.getItem(key) as LocalStorageKeys) as T[]
            ),
          ]
        : [];
    }

    return [];
  });

  const setItemToStorage = useCallback(
    (value: T) => {
      if (items.includes(value)) return;

      const newItems = [...items, value];
      localStorage.setItem(key, JSON.stringify([...new Set(newItems)]));
      setItems(newItems);
      console.log('SET ITEM TO STORAGE IS CALLED...');
    },
    [items, key]
  );

  const getItemsFromStorage = useCallback(() => [...new Set(items)], [items]);

  const removeItemFromStorage = useCallback(
    (value: T) => {
      const newItems = items.filter((item) => {
        if (isMovieSchema(item) && isMovieSchema(value)) {
          return item.id !== value.id;
        }

        return item !== value;
      });

      localStorage.setItem(key, JSON.stringify(newItems));
      setItems(newItems);
      console.log('REMOVE ITEM FROM STORAGE IS CALLED...');
    },
    [items, key]
  );

  return {
    setItemToStorage,
    getItemsFromStorage,
    removeItemFromStorage,
  };
}
