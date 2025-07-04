import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { alertError, alertSuccess } from './alerts'

const endpointAppointments = "http://localhost:3000/appointment"

const $namePet = document.getElementById('name_pet')
const $namePerson = document.getElementById('name_person')
const $phonePerson = document.getElementById('phone_person')
const $dateCite = document.getElementById('date_cite')
const $timeCite = document.getElementById('time_cite')
const $description = document.getElementById('description')
const $form = document.getElementById('form')

$form.addEventListener("submit", function (event) {
    event.preventDefault()
    createAppointment()
})

//Create a new appointment
async function createAppointment() {

    const newAppointment = {
        namePet: $namePet.value,
        nameOwner: $namePerson.value,
        phone: $phonePerson.value,
        date: $dateCite.value,
        time: $timeCite.value,
        description: $description.value
    }

    try {
        let response = await fetch(endpointAppointments, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAppointment)
        })

        if (!response.ok) {
            alertError("Lo sentimos, vuelve a intentarlo más tarde.")
            throw new Error(response.statusText)
        } else {
            alertSuccess("Tu cita ha sido agendada.")
        }
    } catch (error) {
        console.log(error.message)

    }
}