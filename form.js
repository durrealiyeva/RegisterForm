export default [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        errors: {
           required: 'Please enter name'
        }
    },
    {
        name: 'surname',
        label: 'Surname',
        type: 'text',
        errors: {
           required: 'Please enter surname'
        }
    },
    {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        errors: {
           required: 'Please enter phone'
        }
    },
    {
        name: 'email',
        label: 'Email',
        type: 'text',
        errors: {
             required: 'Please enter email',
             email: 'Enter the correct email'
        }
    },
    {
        name: 'city',
        label: 'City',
        type: 'select',
        options: [
           { label: 'Baku', value: 'baki'},
           { label: 'Qebele', value: 'qebele'},
           { label: 'Quba', value: 'quba'}
        ],
        errors: {

        }
    },
    {
        name: 'hobby',
        label: 'Hobby',
        type: 'checkbox',
        options: [
           { label: 'Futbol', value: 'futbol'},
           { label: 'Tenis', value: 'tenis'},
        ],
        errors: {

        }
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        errors: {
            required: 'true',
            max: '10',
            min: '5'
        }
    },
    {
        name: 'rpassword',
        label: 'Repeat Password',
        type: 'password',
        errors: {
            required: 'true',
            some: 'password'
        }
    }
]