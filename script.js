// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employees = [];
  let addEmployee = true;

  while (addEmployee) {
    //enter first name
    const firstName = prompt("Enter your first name");
    //enter last name
    const lastName = prompt("Enter your last name");
    //enter salary
    const salary = prompt("Enter your salary");
    
    employees.push({
        firstName: firstName,
        lastName: lastName,
        salary: salary,
    });

    //to ask if they want to add another data entry for subsequent employees
    addEmployee= confirm("Would you like to add another Employee's information?");
    }
    return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) { 
  // TODO: Calculate and display the average salary

    let totalSalary = 0 //this is your initial value
        for (let i = 0; i < employeesArray.length; i++) {
            totalSalary += +employeesArray[i].salary; //this 'adds on' to previous salaries added each time using += and i changes with each employee info added AKA employeesArray
        } //the '+' sign preceding employeesArray[i] in line 36 forces string entries to become numbers *** you can use parseInt(array[i].index) to achieve the same thing!
        const average = totalSalary / employeesArray.length; //this is the formula for average
        console.log("total salary",totalSalary)
        console.log("average", average);
    return average; //this gives your average
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[index];
    console.log("random employee",randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
