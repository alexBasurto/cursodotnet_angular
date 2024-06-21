export interface IMeal {
    strMeal:      string;
    strMealThumb: string;
    idMeal:       string;
}

export interface IMeals {
    meals: IMeal[];
}

export interface ICategoriaMeal {
    strCategory: string;
}

export interface ICategoriasMeal {
    meals: ICategoriaMeal[];
}