export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    timer: 2000,
    showConfirmButton: false,
  })
}

export const showErrorAlert = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
  })
}

export const showWarningAlert = (message) => {
  Swal.fire({
    icon: 'warning',
    title: 'Warning',
    text: message,
  })
}

export const showConfirmAlert = (message) => {
  return Swal.fire({
    title: 'Estas seguro de eliminar este producto?',
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
  }).then(result => result.isConfirmed)
}