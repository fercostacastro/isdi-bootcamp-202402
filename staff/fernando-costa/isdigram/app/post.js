// post

(function () {
    var form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        console.log('form submit')

        event.preventDefault()

        var imageInput = document.getElementById('image')
        var image = imageInput.value

        var textInput = document.getElementById('text')
        var text = textInput.value

        try {
            logic.createPost(image, text)

            form.reset()

        } catch (error) {
            alert(error.message)
        }
    })
})()