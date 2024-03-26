const { emailMenu,resetPassword, sendBulk, applicationMessage, clearanceMessage, userName, accountCreation, elearningMenu, clearanceMenu,unknownMessage} = require('../helpers/messages');
const {authCredentials, validateEmail, clearanceReport, applicationProgress, applicationReport} = require('../helpers/authenticate');
const actionBasedResponse = async (action) => {
    switch (action) {
        // ask for user_credentials
        case 'studentassistant.USERNAME':
            return userName();

        // authenticate user_credentials
        case 'studentassistant.AUTH':
            return authCredentials();

        // display email menu
        case 'studentassistant.EMAIL':
            return emailMenu();

        // email account creation
        case 'studentassistant.EMAIL.ACCOUNT':
            return accountCreation() ;

        // password reset
        case 'studentassistant.EMAIL.PASSWORD':
            return resetPassword();

        // reset password function
        case 'studentassistant.EMAIL.PASSWORD.RESET':
            return validateEmail();

        // sending bulk email
        case 'studentassistant.EMAIL.BULK':
            return sendBulk();

        // display online application/clearance menu
        case 'studentassistant.CLEARANCE':
            return clearanceMenu();

        // monitor clearance progress
        case 'studentassistant.CLEARANCE.MONITOR':
            return clearanceMessage();
        
        // get clearance report
        case 'studentassistant.CLEARANCE.MONITOR.REPORT':
            return clearanceReport();

        // online application progress
        case 'studentassistant.CLEARANCE.APPLICATION':
            return applicationMessage();

        // get application report
        case 'studentassistant.CLEARANCE.APPLICATION.REPORT':
            return applicationReport();

        // online clearance application
        case 'studentassistant.CLEARANCE.APP_PROGRESS':
            return applicationProgress()

        // display e-learning menu
        case 'studentassistant.E-LEARNING':
            return elearningMenu();
            
        default:
            return unknownMessage();
    }
}

module.exports = {
    actionBasedResponse
};