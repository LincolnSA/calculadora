const calc = () => {
    const numbers = `0123456789`
    const caracters = `()%/*-+.,`
    let display = document.querySelector('.display')

    const handleInsertInput = (value) => {
        display.value += value === "," ? "." : value
    }

    const handleClearInput = () => {
        display.value = ""
    }

    const handleDeleteInput = () => {
        display.value = display.value.slice(0, -1)
    }

    const calculet = () => {
        try {

            const result = eval(display.value)

            if (!result) return
            display.value = String(result)

        } catch (error) {
            alert("Operação inválida!")
        }
    }

    const handleClickBtn = () => {
        document.addEventListener('click', event => {
            let element = event.target

            if (element.classList.contains("btn-num")) {
                handleInsertInput(element.innerHTML)
                return
            }
            if (element.classList.contains("btn-del")) {
                handleClearInput()
                return
            }
            if (element.classList.contains("btn-eq")) {
                calculet()
                return
            }
        })
    }

    const handleKeyPress = () => {
        document.addEventListener('keyup', event => {
            const { key } = event

            if (key === "Backspace") {
                handleDeleteInput()
                return
            }
            if (key === "Escape") {
                handleClearInput()
                return
            }
            if (key === "=" || key === "Enter") {
                calculet()
                return
            }

            if (numbers.includes(key)) {
                handleInsertInput(key)
            }
            if (caracters.includes(key)) {
                handleInsertInput(key)
            }
        })
    }

    handleClickBtn()
    handleKeyPress()
}

calc()