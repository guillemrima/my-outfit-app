export default function  passwordValidator (userData) {
    const {password,confirmedPassword} = userData

    if ( password === confirmedPassword) return true
    else return false
}
