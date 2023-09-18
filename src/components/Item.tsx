
export interface ItemProps {
    "denuntiation_date": Date,
    "inspection_date": Date,
    "inspection_time": Date,
    "accused_name": string,
    "report_number": string,
    "report_address": string,
    "neighborhood": string,
    "city": string,
    "responsible_for_completing": string,
    "operating_mesoregion": string,
    "species": string,
    "gender": string,
    "age": number,
    "size": string,
    "race": string,
    "pelage": string,
    "animals_own_number": {
        "dog": number | null,
        "cat":  number | null,
        "rabbit":  number | null,
        "horse":  number | null,
        "others": number | null,
    },
    "animal_observations": string,

    "body_condition": string,
    "has_fresh_water": string,
    "animal_food": string,
    "food_frequency": string,
    "drinking_condition": string,
    "feeder_condition": string,
    "nutritional_observations": string,

    "has_fixed_shelter": string,
    "has_weather_protection": string,
    "has_comfort_to_rest": string,
    "can_do_short_run": string,
    "animal_per_species_numbers": string,
    "environment_and_containment_type": string,
    "if_tied_is_released_some_time": string,
    "surfaces_in_contact_with_the_animal": string,
    "has_grass_or_ground_contact": string,
    "are_poor_cleaning_conditions": string
    "comfort_observations": string

    
}

export default function Item() {
  return (
    <div>Item</div>
  )
}
