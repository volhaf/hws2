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
    // если имя пустое - показать ошибку: setError('Ошибка! Введите имя!'),
    // иначе - добавить юзера при помощи addUserCallback и очистить инпут засетав ''
    // проверить на пустоту можно при помощи метода trim(). К примеру: name.trim() !== ''
    // ЕСЛИ НЕ БУДЕТ ПОЛУЧАТЬСЯ, НЕ РАССТРАИВАЙСЯ. НА ЧЕТВЕРТОМ ЗАНЯТИИ ПО ТУДУЛИСТУ НАУЧИМ), НО ВСЕ ТАКИ ПОПЫТАЙСЯ))
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
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName('some name') // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        // все тоже самое, что и в addUser -функция стрелочник
        // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        // и здесь все тоже самое...)
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
