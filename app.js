const app = Vue.createApp({
    //{{}} is used to render variable
    //Hello {{firstName}} will give Hello John
    //We can write html code in template or we can write the same thing in
    //index.html and it will give the same result.
    //template : '<h1>Hello {{firstName}}</h1>',
    //data is afunction which returns a object. Data is not an object
    data(){
        return{
            firstName : "John",
            lastName: 'Doe',
             email: 'johndoe@gmail.com',
            gender: 'male',
             picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods : {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
      
            // console.log(results)
      
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

//Whatever we mount here is included in the div with id "app" 
app.mount('#app')