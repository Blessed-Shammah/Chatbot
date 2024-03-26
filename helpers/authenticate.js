// import modules
const dbConfig = require('../dbconfig/db_config')
const mysql = require('mysql2/promise')
const {menuMessage} = require('../helpers/messages')

// authenticate function
const authCred = async () => {

    const {userData} = require('../controllers/webhhook_controllers')
    const  credentials = userData.data
    
    // first validate credentials
    const username_pin_pattern = /(.*)#(\d{4})/ // Pattern to extract username and pin
    const matches = credentials.match(username_pin_pattern)

    if (matches) {
        const username = matches[1]
        const pin = matches[2]
        console.log(username)
        // Call function to handle the username and pin
        try {
            console.log('validating credentials...')
            const connection = await mysql.createConnection(dbConfig);
            const query = 'SELECT * FROM users WHERE username = ? AND pin = ?';
            const [rows] = await connection.execute(query, [username, pin]);

            connection.end();

            if (rows.length > 0) {
                // If there is a match in the database, return the corresponding data as a response

                console.log("Login Successful")
                return menuMessage()
                }
    else{
        console.log("Invalid Credentials")
        return 'Invalid Credentials. Please try again'
    }
    } catch (error) {
        return 'Invalid entry. Please enter your username with a four digit pin separated by #'
    }
}
}
// Email Function
const validateEmail= async() => {
    const {userData} = require('../controllers/webhhook_controllers')
    const  email = userData.data
    
    // first validate credentials
    const email_pattern = /^[^\s@]+@student\.kibu\.ac\.ke$/i; // Pattern to extract username and pin
    const matches = email.match(email_pattern)

    if (matches) {
        console.log(email)
        // Call function to handle the email
        try {
            console.log('searching email...')
            const connection = await mysql.createConnection(dbConfig);
            const query = 'SELECT * FROM student_emails WHERE email = ?';
            const [rows] = await connection.execute(query, [email]);

            connection.end();

            if (rows.length > 0) {
                // If there is a match in the database, return the corresponding data as a response
                
                console.log("Email was found")
                return rows.map(row => 'Thank you '+row.surname+' for the details provided. Please use the password " '+row.password+' " to access your email. \n Have a nice time.').join('\n');
                }
    else{
        console.log("Email not found")
        return 'We are sorry we could not find your email. Please check the spellings and try again.';
    }
    } catch (error) {
        console.log(error.message);
        return 'Invalid entry. Please enter your institutional student email'
    
    }
    }

}

// get clearance report
const clearanceReport= async () => {
    const {userData} = require('../controllers/webhhook_controllers')
    const  regno = userData.data
    const regNumberPattern = /^([A-Z]{3})\/\d{4}\/\d{2}$/;
    const matches = regno.match(regNumberPattern)

    if (matches) {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = 'SELECT surname,`level`, `status` FROM `clearance`,student_emails WHERE clearance.reg_no = student_emails.reg_no AND clearance.reg_no  = ?';
        const [rows] = await connection.execute(query, [regno]);

        connection.end();

        if (rows.length > 0) {
            // If there is a match in the database, return the corresponding data as a response
            
            console.log("Registration number was found")
            return rows.map(row => 'Dear '+row.surname+',\n\n Thank you for querying your clearence progress. \n As at now, your clearence records are at the '+ row.level+'`s office and have a status of '+row.status+'.').join('\n');
            }
else{
    console.log("Registration number not found")
    return 'We are sorry we could not find your clearance forms in our databases. Please check the spellings and try again.';
}
} catch (error) {
    console.log(error.message);
    return 'I am sorry I did not get that. Please try again after sometime'

}
}else{
    return 'Please enter a valid registration number.';
}

}

// get application report
const applicationReport= async () => {
    const {userData} = require('../controllers/webhhook_controllers')
    const  regno = userData.data
    const regNumberPattern = /^([A-Z]{3})\/\d{4}\/\d{2}$/;
    const matches = regno.match(regNumberPattern)

    if (matches) {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = 'SELECT surname,`level`, `status` FROM `application`,student_emails WHERE application.reg_no = student_emails.reg_no AND application.reg_no  = ?';
        const [rows] = await connection.execute(query, [regno]);

        connection.end();

        if (rows.length > 0) {
            // If there is a match in the database, return the corresponding data as a response
            
            console.log("Registration number was found")
            return rows.map(row => 'Dear '+row.surname+',\n\n Thank you for querying your application progress. \n As at now, your application records are at the '+ row.level+'`s office and have a status of '+row.status+'.').join('\n');
            }
else{
    console.log("Registration number not found")
    return 'We are sorry we could not find your application forms in our databases. Please check the spellings and try again.';
}
} catch (error) {
    console.log(error.message);
    return 'I am sorry I did not get that. Please try again after sometime'

}
}else{
    return 'Please enter a valid registration number.';
}

}

// get application progress
const applicationProgress= async () => {
    return 'Service coming soon...'
}

async function authCredentials() {
    const test = await authCred();
    return test
  }

module.exports = {
    authCredentials,
    validateEmail,
    clearanceReport,
    applicationReport,
    applicationProgress
}