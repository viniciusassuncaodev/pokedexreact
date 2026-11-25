# Pokédex React

Aplicação web de Pokédex feita em React + TypeScript (Vite), com dados da PokéAPI.
Trabalho Final de Front-end Frameworks (ADS, AV2).

## Funcionalidades

- Lista e busca de Pokémon por nome
- Página de detalhes (tipos, habilidades, status)
- Favoritos salvos no localStorage
- Formulário de contato com validação
- Navegação com React Router (5 páginas)

## Como instalar e usar

```bash
git clone https://github.com/viniciusassuncaodev/pokedexreact
cd pokedexreact
npm install
npm run dev
```

Abra http://localhost:5173

## Tecnologias

React, TypeScript, Vite, React Router (react-router-dom) e PokéAPI.

## Estrutura de pastas

```text
pokedexreact/
├── public/
├── src/
│   ├── assets/
│   ├── components/   Header, Footer, SearchBar, PokemonCard, PokemonDetails,
│   │                 TypeBadge, FavoriteButton, ContactForm
│   ├── context/      FavoritosContext
│   ├── hooks/        useFetch
│   ├── pages/        Home, Explorar, Detalhe, Favoritos, Sobre
│   ├── services/     api.ts (chamadas à PokéAPI)
│   ├── types/        tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## Rotas

| Rota            | Página    | Descrição                                   |
| --------------- | --------- | ------------------------------------------- |
| `/`             | Home      | Página inicial                              |
| `/explorar`     | Explorar  | Lista de Pokémon com busca                  |
| `/pokemon/:id`  | Detalhe   | Detalhes de um Pokémon                      |
| `/favoritos`    | Favoritos | Pokémon marcados como favoritos             |
| `/sobre`        | Sobre     | Descrição do projeto e formulário de contato |

## Hooks utilizados

- **useState**: estados de formulário, erros e lista de favoritos.
- **useEffect**: busca de dados na API (dentro do `useFetch`) e gravação dos favoritos no localStorage.
- **useContext**: acesso aos favoritos, por meio do `useFavoritos`.
- **useMemo**: memoriza o valor do contexto de favoritos.
- **useParams**: lê o `id` do Pokémon na rota `/pokemon/:id`.
- **useFetch** (hook customizado): controla `data`, `loading` e `error` de uma requisição.

## Divisão de tarefas

| Pessoa | Integrante                          | O que fez |
| ------ | ----------------------------------- | --------- |
| A      | Marcus Vinicius de Assunção Bomfim  | Setup do projeto, router, types, services (`api.ts`), hook `useFetch`, `FavoritosContext`, Header, Footer, PokemonCard, SearchBar e páginas Home e Explorar |
| B      | Italo Gabriel Santos Oliveira       | TypeBadge, FavoriteButton, PokemonDetails e página Detalhe |
| C      | Cleverton Robson Carvalho Brasil    | ContactForm, páginas Sobre e Favoritos e este README |

## Telas

![Home](prints/home.png)
![Explorar](prints/explorar.png)
![Detalhe](prints/detalhe.png)
![Favoritos](prints/favoritos.png)