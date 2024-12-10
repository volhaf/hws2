import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
} //xType добавляет кастомное свойство для расширения функциональности !!!!!
//Компонент может быть использован как обычная кнопка или с дополнительными стилизованными типами!!!


const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
    + (disabled ? ' ' + s.disabled : '')
    // Если disabled равно true, добавляется класс s.disabled. Перед ним добавляется пробел (' '), чтобы корректно соединить классы.
    //Если disabled равно false, ничего не добавляется.
    + (xType === 'red' && !disabled ? ' ' + s.red : '') 
    //Если xType равно 'red' и кнопка не отключена (!disabled), добавляется класс s.red.
    //Если хотя бы одно из условий не выполнено, ничего не добавляется.
    + (xType === 'secondary' && !disabled ? ' ' + s.secondary : '')
    //Если xType равно 'secondary' и кнопка не отключена, добавляется класс s.secondary
    + (!disabled && !xType ? ' ' + s.default : '')
    //Если кнопка не отключена и xType отсутствует (или равно undefined), добавляется класс s.default.
        
        
        // задачка на смешивание классов

    //ИЛИ ЕСЛИ НЕ ПОНЯТНО С finalClassName  ТОЖЕ САМОЕ ПРИ ПОМОЩИ ШАБЛОННЫХ СТРОК:
    // `${s.СТИЛЬ КНОПКИ}  ${xType==='КРАСНЫЙ' ? ДАВАЙ КРАСНЫЙ СТИЛЬ : xType === 'secondary' ? ДАВАЙ СЕКОНДАРИ СТИЛЬ: ДАВАЙ ПО ДЕФОЛТУ } ${disabled ? ДАВАЙ ДИЗАБЛЕТ СТИЛЬ :  ПУСТУЮ СТРОКУ} `
    // ЭТУ АЛХИМИЯ БУДЕМ ПОДРОБНО РАЗБИРАТЬ НА ДОПАХ

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
