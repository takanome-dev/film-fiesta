export function useMultipleStorages<T, U>(
  ...keys: string[]
): {
  setItemToStorage: (key: string, value: T | U) => void;
  getItemsFromStorage: (key: string) => (T | U)[];
  removeItemFromStorage: (key: string, value: T | U) => void;
} {
  if (typeof window !== 'undefined') {
    const map = new Map<string, (T | U)[]>();

    keys.forEach((key) => {
      const items = localStorage.getItem(key)
        ? [
            ...new Set(
              JSON.parse(localStorage.getItem(key) as string) as (T | U)[]
            ),
          ]
        : [];
      map.set(key, items);
    });

    const setItemToStorage = (key: string, value: T | U) => {
      const items = map.get(key) || [];

      if (items.includes(value)) return;

      items.push(value);
      map.set(key, items);
      localStorage.setItem(key, JSON.stringify([...new Set(items)]));
    };

    const getItemsFromStorage = (key: string) =>
      [...new Set(map.get(key))] || [];

    const removeItemFromStorage = (key: string, value: T | U) => {
      const items = map.get(key) || [];

      const index = items.indexOf(value);
      if (index > -1) {
        items.splice(index, 1);
      }

      map.set(key, items);
      localStorage.setItem(key, JSON.stringify(items));
    };

    return {
      setItemToStorage,
      getItemsFromStorage,
      removeItemFromStorage,
    };
  }

  console.log('You are using useLocalStorage hook in the server side');
  return {
    setItemToStorage: () => {},
    getItemsFromStorage: () => [],
    removeItemFromStorage: () => {},
  };
}

export function useSingleStorage<T>(key: string): {
  setItemToStorage: (value: T) => void;
  getItemsFromStorage: () => T[];
  removeItemFromStorage: (value: T) => void;
} {
  if (typeof window !== 'undefined') {
    const items = localStorage.getItem(key)
      ? [...new Set(JSON.parse(localStorage.getItem(key) as string) as T[])]
      : [];

    const setItemToStorage = (value: T) => {
      if (items.includes(value)) return;

      items.push(value);
      localStorage.setItem(key, JSON.stringify([...new Set(items)]));
    };

    const getItemsFromStorage = () => [...new Set(items)];

    const removeItemFromStorage = (value: T) => {
      const index = items.indexOf(value);
      if (index > -1) {
        items.splice(index, 1);
      }

      localStorage.setItem(key, JSON.stringify(items));
    };

    return {
      setItemToStorage,
      getItemsFromStorage,
      removeItemFromStorage,
    };
  }

  console.log('You are using useLocalStorage hook in the server side');
  return {
    setItemToStorage: () => {},
    getItemsFromStorage: () => [],
    removeItemFromStorage: () => {},
  };
}
