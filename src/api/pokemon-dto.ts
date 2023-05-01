export interface PokemonDTO {
  abilities: Array<string>;
  base_experienc: number;
  forms: Array<string>;
  game_indices: Array<string>;
  height: number;
  held_items: Array<string>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<string>;
  name: string;
  order: number;
  past_types: Array<string>;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
  stats: Array<string>;
  types: any;
  weight: number;
}

export interface Pokemon {
  name: string;
  id: number;
  type: string;
  image: string;
  location: string;
}
export interface PokemonListDTO {
  name: string;
  url: string;
}
