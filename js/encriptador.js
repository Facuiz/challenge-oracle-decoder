const txtUser = document.getElementById("usertxt")
const txtResult = document.getElementById("usertxt")
const btnEncrypt = document.getElementById("btnEncrypt")
const btnDecrypt = document.getElementById("btnDecrypt")
const result = document.getElementById("result")
const title = document.getElementById("msg1")
const btnCopy = document.getElementById("btnCopy")
const msg2 = document.getElementById("msg2")
const illus = document.getElementById("illus")
const res = document.querySelector(".result")


const regex = /^[a-z0-9\s]+$/
const encriptar = (text) => {
    const texto = text
    let newtext = ''
    if (regex.test(text)) {
        newtext = texto.replace(/e/g, "enter")
        newtext = newtext.replace(/i/g, "imes")
        newtext = newtext.replace(/a/g, "ai")
        newtext = newtext.replace(/o/g, "ober")
        newtext = newtext.replace(/u/g, "ufat")
    }
    return newtext
}

const desencriptar = (text) => {
    const texto = text
    let newtext = ''
    if (regex.test(text)) {
        newtext = texto.replace(/enter/g, "e")
        newtext = newtext.replace(/imes/g, "i")
        newtext = newtext.replace(/ai/g, "a")
        newtext = newtext.replace(/ober/g, "o")
        newtext = newtext.replace(/ufat/g, "u")
    }
    return newtext
}

const showResult = (cant) => {

    if (cant > 0) {
        btnCopy.style.display = "block"
        msg2.style.display = "none"
        illus.style.display = "none"
        result.style.display = "block"
        title.style.display = "none"
        res.style.justifyContent = "space-between"
        txtUser.value = ""
        
    } else {
        illus.style.display = "none"
        msg2.innerHTML = "Error, revisa el texto"
        btnCopy.style.display = "none"
        msg2.style.display = "block"
        title.style.display = "none"
        res.style.justifyContent = "center"
    }
}

btnCopy.addEventListener("click", () => {
    result.select()
    document.execCommand("copy");
  
})

btnEncrypt.addEventListener("click", () => {
    result.value = encriptar(txtUser.value)
    showResult(result.value.length)
})
btnDecrypt.addEventListener("click", () => {

    result.value = desencriptar(txtUser.value)
    showResult(result.value.length)

})