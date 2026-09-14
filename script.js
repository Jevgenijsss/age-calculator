const dateInput = document.getElementById('datepicker')
const submitBtn = document.getElementById('submit-btn')
const result = document.getElementById('result')

const picker = datepicker(dateInput, {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
    },
    maxDate: new Date(),
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const now = luxon.DateTime.now()
    const birthday = luxon.DateTime.fromFormat(dateInput.value, 'M/d/yyyy')

    if (!birthday.isValid) {
        result.textContent = 'Please enter a valid date.'
        return
    }

    const diff = now.diff(birthday,['years', 'months']).toObject()

    result.textContent = `You are ${diff.years} years and ${Math.floor(diff.months)} months old.`
})