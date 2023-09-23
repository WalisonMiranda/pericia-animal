import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';

import DateInput from './DateInput';

import { ItemProps } from './Item';

interface FormProps extends ItemProps {
}

export default function Form() {
  const [formData, setFormData] = useState<ItemProps>({
    denuntiation_date: null,
    inspection_date: null,
    inspection_time: null,
    accused_name: null,
    report_number: null,
    report_address: null,
    neighborhood: null,
    city: null,
    responsible_for_completing: null,
    operating_mesoregion: null,
    species: null,
    gender: null,
    age: null,
    size: null,
    race: null,
    pelage: null,
    animals_own_number: {
      dog: null,
      cat: null,
      rabbit: null,
      horse: null,
      others: null,
    },
    animal_observations: null,

    body_condition: null,
    has_fresh_water: null,
    animal_food: null,
    food_frequency: null,
    drinking_condition: null,
    feeder_condition: null,
    nutritional_observations: null,
    opinion_regarding_nutritional: null,

    has_fixed_shelter: null,
    has_weather_protection: null,
    has_comfort_to_rest: null,
    can_do_short_run: null,
    animal_per_species_numbers: null,
    environment_and_containment_type: null,
    if_tied_is_released_some_time: null,
    surfaces_in_contact_with_the_animal: null,
    has_grass_or_ground_contact: null,
    are_poor_cleaning_conditions: null,
    comfort_observations: null,
    opinion_regarding_comfort: null,

    animal_has_pain: null,
    how_hes_walking: null,
    has_purulent_secretions: null,
    has_diarrhea: null,
    has_parasites_infestation: null,
    pelage_conditions: null,
    has_an_injury: null,
    went_out_alone: null,
    why_went_out_alone: null,
    health_observations: null,
    opinion_regarding_health: null,

    animal_things: {
      dog_can_do_dog_things: null,
      cat_can_do_cat_things: null,
      horse_can_do_horse_things: null,
    },
    animal_alone_all_day: null,
    are_there_others_animals: null,
    has_strange_behaviors: null,
    is_the_animal_alert: null,
    avoid_or_run_away_in_fear: null,
    cart_driver_use_whip: null,
    behavior_observations: null,
    opinion_regarding_behavior: null,

    inadequacy_of_which_indicators: null,
    well_being_degree: null,
    incidents_of_mistreatment: null,
    generated_a_police_report: null,

  });
  // const [formData, setFormData] = useState({
  //   name: '',
  //   selectedDate1: new Date(),
  //   selectedDate2: new Date(),
  //   selectedDate3: new Date(),
  // });

  const handleDateChange = (field, date) => {
    setFormData({ ...formData, [field]: date });
  };

  const handleRadioChange = (field: keyof ItemProps, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTextareaChange = (field: keyof ItemProps, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <ScrollView>
      <View>
        <Text>Denuntiation Date:</Text>
        <DateInput
          mode="date"
          onChange={(date) => handleDateChange('selectedDate2', date)}
        />
      </View>

      {/* Repita o código acima para os outros campos de data e hora, se necessário */}

      <View>
        <Text>Accused Name:</Text>
        <TextInput
          value={formData.accused_name}
          onChangeText={(text) => setFormData({ ...formData, accused_name: text })}
        />
      </View>

      {/* Repita o código acima para os outros campos de entrada de texto */}

      <View>
        <Text>Animal Observations:</Text>
        <TextInput
          multiline
          value={formData.animal_observations}
          onChangeText={(text) => handleTextareaChange('animal_observations', text)}
        />
      </View>

      {/* Repita o código acima para os outros campos de observações, se necessário */}

      <View>
        <Text>Has Fresh Water?</Text>
        {/* <RadioInput
          options={['Sim', 'Não']}
          selected={formData.has_fresh_water}
          onSelect={(value) => handleRadioChange('has_fresh_water', value)}
        /> */}
      </View>

      {/* Repita o código acima para os outros campos de entrada de rádio */}

      {/* Adicione mais campos conforme necessário */}

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

// export default Form;
