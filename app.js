const database = firebase.database();
const messageRef = database.ref("users"+name);

new Vue({
    el:"#vue-app",
    data:{
        name:'',
        can:0,
        bottle:0,
        point:0
    },
    methods:{
        storeMessage:function(){
            messageRef.child(this.name).update({point:(Number(this.can) * 2) + Number(this.bottle)})
        }
    }
})