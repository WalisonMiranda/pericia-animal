import React, { useState } from 'react';
import { 
  View, 
  SafeAreaView, 
  Text, 
  TextInput, 
  ScrollView, 
  Button, 
  StyleSheet } from 'react-native';

import DatePicker from "react-native-date-picker"
import CustomInputRadio from './CustomInputRadio';



import { ItemProps } from './Item';

interface FormProps extends ItemProps {
}

export default function Form() {
  
  const [formData, setFormData] = useState<ItemProps>({
    denuntiation_date: new Date(Date.now()),
    inspection_date: new Date(Date.now()),
    inspection_time: new Date(Date.now()),
    accused_name: '',
    report_number: '',
    report_address: '',
    neighborhood: '',
    city: '',
    responsible_for_completing: '',
    operating_mesoregion: '',
    species: '',
    gender: '',
    age: '',
    size: '',
    race: '',
    pelage: '',
    animals_own_number: {
      dog: '',
      cat: '',
      rabbit: '',
      horse: '',
      others: '',
    },
    animal_observations: '',

    body_condition: '',
    has_fresh_water: '',
    animal_food: '',
    food_frequency: '',
    drinking_condition: '',
    feeder_condition: '',
    nutritional_observations: '',
    opinion_regarding_nutritional: '',

    has_fixed_shelter: '',
    has_weather_protection: '',
    has_comfort_to_rest: '',
    can_do_short_run: '',
    animal_per_species_numbers: '',
    environment_and_containment_type: '',
    if_tied_is_released_some_time: '',
    surfaces_in_contact_with_the_animal: '',
    has_grass_or_ground_contact: '',
    are_poor_cleaning_conditions: '',
    comfort_observations: '',
    opinion_regarding_comfort: '',

    animal_has_pain: '',
    how_hes_walking: '',
    has_purulent_secretions: '',
    has_diarrhea: '',
    has_parasites_infestation: '',
    pelage_conditions: '',
    has_an_injury: '',
    went_out_alone: '',
    why_went_out_alone: '',
    health_observations: '',
    opinion_regarding_health: '',

    animal_things: {
      dog_can_do_dog_things: '',
      cat_can_do_cat_things: '',
      horse_can_do_horse_things: '',
    },
    animal_alone_all_day: '',
    are_there_others_animals: '',
    has_strange_behaviors: '',
    is_the_animal_alert: '',
    avoid_or_run_away_in_fear: '',
    cart_driver_use_whip: '',
    behavior_observations: '',
    opinion_regarding_behavior: '',

    inadequacy_of_which_indicators: '',
    well_being_degree: '',
    incidents_of_mistreatment: '',
    generated_a_police_report: '',

  });

  const [denunciationDateOpen, setDenunciationDateOpen] = useState(false);
  const [inspectionDateOpen, setInspectionDateOpen] = useState(false);
  const [inspectionTimeOpen, setInspectionTimeOpen] = useState(false);

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
        <>
          <Button title="Data da denúncia" onPress={() => setDenunciationDateOpen(true)} />
          <DatePicker
            mode='date'
            locale='pt'
            modal
            open={denunciationDateOpen}
            // date={formData.denuntiation_date}
            date={new Date()}
            onConfirm={(date) => {
              setDenunciationDateOpen(false)
              setFormData({...formData, denuntiation_date: date});
            }}
            onCancel={() => {
              setDenunciationDateOpen(false)
            }}          
          />
        </>

        <Text>Inspection Date:</Text>
        <>
          <Button title="Data de inspeção" onPress={() => setInspectionDateOpen(true)} />
          <DatePicker
            mode='date'
            // locale='pt'
            modal
            open={inspectionDateOpen}
            // date={formData.inspection_date}
            date={new Date()}
            onConfirm={(date) => {
              setInspectionDateOpen(false)
              setFormData({...formData, inspection_date: date});
            }}
            onCancel={() => {
              setInspectionDateOpen(false)
            }}          
          />
        </>

        <Text>Inspection Time:</Text>
        <>
          <Button title="Hora da inspeção" onPress={() => setInspectionTimeOpen(true)} />
          <DatePicker
            mode='time'
            // locale='pt'
            modal
            open={inspectionTimeOpen}
            // date={formData.inspection_time}
            date={new Date()}
            onConfirm={(date) => {
              setInspectionTimeOpen(false)
              setFormData({...formData, inspection_time: date});
            }}
            onCancel={() => {
              setInspectionTimeOpen(false)
            }}          
          />
        </>

        <Text>Nome do Denunciado:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, accused_name: text })}
          value={formData.accused_name}
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
            inputMode="numeric"
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

      <Text style={{ marginTop: "16px" }}>
        Número de animais que possui:
      </Text>

      <Text>Cachorro:</Text>
      <TextInput
          inputMode='numeric'
          style={styles.input}
          // onChangeText={(text) => setFormData({ ...formData.animals_own_number, dog: text })}
          onChangeText={(value) => setFormData({ 
            ...formData,
            animals_own_number: {
              ...formData.animals_own_number,
              dog: value
            }
          })}
          value={formData.animals_own_number.dog}
      />

      <Text>Gato:</Text>
      <TextInput
          inputMode='numeric'
          style={styles.input}
          // onChangeText={(value) => setFormData({ ...formData.animals_own_number, cat: value })}
          onChangeText={(value) => setFormData({ 
            ...formData,
            animals_own_number: {
              ...formData.animals_own_number,
              cat: value
            }
          })}
          value={formData.animals_own_number.cat}
      />

      <Text>Cavalo:</Text>
      <TextInput
          inputMode='numeric'
          style={styles.input}
          // onChangeText={(text) => setFormData({ ...formData.animals_own_number, horse: text })}
          onChangeText={(value) => setFormData({ 
            ...formData,
            animals_own_number: {
              ...formData.animals_own_number,
              horse: value
            }
          })}
          value={formData.animals_own_number.horse}
      />

      <Text>Coelho:</Text>
      <TextInput
          inputMode='numeric'
          style={styles.input}
          // onChangeText={(text) => setFormData({ ...formData.animals_own_number, rabbit: text })}
          onChangeText={(value) => setFormData({ 
            ...formData,
            animals_own_number: {
              ...formData.animals_own_number,
              rabbit: value
            }
          })}
          value={formData.animals_own_number.rabbit}
      />

      <Text>Outros:</Text>
      <TextInput
          inputMode='numeric'
          style={styles.input}
          // onChangeText={(text) => setFormData({ ...formData.animals_own_number, others: text })}
          onChangeText={(value) => setFormData({ 
            ...formData,
            animals_own_number: {
              ...formData.animals_own_number,
              others: value
            }
          })}
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
        <CustomInputRadio 
          options={['Sim', 'Não']}
          selected={formData.has_fresh_water}
          onSelect={(value) => setFormData({...formData, has_fresh_water: value})}
        />

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

        <Text>Como ele anda?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, how_hes_walking: text })}
            value={formData.how_hes_walking}
        />

        <Text>Tem secreção purulenta?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_purulent_secretions: text })}
            value={formData.has_purulent_secretions}
        />

        <Text>Tem diarréia?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_diarrhea: text })}
            value={formData.has_diarrhea}
        />

        <Text>Tem infestação de parasitas?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_parasites_infestation: text })}
            value={formData.has_parasites_infestation}
        />

        {/* <Text>Condição da pelagem:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, pelage_conditions: text })}
            value={formData.pelage_conditions}
        /> */}

        {/* <Text>Tem algum ferimento</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_an_injury: text })}
            value={formData.has_an_injury}
        /> */}

        <Text>Sai para a rua sozinho?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, went_out_alone: text })}
            value={formData.went_out_alone}
        />

        <Text>Por quê sai sozinho?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, why_went_out_alone: text })}
            value={formData.why_went_out_alone}
        />

          <Text>Observações de saúde:</Text>
          <TextInput
            multiline
            value={formData.health_observations}
            onChangeText={(text) => handleTextareaChange('health_observations', text)}
          />

          {/* OPINION REGARDING HEALTH */}


          {/* COISAS DE ANIMAIS */}

        <Text>Coisas de animais:</Text>

        <Text>Cachorro consegue fazer coisas de cachorro:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData.animal_things, dog_can_do_dog_things: text })}
            value={formData.animal_things.dog_can_do_dog_things}
        />

        <Text>Gato consegue fazer coisas de gato:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData.animal_things, cat_can_do_cat_things: text })}
            value={formData.animal_things.cat_can_do_cat_things}
        />

        <Text>Cavalo consegue fazer coisas de cavalo:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData.animal_things, horse_can_do_horse_things: text })}
            value={formData.animal_things.horse_can_do_horse_things}
        />

        <Text>O animal fica sozinho o dia todo?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, animal_alone_all_day: text })}
            value={formData.animal_alone_all_day}
        />

        <Text>Há outros animais?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, are_there_others_animals: text })}
            value={formData.are_there_others_animals}
        />

        <Text>O animal tem comportamentos estranhos?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, has_strange_behaviors: text })}
            value={formData.has_strange_behaviors}
        />

        <Text>O animal está alerta?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, is_the_animal_alert: text })}
            value={formData.is_the_animal_alert}
        />

        <Text>O animal evita ou foge de medo?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, avoid_or_run_away_in_fear: text })}
            value={formData.avoid_or_run_away_in_fear}
        />

        <Text>O carroceiro usa chicote?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, cart_driver_use_whip: text })}
            value={formData.cart_driver_use_whip}
        />

          <Text>Observações de comportamento:</Text>
          <TextInput
            multiline
            value={formData.behavior_observations}
            onChangeText={(text) => handleTextareaChange('behavior_observations', text)}
          />

          {/* OPINION REGARDING BEHAVIOR */}


          {/* TOPIC INDICATORS */}

        <Text>Inadequação de qual indicador?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, inadequacy_of_which_indicators: text })}
            value={formData.inadequacy_of_which_indicators}
        />

        <Text>Grau de bem estar</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, well_being_degree: text })}
            value={formData.well_being_degree}
        />

        <Text>Incidents of mistreatment</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, incidents_of_mistreatment: text })}
            value={formData.incidents_of_mistreatment}
        />

        <Text>Gerou ocorrência policial?</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, generated_a_police_report: text })}
            value={formData.generated_a_police_report}
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
