import { CardsColorScheme, RatingColorScheme } from "../types/colorTypes"


export const cardColorSchemes: CardsColorScheme[] = [
    {
        backgroundColor: '#B7CBC7',
        borderColor: '#798E8B',
        minScore: 4.5
    },
    {
        backgroundColor: '#E5DABD',
        borderColor: '#E6DBBF',
        minScore: 4
    },
    {
        backgroundColor: '#FFC8C8',
        borderColor: '#FF0000',
        minScore: 0
    }
]

export const ratingColorSchemes: RatingColorScheme[] = [
    {
        backgroundColor: '#63AB61',
        borderColor: '#3E6841',
        textColor: '#FFFFFF',
        minScore: 4.5
    },
    {
        backgroundColor: '#F1D3A2',
        borderColor: '#B49A4C',
        textColor: '#000000',
        minScore: 4
    },
    {
        backgroundColor: '#F2C8C0',
        borderColor: '#CD7E6C',
        textColor: '#000000',
        minScore: 0
    }
]