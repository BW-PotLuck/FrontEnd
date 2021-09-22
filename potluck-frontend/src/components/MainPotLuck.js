import MainPage from './MainPage';
import '../PotLuck.css'
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Potluckform from './PotLuckForm';
import ViewPotLucks from './ViewPotLucks'
import schema from './PotLuckSchema';

const initialValues = {
  potLuckName: '',
  potLuckDescription: '',
  potLuckDate: '',
  potLuckTime: '',
  potLuckLocation: '',
  placeHolderFood: '',
  foodItems: []
  
}

const initialFormErrors= {
  potLuckName: '',
  potLuckDescription: '',
  potLuckDate: '',
  potLuckTime: '',
  foodItems: []
}



const initialDisabled = true;
const initialPotLuck = [];


function MainPotLuck() {

  const [potLuck, setPotLuck] = useState(initialPotLuck);
  const [formValues, setFormValues] = useState(initialValues);
  const [foodItems, setFoodItems] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name,value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name,value);
    setFormValues({...formValues, [name]: value});
  }

  const addItems = (food) =>{
    setFoodItems([...foodItems, food]);
    setFormValues({...formValues, foodItems})
  }

  const formSubmit = () =>{
    const newPotLuck ={
      potLuckName: formValues.potLuckName.trim(),
      potLuckDescription: formValues.potLuckDescription.trim(),
      potLuckDate: formValues.potLuckDate,
      potLuckTime: formValues.potLuckTime,
      foodItems: formValues.foodItems
    }
    postPotLuck(newPotLuck)
  }
  // add axios post to api
  const postPotLuck = newPotLuck =>{
    
    setPotLuck([newPotLuck, ...potLuck]);
    
}

  useEffect(()=>{
    setPotLuck(potLuck);
  },[])
  useEffect(() => {
    schema.isValid(formValues).then(item => setDisabled(!item))
  }, [formValues])
  console.log(potLuck);
  return (
    <div className="App">
    <Switch>
      <Route path={'/potluck-form-container'}>
        <Potluckform
          values = {formValues}
          change = {inputChange}
          add = {addItems}
          submit={formSubmit}
          disabled={disabled}
        />
      </Route>

      <Route path ={'/view-potlucks-container'}>
        <ViewPotLucks
          data = {[potLuck]}
        />
      </Route>

      <Route path = {'/'}>
        <MainPage/>
      </Route>
    </Switch>

    </div>
  );
}

export default MainPotLuck;
