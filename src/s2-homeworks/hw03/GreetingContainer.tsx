import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import { error } from 'console'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string)=> void
}

export const pureAddUser = (
    name: string, 
    setError: (error:string) => void, 
    setName: (error:string) => void, 
    addUserCallback: (name: string) => void) => {
        if(name.trim() === '') {
            setError('Ошибка! Введите имя!')
        } else {
            addUserCallback(name.trim())
            setName('')
        }
}

export const pureOnBlur = (name: any, setError: any) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
}   
}
export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => { 
    if(e.key === 'Enter') {
        addUser()
    }
}
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {

    // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string | null >('')

    const setNameCallback = (e: KeyboardEvent<HTMLInputElement>) => { 
        setName(e.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
