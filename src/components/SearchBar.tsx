import { useEffect, useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className="busca"
      type="text"
      placeholder="Buscar Pokémon pelo nome..."
      aria-label="Buscar Pokémon pelo nome"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
