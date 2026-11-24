/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FavoritosContextValue {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  isFavorito: (id: number) => boolean;
}

interface FavoritosProviderProps {
  children: ReactNode;
}

const FavoritosContext = createContext<FavoritosContextValue | null>(null);

export function FavoritosProvider({ children }: FavoritosProviderProps) {
  const [favoritos, setFavoritos] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("favoritos");
      const parsed: unknown = saved ? JSON.parse(saved) : [];

      return Array.isArray(parsed)
        ? parsed.filter((id): id is number => Number.isInteger(id))
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const value = useMemo<FavoritosContextValue>(
    () => ({
      favoritos,
      toggleFavorito: (id) => {
        setFavoritos((current) =>
          current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id],
        );
      },
      isFavorito: (id) => favoritos.includes(id),
    }),
    [favoritos],
  );

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos(): FavoritosContextValue {
  const context = useContext(FavoritosContext);

  if (!context) {
    throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider.");
  }

  return context;
}

