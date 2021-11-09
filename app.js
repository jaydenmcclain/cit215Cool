Vue.component('counter',{
    data: function(){
        return{
            flipped:false
        }
    },
    props:['pp'],
    template:'<div v-on:click="flipped = !flipped" v-if="true"> {{pp.name}} {{flipped}}</div>',
})

const app = new Vue({
    el:"#app",
    data:{
        username:"",
        email:"",
        warn:"",
        warning:"",
        done:"Not Submitted",
        list:[
            {
                name:"Protagonist",
                codeName: "Joker"
             },
            {
                name: "Anne",
                codeName:"Panther"
            },
            {
                name:"Ryuji",
                codeName:"Skull"
            }
        ]
    },
    methods:{
        validateEmail(){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
            {
                this.warn = '';
            } else{
                this.warn = 'Invalid Email Address';
            }
        }
    },
    watch:{
        username: function(){
            if(this.username.length<2){
                this.warning='This name needs to be atleast 2 characters!'
                this.done='Not Submitted'
            }else{
                this.warning=''
                this.done='Submitted'
            }
        },
        email: function(){
            this.validateEmail(this.email)
        },
    }
})