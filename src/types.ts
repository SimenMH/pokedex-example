export interface PokemonResponse {
  id: string;
  order: number;
  name: string;
  flavor_text_entries: Array<{ flavor_text: string }>;
  abilities: Array<{
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface Pokemon {
  id: string;
  order: number;
  name: string;
  flavor_text: string;
  abilities: string[];
  types: string[];
  stats: Array<{
    value: number;
    name: string;
  }>;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
    artwork: string;
  };
}
