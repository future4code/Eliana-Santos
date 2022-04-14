export function goToHome(history) {
    history('/')
   }
   export function goToDetailsPage(history,id) {
    history(`/movie/${id}`)
   }