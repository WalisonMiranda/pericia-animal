import { Text, StyleSheet } from 'react-native';

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
    "cat": number | null,
    "rabbit": number | null,
    "horse": number | null,
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
  "opinion_regarding_nutritional": string,

  "has_fixed_shelter": string,
  "has_weather_protection": string,
  "has_comfort_to_rest": string,
  "can_do_short_run": string,
  "animal_per_species_numbers": string,
  "environment_and_containment_type": string,
  "if_tied_is_released_some_time": string,
  "surfaces_in_contact_with_the_animal": string,
  "has_grass_or_ground_contact": string,
  "are_poor_cleaning_conditions": string,
  "comfort_observations": string,
  "opinion_regarding_comfort": string,

  "animal_has_pain": string,
  "how_hes_walking": string,
  "has_purulent_secretions": string,
  "has_diarrhea": string,
  "has_parasites_infestation": string,
  "pelage_conditions": string,
  "has_an_injury": string,
  "went_out_alone": string,
  "why_went_out_alone": string | null,
  "health_observations": string,
  "opinion_regarding_health": string,

  "animal_things": {
    "dog_can_do_dog_things": string | null,
    "cat_can_do_cat_things": string | null,
    "horse_can_do_horse_things": string | null,
  },
  "animal_alone_all_day": string,
  "are_there_others_animals": string,
  "has_strange_behaviors": string,
  "is_the_animal_alert": string,
  "avoid_or_run_away_in_fear": string,
  "cart_driver_use_whip": string | null,
  "behavior_observations": string,
  "opinion_regarding_behavior": string,

  "inadequacy_of_which_indicators": string | null,
  "well_being_degree": string,
  "incidents_of_mistreatment": string,
  "generated_a_police_report": string,
}

export default function Item({ item }: ItemProps) {
  return (
    <div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
