import axios from "axios";

const EXTERNSHIP_WEBSITE_URL = 'http://localhost:8080'
class Service {
    createUser(user) {
        return axios.post(EXTERNSHIP_WEBSITE_URL + 'users');
    }

    getUser(userId) {
        return axios.get(EXTERNSHIP_WEBSITE_URL + 'users/', userId);
    }

    updateUser(userId) {
        return axios.put(EXTERNSHIP_WEBSITE_URL + 'users/', userId);
    }

    deleteUser(userId) {
        return axios.delete(EXTERNSHIP_WEBSITE_URL + 'users/', userId);
    }

    createSurvey(survey) {
        return axios.post(EXTERNSHIP_WEBSITE_URL + 'surveys/', survey);
    }

    getAllSurveys() {
        return axios.get(EXTERNSHIP_WEBSITE_URL + '/infos');
    }

    getSurvey(surveyId) {
        return axios.get(EXTERNSHIP_WEBSITE_URL + 'results/', surveyId);
    }

    updateSurvey(surveyId) {
        return axios.put(EXTERNSHIP_WEBSITE_URL + 'surveys/', surveyId);
    }

    deleteSurvey(surveyId) {
        return axios.delete(EXTERNSHIP_WEBSITE_URL + 'surveys/', surveyId)
    }
}

export default new Service()