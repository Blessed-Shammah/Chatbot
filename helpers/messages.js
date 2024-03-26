// import modules
const dbConfig = require('../dbconfig/db_config')
const mysql = require('mysql2/promise')

// awaitingUsername & pin
const userName= () => {
    return 'Hi, Enter Username and PIN seperated by #'
}

// display menu after succesfull log in
// display menu after succesfull log in
const menuMessage= async () => {
    const connection = await mysql.createConnection(dbConfig);
    const [rows, fields] = await connection.execute('SELECT id, details FROM menu');
    
    // map over the rows and concatenate id and details fields with a new line character
    const menuItems = rows.map(row => row.id + '- ' + row.details).join('\n');
    
    connection.end();
    return `Hi, I am your student assistant. How may I help you today?. ` +
        `Want to explore any of these?\n\n`
        + menuItems
}

// email services
const emailMenu= () => {
    return '1. Email Account Creation\n'
    + '2. Password Reset\n'
    + '3. Sending Bulk Email\n\n'
}

// account creation
const accountCreation= () => {
    return `Service coming soon...\n\n Thank you for you concern. Have a nice time`
}
// reset password
const resetPassword= () => {
    return 'Enter student email to recover password \n\n'
}

// bulk services
const sendBulk= () => {
    return `Service coming soon...\n\n Thank you for you concern. Have a nice time`
}
// e-learning services
const elearningMenu= () => {
    return `Service coming soon...\n\n Thank you for you concern. Have a nice time`
}

// Monitoring Clearance Progress
const clearanceMenu= () => {
    return '1. Monitor Clearance Progress\n'
    + '2. Online Application Progress\n'
    + '3. Online Clearance Application\n\n'
}

// display clearance message
const clearanceMessage= () => {
    return 'Enter Registration Number\n\n'
}

// display application message
const applicationMessage= () => {
    return 'Enter Registration Number\n\n'
}

// exit
const finish= () => {
    return 'Thank you for your concern. Have a nice time. Bye...'
}

// unkown Input
const unknownMessage= () => {
    return `Ooops! I didn't get that, please try another option or possibly contact the System Administrator for help` 
}

  

module.exports = {
    menuMessage,
    emailMenu,
    accountCreation,
    clearanceMenu,
    clearanceMessage,
    applicationMessage,
    elearningMenu,
    unknownMessage,
    userName,
    sendBulk,
    resetPassword,
    finish
}
