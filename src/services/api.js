import axios from 'axios'
import { getToken } from './auth'

const API_URL = 'https://wedev-api.sky.pro/api/transactions'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': '',
    },
})

api.interceptors.request.use((config) => {
    const token = getToken()?.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const getTransactions = async (params = {}) => {
    try {
        const response = await api.get('/', { params })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка загрузки транзакций'
        )
    }
}

export const createTransaction = async (transactionData) => {
    try {
        const response = await api.post('/', {
            ...transactionData,
            date: formatDate(transactionData.date),
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка создания транзакции'
        )
    }
}

export const updateTransaction = async (id, updateData) => {
    try {
        const response = await api.patch(`/${id}`, {
            ...updateData,
            date: formatDate(updateData.date),
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка обновления транзакции'
        )
    }
}

export const deleteTransaction = async (id) => {
    try {
        const response = await api.delete(`/${id}`)
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка удаления транзакции'
        )
    }
}

export const getTransactionsByPeriod = async (start, end) => {
    try {
        const response = await api.post('/period', {
            start: formatDate(start),
            end: formatDate(end),
        })
        return response.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Ошибка получения данных за период'
        )
    }
}

const formatDate = (dateString) => {

  const [day, month, year] = dateString.split('.');
  return `${year}-${month}-${day}`;
};
