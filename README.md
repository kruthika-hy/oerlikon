# oerlikon_project
Please follow the below steps to run the application on your local workstation:
  - Cloning the project - Ideally **git clone https://github.com/kruthika-hy/oerlikon.git** should work. If it does not please try to run **git clone -b master --single-branch https://github.com/kruthika-hy/oerlikon.git local_folder_name**.
  - Install dependencies - run **npm audit fix** to install all the project related dependencies.
  - Before running the scenario append **.only** after the text scenario in the file **main_scenario.test.js**
  - Run the test case using the command **npx codeceptjs run --steps**
