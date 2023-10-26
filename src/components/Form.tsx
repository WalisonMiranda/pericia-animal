import React, { useState } from 'react';
import { 
  View, 
  SafeAreaView, 
  Text, 
  TextInput, 
  ScrollView, 
  Button, 
  StyleSheet } from 'react-native';

import DateInput from './DateInput';
import CustomInputText from './CustomInputText';


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
        {/* <DateInput
          mode="date"
          onChange={(date) => handleDateChange('selectedDate2', date)}
        /> */}

        <Text>Inspection Date:</Text>
        {/* <DateInput
          mode="date"
          onChange={(date) => handleDateChange('selectedDate2', date)}
        /> */}


        <Text>Inspection Time:</Text>
        {/* <DateInput
          mode="date"
          onChange={(date) => handleDateChange('selectedDate2', date)}
        /> */}


      {/* Repita o código acima para os outros campos de data e hora, se necessário */}

        <Text>Nome do Denunciado:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, accused_name: text })}
          value={formData.accused_name}
          // placeholder="input"
        />
      
        <Text>Número da Ocorrência:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, report_number: text })}
          value={formData.report_number}
        />

        <Text>Número da ocorrência:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, report_number: text })}
            value={formData.report_number}
        />

        <Text>Endereço da Ocorrência:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, report_address: text })}
          value={formData.report_address}
        />

        <Text>Bairro:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, neighborhood: text })}
            value={formData.neighborhood}
        />

        <Text>Cidade:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, city: text })}
            value={formData.city}
        />

        <Text>Responsável pela Ocorrência:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, responsible_for_completing: text })}
            value={formData.responsible_for_completing}
        />

        <Text>Mesoregião de Operação:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, operating_mesoregion: text })}
            value={formData.operating_mesoregion}
        />
      
      <Text>Espécie:</Text>
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, species: text })}
          value={formData.species}
      />

        <Text>Gênero:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, gender: text })}
            value={formData.gender}
        />

        <Text>Idade:</Text>
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, age: text })}
            value={formData.age}
        />
      
      <Text>Tamanho:</Text>
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, size: text })}
          value={formData.size}
      />

      <Text>Raça:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, race: text })}
            value={formData.race}
        />

        <Text>Pelagem:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, pelage: text })}
            value={formData.pelage}
        />

      <Text>Número de animais que possui:</Text>
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, animals_own_number.dog: text })}
          value={formData.animals_own_number.dog}
      />
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, animals_own_number.cat: text })}
          value={formData.animals_own_number.cat}
      />
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, animals_own_number.horse: text })}
          value={formData.animals_own_number.horse}
      />
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, animals_own_number.rabbit: text })}
          value={formData.animals_own_number.rabbit}
      />
      <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, animals_own_number.others: text })}
          value={formData.animals_own_number.others}
      />

        <Text>Animal Observations:</Text>
        <TextInput
          multiline
          value={formData.animal_observations}
          onChangeText={(text) => handleTextareaChange('animal_observations', text)}
        />

      {/* CADASTRO NUTRICIONAL */}

        <Text>Condição do corpo:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, body_condition: text })}
            value={formData.body_condition}
        />

        <Text>Has Fresh Water?</Text>
        {/* <RadioInput
          options={['Sim', 'Não']}
          selected={formData.has_fresh_water}
          onSelect={(value) => handleRadioChange('has_fresh_water', value)}
        /> */}

        <Text>Tipo de ração:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, animal_food: text })}
            value={formData.animal_food}
        />

        <Text>Frequência de alimentação:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, food_frequency: text })}
            value={formData.food_frequency}
        />

        <Text>Condição da água:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, drinking_condition: text })}
            value={formData.drinking_condition}
        />

        <Text>Condição do recipiente de comida:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, feeder_condition: text })}
            value={formData.feeder_condition}
        />

          <Text>Observações nutricionais:</Text>
          <TextInput
            multiline
            value={formData.nutritional_observations}
            onChangeText={(text) => handleTextareaChange('nutritional_observations', text)}
          />
  
          {/* Opinion regarding nutritional information - radio */}

          {/* CONFORTO DO ANIMAL */}

          <Text>Animal possui abrigo fixo?</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => setFormData({ ...formData, has_fixed_shelter: text })}
              value={formData.has_fixed_shelter}
          />

        <Text>Animal possui proteção contra chuva?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_weather_protection: text })}
            value={formData.has_weather_protection}
        />

        <Text>Animal possui conforto para descansar?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_comfort_to_rest: text })}
            value={formData.has_comfort_to_rest}
        />

        <Text>Animal pode fazer pequenas corridas?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, can_do_short_run: text })}
            value={formData.can_do_short_run}
        />

        <Text>Números de animais por espécie</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, animal_per_species_numbers: text })}
            value={formData.animal_per_species_numbers}
        />

        <Text>Tipo de ambiente e contenção:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, environment_and_containment_type: text })}
            value={formData.environment_and_containment_type}
        />

        <Text>Se preso, é solto em algun momento?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, if_tied_is_released_some_time: text })}
            value={formData.if_tied_is_released_some_time}
        />

        <Text>Superfícies em contato com o animal:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, surfaces_in_contact_with_the_animal: text })}
            value={formData.surfaces_in_contact_with_the_animal}
        />

        <Text>Animal tem contato com grama ou terra?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_grass_or_ground_contact: text })}
            value={formData.has_grass_or_ground_contact}
        />

        <Text>Condição de limpeza é precária?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, are_poor_cleaning_conditions: text })}
            value={formData.are_poor_cleaning_conditions}
        />

          <Text>Observações de conforto:</Text>
          <TextInput
            multiline
            value={formData.comfort_observations}
            onChangeText={(text) => handleTextareaChange('comfort_observations', text)}
          />
        
          {/* OPINION REGARDING COMFORT */}

          {/* SAÚDE DO ANIMAL */}

          <Text>Animal sente dor?</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => setFormData({ ...formData, animal_has_pain: text })}
              value={formData.animal_has_pain}
          />

        <Text>Condição do corpo:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, body_condition: text })}
            value={formData.body_condition}
        />
      
        <SafeAreaView>
          <Button title="Submit" onPress={handleSubmit} />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
