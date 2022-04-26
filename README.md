# Back-end Technical Test

Employee payslip for a flexible pay cycle

## Technologies Used

This project uses **Typescript** to provide strict typing and structural typing on the code. No other external libraries are used aside from `prettier` and `eslint` for code formatting and `mocha` and `chai` for testing.

## Assumptions

This program will be used as an add-on/utility libraty to an existing API or as a stand-alone tool.

## Running the Application (Demo)

### Install dependencies

```sh
npm install

or

yarn
```

### Modify Input Data

Open `data.json` on root of project and modify if intended. Existing data should contain an array of objects as seen below:

```json
[
  {
    "firstName": "Andrew",
    "lastName": "Smith",
    "annualSalary": 60050,
    "superRate": "9%",
    "payPeriod": "01 March - 31 March"
  },
  ...
]

```

### Build files

This creates an output `dist` folder when all the built files are stored.

```sh
npm run build

or

yarn build
```

### Run project

The utility functions are exported on root (`index.js`), however for the simplicity, a `demo.js` file is also created to demonstrate the app. The demo simply logs the output of the functions.

```sh
node dist/src/demo.js
```

#### Sample Output

```sh
❯ node dist/src/demo.js
[
  {
    name: 'Andrew Smith',
    payPeriod: '01 March - 31 March',
    grossIncome: 5004,
    incomeTax: 922,
    netIncome: 4082,
    superAmount: 450
  },
  {
    name: 'Claire Wong',
    payPeriod: '01 March - 31 March',
    grossIncome: 10000,
    incomeTax: 2669,
    netIncome: 7331,
    superAmount: 1000
  }
]
```

## Running Tests

```
npm run test

or

yarn test
```
