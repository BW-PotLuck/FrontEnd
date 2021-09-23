import * as yup from 'yup';

const formSchema = yup.object().shape({
    potLuckName: yup.string()
        .trim()
        .required('Potluck Name Is Required')
        .min(3, 'Potluck name must be atleast 3 characters long.'),
    potLuckDescription: yup.string()
        .trim()
        .required('Potluck Description is Required'),
    potLuckTime: yup.string()
        .trim()
        .oneOf(['800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000']),
    potLuckDate: yup.string()
        .trim()
        .required('Potluck Time is Required'),
    foodItems: yup.string()
        .trim()
        .required('Food items are required')
})

export default formSchema;