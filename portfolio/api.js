import axios from 'axios';

export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/contact', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};
