import { useState } from 'react'
import { isValidDateFormat, isValidAmountFormat } from '../utils/helper'

export const useExpenseForm = (expenses, setExpenses) => {
    const [newDescription, setNewDescription] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [errors, setErrors] = useState({
        description: false,
        category: false,
        date: false,
        amount: false,
    })
    const [descriptionError, setDescriptionError] = useState(false)
    const [dateError, setDateError] = useState(false)
    const [amountError, setAmountError] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editingExpenseIndex, setEditingExpenseIndex] = useState(null)

    const handleDescriptionChange = (e) => {
        const value = e.target.value
        setNewDescription(value)
        setDescriptionError(value.length === 0)
    }

    const handleDateChange = (e) => {
        let value = e.target.value.replace(/[^0-9.]/g, '')
        if (value.length === 2 || value.length === 5) {
            if (!value.endsWith('.')) value += '.'
        }
        if (value.length > 10) value = value.slice(0, 10)
        setNewDate(value)
        setDateError(value.length > 0 && !isValidDateFormat(value))
    }

    const handleAmountChange = (e) => {
        let value = e.target.value.replace(/[^0-9\s]/g, '')
        const cleanedValue = value.replace(/\s/g, '')
        const formattedValue = cleanedValue.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ' '
        )
        setNewAmount(formattedValue)
        setAmountError(
            formattedValue.length > 0 && !isValidAmountFormat(formattedValue)
        )
    }

    const handleEditExpense = (index) => {
        const expense = expenses[index]
        setNewDescription(expense.description)
        setNewCategory(expense.category)
        setNewDate(expense.date)
        setNewAmount(expense.amount.replace(' ₽', ''))
        setEditMode(true)
        setEditingExpenseIndex(index)
        setErrors({
            description: false,
            category: false,
            date: false,
            amount: false,
        })
        setDescriptionError(false)
        setDateError(false)
        setAmountError(false)
    }

    const handleAddExpense = () => {
        const newErrors = {
            description: !newDescription,
            category: !newCategory,
            date: !newDate || !isValidDateFormat(newDate),
            amount: !newAmount || !isValidAmountFormat(newAmount),
        }

        setErrors(newErrors)
        setDescriptionError(newErrors.description)
        setDateError(newErrors.date)
        setAmountError(newErrors.amount)

        if (Object.values(newErrors).some(Boolean)) return

        if (editMode) {
            const updatedExpenses = [...expenses]
            updatedExpenses[editingExpenseIndex] = {
                description: newDescription,
                category: newCategory,
                date: newDate,
                amount: `${newAmount} ₽`,
            }
            setExpenses(updatedExpenses)
            setEditMode(false)
            setEditingExpenseIndex(null)
        } else {
            setExpenses([
                ...expenses,
                {
                    description: newDescription,
                    category: newCategory,
                    date: newDate,
                    amount: `${newAmount} ₽`,
                },
            ])
        }

        setNewDescription('')
        setNewCategory('')
        setNewDate('')
        setNewAmount('')
        setErrors({
            description: false,
            category: false,
            date: false,
            amount: false,
        })
        setDescriptionError(false)
        setDateError(false)
        setAmountError(false)
    }

    return {
        newDescription,
        setNewDescription,
        newCategory,
        setNewCategory,
        newDate,
        setNewDate,
        newAmount,
        setNewAmount,
        errors,
        descriptionError,
        dateError,
        amountError,
        editMode,
        editingExpenseIndex,
        handleDescriptionChange,
        handleDateChange,
        handleAmountChange,
        handleEditExpense,
        handleAddExpense,
    }
}
