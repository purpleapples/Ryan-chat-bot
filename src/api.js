import axios from 'axios';
// axios 설정

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const chatAPI = {
    sendMessage: async (sentence_q) => {
        // javascript에서 formData 만들기
        const form = new FormData();
        form.append("sentence_q", sentence_q);

        const response = await api.post("/user_query", form);
        const response_message = response.data["result"];
        return response_message;
    }
}